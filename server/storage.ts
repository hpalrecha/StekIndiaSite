import {
  type User,
  type InsertUser,
  type ContactSubmission,
  type InsertContact,
  type Installer,
  type InsertInstaller,
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
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, ContactSubmission>;
  private installers: Map<string, Installer>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.installers = new Map();
    
    this.seedInstallers();
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
}

export const storage = new MemStorage();
