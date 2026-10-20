import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Phone, Shield, Sparkles, Droplets, Sun, Wrench } from "lucide-react";
import { P91_URL } from "@/lib/constants";

const services = [
    {
        title: "Paint Protection Film",
        description: "Self-healing, gloss-retaining PPF installed by trained technicians.",
        icon: Shield,
        href: "/services/paint-protection-film-bangalore",
    },
    {
        title: "Ceramic Coating",
        description: "Long-lasting hydrophobic coatings for cars and bikes.",
        icon: Sparkles,
        href: "/services/ceramic-coating-bangalore",
    },
    {
        title: "Detailing",
        description: "Interior rejuvenation and exterior detailing, including hard-water stain removal.",
        icon: Droplets,
        href: "/services",
    },
    {
        title: "Glass & Sun Control Film",
        description: "Heat-rejecting window films for comfort and UV protection.",
        icon: Sun,
        href: "/services/glass-sun-control-film-bangalore",
    },
    {
        title: "Care Packages",
        description: "Premium car wash and annual maintenance packages.",
        icon: Wrench,
        href: "/service/annual-maintenance-package",
    },
];

const PAGE_TITLE = "P91 Car Care — Our Bengaluru Studio | STEK India";
const PAGE_DESCRIPTION =
    "STEK India is the authorized STEK distributor. P91 Car Care is our own Bengaluru studio for paint protection film, ceramic coating, detailing and sun control film.";

const CANONICAL_URL = "https://stek-india.in/partner/p91carcare";

export default function P91CarCare() {
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
        <div className="min-h-screen bg-white text-zinc-900">
            <section className="relative flex items-center justify-center overflow-hidden pt-48 pb-32">
                <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/videos/p91-hero.mp4"
                    poster="/videos/p91-hero-poster.webp"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/60" />
                <div className="container relative z-10 px-6 text-center max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-primary mb-6">
                            Our Studio
                        </span>
                        <h1 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">P91 Car Care</h1>
                        <p className="text-white/90 text-lg leading-relaxed mb-10">
                            STEK India is the authorized distributor of STEK in India. Alongside distribution, we run our own
                            car care studio in Bengaluru — P91 Car Care — where we install and maintain the films and coatings we supply.
                        </p>
                        <a
                            href={P91_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 text-xs font-black uppercase tracking-widest hover:opacity-90 transition-opacity"
                            data-testid="link-p91-website"
                        >
                            Visit P91 Car Care <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </motion.div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-24 max-w-6xl">
                <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-10">Services at P91 Car Care</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s) => (
                        <a
                            key={s.title}
                            href={`${P91_URL}${s.href}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group border border-zinc-200 bg-zinc-50 p-8 hover:border-primary transition-colors"
                        >
                            <s.icon className="h-6 w-6 text-primary mb-6" />
                            <h3 className="font-black uppercase tracking-wide mb-3 flex items-center gap-2">
                                {s.title}
                                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h3>
                            <p className="text-sm text-zinc-600 leading-relaxed">{s.description}</p>
                        </a>
                    ))}
                </div>
            </section>

            <section className="border-t border-zinc-200 bg-zinc-50 py-16">
                <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row gap-8 md:items-center md:justify-between text-sm text-zinc-600">
                    <p className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary shrink-0" />
                        49, 13th Cross, Ayappa Garden, Adugodi, Bengaluru 560030
                    </p>
                    <a href="tel:+917406619191" className="flex items-center gap-3 hover:text-primary transition-colors">
                        <Phone className="h-5 w-5 text-primary" /> +91 74066 19191
                    </a>
                </div>
            </section>
        </div>
    );
}
