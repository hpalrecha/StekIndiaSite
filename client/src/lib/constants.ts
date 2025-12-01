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
    name: "Lunarray",
    slug: "lunarray",
    tagline: "Premium Window Films",
    description: "Advanced window film technology featuring exceptional heat rejection and UV protection for ultimate comfort and privacy.",
    features: ["Superior heat rejection", "99% UV protection", "Crystal clarity", "Signal friendly"],
  },
  {
    id: "dyno",
    name: "DYNO",
    slug: "dyno",
    tagline: "Performance Protection Films",
    description: "High-performance paint protection films with self-healing technology designed for automotive enthusiasts who demand the best.",
    features: ["Self-healing technology", "10-year warranty", "Hydrophobic coating", "Superior clarity"],
  },
  {
    id: "forceshield",
    name: "Forceshield",
    slug: "forceshield",
    tagline: "Ultimate Surface Protection",
    description: "Maximum protection paint films engineered for extreme conditions and demanding applications.",
    features: ["Maximum durability", "Impact resistant", "Chemical resistant", "Professional grade"],
  },
  {
    id: "stek",
    name: "STEK",
    slug: "stek",
    tagline: "Premium Automotive Protection",
    description: "The flagship STEK brand offering comprehensive automotive protection solutions trusted by professionals worldwide.",
    features: ["World-class quality", "Certified installer network", "Complete protection", "Global warranty"],
  },
  {
    id: "stek-formula",
    name: "STEK Formula",
    slug: "stek-formula",
    tagline: "Professional Car Care",
    description: "Complete range of professional-grade car care products specifically formulated to maintain and enhance protected surfaces.",
    features: ["PPF safe", "pH neutral", "Easy application", "Professional results"],
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
