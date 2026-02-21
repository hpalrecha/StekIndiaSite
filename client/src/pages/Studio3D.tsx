import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Box, Layers, MousePointer2, Palette } from "lucide-react";

export default function Studio3D() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://d31muh84oxzu1x.cloudfront.net/04e868e7-07c4-46cd-b8ca-3e9b4134311c.webp"
                        alt="3D Car Visualization"
                        className="w-full h-full object-cover scale-110 opacity-60"
                    />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-3xl space-y-10"
                    >
                        <div className="inline-flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-xl">
                                <Box className="w-7 h-7 text-white" />
                            </div>
                            <span className="text-xl font-black uppercase tracking-[0.4em]">STEK 3D STUDIO</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase italic">
                            BRING YOUR PROJECTS <br />
                            <span className="text-primary italic">TO LIFE</span>
                        </h1>

                        <p className="text-2xl text-white/50 font-bold uppercase tracking-widest leading-tight">
                            A revolutionary platform for vehicle visualization and customization planning.
                        </p>

                        <div className="flex flex-wrap gap-6 pt-6">
                            <a href="https://app.stekshield.com/login/all-user" target="_blank" rel="noopener noreferrer">
                                <Button className="bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest px-14 py-8 rounded-none h-auto text-xl group">
                                    Try it on STEK ONE <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Interactive elements indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-center animate-bounce">
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30">Scroll to explore technology</p>
                </div>
            </section>

            {/* Showcase Grid */}
            <section className="py-32 relative">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <StudioFeature
                            icon={<Palette className="w-8 h-8" />}
                            title="Full Color Control"
                            description="Apply any STEK film color or texture instantly to see how it transforms the vehicle's lines."
                        />
                        <StudioFeature
                            icon={<Layers className="w-8 h-8" />}
                            title="Layer Management"
                            description="Visualize complex projects including multiple film types, chrome deletes, and accents."
                        />
                        <StudioFeature
                            icon={<MousePointer2 className="w-8 h-8" />}
                            title="Real-time Interaction"
                            description="Rotate, zoom, and inspect every detail of the vehicle in a high-fidelity 3D environment."
                        />
                    </div>
                </div>
            </section>

            {/* Integration Banner */}
            <section className="py-24 border-y border-white/5">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="space-y-4">
                        <h3 className="text-3xl font-black uppercase tracking-tight italic">Part of the STEK ONE Ecosystem</h3>
                        <p className="text-lg text-white/50 font-medium">Seamlessly sync your 3D designs with your shop management dashboard.</p>
                    </div>
                    <img
                        src="https://d31muh84oxzu1x.cloudfront.net/b63fe05c-f0c2-4d0f-94f6-a7fbf6aa392c.webp"
                        alt="Ecosystem Integration"
                        className="h-24 object-contain opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                    />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-zinc-900/40">
                <div className="mx-auto max-w-4xl px-4 text-center space-y-12">
                    <h2 className="text-6xl font-black uppercase tracking-tighter">Start Your <span className="text-primary italic">Customization</span></h2>
                    <p className="text-xl text-white/40 font-bold uppercase tracking-widest">Available now for all certified STEK installers via the STEK ONE dashboard.</p>
                    <a href="https://app.stekshield.com/login/all-user" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest px-12 py-8 rounded-none h-auto text-lg">
                            Access 3D Studio
                        </Button>
                    </a>
                </div>
            </section>
        </div>
    );
}

function StudioFeature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-center lg:text-left"
        >
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 group-hover:border-primary transition-colors">
                <div className="text-primary">{icon}</div>
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight italic">{title}</h3>
            <p className="text-lg text-white/40 leading-relaxed font-medium">
                {description}
            </p>
        </motion.div>
    );
}
