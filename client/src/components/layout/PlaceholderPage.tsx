import { motion } from "framer-motion";

interface PlaceholderPageProps {
    title: string;
    description: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-8"
                >
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-primary">
                        {title}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/50 font-bold uppercase tracking-widest max-w-3xl mx-auto">
                        {description}
                    </p>
                    <div className="w-24 h-1 bg-primary mx-auto" />
                    <div className="pt-12">
                        <p className="text-white/30 text-sm font-black uppercase tracking-[0.3em]">
                            Coming Soon to STEK India
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
