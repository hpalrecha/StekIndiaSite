import { Link } from "wouter";
import { ArrowRight, Shield, Target, Eye, Award, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import heroImage from "@assets/stock_images/professional_auto_de_0dbcaf65.jpg";
import aboutImage from "@assets/stock_images/luxury_car_paint_pro_0942a54c.jpg";

const values = [
  {
    icon: Shield,
    title: "Quality Excellence",
    description: "We are committed to providing the highest quality products that meet international standards.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Our customers are at the heart of everything we do. Your satisfaction is our priority.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "Backed by STEK's worldwide expertise and proven track record in automotive protection.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We continuously innovate to bring you the latest advancements in protection technology.",
  },
];

const stats = [
  { value: "2015", label: "Established" },
  { value: "28", label: "States Covered" },
  { value: "500+", label: "Installer Partners" },
  { value: "50K+", label: "Happy Customers" },
];

const milestones = [
  { year: "2015", title: "STEK India Founded", description: "Established as the exclusive distributor for STEK products in India." },
  { year: "2017", title: "National Expansion", description: "Expanded our installer network to cover all major metropolitan areas." },
  { year: "2019", title: "Training Center", description: "Launched our state-of-the-art training facility for installer certification." },
  { year: "2021", title: "500+ Partners", description: "Reached the milestone of 500 certified installer partners across India." },
  { year: "2023", title: "Architectural Division", description: "Expanded into architectural window film solutions for commercial buildings." },
];

export default function About() {
  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About STEK India
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              India's premier destination for world-class automotive protection solutions. 
              We bring global excellence to your doorstep.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  STEK India is the exclusive distributor of STEK Automotive products in India, 
                  bringing world-renowned paint protection films and window tinting solutions 
                  to the Indian market.
                </p>
                <p>
                  Founded with a vision to provide premium vehicle protection to Indian car enthusiasts, 
                  we have grown to become the country's leading supplier of automotive protection films. 
                  Our commitment to quality, combined with extensive training and support, 
                  has helped us build a nationwide network of certified installers.
                </p>
                <p>
                  Today, STEK India serves customers across all major cities, 
                  offering the same world-class protection that STEK is known for globally. 
                  From luxury vehicles to everyday cars, we help protect what matters most to you.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={aboutImage}
                alt="STEK India Professional Installation"
                className="w-full rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-primary/10 text-primary mb-6">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide every vehicle owner in India with access to world-class protection 
                  solutions that preserve their investment and enhance their driving experience. 
                  We aim to set the standard for quality and service in the automotive protection industry.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-primary/10 text-primary mb-6">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become India's most trusted name in automotive and architectural protection, 
                  recognized for our unwavering commitment to quality, innovation, and customer satisfaction. 
                  We envision a future where every vehicle and building is protected with STEK excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-900 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-white/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do at STEK India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-md bg-primary/10 text-primary mb-5">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our growth as India's leading automotive protection provider.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
              
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-6 mb-8 last:mb-0 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:block flex-1" />
                  
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 mt-1.5" />
                  
                  <Card className={`flex-1 ml-10 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                    <CardContent className="p-5">
                      <span className="inline-block text-sm font-semibold text-primary mb-2">
                        {milestone.year}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ready to Experience STEK Excellence?
            </h2>
            <p className="text-muted-foreground mb-8">
              Whether you're looking to protect your vehicle or partner with us as an installer, 
              we're here to help you get started.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/installer-locator">
                <Button size="lg" className="gap-2" data-testid="button-find-installer-about">
                  Find an Installer
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" data-testid="button-contact-about">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
