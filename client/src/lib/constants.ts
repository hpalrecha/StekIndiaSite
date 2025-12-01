import type { NavItem, ProductCategory, Solution } from "@shared/schema";

export const STEK_GLOBAL_URL = "https://www.stekautomotive.com";

export const EXTERNAL_RESOURCES: NavItem[] = [
  { label: "Become an Installer", href: `${STEK_GLOBAL_URL}/become-installer`, external: true },
  { label: "Training Program", href: `${STEK_GLOBAL_URL}/training`, external: true },
  { label: "Find a Partner", href: `${STEK_GLOBAL_URL}/find-partner`, external: true },
  { label: "Blog", href: `${STEK_GLOBAL_URL}/blog`, external: true },
];

export const BRANDS = [
  {
    id: "lunarray",
    name: "LUNARAY",
    slug: "lunarray",
    tagline: "More Than Just a Window Tint",
    description: "LUNARAY is a solution built from years of experience and a deep understanding of both car-owners and tint installers. Transform cars into comfortable and refreshing spaces with advanced heat rejection, UV protection, and effortless installation.",
    features: ["Heat rejection", "UV protection", "Lasting color stability", "No signal interference", "True optical clarity", "Privacy & security"],
    series: [
      { id: "nex-plus", name: "NEX+", tagline: "Premium Nano-Ceramic Film" },
      { id: "smart-plus", name: "SMART+", tagline: "Advanced Ceramic Technology" },
      { id: "action-plus", name: "ACTION+", tagline: "High-Performance Film" },
    ],
  },
  {
    id: "dyno",
    name: "DYNO",
    slug: "dyno",
    tagline: "Drive Yours, Nobody Owns",
    description: "DYNO offers more than just protection — we deliver exclusivity. Our premium solutions for high-end vehicles are designed for those who understand that true luxury is something not everyone can have, but everyone desires.",
    features: ["Hydrophobic", "Self-healing", "Reliable protection", "Stain resistant", "Ultra-gloss finish"],
  },
  {
    id: "forceshield",
    name: "FORCESHIELD",
    slug: "forceshield",
    tagline: "Beyond Protection",
    description: "FORCESHIELD transforms conventional car wraps by combining cutting-edge protection with bold, stylish designs. Get both protection and customization — wrap and protect your vehicle in style.",
    features: ["Cutting-edge protection", "Bold stylish designs", "Protection + customization", "Premium finishes"],
    series: [
      { id: "f7-clear", name: "FORCESHIELD F7 Clear", tagline: "Premium Clear Protection" },
      { id: "f5-clear", name: "FORCESHIELD F5 Clear", tagline: "Advanced Clear Film" },
      { id: "f5-matte", name: "FORCESHIELD F5 Matte", tagline: "Satin Finish Protection" },
      { id: "f3-clear", name: "FORCESHIELD F3 Clear", tagline: "Essential Clear Film" },
      { id: "f3-matte", name: "FORCESHIELD F3 Matte", tagline: "Matte Finish Film" },
      { id: "black-gloss", name: "FORCESHIELD Black-Gloss", tagline: "Sleek Black Shine" },
      { id: "black-matte", name: "FORCESHIELD Black-Matte", tagline: "Stealth Black Finish" },
      { id: "twilight", name: "FORCESHIELD Twilight", tagline: "Unique Color Shift" },
      { id: "carbon", name: "FORCESHIELD Carbon", tagline: "Carbon Fiber Texture" },
      { id: "amber", name: "FORCESHIELD Amber", tagline: "Warm Golden Protection" },
    ],
  },
  {
    id: "stek",
    name: "STEK Window Film",
    slug: "stek",
    tagline: "The Optically Clear Solution for Protection",
    description: "STEK Window Film revolutionizes window technology — combining protection and style with world-class performance. Advanced Graphene Cooling Technology offers superior heat rejection, glare reduction, and UV protection for improved interior comfort.",
    features: ["Graphene Cooling Technology", "Superior heat rejection", "Glare reduction", "UV protection", "Enhanced comfort"],
    series: [
      { id: "nex", name: "NEX", tagline: "Graphene-Infused Premium Nano-Ceramic" },
      { id: "vision-70s", name: "VISION 70S", tagline: "Multilayer Performance Film" },
      { id: "action", name: "ACTION", tagline: "Nano-Carbon Film" },
      { id: "smart", name: "SMART", tagline: "Nano-Ceramic Film" },
      { id: "icy", name: "ICY", tagline: "High-Performance Window Film" },
      { id: "dynotint", name: "DYNOtint", tagline: "TPU-Based Easy Installation" },
    ],
  },
  {
    id: "stek-formula",
    name: "STEK FORMULA",
    slug: "stek-formula",
    tagline: "Advanced Car Care for Professionals",
    description: "STEK FORMULA is an advanced car care lineup formulated for professional detailers, delivering high-performance results and premium quality across every surface of your vehicle.",
    features: ["Professional-grade formulas", "Film installation products", "Surface prep & decontamination", "Protection & maintenance"],
    categories: [
      { id: "cleaning", name: "Cleaning, Prep & Decontamination", description: "Surface-prep solutions to clean and decontaminate before film installation or detailing" },
      { id: "installation", name: "Film Installation Products", description: "Gels, tack solutions and tools optimized for speed, precision and control" },
      { id: "protection", name: "Protection & Maintenance", description: "Coatings and maintenance solutions for durability and surface resilience" },
    ],
  },
];

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Brand",
    href: "/brands",
    children: [
      { label: "Lunarray", href: "/brands/lunarray" },
      { label: "DYNO", href: "/brands/dyno" },
      { label: "Forceshield", href: "/brands/forceshield" },
      { label: "STEK", href: "/brands/stek" },
      { label: "STEK Formula", href: "/brands/stek-formula" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Installers", href: "/solutions/installers" },
      { label: "Dealerships", href: "/solutions/dealerships" },
      { label: "Architectural", href: "/solutions/architectural" },
    ],
  },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "ppf",
    name: "Paint Protection Film",
    slug: "paint-protection-film",
    description: "Premium self-healing paint protection films that shield your vehicle from scratches, rock chips, and environmental damage.",
    image: "/images/ppf-hero.jpg",
    subcategories: [
      {
        id: "transparent",
        name: "Transparent PPF",
        slug: "transparent",
        description: "Crystal-clear protection that preserves your vehicle's original paint finish while providing superior defense.",
        image: "/images/ppf-transparent.jpg",
        features: ["Self-healing technology", "UV resistance", "Hydrophobic coating", "10-year warranty"],
      },
      {
        id: "color",
        name: "Color PPF",
        slug: "color",
        description: "Transform your vehicle's appearance with colored paint protection films available in various finishes.",
        image: "/images/ppf-color.jpg",
        features: ["Vibrant colors", "Matte & gloss finishes", "Full paint protection", "Reversible customization"],
      },
      {
        id: "pattern",
        name: "Pattern PPF",
        slug: "pattern",
        description: "Unique patterns and designs that give your vehicle a distinctive look while maintaining protection.",
        image: "/images/ppf-pattern.jpg",
        features: ["Custom patterns", "Carbon fiber look", "Unique textures", "Premium aesthetics"],
      },
      {
        id: "chrome",
        name: "Chrome Delete PPF",
        slug: "chrome",
        description: "Eliminate chrome trim with sleek black or custom colored film for a modern, unified look.",
        image: "/images/ppf-chrome.jpg",
        features: ["Chrome delete", "Satin black finish", "OEM-quality appearance", "Easy removal"],
      },
    ],
  },
  {
    id: "window",
    name: "Window Film",
    slug: "window-film",
    description: "Advanced automotive window tinting solutions that reduce heat, block UV rays, and enhance privacy.",
    image: "/images/window-film.jpg",
    subcategories: [
      {
        id: "ceramic",
        name: "Ceramic Window Film",
        slug: "ceramic",
        description: "Premium ceramic technology for superior heat rejection without signal interference.",
        image: "/images/window-ceramic.jpg",
        features: ["99% UV block", "Superior heat rejection", "No signal interference", "Crystal clarity"],
      },
      {
        id: "carbon",
        name: "Carbon Window Film",
        slug: "carbon",
        description: "Carbon-infused films offering excellent heat reduction with a sleek matte finish.",
        image: "/images/window-carbon.jpg",
        features: ["Carbon technology", "Fade resistant", "Matte finish", "Long-lasting performance"],
      },
    ],
  },
  {
    id: "windshield",
    name: "Windshield Film",
    slug: "windshield-film",
    description: "Clear windshield protection films that reduce glare, block harmful UV rays, and keep your cabin cool.",
    image: "/images/windshield-film.jpg",
    subcategories: [
      {
        id: "clear",
        name: "Clear Windshield Film",
        slug: "clear",
        description: "Virtually invisible protection that reduces heat and UV without affecting visibility.",
        image: "/images/windshield-clear.jpg",
        features: ["Crystal clear", "70%+ VLT", "Legal compliance", "Glare reduction"],
      },
    ],
  },
  {
    id: "car-care",
    name: "Car Care",
    slug: "car-care",
    description: "Professional-grade car care products designed to maintain and enhance your vehicle's appearance.",
    image: "/images/car-care.jpg",
    subcategories: [
      {
        id: "formula",
        name: "STEK Formula",
        slug: "formula",
        description: "Complete range of care products specially formulated for protected surfaces.",
        image: "/images/car-care-formula.jpg",
        features: ["PPF safe", "pH neutral", "Easy application", "Professional results"],
      },
    ],
  },
];

