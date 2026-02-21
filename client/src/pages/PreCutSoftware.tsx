import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Cpu, Target, Database, Globe } from "lucide-react";

export default function PreCutSoftware() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent" />

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex-1 space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-black tracking-widest uppercase">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                Open Beta Now Available
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase">
                                EDGE <br />
                                <span className="text-primary italic">SOFTWARE</span>
                            </h1>
                            <p className="text-2xl text-white font-bold italic uppercase tracking-tight">
                                THE FUTURE OF PRE-CUT SOFTWARE HAS ARRIVED
                            </p>
                            <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
                                A next-generation, cloud-based pre-cut platform designed to empower installers worldwide. Experience precision, speed, and the industry&apos;s most comprehensive pattern database.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <a href="https://app.stekedge.com/auth/login" target="_blank" rel="noopener noreferrer">
                                    <Button className="bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest px-10 py-7 rounded-none h-auto">
                                        Join the Open Beta
                                    </Button>
                                </a>
                                <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white font-black uppercase tracking-widest px-10 py-7 rounded-none h-auto">
                                    View Features
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex-1"
                        >
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/0 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-950">
                                    <img
                                        src="https://d31muh84oxzu1x.cloudfront.net/00225dc2-5f43-4cc0-801e-b18b420c320e.webp"
                                        alt="STEK EDGE Software Interface"
                                        className="w-full object-contain"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Feature Section */}
            <section className="py-32 bg-zinc-900/20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                            A Level Above <span className="text-primary italic">Precision</span>
                        </h2>
                        <p className="text-xl text-white/40 max-w-3xl mx-auto uppercase tracking-widest font-bold">
                            Unrivaled accuracy for every car, every time
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-12">
                            <FeatureItem
                                icon={<Target className="w-10 h-10 text-primary" />}
                                title="Micro-Accuracy Patterns"
                                description="Expertly hand-measured and digitally verified patterns to ensure a perfect fit with minimal trimming."
                            />
                            <FeatureItem
                                icon={<Database className="w-10 h-10 text-primary" />}
                                title="Massive UI Library"
                                description="Access 100,000+ vehicle templates covering PPF, Window Film, and Windshield Protection."
                            />
                            <FeatureItem
                                icon={<Cpu className="w-10 h-10 text-primary" />}
                                title="Cloud Integration"
                                description="Always up-to-date. Sync your projects across multiple workstations instantly."
                            />
                            <FeatureItem
                                icon={<Globe className="w-10 h-10 text-primary" />}
                                title="Global Database"
                                description="The most complete vehicle database covering global models and regions."
                            />
                        </div>

                        <div className="relative">
                            <div className="aspect-square bg-primary/20 absolute -z-10 blur-[150px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full scale-75 opacity-30" />
                            <img
                                src="https://d31muh84oxzu1x.cloudfront.net/f67229d3-46cd-4c7b-bd3f-aae03fb84f3d.webp"
                                alt="Software precision"
                                className="w-full rounded-2xl border border-white/5"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Beta CTA */}
            <section className="py-32 border-t border-white/5 bg-gradient-to-b from-transparent to-primary/5">
                <div className="mx-auto max-w-4xl px-4 text-center space-y-12">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">
                        Ready to <span className="text-primary">Evolve?</span>
                    </h2>
                    <p className="text-xl text-white/50 font-bold uppercase tracking-[0.2em] leading-relaxed">
                        Revolutionize your installation speed with the industry&apos;s smartest pre-cut software.
                    </p>
                    <div className="flex justify-center gap-6 pt-6">
                        <a href="https://app.stekedge.com/auth/login" target="_blank" rel="noopener noreferrer">
                            <Button className="bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest px-14 py-8 rounded-none h-auto text-xl group">
                                Start Beta Trial <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="flex gap-8 group">
            <div className="flex-shrink-0 p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:border-primary/50 transition-colors">
                {icon}
            </div>
            <div className="space-y-3">
                <h3 className="text-2xl font-black uppercase tracking-tight italic group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-lg text-white/50 leading-relaxed font-medium">
                    {description}
                </p>
            </div>
        </div>
    );
}
