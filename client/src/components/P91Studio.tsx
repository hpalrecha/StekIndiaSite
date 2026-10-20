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

export function P91Studio() {
    return (
        <div id="our-own-studio" className="mt-24 scroll-mt-28">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-12"
            >
                <div className="h-px bg-red-600 flex-grow max-w-[60px]" />
                <h2 className="text-2xl font-black tracking-tight italic uppercase">Our Own Studio</h2>
            </motion.div>

            <div className="relative overflow-hidden rounded-lg border border-white/5">
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
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
                <div className="relative z-10 px-6 py-20 md:py-28 text-center max-w-3xl mx-auto">
                    <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight italic mb-6">P91 Car Care</h3>
                    <p className="text-white/90 text-lg leading-relaxed mb-10">
                        STEK India is the authorized distributor of STEK in India. Alongside distribution, we run our own
                        car care studio in Bengaluru — P91 Car Care — where we install and maintain the films and coatings we supply.
                    </p>
                    <a
                        href={P91_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-red-700 transition-colors"
                        data-testid="link-p91-website"
                    >
                        Visit P91 Car Care <ArrowUpRight className="h-4 w-4" />
                    </a>
                </div>
            </div>

            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40 mt-16 mb-8">Services at P91 Car Care</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((s) => (
                    <a
                        key={s.title}
                        href={`${P91_URL}${s.href}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-black border border-white/5 p-8 hover:border-red-600/50 transition-colors rounded-lg"
                    >
                        <s.icon className="h-6 w-6 text-red-600 mb-6" />
                        <h4 className="font-bold italic mb-3 flex items-center gap-2 group-hover:text-red-500 transition-colors">
                            {s.title}
                            <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h4>
                        <p className="text-sm text-gray-400 font-light leading-relaxed">{s.description}</p>
                    </a>
                ))}
            </div>

            <div className="mt-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between text-sm text-gray-400">
                <p className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-red-600 shrink-0" />
                    49, 13th Cross, Ayappa Garden, Adugodi, Bengaluru 560030
                </p>
                <a href="tel:+917406619191" className="flex items-center gap-3 hover:text-white transition-colors">
                    <Phone className="h-5 w-5 text-red-600" /> +91 74066 19191
                </a>
            </div>
        </div>
    );
}
