import { useRoute, Link } from "wouter";
import { ChevronRight, ArrowRight, Shield, Check, Send, Thermometer, Droplets, Zap, ShieldCheck, Eye, Sun, Wind, Award, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PRODUCT_DETAILS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

const featureIcons: Record<string, any> = {
    "Heat Reduction": Thermometer,
    "Solar Heat Control": Thermometer,
    "Glare Reduction": Sun,
    "Glare Minimization": Sun,
    "UV Protection": ShieldCheck,
    "Interior Protection": ShieldCheck,
    "Privacy": Eye,
    "Enhanced Privacy": Eye,
    "10-Layer Sputter Technology": Zap,
    "Nano-Carbon Tech": Zap,
    "Hybrid Composition": Zap,
    "Advanced Metalized Film": Zap,
    "TPU Construction": Shield,
    "Graphene G4 Technology": Wind,
    "Impact Resistance": Shield,
    "Self-Healing Surface": Droplets,
    "Optical Clarity": Eye,
    "Exceptional Heat Block": Thermometer,
    "Zero Signal Interference": ShieldCheck,
    "Safe Visibility": Eye,
    "Maximum Heat Rejection": Thermometer,
};

const Gauge = ({ value, label, color = "primary" }: { value: string; label: string; color?: string }) => {
    const percentage = parseInt(value);
    const radius = 36;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="flex flex-col items-center gap-3">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28">
                <svg className="w-full h-full transform -rotate-90">
                    {/* Background circle */}
                    <circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        className="stroke-white/10 fill-none"
                        strokeWidth="4"
                    />
                    {/* Foreground circle */}
                    <motion.circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        className={`fill-none stroke-blue-500`}
                        strokeWidth="4"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">{value}</span>
                </div>
            </div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/60">{label}</span>
        </div>
    );
};

