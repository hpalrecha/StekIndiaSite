import { useRef, useEffect, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  title: string;
  tagline: string;
  href: string;
  ctaText?: string;
  index?: number;
}

export function ProductCard({
  image,
  title,
  tagline,
  href,
  ctaText = "Explore",
  index = 0,
}: ProductCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();
  const [imageLoaded, setImageLoaded] = useState(false);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: prefersReducedMotion ? 0 : index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Link href={href} className="block group">
        <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/30 group-hover:scale-[1.03]">
          <div className="aspect-[4/3] overflow-hidden relative bg-muted">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-muted animate-pulse" />
            )}
            <img
              src={image}
              alt={title}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
          <CardContent className="p-5">
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {tagline}
            </p>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full gap-2 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
            >
              {ctaText}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

interface ProductGridProps {
  children: React.ReactNode;
  columns?: 3 | 4;
}

export function ProductGrid({ children, columns = 4 }: ProductGridProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${
      columns === 4 
        ? "lg:grid-cols-3 xl:grid-cols-4" 
        : "lg:grid-cols-3"
    } gap-6`}>
      {children}
    </div>
  );
}

interface AnimatedHeroProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
  overlay?: "default" | "dark" | "gradient";
}

export function AnimatedHero({
  backgroundImage,
  title,
  subtitle,
  description,
  children,
  overlay = "gradient",
}: AnimatedHeroProps) {
  const prefersReducedMotion = useReducedMotion();

  const overlayClass = {
    default: "bg-black/50",
    dark: "bg-black/70",
    gradient: "bg-gradient-to-r from-black/80 via-black/60 to-transparent",
  };

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className={`absolute inset-0 ${overlayClass[overlay]}`} />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
        <motion.div
          className="max-w-3xl"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {subtitle && (
            <motion.p
              className="text-primary font-medium text-lg mb-4"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {subtitle}
            </motion.p>
          )}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {description}
            </motion.p>
          )}
          {children && (
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}

export function FeatureCard({ icon, title, description, index = 0 }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-md bg-primary/10 text-primary mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
