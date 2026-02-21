import { Link } from "wouter";
import { ArrowRight, ChevronRight, Droplets, Sparkles, Shield, Ban, Eye } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard, ProductGrid, FeatureCard } from "@/components/ui/animated-card";
import { HeroSlider } from "@/components/ui/hero-slider";
import { STEK_GLOBAL_URL } from "@/lib/constants";

const heroImage = "https://d31muh84oxzu1x.cloudfront.net/dcbb09af-4876-4c55-a248-b28c78d5a708.webp";
const ppfImage = "https://d31muh84oxzu1x.cloudfront.net/91c983d9-83f9-486a-94a8-23f0afd0241d.webp";
const windowImage = "https://d31muh84oxzu1x.cloudfront.net/2bb2f1cb-18ed-4f88-a92c-633842c161fb.webp";
const carCareImage = "https://d31muh84oxzu1x.cloudfront.net/29660617-5ef6-421d-a976-b2de65df2251.webp";

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
  { id: "dynoshield", name: "DYNOshield", tagline: "Premium Shield", image: "https://d31muh84oxzu1x.cloudfront.net/91c983d9-83f9-486a-94a8-23f0afd0241d.webp", slug: "dynoshield" },
  { id: "dynolite", name: "DYNOlite", tagline: "Lightweight Strength", image: "https://d31muh84oxzu1x.cloudfront.net/6dcda684-30a2-4032-82cb-8e89481e86fd.webp", slug: "dynolite" },
  { id: "lite-plus", name: "DYNOlite+", tagline: "Enhanced Lightweight Protection", image: "https://d31muh84oxzu1x.cloudfront.net/6dcda684-30a2-4032-82cb-8e89481e86fd.webp", slug: "dynolite" },
  { id: "might", name: "DYNO might", tagline: "Ultimate Durability", image: "https://d31muh84oxzu1x.cloudfront.net/da3857dd-8d9e-49d9-87cd-be3b2bac31a4.webp", slug: "dynomight" },
  { id: "extreme", name: "DYNO extreme", tagline: "Ultimate Heatshield", image: "https://d31muh84oxzu1x.cloudfront.net/b59d2921-39bb-46a3-b7c8-23f8eedcb31d.webp", slug: "dynoextreme" },
  { id: "supreme", name: "DYNO supreme", tagline: "Say No to Water Spots", image: "https://d31muh84oxzu1x.cloudfront.net/729c6e31-6bde-4488-8f18-31a4eb265786.webp", slug: "dynosupreme" },
  { id: "pure", name: "DYNO pure", tagline: "Climate Combat", image: "https://d31muh84oxzu1x.cloudfront.net/fab2e52e-28a7-46c9-86b8-bf2bf552df5c.webp", slug: "dynopure" },
  { id: "pure-plus", name: "DYNO pure+", tagline: "Advanced Climate Protection", image: "https://d31muh84oxzu1x.cloudfront.net/fab2e52e-28a7-46c9-86b8-bf2bf552df5c.webp", slug: "dynopure" },
  { id: "prism", name: "DYNO prism", tagline: "Detailed Dimension", image: "https://d31muh84oxzu1x.cloudfront.net/3e880fbb-a6da-4dd1-a6e8-f6afe53e345f.webp", slug: "dynoprism" },
];

const colorSeries = [
  { id: "dynoblack", name: "DYNOblack", tagline: "Enter the Dark Side", image: "https://d31muh84oxzu1x.cloudfront.net/dcbb09af-4876-4c55-a248-b28c78d5a708.webp", slug: "dynoblack" },
  { id: "red", name: "DYNO red", tagline: "Let's Paint the Town Red", image: "https://d31muh84oxzu1x.cloudfront.net/1e675430-e5c6-4291-b9ec-b805d86678bf.webp", slug: "dynored" },
  { id: "green", name: "DYNO green", tagline: "More Than a Color, It's a Lifestyle", image: "https://d31muh84oxzu1x.cloudfront.net/ff931931-ea0f-4dad-aecf-45f85e632da1.webp", slug: "dynogreen" },
  { id: "miami-blue", name: "DYNO miami-blue", tagline: "Vibrant Blue Meets Vigorous Protection", image: "https://d31muh84oxzu1x.cloudfront.net/98d984e4-c4f9-4a4a-8da5-52d4e18f39c6.webp", slug: "dynomiami-blue" },
  { id: "white", name: "DYNO white", tagline: "Dazzling, Luxurious Touch", image: "https://d31muh84oxzu1x.cloudfront.net/636b5d88-9adb-4974-b968-ab23b8009f6c.webp", slug: "dynowhite" },
  { id: "gray", name: "DYNO gray", tagline: "Elegance, Resilience, Unmatched", image: "https://d31muh84oxzu1x.cloudfront.net/ea55ce5d-edf0-4b96-8bbf-bfc39f13a0a5.webp", slug: "dynogray" },
  { id: "purple", name: "DYNO purple", tagline: "The Royal Hue of Protection", image: "https://d31muh84oxzu1x.cloudfront.net/d89e9c73-be2c-4ea0-812a-6e5d6fb3e536.webp", slug: "dynopurple" },
  { id: "shift-green", name: "DYNO shift-green", tagline: "Electric Shades of Green", image: "https://d31muh84oxzu1x.cloudfront.net/7528c378-dabf-4941-92b8-594de6f6a451.webp" },
];

