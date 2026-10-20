import { motion } from "framer-motion";
import { P91Studio } from "@/components/P91Studio";
import { Shield, Globe, Award, Users, ChevronRight, type LucideIcon } from "lucide-react";

const partnerships: { category: string; items: { title: string; description: string; icon: LucideIcon; tags: string[] }[] }[] = [
    {
        category: "Industry Associations",
        items: [
            {
                title: "Skin Cancer Foundation",
                description: "Proven protection. Our ICY, ACTION, SMART, NEX, and VISION Series have received the Seal of Recommendation, blocking 99% of harmful UV rays.",
                icon: Shield,
                tags: ["UV Protection", "Certified"]
            },
            {
                title: "IWFA Member",
                description: "Upholding the highest professional standards in the international window film industry as a proud member of the IWFA.",
                icon: Award,
                tags: ["Global Standards", "Professional"]
            },
            {
                title: "SEMA Member",
                description: "Representing the largest global car culture organization, focusing on specialty automotive parts and innovation.",
                icon: Globe,
                tags: ["Car Culture", "Innovation"]
            }
        ]
    },
    {
        category: "Global Network",
        items: [
            {
                title: "Spandex Partnership",
                description: "Expanding our reach across Europe and beyond through strategic Spandex partnerships for distribution and training.",
                icon: Users,
                tags: ["Europe", "Distribution"]
            },
            {
                title: "OEM & Wholesale",
                description: "Trusted by manufacturers like Hyundai and Toyota to provide high-performance protective solutions at scale.",
                icon: Shield,
                tags: ["Hyundai", "Toyota", "Scale"]
            }
        ]
    }
];

export default function Partnerships() {
    return (
        <div className="min-h-screen bg-black text-white pt-24">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070')] bg-cover bg-center opacity-40 grayscale" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />

                <div className="container relative z-10 px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                            Global Reach
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 italic">
                            DRIVING INNOVATION<br />TOGETHER
                        </h1>
                        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                            We foster partnerships that share our commitment to quality, innovation, and absolute protection worldwide.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="container px-6">
                    {partnerships.map((group, groupIdx) => (
                        <div key={groupIdx} className="mb-24 last:mb-0">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 mb-12"
                            >
                                <div className="h-px bg-red-600 flex-grow max-w-[60px]" />
                                <h2 className="text-2xl font-black tracking-tight italic uppercase">{group.category}</h2>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {group.items.map((partner, partnerIdx) => (
                                    <motion.div
                                        key={partnerIdx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: partnerIdx * 0.1 }}
                                        className="group relative bg-black border border-white/5 p-8 hover:border-red-600/50 transition-all duration-500 rounded-lg overflow-hidden flex flex-col h-full"
                                    >
                                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                                            <partner.icon size={80} strokeWidth={1} />
                                        </div>

                                        <div className="relative z-10">
                                            <div className="flex gap-2 mb-6">
                                                {partner.tags.map(tag => (
                                                    <span key={tag} className="text-[10px] uppercase tracking-widest bg-white/5 px-2 py-1 rounded">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 group-hover:text-red-500 transition-colors italic">
                                                {partner.title}
                                                <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                            </h3>

                                            <p className="text-gray-400 font-light leading-relaxed mb-8 flex-grow">
                                                {partner.description}
                                            </p>
                                        </div>

                                        <div className="absolute bottom-0 left-0 h-1 bg-red-600 w-0 group-hover:w-full transition-all duration-700" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <P91Studio />
                </div>
            </section>

            {/* Join Section */}
            <section className="py-24 border-t border-white/5 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px]" />

                <div className="container relative z-10 px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic mb-8 uppercase">
                        Become Part of the<br />STEK Ecosystem
                    </h2>
                    <p className="max-w-xl mx-auto text-gray-400 mb-12 font-light">
                        We are always looking for visionary partners to join our global network.
                        Connect with us to explore collaborative opportunities.
                    </p>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-black py-5 px-10 tracking-[0.2em] uppercase text-sm skew-x-[-12deg] transition-all duration-300">
                        <span className="inline-block skew-x-[12deg]">Inquire About Partnership</span>
                    </button>
                </div>
            </section>
        </div>
    );
}
