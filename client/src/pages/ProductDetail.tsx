import { useRoute, Link } from "wouter";
import { ChevronRight, ArrowRight, Shield, Check, Info, FileText, Send, Thermometer, Droplets, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PRODUCT_DETAILS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

const featureIcons: Record<string, any> = {
    "Super Hydrophobic (Self-Cleaning)": Droplets,
    "Hydrophobic Top Coat": Droplets,
    "Advanced Self-Healing": Zap,
    "Self-Healing Technology": Zap,
    "Superior Stain Resistance": Shield,
    "Ultra-Gloss Finish": Info,
    "Ultra-Gloss Black Finish": Info,
    "12-Year Warranty": Check,
    "10-Year Warranty": Check,
    "7-Year Warranty": Check,
    "TPU-Based Durability": Shield,
    "Realistic Carbon Texture": Info,
};

export default function ProductDetail() {
    const [, params] = useRoute("/products/:category/:productSlug");
    const productSlug = params?.productSlug;

    const product = productSlug ? PRODUCT_DETAILS[productSlug] : null;

    if (!product) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
                    <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
                    <Link href="/products">
                        <Button>View All Products</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background min-h-screen">
            {/* Product Hero */}
            <section className="relative pt-32 pb-20 bg-zinc-950 overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <nav className="flex items-center gap-2 text-sm text-white/60 mb-8 mt-2">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <Link href={`/brands/${product.brand.toLowerCase()}`} className="hover:text-white transition-colors">{product.brand}</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-white">{product.name}</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-2"
                        >
                            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 px-3 py-1 text-sm">
                                {product.brand} Range
                            </Badge>
                            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
                                {product.name}
                            </h1>
                            <p className="text-xl text-primary font-medium mb-6">
                                {product.tagline}
                            </p>
                            <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-xl">
                                {product.description}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href={`/contact?subject=${encodeURIComponent("Inquiry about " + product.name)}`}>
                                    <Button size="lg" className="gap-2 px-8">
                                        Enquire Now
                                        <Send className="h-4 w-4" />
                                    </Button>
                                </Link>
                                <Link href="/installer-locator">
                                    <Button size="lg" variant="outline" className="gap-2 border-white/20 text-white hover:bg-white/10">
                                        Find an Installer
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-3 relative aspect-video sm:aspect-[16/10] lg:aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover object-right"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Product Details */}
            <section className="py-24 bg-background">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Left: Description & Features */}
                        <div className="lg:col-span-2 space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-6">Product Overview</h2>
                                <div className="prose prose-zinc dark:prose-invert max-w-none">
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {product.longDescription || product.description}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-8">Key Performance Features</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {product.features.map((feature, idx) => {
                                        const title = typeof feature === "string" ? feature : feature.title;
                                        const detail = typeof feature === "string" ? undefined : feature.description;
                                        const Icon = featureIcons[title] || Check;
                                        return (
                                            <Card key={idx} className="bg-muted/30 border-none hover:bg-muted/50 transition-colors">
                                                <CardContent className="p-6 flex items-start gap-4">
                                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                                        <Icon className="h-5 w-5" />
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-foreground">{title}</p>
                                                        {detail && <p className="text-sm text-muted-foreground mt-1">{detail}</p>}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Right: Specs & Warranty */}
                        <div className="space-y-8">
                            {product.specifications && (
                                <Card className="overflow-hidden border-zinc-200 dark:border-zinc-800">
                                    <div className="bg-muted/50 px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
                                        <h3 className="font-bold text-foreground flex items-center gap-2">
                                            <FileText className="h-4 w-4 text-primary" />
                                            Technical Specifications
                                        </h3>
                                    </div>
                                    <CardContent className="p-0">
                                        <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                                            {Object.entries(product.specifications).map(([key, value]) => (
                                                <div key={key} className="flex justify-between px-6 py-4 text-sm">
                                                    <span className="text-muted-foreground">{key}</span>
                                                    <span className="font-medium text-foreground">{value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            )}

                            {product.warranty && (
                                <Card className="bg-primary/5 border-primary/20">
                                    <CardContent className="p-6 flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <Shield className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-wider text-primary font-bold">Standard Warranty</p>
                                            <p className="text-lg font-bold text-foreground">{product.warranty}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            )}

                            <Card className="bg-zinc-900 border-none text-white overflow-hidden relative">
                                <div className="p-8 relative z-10">
                                    <h3 className="text-xl font-bold mb-4">Request a Consultation</h3>
                                    <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                                        Our experts can help you determine the best protection solution for your specific needs.
                                    </p>
                                    <Link href={`/contact?subject=${encodeURIComponent("Consultation for " + product.name)}`}>
                                        <Button className="w-full bg-white text-zinc-950 hover:bg-zinc-200">
                                            Book a Free Consultation
                                        </Button>
                                    </Link>
                                </div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] translate-x-1/2 -translate-y-1/2" />
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products / CTA */}
            <section className="py-20 border-t border-zinc-200 dark:border-zinc-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Explore More Solutions</h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Discover our full range of window films, car care products, and specialized architectural solutions.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Link href="/products">
                            <Button variant="outline" className="gap-2">
                                All Products
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href={`/brands/${product.brand.toLowerCase()}`}>
                            <Button variant="ghost" className="gap-2 text-primary">
                                Back to {product.brand} Brand
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
