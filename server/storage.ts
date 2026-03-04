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
  users,
  contactSubmissions,
  installers,
  blogPosts,
  products,
  trainingPrograms,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and, ilike } from "drizzle-orm";

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

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createContactSubmission(contact: InsertContact): Promise<ContactSubmission> {
    const [submission] = await db.insert(contactSubmissions).values(contact).returning();
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt));
  }

  async getInstallers(): Promise<Installer[]> {
    return db.select().from(installers);
  }

  async getInstallersByState(state: string): Promise<Installer[]> {
    return db.select().from(installers).where(ilike(installers.state, state));
  }

  async createInstaller(installer: InsertInstaller): Promise<Installer> {
    const [newInstaller] = await db.insert(installers).values(installer).returning();
    return newInstaller;
  }

  async getBlogPosts(publishedOnly = false): Promise<BlogPost[]> {
    if (publishedOnly) {
      return db.select().from(blogPosts).where(eq(blogPosts.published, true)).orderBy(desc(blogPosts.createdAt));
    }
    return db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt));
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return post;
  }

  async getBlogPostById(id: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return post;
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const [newPost] = await db.insert(blogPosts).values(post).returning();
    return newPost;
  }

  async updateBlogPost(id: string, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const [updated] = await db
      .update(blogPosts)
      .set({ ...post, updatedAt: new Date() })
      .where(eq(blogPosts.id, id))
      .returning();
    return updated;
  }

  async deleteBlogPost(id: string): Promise<boolean> {
    const result = await db.delete(blogPosts).where(eq(blogPosts.id, id)).returning();
    return result.length > 0;
  }

  async getProducts(publishedOnly = false): Promise<Product[]> {
    if (publishedOnly) {
      return db.select().from(products).where(eq(products.published, true)).orderBy(products.displayOrder);
    }
    return db.select().from(products).orderBy(products.displayOrder);
  }

  async getProductsByBrand(brand: string, publishedOnly = false): Promise<Product[]> {
    if (publishedOnly) {
      return db.select().from(products).where(and(ilike(products.brand, brand), eq(products.published, true))).orderBy(products.displayOrder);
    }
    return db.select().from(products).where(ilike(products.brand, brand)).orderBy(products.displayOrder);
  }

  async getProductsByCategory(category: string, publishedOnly = false): Promise<Product[]> {
    if (publishedOnly) {
      return db.select().from(products).where(and(ilike(products.category, category), eq(products.published, true))).orderBy(products.displayOrder);
    }
    return db.select().from(products).where(ilike(products.category, category)).orderBy(products.displayOrder);
  }

  async getProductBySlug(slug: string): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.slug, slug));
    return product;
  }

  async getProductById(id: string): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.id, id));
    return product;
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const [newProduct] = await db.insert(products).values(product).returning();
    return newProduct;
  }

  async updateProduct(id: string, product: Partial<InsertProduct>): Promise<Product | undefined> {
    const [updated] = await db
      .update(products)
      .set({ ...product, updatedAt: new Date() })
      .where(eq(products.id, id))
      .returning();
    return updated;
  }

  async deleteProduct(id: string): Promise<boolean> {
    const result = await db.delete(products).where(eq(products.id, id)).returning();
    return result.length > 0;
  }

  async getTrainingPrograms(publishedOnly = false): Promise<TrainingProgram[]> {
    if (publishedOnly) {
      return db.select().from(trainingPrograms).where(eq(trainingPrograms.published, true)).orderBy(desc(trainingPrograms.createdAt));
    }
    return db.select().from(trainingPrograms).orderBy(desc(trainingPrograms.createdAt));
  }

  async createTrainingProgram(program: InsertTrainingProgram): Promise<TrainingProgram> {
    const [newProgram] = await db.insert(trainingPrograms).values(program).returning();
    return newProgram;
  }

  async deleteTrainingProgram(id: string): Promise<boolean> {
    const result = await db.delete(trainingPrograms).where(eq(trainingPrograms.id, id)).returning();
    return result.length > 0;
  }
}

export const storage = new DatabaseStorage();
