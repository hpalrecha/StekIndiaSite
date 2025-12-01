import {
  type User,
  type InsertUser,
  type ContactSubmission,
  type InsertContact,
  type Installer,
  type InsertInstaller,
  type BlogPost,
  type InsertBlogPost,
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
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, ContactSubmission>;
  private installers: Map<string, Installer>;
  private blogPosts: Map<string, BlogPost>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.installers = new Map();
    this.blogPosts = new Map();
    
    this.seedInstallers();
    this.seedBlogPosts();
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
      this.installers.set(id, { ...installer, id });
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
        ...post, 
        id,
        coverImage: post.coverImage || null,
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
      ...contact,
      id,
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
    const newInstaller: Installer = { ...installer, id };
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
      ...post,
      id,
      coverImage: post.coverImage || null,
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
}

export const storage = new MemStorage();
