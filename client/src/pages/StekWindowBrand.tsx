import { Link } from "wouter";
import { useRef, useState } from "react";
import { ArrowRight, Shield, Sparkles, Layers, Eye, Zap, CheckCircle2, ChevronRight, Thermometer, Sun } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BRANDS } from "@/lib/constants";

const windowHeroBg = "https://d31muh84oxzu1x.cloudfront.net/2a110ca7-e6c4-4876-ac7b-0001a4c09f1b.webp";
const techShowcaseImg = "https://d31muh84oxzu1x.cloudfront.net/541f617c-c1a9-4d10-9fe6-2bf435d83dde.webp";

type BrandSeries = {
    id: string;
    name: string;
    tagline: string;
    slug?: string;
    image?: string;
};

export default function StekWindowBrand() {
    const prefersReducedMotion = useReducedMotion();
    const brand = BRANDS.find(b => b.slug === "stek");
    const series = (brand?.series || []) as BrandSeries[];
    const [activeSeries, setActiveSeries] = useState(series[0]?.id || "nex");

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
                        src={windowHeroBg}
                        alt="STEK Window Film Hero"
                        className="w-full h-full object-cover scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-[#050505]" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-6">
                            STEK PREMIUM WINDOW FILM
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-400 drop-shadow-[0_0_30px_rgba(59,130,246,0.4)] uppercase">
                            REVOLUTIONIZING WINDOW TECHNOLOGY
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100/80 mb-10 max-w-3xl mx-auto leading-relaxed italic">
                            "Unleash Innovation, Embrace Protection"
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Button
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 text-white border-none px-10 py-7 text-xl rounded-full shadow-lg shadow-blue-500/20"
                                onClick={() => document.getElementById('optically-clear')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Explore Collection
                                <ArrowRight className="h-5 w-5 ml-2" />
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Accents */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
                    <div className="w-1 h-12 rounded-full bg-gradient-to-b from-blue-500 to-transparent" />
                </div>
            </section>

            {/* Optically Clear Solution Intro */}
            <section id="optically-clear" ref={introRef} className="py-24 relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={prefersReducedMotion ? {} : { opacity: 0, x: -50 }}
                            animate={introInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
                                The Optically <span className="text-blue-500">Clear Solution</span>
                            </h2>
                            <p className="text-xl text-white/70 leading-relaxed mb-8">
                                STEK Window Film revolutionizes window technology — combining protection and style with world-class performance and superior comfort.
                            </p>
                            <p className="text-lg text-white/50 mb-10">
                                Experience exceptional heat rejection, glare reduction, and UV protection for a comfortable driving experience while providing privacy and style.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                {(brand?.features || []).map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-white/80">
                                        <CheckCircle2 className="h-5 w-5 text-blue-500" />
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
                            <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-2xl" />
                            <img
                                src={techShowcaseImg}
                                alt="STEK Technology Showcase"
                                className="relative rounded-2xl shadow-2xl border border-white/10"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Interactive Product Series */}
            <section ref={seriesRef} className="py-24 bg-gradient-to-b from-transparent to-blue-900/10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-6">WINDOW FILM SERIES</h2>
                        <p className="text-white/60 max-w-2xl mx-auto">
                            From nano-ceramic to graphene-infused, our films deliver professional results and unparalleled comfort for every vehicle.
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
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                                        : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    <span className="font-bold tracking-[0.2em] uppercase">{item.name}</span>
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
                                                src={selectedSeries?.image || windowHeroBg}
                                                alt={selectedSeries?.name}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                            <div className="absolute bottom-6 left-6 right-6">
                                                <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-wide">
                                                    {selectedSeries?.name} SERIES
                                                </h3>
                                                <p className="text-blue-300 font-medium">
                                                    {selectedSeries?.tagline}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="p-8 flex-grow flex flex-col justify-between">
                                            <div className="flex flex-wrap gap-4 mb-8">
                                                <span className="inline-flex items-center px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-white/80">
                                                    <Thermometer className="h-4 w-4 mr-2 text-blue-500" />
                                                    High Heat Rejection
                                                </span>
                                                <span className="inline-flex items-center px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-white/80">
                                                    <Sun className="h-4 w-4 mr-2 text-blue-500" />
                                                    99% UV Protection
                                                </span>
                                                <span className="inline-flex items-center px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-white/80">
                                                    <Eye className="h-4 w-4 mr-2 text-blue-500" />
                                                    Optimized Clarity
                                                </span>
                                                <span className="inline-flex items-center px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-white/80">
                                                    <Sparkles className="h-4 w-4 mr-2 text-blue-500" />
                                                    Premium Finish
                                                </span>
                                            </div>
                                            <Link href={`/products/window-film/${selectedSeries?.slug || 'nex'}`}>
                                                <div className="w-full bg-white text-black hover:bg-blue-600 hover:text-white transition-all font-bold group py-4 text-center text-xl rounded-xl cursor-pointer flex items-center justify-center">
                                                    LEARN MORE
                                                    <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </Link>
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
                <div className="absolute inset-0 bg-blue-600/5 backdrop-blur-3xl" />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-black mb-8 italic tracking-tighter">
                            ELEVATE YOUR <span className="text-blue-500 underline decoration-blue-500/30 font-black italic">DRIVE</span>
                        </h2>
                        <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Experience the convergence of performance and style with STEK Window Film. Protect your interior and transform your vehicle today.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8">
                            <Link href="/contact">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-8 text-2xl font-black rounded-full shadow-[0_0_40px_rgba(59,130,246,0.3)] tracking-tighter italic">
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