const patternSeries = [
  { id: "dynocarbon", name: "DYNOcarbon", tagline: "Ultimate Performance", image: "https://d31muh84oxzu1x.cloudfront.net/7a5d9a84-80e4-40f3-8bb8-48ce5aab2c5a.webp", slug: "dynocarbon" },
  { id: "carbon-gloss", name: "DYNO carbon-gloss", tagline: "High-Performance Style", image: "https://d31muh84oxzu1x.cloudfront.net/7a5d9a84-80e4-40f3-8bb8-48ce5aab2c5a.webp", slug: "dynocarbon-gloss" },
  { id: "carbon-matte", name: "DYNO carbon-matte", tagline: "High-Impact Protection", image: "https://d31muh84oxzu1x.cloudfront.net/daaa8926-6dde-4d85-be8d-4d856f810454.webp", slug: "dynocarbon-matte" },
];

const chromeSeries = [
  { id: "chrome-black", name: "DYNO chrome-black", tagline: "Infinite Protection", image: "https://d31muh84oxzu1x.cloudfront.net/7d88ed9e-77c7-4153-9bcd-18790fe80ef2.jpg", slug: "dynochromeblack" },
  { id: "chrome-black-matte", name: "DYNO chrome-black matte", tagline: "Silky Smoothness", image: "https://d31muh84oxzu1x.cloudfront.net/7d88ed9e-77c7-4153-9bcd-18790fe80ef2.jpg" },
  { id: "chrome-blue", name: "DYNO chrome-blue", tagline: "Protection with Sapphire Shine", image: "https://d31muh84oxzu1x.cloudfront.net/7d9b1955-45fa-4a75-aba2-6234f6c0e6f4.webp" },
  { id: "chrome-blue-matte", name: "DYNO chrome-blue matte", tagline: "Striking Presence of Cobalt Blue", image: "https://d31muh84oxzu1x.cloudfront.net/7d9b1955-45fa-4a75-aba2-6234f6c0e6f4.webp" },
];

const headlightSeries = [
  { id: "dynosmoke", name: "DYNOsmoke", tagline: "Intense Grey", image: "https://d31muh84oxzu1x.cloudfront.net/9844ed92-ee68-4f8c-9970-8b1e384afeab.png", slug: "dynosmoke" },
  { id: "shadow", name: "DYNO shadow", tagline: "Subtle Grey", image: "https://d31muh84oxzu1x.cloudfront.net/a0e698b1-ff55-4642-bf20-49e1bdcf3f10.webp" },
  { id: "shade", name: "DYNO shade", tagline: "Cool Elegance", image: "https://d31muh84oxzu1x.cloudfront.net/b65cd74b-1737-432d-9ab1-f89547ff8e01.webp", slug: "dynoshad" },
  { id: "storm", name: "DYNO storm", tagline: "Graphite in the Mist", image: "https://d31muh84oxzu1x.cloudfront.net/9844ed92-ee68-4f8c-9970-8b1e384afeab.png" },
  { id: "fancy", name: "DYNO fancy", tagline: "Refined Golden Glow", image: "https://d31muh84oxzu1x.cloudfront.net/06d1cf36-5d37-401d-b56e-5cbf23810865.png", slug: "dynofancy" },
];

const windshieldSeries = [
  { id: "top", name: "DYNO top", tagline: "Ultimate Windshield Protection", image: "https://d31muh84oxzu1x.cloudfront.net/29660617-5ef6-421d-a976-b2de65df2251.webp", slug: "dynotop" },
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
              href={(product as any).slug ? `/products/paint-protection-film/${(product as any).slug}` : "/contact"}
              ctaText={(product as any).slug ? "Learn More" : "Enquire Now"}
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
      <HeroSlider
        slides={[
          {
            image: heroImage,
            subtitle: "STEK Automotive",
            title: "Drive Yours, Nobody Owns",
            description: "DYNO offers more than just protection — we deliver exclusivity. Our premium solutions for high-end vehicles are designed for those who understand that true luxury is something not everyone can have, but everyone desires.",
            cta: (
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
            )
          },
          {
            image: ppfImage,
            subtitle: "Clear Protection",
            title: "Premium Shield Technology",
            description: "Experience the ultimate in clear paint protection. Our DYNO shield series provides superior defense against rock chips, scratches, and environmental hazards while maintaining a mirror-like finish.",
            cta: (
              <div className="flex flex-wrap gap-4">
                <Link href="#clear">
                  <Button size="lg" className="gap-2">
                    Explore Clear Series
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )
          },
          {
            image: carCareImage,
            subtitle: "Advanced Solutions",
            title: "Beyond Just Protection",
            description: "From self-healing properties to extreme hydrophobic performance, STEK DYNO represents the pinnacle of automotive care technology. Your vehicle deserves nothing less than perfection.",
            cta: (
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="gap-2">
                    Schedule Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )
          }
        ]}
      />

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
