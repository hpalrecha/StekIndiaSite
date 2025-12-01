import { Link } from "wouter";
import { ArrowRight, ChevronRight, Droplets, Sparkles, Shield, Ban, Eye } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard, ProductGrid, AnimatedHero, FeatureCard } from "@/components/ui/animated-card";
import { STEK_GLOBAL_URL } from "@/lib/constants";

import heroImage from "@assets/stock_images/luxury_car_paint_pro_303b9fb8.jpg";
import ppfImage from "@assets/stock_images/luxury_car_paint_pro_0942a54c.jpg";
import windowImage from "@assets/stock_images/car_window_tinting_p_2606050b.jpg";
import carCareImage from "@assets/stock_images/professional_auto_de_4d79a865.jpg";

const keyFeatures = [
  {
    icon: <Droplets className="h-7 w-7" />,
    title: "Hydrophobic",
    description: "Advanced water-repellent properties — water beads up and rolls off, taking dirt along, making cleaning easier.",
  },
  {
    icon: <Sparkles className="h-7 w-7" />,
    title: "Self-Healing",
    description: "Minor scratches and blemishes disappear over time via heat-activated properties, keeping the surface smooth and new.",
  },
  {
    icon: <Shield className="h-7 w-7" />,
    title: "Reliable Protection",
    description: "Options of 8 mil or 10 mil thickness for ultimate protection from scratches and environmental damage.",
  },
  {
    icon: <Ban className="h-7 w-7" />,
    title: "Stain Resistant",
    description: "Film resists stains, helping maintain your car's immaculate, showroom-quality look.",
  },
  {
    icon: <Eye className="h-7 w-7" />,
    title: "Ultra-Gloss Finish",
    description: "Delivers vibrant hues and brilliant shine, enhancing aesthetic while protecting paint.",
  },
];

const clearSeries = [
  { id: "shield", name: "DYNO shield", tagline: "Premium Shield", image: ppfImage },
  { id: "lite", name: "DYNO lite", tagline: "Lightweight Strength", image: ppfImage },
  { id: "lite-plus", name: "DYNO lite+", tagline: "Enhanced Lightweight Protection", image: ppfImage },
  { id: "might", name: "DYNO might", tagline: "Ultimate Durability", image: ppfImage },
  { id: "extreme", name: "DYNO extreme", tagline: "Ultimate Heatshield", image: ppfImage },
  { id: "supreme", name: "DYNO supreme", tagline: "Say No to Water Spots", image: ppfImage },
  { id: "pure", name: "DYNO pure", tagline: "Climate Combat", image: ppfImage },
  { id: "pure-plus", name: "DYNO pure+", tagline: "Advanced Climate Protection", image: ppfImage },
  { id: "prism", name: "DYNO prism", tagline: "Detailed Dimension", image: ppfImage },
];

const colorSeries = [
  { id: "black", name: "DYNO black", tagline: "Enter the Dark Side", image: heroImage },
  { id: "red", name: "DYNO red", tagline: "Let's Paint the Town Red", image: heroImage },
  { id: "green", name: "DYNO green", tagline: "More Than a Color, It's a Lifestyle", image: heroImage },
  { id: "miami-blue", name: "DYNO miami-blue", tagline: "Vibrant Blue Meets Vigorous Protection", image: heroImage },
  { id: "white", name: "DYNO white", tagline: "Dazzling, Luxurious Touch", image: heroImage },
  { id: "gray", name: "DYNO gray", tagline: "Elegance, Resilience, Unmatched", image: heroImage },
  { id: "purple", name: "DYNO purple", tagline: "The Royal Hue of Protection", image: heroImage },
  { id: "shift-green", name: "DYNO shift-green", tagline: "Electric Shades of Green", image: heroImage },
];

const patternSeries = [
  { id: "carbon", name: "DYNO carbon", tagline: "Ultimate Performance", image: ppfImage },
  { id: "carbon-gloss", name: "DYNO carbon-gloss", tagline: "High-Performance Style", image: ppfImage },
  { id: "carbon-matte", name: "DYNO carbon-matte", tagline: "High-Impact Protection", image: ppfImage },
];

const chromeSeries = [
  { id: "chrome-black", name: "DYNO chrome-black", tagline: "Infinite Protection", image: heroImage },
  { id: "chrome-black-matte", name: "DYNO chrome-black matte", tagline: "Silky Smoothness", image: heroImage },
  { id: "chrome-blue", name: "DYNO chrome-blue", tagline: "Protection with Sapphire Shine", image: heroImage },
  { id: "chrome-blue-matte", name: "DYNO chrome-blue matte", tagline: "Striking Presence of Cobalt Blue", image: heroImage },
];

