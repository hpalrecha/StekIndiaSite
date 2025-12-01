import { useRoute, Link } from "wouter";
import { useRef } from "react";
import { ArrowRight, ChevronRight, ExternalLink, Check, Droplets, Sparkles, Shield, Eye, Ban, Sun, Thermometer, Lock, Zap, Layers } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BRANDS, STEK_GLOBAL_URL } from "@/lib/constants";
import { ProductCard, ProductGrid, AnimatedHero, FeatureCard } from "@/components/ui/animated-card";

import heroImage from "@assets/stock_images/luxury_car_paint_pro_303b9fb8.jpg";
import ppfImage from "@assets/stock_images/luxury_car_paint_pro_0942a54c.jpg";
import windowImage from "@assets/stock_images/car_window_tinting_p_2606050b.jpg";
import carCareImage from "@assets/stock_images/professional_auto_de_4d79a865.jpg";

const brandImages: Record<string, string> = {
  lunarray: windowImage,
  dyno: ppfImage,
  forceshield: heroImage,
  stek: windowImage,
  "stek-formula": carCareImage,
};

const featureIcons: Record<string, React.ReactNode> = {
  "Heat rejection": <Thermometer className="h-7 w-7" />,
  "UV protection": <Sun className="h-7 w-7" />,
  "Lasting color stability": <Sparkles className="h-7 w-7" />,
  "No signal interference": <Zap className="h-7 w-7" />,
  "True optical clarity": <Eye className="h-7 w-7" />,
  "Privacy & security": <Lock className="h-7 w-7" />,
  "Hydrophobic": <Droplets className="h-7 w-7" />,
  "Self-healing": <Sparkles className="h-7 w-7" />,
  "Reliable protection": <Shield className="h-7 w-7" />,
  "Stain resistant": <Ban className="h-7 w-7" />,
  "Ultra-gloss finish": <Eye className="h-7 w-7" />,
  "Cutting-edge protection": <Shield className="h-7 w-7" />,
  "Bold stylish designs": <Sparkles className="h-7 w-7" />,
  "Protection + customization": <Layers className="h-7 w-7" />,
  "Premium finishes": <Eye className="h-7 w-7" />,
  "Graphene Cooling Technology": <Thermometer className="h-7 w-7" />,
  "Superior heat rejection": <Thermometer className="h-7 w-7" />,
  "Glare reduction": <Sun className="h-7 w-7" />,
  "Enhanced comfort": <Sparkles className="h-7 w-7" />,
  "Professional-grade formulas": <Shield className="h-7 w-7" />,
  "Film installation products": <Layers className="h-7 w-7" />,
  "Surface prep & decontamination": <Sparkles className="h-7 w-7" />,
  "Protection & maintenance": <Shield className="h-7 w-7" />,
};

interface Brand {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  features: string[];
  series?: { id: string; name: string; tagline: string }[];
  categories?: { id: string; name: string; description: string }[];
}

