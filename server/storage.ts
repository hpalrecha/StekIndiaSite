import {
  type User,
  type InsertUser,
  type ContactSubmission,
  type InsertContact,
  type Installer,
  type InsertInstaller,
  type BlogPost,
  type InsertBlogPost,
  type Product,
  type InsertProduct,
  type TrainingProgram,
  type InsertTrainingProgram,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;

  getInstallers(): Promise<Installer[]>;
  getInstallersByState(state: string): Promise<Installer[]>;
  createInstaller(installer: InsertInstaller): Promise<Installer>;

  getBlogPosts(publishedOnly?: boolean): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  getBlogPostById(id: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: string, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: string): Promise<boolean>;

  getProducts(publishedOnly?: boolean): Promise<Product[]>;
  getProductsByBrand(brand: string, publishedOnly?: boolean): Promise<Product[]>;
  getProductsByCategory(category: string, publishedOnly?: boolean): Promise<Product[]>;
  getProductBySlug(slug: string): Promise<Product | undefined>;
  getProductById(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  updateProduct(id: string, product: Partial<InsertProduct>): Promise<Product | undefined>;
  deleteProduct(id: string): Promise<boolean>;

  getTrainingPrograms(publishedOnly?: boolean): Promise<TrainingProgram[]>;
  createTrainingProgram(program: InsertTrainingProgram): Promise<TrainingProgram>;
  deleteTrainingProgram(id: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, ContactSubmission>;
  private installers: Map<string, Installer>;
  private blogPosts: Map<string, BlogPost>;
  private products: Map<string, Product>;
  private trainingPrograms: Map<string, TrainingProgram>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.installers = new Map();
    this.blogPosts = new Map();
    this.products = new Map();
    this.trainingPrograms = new Map();

    this.seedInstallers();
    this.seedBlogPosts();
    this.seedProducts();
    this.seedTrainingPrograms();
  }

  private seedInstallers() {
    const sampleInstallers: InsertInstaller[] = [
      {
        name: "AutoShield Premium",
        address: "42, Linking Road, Bandra West",
        city: "Mumbai",
        state: "Maharashtra",
        phone: "+91 98765 43210",
        email: "info@autoshield.in",
        website: "https://autoshield.in",
        certificationLevel: "Platinum",
      },
      {
        name: "PPF Masters Delhi",
        address: "A-23, Rajouri Garden",
        city: "New Delhi",
        state: "Delhi",
        phone: "+91 98765 12345",
        email: "contact@ppfmasters.com",
        website: "https://ppfmasters.com",
        certificationLevel: "Gold",
      },
      {
        name: "Bangalore Auto Care",
        address: "15, Indiranagar 100ft Road",
        city: "Bangalore",
        state: "Karnataka",
        phone: "+91 87654 32109",
        email: "hello@blrautocare.in",
        certificationLevel: "Platinum",
      },
      {
        name: "Chennai PPF Studio",
        address: "789, Anna Salai",
        city: "Chennai",
        state: "Tamil Nadu",
        phone: "+91 76543 21098",
        email: "studio@chennaippf.com",
        certificationLevel: "Gold",
      },
      {
        name: "Gujarat Auto Protection",
        address: "Satellite Road, Ahmedabad",
        city: "Ahmedabad",
        state: "Gujarat",
        phone: "+91 65432 10987",
        email: "info@gujaratauto.in",
        certificationLevel: "Silver",
      },
      {
        name: "Pune Premium Wraps",
        address: "FC Road, Shivajinagar",
        city: "Pune",
        state: "Maharashtra",
        phone: "+91 54321 09876",
        email: "wrap@punepremium.com",
        certificationLevel: "Gold",
      },
    ];

    sampleInstallers.forEach((installer) => {
      const id = randomUUID();
      this.installers.set(id, {
        ...installer,
        id,
        phone: installer.phone || null,
        email: installer.email || null,
        website: installer.website || null,
        certificationLevel: installer.certificationLevel || null,
      });
    });
  }

  private seedBlogPosts() {
    const samplePosts: InsertBlogPost[] = [
      {
        title: "Introducing DYNO Shield: Ultimate Paint Protection",
        slug: "introducing-dyno-shield-ultimate-paint-protection",
        excerpt: "Discover our latest innovation in paint protection film technology with self-healing properties and unmatched durability.",
        content: `STEK is proud to announce the launch of DYNO Shield, our most advanced paint protection film to date. This revolutionary product features nano-ceramic technology that provides exceptional clarity while offering superior protection against scratches, rock chips, and environmental damage.

Key features of DYNO Shield include:
- Advanced self-healing technology that repairs minor scratches with heat
- Hydrophobic coating that repels water and contaminants
- 10-year manufacturer warranty
- Optically clear finish that enhances your vehicle's appearance

Contact your nearest STEK certified installer to learn more about DYNO Shield and how it can protect your investment.`,
        coverImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",
        author: "STEK India",
        category: "Products",
        published: true,
      },
      {
        title: "STEK India Expands Certified Installer Network",
        slug: "stek-india-expands-certified-installer-network",
        excerpt: "We are thrilled to announce the addition of 15 new certified installers across major Indian cities.",
        content: `STEK India continues to grow its network of certified professional installers. This month, we welcomed 15 new premium shops to our family, bringing our total network to over 50 locations across India.

Our certified installers undergo rigorous training to ensure the highest quality installation standards. Each installer is trained in:
- Proper surface preparation techniques
- Precision cutting and application methods
- Post-installation care and maintenance
- Customer consultation best practices

Find your nearest certified installer using our Installer Locator tool.`,
        coverImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800",
        author: "STEK India",
        category: "News",
        published: true,
      },
      {
        title: "Window Film Benefits: More Than Just Privacy",
        slug: "window-film-benefits-more-than-just-privacy",
        excerpt: "Learn how automotive window film provides heat rejection, UV protection, and enhanced comfort for your daily drive.",
        content: `When most people think of window tinting, privacy is often the first benefit that comes to mind. However, modern automotive window films offer so much more.

LUNARAY window films provide:
- Up to 99% UV ray rejection, protecting your skin and interior
- Significant heat reduction for a more comfortable cabin
- Reduced glare for safer driving
- Enhanced privacy without compromising visibility
- Signal-friendly technology that won't interfere with electronics

Our ceramic window films use advanced technology to block heat while maintaining excellent optical clarity. Whether you're commuting in city traffic or taking a long road trip, LUNARAY window film transforms your driving experience.

Visit a STEK certified installer to explore our range of window film options.`,
        coverImage: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800",
        author: "STEK India",
        category: "Education",
        published: true,
      },
    ];

    samplePosts.forEach((post) => {
      const id = randomUUID();
      const now = new Date();
      this.blogPosts.set(id, {
        id,
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        coverImage: post.coverImage || null,
        author: post.author || "STEK India",
        category: post.category || "News",
        published: post.published ?? false,
        createdAt: now,
        updatedAt: now,
      });
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(contact: InsertContact): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = {
      id,
      name: contact.name,
      email: contact.email,
      phone: contact.phone || null,
      subject: contact.subject,
      message: contact.message,
      createdAt: new Date(),
    };
    this.contacts.set(id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async getInstallers(): Promise<Installer[]> {
    return Array.from(this.installers.values());
  }

  async getInstallersByState(state: string): Promise<Installer[]> {
    return Array.from(this.installers.values()).filter(
      (installer) => installer.state.toLowerCase() === state.toLowerCase()
    );
  }

  async createInstaller(installer: InsertInstaller): Promise<Installer> {
    const id = randomUUID();
    const newInstaller: Installer = {
      id,
      name: installer.name,
      address: installer.address,
      city: installer.city,
      state: installer.state,
      phone: installer.phone || null,
      email: installer.email || null,
      website: installer.website || null,
      certificationLevel: installer.certificationLevel || null,
    };
    this.installers.set(id, newInstaller);
    return newInstaller;
  }

  async getBlogPosts(publishedOnly = false): Promise<BlogPost[]> {
    const posts = Array.from(this.blogPosts.values());
    const filtered = publishedOnly ? posts.filter((p) => p.published) : posts;
    return filtered.sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find((p) => p.slug === slug);
  }

  async getBlogPostById(id: string): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const now = new Date();
    const newPost: BlogPost = {
      id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      coverImage: post.coverImage || null,
      author: post.author || "STEK India",
      category: post.category || "News",
      published: post.published ?? false,
      createdAt: now,
      updatedAt: now,
    };
    this.blogPosts.set(id, newPost);
    return newPost;
  }

  async updateBlogPost(id: string, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const existing = this.blogPosts.get(id);
    if (!existing) return undefined;

    const updated: BlogPost = {
      ...existing,
      ...post,
      id,
      updatedAt: new Date(),
    };
    this.blogPosts.set(id, updated);
    return updated;
  }

  async deleteBlogPost(id: string): Promise<boolean> {
    return this.blogPosts.delete(id);
  }

  private seedProducts() {
    const sampleProducts: InsertProduct[] = [
      {
        name: "DYNO Shield",
        slug: "dyno-shield",
        description: "DYNO Shield is the ultimate paint protection film featuring advanced self-healing technology and superior optical clarity. Designed for automotive enthusiasts who demand the best protection for their vehicles.",
        shortDescription: "Premium self-healing paint protection film",
        coverImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",
        brand: "DYNO",
        category: "Paint Protection Film",
        subcategory: "Clear PPF",
        features: ["Self-healing technology", "10-year warranty", "Hydrophobic coating", "Optical clarity", "Stone chip protection"],
        published: true,
        displayOrder: "1",
      },
      {
        name: "DYNO Matte",
        slug: "dyno-matte",
        description: "DYNO Matte delivers a stunning satin finish while providing top-tier paint protection. Transform your vehicle's appearance with a sophisticated matte look that also protects.",
        shortDescription: "Satin finish paint protection film",
        coverImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
        brand: "DYNO",
        category: "Paint Protection Film",
        subcategory: "Matte PPF",
        features: ["Satin matte finish", "Self-healing", "10-year warranty", "UV protection", "No wax required"],
        published: true,
        displayOrder: "2",
      },
      {
        name: "LUNARAY Ceramic IR",
        slug: "lunaray-ceramic-ir",
        description: "LUNARAY Ceramic IR window film combines advanced nano-ceramic technology with superior heat rejection. Stay cool and protected with up to 99% UV rejection.",
        shortDescription: "Premium ceramic window tint",
        coverImage: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800",
        brand: "Lunarray",
        category: "Window Film",
        subcategory: "Ceramic",
        features: ["99% UV rejection", "Superior heat rejection", "Signal friendly", "Optical clarity", "Lifetime warranty"],
        published: true,
        displayOrder: "1",
      },
      {
        name: "Forceshield Pro",
        slug: "forceshield-pro",
        description: "Forceshield Pro offers commercial-grade paint protection at an accessible price point. Ideal for daily drivers and fleet vehicles requiring reliable protection.",
        shortDescription: "Commercial-grade PPF solution",
        coverImage: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800",
        brand: "Forceshield",
        category: "Paint Protection Film",
        subcategory: "Standard PPF",
        features: ["5-year warranty", "Scratch resistance", "Easy installation", "Cost effective", "Fleet ready"],
        published: true,
        displayOrder: "1",
      },
      {
        name: "STEK WindShield Guard",
        slug: "stek-windshield-guard",
        description: "STEK WindShield Guard provides invisible protection for your windshield against rock chips, cracks, and road debris. Crystal clear clarity with ultimate protection.",
        shortDescription: "Windshield protection film",
        coverImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800",
        brand: "STEK",
        category: "Windshield Film",
        subcategory: "Clear",
        features: ["Impact resistance", "Anti-glare", "Easy to clean", "Optical clarity", "3-year warranty"],
        published: true,
        displayOrder: "1",
      },
      {
        name: "STEK Formula Coating",
        slug: "stek-formula-coating",
        description: "STEK Formula is a professional-grade ceramic coating that provides long-lasting protection and shine. The perfect complement to paint protection film.",
        shortDescription: "Professional ceramic coating",
        coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
        brand: "STEK Formula",
        category: "Car Care",
        subcategory: "Coatings",
        features: ["Hydrophobic", "UV protection", "Scratch resistance", "Chemical resistance", "2-year durability"],
        published: true,
        displayOrder: "1",
      },
    ];

    sampleProducts.forEach((product) => {
      const id = randomUUID();
      const now = new Date();
      this.products.set(id, {
        id,
        name: product.name,
        slug: product.slug,
        description: product.description,
        shortDescription: product.shortDescription || null,
        coverImage: product.coverImage || null,
        brand: product.brand,
        category: product.category,
        subcategory: product.subcategory || null,
        features: product.features || null,
        specifications: product.specifications || null,
        published: product.published ?? false,
        displayOrder: product.displayOrder || "0",
        createdAt: now,
        updatedAt: now,
      });
    });
  }

  async getProducts(publishedOnly = false): Promise<Product[]> {
    const products = Array.from(this.products.values());
    const filtered = publishedOnly ? products.filter((p) => p.published) : products;
    return filtered.sort((a, b) => {
      const orderA = parseInt(a.displayOrder || "0");
      const orderB = parseInt(b.displayOrder || "0");
      return orderA - orderB;
    });
  }

  async getProductsByBrand(brand: string, publishedOnly = false): Promise<Product[]> {
    const products = await this.getProducts(publishedOnly);
    return products.filter((p) => p.brand.toLowerCase() === brand.toLowerCase());
  }

  async getProductsByCategory(category: string, publishedOnly = false): Promise<Product[]> {
    const products = await this.getProducts(publishedOnly);
    return products.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }

  async getProductBySlug(slug: string): Promise<Product | undefined> {
    return Array.from(this.products.values()).find((p) => p.slug === slug);
  }

  async getProductById(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const now = new Date();
    const newProduct: Product = {
      id,
      name: product.name,
      slug: product.slug,
      description: product.description,
      shortDescription: product.shortDescription || null,
      coverImage: product.coverImage || null,
      brand: product.brand,
      category: product.category,
      subcategory: product.subcategory || null,
      features: product.features || null,
      specifications: product.specifications || null,
      published: product.published ?? false,
      displayOrder: product.displayOrder || "0",
      createdAt: now,
      updatedAt: now,
    };
    this.products.set(id, newProduct);
    return newProduct;
  }

  async updateProduct(id: string, product: Partial<InsertProduct>): Promise<Product | undefined> {
    const existing = this.products.get(id);
    if (!existing) return undefined;

    const updated: Product = {
      ...existing,
      ...product,
      id,
      updatedAt: new Date(),
    };
    this.products.set(id, updated);
    return updated;
  }

  async deleteProduct(id: string): Promise<boolean> {
    return this.products.delete(id);
  }

  private seedTrainingPrograms() {
    const samplePrograms: InsertTrainingProgram[] = [];

    samplePrograms.forEach((program) => {
      const id = randomUUID();
      this.trainingPrograms.set(id, {
        ...program,
        id,
        date: program.date || null,
        description: program.description || null,
        modules: program.modules || null,
        image: program.image || null,
        published: program.published ?? true,
        createdAt: new Date(),
      });
    });
  }

  async getTrainingPrograms(publishedOnly = false): Promise<TrainingProgram[]> {
    const programs = Array.from(this.trainingPrograms.values());
    const filtered = publishedOnly ? programs.filter((p) => p.published) : programs;
    return filtered.sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async createTrainingProgram(program: InsertTrainingProgram): Promise<TrainingProgram> {
    const id = randomUUID();
    const newProgram: TrainingProgram = {
      ...program,
      id,
      date: program.date || null,
      description: program.description || null,
      modules: program.modules || null,
      image: program.image || null,
      published: program.published ?? true,
      createdAt: new Date(),
    };
    this.trainingPrograms.set(id, newProgram);
    return newProgram;
  }

  async deleteTrainingProgram(id: string): Promise<boolean> {
    return this.trainingPrograms.delete(id);
  }
}

export const storage = new MemStorage();