export const SOLUTIONS: Solution[] = [
  {
    id: "installers",
    name: "Installers",
    slug: "installers",
    description: "Join the STEK network of certified professional installers. Access premium products, training, and business support.",
    heroImage: "/images/solution-installers.jpg",
    benefits: [
      "Access to premium STEK products",
      "Comprehensive training programs",
      "Marketing and business support",
      "Exclusive installer network",
      "Technical support hotline",
      "Lead generation programs",
    ],
    ctaText: "Become a Certified Installer",
  },
  {
    id: "dealerships",
    name: "Dealerships",
    slug: "dealerships",
    description: "Partner with STEK to offer premium protection packages to your customers and increase dealership revenue.",
    heroImage: "/images/solution-dealerships.jpg",
    benefits: [
      "Increase vehicle profitability",
      "Premium product offerings",
      "Customer satisfaction guarantee",
      "Installation training for staff",
      "Marketing materials provided",
      "Dedicated account manager",
    ],
    ctaText: "Partner With Us",
  },
  {
    id: "architectural",
    name: "Architectural",
    slug: "architectural",
    description: "Professional-grade window films for commercial and residential buildings. Reduce energy costs and enhance comfort.",
    heroImage: "/images/solution-architectural.jpg",
    benefits: [
      "Energy cost reduction",
      "UV protection for interiors",
      "Glare reduction",
      "Enhanced privacy",
      "Safety and security films",
      "Commercial-grade durability",
    ],
    ctaText: "Request a Quote",
  },
];

export const COMPANY_INFO = {
  name: "STEK India",
  tagline: "Premium Protection for Every Surface",
  phone: "+91 1800-XXX-XXXX",
  email: "info@stekindia.com",
  address: "STEK India Headquarters, Mumbai, Maharashtra, India",
  social: {
    facebook: "https://facebook.com/stekindia",
    instagram: "https://instagram.com/stekindia",
    linkedin: "https://linkedin.com/company/stekindia",
    youtube: "https://youtube.com/@stekindia",
  },
};