export default function Brands() {
  const [, params] = useRoute("/brands/:brand");
  const brandSlug = params?.brand;
  const prefersReducedMotion = useReducedMotion();
  const featuresRef = useRef<HTMLElement>(null);
  const featuresInView = useInView(featuresRef, { once: true });

  if (brandSlug) {
    const brand = BRANDS.find((b) => b.slug === brandSlug) as Brand | undefined;

    if (!brand) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Brand Not Found</h1>
            <p className="text-muted-foreground mb-6">The brand you're looking for doesn't exist.</p>
            <Link href="/brands">
              <Button>View All Brands</Button>
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div>
        <AnimatedHero
          backgroundImage={brandImages[brandSlug] || heroImage}
          subtitle="STEK Automotive"
          title={brand.name}
          description={brand.description}
        >
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/brands" className="hover:text-white transition-colors">Brands</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">{brand.name}</span>
          </nav>
          <p className="text-xl text-primary font-medium mb-6">{brand.tagline}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/installer-locator">
              <Button size="lg" className="gap-2" data-testid={`button-find-installer-${brand.slug}`}>
                Find an Installer
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                data-testid={`button-enquire-${brand.slug}`}
              >
                Get a Quote
              </Button>
            </Link>
          </div>
        </AnimatedHero>

        <section ref={featuresRef} className="py-16 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Key Features
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover what makes {brand.name} the choice of professionals and enthusiasts alike.
              </p>
            </motion.div>

            <div className={`grid grid-cols-1 md:grid-cols-2 ${brand.features.length > 4 ? 'lg:grid-cols-3 xl:grid-cols-6' : 'lg:grid-cols-4'} gap-8`}>
              {brand.features.map((feature, index) => (
                <FeatureCard
                  key={feature}
                  icon={featureIcons[feature] || <Shield className="h-7 w-7" />}
                  title={feature}
                  description=""
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {brand.series && brand.series.length > 0 && (
          <section className="py-16 bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                className="mb-12"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Product Series
                </h2>
                <p className="text-muted-foreground max-w-2xl">
                  Explore our range of {brand.name} products designed to meet your specific needs.
                </p>
              </motion.div>

              <ProductGrid columns={brand.series.length > 6 ? 4 : 3}>
                {brand.series.map((series, index) => (
                  <ProductCard
                    key={series.id}
                    image={brandImages[brandSlug] || heroImage}
                    title={series.name}
                    tagline={series.tagline}
                    href="/contact"
                    ctaText="Learn More"
                    index={index}
                  />
                ))}
              </ProductGrid>
            </div>
          </section>
        )}

        {brand.categories && brand.categories.length > 0 && (
          <section className="py-16 bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                className="mb-12"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Product Categories
                </h2>
                <p className="text-muted-foreground max-w-2xl">
                  Professional solutions for every stage of the detailing process.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {brand.categories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full transition-all duration-300 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/30">
                      <CardContent className="p-6">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-primary/10 text-primary mb-4">
                          {index === 0 ? <Sparkles className="h-6 w-6" /> : 
                           index === 1 ? <Layers className="h-6 w-6" /> : 
                           <Shield className="h-6 w-6" />}
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                          {category.name}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {category.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

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
              {BRANDS.filter((b) => b.slug !== brandSlug).map((b) => (
                <Link key={b.slug} href={b.slug === 'dyno' ? '/brands/dyno' : b.slug === 'lunarray' ? '/brands/lunarray' : `/brands/${b.slug}`}>
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
                Ready to Experience {brand.name}?
              </h2>
              <p className="text-white/70 mb-8">
                Contact us today to learn more about {brand.name} products and find a certified installer near you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="gap-2" data-testid={`button-contact-${brand.slug}`}>
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
                    className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 gap-2"
                    data-testid={`button-global-${brand.slug}`}
                  >
                    Visit Global Site
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <AnimatedHero
        backgroundImage={heroImage}
        title="Our Brands"
        description="Discover our comprehensive range of premium automotive protection brands, each designed to meet specific needs and deliver exceptional performance."
      >
        <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white">Brands</span>
        </nav>
      </AnimatedHero>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductGrid columns={3}>
            {BRANDS.map((brand, index) => (
              <motion.div
                key={brand.slug}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={brand.slug === 'dyno' ? '/brands/dyno' : brand.slug === 'lunarray' ? '/brands/lunarray' : `/brands/${brand.slug}`}
                  className="group block"
                >
                  <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/30 group-hover:scale-[1.02]">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={brandImages[brand.slug] || heroImage}
                        alt={brand.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {brand.name}
                      </h2>
                      <p className="text-sm text-primary font-medium mb-3">
                        {brand.tagline}
                      </p>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {brand.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {brand.features.slice(0, 2).map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-primary font-medium text-sm">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </ProductGrid>
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
              Global Quality, Local Service
            </h2>
            <p className="text-muted-foreground mb-8">
              All STEK products are backed by global research and development, 
              with local support and installation networks across India.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/installer-locator">
                <Button size="lg" className="gap-2" data-testid="button-find-installer-brands">
                  Find an Installer
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a
                href={STEK_GLOBAL_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="gap-2" data-testid="button-global-site">
                  Visit Global Site
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
