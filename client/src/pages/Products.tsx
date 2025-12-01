import { useRoute, Link } from "wouter";
import { ArrowRight, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PRODUCT_CATEGORIES, STEK_GLOBAL_URL } from "@/lib/constants";

import ppfImage from "@assets/stock_images/luxury_car_paint_pro_0942a54c.jpg";
import ppfHeroImage from "@assets/stock_images/luxury_car_paint_pro_303b9fb8.jpg";
import windowImage from "@assets/stock_images/car_window_tinting_p_2606050b.jpg";
import windshieldImage from "@assets/stock_images/car_window_tinting_p_2bad5a81.jpg";
import carCareImage from "@assets/stock_images/professional_auto_de_4d79a865.jpg";

const categoryHeroImages: Record<string, string> = {
  "paint-protection-film": ppfHeroImage,
  "window-film": windowImage,
  "windshield-film": windshieldImage,
  "car-care": carCareImage,
};

const subcategoryImages: Record<string, string> = {
  transparent: ppfImage,
  color: ppfHeroImage,
  pattern: ppfImage,
  chrome: ppfHeroImage,
  ceramic: windowImage,
  carbon: windowImage,
  clear: windshieldImage,
  formula: carCareImage,
};

export default function Products() {
  const [, params] = useRoute("/products/:category");
  const categorySlug = params?.category;

  if (categorySlug) {
    const category = PRODUCT_CATEGORIES.find((c) => c.slug === categorySlug);

    if (!category) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">The product category you're looking for doesn't exist.</p>
            <Link href="/products">
              <Button>View All Products</Button>
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div>
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${categoryHeroImages[categorySlug] || ppfHeroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">{category.name}</span>
            </nav>
            
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                {category.name}
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                {category.description}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {category.subcategories && category.subcategories.length > 0 ? (
              <>
                <h2 className="text-2xl font-bold text-foreground mb-8">
                  Available Options
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.subcategories.map((sub) => (
                    <Card
                      key={sub.slug}
                      className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300"
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={subcategoryImages[sub.slug] || ppfImage}
                          alt={sub.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {sub.name}
                        </h3>
                        <p className="text-muted-foreground mb-4 text-sm">
                          {sub.description}
                        </p>
                        <div className="space-y-2 mb-6">
                          {sub.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Link href="/contact">
                          <Button variant="outline" className="w-full gap-2" data-testid={`button-enquire-${sub.slug}`}>
                            Enquire Now
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-6">
                  Contact us for more information about our {category.name.toLowerCase()} products.
                </p>
                <Link href="/contact">
                  <Button>Contact Us</Button>
                </Link>
              </div>
            )}
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Ready to Protect Your Vehicle?
              </h2>
              <p className="text-muted-foreground mb-8">
                Find a certified STEK installer near you or contact us for a personalized quote.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/installer-locator">
                  <Button size="lg" className="gap-2" data-testid="button-find-installer-cta">
                    Find an Installer
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" data-testid="button-get-quote">
                    Get a Quote
                  </Button>
                </Link>
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
            <span className="text-white">Products</span>
          </nav>
          
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our Products
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Discover our comprehensive range of automotive protection solutions. 
              From paint protection films to window tinting, we have everything to preserve your vehicle's brilliance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRODUCT_CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                className="group"
              >
                <Card className="overflow-hidden h-full hover-elevate active-elevate-2 transition-all duration-300">
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden">
                      <img
                        src={categoryHeroImages[category.slug] || ppfHeroImage}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="flex-1 p-6 flex flex-col justify-center">
                      <Badge className="w-fit mb-3" variant="secondary">
                        {category.subcategories?.length || 0} Options
                      </Badge>
                      <h2 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {category.name}
                      </h2>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {category.description}
                      </p>
                      <div className="flex items-center text-primary font-medium">
                        View Products
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Not Sure Which Product You Need?
            </h2>
            <p className="text-muted-foreground mb-8">
              Our team is here to help you choose the perfect protection solution for your vehicle. 
              Contact us for expert guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="gap-2" data-testid="button-get-advice">
                  Get Expert Advice
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a
                href={`${STEK_GLOBAL_URL}/blog`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" data-testid="button-read-guides">
                  Read Our Guides
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
