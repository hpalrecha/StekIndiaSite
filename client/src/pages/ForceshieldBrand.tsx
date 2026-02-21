import { Link } from "wouter";
import { useRef, useState } from "react";
import { ArrowRight, Shield, Sparkles, Layers, Eye, Zap, CheckCircle2, ChevronRight } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard, ProductGrid, FeatureCard } from "@/components/ui/animated-card";
import { BRANDS } from "@/lib/constants";

const forceshieldHeroBg = "/images/forceshield_hero_bg.png";
const forceshieldFeaturedCar = "/images/forceshield_featured_car.png";

type BrandSeries = {
    id: string;
    name: string;
    tagline: string;
    slug?: string;
    image?: string;
};

export default function ForceshieldBrand() {
    const prefersReducedMotion = useReducedMotion();
    const brand = BRANDS.find(b => b.slug === "forceshield");
    const series = (brand?.series || []) as BrandSeries[];
    const [activeSeries, setActiveSeries] = useState(series[0]?.id || "f7-clear");

    const introRef = useRef<HTMLElement>(null);
    const introInView = useInView(introRef, { once: true, margin: "-100px" });

    const seriesRef = useRef<HTMLElement>(null);
    const seriesInView = useInView(seriesRef, { once: true, margin: "-100px" });

    const selectedSeries = series.find(s => s.id === activeSeries);

    return (
        <div className="bg-[#050505] text-white overflow-hidden">
            {/* Cinematic Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={forceshieldHeroBg}
                        alt="Forceshield Background"
                        className="w-full h-full object-cover scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-400 text-sm font-semibold tracking-wider uppercase mb-6">
                            STEK STYLISH PPF
                        </span>
                        <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-400 drop-shadow-[0_0_30px_rgba(168,85,247,0.4)] uppercase">
                            FORCESHIELD
                        </h1>
                        <p className="text-xl md:text-2xl text-purple-100/80 mb-10 max-w-2xl mx-auto leading-relaxed italic">
                            "Beyond Protection"
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Button
                                size="lg"
                                className="bg-purple-600 hover:bg-purple-700 text-white border-none px-10 py-7 text-xl rounded-full shadow-lg shadow-purple-500/20"
                                onClick={() => document.getElementById('beyond-protection')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Explore Collection
                                <ArrowRight className="h-5 w-5 ml-2" />
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Accents */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
                    <div className="w-1 h-12 rounded-full bg-gradient-to-b from-purple-500 to-transparent" />
                </div>
            </section>

            {/* Beyond Protection Intro */}
            <section id="beyond-protection" ref={introRef} className="py-24 relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={prefersReducedMotion ? {} : { opacity: 0, x: -50 }}
                            animate={introInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
                                Beyond <span className="text-purple-500">Protection</span>
                            </h2>
                            <p className="text-xl text-white/70 leading-relaxed mb-8">
                                FORCESHIELD is a paint protection film series that transforms conventional car wraps by combining cutting-edge protection with bold, stylish designs.
                            </p>
                            <p className="text-lg text-white/50 mb-10">
                                Wrap and protect your vehicle in style with our unique purple metallic finishes and specialized textures designed for the discerning enthusiast.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                {(brand?.features || []).map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-white/80">
                                        <CheckCircle2 className="h-5 w-5 text-purple-500" />
                                        <span className="text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative"
                            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
                            animate={introInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="absolute -inset-4 bg-purple-500/20 rounded-3xl blur-2xl" />
                            <img
                                src={forceshieldFeaturedCar}
                                alt="Purple Wrapped Audi R8"
                                className="relative rounded-2xl shadow-2xl border border-white/10"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Interactive Product Series */}
            <section ref={seriesRef} className="py-24 bg-gradient-to-b from-transparent to-purple-900/10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-6">PRODUCT SERIES</h2>
                        <p className="text-white/60 max-w-2xl mx-auto">
                            A comprehensive range of stylized protection films for every preference, from ultimate clarity to bold mirror-like finishes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Series Sidebar */}
                        <div className="lg:col-span-4 flex flex-col gap-2">
                            {series.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveSeries(item.id)}
                                    className={`flex items-center justify-between p-5 rounded-xl transition-all duration-300 text-left group ${activeSeries === item.id
                                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20'
                                        : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    <span className="font-bold tracking-wide uppercase">{item.name}</span>
                                    {activeSeries === item.id && <ChevronRight className="h-5 w-5" />}
                                </button>
                            ))}
                        </div>

                        {/* Main Showcase */}
                        <div className="lg:col-span-8">
                            <motion.div
                                key={activeSeries}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="h-full"
                            >
                                <Card className="bg-white/5 border-white/10 h-full overflow-hidden">
                                    <CardContent className="p-0 flex flex-col h-full">
                                        <div className="relative aspect-video">
                                            <img
                                                src={selectedSeries?.image || forceshieldFeaturedCar}
                                                alt={selectedSeries?.name}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                            <div className="absolute bottom-6 left-6 right-6">
                                                <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-wide">
                                                    {selectedSeries?.name}
                                                </h3>
                                                <p className="text-purple-300 font-medium">
                                                    {selectedSeries?.tagline}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="p-8 flex-grow flex flex-col justify-between">
                                            <div className="flex flex-wrap gap-4 mb-8">
                                                {(brand?.features || []).slice(0, 4).map((f) => (
                                                    <span key={f} className="inline-flex items-center px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-white/80">
                                                        <CheckCircle2 className="h-4 w-4 mr-2 text-purple-500" />
                                                        {f}
                                                    </span>
                                                ))}
                                            </div>

                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-600/5 backdrop-blur-3xl" />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-black mb-8 italic tracking-tighter">
                            READY TO <span className="text-purple-500 underline decoration-purple-500/30 font-black italic">LEVEL UP?</span>
                        </h2>
                        <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Experience the convergence of performance and style with FORCESHIELD by STEK. Transform your vehicle today.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8">
                            <Link href="/contact">
                                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-8 text-2xl font-black rounded-full shadow-[0_0_40px_rgba(168,85,247,0.3)] tracking-tighter italic">
                                    LOCATE DEALER
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
