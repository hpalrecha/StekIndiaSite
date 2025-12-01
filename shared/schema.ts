import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table (keep for potential future use)
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact form submissions
export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

// Installers data
export const installers = pgTable("installers", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  address: text("address").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  phone: text("phone"),
  email: text("email"),
  website: text("website"),
  certificationLevel: text("certification_level"),
});

export const insertInstallerSchema = createInsertSchema(installers).omit({
  id: true,
});

export type InsertInstaller = z.infer<typeof insertInstallerSchema>;
export type Installer = typeof installers.$inferSelect;

// Product categories
export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  subcategories?: ProductSubcategory[];
}

export interface ProductSubcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  features: string[];
}

// Solutions
export interface Solution {
  id: string;
  name: string;
  slug: string;
  tagline?: string;
  description: string;
  heroImage: string;
  benefits: string[];
  offerings?: { name: string; description: string }[];
  products?: { name: string; description: string }[];
  ctaText: string;
}

// Navigation
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}
