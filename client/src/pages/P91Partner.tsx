import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";
import { P91Studio } from "@/components/P91Studio";

const PAGE_TITLE = "P91 Car Care — Our Own Studio in Bengaluru | STEK India";
const PAGE_DESCRIPTION =
    "STEK India is the authorized STEK distributor. P91 Car Care is our own Bengaluru studio for paint protection film, ceramic coating, detailing and sun control film.";
const CANONICAL_URL = "https://stek-india.in/partnership/p91carcare";

export default function P91Partner() {
    useEffect(() => {
        const prevTitle = document.title;
        const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
        const prevDescription = meta?.getAttribute("content") ?? null;
        const canonical = document.createElement("link");
        canonical.rel = "canonical";
        canonical.href = CANONICAL_URL;
        document.title = PAGE_TITLE;
        meta?.setAttribute("content", PAGE_DESCRIPTION);
        document.head.appendChild(canonical);
        return () => {
            document.title = prevTitle;
            if (meta && prevDescription !== null) meta.setAttribute("content", prevDescription);
            canonical.remove();
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white pt-24">
            <div className="container px-6 pb-24">
                <Link href="/partnerships" className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors pt-8">
                    <ChevronLeft className="h-4 w-4" /> Partnerships
                </Link>
                <P91Studio />
            </div>
        </div>
    );
}