export default function WindowFilmDetail() {
    const [, params] = useRoute("/products/window-film/:productSlug");
    const productSlug = params?.productSlug;
    const product = productSlug ? PRODUCT_DETAILS[productSlug] : null;

    if (!product) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center bg-zinc-950 text-white">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
                    <Link href="/products">
                        <Button>View All Products</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-zinc-950 min-h-screen text-white overflow-hidden">
            {/* Cinematic Hero */}
            <section className="relative min-h-[80vh] flex items-center pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-zinc-950 to-transparent" />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <nav className="flex items-center gap-2 text-sm text-white/40 mb-12">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <Link href="/brands/stek" className="hover:text-white transition-colors text-blue-400">STEK Window Film</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-white/80">{product.name}</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Badge className="mb-6 bg-blue-600/20 text-blue-400 border-blue-600/30 px-3 py-1 text-xs tracking-[0.2em] uppercase">
                                Premium Window Technology
                            </Badge>
                            <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight">
                                {product.name}
                            </h1>
                            <p className="text-xl sm:text-2xl font-medium text-white/80 mb-8">
                                {product.tagline}
                            </p>
                            <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-xl">
                                {product.description}
                            </p>

                            {/* Performance Gauges */}
                            {product.performance && (
                                <div className="grid grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 max-w-xl">
                                    {product.performance.irer && <Gauge value={product.performance.irer} label="IRER" />}
                                    {product.performance.sirr && <Gauge value={product.performance.sirr} label="SIRR" />}
                                    {product.performance.uvr && <Gauge value={product.performance.uvr} label="UV" />}
                                    {product.performance.tser && <Gauge value={product.performance.tser} label="TSER" />}
                                </div>
                            )}

                            {/* Certification Badges */}
                            <div className="flex gap-6 items-center mb-10 opacity-60">
                                <div className="flex items-center gap-2 border-r border-white/10 pr-6">
                                    <ShieldCheck className="h-5 w-5 text-blue-500" />
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase">ASTM Tested</span>
                                </div>
                                <div className="flex items-center gap-2 border-r border-white/10 pr-6">
                                    <Award className="h-5 w-5 text-blue-500" />
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase">SGS Certified</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Globe className="h-5 w-5 text-blue-500" />
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase">IWFA Member</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link href={`/contact?subject=${encodeURIComponent("Inquiry: " + product.name)}`}>
                                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white gap-2 px-8 py-6 text-lg rounded-full group">
                                        Enquire Now
                                        <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </Button>
                                </Link>
                                <Link href="/installer-locator">
                                    <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 gap-2 px-8 py-6 text-lg rounded-full">
                                        Find an Installer
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Feature Grid Section */}
            <section className="py-32 bg-zinc-950 relative border-t border-white/5">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl sm:text-5xl font-bold mb-4">Buckle Up for the {product.name} Level!</h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Transforming your driving experience with unmatched technology and protection.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {product.features.map((feature, idx) => {
                            if (typeof feature === "string") return null;
                            const Icon = featureIcons[feature.title] || Zap;
                            return (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -5 }}
                                    className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.07] transition-all group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{feature.title}</h3>
                                    <p className="text-white/60 leading-relaxed text-sm">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Micro-tech Section (Laboratory Style) */}
            <section className="py-32 bg-zinc-900/50 relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-4xl sm:text-5xl font-bold mb-8 uppercase italic tracking-tighter">STEK Laboratory</h2>
                            <p className="text-xl text-white/80 leading-relaxed mb-8">
                                {productSlug === 'nex' || productSlug === 'dynotint'
                                    ? "Advanced Graphene structure integration for rapid heat dispersion and superior durability."
                                    : "Multi-layered nano-technology engineered for the perfect balance of heat rejection and clarity."}
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <div className="mt-1 w-2 h-2 rounded-full bg-blue-500" />
                                    <p className="text-white/60">Molecular level heat absorption for up to 99% infrared blocking.</p>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="mt-1 w-2 h-2 rounded-full bg-blue-500" />
                                    <p className="text-white/60">Non-metallic construction ensures 100% signal pass-through.</p>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="mt-1 w-2 h-2 rounded-full bg-blue-500" />
                                    <p className="text-white/60">Superior scratch resistance ensures a lifelong like-new appearance.</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative group">
                            <div className="absolute -inset-4 bg-blue-600/20 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
                            <img
                                src="https://d31muh84oxzu1x.cloudfront.net/541f617c-c1a9-4d10-9fe6-2bf435d83dde.webp"
                                alt="Nano Technology"
                                className="relative rounded-3xl border border-white/20 shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Optical Clarity Section */}
            <section className="py-32 bg-zinc-950 relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                        <div className="lg:col-span-3">
                            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src="https://d31muh84oxzu1x.cloudfront.net/2a110ca7-e6c4-4876-ac7b-0001a4c09f1b.webp"
                                    alt="Crystal Clear Optics"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                                            <Eye className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Zero-Haze Technology</h4>
                                            <p className="text-white/60 text-sm">Maintains 100% optical purity at any angle.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <h2 className="text-4xl font-bold mb-6 tracking-tight uppercase italic">Crystal-Clear Optics</h2>
                            <p className="text-lg text-white/60 mb-8 leading-relaxed">
                                STEK's manufacturing process eliminates the "orange peel" and haze typical of high-performance films. Enjoy a crisp, natural view through your windows, day or night.
                            </p>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <p className="text-blue-400 font-bold mb-2">High Definition Vision</p>
                                <p className="text-white/60 text-sm italic italic leading-relaxed">
                                    "It's like looking through high-definition glass. The clarity is unmatched in the industry."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specs & Call to Action */}
            <section className="py-32 bg-zinc-950 border-t border-white/5">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-8">Ready to Elevate Your Protection?</h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Card className="bg-blue-600/10 border-blue-600/30 w-full sm:w-64">
                                <CardContent className="p-6 text-center">
                                    <Shield className="h-10 w-10 text-blue-500 mx-auto mb-4" />
                                    <h3 className="font-bold mb-2 uppercase tracking-wide">Warranty</h3>
                                    <p className="text-white/60 text-sm">{product.warranty}</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-white/5 border-white/10 w-full sm:w-64">
                                <CardContent className="p-6 text-center">
                                    <Check className="h-10 w-10 text-green-500 mx-auto mb-4" />
                                    <h3 className="font-bold mb-2 uppercase tracking-wide">Installation</h3>
                                    <p className="text-white/60 text-sm">Professional Certified</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-8">
                        <Link href={`/contact?subject=${encodeURIComponent("Technical Spec Request: " + product.name)}`}>
                            <Button size="lg" className="bg-white text-black hover:bg-zinc-200 px-12 py-8 text-xl font-bold rounded-2xl w-full sm:w-auto">
                                Request Technical Data Sheet
                            </Button>
                        </Link>
                        <p className="text-white/40 text-sm">
                            Need bulk pricing? <Link href="/contact" className="text-blue-400 underline decoration-blue-400/30 hover:decoration-blue-400 underline-offset-4">Talk to an Agent</Link>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
