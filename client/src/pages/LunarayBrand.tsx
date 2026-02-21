import { Link } from "wouter";
import { useRef } from "react";
import { ArrowRight, ChevronRight, Thermometer, Sun, Sparkles, Zap, Eye, Lock } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FeatureCard, ProductCard, ProductGrid } from "@/components/ui/animated-card";
import { HeroSlider } from "@/components/ui/hero-slider";
import { BRANDS, STEK_GLOBAL_URL } from "@/lib/constants";

const lunarayMoonHero = "/images/lunaray_moon_hero.png";
const lunarayHero = "https://d31muh84oxzu1x.cloudfront.net/2cc821fe-3729-45be-a2c8-78da283bf2e0.webp"; // NEX+
const lunaraySmart = "https://d31muh84oxzu1x.cloudfront.net/fb8c8eeb-078f-4dba-8b3a-893c45a91f68.webp"; // SMART+
const lunarayAction = "https://d31muh84oxzu1x.cloudfront.net/bdfad232-2e1d-4111-b4b6-03556ebb58a8.webp"; // ACTION+
const lunarayIntercept = "https://d31muh84oxzu1x.cloudfront.net/ea55ce5d-edf0-4b96-8bbf-bfc39f13a0a5.webp";

const keyFeatures = [
  { icon: <Thermometer className="h-7 w-7" />, title: "Heat Rejection", description: "Advanced technology blocks solar heat for cooler interiors" },
  { icon: <Sun className="h-7 w-7" />, title: "UV Protection", description: "Protect occupants from harmful UV and IR radiation" },
  { icon: <Sparkles className="h-7 w-7" />, title: "Lasting Color Stability", description: "Colors stay true without fading over time" },
  { icon: <Zap className="h-7 w-7" />, title: "No Signal Interference", description: "Crystal clear phone and GPS signals" },
  { icon: <Eye className="h-7 w-7" />, title: "True Optical Clarity", description: "Perfect visibility with no distortion" },
  { icon: <Lock className="h-7 w-7" />, title: "Privacy & Security", description: "Enhanced privacy while maintaining visibility" },
];

export default function LunarayBrand() {
  const prefersReducedMotion = useReducedMotion();
  const featuresRef = useRef<HTMLElement>(null);
  const featuresInView = useInView(featuresRef, { once: true });

  const brand = BRANDS.find(b => b.slug === "lunaray");

  return (
    <div className="bg-[#020617] text-white overflow-hidden">
      {/* Global Style Celestial Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${lunarayMoonHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#020617]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-blue-400 font-medium tracking-[0.3em] uppercase mb-6 drop-shadow-lg">
              Stek Automotive Window Film
            </p>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              LUNARAY
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Transforming cars into comfortable and refreshing spaces with advanced
              heat rejection, UV protection, and effortless installation.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-none px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-500/20" onClick={() => document.getElementById('pet-film-line')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Collection
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-blue-400 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section id="features" ref={featuresRef} className="py-24 border-t border-white/5 relative bg-[#020617]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Advanced Performance
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Engineered for those who demand the best in heat rejection and optical clarity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:bg-white/[0.08]"
              >
                <div className="mb-6 p-4 rounded-2xl bg-blue-500/10 text-blue-400 w-fit group-hover:bg-blue-500 group-hover:text-white transition-colors duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated PET FILM LINE Section */}
      <section id="pet-film-line" className="py-24 bg-gradient-to-b from-[#020617] to-black relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-blue-500 font-bold tracking-widest uppercase mb-4">Official Collection</p>
              <h2 className="text-5xl md:text-6xl font-black text-white italic tracking-tighter">
                PET FILM LINE
              </h2>
            </div>
            <p className="text-slate-400 max-w-md text-lg italic">
              NEX+ / SMART+ / ACTION+ — High-performance nanotechnology for every driving style.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {brand?.series?.filter(s => s.id !== 'intercept').map((series, index) => (
              <Link key={series.id} href={`/products/window-film/${series.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative h-[600px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-black cursor-pointer shadow-2xl hover:border-blue-500/50 transition-all duration-500"
                >
                  <img
                    src={(series as any).image}
                    alt={series.name}
                    className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute bottom-10 left-10 right-10 flex flex-col items-start">
                    <span className="text-blue-400 font-bold tracking-[0.2em] mb-4 text-sm uppercase">Window Film</span>
                    <h3 className="text-5xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {series.name}
                    </h3>
                    <p className="text-slate-300 text-lg mb-8 line-clamp-2 italic opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                      {series.tagline}
                    </p>
                    <div className="flex items-center gap-3 text-white font-bold tracking-wider group-hover:gap-5 transition-all">
                      Explore Series
                      <ArrowRight className="h-6 w-6 text-blue-500" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Intercept Section - Specialized Series */}
      <section className="py-24 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[3rem] bg-[#0a0a0a] border border-white/5 p-12 md:p-20">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
              <img src={lunarayIntercept} alt="Intercept" className="h-full w-full object-cover" />
            </div>
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-400 text-sm font-bold tracking-widest uppercase mb-8 border border-red-500/20">
                Specialized Series
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                Intercept™
              </h2>
              <p className="text-2xl text-slate-400 leading-relaxed mb-12 italic">
                Beyond Tint: Antimicrobial & Safety Precision. Inhibit 99.9% of microbial growth on any glass surface.
              </p>
              <Link href="/products/window-film/intercept">
                <Button size="lg" className="bg-white text-black hover:bg-slate-200 px-10 py-8 text-xl font-bold rounded-2xl">
                  Discover Intercept
                  <ChevronRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full scale-150" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter">
            READY TO LEVEL UP?
          </h2>
          <p className="text-2xl text-slate-400 mb-16 max-w-3xl mx-auto">
            Experience the future of automotive comfort and protection with LUNARAY by STEK.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-8 text-2xl font-black rounded-full shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                Locate Dealer
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
