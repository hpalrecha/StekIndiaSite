import { motion } from "framer-motion";
import { Leaf, Recycle, Factory, Globe, Zap, ArrowRight } from "lucide-react";

const sustainabilityFeatures = [
    {
        title: "Eco-Friendly Products",
        description: "We develop advanced film technologies that reduce carbon emissions and waste. Our proprietary topcoats are engineered for exceptional durability, minimizing the need for frequent replacements.",
        icon: Leaf,
        color: "text-green-500"
    },
    {
        title: "Innovation for Longevity",
        description: "Our self-healing and hydrophobic technologies extend the life of automotive surfaces. By preserving vehicles in pristine condition longer, we contribute to reduced consumption and waste.",
        icon: Zap,
        color: "text-yellow-500"
    },
    {
        title: "Responsible Manufacturing",
        description: "We maintain stringent control over our manufacturing processes in our specialized factories to ensure top-notch quality and compliance with global environmental standards.",
        icon: Factory,
        color: "text-blue-500"
    },
    {
        title: "Social Impact",
        description: "Beyond our products, we are committed to making a long-lasting social impact through local community support and donations, creating a better world for everyone.",
        icon: Globe,
        color: "text-red-500"
    }
];

export default function Sustainability() {
    return (
        <div className="min-h-screen bg-black text-white pt-24">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?q=80&w=2070')] bg-cover bg-center opacity-30 grayscale saturate-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />

                <div className="container relative z-10 px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="max-w-4xl"
                    >
                        <span className="text-red-600 font-bold tracking-[0.4em] uppercase text-xs mb-6 block">
                            Environmental Responsibility
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] italic">
                            A COMMITMENT TO<br /><span className="text-red-600">OUR FUTURE</span>
                        </h1>
                        <p className="max-w-2xl text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                            At STEK, sustainability isn't just a vision—it's how we operate. We protect the world's finest vehicles while safeguarding our planet for generations to come.
                        </p>
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
            </section>

            {/* Philosophy Section */}
            <section className="py-32 relative">
                <div className="container px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-8 italic uppercase leading-none">
                                Innovation with<br />Purpose
                            </h2>
                            <div className="space-y-6 text-gray-400 font-light leading-relaxed text-lg">
                                <p>
                                    Our advanced film technologies are engineered for exceptional durability and long-term value. By focusing on longevity, we significantly reduce the environmental footprint associated with frequent product replacements.
                                </p>
                                <p>
                                    From our specialized manufacturing facilities to our global distribution network, every step of the STEK process is optimized for efficiency and minimal waste.
                                </p>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="h-64 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070')] bg-cover bg-center rounded-2xl grayscale opacity-50 transition-all hover:grayscale-0 hover:opacity-100 duration-500" />
                                <div className="h-40 bg-red-600/20 backdrop-blur-xl rounded-2xl border border-red-600/20 flex flex-col items-center justify-center p-6 text-center">
                                    <span className="text-4xl font-black italic mb-2 leading-none">99%</span>
                                    <span className="text-[10px] uppercase tracking-widest text-red-500 font-bold">UV BLOCKING</span>
                                </div>
                            </div>
                            <div className="space-y-4 pt-12">
                                <div className="h-40 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center p-6 text-center">
                                    <Recycle className="w-8 h-8 text-red-600 mb-4" />
                                    <span className="text-[10px] uppercase tracking-widest font-bold">REDUCED WASTE</span>
                                </div>
                                <div className="h-64 bg-[url('https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1974')] bg-cover bg-center rounded-2xl grayscale opacity-50 transition-all hover:grayscale-0 hover:opacity-100 duration-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-32 bg-[#050505] border-y border-white/5">
                <div className="container px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {sustainabilityFeatures.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-10 bg-black border border-white/5 hover:border-red-600/30 transition-all duration-500 rounded-3xl"
                            >
                                <div className={`mb-8 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-red-600/10 transition-colors`}>
                                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                                </div>
                                <h3 className="text-2xl font-black tracking-tight mb-4 italic uppercase">{feature.title}</h3>
                                <p className="text-gray-400 font-light leading-relaxed mb-6">
                                    {feature.description}
                                </p>
                                <div className="flex items-center gap-2 text-red-500 text-xs font-black tracking-widest uppercase opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                                    Read More <ArrowRight className="w-4 h-4" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing Statement */}
            <section className="py-40">
                <div className="container px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter italic mb-12 uppercase leading-[1.1]">
                            SHIELDING VEHICLES,<br />SAFEGUARDING OUR WORLD.
                        </h2>
                        <div className="w-20 h-1 bg-red-600 mx-auto mb-12" />
                        <p className="text-gray-400 text-lg font-light italic leading-relaxed">
                            "Sustainability is the bedrock of our innovation. Every film we engineer is a step toward a more responsible automotive future."
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
