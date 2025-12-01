import { useRoute, Link } from "wouter";
import { ArrowRight, ChevronRight, ExternalLink, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BRANDS, STEK_GLOBAL_URL } from "@/lib/constants";

import heroImage from "@assets/stock_images/luxury_car_paint_pro_303b9fb8.jpg";
import ppfImage from "@assets/stock_images/luxury_car_paint_pro_0942a54c.jpg";
import windowImage from "@assets/stock_images/car_window_tinting_p_2606050b.jpg";
import carCareImage from "@assets/stock_images/professional_auto_de_4d79a865.jpg";

const brandImages: Record<string, string> = {
  lunarray: windowImage,
  dyno: ppfImage,
  forceshield: heroImage,
  stek: ppfImage,
  "stek-formula": carCareImage,
};

export default function Brands() {
  const [, params] = useRoute("/brands/:brand");
  const brandSlug = params?.brand;

  if (brandSlug) {
    const brand = BRANDS.find((b) => b.slug === brandSlug);

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
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${brandImages[brandSlug] || heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/brands" className="hover:text-white transition-colors">Brands</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">{brand.name}</span>
            </nav>
            
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                {brand.name}
              </h1>
              <p className="text-xl text-primary font-medium mb-6">
                {brand.tagline}
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                {brand.description}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Key Features
                </h2>
                <ul className="space-y-4">
                  {brand.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="shrink-0 mt-1">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-foreground text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/installer-locator">
                    <Button size="lg" className="gap-2" data-testid={`button-find-installer-${brand.slug}`}>
                      Find an Installer
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" data-testid={`button-enquire-${brand.slug}`}>
                      Get a Quote
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src={brandImages[brandSlug] || heroImage}
                  alt={brand.name}
                  className="w-full rounded-md shadow-lg"
                />
              </div>
            </div>
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
              {BRANDS.filter((b) => b.slug !== brandSlug).map((b) => (
                <Link key={b.slug} href={`/brands/${b.slug}`}>
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
            <div className="max-w-3xl mx-auto text-center">
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
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Brands</span>
          </nav>
          
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our Brands
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Discover our comprehensive range of premium automotive protection brands, 
              each designed to meet specific needs and deliver exceptional performance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BRANDS.map((brand) => (
              <Link
                key={brand.slug}
                href={`/brands/${brand.slug}`}
                className="group"
              >
                <Card className="overflow-hidden h-full hover-elevate active-elevate-2 transition-all duration-300">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={brandImages[brand.slug] || heroImage}
                      alt={brand.name}
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
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
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
          </div>
        </div>
      </section>
    </div>
  );
}
