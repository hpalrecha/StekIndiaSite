import { Link } from "wouter";
import { useRef } from "react";
import { ArrowRight, ChevronRight, Thermometer, Sun, Sparkles, Zap, Eye, Lock } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FeatureCard } from "@/components/ui/animated-card";
import { BRANDS, STEK_GLOBAL_URL } from "@/lib/constants";

import lunarayHero from "@assets/lunaray-hero.png";
import lunarayCar from "@assets/lunaray-car.webp";

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

  const brand = BRANDS.find(b => b.slug === "lunarray");

  return (
    <div>
      <section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${lunarayHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full text-center">
          <motion.nav
            className="flex items-center justify-center gap-2 text-sm text-white/60 mb-8"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/brands" className="hover:text-white transition-colors">Brands</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">LUNARAY</span>
          </motion.nav>

          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-wide mb-4"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            LUNARAY
          </motion.h1>
          
          <motion.p
            className="text-lg sm:text-xl text-white/80 tracking-widest uppercase mb-10"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            STEK Automotive Window Film
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/installer-locator">
              <Button size="lg" className="gap-2" data-testid="button-find-installer-lunaray">
                Find an Installer
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                data-testid="button-get-quote-lunaray"
              >
                Get a Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section ref={featuresRef} className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Key Benefits
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built from years of experience and a deep understanding of both car-owners and tint installers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {keyFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section 
        className="relative min-h-[60vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${lunarayCar})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          <motion.div
            className="max-w-xl"
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-white/60 uppercase tracking-widest mb-4">
              PET Film Line
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              NEX+ / SMART+ / ACTION+
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Targeted UV & IR Protection for Preventing Skin Aging — PET film with enhanced UV & IR protection against skin-aging long wavelengths.
            </p>
            <Link href="/contact">
              <Button size="lg" className="gap-2" data-testid="button-explore-pet-film">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Explore Other Brands
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our complete range of premium protection solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BRANDS.filter((b) => b.slug !== "lunarray").map((b) => (
              <Link key={b.slug} href={b.slug === 'dyno' ? '/brands/dyno' : `/brands/${b.slug}`}>
                <Card className="hover-elevate active-elevate-2 transition-all duration-300 h-full">
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold text-foreground">{b.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{b.tagline}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a1628]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Experience LUNARAY
            </h2>
            <p className="text-white/70 mb-8">
              Transform your driving experience with premium window film technology. Contact us today to learn more.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="gap-2" data-testid="button-contact-lunaray">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a
                href={STEK_GLOBAL_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                  data-testid="button-global-lunaray"
                >
                  Visit Global Site
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
