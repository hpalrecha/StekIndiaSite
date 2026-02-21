import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Briefcase, Users, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function BecomeInstaller() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://d31muh84oxzu1x.cloudfront.net/37a69ca3-cb20-495e-8a45-e0af53207840.webp"
                        alt="STEK Installation Professional"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-3xl space-y-8"
                    >
                        <h4 className="text-primary font-black uppercase tracking-[0.4em] text-sm">
                            Global Installer Network
                        </h4>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase italic">
                            MASTER THE ART OF <br />
                            <span className="text-primary italic">PPF INSTALLATION</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 font-bold uppercase tracking-widest leading-relaxed">
                            Join the world’s most elite network of automotive protection specialists. Improve your craft and grow your business with STEK.
                        </p>
                        <div className="flex flex-wrap gap-6 pt-4">
                            <Link href="/contact?subject=Become%20Installer">
                                <Button className="bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest px-12 py-8 rounded-none h-auto text-lg group">
                                    Apply to Join <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-32 bg-zinc-950">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24 space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
                            WHY PARTNER WITH <span className="text-primary">STEK?</span>
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <BenefitItem
                            icon={<Award className="w-10 h-10 text-primary" />}
                            title="ELITE PRODUCTS"
                            description="Gain access to the industry's most innovative paint protection films, window tints, and car care solutions."
                        />
                        <BenefitItem
                            icon={<Users className="w-10 h-10 text-primary" />}
                            title="GLOBAL NETWORK"
                            description="Connect with a world-class community of installers and share techniques, tips, and business strategies."
                        />
                        <BenefitItem
                            icon={<Briefcase className="w-10 h-10 text-primary" />}
                            title="SHOP SUPPORT"
                            description="From technical training to marketing collateral, we provide everything you need to skyrocket your shop's performance."
                        />
                        <BenefitItem
                            icon={<CheckCircle2 className="w-10 h-10 text-primary" />}
                            title="CERTIFICATION"
                            description="Become an accredited STEK installer, providing your customers with peace of mind and official warranties."
                        />
                    </div>
                </div>
            </section>

            {/* Program Details */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="flex-1 space-y-10">
                            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none italic">
                                A LEVEL ABOVE <br />
                                <span className="text-primary">THE INDUSTRY</span>
                            </h2>
                            <div className="space-y-6 text-lg text-white/50 font-medium leading-relaxed">
                                <p>
                                    The STEK STAFF lead installers will guide attendees through an immersive, multi-day course that will teach installation best practices, vehicle prep and how to improve your paint protective film installation business.
                                </p>
                                <p>
                                    As an authorized STEK shop, you're not just buying film; you're investing in a partnership built on quality, innovation, and mutual growth.
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {['Direct Manufacturer Support', 'Industry Leading Warranties', 'Advanced Pattern Access', 'Priority Product Shipping'].map((item) => (
                                    <li key={item} className="flex items-center gap-4 text-xl font-black uppercase tracking-widest italic text-white/80">
                                        <CheckCircle2 className="text-primary w-6 h-6" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex-1 relative">
                            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-none opacity-20" />
                            <div className="relative border border-white/10 group overflow-hidden">
                                <img
                                    src="https://d31muh84oxzu1x.cloudfront.net/2faf44a3-4177-4652-a639-ad6410c4cd21.jpg"
                                    alt="Training Professionalism"
                                    className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application CTA */}
            <section className="py-32 bg-zinc-900/50 border-y border-white/5">
                <div className="mx-auto max-w-4xl px-4 text-center space-y-12">
                    <h2 className="text-6xl font-black uppercase tracking-tighter italic">
                        READY TO <span className="text-primary">ELEVATE?</span>
                    </h2>
                    <p className="text-2xl text-white/40 font-bold uppercase tracking-[0.2em] leading-tight">
                        Apply today to become a certified STEK installer and join the future of automotive protection.
                    </p>
                    <div className="flex justify-center pt-8">
                        <Link href="/contact?subject=Become%20Installer">
                            <Button className="bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-[0.3em] px-16 py-8 rounded-none h-auto text-xl shadow-[0_0_50px_rgba(162,38,38,0.3)]">
                                Submit Application
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

function BenefitItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="space-y-6 group">
            <div className="w-20 h-20 bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors duration-500">
                {icon}
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight italic text-primary">{title}</h3>
            <p className="text-lg text-white/50 leading-relaxed font-medium">
                {description}
            </p>
        </div>
    );
}
