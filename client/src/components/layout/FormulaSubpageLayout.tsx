import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { FormulaProduct } from "@/lib/constants";
import { useState, useEffect, useRef } from "react";

interface FormulaSubpageLayoutProps {
    title: string;
    subtitle: string;
    category: 'prep' | 'install' | 'maintain';
    products: FormulaProduct[];
}

export default function FormulaSubpageLayout({
    title,
    subtitle,
    category,
    products
}: FormulaSubpageLayoutProps) {
    const [location] = useLocation();
    const [selectedProduct, setSelectedProduct] = useState<FormulaProduct>(products[0]);
    const detailSectionRef = useRef<HTMLDivElement>(null);

    // Sync with URL Hash
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            const found = products.find(p => p.id === hash);
            if (found) {
                setSelectedProduct(found);
            } else if (!hash && products.length > 0) {
                // Default to first product if no hash
                setSelectedProduct(products[0]);
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange(); // Initial check

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, [products]);

    const navigateProduct = (direction: 'next' | 'prev') => {
        const currentIndex = products.findIndex(p => p.id === selectedProduct.id);
        let nextIndex;
        if (direction === 'next') {
            nextIndex = (currentIndex + 1) % products.length;
        } else {
            nextIndex = (currentIndex - 1 + products.length) % products.length;
        }
        window.location.hash = products[nextIndex].id;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const tabs = [
        { id: 'prep', label: 'Prep / Clean', href: '/brands/formula/prep' },
        { id: 'install', label: 'Film Install', href: '/brands/formula/install' },
        { id: 'maintain', label: 'Protect / Maintain', href: '/brands/formula/maintain' }
    ];

    return (
        <div className="bg-black text-white min-h-screen font-nanumsquare overflow-hidden">
            {/* Back to Formula Home */}
            <div className="fixed top-24 left-8 z-50">
                <Link href="/brands/formula">
                    <button className="flex items-center gap-2 text-white/50 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Formula
                    </button>
                </Link>
            </div>

            {/* Header / Hero Detail Section */}
            <section ref={detailSectionRef} className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h5 className="text-primary text-[22px] font-bold tracking-tight mb-4 uppercase">
                        {subtitle}
                    </h5>
                    <h1 className="text-[55px] md:text-[75px] leading-tight font-black tracking-tighter uppercase">
                        {title}
                    </h1>
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedProduct.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full min-h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10 p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12"
                    >
                        {/* Navigation Arrows */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10 hidden md:block">
                            <button
                                onClick={() => navigateProduct('prev')}
                                className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-all group"
                            >
                                <ChevronLeft className="h-6 w-6 text-white/50 group-hover:text-white" />
                            </button>
                        </div>
                        <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10 hidden md:block">
                            <button
                                onClick={() => navigateProduct('next')}
                                className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-all group"
                            >
                                <ChevronRight className="h-6 w-6 text-white/50 group-hover:text-white" />
                            </button>
                        </div>

                        <div className="flex-1 space-y-8 z-10">
                            <div className="space-y-4">
                                <h2 className="text-[45px] md:text-[65px] font-black tracking-tighter leading-none uppercase text-primary">
                                    {selectedProduct.name}
                                </h2>
                                <p className="text-xl md:text-2xl text-white/50 font-bold uppercase tracking-widest">
                                    {selectedProduct.shortDescription}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {selectedProduct.tagline.split('|').map((tag, i) => (
                                    <span key={i} className="text-[11px] font-black tracking-widest text-white uppercase border border-white/20 px-3 py-1.5 rounded-none bg-white/5">
                                        {tag.trim()}
                                    </span>
                                ))}
                            </div>

                            <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
                                {selectedProduct.description}
                            </p>

                            {selectedProduct.volume && (
                                <div className="inline-flex items-center gap-3 px-6 py-4 bg-black border border-white/10 rounded-2xl">
                                    <span className="text-xs font-black uppercase tracking-[0.2em] text-white/40">Available Size</span>
                                    <span className="text-lg font-black uppercase text-primary tracking-tighter">{selectedProduct.volume}</span>
                                </div>
                            )}

                            <div className="pt-4">
                                <Link href="/contact">
                                    <Button className="bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest rounded-none px-12 py-7 h-auto text-sm">
                                        Inquire Now
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="flex-1 h-full flex items-center justify-center relative">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative z-10"
                            >
                                <img
                                    src={selectedProduct.imageUrl}
                                    alt={selectedProduct.name}
                                    className="max-h-[450px] w-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)] transition-transform duration-700 hover:scale-105"
                                />
                                {/* Reflection/Glow */}
                                <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 rounded-full scale-75 opacity-50" />
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </section>

            {/* Product Grid */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            onClick={() => {
                                window.location.hash = product.id;
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className={`group relative bg-[#0D0D0D] border rounded-3xl overflow-hidden transition-all duration-500 flex flex-col h-[520px] cursor-pointer ${selectedProduct.id === product.id ? 'border-primary ring-1 ring-primary/50' : 'border-white/5 hover:border-primary/40'
                                }`}
                        >
                            <div className="p-8 pb-4">
                                <h3 className={`text-3xl font-black mb-2 uppercase tracking-tighter transition-colors ${selectedProduct.id === product.id ? 'text-primary' : 'group-hover:text-primary'
                                    }`}>
                                    {product.name}
                                </h3>
                                <p className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                                    {product.shortDescription}
                                </p>
                            </div>

                            <div className="flex-1 relative flex items-center justify-center px-12 overflow-hidden">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className={`max-h-[280px] w-auto object-contain transition-transform duration-700 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] ${selectedProduct.id === product.id ? 'scale-110' : 'group-hover:scale-110'
                                        }`}
                                />
                            </div>

                            <div className="p-8 pt-0 mt-auto">
                                <div className="flex flex-wrap gap-2 mb-6 opacity-40">
                                    {product.tagline.split('|').slice(0, 2).map((tag, i) => (
                                        <span key={i} className="text-[9px] font-bold tracking-widest text-white uppercase border border-white/10 px-2 py-1">
                                            {tag.trim()}
                                        </span>
                                    ))}
                                </div>
                                <div className={`w-full py-4 text-center border transition-all duration-300 ${selectedProduct.id === product.id ? 'bg-primary border-primary text-white' : 'bg-transparent border-white/10 text-white/50 group-hover:border-primary group-hover:text-white'
                                    }`}>
                                    <span className="text-[11px] font-black uppercase tracking-[0.2em]">
                                        {selectedProduct.id === product.id ? 'Viewing Details' : 'View Details'}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Bottom Navigation Tabs */}
            <section className="bg-[#0A0A0A] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {tabs.map((tab) => (
                            <Link key={tab.id} href={tab.href}>
                                <div className={`relative h-48 flex flex-col items-center justify-center cursor-pointer group transition-all duration-500 overflow-hidden ${category === tab.id ? 'bg-primary' : 'bg-transparent border-r border-white/5 last:border-r-0 hover:bg-white/5'
                                    }`}>
                                    <div className="relative z-10 text-center">
                                        <span className={`block text-xs font-bold tracking-[0.2em] uppercase mb-2 ${category === tab.id ? 'text-white/70' : 'text-white/40'
                                            }`}>
                                            Category
                                        </span>
                                        <h3 className="text-2xl font-black uppercase tracking-tighter transition-transform duration-500 group-hover:scale-110">
                                            {tab.label}
                                        </h3>
                                    </div>
                                    <ArrowRight className={`absolute bottom-6 right-6 h-6 w-6 transition-all duration-500 ${category === tab.id ? 'opacity-100' : 'opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'
                                        }`} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
