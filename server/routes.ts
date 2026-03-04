import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import bcrypt from "bcryptjs";
import { storage } from "./storage";
import { insertContactSchema, insertBlogPostSchema, insertProductSchema, insertTrainingProgramSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

const uploadsDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const upload = multer({
  storage: multer.diskStorage({
    destination: (_req, _file, cb) => {
      cb(null, uploadsDir);
    },
    filename: (_req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"));
    }
  },
});

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session?.isAdmin) {
    next();
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.use("/uploads", (req, res, next) => {
    res.setHeader("Cache-Control", "public, max-age=31536000");
    next();
  }, express.static(uploadsDir));

  app.post("/api/auth/login", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: "Username and password are required" });
    }

    const user = await storage.getUserByUsername(username);
    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    req.session.isAdmin = true;
    return res.json({ success: true, message: "Login successful" });
  });

  app.post("/api/auth/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to logout" });
      }
      res.json({ success: true, message: "Logged out successfully" });
    });
  });

  app.get("/api/auth/check", (req, res) => {
    res.json({ isAuthenticated: !!req.session?.isAdmin });
  });

  app.post("/api/upload", requireAuth, upload.single("image"), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    const imageUrl = `/uploads/${req.file.filename}`;
    return res.json({ url: imageUrl });
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const result = insertContactSchema.safeParse(req.body);

      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({
          error: "Validation failed",
          details: validationError.message
        });
      }

      const submission = await storage.createContactSubmission(result.data);

      console.log("New contact submission:", submission);

      return res.status(201).json({
        success: true,
        message: "Contact submission received",
        id: submission.id
      });
    } catch (error) {
      console.error("Error processing contact submission:", error);
      return res.status(500).json({
        error: "Failed to process contact submission"
      });
    }
  });

  app.get("/api/installers", async (req, res) => {
    try {
      const { state } = req.query;

      let installers;
      if (state && typeof state === "string") {
        installers = await storage.getInstallersByState(state);
      } else {
        installers = await storage.getInstallers();
      }

      return res.json(installers);
    } catch (error) {
      console.error("Error fetching installers:", error);
      return res.status(500).json({
        error: "Failed to fetch installers"
      });
    }
  });

  app.get("/api/contact/submissions", requireAuth, async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      return res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      return res.status(500).json({
        error: "Failed to fetch contact submissions"
      });
    }
  });

  app.get("/api/contacts", requireAuth, async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      return res.json(submissions);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      return res.status(500).json({
        error: "Failed to fetch contacts"
      });
    }
  });

  app.get("/api/blog/admin", requireAuth, async (req, res) => {
    try {
      const posts = await storage.getBlogPosts(false);
      return res.json(posts);
    } catch (error) {
      console.error("Error fetching all blog posts:", error);
      return res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog", async (req, res) => {
    try {
      const { all } = req.query;
      const publishedOnly = all !== "true";
      const posts = await storage.getBlogPosts(publishedOnly);
      return res.json(posts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      return res.json(post);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      return res.status(500).json({ error: "Failed to fetch blog post" });
    }
  });

  app.post("/api/blog", requireAuth, async (req, res) => {
    try {
      const result = insertBlogPostSchema.safeParse(req.body);

      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({
          error: "Validation failed",
          details: validationError.message
        });
      }

      const existingPost = await storage.getBlogPostBySlug(result.data.slug);
      if (existingPost) {
        return res.status(400).json({ error: "A post with this slug already exists" });
      }

      const post = await storage.createBlogPost(result.data);
      return res.status(201).json(post);
    } catch (error) {
      console.error("Error creating blog post:", error);
      return res.status(500).json({ error: "Failed to create blog post" });
    }
  });

  app.patch("/api/blog/:id", requireAuth, async (req, res) => {
    try {
      const existingPost = await storage.getBlogPostById(req.params.id);
      if (!existingPost) {
        return res.status(404).json({ error: "Post not found" });
      }

      if (req.body.slug && req.body.slug !== existingPost.slug) {
        const slugPost = await storage.getBlogPostBySlug(req.body.slug);
        if (slugPost) {
          return res.status(400).json({ error: "A post with this slug already exists" });
        }
      }

      const post = await storage.updateBlogPost(req.params.id, req.body);
      return res.json(post);
    } catch (error) {
      console.error("Error updating blog post:", error);
      return res.status(500).json({ error: "Failed to update blog post" });
    }
  });

  app.delete("/api/blog/:id", requireAuth, async (req, res) => {
    try {
      const deleted = await storage.deleteBlogPost(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: "Post not found" });
      }
      return res.json({ success: true });
    } catch (error) {
      console.error("Error deleting blog post:", error);
      return res.status(500).json({ error: "Failed to delete blog post" });
    }
  });

  // Product routes
  app.get("/api/products", async (req, res) => {
    try {
      const products = await storage.getProducts(true);
      return res.json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({ error: "Failed to fetch products" });
    }
  });

  app.get("/api/products/admin", requireAuth, async (req, res) => {
    try {
      const products = await storage.getProducts(false);
      return res.json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({ error: "Failed to fetch products" });
    }
  });

  app.get("/api/products/brand/:brand", async (req, res) => {
    try {
      const products = await storage.getProductsByBrand(req.params.brand, true);
      return res.json(products);
    } catch (error) {
      console.error("Error fetching products by brand:", error);
      return res.status(500).json({ error: "Failed to fetch products" });
    }
  });

  app.get("/api/products/category/:category", async (req, res) => {
    try {
      const products = await storage.getProductsByCategory(req.params.category, true);
      return res.json(products);
    } catch (error) {
      console.error("Error fetching products by category:", error);
      return res.status(500).json({ error: "Failed to fetch products" });
    }
  });

  app.get("/api/products/:slug", async (req, res) => {
    try {
      const product = await storage.getProductBySlug(req.params.slug);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      return res.json(product);
    } catch (error) {
      console.error("Error fetching product:", error);
      return res.status(500).json({ error: "Failed to fetch product" });
    }
  });

  app.post("/api/products", requireAuth, async (req, res) => {
    try {
      const result = insertProductSchema.safeParse(req.body);

      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({
          error: "Validation failed",
          details: validationError.message
        });
      }

      const product = await storage.createProduct(result.data);
      return res.status(201).json(product);
    } catch (error) {
      console.error("Error creating product:", error);
      return res.status(500).json({ error: "Failed to create product" });
    }
  });

  app.patch("/api/products/:id", requireAuth, async (req, res) => {
    try {
      const existing = await storage.getProductById(req.params.id);
      if (!existing) {
        return res.status(404).json({ error: "Product not found" });
      }

      const product = await storage.updateProduct(req.params.id, req.body);
      return res.json(product);
    } catch (error) {
      console.error("Error updating product:", error);
      return res.status(500).json({ error: "Failed to update product" });
    }
  });

  app.delete("/api/products/:id", requireAuth, async (req, res) => {
    try {
      const deleted = await storage.deleteProduct(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: "Product not found" });
      }
      return res.json({ success: true });
    } catch (error) {
      console.error("Error deleting product:", error);
      return res.status(500).json({ error: "Failed to delete product" });
    }
  });



  // Training Program routes
  app.get("/api/training-programs", async (req, res) => {
    try {
      const programs = await storage.getTrainingPrograms(true);
      return res.json(programs);
    } catch (error) {
      console.error("Error fetching training programs:", error);
      return res.status(500).json({ error: "Failed to fetch training programs" });
    }
  });

  app.get("/api/training-programs/admin", requireAuth, async (req, res) => {
    try {
      const programs = await storage.getTrainingPrograms(false);
      return res.json(programs);
    } catch (error) {
      console.error("Error fetching training programs for admin:", error);
      return res.status(500).json({ error: "Failed to fetch training programs" });
    }
  });

  app.post("/api/training-programs", requireAuth, async (req, res) => {
    try {
      const result = insertTrainingProgramSchema.safeParse(req.body);

      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({
          error: "Validation failed",
          details: validationError.message
        });
      }

      const program = await storage.createTrainingProgram(result.data);
      return res.status(201).json(program);
    } catch (error) {
      console.error("Error creating training program:", error);
      return res.status(500).json({ error: "Failed to create training program" });
    }
  });

  app.delete("/api/training-programs/:id", requireAuth, async (req, res) => {
    try {
      const deleted = await storage.deleteTrainingProgram(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: "Training program not found" });
      }
      return res.json({ success: true });
    } catch (error) {
      console.error("Error deleting training program:", error);
      return res.status(500).json({ error: "Failed to delete training program" });
    }
  });

  return httpServer;
}
