import { useRef } from "react";
import { ArrowRight, ChevronRight, CheckCircle2, FlaskConical, Droplets, ShieldCheck, Settings } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Exact Global Assets
const formulaHeroBg = "https://d31muh84oxzu1x.cloudfront.net/6e7110d1-4441-4995-9df3-3fede8761b5c.webp";
const cleaningBg = "https://d31muh84oxzu1x.cloudfront.net/9b2bd570-2f1a-4049-8bd3-6eaa9ef6e777.jpg";
const installationBg = "https://d31muh84oxzu1x.cloudfront.net/f538c319-9403-40af-9405-adfff476b5d6.jpg";
const maintenanceBg = "https://d31muh84oxzu1x.cloudfront.net/089bcb3d-4cef-45a7-9ebf-018b32ed7f43.webp";
const bottomCtaBg = "https://d31muh84oxzu1x.cloudfront.net/280ca575-754d-4d15-8266-8b9d671c6426.webp";

const CATEGORIES = [
    {
        title: "CLEANING, PREP & DECONTAMINATION",
        description: "SURFACE PREPARATION SOLUTIONS",
        image: cleaningBg,
        id: "cleaning",
        text: "Engineered to remove contaminants without damaging the surface, ensuring a perfect bond for film applications."
    },
    {
        title: "FILM INSTALLATION",
        description: "OPTIMIZED SPEED & PRECISION",
        image: installationBg,
        id: "installation",
        text: "Slip and tack solutions designed to maximize efficiency and clarity during the installation process."
    },
    {
        title: "PROTECTION & MAINTENANCE",
        description: "LONGEVITY & PERFORMANCE",
        image: maintenanceBg,
        id: "protection",
        text: "Advanced coatings and maintenance sprays formulated to preserve the self-healing and hydrophobic properties of STEK films."
    }
];

export default function FormulaBrand() {
    const prefersReducedMotion = useReducedMotion();
    const introRef = useRef<HTMLElement>(null);
    const introInView = useInView(introRef, { once: true, margin: "-100px" });

    const features = [
        "Laboratory-Grade Surface Prep",
        "Optimized Film Installation Solutions",
        "Advanced Protection & Maintenance",
        "Professional-Grade Concentration",
        "Coating-Safe Formulations"
    ];

    return (
        <div className="bg-black text-white overflow-hidden font-nanumsquare">
            {/* High-Fidelity Hero Section */}
            <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={formulaHeroBg}
                        alt="STEK Formula Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-[65px] leading-[70px] font-black tracking-[-1.3px] mb-6 uppercase">
                            STEK FORMULA
                        </h1>
                        <p className="text-[25px] leading-[40px] font-light tracking-[-0.75px] text-white/90 uppercase mb-12">
                            Advanced Formula for Professional Detailing
                        </p>
                        <Link href="/contact">
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-red-700 text-white border-none px-12 py-8 text-xl rounded-none transition-all duration-300"
                            >
                                Become an Installer
                                <ArrowRight className="h-6 w-6 ml-3" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Section */}
            <section ref={introRef} className="py-32 relative overflow-hidden bg-[#0A0A0A]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                            animate={introInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase leading-tight">
                                SCIENCE BEHIND <br />
                                <span className="text-primary">THE PROTECTION</span>
                            </h2>
                            <p className="text-xl text-white/70 leading-relaxed mb-10 font-normal">
                                STEK FORMULA offers advanced chemical solutions engineered specifically for professional detailers and automotive protection specialists. From surface preparation to post-installation maintenance, our laboratory-grade formulas ensure maximum performance and longevity.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-4 text-white/80 group">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <CheckCircle2 className="h-5 w-5 text-primary" />
                                        </div>
                                        <span className="text-lg font-medium tracking-tight">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative aspect-video rounded-2xl overflow-hidden border border-white/10"
                            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
                            animate={introInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src="https://d31muh84oxzu1x.cloudfront.net/4b76a000-2ab7-4ea4-b801-381979578591.webp"
                                alt="Precision Detailing"
                                className="w-full h-full object-cover grayscale"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* High-Fidelity Product Sections */}
            <section className="bg-black py-[74px] space-y-[74px]">
                {CATEGORIES.map((cat, idx) => (
                    <div key={cat.id}>
                        <Link href={`/brands/formula/${cat.id === 'cleaning' ? 'prep' : cat.id === 'protection' ? 'maintain' : 'install'}`}>
                            <div className="relative w-full h-[70vh] min-h-[600px] overflow-hidden group cursor-pointer">
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={cat.image}
                                        alt={cat.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                                </div>

                                <div className="relative z-10 h-full max-w-7xl mx-auto px-8 md:px-12 flex flex-col justify-center">
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6 }}
                                        viewport={{ once: true }}
                                        className="max-w-3xl"
                                    >
                                        <h5 className="text-[28px] leading-[41px] font-bold text-primary tracking-tight mb-[18px] uppercase">
                                            {cat.description}
                                        </h5>
                                        <h4 className="text-[49px] leading-[70px] font-black tracking-tight mb-[49px] uppercase">
                                            {cat.title}
                                        </h4>
                                        <p className="text-[16px] leading-[25.6px] text-white/80 max-w-xl mb-[23px] font-medium">
                                            {cat.text}
                                        </p>

                                        <div className="w-16 h-16 rounded-full border border-white/40 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 mt-8">
                                            <ArrowRight className="h-8 w-8 text-white" />
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </section>

            {/* Tech Specifications / laboratory focus */}
            <section className="py-32 bg-[#0A0A0A] border-t border-white/5">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">LABORATORY EXCELLENCE</h2>
                        <p className="text-white/50 max-w-2xl mx-auto text-xl italic">
                            "Performance tested under the most rigorous conditions to provide ultimate surface resilience."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: FlaskConical, title: "PH NEUTRAL", info: "Safe for all delicate automotive surfaces and coatings." },
                            { icon: Droplets, title: "HYDROPHOBIC", info: "Engineered to boost and maintain surface water repellency." },
                            { icon: ShieldCheck, title: "UV BARRIER", info: "Protects against oxidative stress and sun-induced degradation." },
                            { icon: Settings, title: "SYSTEMIC", info: "Integrated chemical ecosystems for perfect film compatibility." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 bg-black border border-white/5 rounded-2xl hover:border-primary/50 transition-all duration-300 group">
                                <item.icon className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                                <h4 className="text-xl font-bold mb-4 tracking-wider uppercase">{item.title}</h4>
                                <p className="text-white/60 leading-relaxed font-light">{item.info}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* High-Fidelity Become an Installer CTA */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={bottomCtaBg}
                        alt="Become an Installer"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-12 flex justify-end text-right">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-[45px] leading-tight font-black mb-[20px] uppercase tracking-tighter">
                            Become an Official <br />
                            <span className="text-primary italic">STEK Installer</span>
                        </h2>
                        <div className="flex justify-end mt-12">
                            <Link href="/contact">
                                <Button size="lg" className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-12 py-8 text-2xl font-black rounded-none tracking-tighter uppercase min-w-[270px] transition-all">
                                    Join the Network
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
