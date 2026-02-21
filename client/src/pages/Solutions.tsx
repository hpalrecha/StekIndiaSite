import { useRoute, Link } from "wouter";
import { useState, useMemo, useRef } from "react";
import { ArrowRight, ChevronRight, Check, Building2, Wrench, Store, Shield, Layers, Sparkles, Monitor, Award, Users, Info, Network } from "lucide-react";
import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SOLUTIONS, STEK_GLOBAL_URL } from "@/lib/constants";
import { HeroSlider } from "@/components/ui/hero-slider";
import { ProductCard, ProductGrid, FeatureCard } from "@/components/ui/animated-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

import installersImage from "@assets/stock_images/professional_auto_de_0dbcaf65.jpg";
import dealershipsImage from "@assets/stock_images/car_dealership_showr_6eee07be.jpg";
import architecturalImage from "@assets/stock_images/modern_glass_buildin_b8a9e927.jpg";

const solutionHeroImages: Record<string, string> = {
  installers: installersImage,
  dealerships: dealershipsImage,
  architectural: architecturalImage,
};

const solutionIcons: Record<string, typeof Wrench> = {
  installers: Wrench,
  dealerships: Store,
  architectural: Building2,
};

interface SolutionType {
  id: string;
  name: string;
  slug: string;
  tagline?: string;
  description: string;
  heroImage: string;
  benefits: string[];
  offerings?: { name: string; description: string; image?: string }[];
  products?: { name: string; description: string }[];
  groups?: {
    id: string;
    title: string;
    items: {
      id: string;
      title: string;
      description: string;
      image?: string;
      features?: string[];
      details?: { label: string; value: string }[];
    }[];
  }[];
  ctaText: string;
}

