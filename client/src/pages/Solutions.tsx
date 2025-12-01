import { useRoute, Link } from "wouter";
import { useRef } from "react";
import { ArrowRight, ChevronRight, Check, Building2, Wrench, Store, Shield, Layers, Sparkles, Monitor, Award, Users } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SOLUTIONS, STEK_GLOBAL_URL } from "@/lib/constants";
import { AnimatedHero, ProductCard, ProductGrid, FeatureCard } from "@/components/ui/animated-card";

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
  offerings?: { name: string; description: string }[];
  products?: { name: string; description: string }[];
  ctaText: string;
}

export default function Solutions() {
  const [, params] = useRoute("/solutions/:solution");
  const solutionSlug = params?.solution;
  const prefersReducedMotion = useReducedMotion();
  const benefitsRef = useRef<HTMLElement>(null);
  const benefitsInView = useInView(benefitsRef, { once: true });

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
        <AnimatedHero
          backgroundImage={solutionHeroImages[solutionSlug] || installersImage}
          subtitle="STEK Solutions"
          title={solution.name}
          description={solution.description}
        >
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">{solution.name}</span>
          </nav>
          {solution.tagline && (
            <p className="text-xl text-primary font-medium mb-6">{solution.tagline}</p>
          )}
          <div className="flex flex-wrap gap-4">
            {solution.slug === "installers" ? (
              <a
                href={`${STEK_GLOBAL_URL}/become-installer`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2" data-testid="button-solution-cta">
                  {solution.ctaText}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            ) : (
              <Link href="/contact">
                <Button size="lg" className="gap-2" data-testid="button-solution-cta">
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
                data-testid="button-contact-solution"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </AnimatedHero>

        <section ref={benefitsRef} className="py-16 bg-background">
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
                    <Card className="h-full transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-primary/10 text-primary mb-4">
                          {index === 0 ? <Wrench className="h-6 w-6" /> : 
                           index === 1 ? <Layers className="h-6 w-6" /> : 
                           index === 2 ? <Users className="h-6 w-6" /> :
                           index === 3 ? <Award className="h-6 w-6" /> :
                           <Monitor className="h-6 w-6" />}
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {offering.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
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
      </div>
    );
  }

  return (
    <div>
      <AnimatedHero
        backgroundImage={installersImage}
        title="Our Solutions"
        description="Whether you're a professional installer, automotive dealership, or looking for architectural applications, STEK has the right solution for your needs."
      >
        <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white">Solutions</span>
        </nav>
      </AnimatedHero>

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
