import { Link } from "wouter";
import { useRef } from "react";
import { ArrowRight, Shield, Award, Users, Sparkles, CheckCircle } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard, ProductGrid, FeatureCard } from "@/components/ui/animated-card";
import { HeroSlider } from "@/components/ui/hero-slider";
import { PRODUCT_CATEGORIES, SOLUTIONS, STEK_GLOBAL_URL } from "@/lib/constants";

import heroImage from "@assets/stock_images/luxury_car_paint_pro_303b9fb8.jpg";
import installersImage from "@assets/stock_images/professional_auto_de_0dbcaf65.jpg";
import dealershipsImage from "@assets/stock_images/car_dealership_showr_6eee07be.jpg";
import architecturalImage from "@assets/stock_images/modern_glass_buildin_b8a9e927.jpg";
import ppfImage from "@assets/stock_images/luxury_car_paint_pro_0942a54c.jpg";
import windowImage from "@assets/stock_images/car_window_tinting_p_2606050b.jpg";
import windshieldImage from "@assets/stock_images/car_window_tinting_p_2bad5a81.jpg";
import carCareImage from "@assets/stock_images/professional_auto_de_4d79a865.jpg";

const productImages: Record<string, string> = {
  "paint-protection-film": ppfImage,
  "window-film": windowImage,
  "windshield-film": windshieldImage,
  "car-care": carCareImage,
};

const solutionImages: Record<string, string> = {
  installers: installersImage,
  dealerships: dealershipsImage,
  architectural: architecturalImage,
};

const features = [
  {
    icon: <Shield className="h-7 w-7" />,
    title: "Superior Protection",
    description: "Advanced technology that shields your vehicle from scratches, rock chips, and environmental damage.",
  },
  {
    icon: <Award className="h-7 w-7" />,
    title: "Premium Quality",
    description: "Industry-leading materials with self-healing properties and long-lasting performance.",
  },
  {
    icon: <Users className="h-7 w-7" />,
    title: "Certified Installers",
    description: "Nationwide network of trained professionals ensuring flawless installation.",
  },
  {
    icon: <Sparkles className="h-7 w-7" />,
    title: "Lasting Brilliance",
    description: "Preserve your vehicle's showroom finish with UV-resistant, hydrophobic coatings.",
  },
];

const stats = [
  { value: "10+", label: "Years of Excellence" },
  { value: "500+", label: "Certified Installers" },
  { value: "50K+", label: "Protected Vehicles" },
  { value: "100%", label: "Customer Satisfaction" },
];

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const statsRef = useRef<HTMLElement>(null);
  const statsInView = useInView(statsRef, { once: true });

  return (
    <div>
      <HeroSlider
        slides={[
          {
            image: heroImage,
            subtitle: "Premium Protection",
            title: "Premium Protection for Your Vehicle",
            description: "STEK India offers world-class paint protection films and window tinting solutions. Protect your investment with industry-leading technology and certified installation.",
            cta: (
              <div className="flex flex-wrap gap-4">
                <Link href="/products/paint-protection-film">
                  <Button size="lg" className="gap-2" data-testid="button-explore-products">
                    Explore Products
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/installer-locator">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                    data-testid="button-find-installer"
                  >
                    Find an Installer
                  </Button>
                </Link>
              </div>
            )
          },
          {
            image: ppfImage,
            subtitle: "Advanced Technology",
            title: "Self-Healing Paint Protection",
            description: "Keep your car looking new with our advanced self-healing paint protection films. Say goodbye to scratches and rock chips.",
            cta: (
              <div className="flex flex-wrap gap-4 pt-8">
                <Link href="/products/paint-protection-film">
                  <Button size="lg" className="gap-2">
                    Discover PPF
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )
          },
          {
            image: windowImage,
            subtitle: "Comfort & Privacy",
            title: "Premium Window Tinting",
            description: "Experience superior heat rejection and UV protection with our range of ceramic window films.",
            cta: (
              <div className="flex flex-wrap gap-4 pt-8">
                <Link href="/products/window-film">
                  <Button size="lg" className="gap-2">
                    View Window Films
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )
          }
        ]}
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of automotive protection solutions designed to preserve and enhance your vehicle.
            </p>
          </motion.div>

          <ProductGrid columns={4}>
            {PRODUCT_CATEGORIES.map((category, index) => (
              <ProductCard
                key={category.slug}
                image={productImages[category.slug] || ppfImage}
                title={category.name}
                tagline={category.description}
                href={`/products/${category.slug}`}
                ctaText="Learn More"
                index={index}
              />
            ))}
          </ProductGrid>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose STEK India?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with expert installation to deliver unmatched vehicle protection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
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

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Solutions for Every Need
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're an installer, dealership, or looking for architectural solutions, we have the right partnership for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SOLUTIONS.map((solution, index) => (
              <motion.div
                key={solution.slug}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/solutions/${solution.slug}`} className="group block">
                  <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/30 group-hover:scale-[1.02]">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={solutionImages[solution.slug] || installersImage}
                        alt={solution.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {solution.name}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {solution.description}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {solution.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
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
            ))}
          </div>
        </div>
      </section>

      <section ref={statsRef} className="py-16 bg-zinc-900 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-white/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${installersImage})` }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Become a Certified STEK Installer
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Join our network of professional installers and grow your business with premium STEK products, training, and support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`${STEK_GLOBAL_URL}/become-installer`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2" data-testid="button-apply-now">
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                  data-testid="button-contact-us"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
