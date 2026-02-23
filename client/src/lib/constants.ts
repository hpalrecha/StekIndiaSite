import type { NavItem, ProductCategory, Solution } from "@shared/schema";

export interface ProductDetailInfo {
  name: string;
  slug: string;
  brand: string;
  category: string;
  tagline: string;
  description: string;
  longDescription?: string;
  features: (string | { title: string; description: string; icon?: string })[];
  specifications?: Record<string, string>;
  performance?: {
    tser: string;
    uvr: string;
    sirr?: string;
    irer?: string;
  };
  warranty?: string;
  image: string;
  gallery?: string[];
}

export const STEK_GLOBAL_URL = "https://www.stekautomotive.com";

export const RESOURCES_MENU = {
  resources: [
    { label: "Blog", href: "/blog" },
  ],
  digital: [
    { label: "Installer Portal", href: "/installer-portal" },
    { label: "Pre-cut Software", href: "/pre-cut-software" },
    { label: "3D Studio", href: "/3d-studio" },
  ],
  connect: [
    { label: "Contact Us", href: "/contact" },
    { label: "Become Installer", href: "/become-installer" },
    { label: "Training Program", href: "/training-program" },
    { label: "Installer Locator", href: "/installer-locator" },
  ],
  about: [
    { label: "STEK", href: "/about" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Partnerships", href: "/partnerships" },
  ]
};

export const EXTERNAL_RESOURCES: NavItem[] = [
  { label: "Become an Installer", href: `${STEK_GLOBAL_URL}/become-an-installer`, external: true },
  { label: "Training Program", href: `${STEK_GLOBAL_URL}/training-program`, external: true },
  { label: "Find a Partner", href: "/installer-locator", external: false },
  { label: "Blog", href: "/blog", external: false },
];

export const BRANDS = [
  {
    id: "lunaray",
    name: "LUNARAY",
    slug: "lunaray",
    tagline: "More Than Just a Window Tint",
    description: "LUNARAY is a solution built from years of experience and a deep understanding of both car-owners and tint installers. Transform cars into comfortable and refreshing spaces with advanced heat rejection, UV protection, and effortless installation.",
    features: ["Heat rejection", "UV protection", "Lasting color stability", "No signal interference", "True optical clarity", "Privacy & security"],
    series: [
      { id: "nex-plus", name: "NEX+", tagline: "Graphene-Infused Premium Nano-Ceramic", slug: "lunaray-nex", image: "https://d31muh84oxzu1x.cloudfront.net/2cc821fe-3729-45be-a2c8-78da283bf2e0.webp" },
      { id: "smart-plus", name: "SMART+", tagline: "Advanced Nano-Ceramic Film", slug: "lunaray-smart", image: "https://d31muh84oxzu1x.cloudfront.net/fb8c8eeb-078f-4dba-8b3a-893c45a91f68.webp" },
      { id: "action-plus", name: "ACTION+", tagline: "High-Performance Nano-Carbon Film", slug: "lunaray-action", image: "https://d31muh84oxzu1x.cloudfront.net/bdfad232-2e1d-4111-b4b6-03556ebb58a8.webp" },
      { id: "intercept", name: "Intercept™", tagline: "Antimicrobial & Safety Film", slug: "intercept", image: "https://d31muh84oxzu1x.cloudfront.net/ea55ce5d-edf0-4b96-8bbf-bfc39f13a0a5.webp" },
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
    description: "FORCESHIELD is a paint protection film series that transforms conventional car wraps by combining cutting-edge protection with bold, stylish designs. Wrap and protect your vehicle in style.",
    features: ["Cutting-edge protection", "Bold stylish designs", "Protection + customization", "Premium finishes", "Self-healing", "Anti-yellowing"],
    series: [
      { id: "f7-clear", name: "F7 Clear", tagline: "Ultimate Clarity & Protection", slug: "f7-clear", image: "https://d31muh84oxzu1x.cloudfront.net/d89466b4-538b-41c9-8974-7b096e241922.webp" },
      { id: "f5-clear", name: "F5 Clear", tagline: "High-Performance Protection", slug: "f5-clear", image: "https://d31muh84oxzu1x.cloudfront.net/8dae2327-2c78-4a16-9fc8-9f6af6309ea8.webp" },
      { id: "f5-matte", name: "F5 Matte", tagline: "Satin Finish Shield", slug: "f5-matte", image: "https://d31muh84oxzu1x.cloudfront.net/8dae2327-2c78-4a16-9fc8-9f6af6309ea8.webp" },
      { id: "f3-clear", name: "F3 Clear", tagline: "Essential Protection", slug: "f3-clear", image: "https://d31muh84oxzu1x.cloudfront.net/143dd4eb-fc07-40c8-bf2d-b25459326692.webp" },
      { id: "f3-matte", name: "F3 Matte", tagline: "Classic Matte Finish", slug: "f3-matte", image: "https://d31muh84oxzu1x.cloudfront.net/143dd4eb-fc07-40c8-bf2d-b25459326692.webp" },
      { id: "black-gloss", name: "Black Gloss", tagline: "Mirror-Like Black Reflection", slug: "black-gloss", image: "https://d31muh84oxzu1x.cloudfront.net/cc450ec8-dd28-4178-b237-cd3bf0d33168.webp" },
      { id: "black-matte", name: "Black Matte", tagline: "Stealth Satin Black", slug: "black-matte", image: "https://d31muh84oxzu1x.cloudfront.net/cc450ec8-dd28-4178-b237-cd3bf0d33168.webp" },
      { id: "twilight", name: "Twilight", tagline: "Dynamic Color-Shifting PPF", slug: "twilight", image: "https://d31muh84oxzu1x.cloudfront.net/14900abf-68ad-4efb-a401-2fb17c60e450.webp" },
      { id: "carbon", name: "Carbon", tagline: "Realistic Carbon Fiber Texture", slug: "carbon", image: "https://d31muh84oxzu1x.cloudfront.net/8552ce6f-3643-4584-874c-0d83be532219.webp" },
      { id: "amber", name: "Amber", tagline: "Warm Golden Aesthetic", slug: "amber", image: "https://d31muh84oxzu1x.cloudfront.net/eb57b0ef-6507-4ae8-8f40-9272714a2df0.webp" },
    ],
  },
  {
    id: "stek",
    name: "STEK Window Film",
    slug: "stek",
    tagline: "Revolutionizing Window Technology",
    description: "STEK Window Film revolutionizes window technology — combining protection and style with world-class performance. Advanced Graphene Cooling Technology offers superior heat rejection, glare reduction, and UV protection for improved interior comfort.",
    features: ["Zero Haze & Crystal-Clear Optics", "Graphene Cooling Technology", "Powerful Sun Protection", "UV Protection", "Enhanced comfort"],
    series: [
      { id: "nex", name: "NEX", tagline: "Premium Nano-ceramic with Graphene Technology", slug: "nex", image: "https://d31muh84oxzu1x.cloudfront.net/2a110ca7-e6c4-4876-ac7b-0001a4c09f1b.webp" },
      { id: "vision-70", name: "VISION 70", tagline: "Multilayer Performance Window Film", slug: "vision-70", image: "https://d31muh84oxzu1x.cloudfront.net/da862337-e655-4d18-902c-9d6af545983a.webp" },
      { id: "action", name: "ACTION", tagline: "Premium Nano-carbon Window Film", slug: "action", image: "https://d31muh84oxzu1x.cloudfront.net/0767808a-d614-49ca-bdd3-d0ea710d4c85.webp" },
      { id: "smart", name: "SMART", tagline: "Premium Nano-ceramic Window Film", slug: "smart", image: "https://d31muh84oxzu1x.cloudfront.net/e69c926c-79df-436a-bae8-d84bd1094164.webp" },
      { id: "icy", name: "ICY", tagline: "High-Performance Cooling Film", slug: "icy", image: "https://d31muh84oxzu1x.cloudfront.net/cee968a4-3142-4241-9443-568f2876227f.webp" },
      { id: "dynotint", name: "DYNOtint", tagline: "Carbon/Colored Stylized Tint", slug: "dynotint", image: "https://d31muh84oxzu1x.cloudfront.net/541f617c-c1a9-4d10-9fe6-2bf435d83dde.webp" },
    ],
  },
  {
    id: "formula",
    name: "STEK FORMULA",
    slug: "formula",
    tagline: "ADVANCED FORMULA FOR PROFESSIONAL DETAILING",
    description: "STEK FORMULA offers advanced chemical solutions engineered specifically for professional detailers and automotive protection specialists. From surface preparation to post-installation maintenance, our laboratory-grade formulas ensure maximum performance and longevity.",
    features: [
      "Laboratory-Grade Surface Prep",
      "Optimized Film Installation Solutions",
      "Advanced Protection & Maintenance",
      "Professional-Grade Concentration",
      "Coating-Safe Formulations"
    ],
  },
];

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Brand",
    href: "/brands",
    children: [
      { label: "Lunaray", href: "/brands/lunaray" },
      { label: "DYNO", href: "/brands/dyno" },
      { label: "Forceshield", href: "/brands/forceshield" },
      { label: "STEK Window Film", href: "/brands/stek" },
      {
        label: "STEK Formula", href: "/brands/formula", children: [
          { label: "Prep / Clean", href: "/brands/formula/prep" },
          { label: "Film Install", href: "/brands/formula/install" },
          { label: "Protect / Maintain", href: "/brands/formula/maintain" },
        ]
      },
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
    image: "https://d31muh84oxzu1x.cloudfront.net/04e868e7-07c4-46cd-b8ca-3e9b4134311c.webp",
    subcategories: [
      {
        id: "transparent",
        name: "Transparent PPF",
        slug: "transparent",
        description: "Crystal-clear protection that preserves your vehicle's original paint finish while providing superior defense.",
        image: "/images/ppf-transparent.jpg",
        features: ["Self-healing technology", "UV resistance", "Hydrophobic coating", "10-year warranty"],
        featuredProductSlug: "dynoshield",
      },
      {
        id: "color",
        name: "Color PPF",
        slug: "color",
        description: "Transform your vehicle's appearance with colored paint protection films available in various finishes.",
        image: "https://d31muh84oxzu1x.cloudfront.net/d8005d10-4e66-4a7d-9130-e5e8323aec93.jpg",
        features: ["Vibrant colors", "Matte & gloss finishes", "Full paint protection", "Reversible customization"],
        featuredProductSlug: "dynoblack",
      },
      {
        id: "pattern",
        name: "Pattern PPF",
        slug: "pattern",
        description: "Unique patterns and designs that give your vehicle a distinctive look while maintaining protection.",
        image: "https://d31muh84oxzu1x.cloudfront.net/9c416255-c832-4971-b2ad-f16eb0125f60.webp",
        features: ["Custom patterns", "Carbon fiber look", "Unique textures", "Premium aesthetics"],
        featuredProductSlug: "dynocarbon",
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
        image: "https://d31muh84oxzu1x.cloudfront.net/ab798e60-3a81-4fce-b0c2-9dca5df5cc76.jpg",
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
        image: "https://d31muh84oxzu1x.cloudfront.net/465e0e21-2364-472f-8ec9-39dd085dd022.webp",
        features: ["Crystal clear", "70%+ VLT", "Legal compliance", "Glare reduction"],
      },
    ],
  },
];

export const SOLUTIONS: Solution[] = [
  {
    id: "installers",
    name: "Professional Installers",
    slug: "installers",
    tagline: "STEK Premium Shop",
    description: "STEK offers a Total Care Solution to shops and installers, enabling them to become an authorized retailer or Premium Shop that provides full STEK service to customers. Get listed in STEK's global directory for increased visibility.",
    heroImage: "https://d31muh84oxzu1x.cloudfront.net/b8ed6b85-e502-431e-b194-427527b37d93.jpg",
    benefits: [
      "Installation support & infrastructure guidance",
      "Marketing materials and brand assets",
      "Sales & business support tools (CRM)",
      "Multi-day training & certification programs",
      "Authenticity assurance & brand recognition",
      "Global directory listing for visibility",
      "Access to premium STEK product range",
      "Ongoing technical support",
    ],
    offerings: [
      { name: "Management Support", description: "Efficient shop management for maximum productivity." },
      { name: "Sales Strategy", description: "Strategic consulting to improve profit and customer satisfaction." },
      { name: "Installation Support", description: "Technical expertise and guidance on advanced installation techniques." },
      { name: "Marketing & SNS", description: "Boosting brand awareness through social media and local marketing." },
      { name: "Educational Materials", description: "Comprehensive technical documents and sales guides for your team." },
      { name: "Community Platform", description: "Access to the STEKSHIELD Community for networking and resources." },
    ],
    groups: [
      {
        id: "premium-experience",
        title: "Premium Experience",
        items: [
          {
            id: "installation-zone",
            title: "Installation Zone",
            description: "A precision-focused environment designed for flaw-free applications. Our installation zones are equipped with high-intensity lighting, specialized climate control, and mirror systems to ensure every detail is perfect.",
            image: "https://d31muh84oxzu1x.cloudfront.net/ab798e60-3a81-4fce-b0c2-9dca5df5cc76.jpg",
            features: ["Shadow-free lighting", "Climate control", "Dust-free environment"],
          },
          {
            id: "customer-zone",
            title: "Customer Rest Zone",
            description: "A premium waiting area that reflects the quality of your services. While your car is being protected, relax in a comfortable space designed to provide a luxury customer experience.",
            image: "https://d31muh84oxzu1x.cloudfront.net/d8005d10-4e66-4a7d-9130-e5e8323aec93.jpg",
            features: ["Luxury seating", "Refreshments", "Brand showcase"],
          },
          {
            id: "consultation-zone",
            title: "Consultation Zone",
            description: "Dedicated space for professional client consultations and sales. Use our interactive tools and material samples to help customers choose the best protection for their needs.",
            image: "https://d31muh84oxzu1x.cloudfront.net/968ce3d1-40a6-4399-99e0-f44bf36d11dd.jpg",
            features: ["Interactive tools", "Material samples", "Professional advice"],
          },
          {
            id: "display-zone",
            title: "Display Zone",
            description: "Interactive area to showcase STEK's wide range of film solutions. Let your customers touch, feel, and see the difference that premium protection makes.",
            image: "https://d31muh84oxzu1x.cloudfront.net/db813833-f6bd-4e10-95db-1dc0dec0f4f1.jpg",
            features: ["Live demos", "Product catalog", "Interactive displays"],
          },
        ],
      },
    ],
    products: [
      { name: "STEK Select", description: "The starting point for professional retailers." },
      { name: "STEK Plus", description: "Enhanced support and benefits for growing businesses." },
      { name: "STEK Exclusive", description: "Our highest partnership tier for flagship performance centers." },
    ],
    ctaText: "Become a Certified Installer",
  },
  {
    id: "dealerships",
    name: "Dealerships & PDI/AOEM",
    slug: "dealerships",
    tagline: "Where Innovation Meets Protection",
    description: "Welcome to PDI/AOEM Solutions by STEK — designed for OEMs, PDI (Pre-Delivery Inspection), fleet, and business clients requiring large-scale protection solutions with exceptional quality at competitive pricing.",
    heroImage: "https://d31muh84oxzu1x.cloudfront.net/04e868e7-07c4-46cd-b8ca-3e9b4134311c.webp",
    benefits: [
      "Paint Protection Film (C-Series PPF) for bulk orders",
      "Premium window tinting for fleets",
      "Windshield protection against chips & cracks",
      "Maintenance & coating services",
      "CUTZ Software for pre-cut patterns",
      "Customer Management Tools",
      "3D Studio for previews & planning",
      "Tailored marketing materials & collateral",
    ],
    offerings: [
      {
        name: "Unrivaled Protection",
        description: "STEK C-Series PPF and specialized window films offer premium protection at incredible value, perfect for PDI and fleet applications.",
        image: "https://d31muh84oxzu1x.cloudfront.net/2cc3c167-e4c6-4dbf-a020-93ec0b6edb56.webp"
      },
      {
        name: "All-in-One Maintenance",
        description: "Comprehensive care services with professional-grade maintenance and coating products to keep every vehicle in pristine condition.",
        image: "https://d31muh84oxzu1x.cloudfront.net/af1a8fdf-2506-48a3-b63f-2ff141d87121.webp"
      },
      {
        name: "Bespoke Business Solutions",
        description: "Innovative digital solutions including CUTZ Software, CRM, and 3D Studio for streamlined operations and planning.",
        image: "https://d31muh84oxzu1x.cloudfront.net/06f35778-42c9-4bdb-bfab-30f1753b9fb6.webp"
      },
      {
        name: "Tailored Assets",
        description: "Customized marketing materials, brand assets, and collateral designed to elevate your business's professional identity.",
        image: "https://d31muh84oxzu1x.cloudfront.net/c262fa0a-1974-4bb7-bc95-3a98e9172565.webp"
      },
    ],
    groups: [
      {
        id: "protection",
        title: "Protection Film",
        items: [
          {
            id: "ppf",
            title: "Paint Protection Film",
            description: "With rising demand and risks from unproven products, we offer cutting-edge automotive protection solutions. C-Series offers exceptional protection at a competitive price, with easy installation and stability. C-Clear, a standout in the C-Series, provides premium, cost-effective paint protection film.",
            image: "https://d31muh84oxzu1x.cloudfront.net/1149a6a4-f970-498f-8887-cb68420c25c1.webp",
            features: ["Cost-effective protection", "Easy installation", "C-Series performance"],
          },
          {
            id: "window-film",
            title: "Window Film",
            description: "Enhance your vehicle's protection with premium window tinting films that offer superior heat and UV protection along with privacy. Our window films are engineered for durability and consistent performance in fleet and OEM applications.",
            image: "https://d31muh84oxzu1x.cloudfront.net/ac18c7d0-8809-4560-98bd-8a54e9d4642e.webp",
            features: ["Heat rejection", "UV protection", "Privacy & glare reduction"],
          },
          {
            id: "windshield",
            title: "Windshield Protection Film",
            description: "Formulated to guard against chips, cracks, and road debris, STEK windshield protection ensures long-lasting visibility and safety. Avoid costly replacements and downtime with our high-impact resistant crystalline technology.",
            image: "https://d31muh84oxzu1x.cloudfront.net/465e0e21-2364-472f-8ec9-39dd085dd022.webp",
            features: ["High-impact resistance", "Reduced downtime", "Shatter-proof protection"],
          },
        ],
      },
      {
        id: "care",
        title: "Care Service",
        items: [
          {
            id: "maintenance",
            title: "Maintenance Products",
            description: "STEK ensures the best customer experience with top-notch maintenance and care services. Our professional-grade maintenance lineup is designed specifically for protected surfaces, maintaining the hydrophobic and self-healing properties of our films.",
            image: "https://d31muh84oxzu1x.cloudfront.net/9c416255-c832-4971-b2ad-f16eb0125f60.webp",
            features: ["PPF safe", "Hydrophobic maintenance", "pH neutral"],
          },
          {
            id: "coating",
            title: "Coating Products",
            description: "Advanced ceramic coatings for every surface. Our PDI/AOEM lineup includes specialized formulations for Paint, Wheel, Glass, Leather, and Fabric to provide comprehensive protection and ease of cleaning.",
            image: "https://d31muh84oxzu1x.cloudfront.net/796ac41c-5644-49b8-ac5d-5e8df624e75b.webp",
            features: ["Multi-surface protection", "Extreme durability", "Anti-fouling properties"],
          },
        ],
      },
    ],
    ctaText: "Partner With Us",
  },
  {
    id: "architectural",
    name: "Architectural Solutions",
    slug: "architectural",
    tagline: "Precision performance for every glass surface.",
    description: "Enhance comfort, security, and efficiency with our expertly installed commercial and residential window film solutions.",
    heroImage: "https://d31muh84oxzu1x.cloudfront.net/d977b43d-581c-4fe2-ae75-cfecaf2768b7.webp",
    benefits: [
      "Significant energy savings and climate control",
      "Superior safety and security protection",
      "Enhanced style, privacy, and aesthetics",
      "UV protection for interior preservation",
    ],
    offerings: [
      {
        name: "Solar Control",
        description: "Regulate interior temperatures and maximize energy savings with advanced solar heat rejection.",
        image: "https://d31muh84oxzu1x.cloudfront.net/e417247a-8f4d-48c0-9bee-d8ad5c430c0f.svg"
      },
      {
        name: "Safety & Security",
        description: "Prevent glass shattering and protect against break-ins with high-tensile security films.",
        image: "https://d31muh84oxzu1x.cloudfront.net/407df895-0caf-4f34-9070-e3857b591726.svg"
      },
      {
        name: "Style & Aesthetics",
        description: "Transform your building's appearance while maintaining privacy and natural light.",
        image: "https://d31muh84oxzu1x.cloudfront.net/f640beb0-71c7-4de3-a9b1-c85781c2d21a.svg"
      }
    ],
    groups: [
      {
        id: "architectural-products",
        title: "Architectural Film Technologies",
        items: [
          {
            id: "spectre",
            title: "SPECTRE",
            description: "Experience maximum heat block performance with our 10-layer sputtering multi-layer low reflection window film, surpassing competitors' 7-layer structure.",
            image: "https://d31muh84oxzu1x.cloudfront.net/a4eb8b14-ddd0-43a1-a5e5-85323d6956fc.webp",
            features: ["10-layer Sputter technology", "Ultra-low reflection", "Unrivaled heat rejection", "Optimum clarity"],
          },
          {
            id: "gr",
            title: "GR (Graphene Cooling)",
            description: "The world's first non-reflective window film featuring Graphene technology. Optimize thermal comfort and reduce heat sensation like never before.",
            image: "https://d31muh84oxzu1x.cloudfront.net/7713c712-d5de-4390-ad67-93fbbddfc14d.webp",
            features: ["Graphene technology", "Non-reflective finish", "Enhanced thermal comfort", "Superior durability"],
          },
          {
            id: "dual-reflective",
            title: "Dual Reflective",
            description: "Achieve privacy and superior heat blockage with our dual-reflective film. Enjoy low interior reflection while maintaining a private exterior view.",
            image: "https://d31muh84oxzu1x.cloudfront.net/16cb0134-c9c5-40a1-a0ab-2c2f2dc12638.webp",
            features: ["Daytime privacy", "Low interior reflection", "Superior heat block", "Glare reduction"],
          },
          {
            id: "silver-reflective",
            title: "Silver Reflective",
            description: "High-performance one-way mirror film for reflective elegance and superior heat reflection. Uniform outside appearance with reduced inside reflection.",
            image: "https://d31muh84oxzu1x.cloudfront.net/0266b3a7-4867-458e-b9c2-28ca2df5e75c.webp",
            features: ["One-way mirror effect", "Reflective elegance", "Uniform exterior look", "Dry adhesive application"],
          },
          {
            id: "safety-security",
            title: "Safety & Security",
            description: "Shatter-resistant film designed to protect lives and deter forced entry. Features an anti-virus coating for comprehensive surface safety.",
            image: "https://d31muh84oxzu1x.cloudfront.net/6d34e281-e498-47bb-8fd4-40ef2c924f7e.webp",
            features: ["Shatter-resistant", "4, 8, and 12MIL thickness", "Anti-virus coating", "Forced entry deterrence"],
          },
          {
            id: "anti-graffiti",
            title: "Anti-Graffiti",
            description: "Defend surfaces from vandalism with our sacrificial layer film. Effortlessly remove graffiti without residue, saving time and maintenance costs.",
            image: "https://d31muh84oxzu1x.cloudfront.net/967a8414-2d9b-4b3c-a18d-15791211bb46.webp",
            features: ["Sacrificial protection", "Easy graffiti removal", "4 & 6MIL thickness", "Zero residue removal"],
          },
        ],
      },
    ],
    ctaText: "Get an Architectural Consultation",
  },
];

export const COMPANY_INFO = {
  name: "STEK India",
  tagline: "Premium Protection for Every Surface",
  phone: "83104 82800",
  email: "info@stek-india.in",
  website: "www.stek-india.in",
  address: "Ward 117, 49, Bannerghatta Rd, Ayappa Garden, Shanti Nagar, Bengaluru, Karnataka 560030",
  social: {
    facebook: "https://facebook.com/stekindia",
    instagram: "https://instagram.com/stekindia",
    linkedin: "https://linkedin.com/company/stekindia",
    youtube: "https://youtube.com/@stekindia",
  },
};

export const PRODUCT_DETAILS: Record<string, ProductDetailInfo> = {
  "dynoshield": {
    name: "DYNOshield",
    slug: "dynoshield",
    brand: "DYNO",
    category: "Paint Protection Film",
    tagline: "The Ultimate Premium Paint Protection Film",
    description: "Our flagship premium self-healing paint protection film with ultra-gloss finish and super-hydrophobic properties.",
    longDescription: "DYNOshield is STEK's flagship premium paint protection film, designed for high-performance durability and reliability. It features a fluorine-infused top coat that provides a permanent \"waxed\" look without the need for additional sealants. The advanced TPU structure ensures your vehicle remains protected from chips, scratches, and environmental contaminants while enhancing the paint's natural depth and shine.",
    features: [
      "Super Hydrophobic (Self-Cleaning)",
      "Advanced Self-Healing",
      "Superior Stain Resistance",
      "Ultra-Gloss Finish",
      "12-Year Warranty"
    ],
    specifications: {
      "Structure": "Fluorine-infused TPU",
      "Thickness": "8.0 mil",
      "Gloss Level": "90+ GU",
      "Elongation": "> 300%"
    },
    warranty: "12-Year Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/91c983d9-83f9-486a-94a8-23f0afd0241d.webp"
  },
  "dynomight": {
    name: "DYNO might",
    slug: "dynomight",
    brand: "DYNO",
    category: "Paint Protection Film",
    tagline: "Ultimate Heavy-Duty Protection",
    description: "Our thickest and most durable paint protection film, designed for extreme impact resistance.",
    longDescription: "DYNO might is the ultimate shield for vehicles facing the harshest conditions. Featuring a significantly thicker TPU structure, it provides unmatched resistance against large road debris, high-speed impacts, and aggressive environmental hazards. Ideal for off-road vehicles and performance cars that demand the highest level of physical protection available.",
    features: [
      "Extra-Thick TPU Construction",
      "Ultimate Impact Resistance",
      "Self-Healing Technology",
      "High Chemical Stability",
      "10-Year Warranty"
    ],
    warranty: "10-Year Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/da3857dd-8d9e-49d9-87cd-be3b2bac31a4.webp"
  },
  "dynoextreme": {
    name: "DYNO extreme",
    slug: "dynoextreme",
    brand: "DYNO",
    category: "Paint Protection Film",
    tagline: "Extreme Climate Resistance",
    description: "Specialized protection film engineered to withstand extreme temperatures and UV exposure.",
    longDescription: "DYNO extreme is formulated for vehicles in high-intensity environments. Whether it's the scorching desert heat or intense high-altitude UV, this film maintains its clarity and protective properties without yellowing or cracking. It offers the same self-healing and hydrophobic benefits of our flagship films with an added layer of thermal and UV stability.",
    features: [
      "Superior UV Stability",
      "High Thermal Resistance",
      "Advanced Non-Yellowing",
      "Hydrophobic Top Coat",
      "10-Year Warranty"
    ],
    warranty: "10-Year Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/b59d2921-39bb-46a3-b7c8-23f8eedcb31d.webp"
  },
  "dynopure": {
    name: "DYNO pure",
    slug: "dynopure",
    brand: "DYNO",
    category: "Paint Protection Film",
    tagline: "Crystal Clear Purity",
    description: "A high-clarity clear PPF that focuses on maintaining the absolute pure look of your factory paint.",
    longDescription: "DYNO pure is designed for the purist who wants invisible protection. It features STEK's highest level of optical clarity, ensuring that the depth and metallic flake of your vehicle's original paint are showcased without any distortion. It provides robust protection against the elements while remaining virtually undetectable on the surface.",
    features: [
      "Ultra-High Optical Clarity",
      "Invisible Protection Layer",
      "Self-Healing Finish",
      "Stain & Dirt Resistance",
      "10-Year Warranty"
    ],
    warranty: "10-Year Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/fab2e52e-28a7-46c9-86b8-bf2bf552df5c.webp"
  },
  "dynosupreme": {
    name: "DYNO supreme",
    slug: "dynosupreme",
    brand: "DYNO",
    category: "Paint Protection Film",
    tagline: "The Hydrophilic Innovator",
    description: "A specialized film with hydrophilic properties for superior water sheeting and ease of cleaning.",
    longDescription: "DYNO supreme takes a different approach to water management. By utilizing hydrophilic technology instead of traditional hydrophobicity, it encourages water to sheet off the surface instantly, taking contaminants with it and preventing water spots entirely. It's the ideal choice for areas with hard water or for owners who want a unique, self-cleaning experience.",
    features: [
      "Advanced Hydrophilic Surface",
      "Anti-Water Spot Technology",
      "Self-Cleaning Performance",
      "Superior Clarity",
      "10-Year Warranty"
    ],
    warranty: "10-Year Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/729c6e31-6bde-4488-8f18-31a4eb265786.webp"
  },
  "dynolite": {
    name: "DYNOlite",
    slug: "dynolite",
    brand: "DYNO",
    category: "Paint Protection Film",
    tagline: "Lightweight High-Performance Protection",
    description: "An advanced, lightweight clear PPF offering an optimized balance of protection and installation ease.",
    longDescription: "DYNOlite provides a sophisticated, lightweight alternative to standard clear PPF. It maintains STEK's signature protective features—including self-healing and hydrophobicity—while offering a thinner profile that's easier to install on complex surfaces. Perfect for drivers seeking reliable protection with a focus on agility and value.",
    features: [
      "Weight-Optimized TPU",
      "Self-Healing Technology",
      "Anti-Yellowing Capability",
      "Excellent Optical Clarity",
      "10-Year Warranty"
    ],
    warranty: "10-Year Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/6dcda684-30a2-4032-82cb-8e89481e86fd.webp"
  },
  "dynoblack": {
    name: "DYNOblack",
    slug: "dynoblack",
    brand: "DYNO",
    category: "Paint Protection Film",
    tagline: "Mirror-Like Black Protection",
    description: "Transform your vehicle's look with a deep, high-gloss black finish that protects like a premium PPF.",
    longDescription: "DYNOblack is a revolutionary color paint protection film that provides a deep, mirror-like black finish without the orange peel commonly associated with vinyl wraps. It transforms any vehicle color into a premium factory black while offering the full physical protection of clear PPF, including impact resistance, self-healing, and easy maintenance.",
    features: [
      "Full Color Transformation",
      "Ultra-Gloss Black Finish",
      "Superior Impact Protection",
      "Advanced Self-Healing",
      "10-Year Warranty"
    ],
    warranty: "10-Year Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/dcbb09af-4876-4c55-a248-b28c78d5a708.webp"
  },
  "dynocarbon": {
    name: "DYNOcarbon",
    slug: "dynocarbon",
    brand: "DYNO",
    category: "Paint Protection Film",
    tagline: "Real Carbon Fiber Aesthetics",
    description: "Realistic carbon fiber texture combined with the ultimate strength of paint protection film.",
    longDescription: "DYNOcarbon offers the distinctive look of carbon fiber with the heavy-duty protection of STEK's premium TPU film. Unlike decorative vinyl, DYNOcarbon is much thicker and more durable, protecting your vehicle's surfaces from rock chips and scratches while providing a high-tech, aggressive aesthetic that's easy to maintain.",
    features: [
      "Realistic Carbon Texture",
      "High-Impact Resistance",
      "TPU-Based Durability",
      "Maintenance-Free Design",
      "10-Year Warranty"
    ],
    warranty: "10-Year Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/7a5d9a84-80e4-40f3-8bb8-48ce5aab2c5a.webp"
  },
  "dynosmoke": {
    name: "DYNOsmoke",
    slug: "dynosmoke",
    brand: "DYNO",
    category: "Paint Protection Film",
    tagline: "Intense Grey Light Protection",
    description: "Premium tinted protection for your headlights and taillights, offering a stealthy dark grey aesthetic.",
    longDescription: "DYNOsmoke is a specialized TPU film designed specifically for automotive light assemblies. It provides a stealthy, dark-smoke aesthetic while shielding expensive headlights and taillights from rock chips, pitting, and UV degradation. The hydrophobic top coat ensures your lights stay cleaner for longer and are easier to maintain.",
    features: [
      "Stealthy Smoke Aesthetic",
      "Headlight Impact Protection",
      "Hydrophobic Top Coat",
      "UV & Weather Resistant",
      "7-Year Warranty"
    ],
    warranty: "7-Year Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/9844ed92-ee68-4f8c-9970-8b1e384afeab.png"
  },
  "dynoshadow": {
    name: "DYNOshadow",
    slug: "dynoshadow",
    brand: "DYNO",
    category: "Paint Protection Film",
    tagline: "Subtle Grey Light Protection",
    description: "A lighter grey tinted film that provides a sophisticated, subtle shade to your vehicle's lights.",
    longDescription: "DYNOshadow offers a refined, medium-grey tint for owners who want to tone down the brightness of their lenses without going full 'blackout'. It maintains excellent light output while providing the same heavy-duty impact and environmental protection as our other LPF products. The self-healing surface keeps your lights looking smooth and scratch-free.",
    features: [
      "Subtle Grey Tint",
      "Impact & Rock Chip Defense",
      "Self-Healing Technology",
      "High Visible Light Transmission",
      "7-Year Warranty"
    ],
    warranty: "7-Year Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/a0e698b1-ff55-4642-bf20-49e1bdcf3f10.webp"
  },
  "dynoprism": {
    name: "DYNOprism",
    slug: "dynoprism",
    brand: "DYNO",
    category: "Paint Protection Film",
    tagline: "Color-Shifting Metallic Protection",
    description: "A unique paint protection film with metallic flakes that provides a stunning color-shifting effect.",
    longDescription: "DYNOprism is a revolutionary paint protection film that combines STEK's industry-leading protection with a distinctive metallic flake finish. This film creates a multi-tone, color-shifting effect that changes depending on the lighting and the angle of view. It's the perfect choice for owners who want to protect their vehicle while making a bold, shimmering statement.",
    features: [
      "Color-Shifting Metallic Flakes",
      "Fast Recovery Self-Healing",
      "Advanced Hydrophobicity",
      "Superior Stain Resistance",
      "10-Year Warranty"
    ],
    warranty: "10-Year Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/3e880fbb-a6da-4dd1-a6e8-f6afe53e345f.webp"
  },
  "dynored": {
    name: "DYNOred",
    slug: "dynored",
    brand: "DYNO",
    category: "Paint Protection Film",
    tagline: "High-Gloss Radiant Red",
    description: "Transform your vehicle with a deep, high-gloss red finish that offers full PPF protection.",
    longDescription: "DYNOred provides a brilliant, high-gloss red finish that rivals the best factory paint jobs. Unlike traditional color wraps, DYNOred is a true paint protection film, offering exceptional impact resistance and self-healing properties. It transforms your vehicle's appearance while ensuring the surface remains pristine and protected from the elements.",
    features: [
      "High-Gloss Red Finish",
      "Self-Healing Technology",
      "Super Hydrophobic",
      "Chemical & Stain Resistance",
      "10-Year Warranty"
    ],
    warranty: "10-Year Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/1e675430-e5c6-4291-b9ec-b805d86678bf.webp"
  },
  "dynogray": {
    name: "DYNOgray",
    slug: "dynogray",
    brand: "DYNO",
    category: "Paint Protection Film",
    tagline: "Sleek Nardo-Inspired Gray",
    description: "A modern, high-gloss gray finish that combines sophisticated style with premium protection.",
    longDescription: "DYNOgray delivers a sleek, modern gray finish inspired by high-end European sports cars. This color PPF offers a deep, mirror-like gloss that's far superior to standard vinyl wraps. Beyond the aesthetic upgrade, it provides full-strength protection against rock chips, scratches, and environmental damage, maintaining its finish for years to come.",
    features: [
      "Deep Gloss Gray Finish",
      "Impact & Puncture Resistance",
      "Advanced Self-Healing",
      "Hydrophobic Top Coat",
      "10-Year Warranty"
    ],
    warranty: "10-Year Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/ea55ce5d-edf0-4b96-8bbf-bfc39f13a0a5.webp"
  },
  "dynowhite": {
    name: "DYNOwhite",
    slug: "dynowhite",
    brand: "DYNO",
    category: "Paint Protection Film",
    tagline: "Luxurious Pearl White",
    description: "A dazzling pearl white finish that adds a touch of luxury and depth to your vehicle's exterior.",
    longDescription: "DYNOwhite transforms any vehicle into a masterpiece with its rich, pearl white finish. This premium color PPF features metallic particles that catch the light, creating a depth and shimmer that's truly unique. It provides the same robust protection as our clear films, ensuring your luxurious new look is shielded from the hazards of the road.",
    features: [
      "Pearlescent White Finish",
      "Self-Healing Properties",
      "Hydrophobic Coating",
      "UV & Stain Resistant",
      "10-Year Warranty"
    ],
    warranty: "10-Year Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/636b5d88-9adb-4974-b968-ab23b8009f6c.webp"
  },
  "dynofancy": {
    name: "DYNOfancy",
    slug: "dynofancy",
    brand: "DYNO",
    category: "Paint Protection Film",
    tagline: "Golden Glow Light Protection",
    description: "Add a warm, golden aesthetic to your lights while protecting them from road debris and UV damage.",
    longDescription: "DYNOfancy is a specialized Light Protection Film (LPF) that gives your vehicle's headlights a distinct yellow, golden glow. This film is perfect for achieving a classic or specialized look while providing the same high-level protection as our other LPF products. It's self-healing and hydrophobic, ensuring your custom look stays clear and protected.",
    features: [
      "Yellow/Golden Tint",
      "75% Visible Light Transmission",
      "Impact & Scratch Protection",
      "Self-Healing Technology",
      "7-Year Warranty"
    ],
    warranty: "7-Year Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/06d1cf36-5d37-401d-b56e-5cbf23810865.png"
  },
  "dynoshad": {
    name: "DYNOshad",
    slug: "dynoshad",
    brand: "DYNO",
    category: "Paint Protection Film",
    tagline: "Subtle Violet-Tinted Protection",
    description: "A violet-tinged light protection film that enhances light assemblies with a cool, stealthy tone.",
    longDescription: "DYNOshad offers a unique, violet-tinted aesthetic for your vehicle's headlights and taillights. This LPF provides a cool-toned stealthy look that stands out from standard smoked films. It shields your lights from pitting, rock chips, and UV yellowing, while its hydrophobic and self-healing properties make maintenance effortless.",
    features: [
      "Violet-Tinged Stealth Look",
      "45% Visible Light Transmission",
      "Self-Healing Top Coat",
      "Hydrophobic & Stain Resistant",
      "7-Year Warranty"
    ],
    warranty: "7-Year Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/b65cd74b-1737-432d-9ab1-f89547ff8e01.webp"
  },
  "dynostorm": {
    name: "DYNOstorm",
    slug: "dynostorm",
    brand: "DYNO",
    category: "Paint Protection Film",
    tagline: "Graphite Mist Protection",
    description: "A unique graphite-toned headlight film that adds a mysterious, smoky depth to your vehicle's appearance.",
    longDescription: "DYNOstorm provides a cool, graphite-inspired finish that bridges the gap between deep smoke and classic grey. It's engineered specifically for durability on heat-generating light assemblies, offering a self-healing top coat that repairs minor scratches and swirls automatically. Its hydrophobic properties reject water and road grime, keeping your light output optimal in all conditions.",
    features: [
      "Unique Graphite Finish",
      "High-Impact TPU Protection",
      "Advanced Self-Healing",
      "Superior Optical Clarity",
      "7-Year Warranty"
    ],
    warranty: "7-Year Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/9844ed92-ee68-4f8c-9970-8b1e384afeab.png"
  },
  "dynogreen": {
    name: "DYNOgreen",
    slug: "dynogreen",
    brand: "DYNO",
    category: "Paint Protection Film",
    tagline: "British Racing Green Elegance",
    description: "A rich, deep forest green finish that combines classic style with modern protection technology.",
    longDescription: "DYNOgreen captures the timeless essence of British Racing Green, providing a sophisticated look for any vehicle. As a premium color PPF, it offers far superior protection and finish quality compared to standard vinyl. It's self-healing, hydrophobic, and resistant to environmental contaminants, ensuring your vehicle's classic look is preserved for the long haul.",
    features: [
      "High-Gloss Forest Green Finish",
      "Self-Healing Capability",
      "Superior Impact Resistance",
      "Hydrophobic Top Coat",
      "10-Year Warranty"
    ],
    warranty: "10-Year Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/ff931931-ea0f-4dad-aecf-45f85e632da1.webp"
  },
  "dynomiami-blue": {
    name: "DYNOmiami-blue",
    slug: "dynomiami-blue",
    brand: "DYNO",
    category: "Paint Protection Film",
    tagline: "Vibrant Miami Blue Protection",
    description: "A bright, energetic blue finish that commands attention while providing uncompromising protection.",
    longDescription: "DYNOmiami-blue is for the bold. This vibrant, high-gloss blue finish transforms your vehicle into a standout piece while shielding the original paint with STEK's advanced TPU technology. It features powerful self-healing properties and a super-hydrophobic surface, making it as practical as it is visually striking.",
    features: [
      "Vibrant High-Gloss Blue",
      "Advanced Self-Healing",
      "Super Hydrophobic Surface",
      "Stain & Chemical Resistance",
      "10-Year Warranty"
    ],
    warranty: "10-Year Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/98d984e4-c4f9-4a4a-8da5-52d4e18f39c6.webp"
  },
  "nex": {
    name: "STEK NEX™",
    slug: "nex",
    brand: "STEK Window Film",
    category: "Window Film",
    tagline: "Graphene-Infused Premium Nano-Ceramic",
    description: "The next generation of window film technology, featuring Graphene Cooling for maximum thermal comfort.",
    longDescription: "STEK NEX series represents a breakthrough in automotive window film. By incorporating Graphene into our nano-ceramic structure, we've achieved industry-leading heat rejection and durability. NEX provides crystal-clear visibility while blocking up to 99% of harmful UV rays and significantly reducing glare, making every drive more comfortable and safer.",
    features: [
      { title: "Heat Reduction", description: "The NEX Series is your personal shield against the scorching heat. Leveraging the power of graphene, it significantly reduces solar heat, creating a cool, refreshing interior climate." },
      { title: "Glare Reduction", description: "Glare is a thing of the past with the NEX Series. Our film reduces glare to improve your visibility on the road, ensuring safer, more comfortable drives." },
      { title: "UV Protection", description: "With a whopping 99.9% UV protection, the NEX Series is your car's personal sunscreen, safeguarding you and your vehicle's interior from harmful UV rays." },
      { title: "Privacy", description: "The NEX Series enhances your privacy, keeping your vehicle's interior concealed from prying eyes. It's like having your very own personal space, on wheels!" }
    ],
    performance: {
      tser: "64%",
      uvr: "99.9%",
      sirr: "93%",
      irer: "66%"
    },
    warranty: "Lifetime Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/2a110ca7-e6c4-4876-ac7b-0001a4c09f1b.webp"
  },
  "vision-70": {
    name: "VISION 70",
    slug: "vision-70",
    brand: "STEK Window Film",
    category: "Window Film",
    tagline: "Multilayer Performance Window Film",
    description: "Advanced 10-layer sputter film for exceptional clarity and heat rejection.",
    longDescription: "STEK VISION 70 is a premium multilayer sputter film featuring advanced 10-layer construction. It provides exceptional optical clarity while blocking a significant portion of infrared heat. Engineered for performance and style, VISION 70 enhances the look of any vehicle while providing a cooler and more comfortable cabin experience.",
    features: [
      { title: "10-Layer Sputter Technology", description: "Advanced multilayer sputter construction for specialized performance." },
      { title: "Maximum Heat Rejection", description: "Blocks solar energy to keep vehicle interiors cool." },
      { title: "Glare Reduction", description: "Reduces sun glare for better visibility and safety." },
      { title: "Superior Privacy", description: "Provides a private cabin without compromising outward visibility." }
    ],
    performance: {
      tser: "56%",
      uvr: "99.9%",
      sirr: "85%",
      irer: "78%"
    },
    warranty: "Lifetime Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/da862337-e655-4d18-902c-9d6af545983a.webp"
  },
  "action": {
    name: "ACTION",
    slug: "action",
    brand: "STEK Window Film",
    category: "Window Film",
    tagline: "Premium Nano-carbon Window Film",
    description: "Reliable heat rejection and a classic look with nano-carbon technology.",
    longDescription: "STEK ACTION series is a high-performance nano-carbon window film that offers excellent solar heat control and a sophisticated charcoal finish. Its non-metallic construction ensures zero signal interference for GPS and mobile devices, while its durable design prevents fading and color-shifting over time.",
    features: [
      { title: "Nano-Carbon Tech", description: "Features nano-carbon for lasting color stability and heat control." },
      { title: "Solar Heat Control", description: "Effectively minimizes heat gain for a comfortable cabin." },
      { title: "Glare Minimization", description: "Reduces harsh sunlight for improved driving vision." },
      { title: "Enhanced Privacy", description: "Conceals the interior for a secure and private cabin environment." }
    ],
    performance: {
      tser: "54%",
      uvr: "99.9%",
      sirr: "70%",
      irer: "49%"
    },
    warranty: "7-Year Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/0767808a-d614-49ca-bdd3-d0ea710d4c85.webp"
  },
  "smart": {
    name: "SMART",
    slug: "smart",
    brand: "STEK Window Film",
    category: "Window Film",
    tagline: "Premium Nano-ceramic Window Film",
    description: "Deep-dyed and ceramic layered for superior heat rejection and clarity.",
    longDescription: "STEK SMART series uses advanced nano-ceramic technology to provide excellent heat rejection and superior clarity. Its multi-layered construction includes deep-dyed elements for aesthetic consistency and ceramic particles to aggressively block infrared light, all without interfering with modern electronic signals.",
    features: [
      { title: "Hybrid Composition", description: "Utilizes Tungsten, ITO, and ATO for superior durability." },
      { title: "Exceptional Heat Block", description: "Blocks a high percentage of solar infrared rays." },
      { title: "Optical Clarity", description: "Provides a crisp, clear view through the glass." },
      { title: "Zero Signal Interference", description: "Ceramic construction ensures no interference with electronics." }
    ],
    performance: {
      tser: "59%",
      uvr: "99%",
      sirr: "79%",
      irer: "60%"
    },
    warranty: "10-Year Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/e69c926c-79df-436a-bae8-d84bd1094164.webp"
  },
  "icy": {
    name: "ICY",
    slug: "icy",
    brand: "STEK Window Film",
    category: "Window Film",
    tagline: "High-Performance Metalized Film",
    description: "Efficient solar reflection and cooling for a more comfortable ride.",
    longDescription: "STEK ICY is a high-performance metalized window film designed for maximum solar reflection. Its advanced construction allows for efficient heat reduction and glare control, making it an excellent choice for drivers in hot climates who want to maintain a cool interior and protect their upholstery from UV damage.",
    features: [
      { title: "Advanced Metalized Film", description: "High-performance sun protection with long-term durability." },
      { title: "Efficient Heat Reduction", description: "Reflects solar energy to prevent interior overheating." },
      { title: "Safe Visibility", description: "Reduces blinding glare for a safer driving experience." },
      { title: "Interior Protection", description: "Blocks 99.9% of UV rays to prevent fading." }
    ],
    performance: {
      tser: "57%",
      uvr: "99.9%",
      sirr: "75%",
      irer: "58%"
    },
    warranty: "Lifetime Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/cee968a4-3142-4241-9443-568f2876227f.webp"
  },
  "dynotint": {
    name: "DYNOtint",
    slug: "dynotint",
    brand: "STEK Window Film",
    category: "Window Film",
    tagline: "The First TPU Window Tint",
    description: "Combining PPF levels of protection with advanced window tinting technology.",
    longDescription: "STEK DYNOtint is the world's first window film based on Thermoplastic Polyurethane (TPU). This revolutionary film provides the physical protection of Paint Protection Film for your windows, protecting them from impacts and scratches while offering superior heat rejection via infused Graphene G4 technology. It's the ultimate solution for both performance and protection.",
    features: [
      { title: "TPU Construction", description: "First window film with PPF-like physical protection." },
      { title: "Graphene G4 Technology", description: "Infused with graphene for lightning-fast heat dissipation." },
      { title: "Impact Resistance", description: "Shields your windows from stone chips and debris." },
      { title: "Self-Healing Surface", description: "Minor scratches disappear for a flawless look." }
    ],
    performance: {
      tser: "66%",
      uvr: "99%",
      sirr: "43%",
      irer: "66%"
    },
    warranty: "Lifetime Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/541f617c-c1a9-4d10-9fe6-2bf435d83dde.webp"
  },
  "dynopurple": {
    name: "DYNOpurple",
    slug: "dynopurple",
    brand: "DYNO",
    category: "Paint Protection Film",
    tagline: "Majestic Purple Protection",
    description: "A deep, royal purple finish that offers a unique aesthetic and premium surface protection.",
    longDescription: "DYNOpurple provides a rich, majestic purple finish that's truly one-of-a-kind in the world of paint protection. This color PPF offers deep, high-gloss reflections and full physical protection against road debris. Its self-healing top coat ensures that minor scratches vanish, keeping your vehicle looking regal and well-maintained.",
    features: [
      "Royal Purple High-Gloss Finish",
      "Fast-Acting Self-Healing",
      "Hydrophobic Performance",
      "Superior Durability",
      "10-Year Warranty"
    ],
    warranty: "10-Year Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/d89e9c73-be2c-4ea0-812a-6e5d6fb3e536.webp"
  },
  "dynocarbon-gloss": {
    name: "DYNOcarbon-gloss",
    slug: "dynocarbon-gloss",
    brand: "DYNO",
    category: "Paint Protection Film",
    tagline: "Ultra-Gloss Carbon Fiber Look",
    description: "A high-gloss carbon fiber pattern that provides a sporty aesthetic with the strength of PPF.",
    longDescription: "DYNOcarbon-gloss takes the classic carbon fiber look to the next level with an ultra-gloss finish that mimics real carbon fiber under a clear coat. Unlike decorative vinyl, this is a heavy-duty TPU film that provides meaningful protection against rock chips and scratches while giving your vehicle a high-end, performance-oriented appearance.",
    features: [
      "High-Gloss Carbon Pattern",
      "TPU-Based Impact Shield",
      "Self-Healing Technology",
      "Hydrophobic Top Coat",
      "10-Year Warranty"
    ],
    warranty: "10-Year Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/7a5d9a84-80e4-40f3-8bb8-48ce5aab2c5a.webp"
  },
  "dynocarbon-matte": {
    name: "DYNOcarbon-matte",
    slug: "dynocarbon-matte",
    brand: "DYNO",
    category: "Paint Protection Film",
    tagline: "Stealth Matte Carbon Finish",
    description: "A refined matte carbon fiber texture that offers a sophisticated stealth look with heavy-duty protection.",
    longDescription: "DYNOcarbon-matte provides a sleek, non-reflective carbon fiber finish that's perfect for a modern stealth aesthetic. This film offers the same robust physical protection as our gloss patterns, shielding your vehicle from impacts while adding a unique, high-tech texture that's easy to clean and maintain.",
    features: [
      "Satin Matte Carbon Texture",
      "Impact & Abrasion Resistance",
      "Self-Healing Properties",
      "Anti-Contamination Top Coat",
      "10-Year Warranty"
    ],
    warranty: "10-Year Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/daaa8926-6dde-4d85-be8d-4d856f810454.webp"
  },
  "dynochromeblack": {
    name: "DYNOchrome-black",
    slug: "dynochromeblack",
    brand: "DYNO",
    category: "Paint Protection Film",
    tagline: "Infinite Mirror-Black Protection",
    description: "A stunning, mirror-like black chrome finish that offers both high-end style and robust protection.",
    longDescription: "DYNOchrome-black is the ultimate solution for those seeking a mirror-finish black aesthetic. This specialized film provides a deep, reflective black chrome look that's perfect for chrome deletes or full accents. It combines this high-end finish with the protective properties of STEK's premium TPU, ensuring your stylized accents remain flawless.",
    features: [
      "Mirror-Black Chrome Finish",
      "Highly Stretchable TPU",
      "Self-Healing Properties",
      "Stain & Chemical Resistant",
      "10-Year Warranty"
    ],
    warranty: "10-Year Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/7d88ed9e-77c7-4153-9bcd-18790fe80ef2.jpg"
  },
  "dynotop": {
    name: "DYNOtop",
    slug: "dynotop",
    brand: "DYNO",
    category: "Windshield Film",
    tagline: "Ultimate Windshield Shield",
    description: "High-transparency protection for your windshield, guarding against chips and cracks while maintaining clarity.",
    longDescription: "DYNOtop is specifically engineered to protect one of your vehicle's most vulnerable surfaces: the windshield. This high-impact film shields your glass from rock chips and road debris while providing superior UV rejection and solar heat control. Its ultra-clear composition ensures zero interference with visibility or ADAS systems.",
    features: [
      "Optical Clarity & No Distortion",
      "High-Impact Protection",
      "99% UV Rejection",
      "Super Hydrophobic Surface",
      "Limited Lifetime Warranty"
    ],
    warranty: "Limited Lifetime Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/29660617-5ef6-421d-a976-b2de65df2251.webp"
  },
  "f7-clear": {
    name: "FORCESHIELD F7",
    slug: "f7-clear",
    brand: "FORCESHIELD",
    category: "Paint Protection Film",
    tagline: "High-Performance Clear Protection",
    description: "Tough, durable clear film designed for those who demand reliable protection at a competitive price.",
    longDescription: "FORCESHIELD F7 is our high-performance clear paint protection film. It offers exceptional impact resistance and self-healing capabilities, ensuring your vehicle's paint remains pristine. F7 is designed for ease of installation and long-term durability, providing a cost-effective solution for comprehensive vehicle protection.",
    features: [
      "High Impact Resistance",
      "Self-Healing Technology",
      "UV Stable (Anti-Yellowing)",
      "Easy Maintenance",
      "7-Year Warranty"
    ],
    warranty: "10-Year Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/d89466b4-538b-41c9-8974-7b096e241922.webp"
  },
  "lunaray-nex": {
    name: "LUNARAY NEX+",
    slug: "lunaray-nex",
    brand: "LUNARAY",
    category: "Window Film",
    tagline: "Graphene-Infused Premium Nano-Ceramic",
    description: "The pinnacle of window film technology, NEX+ combines nano-ceramic precision with graphene-cooling properties.",
    longDescription: "LUNARAY NEX+ represents the next generation of automotive window films. By integrating Graphene—the world's strongest and most conductive material—into our premium nano-ceramic structure, NEX+ delivers unprecedented thermal comfort. It effectively disperses heat while maintaining extreme optical clarity, blocking 99% of harmful UV rays, and providing a sleek, non-reflective aesthetic that lasts a lifetime.",
    features: [
      "Graphene Cooling Technology",
      "99.9% UV Rejection",
      "Superior IR Heat Blockage",
      "Multi-Directional Shrinkage",
      "Lifetime Warranty"
    ],
    specifications: {
      "VLT Range": "5%, 15%, 35%, 45%, 70%, 85%",
      "UV Rejection": "99.9%",
      "IR Rejection (SIRR)": "Up to 98%",
      "TSER": "Up to 64%"
    },
    warranty: "Lifetime Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/2cc821fe-3729-45be-a2c8-78da283bf2e0.webp"
  },
  "lunaray-smart": {
    name: "LUNARAY SMART+",
    slug: "lunaray-smart",
    brand: "LUNARAY",
    category: "Window Film",
    tagline: "Advanced Nano-Ceramic Technology",
    description: "Multi-layered ceramic protection for optimal heat rejection and clarity.",
    longDescription: "LUNARAY SMART+ is engineered with advanced Antimony Tin Oxide (ATO) and Indium Tin Oxide (ITO) nano-ceramic particles. This specialized construction allows for high visible light transmission while aggressively blocking infrared heat. SMART+ is non-metallic, ensuring no interference with GPS, cellular, or radio signals, all while providing a cool and comfortable interior that protects your upholstery from fading.",
    features: [
      "Advanced Nano-Ceramic Architecture",
      "Superior Optical Clarity",
      "Anti-Glare Technology",
      "Maximum Heat Rejection",
      "10-Year Warranty"
    ],
    specifications: {
      "VLT Range": "5%, 15%, 35%, 45%, 70%, 85%",
      "IR Rejection (SIRR)": "Up to 91%",
      "UV Rejection": "99%",
      "TSER": "Up to 60%"
    },
    warranty: "10-Year Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/fb8c8eeb-078f-4dba-8b3a-893c45a91f68.webp"
  },
  "lunaray-action": {
    name: "LUNARAY ACTION+",
    slug: "lunaray-action",
    brand: "LUNARAY",
    category: "Window Film",
    tagline: "High-Performance Nano-Carbon Film",
    description: "Reliable style and protection using deep-dyed nano-carbon technology.",
    longDescription: "LUNARAY ACTION+ is the perfect blend of style, performance, and value. Utilizing advanced nano-carbon technology, this film provides excellent heat rejection and a sophisticated charcoal finish that will never turn purple. The deep-dyed structure offers lasting color stability and a non-reflective look that enhances the privacy and security of your vehicle without sacrificing night-time visibility.",
    features: [
      "Nano-Carbon Technology",
      "Lifetime Color Stability",
      "Enhanced Privacy",
      "Sleek Charcoal Look",
      "7-Year Warranty"
    ],
    specifications: {
      "VLT Range": "5%, 15%, 35%, 50%",
      "IR Rejection (SIRR)": "Up to 70%",
      "UV Rejection": "99%",
      "TSER": "Up to 54%"
    },
    warranty: "7-Year Limited Warranty",
    image: "https://d31muh84oxzu1x.cloudfront.net/bdfad232-2e1d-4111-b4b6-03556ebb58a8.webp"
  },
  "intercept": {
    name: "STEK Intercept™",
    slug: "intercept",
    brand: "LUNARAY",
    category: "Safety Film",
    tagline: "Antimicrobial & Safety Protection",
    description: "An advanced antimicrobial film designed for high-touch surfaces and architectural spaces.",
    longDescription: "STEK Intercept™ is more than just a protective film; it's a hygienic solution for the modern world. Specifically designed for high-touch surfaces, screens, and architectural glass, Intercept™ features a specialized coating that inhibits up to 99.9% of microbial growth. In addition to its antimicrobial properties, it serves as a robust safety film, providing shatter-resistance (4MIL) to prevent glass splashing upon impact, making it ideal for hospitals, schools, and offices.",
    features: [
      "99.9% Microbial Inhibition",
      "Shatter-Resistant (4MIL Safety)",
      "High IR Heat Rejection",
      "Scratch-Resistant Coating",
      "High Optical Clarity"
    ],
    specifications: {
      "Visible Light Transmission": "73%",
      "IR Rejection": "Up to 85%",
      "UV Rejection": "99%",
      "TSER": "47%",
      "Thickness": "4.0 mil"
    },
    warranty: "5-Year Performance Guarantee",
    image: "https://d31muh84oxzu1x.cloudfront.net/ea55ce5d-edf0-4b96-8bbf-bfc39f13a0a5.webp"
  }
};

export interface FormulaProduct {
  id: string;
  name: string;
  tagline: string;
  shortDescription: string;
  description?: string;
  volume?: string;
  imageUrl: string;
  category: 'prep' | 'install' | 'maintain';
}

export const FORMULA_PRODUCTS: FormulaProduct[] = [
  // Prep / Clean
  {
    id: 'foam',
    category: 'prep',
    name: "FOAM",
    tagline: "Deep-cleaning alkaline foam | Touchless cleaning power | Hyper-concentrated formula | Tire browning remover",
    shortDescription: "POWERFUL DEEP-CLEANING FOAM",
    description: "FOAM is a highly concentrated, alkaline-based pre-wash solution designed to break down tough road grime, bird droppings, and organic contaminants. Its hyper-concentrated formula creates a thick, long-clinging foam that allows for maximum dwell time, ensuring a touchless and thorough cleaning process. Ideal for use on tires as a browning remover and as a powerful first step in any detail.",
    volume: "500 ml / 17 FL. Oz.",
    imageUrl: "https://d31muh84oxzu1x.cloudfront.net/d9c8b474-41ab-444c-b92a-791d9efb6f74.webp"
  },
  {
    id: 'shampoo',
    category: 'prep',
    name: "SHAMPOO",
    tagline: "pH-balanced, powerful cleaning | High lubricity formula | Safe for PPF, wraps and coated finishes | Foam-rich lather | Streak-free finish",
    shortDescription: "PH-BALANCED WASH SOLUTION",
    description: "SHAMPOO is a premium, pH-balanced wash solution engineered specifically for high-end paint protection films and ceramic coatings. Its high-lubricity formula minimizes the risk of wash-induced marring, while the rich lather effectively lifts and suspends contaminants for a safe, streak-free finish. Safe for all exterior surfaces including delicate wraps and matte finishes.",
    volume: "500 ml / 17 FL. Oz.",
    imageUrl: "https://d31muh84oxzu1x.cloudfront.net/a604bbea-8160-4657-8aaf-270bbb04cd08.webp"
  },
  {
    id: 'bug',
    category: 'prep',
    name: "BUG",
    tagline: "Fast-acting bug removal | Protein-focused cleaning power | Coating and PPF compatible | Professional-grade formula",
    shortDescription: "HIGH-STRENGTH BUG REMOVER",
    description: "BUG is a specialized cleaning agent formulated to dissolve stubborn protein-based contaminants like bug splatter and bird droppings. Despite its high-strength cleaning power, it remains safe for use on all high-performance films and ceramic coatings. This professional-grade formula acts quickly to break down organic matter before it can etch into the surface.",
    volume: "500 ml / 17 FL. Oz.",
    imageUrl: "https://d31muh84oxzu1x.cloudfront.net/d07e9400-4695-462a-abc8-8b90b341e2a7.webp"
  },
  {
    id: 'tire-cleaner',
    category: 'prep',
    name: "TIRE CLEANER",
    tagline: "Powerful tire decontamination | Safe on wheels | Preps tires for maximum dressing bond",
    shortDescription: "TIRE BROWNING REMOVER",
    description: "TIRE CLEANER is a heavy-duty decontaminant that targets the oxidation and 'blooming' that causes tires to turn brown. It deep-cleans the rubber pores, removing old dressings and road oils to create a perfectly prepped surface for the application of TIRE & TRIM DRESSING. Safe for all wheel finishes when used as directed.",
    volume: "500 ml / 17 FL. Oz.",
    imageUrl: "https://d31muh84oxzu1x.cloudfront.net/0ef3d96c-bcaa-4572-bb23-48a030dafb16.webp"
  },
  {
    id: 'iron',
    category: 'prep',
    name: "IRON",
    tagline: "Visible iron removal | Deep wheel cleaning | Prevents rust & surface failure | Safe on all exterior surfaces | Low-odor formula | Pro-grade decontamination",
    shortDescription: "PRO-GRADE IRON REMOVER",
    description: "IRON is a high-performance decontamination spray that chemically reacts with embedded iron particles, turning them purple as it dissolves them. It is essential for removing brake dust from wheels and industrial fallout from paint and films. Its pH-neutral, low-odor formula makes it safe and pleasant to use on all exterior surfaces, preventing long-term corrosion and surface failure.",
    volume: "500 ml / 17 FL. Oz.",
    imageUrl: "https://d31muh84oxzu1x.cloudfront.net/07b057de-1685-4974-a2f0-0ee6b2381dc9.webp"
  },
  {
    id: 'tar-adhesive-remover',
    category: 'prep',
    name: "TAR & ADHESIVE REMOVER",
    tagline: "Fast-acting, multi-contaminant removal | Boosts coating and film adhesion | Powered by orange peel extract | Multi-surface compatible",
    shortDescription: "POWERFUL TAR REMOVER",
    description: "TAR & ADHESIVE REMOVER uses natural citrus extracts to quickly dissolve tar, tree sap, and adhesive residue. It is a critical step in the decontamination process to ensure a clinically clean surface before installing PPF or applying a ceramic coating. The formula is designed to be multi-surface compatible while providing professional-strength results.",
    volume: "500 ml / 17 FL. Oz.",
    imageUrl: "https://d31muh84oxzu1x.cloudfront.net/fb247372-78b8-4e3b-9414-384848a6390a.webp"
  },
  {
    id: 'apc',
    category: 'prep',
    name: "APC",
    tagline: "Powerful multi-surface cleaning | Dilutable for any job | Clean finish, no streaks | For pros or daily drivers",
    shortDescription: "UNIVERSAL CLEANING SOLUTION",
    description: "APC (All-Purpose Cleaner) is a versatile, highly concentrated cleaning solution that can be diluted to handle everything from heavy engine degreasing to light interior surface wiping. It leaves behind a perfectly clean, residue-free finish without streaks. A must-have tool for both professional detailers and automotive enthusiasts.",
    volume: "500 ml / 17 FL. Oz.",
    imageUrl: "https://d31muh84oxzu1x.cloudfront.net/4d706ad4-0fae-47da-9a74-1faf49bbca85.webp"
  },
  {
    id: 'prep',
    category: 'prep',
    name: "PREP",
    tagline: "Preps for strong bonding | Advanced PPF-safe formula | Silicone-free surface reset | Residue-free finish",
    shortDescription: "ULTIMATE SURFACE PREP",
    description: "PREP is an advanced surface cleansing agent designed to remove all remaining oils, lubricants, and polishing residues. It provides a final 'reset' for the surface, ensuring the strongest possible bond for paint protection films or ceramic coatings. The silicone-free formula leaves a completely bare and residue-free finish.",
    volume: "500 ml / 17 FL. Oz.",
    imageUrl: "https://d31muh84oxzu1x.cloudfront.net/2da6942e-c85f-4b6a-96d6-f71650a39dff.webp"
  },
  {
    id: 'x-oil',
    category: 'prep',
    name: "X-OIL",
    tagline: "Powerful oil removal for glass | Restores visibility and safety | Essential prep before coating or film | Use by hand or polisher",
    shortDescription: "OIL FILM REMOVER FOR GLASS",
    description: "X-OIL is a specialized abrasive cleanser formulated to strip away stubborn oil films, water spots, and road grime from glass surfaces. By restoring glass to its original clarity, it significantly improves nighttime visibility and driver safety. It is the essential preparation step before applying STEK Glass Coat or window films.",
    volume: "200 ml",
    imageUrl: "https://d31muh84oxzu1x.cloudfront.net/0f1230dc-2353-40c5-bc0f-59866e99bd94.webp"
  },
  {
    id: 'paint-cleanse',
    category: 'prep',
    name: "PAINT CLEANSE",
    tagline: "Ultra-fine polish | Optimized for coating adhesion | Smooth & effortless glide",
    shortDescription: "ULTRA-FINE PPF POLISH",
    description: "PAINT CLEANSE is an ultra-fine finishing polish designed to refine the surface and maximize gloss without heavy abrasives. It is optimized to create the ideal surface tension for ceramic coating adhesion, ensuring long-lasting protection and a mirror-like shine. Its smooth glide makes it easy to use by hand or with a machine polisher.",
    volume: "500 ml / 17 FL. Oz.",
    imageUrl: "https://d31muh84oxzu1x.cloudfront.net/bc312e10-5cd3-4083-bc29-ba4ce5ba5869.webp"
  },
  // Film Install
  {
    id: 'installation-gel',
    category: 'install',
    name: "INSTALLATION GEL",
    tagline: "High-viscosity gel for smoother film installation | Reduces stop lines and adhesion issues | Dilutable for any job | Optimized for professional use",
    shortDescription: "GEL-TYPE SLIP SOLUTION",
    description: "INSTALLATION GEL is a high-performance, high-viscosity solution designed for precision PPF application. Its unique gel consistency provides superior slip, allowing for easy repositioning while significantly reducing the risk of 'stop lines' and silvering. It can be diluted with water to match the specific needs of the installer and the environment.",
    volume: "1000 ml",
    imageUrl: "https://d31muh84oxzu1x.cloudfront.net/6ffd36e2-fc52-436c-8dca-df992492a3d3.webp"
  },
  {
    id: 'slip-tac',
    category: 'install',
    name: "SLIP TAC",
    tagline: "Smooth film positioning | Safe for all films | Highly concentrated | pH-balanced & residue-free",
    shortDescription: "ADVANCED SLIP SOLUTION",
    description: "SLIP TAC is a highly concentrated, pH-balanced slip solution engineered for the professional installation of all STEK films. It provides the perfect balance of glide and tack, ensuring bubble-free results and long-term adhesion. The residue-free formula ensures that the optical clarity of the film is never compromised.",
    volume: "500 ml / 17 FL. Oz.",
    imageUrl: "https://d31muh84oxzu1x.cloudfront.net/63b6dd9f-bda7-4935-87f9-af912a1d6755.webp"
  },
  {
    id: 'primer',
    category: 'install',
    name: "PRIMER",
    tagline: "Reliable bonding for PPF installation | Spot application for strong hold | Dries fast for efficient workflow",
    shortDescription: "EDGE & CURVE ADHESION AID",
    description: "PRIMER is a critical aid for securing film edges and complex curves where high tension is present. When applied in small amounts to the substrate, it provides an immediate and reliable anchor point, preventing lifting and peeling. Its fast-drying formula ensures that installers can maintain a rapid and efficient workflow.",
    volume: "50 ml",
    imageUrl: "https://d31muh84oxzu1x.cloudfront.net/2e7bdde0-2d48-4a1d-a469-edd150bb283a.webp"
  },
  // Protect / Maintain
  {
    id: 'waterless-wash',
    category: 'maintain',
    name: "WATERLESS WASH",
    tagline: "One-step wash & coat | Effortless spot cleaning | Ideal for water-restricted environments | Spray-and-wipe convenience | Multi-surface compatible",
    shortDescription: "NO-RINSE CLEANING SOLUTION",
    description: "WATERLESS WASH is the ultimate solution for rapid vehicle cleaning without the need for a traditional hose and bucket. This advanced formula encapsulates dirt to prevent scratches, while simultaneously leaving behind a protective hydrophobic coating. Perfect for light maintenance for vehicles in water-restricted areas or professional showrooms.",
    volume: "500 ml / 17 FL. Oz.",
    imageUrl: "https://d31muh84oxzu1x.cloudfront.net/bf9ff3fc-2b92-4bed-96a2-a0a08b05ac00.webp"
  },
  {
    id: 'dyno-finish',
    category: 'maintain',
    name: "DYNO FINISH",
    tagline: "True ceramic technology | Oil-based for deeper gloss & durability | Safe for paint, PPF, matte, vinyl, glass, windshield film | Superior environmental resistance | Pro results made simple | Advanced surface repellency",
    shortDescription: "CERAMIC SPRAY COATING",
    description: "DYNO FINISH is a professional-grade ceramic spray coating that utilizes advanced oil-based technology to provide unmatched depth, gloss, and durability. It is designed to be highly versatile, safe for use on paint, PPF, matte finishes, and glass. This easy-to-apply formula creates a resilient barrier against environmental contaminants while providing extreme water repellency.",
    volume: "500 ml / 17 FL. Oz.",
    imageUrl: "https://d31muh84oxzu1x.cloudfront.net/77f9ebe7-5381-4fe9-91e7-aa75351d7598.webp"
  },
  {
    id: 'quick-detailer',
    category: 'maintain',
    name: "QUICK DETAILER",
    tagline: "Clean + coat in one step | Restores slickness and hydrophobicity | PPF & coating safe | Enhances scratch resistance | Simple, spray-and-wipe application",
    shortDescription: "INSTANT GLOSS DETAILER",
    description: "QUICK DETAILER is a versatile maintenance spray that bridges the gap between washes. It safely removes light dust and fingerprints while adding a layer of slickness and hydrophobic protection. Specifically formulated to be safe for all PPF and ceramic coatings, it helps maintain the 'just detailed' look with minimal effort.",
    volume: "500 ml / 17 FL. Oz.",
    imageUrl: "https://d31muh84oxzu1x.cloudfront.net/6b2ed295-4268-49bf-be23-53358c0b0696.webp"
  },
  {
    id: 'glass-detailer',
    category: 'maintain',
    name: "GLASS DETAILER",
    tagline: "Cleans & protects in one step | Streak-free optical clarity | Hydrophobic finish for all weather | Film-safe formula",
    shortDescription: "WATER-REPELLENT GLASS DETAILER",
    description: "GLASS DETAILER is a dual-action cleaner and protectant for all automotive glass. It cuts through road film and haze to provide streak-free optical clarity, while simultaneously applying a hydrophobic barrier that repels rain and improves visibility. Its film-safe formula makes it perfect for maintaining both exterior glass and window tint films.",
    volume: "500 ml / 17 FL. Oz.",
    imageUrl: "https://d31muh84oxzu1x.cloudfront.net/529fb293-fea8-4a2f-a8db-44cad1313492.webp"
  },
  {
    id: 'tire-trim-dressing',
    category: 'maintain',
    name: "TIRE & TRIM DRESSING",
    tagline: "Restores factory finish | Minimizes buildup | Fast-drying formula | Quick & easy to apply",
    shortDescription: "BLACK FINISH RESTORER",
    description: "TIRE & TRIM DRESSING is a premium water-based protectant that restores a deep, rich 'factory fresh' look to tires and plastic trim. Its fast-drying, non-sling formula ensures a clean finish that resists dust buildup and provides long-lasting UV protection against fading and cracking.",
    volume: "500 ml / 17 FL. Oz.",
    imageUrl: "https://d31muh84oxzu1x.cloudfront.net/acd8923d-a946-4a57-a255-72aac3ec95dd.webp"
  },
  {
    id: 'interior-detailer',
    category: 'maintain',
    name: "INTERIOR DETAILER",
    tagline: "Dust-repelling formula | Non-greasy finish | Safe for tech & touchscreens | Cleans & coats in one step | Fast & easy application",
    shortDescription: "QUICK INTERIOR SURFACE CLEANER",
    description: "INTERIOR DETAILER is an all-in-one cleaner and protectant for every interior surface. It effectively removes dust and grime from plastics, leather, and even sensitive touchscreens, leaving behind a non-greasy, anti-static finish. Its advanced formula provides a subtle layer of UV protection to prevent delicate interior components from aging.",
    volume: "500 ml / 17 FL. Oz.",
    imageUrl: "https://d31muh84oxzu1x.cloudfront.net/8c65e0e6-a6b9-4673-912e-8d20d51d9046.webp"
  },
  {
    id: 'fabric-coat',
    category: 'maintain',
    name: "FABRIC COAT",
    tagline: "Advanced fabric protection coating | Prevents deep contamination | Versatile use across interior & exterior | Simple spray-on application | Durable, invisible finish",
    shortDescription: "WATER & STAIN FABRIC GUARD",
    description: "FABRIC COAT is a high-tech repellant for all textile surfaces. Its breathable, invisible barrier prevents liquids and contaminants from soaking into fabrics, making clean-up of spills effortless. Ideal for car seats, carpets, and convertible tops, it provides durable protection without changing the look or feel of the material.",
    volume: "500 ml / 17 FL. Oz.",
    imageUrl: "https://d31muh84oxzu1x.cloudfront.net/8b9644f1-1a0c-4c4f-86ce-c3dfe75cdb10.webp"
  },
  {
    id: 'paint-coat',
    category: 'maintain',
    name: "PAINT COAT",
    tagline: "Easy, beginner-friendly application | Excellent gloss & clarity | Everyday protection | PPF and paint safe",
    shortDescription: "EASY CERAMIC PAINT COATING",
    description: "PAINT COAT is an accessible ceramic coating designed for those who want professional-grade protection without the complexity of traditional applications. It offers excellent gloss enhancement and everyday protection against environmental fallout, all while being perfectly safe for both bare paint and paint protection films.",
    volume: "50 ml",
    imageUrl: "https://d31muh84oxzu1x.cloudfront.net/a18d9e5d-2079-4ebc-8e84-ee0a28997d71.webp"
  },
  {
    id: 'glass-coat',
    category: 'maintain',
    name: "GLASS COAT",
    tagline: "Hydrophobic coating | Prevents oil film & vision distortion | Clear visibility even above 60 km/h | Long lasting performance | Effortless maintenance",
    shortDescription: "HYDROPHOBIC GLASS PROTECTION",
    description: "GLASS COAT is a semi-permanent hydrophobic coating that creates a chemically bonded shield on glass surfaces. It significantly improves visibility by allowing water to bead and roll off at speeds as low as 60 km/h, reducing the need for wipers and preventing the buildup of oily films and environmental haze.",
    volume: "50 ml",
    imageUrl: "https://d31muh84oxzu1x.cloudfront.net/aaf1dc3f-8313-45de-a8dc-ff2894d195bf.webp"
  },
  {
    id: 'wheel-coat',
    category: 'maintain',
    name: "WHEEL COAT",
    tagline: "Specialized ceramic coating for wheels | Heat-resistant formula | Enhances color and depth | Protects against brake dust & road contaminants",
    shortDescription: "DURABLE WHEEL DEFENSE",
    description: "WHEEL COAT is a rugged, heat-resistant ceramic coating specifically engineered to withstand the harsh environment of wheels and brake components. It creates a smooth, high-energy surface that repels brake dust and road salt, making future wheel cleaning as simple as a quick rinse. Its formula also enhances the color and depth of all wheel finishes.",
    volume: "50 ml",
    imageUrl: "https://d31muh84oxzu1x.cloudfront.net/00f97f36-fe8f-4740-ba10-696750a8a14c.webp"
  },
  {
    id: 'leather-coat',
    category: 'maintain',
    name: "LEATHER COAT",
    tagline: "Protects against contamination & aging | Deep nourishing, lasting durability | Preserves natural matte texture | Enhances depth and color | Moisture-retaining formula",
    shortDescription: "LONG-LASTING LEATHER PROTECTION",
    description: "LEATHER COAT is a sophisticated protectant that nourishes and shields leather surfaces from the rigors of daily use. It prevents dye transfer from clothing and helps protect against UV damage and spills, all while preserving the leather's natural matte texture and breathability. Its moisture-retaining formula ensures leather remains supple and vibrant.",
    volume: "100 ml",
    imageUrl: "https://d31muh84oxzu1x.cloudfront.net/5cf553fa-abfe-4051-bb47-8ea5e53da8c9.webp"
  },
  {
    id: 'quartz',
    category: 'maintain',
    name: "QUARTZ",
    tagline: "High-performance ceramic coating | Slick, hydrophobic finish | UV & environmental protection | Enhances color and depth | Proven safe for PPF",
    shortDescription: "QUARTZ-BASED SURFACE PROTECTION",
    description: "QUARTZ is a premium ceramic coating that utilizes high-purity SiO2 to provide a hard, glass-like layer of protection. It offers exceptional slickness, extreme hydrophobicity, and robust defense against UV rays and environmental fallout. Specifically tested and proven safe for use on STEK paint protection films, it enhances the aesthetic depth and durability of any finish.",
    volume: "50 ml",
    imageUrl: "https://d31muh84oxzu1x.cloudfront.net/a49862c8-7c8b-4e12-a2d8-069cf39be894.webp"
  },
  {
    id: 'final-coat',
    category: 'maintain',
    name: "FINAL COAT",
    tagline: "CNT-infused durability | Superior hydrophobic & slick finish | Advanced weather resistance | Pro-level gloss and depth | PPF & vinyl compatible",
    shortDescription: "PREMIUM CERAMIC TOP COAT",
    description: "FINAL COAT is a cutting-edge top coat infused with Carbon Nanotubes (CNT) for enhanced structural durability. It provides a superior layer of hydrophobicity and slickness, further shielding underlying coatings or films from harsh weather and chemical environmental impacts. It represents the pinnacle of pro-level gloss and surface refinement.",
    volume: "50 ml",
    imageUrl: "https://d31muh84oxzu1x.cloudfront.net/54d0a9ff-b301-49a3-ab0a-121753d3a2e3.webp"
  },
  {
    id: 'super-coat',
    category: 'maintain',
    name: "SUPER COAT",
    tagline: "Extreme durability – 10 years | Advanced CNT matrix | Extreme hydrophobic performance | Ultra-deep gloss and color enhancement | Safe for paint, PPF, and vinyl",
    shortDescription: "HEAVY-DUTY CERAMIC SHIELD",
    description: "SUPER COAT is STEK's most advanced ceramic coating, featuring a reinforced CNT matrix for unprecedented 10-year durability. It offers extreme hydrophobic performance and ultra-deep gloss that transforms the appearance of paint and film. This heavy-duty shield is the ultimate choice for long-term protection against the most demanding environmental challenges.",
    volume: "50 ml",
    imageUrl: "https://d31muh84oxzu1x.cloudfront.net/b41553e1-263a-411f-bc62-3efdd42643d3.webp"
  },
  {
    id: 'ppf-compound-kit',
    category: 'maintain',
    name: "PPF COMPOUND KIT",
    tagline: "PPF Compound Cut | PPF Compound Polish | Restoration Coating | Wool Pad | Foam Pad | Coating Applicator",
    shortDescription: "FULL SURFACE RESTORATION SYSTEM",
    description: "The PPF COMPOUND KIT is a comprehensive professional system designed to restore weathered or lightly marred paint protection film to its original glory. The kit includes specialized abrasive compounds, pads, and a restoration coating, providing a complete end-to-end solution for film rejuvenation and long-term surface maintenance.",
    volume: "KIT",
    imageUrl: "https://d31muh84oxzu1x.cloudfront.net/10fec223-c3fe-4511-b199-4e9ed5db1138.webp"
  }
];
