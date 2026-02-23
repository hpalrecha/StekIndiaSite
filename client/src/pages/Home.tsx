import { Link } from "wouter";
import { useRef, useState } from "react";
import { ArrowRight, Shield, Award, Users, Sparkles, CheckCircle, Search, MapPin } from "lucide-react";
import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard, ProductGrid, FeatureCard } from "@/components/ui/animated-card";
import { PRODUCT_CATEGORIES, SOLUTIONS, STEK_GLOBAL_URL } from "@/lib/constants";

// Global Site Image Assets
const GLOBAL_IMAGES = {
  ppf: "https://d31muh84oxzu1x.cloudfront.net/4bddf1b8-6939-4fdf-817d-2b32d361fec7.webp",
  window: "https://d31muh84oxzu1x.cloudfront.net/2cfc032d-96d4-42bd-b6bf-ef51ffe98a87.webp",
  windshield: "https://d31muh84oxzu1x.cloudfront.net/619db2c1-dfff-4109-80a1-056750337f25.webp",
  formula: "https://d31muh84oxzu1x.cloudfront.net/3d1a10dc-5726-4150-8aa5-049303da786c.webp",
  solutions: {
    premiumShop: "https://d31muh84oxzu1x.cloudfront.net/8d669869-9146-4f8f-b3e5-68489d98c89a.webp",
    businessTool: "https://d31muh84oxzu1x.cloudfront.net/f2a2c253-be65-4e11-b9d8-2e0a3561f2b5.png",
    software: "https://d31muh84oxzu1x.cloudfront.net/e26c704a-369e-4d56-bb95-49f12772009a.webp",
    training: "https://d31muh84oxzu1x.cloudfront.net/797802c7-3178-4353-ad2a-8af08624c669.webp"
  }
};

const GLOBAL_HERO_VIDEO = "https://hq.stekautomotive.com/assets/b7fbc46b-1303-48d0-9270-d7eb2874edc0";

const PRODUCT_LINES = [
  {
    id: "ppf",
    name: "Paint Protection Film",
    title: "DYNO SERIES",
    description: "The world's first and most advanced self-healing paint protection film with unique styling and protection features.",
    image: GLOBAL_IMAGES.ppf,
    href: "/brands/dyno"
  },
  {
    id: "window",
    name: "Window Film",
    title: "WINDOW PROTECTION",
    description: "Experience superior heat rejection and UV protection with our range of ceramic and graphene-infused window films.",
    image: GLOBAL_IMAGES.window,
    href: "/brands/lunaray"
  },
  {
    id: "windshield",
    name: "Windshield Protection Film",
    title: "DYNOtop",
    description: "High-transparency protection for your windshield, guarding against chips and cracks while maintaining clarity.",
    image: GLOBAL_IMAGES.windshield,
    href: "/products/windshield-film/dynotop"
  },
  {
    id: "formula",
    name: "STEK FORMULA",
    title: "CARE & MAINTENANCE",
    description: "Professional-grade chemicals specifically engineered to maintain and protect your high-performance films.",
    image: GLOBAL_IMAGES.formula,
    href: "/brands/formula"
  }
];

const TOTAL_CARE = [
  {
    title: "STEK PREMIUM SHOP",
    subtitle: "AUTHORIZE SHOP",
    description: "Join the elite network of STEK authorized shops and access exclusive products.",
    image: GLOBAL_IMAGES.solutions.premiumShop,
    cta: "Learn More",
    href: "/solutions/installers"
  },
  {
    title: "BUSINESS TOOL",
    subtitle: "MANAGE BETTER",
    description: "Streamline your operations with our proprietary business management solutions.",
    image: GLOBAL_IMAGES.solutions.businessTool,
    cta: "Learn More",
    href: "/solutions/dealerships"
  },
  {
    title: "PRE-CUT SOFTWARE",
    subtitle: "EFFICIENCY",
    description: "Access our comprehensive library of precision-designed pre-cut patterns.",
    image: GLOBAL_IMAGES.solutions.software,
    cta: "Start Cutting",
    href: "/pre-cut-software"
  },
  {
    title: "PRODUCT TRAINING",
    subtitle: "EXPERT INSIGHTS",
    description: "Master the art of installation with our professional training programs.",
    image: GLOBAL_IMAGES.solutions.training,
    cta: "Learn More",
    href: "/training-program"
  }
];

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState(PRODUCT_LINES[0].id);

  return (
    <div className="bg-[#010101] text-white overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-black h-auto aspect-video xl:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-contain xl:object-cover object-center"
          >
            <source src={GLOBAL_HERO_VIDEO} type="video/MP4" />
          </video>
        </div>
      </section>

      {/* 2. VERTICAL PRODUCT GALLERY */}
      <section className="bg-[#010101]">
        {PRODUCT_LINES.map((line, index) => (
          <div
            key={line.id}
            className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} min-h-[80vh] border-b border-white/5`}
          >
            {/* Image Side */}
            <motion.div
              className="w-full lg:w-1/2 relative overflow-hidden h-[50vh] lg:h-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <img src={line.image} alt={line.name} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 flex items-center p-8 md:p-16 lg:p-24 bg-[#080808]">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-xl"
              >
                <p className="text-primary font-black tracking-[0.4em] text-[10px] mb-4 md:mb-6 uppercase">{line.name}</p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 leading-[1.1] uppercase tracking-tighter">
                  {line.title}
                </h2>
                <p className="text-white/50 text-base md:text-lg mb-8 md:mb-12 font-medium leading-relaxed">
                  {line.description}
                </p>
                <Link href={line.href}>
                  <Button variant="outline" className="border-white/30 rounded-none px-10 md:px-12 h-12 md:h-14 uppercase font-black tracking-widest text-[10px] md:text-xs hover:bg-white hover:text-black transition-all">
                    Explore Series
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. TOTAL CARE SOLUTIONS (2X2 GRID) */}
      <section className="py-24 bg-[#010101]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">STEK TOTAL CARE SOLUTIONS</h2>
            <p className="text-white/40 font-bold tracking-[0.2em] uppercase text-xs">Innovation | Business | Professional</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {TOTAL_CARE.map((item, index) => (
              <Link key={index} href={item.href} className="relative aspect-square md:aspect-[16/10] overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end">
                  <div className="max-w-md">
                    <p className="text-primary font-black tracking-[0.2em] text-[10px] mb-2 uppercase">{item.subtitle}</p>
                    <h3 className="text-xl md:text-3xl font-black mb-2 md:mb-4 uppercase">{item.title}</h3>
                    <p className="text-white/70 text-xs md:text-sm mb-4 md:mb-8 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                    <Button variant="outline" className="border-white/30 rounded-none px-6 md:px-8 h-8 md:h-10 uppercase font-black tracking-widest text-[9px] md:text-[10px]">
                      {item.cta}
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* 5. TRAINING CTA */}
      <section className="relative py-32 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={GLOBAL_IMAGES.solutions.training} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">BECOME AN OFFICIAL<br />STEK INSTALLER</h2>
          <Link href="/become-installer">
            <Button size="xl" className="bg-primary text-white hover:bg-primary/90 rounded-none px-12 h-14 font-black uppercase tracking-widest text-xs">
              Become an Installer
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