const headlightSeries = [
  { id: "smoke", name: "DYNO smoke", tagline: "Intense Grey", image: windowImage },
  { id: "shadow", name: "DYNO shadow", tagline: "Subtle Grey", image: windowImage },
  { id: "shade", name: "DYNO shade", tagline: "Cool Elegance", image: windowImage },
  { id: "storm", name: "DYNO storm", tagline: "Graphite in the Mist", image: windowImage },
  { id: "fancy", name: "DYNO fancy", tagline: "Refined Golden Glow", image: windowImage },
];

const windshieldSeries = [
  { id: "top", name: "DYNO top", tagline: "Ultimate Windshield Protection", image: windowImage },
];

interface ProductSectionProps {
  title: string;
  description: string;
  products: { id: string; name: string; tagline: string; image: string }[];
  id: string;
}

function ProductSection({ title, description, products, id }: ProductSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section ref={ref} id={id} className="py-16 bg-background scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            {description}
          </p>
        </motion.div>

        <ProductGrid columns={4}>
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.name}
              tagline={product.tagline}
              href="/contact"
              ctaText="Learn More"
              index={index}
            />
          ))}
        </ProductGrid>
      </div>
    </section>
  );
}

export default function DynoBrand() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div>
      <AnimatedHero
        backgroundImage={heroImage}
        subtitle="STEK Automotive"
        title="Drive Yours, Nobody Owns"
        description="DYNO offers more than just protection — we deliver exclusivity. Our premium solutions for high-end vehicles are designed for those who understand that true luxury is something not everyone can have, but everyone desires."
      >
        <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/brands" className="hover:text-white transition-colors">Brands</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white">DYNO</span>
        </nav>
        <div className="flex flex-wrap gap-4">
          <Link href="/installer-locator">
            <Button size="lg" className="gap-2" data-testid="button-find-installer-dyno">
              Find an Installer
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              data-testid="button-get-quote-dyno"
            >
              Get a Quote
            </Button>
          </Link>
        </div>
      </AnimatedHero>

      <section className="py-16 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Why Choose DYNO?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              As the market leader, DYNO doesn't follow trends — we define them. 
              Our innovative technology preserves the elegance and performance of your vehicle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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

      <section className="py-8 bg-background border-b border-border sticky top-16 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 overflow-x-auto pb-2 -mb-2 scrollbar-hide">
            {[
              { id: "clear", label: "Clear Series" },
              { id: "color", label: "Color Series" },
              { id: "pattern", label: "Pattern Series" },
              { id: "chrome", label: "Chrome Series" },
              { id: "headlight", label: "Headlights" },
              { id: "windshield", label: "Windshield" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <ProductSection
        id="clear"
        title="DYNO Clear Series PPF"
        description="Premium transparent protection films that preserve your vehicle's original paint while providing superior defense against scratches, chips, and environmental damage."
        products={clearSeries}
      />

      <div className="bg-muted/30">
        <ProductSection
          id="color"
          title="DYNO Color Series PPF"
          description="Transform your vehicle's appearance with our vibrant color protection films. Each color variant delivers stunning aesthetics while providing full paint protection."
          products={colorSeries}
        />
      </div>

      <ProductSection
        id="pattern"
        title="DYNO Pattern Series PPF"
        description="High-performance carbon fiber textured films that give your vehicle a sporty, aggressive look while maintaining excellent protective properties."
        products={patternSeries}
      />

      <div className="bg-muted/30">
        <ProductSection
          id="chrome"
          title="DYNO Chrome & Specialty Series"
          description="Specialized films for chrome delete applications. Convert your chrome trim to sleek black or custom colors for a modern, unified appearance."
          products={chromeSeries}
        />
      </div>

      <ProductSection
        id="headlight"
        title="DYNO Headlights Film Series"
        description="Premium headlight protection and styling films that protect your lights while adding a custom look to your vehicle."
        products={headlightSeries}
      />

      <div className="bg-muted/30">
        <ProductSection
          id="windshield"
          title="DYNO Windshield Protection"
          description="Clear windshield protection film that reduces glare, blocks harmful UV rays, and keeps your cabin cool while providing impact protection."
          products={windshieldSeries}
        />
      </div>

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
              Experience DYNO Excellence
            </h2>
            <p className="text-white/70 mb-8">
              By choosing DYNO, you're not only protecting your vehicle — you're joining an exclusive community 
              that values quality, innovation, and distinction. Contact us today to learn more.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/installer-locator">
                <Button size="lg" className="gap-2" data-testid="button-find-installer-dyno-cta">
                  Find an Installer
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
                  data-testid="button-global-dyno"
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
