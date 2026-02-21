import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, BarChart3, Users2, ShieldCheck, Laptop } from "lucide-react";

export default function InstallerPortal() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-50" />
                <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex-1 space-y-8"
                        >
                            <h4 className="text-primary font-black uppercase tracking-[0.3em] text-sm">
                                STEK ONE PLATFORM
                            </h4>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase italic">
                                Maximize Your <br />
                                <span className="text-primary">Shop Performance</span>
                            </h1>
                            <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
                                Experience the ultimate business tool designed specifically for automotive protection specialists. Manage your shop, customers, and registrations in one seamless dashboard.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <a href="https://app.stekshield.com/signup/all-user" target="_blank" rel="noopener noreferrer">
                                    <Button className="bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest px-10 py-7 rounded-none h-auto">
                                        Get Started
                                    </Button>
                                </a>
                                <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white font-black uppercase tracking-widest px-10 py-7 rounded-none h-auto">
                                    Learn More
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex-1 relative"
                        >
                            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src="https://d31muh84oxzu1x.cloudfront.net/b63fe05c-f0c2-4d0f-94f6-a7fbf6aa392c.webp"
                                    alt="STEK ONE Dashboard"
                                    className="w-full aspect-video object-cover"
                                />
                            </div>
                            <div className="absolute -inset-4 bg-primary/20 blur-2xl -z-10 opacity-30" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 border-t border-white/5">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={<BarChart3 className="w-8 h-8 text-primary" />}
                            title="Shop Analytics"
                            description="Track your performance metrics and growth in real-time."
                        />
                        <FeatureCard
                            icon={<Users2 className="w-8 h-8 text-primary" />}
                            title="Customer CRM"
                            description="Manage client relationships and service history effortlessly."
                        />
                        <FeatureCard
                            icon={<ShieldCheck className="w-8 h-8 text-primary" />}
                            title="Warranty Sync"
                            description="Instant digital product registration and warranty management."
                        />
                        <FeatureCard
                            icon={<Laptop className="w-8 h-8 text-primary" />}
                            title="Multi-Device"
                            description="Access your business from desktop, tablet, or smartphone."
                        />
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-zinc-900/30">
                <div className="mx-auto max-w-4xl px-4 text-center space-y-12">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                        Your Shop At Your <span className="text-primary">Hands</span>
                    </h2>
                    <p className="text-xl text-white/50 font-medium">
                        Join thousands of professionals who have already optimized their workflow with STEK ONE.
                    </p>
                    <a href="https://app.stekshield.com/login/all-user" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest px-12 py-8 rounded-none h-auto text-lg group">
                            Installer Login <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </a>
                </div>
            </section>
        </div>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="p-8 bg-zinc-900/50 border border-white/5 rounded-2xl hover:border-primary/50 transition-colors"
        >
            <div className="mb-6">{icon}</div>
            <h3 className="text-xl font-black uppercase tracking-tight mb-4">{title}</h3>
            <p className="text-white/50 leading-relaxed font-medium">
                {description}
            </p>
        </motion.div>
    );
}