export default function Solutions() {
  const [, params] = useRoute("/solutions/:solution");
  const solutionSlug = params?.solution;
  const prefersReducedMotion = useReducedMotion();
  const benefitsRef = useRef<HTMLElement>(null);
  const benefitsInView = useInView(benefitsRef, { once: true });

  const [activeGroupItems, setActiveGroupItems] = useState<Record<string, string>>({
    protection: "ppf",
    care: "maintenance",
    "premium-experience": "installation-zone",
    "architectural-products": "spectre",
  });

  if (solutionSlug) {
    const solution = SOLUTIONS.find((s) => s.slug === solutionSlug) as SolutionType | undefined;

    if (!solution) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Solution Not Found</h1>
            <p className="text-muted-foreground mb-6">The solution you're looking for doesn't exist.</p>
            <Link href="/solutions">
              <Button>View All Solutions</Button>
            </Link>
          </div>
        </div>
      );
    }

    const Icon = solutionIcons[solution.slug] || Wrench;

    return (
      <div>
        <HeroSlider
          slides={[
            {
              image: solutionHeroImages[solutionSlug] || installersImage,
              subtitle: "STEK Solutions",
              title: solution.name,
              description: solution.description,
              cta: (
                <div className="flex flex-wrap gap-4">
                  {solution.slug === "installers" ? (
                    <a
                      href={`${STEK_GLOBAL_URL}/become-installer`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="lg" className="gap-2">
                        {solution.ctaText}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </a>
                  ) : (
                    <Link href="/contact">
                      <Button size="lg" className="gap-2">
                        {solution.ctaText}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              )
            },
            {
              image: solutionHeroImages[solutionSlug] || installersImage,
              subtitle: "Innovation & Excellence",
              title: solution.tagline || "Unlock Your Potential",
              description: "Join the global network of STEK partners and leverage our advanced technology and business support to grow your brand.",
              cta: (
                <div className="flex flex-wrap gap-4">
                  <Link href="#benefits">
                    <Button size="lg" className="gap-2">
                      Explore Benefits
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              )
            }
          ]}
        />

        {solutionSlug === "dealerships" ? (
          <div className="bg-background">
            {/* Solutions Overview Grid */}
            <section className="py-20 bg-zinc-50 border-b border-zinc-200">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Solutions Overview</h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-zinc-900">Total Care for Your Business</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {solution.offerings?.map((offering, idx) => (
                    <motion.div
                      key={offering.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <div className="p-8 bg-white border border-zinc-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
                        <div className="w-12 h-12 rounded-xl bg-zinc-900 text-white flex items-center justify-center mb-6">
                          {idx === 0 ? <Shield className="h-6 w-6" /> :
                            idx === 1 ? <Monitor className="h-6 w-6" /> :
                              idx === 2 ? <Wrench className="h-6 w-6" /> :
                                <Users className="h-6 w-6" />}
                        </div>
                        <h4 className="text-xl font-bold text-zinc-900 mb-4">{offering.name}</h4>
                        <p className="text-zinc-600 text-sm leading-relaxed">{offering.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Content Groups (Tabs) */}
            {solution.groups?.map((group, groupIdx) => (
              <section key={group.id} className={cn("py-24", groupIdx % 2 === 0 ? "bg-white" : "bg-zinc-900 text-white")}>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="mb-16">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">{group.title} SOLUTIONS</h2>
                    <h3 className={cn("text-3xl md:text-5xl font-bold", groupIdx % 2 === 0 ? "text-zinc-900" : "text-white")}>
                      {group.id === "protection" ? "Unrivaled Protection" : "All-in-One Maintenance"}
                    </h3>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-12">
                    {/* Vertical Navigation (Tabs) */}
                    <div className="lg:w-1/3 flex flex-col gap-2">
                      {group.items.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setActiveGroupItems(prev => ({ ...prev, [group.id]: item.id }))}
                          className={cn(
                            "flex items-center justify-between p-6 rounded-xl transition-all text-left border",
                            activeGroupItems[group.id] === item.id
                              ? groupIdx % 2 === 0
                                ? "bg-zinc-900 text-white border-zinc-900"
                                : "bg-white text-zinc-900 border-white"
                              : groupIdx % 2 === 0
                                ? "bg-transparent text-zinc-500 border-zinc-200 hover:border-zinc-400"
                                : "bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-600"
                          )}
                        >
                          <span className="text-lg font-bold">{item.title}</span>
                          <ChevronRight className={cn("h-5 w-5 transition-transform", activeGroupItems[group.id] === item.id ? "rotate-90 lg:rotate-0" : "")} />
                        </button>
                      ))}
                    </div>

                    {/* Content Area */}
                    <div className="lg:w-2/3">
                      <AnimatePresence mode="wait">
                        {(() => {
                          const activeItem = group.items.find(i => i.id === activeGroupItems[group.id]);
                          if (!activeItem) return null;

                          return (
                            <motion.div
                              key={activeGroupItems[group.id]}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.3 }}
                              className="h-full"
                            >
                              <div className={cn(
                                "rounded-3xl overflow-hidden h-full flex flex-col md:flex-row shadow-xl",
                                groupIdx % 2 === 0 ? "bg-zinc-50" : "bg-zinc-800/50 border border-zinc-700"
                              )}>
                                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                                  <h4 className="text-2xl md:text-3xl font-bold mb-6">
                                    {activeItem.title}
                                  </h4>
                                  <p className={cn("text-lg leading-relaxed mb-8", groupIdx % 2 === 0 ? "text-zinc-600" : "text-zinc-300")}>
                                    {activeItem.description}
                                  </p>
                                  <div className="grid grid-cols-1 gap-4">
                                    {activeItem.features?.map((feature, fIdx) => (
                                      <div key={fIdx} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                                          <Check className="h-4 w-4" />
                                        </div>
                                        <span className="font-medium">{feature}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                {activeItem.image && (
                                  <div className="md:w-2/5 relative min-h-[300px]">
                                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/20 to-transparent z-10" />
                                    <img
                                      src={activeItem.image}
                                      alt={activeItem.title}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          );
                        })()}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </section>
            ))}

            {/* CTA Section */}
            <section className="py-24 bg-primary text-primary-foreground">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to transform your business?</h2>
                <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">Join the STEK global network and offer the world's most advanced protection solutions.</p>
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="px-12 py-8 text-xl font-bold rounded-full">
                    Partner With Us
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </Link>
              </div>
            </section>
          </div>
        ) : solutionSlug === "architectural" ? (
          <div className="bg-background">
            {/* Offerings Overview */}
            <section className="py-24 bg-white">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Why Choose STEK Architectural?</h2>
                  <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 italic tracking-tight">Performance Beyond Standards</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {solution.offerings?.map((offering, idx) => (
                    <motion.div
                      key={offering.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="text-center group"
                    >
                      <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-primary transition-colors duration-500 overflow-hidden p-4">
                        <img
                          src={offering.image}
                          alt={offering.name}
                          className="w-full h-full object-contain filter group-hover:invert transition-all duration-500"
                        />
                      </div>
                      <h4 className="text-2xl font-bold text-zinc-900 mb-4">{offering.name}</h4>
                      <p className="text-zinc-600 leading-relaxed">{offering.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Dynamic Product Technologies Section */}
            {solution.groups?.map((group) => (
              <section key={group.id} className="relative min-h-[800px] flex items-center overflow-hidden">
                {/* Dynamic Background */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeGroupItems[group.id]}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 z-0"
                  >
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <img
                      src={group.items.find(i => i.id === activeGroupItems[group.id])?.image}
                      alt="Background"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20 py-24">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="text-white">
                      <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">{group.title}</h2>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeGroupItems[group.id]}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.4 }}
                        >
                          <h3 className="text-5xl md:text-7xl font-bold mb-8 italic tracking-tighter">
                            {group.items.find(i => i.id === activeGroupItems[group.id])?.title}
                          </h3>
                          <p className="text-xl text-zinc-300 mb-12 max-w-xl leading-relaxed">
                            {group.items.find(i => i.id === activeGroupItems[group.id])?.description}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {group.items.find(i => i.id === activeGroupItems[group.id])?.features?.map((feature, fIdx) => (
                              <div key={fIdx} className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                                  <Check className="h-4 w-4" />
                                </div>
                                <span className="font-semibold text-zinc-200">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <div className="flex flex-col gap-3">
                      {group.items.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setActiveGroupItems(prev => ({ ...prev, [group.id]: item.id }))}
                          className={cn(
                            "group flex items-center justify-between p-6 rounded-2xl transition-all duration-500 text-left border-l-4",
                            activeGroupItems[group.id] === item.id
                              ? "bg-white/10 backdrop-blur-md border-primary text-white scale-105"
                              : "bg-black/20 backdrop-blur-sm border-transparent text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
                          )}
                        >
                          <span className="text-xl font-bold tracking-tight">{item.title}</span>
                          <ChevronRight className={cn("h-6 w-6 transition-transform duration-500", activeGroupItems[group.id] === item.id ? "translate-x-1 text-primary" : "group-hover:translate-x-1")} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))}

            {/* Final Benefits Grid */}
            <section className="py-24 bg-zinc-50">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {solution.benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-8 bg-zinc-900 text-white rounded-[2rem] flex flex-col items-center text-center group hover:bg-primary transition-colors duration-500"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary group-hover:bg-white group-hover:text-primary transition-colors duration-500 flex items-center justify-center mb-6">
                        <Check className="h-6 w-6" />
                      </div>
                      <p className="font-bold text-lg leading-tight">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-white">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-8 italic tracking-tighter">Join the STEK Revolution.</h2>
                <p className="text-xl text-zinc-600 mb-12 max-w-2xl mx-auto">Elevate your architectural projects with windows films that combine laboratory-grade science with stunning design.</p>
                <Link href="/contact">
                  <Button size="lg" className="px-12 py-8 text-xl font-bold rounded-full group">
                    {solution.ctaText}
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
              </div>
            </section>
          </div>
        ) : solutionSlug === "installers" ? (
          <div className="bg-background">
            {/* Total Care Solution Grid */}
            <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(185,28,28,0.1),transparent)]" />
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                  <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Installer Program</h2>
                  <h3 className="text-3xl md:text-5xl font-bold mb-6 italic tracking-tight">Total Care Solution</h3>
                  <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                    STEK provides a complete infrastructure and business ecosystem to help your shop achieve professional excellence.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {solution.offerings?.map((offering, idx) => (
                    <motion.div
                      key={offering.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="group p-8 bg-zinc-900 border border-zinc-800 rounded-3xl hover:border-primary/50 transition-all duration-300"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-zinc-800 text-white flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300">
                        {idx === 0 ? <Building2 className="h-7 w-7" /> :
                          idx === 1 ? <Sparkles className="h-7 w-7" /> :
                            idx === 2 ? <Wrench className="h-7 w-7" /> :
                              idx === 3 ? <Users className="h-7 w-7" /> :
                                idx === 4 ? <Award className="h-7 w-7" /> :
                                  <Network className="h-7 w-7" />}
                      </div>
                      <h4 className="text-2xl font-bold mb-4">{offering.name}</h4>
                      <p className="text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors">
                        {offering.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Shop Experience Zones (Tabs) */}
            <section className="py-24 bg-white">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                  <div className="lg:w-1/2">
                    <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Premium Infrastructure</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-8 italic tracking-tight">The STEK Premium Experience</h3>
                    <p className="text-zinc-600 text-lg mb-10 leading-relaxed">
                      We guide you through setting up specialized zones in your shop to maximize efficiency and customer confidence.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {solution.groups?.[0].items.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setActiveGroupItems(prev => ({ ...prev, "premium-experience": item.id }))}
                          className={cn(
                            "p-6 rounded-2xl transition-all text-left border text-lg font-bold flex items-center justify-between",
                            activeGroupItems["premium-experience"] === item.id
                              ? "bg-zinc-900 text-white border-zinc-900 shadow-xl"
                              : "bg-zinc-50 text-zinc-500 border-zinc-100 hover:border-zinc-300"
                          )}
                        >
                          {item.title}
                          <ChevronRight className={cn("h-5 w-5 transition-transform", activeGroupItems["premium-experience"] === item.id ? "rotate-90 lg:rotate-0" : "")} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-1/2 w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative bg-zinc-100">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeGroupItems["premium-experience"]}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                        <div className="absolute bottom-0 left-0 p-10 z-20">
                          <h4 className="text-white text-3xl font-bold mb-4">
                            {solution.groups?.[0].items.find(i => i.id === activeGroupItems["premium-experience"])?.title}
                          </h4>
                          <p className="text-white/80 text-lg max-w-md">
                            {solution.groups?.[0].items.find(i => i.id === activeGroupItems["premium-experience"])?.description}
                          </p>
                        </div>
                        <img
                          src={solution.groups?.[0].items.find(i => i.id === activeGroupItems["premium-experience"])?.image || installersImage}
                          alt="Shop Zone"
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </section>

            {/* Retailer Categories */}
            <section className="py-24 bg-zinc-50 border-t border-zinc-200">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Partnership Levels</h2>
                  <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 italic tracking-tight">Retailer Categories</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {solution.products?.map((tier, idx) => (
                    <motion.div
                      key={tier.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className={cn(
                        "p-10 rounded-[3rem] border transition-all duration-300 relative overflow-hidden",
                        idx === 2
                          ? "bg-zinc-900 text-white border-zinc-900 shadow-2xl scale-105 z-10"
                          : "bg-white text-zinc-900 border-zinc-100 hover:shadow-xl"
                      )}
                    >
                      {idx === 2 && (
                        <div className="absolute top-0 right-0 p-6">
                          <Award className="h-8 w-8 text-primary" />
                        </div>
                      )}
                      <h4 className="text-sm font-bold tracking-widest uppercase text-primary mb-6">Level {idx + 1}</h4>
                      <h5 className="text-3xl font-bold mb-6">{tier.name}</h5>
                      <p className={cn("text-lg leading-relaxed mb-8", idx === 2 ? "text-zinc-400" : "text-zinc-500")}>
                        {tier.description}
                      </p>
                      <ul className="space-y-4 mb-10 text-sm font-medium">
                        <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> Global Directory Listing</li>
                        <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> Technical Training</li>
                        <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> Marketing Assets</li>
                        {idx >= 1 && <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> Priority Supply</li>}
                        {idx >= 2 && <li className="flex items-center gap-3"><Check className="h-5 w-5 text-primary" /> Exclusive Flagship Branding</li>}
                      </ul>
                      <Button
                        className={cn("w-full rounded-full py-6 text-lg font-bold", idx === 2 ? "bg-primary text-white" : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200")}
                      >
                        Apply Now
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        ) : (
          <>
            <section id="benefits" ref={benefitsRef} className="py-16 bg-background">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <motion.div
                    initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                    animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-foreground mb-6">
                      Key Benefits
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      {solution.slug === "installers" &&
                        "Become an authorized STEK retailer or Premium Shop and gain visibility, credibility, marketing support, professional training, and security of supply."
                      }
                      {solution.slug === "dealerships" &&
                        "A full service solution package including volume products, business tools, after-sales support, installation guidance, and marketing materials."
                      }
                      {solution.slug === "architectural" &&
                        "Advanced window-film technology including graphene-based solutions for high performance in commercial and residential buildings."
                      }
                    </p>
                    <ul className="space-y-4">
                      {solution.benefits.map((benefit, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-3"
                          initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                          animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                        >
                          <div className="shrink-0 mt-1">
                            <Check className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-foreground">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    className="relative"
                    initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
                    animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <img
                      src={solutionHeroImages[solutionSlug] || installersImage}
                      alt={solution.name}
                      className="w-full rounded-md shadow-lg"
                    />
                  </motion.div>
                </div>
              </div>
            </section>

            {solution.offerings && solution.offerings.length > 0 && (
              <section className="py-16 bg-muted/50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <motion.div
                    className="text-center mb-12"
                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      What We Provide
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      {solution.slug === "installers"
                        ? "Comprehensive support to help you succeed as an authorized STEK partner."
                        : "Complete solutions for your business needs."
                      }
                    </p>
                  </motion.div>

                  <div className={`grid grid-cols-1 md:grid-cols-2 ${solution.offerings.length > 4 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-6`}>
                    {solution.offerings.map((offering, index) => (
                      <motion.div
                        key={offering.name}
                        initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="h-full transition-all duration-300 hover:shadow-lg overflow-hidden flex flex-col">
                          {offering.image && (
                            <div className="h-48 relative overflow-hidden">
                              <img
                                src={offering.image}
                                alt={offering.name}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                <h3 className="text-lg font-bold text-white">
                                  {offering.name}
                                </h3>
                              </div>
                            </div>
                          )}
                          <CardContent className="p-6 flex-1 flex flex-col">
                            {!offering.image && (
                              <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-primary/10 text-primary mb-4">
                                {index === 0 ? <Wrench className="h-6 w-6" /> :
                                  index === 1 ? <Layers className="h-6 w-6" /> :
                                    index === 2 ? <Users className="h-6 w-6" /> :
                                      index === 3 ? <Award className="h-6 w-6" /> :
                                        <Monitor className="h-6 w-6" />}
                              </div>
                            )}
                            {!offering.image && (
                              <h3 className="text-lg font-semibold text-foreground mb-2">
                                {offering.name}
                              </h3>
                            )}
                            <p className="text-muted-foreground text-sm flex-1">
                              {offering.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {solution.products && solution.products.length > 0 && (
              <section className="py-16 bg-muted/50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <motion.div
                    className="text-center mb-12"
                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      Film Solutions
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Multiple window-film options for architectural and commercial applications.
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solution.products.map((product, index) => (
                      <motion.div
                        key={product.name}
                        initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                          <CardContent className="p-6">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-primary/10 text-primary mb-4">
                              {index < 2 ? <Sparkles className="h-6 w-6" /> :
                                index < 4 ? <Shield className="h-6 w-6" /> :
                                  <Layers className="h-6 w-6" />}
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                              {product.name}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {product.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {solution.slug === "installers" && (
              <section className="py-16 bg-background">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <motion.div
                    className="text-center mb-12"
                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      How to Become a Certified Installer
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Follow these simple steps to join our network of professional installers.
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                      { step: "1", title: "Apply Online", description: "Fill out our application form with your business details and experience." },
                      { step: "2", title: "Training Program", description: "Complete our comprehensive multi-day training to master STEK installation techniques." },
                      { step: "3", title: "Get Certified", description: "Receive your certification and official STEK Authorized Retailer badge." },
                      { step: "4", title: "Start Growing", description: "Get listed in our global directory and start offering STEK products to customers." },
                    ].map((item, index) => (
                      <motion.div
                        key={item.step}
                        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="text-center h-full">
                          <CardContent className="p-6">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
                              {item.step}
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                              {item.title}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                              {item.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            <section className="py-16 bg-zinc-900 dark:bg-zinc-950">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                  className="max-w-3xl mx-auto text-center"
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    Ready to Get Started?
                  </h2>
                  <p className="text-white/70 mb-8">
                    Contact us today to learn more about our {solution.name.toLowerCase()} program and how we can help you succeed.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/contact">
                      <Button size="lg" className="gap-2" data-testid="button-contact-solution-cta">
                        Contact Us
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    <a
                      href={`${STEK_GLOBAL_URL}/training`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                        data-testid="button-training-program"
                      >
                        View Training Program
                      </Button>
                    </a>
                  </div>
                </motion.div>
              </div>
            </section>
          </>
        )
        }
      </div >
    );
  }

  return (
    <div>
      <HeroSlider
        slides={[
          {
            image: installersImage,
            subtitle: "STEK Automotive",
            title: "Our Solutions",
            description: "Whether you're a professional installer, automotive dealership, or looking for architectural applications, STEK has the right solution for your needs.",
            cta: (
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="gap-2">
                    Partner With us
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )
          },
          {
            image: architecturalImage,
            subtitle: "Architectural Excellence",
            title: "Beyond Automotive",
            description: "Discover our advanced window-film technology for commercial and residential buildings. Enhance comfort, security, and efficiency.",
            cta: (
              <div className="flex flex-wrap gap-4">
                <Link href="/solutions/architectural">
                  <Button size="lg" className="gap-2">
                    Architectural Solutions
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )
          }
        ]}
      />

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SOLUTIONS.map((solution, index) => {
              const Icon = solutionIcons[solution.slug] || Wrench;
              const sol = solution as SolutionType;
              return (
                <motion.div
                  key={solution.slug}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/solutions/${solution.slug}`}
                    className="group block"
                  >
                    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/30 group-hover:scale-[1.02]">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={solutionHeroImages[solution.slug] || installersImage}
                          alt={solution.name}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-primary/10 text-primary mb-4">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {solution.name}
                        </h2>
                        {sol.tagline && (
                          <p className="text-sm text-primary font-medium mb-3">
                            {sol.tagline}
                          </p>
                        )}
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {solution.description}
                        </p>
                        <ul className="space-y-2 mb-6">
                          {solution.benefits.slice(0, 3).map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center text-primary font-medium">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Not Sure Which Solution is Right for You?
            </h2>
            <p className="text-muted-foreground mb-8">
              Our team is here to help you find the perfect partnership opportunity. Contact us today.
            </p>
            <Link href="/contact">
              <Button size="lg" className="gap-2" data-testid="button-solutions-contact">
                Contact Our Team
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
