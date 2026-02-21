import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { TrainingProgram as TrainingProgramType } from "@shared/schema";
import { MapPin, Calendar, CheckSquare, GraduationCap, ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function TrainingProgram() {
    const { data: programs, isLoading } = useQuery<TrainingProgramType[]>({
        queryKey: ["/api/training-programs"],
    });

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://d31muh84oxzu1x.cloudfront.net/280ca575-754d-4d15-8266-8b9d671c6426.webp"
                        alt="STEK Training Facility"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent" />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-3xl space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 text-primary rounded-full text-xs font-black uppercase tracking-[0.2em]">
                            <GraduationCap className="w-4 h-4" /> Official Certification
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase italic">
                            BECOME AN <br />
                            <span className="text-primary">ACCREDITED</span> <br />
                            INSTALLER
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 font-bold uppercase tracking-widest leading-relaxed">
                            Take your shop’s skills and services to the next level with STEK official training programs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="py-32 bg-zinc-950">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
                                    THE STEK <br /> <span className="text-primary">CURRICULUM</span>
                                </h2>
                                <p className="text-xl text-white/50 font-medium">
                                    Our comprehensive training covers every aspect of professional film installation.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <CurriculumItem text="Essential Tool Mastery" />
                                <CurriculumItem text="Surface Preparation" />
                                <CurriculumItem text="Advanced Stretching" />
                                <CurriculumItem text="Bulk vs Template Cutting" />
                                <CurriculumItem text="Maintenance & Aftercare" />
                                <CurriculumItem text="Business Management" />
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-10 bg-primary/20 blur-[100px] opacity-20 -z-10" />
                            <img
                                src="https://d31muh84oxzu1x.cloudfront.net/7760e320-8fb6-493f-babb-05fd474f938d.webp"
                                alt="Installation Training"
                                className="w-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Available Programs */}
            <section className="py-32 border-t border-white/5 bg-zinc-900/10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
                            SEARCH <span className="text-primary">PROGRAMS</span>
                        </h2>
                        <p className="text-lg text-white/40 uppercase tracking-widest font-bold">Find a training session near you</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {isLoading ? (
                            Array.from({ length: 3 }).map((_, i) => (
                                <div key={i} className="h-[400px] bg-white/5 animate-pulse rounded-2xl" />
                            ))
                        ) : programs?.length === 0 ? (
                            <div className="col-span-full py-20 text-center border border-dashed border-white/10 rounded-2xl">
                                <p className="text-white/30 font-bold uppercase tracking-widest">No programs currently scheduled in your region.</p>
                            </div>
                        ) : (
                            programs?.map((program) => (
                                <ProgramCard key={program.id} program={program} />
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* Inquiry CTA */}
            <section className="py-32 bg-primary">
                <div className="mx-auto max-w-4xl px-4 text-center space-y-8">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
                        CUSTOM <span className="text-black italic">TRAINING?</span>
                    </h2>
                    <p className="text-2xl text-white/80 font-bold uppercase tracking-widest leading-tight">
                        Interested in hosting a training session at your shop? Contact our team for custom program options.
                    </p>
                    <div className="pt-8">
                        <Link href="/contact?subject=Training%20Program">
                            <Button className="bg-black hover:bg-zinc-900 text-white font-black uppercase tracking-widest px-16 py-8 rounded-none h-auto text-xl">
                                Inquire Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

function CurriculumItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-4 group">
            <div className="w-10 h-10 bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <CheckSquare className="text-white w-6 h-6" />
            </div>
            <span className="text-lg font-black uppercase tracking-tight italic text-white/70 group-hover:text-white transition-colors">
                {text}
            </span>
        </div>
    );
}

function ProgramCard({ program }: { program: TrainingProgramType }) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden flex flex-col group"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={program.image || "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800"}
                    alt={program.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest">
                    Active
                </div>
            </div>

            <div className="p-8 space-y-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-black uppercase tracking-tight italic leading-none">{program.title}</h3>

                <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-3 text-white/50 text-sm font-bold uppercase tracking-widest">
                        <MapPin className="w-4 h-4 text-primary" />
                        {program.location}
                    </div>
                    <div className="flex items-center gap-3 text-white/50 text-sm font-bold uppercase tracking-widest">
                        <Calendar className="w-4 h-4 text-primary" />
                        {program.date || "Contact for dates"}
                    </div>
                </div>

                <Link href="/contact?subject=Training%20Program">
                    <Button className="w-full bg-white/5 hover:bg-primary hover:text-white text-white/70 border border-white/10 rounded-none h-14 font-black uppercase tracking-widest transition-all">
                        View Details <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </motion.div>
    );
}
