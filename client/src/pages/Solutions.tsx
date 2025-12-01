import { useRoute, Link } from "wouter";
import { ArrowRight, ChevronRight, Check, Building2, Wrench, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SOLUTIONS, STEK_GLOBAL_URL } from "@/lib/constants";

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

export default function Solutions() {
  const [, params] = useRoute("/solutions/:solution");
  const solutionSlug = params?.solution;

  if (solutionSlug) {
    const solution = SOLUTIONS.find((s) => s.slug === solutionSlug);

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
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${solutionHeroImages[solutionSlug] || installersImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">{solution.name}</span>
            </nav>
            
            <div className="max-w-2xl">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-md bg-primary/20 text-white mb-6">
                <Icon className="h-7 w-7" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                {solution.name}
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                {solution.description}
              </p>
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
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Key Benefits
                </h2>
                <p className="text-muted-foreground mb-8">
                  {solution.slug === "installers" && 
                    "Join the STEK family and unlock your business potential with our comprehensive installer program."
                  }
                  {solution.slug === "dealerships" && 
                    "Enhance your dealership offerings with premium STEK protection products and boost your revenue."
                  }
                  {solution.slug === "architectural" && 
                    "Transform buildings with energy-efficient, UV-blocking window films for commercial and residential applications."
                  }
                </p>
                <ul className="space-y-4">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="shrink-0 mt-1">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <img
                  src={solutionHeroImages[solutionSlug] || installersImage}
                  alt={solution.name}
                  className="w-full rounded-md shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {solution.slug === "installers" && (
          <section className="py-16 bg-muted/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  How to Become a Certified Installer
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Follow these simple steps to join our network of professional installers.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { step: "1", title: "Apply Online", description: "Fill out our application form with your business details and experience." },
                  { step: "2", title: "Training", description: "Complete our comprehensive training program to learn STEK installation techniques." },
                  { step: "3", title: "Get Certified", description: "Receive your certification and start offering STEK products to customers." },
                ].map((item) => (
                  <Card key={item.step} className="text-center">
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
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-16 bg-zinc-900 dark:bg-zinc-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-white/70 mb-8">
                Contact us today to learn more about our {solution.name.toLowerCase()} program and how we can help you succeed.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="gap-2" data-testid="button-contact-solution">
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
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section className="relative py-20 bg-zinc-900 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Solutions</span>
          </nav>
          
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our Solutions
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Whether you're a professional installer, automotive dealership, or looking for architectural applications, 
              STEK has the right solution for your needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SOLUTIONS.map((solution) => {
              const Icon = solutionIcons[solution.slug] || Wrench;
              return (
                <Link
                  key={solution.slug}
                  href={`/solutions/${solution.slug}`}
                  className="group"
                >
                  <Card className="overflow-hidden h-full hover-elevate active-elevate-2 transition-all duration-300">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={solutionHeroImages[solution.slug] || installersImage}
                        alt={solution.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-primary/10 text-primary mb-4">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {solution.name}
                      </h2>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
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
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
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
          </div>
        </div>
      </section>
    </div>
  );
}
