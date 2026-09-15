import { useParams, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useLayoutEffect, useState } from "react";
import { CheckCircle, XCircle, Loader2, Shield, Search, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { COMPANY_INFO } from "@/lib/constants";

/**
 * Public warranty verification for STEK-branded warranties.
 *
 * Warranties are registered and stored in P91 Elite; STEK-branded ones carry a
 * QR pointing at stek-india.in/verify/<code> (see P91Elite
 * `api-server/src/services/verify-url.ts`). This page resolves that code via
 * our own `/api/verify/:code` proxy, which forwards to P91's public endpoint —
 * mirroring P91's verify page, in STEK livery.
 */

interface PublicWarranty {
  warrantyCode: string;
  name: string;
  installer: string;
  storeName?: string | null;
  storeLocation?: string | null;
  vehicleMake?: string | null;
  vehicleModel?: string | null;
  vehicleVIN?: string | null;
  vehicleYear?: string | null;
  productType: string;
  serialNumber?: string | null;
  installationDate: string;
  expiryDate?: string | null;
  status: string;
}

function formatDate(dateStr: string | null | undefined): string {
  if (!dateStr) return "N/A";
  try {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

/** Fallback when the record carries no explicit expiry: install date + 5 years. */
function computeExpiry(installationDate: string): string {
  try {
    const d = new Date(installationDate);
    d.setFullYear(d.getFullYear() + 5);
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
  } catch {
    return "N/A";
  }
}

export default function Verify() {
  const params = useParams<{ code: string }>();
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const urlCode = (params.code || "").trim();
  const [inputValue, setInputValue] = useState(urlCode);
  const [activeCode, setActiveCode] = useState(urlCode);
  const [downloading, setDownloading] = useState(false);

  useLayoutEffect(() => {
    if (urlCode) {
      const normalized = urlCode.trim().toUpperCase();
      setActiveCode(normalized);
      setInputValue(normalized);
    }
  }, [urlCode]);

  const { data: response, isLoading } = useQuery<{
    success: boolean;
    data?: PublicWarranty;
    message?: string;
  }>({
    queryKey: ["/api/verify", activeCode],
    queryFn: async () => {
      const res = await fetch(`/api/verify/${encodeURIComponent(activeCode)}`);
      return res.json();
    },
    enabled: !!activeCode,
    retry: false,
  });

  const warranty = response?.success ? response.data : null;
  const notFound = !!activeCode && !isLoading && !warranty;

  const expiryDisplay = warranty
    ? warranty.expiryDate
      ? formatDate(warranty.expiryDate)
      : computeExpiry(warranty.installationDate)
    : "";

  function handleCheck(e: React.FormEvent) {
    e.preventDefault();
    const code = inputValue.trim().toUpperCase();
    if (!code) return;
    setActiveCode(code);
    setInputValue(code);
    setLocation(`/verify/${encodeURIComponent(code)}`);
  }

  /**
   * Draws the certificate with jsPDF primitives rather than rasterising the DOM.
   * html2canvas 1.4.1 throws on CSS colour functions it doesn't know, and a
   * screenshot would embed a bitmap; drawing directly keeps the text vector,
   * the file small, and the output independent of page styling.
   */
  async function downloadPDF() {
    if (!warranty) return;
    setDownloading(true);
    try {
      const { jsPDF } = await import("jspdf");
      const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

      const PAGE_W = 210;
      const PAGE_H = 297;
      const M = 18;
      const COL_W = (PAGE_W - M * 2) / 2 - 4;

      const red = () => doc.setTextColor(161, 38, 38);
      const white = () => doc.setTextColor(255, 255, 255);
      const muted = () => doc.setTextColor(145, 145, 145);

      doc.setFillColor(10, 10, 10);
      doc.rect(0, 0, PAGE_W, PAGE_H, "F");

      // Header
      red();
      doc.setFont("helvetica", "bold").setFontSize(9);
      doc.text("STEK INDIA", M, 26);
      white();
      doc.setFont("helvetica", "bolditalic").setFontSize(22);
      doc.text("WARRANTY CERTIFICATE", M, 37);

      muted();
      doc.setFont("helvetica", "bold").setFontSize(7.5);
      doc.text("WARRANTY ID", PAGE_W - M, 26, { align: "right" });
      red();
      doc.setFont("courier", "bold").setFontSize(12);
      doc.text(warranty.warrantyCode, PAGE_W - M, 33, { align: "right" });

      doc.setDrawColor(55, 55, 55).setLineWidth(0.3);
      doc.line(M, 44, PAGE_W - M, 44);

      // Status
      red();
      doc.setFont("helvetica", "bold").setFontSize(11);
      doc.text("WARRANTY VERIFIED - ACTIVE", M, 55);
      muted();
      doc.setFont("helvetica", "normal").setFontSize(9.5);
      doc.text(`Valid till ${expiryDisplay}`, M, 61);

      // Detail grid
      const fields: Array<[string, string]> = [
        ["Customer", warranty.name],
        [
          "Vehicle",
          [warranty.vehicleMake, warranty.vehicleModel, warranty.vehicleYear]
            .filter(Boolean)
            .join(" ") || "N/A",
        ],
        ["Product Installed", warranty.productType],
        ["VIN / Registration", warranty.vehicleVIN || "N/A"],
        ["Studio / Installer", warranty.storeName || warranty.installer || "N/A"],
        ["Location", warranty.storeLocation || "N/A"],
        ["Installed On", formatDate(warranty.installationDate)],
        ["Valid Till", expiryDisplay],
      ];

      let rowTop = 76;
      for (let i = 0; i < fields.length; i += 2) {
        let rowHeight = 0;

        const pair = [fields[i], fields[i + 1]];
        for (let col = 0; col < pair.length; col++) {
          const entry = pair[col];
          if (!entry) continue;
          const [label, value] = entry;
          const x = M + col * (COL_W + 8);

          muted();
          doc.setFont("helvetica", "bold").setFontSize(7);
          doc.text(label.toUpperCase(), x, rowTop);

          white();
          doc.setFont("helvetica", "bold").setFontSize(10.5);
          const lines = doc.splitTextToSize(value, COL_W) as string[];
          doc.text(lines, x, rowTop + 6);

          rowHeight = Math.max(rowHeight, 6 + lines.length * 5);
        }

        rowTop += rowHeight + 8;
      }

      // Footer
      doc.setDrawColor(55, 55, 55).setLineWidth(0.3);
      doc.line(M, PAGE_H - 34, PAGE_W - M, PAGE_H - 34);
      muted();
      doc.setFont("helvetica", "normal").setFontSize(7.5);
      doc.text(
        "ELECTRONICALLY GENERATED WARRANTY - NO PHYSICAL SIGNATURE REQUIRED",
        PAGE_W / 2,
        PAGE_H - 26,
        { align: "center" }
      );
      doc.text(
        `${COMPANY_INFO.email}  |  ${COMPANY_INFO.phone}  |  ${COMPANY_INFO.website}`,
        PAGE_W / 2,
        PAGE_H - 20,
        { align: "center" }
      );

      doc.save(`STEK-Warranty-${warranty.warrantyCode}.pdf`);
    } catch (err) {
      console.error("PDF error:", err);
      toast({
        title: "Download failed",
        description: "Could not generate the PDF. Please try again.",
        variant: "destructive",
      });
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between border-b border-white/10 bg-black/40 px-6 py-4 backdrop-blur md:px-8">
        <a href="/" data-testid="link-logo">
          <img src="/logo-light.png" alt="STEK INDIA" className="h-[22px] w-auto md:h-7" />
        </a>
        <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-primary">
          <Shield size={15} />
          Warranty Verification
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-8 pt-16 text-center sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-60" />
        <div className="relative z-10">
          <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">
            STEK India · Authentic Warranty Check
          </h4>
          <h1 className="mt-4 text-4xl font-black uppercase italic tracking-tighter md:text-6xl">
            Verify Your <span className="text-primary">Warranty</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/50">
            Enter your warranty ID below to instantly confirm its authenticity and view your
            warranty details.
          </p>
        </div>
      </section>

      {/* Search */}
      <div className="flex justify-center px-4 pb-12 sm:px-6">
        <form
          onSubmit={handleCheck}
          className="flex w-full max-w-xl gap-2 rounded-xl border border-primary/25 bg-white/5 p-2.5"
        >
          <label htmlFor="warranty-code" className="sr-only">
            Warranty ID
          </label>
          <input
            id="warranty-code"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="e.g. P91-MO0304XXXX"
            className="flex-1 bg-transparent px-4 py-2.5 text-[15px] tracking-wide text-white outline-none placeholder:text-white/30"
            data-testid="input-warranty-code"
          />
          <button
            type="submit"
            className="flex shrink-0 items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-[13px] font-black uppercase tracking-widest text-white transition-colors hover:bg-primary/90"
            data-testid="button-check"
          >
            <Search size={15} />
            Check
          </button>
        </form>
      </div>

      {/* Result */}
      <div className="flex flex-col items-center gap-8 px-4 pb-20 sm:px-6">
        {isLoading && (
          <div className="flex flex-col items-center gap-4">
            <Loader2 size={40} className="animate-spin text-primary" />
            <p className="text-sm font-black uppercase tracking-[0.1em] text-white/60">Verifying…</p>
          </div>
        )}

        {notFound && (
          <div
            className="flex w-full max-w-md flex-col items-center gap-4 rounded-2xl border border-primary/30 bg-white/5 px-10 py-11 text-center"
            data-testid="status-invalid"
          >
            <XCircle size={52} className="text-primary" />
            <div>
              <h2 className="text-xl font-black uppercase tracking-tight">Invalid Warranty</h2>
              <p className="mt-2.5 text-sm leading-relaxed text-white/55">
                No active warranty found for this ID. Please double-check the code or contact your
                installer.
              </p>
            </div>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="text-[13px] font-semibold text-primary hover:underline"
            >
              {COMPANY_INFO.email}
            </a>
          </div>
        )}

        {!isLoading && warranty && (
          <>
            {/* Valid banner */}
            <div
              className="flex w-full max-w-2xl items-center gap-3 rounded-xl border border-primary/35 bg-primary/10 px-7 py-3.5"
              data-testid="status-valid"
            >
              <CheckCircle size={28} strokeWidth={2.5} className="shrink-0 text-primary" />
              <div>
                <div className="text-[15px] font-black uppercase tracking-tight text-primary">
                  Warranty Verified — Active
                </div>
                <div className="mt-0.5 text-[13px] text-white/70">
                  Your warranty is valid till{" "}
                  <strong className="text-white">{expiryDisplay}</strong>
                </div>
              </div>
            </div>

            {/* Warranty card */}
            <div
              className="w-full max-w-2xl rounded-2xl border border-white/10 bg-neutral-950 p-8"
              data-testid="card-warranty"
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.25em] text-primary">
                    STEK India
                  </div>
                  <div className="mt-1 text-xl font-black uppercase italic tracking-tighter">
                    Warranty Certificate
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">
                    Warranty ID
                  </div>
                  <div className="mt-1 font-mono text-sm font-bold tracking-wider text-primary">
                    {warranty.warrantyCode}
                  </div>
                </div>
              </div>

              <dl className="grid grid-cols-1 gap-x-8 gap-y-5 pt-6 sm:grid-cols-2">
                {[
                  { label: "Customer", value: warranty.name },
                  {
                    label: "Vehicle",
                    value:
                      [warranty.vehicleMake, warranty.vehicleModel, warranty.vehicleYear]
                        .filter(Boolean)
                        .join(" ") || "N/A",
                  },
                  { label: "Product Installed", value: warranty.productType },
                  { label: "VIN / Registration", value: warranty.vehicleVIN || "N/A" },
                  { label: "Studio / Installer", value: warranty.storeName || warranty.installer || "N/A" },
                  { label: "Location", value: warranty.storeLocation || "N/A" },
                  { label: "Installed On", value: formatDate(warranty.installationDate) },
                  { label: "Valid Till", value: expiryDisplay },
                ].map((item) => (
                  <div key={item.label}>
                    <dt className="text-[9px] font-black uppercase tracking-[0.18em] text-white/40">
                      {item.label}
                    </dt>
                    <dd className="mt-1.5 text-sm font-semibold text-white">{item.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-7 border-t border-white/10 pt-5 text-center text-[10px] uppercase tracking-[0.1em] text-white/30">
                Electronically Generated Warranty — No Physical Signature Required
              </p>
            </div>

            {/* Download */}
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={downloadPDF}
                disabled={downloading}
                className="inline-flex items-center gap-2.5 rounded-lg bg-primary px-9 py-3.5 text-[15px] font-black tracking-wide text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
                data-testid="button-download-pdf"
              >
                {downloading ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <Download size={18} />
                )}
                {downloading ? "Generating PDF…" : "Download Warranty Card (PDF)"}
              </button>
              <span className="text-[11px] text-white/30">Downloads an A4 warranty certificate</span>
            </div>
          </>
        )}

        {!activeCode && (
          <div className="text-center opacity-30">
            <Shield size={64} strokeWidth={1} className="mx-auto text-primary" />
            <p className="mt-4 text-[13px] font-black uppercase tracking-[0.12em] text-white/50">
              Enter a warranty code above
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 py-6 text-center text-[11px] tracking-wide text-white/30">
        <div className="mb-1.5 text-sm font-black uppercase text-primary">STEK INDIA</div>
        {COMPANY_INFO.email} · {COMPANY_INFO.phone} · {COMPANY_INFO.website}
        <br />
        <span className="text-white/20">
          © {new Date().getFullYear()} STEK AUTOMOTIVE. STEK INDIA IS AN AUTHORIZED DISTRIBUTOR.
        </span>
      </footer>
    </div>
  );
}
