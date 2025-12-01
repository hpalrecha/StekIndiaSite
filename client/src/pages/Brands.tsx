import { Link } from "wouter";
import { ArrowRight, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { STEK_GLOBAL_URL } from "@/lib/constants";

import heroImage from "@assets/stock_images/luxury_car_paint_pro_303b9fb8.jpg";

const brands = [
  {
    id: "stek-dynoshield",
    name: "DYNOshield",
    tagline: "Ultimate Paint Protection",
    description: "Our flagship self-healing paint protection film offering superior protection against scratches, rock chips, and environmental damage. Available in transparent, matte, and gloss finishes.",
    features: ["Self-healing technology", "10-year warranty", "Crystal clarity", "Hydrophobic coating"],
  },
  {
    id: "stek-dynoprism",
    name: "DYNOprism",
    tagline: "Color Shift Paint Protection",
    description: "Innovative color-shifting paint protection films that add personality to your vehicle while providing complete protection. Transform your car with unique color effects.",
    features: ["Color shift effect", "Full protection", "Unique aesthetics", "Premium quality"],
  },
  {
    id: "stek-dynocarbon",
    name: "DYNOcarbon",
    tagline: "Carbon Fiber Look PPF",
    description: "Premium carbon fiber textured paint protection films that give your vehicle a sporty, aggressive look while maintaining excellent protective properties.",
    features: ["Carbon fiber texture", "Protective film", "Sport appearance", "Durable finish"],
  },
  {
    id: "stek-dynochrome",
    name: "DYNOchrome",
    tagline: "Chrome Delete Solutions",
    description: "Specialized films designed for chrome delete applications. Convert your chrome trim to sleek black or custom colors for a modern, unified appearance.",
    features: ["Chrome elimination", "Satin finish", "Easy application", "Reversible"],
  },
  {
    id: "stek-window",
    name: "STEK Window Films",
    tagline: "Advanced Window Tinting",
    description: "Premium automotive window films featuring ceramic and carbon technologies for superior heat rejection, UV protection, and enhanced privacy.",
    features: ["Heat rejection", "UV protection", "Signal friendly", "Crystal clarity"],
  },
  {
    id: "stek-formula",
    name: "STEK Formula",
    tagline: "Professional Car Care",
    description: "Complete range of professional-grade car care products specifically formulated to maintain and enhance protected surfaces.",
    features: ["PPF safe", "Easy application", "Professional grade", "Long-lasting"],
  },
];

export default function Brands() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brands.map((brand) => (
              <Card key={brand.id} className="hover-elevate active-elevate-2 transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold text-foreground mb-1">
                      {brand.name}
                    </h2>
                    <p className="text-primary font-medium">
                      {brand.tagline}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    {brand.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {brand.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Link href="/products">
                      <Button variant="outline" className="gap-2" data-testid={`button-view-${brand.id}`}>
                        View Products
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    <a
                      href={STEK_GLOBAL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                    >
                      Learn More
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </CardContent>
              </Card>
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
                href={`${STEK_GLOBAL_URL}/about`}
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
