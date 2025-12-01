import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertBlogPostSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
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

  app.get("/api/contact/submissions", async (req, res) => {
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

  app.get("/api/contacts", async (req, res) => {
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

  app.get("/api/blog/admin", async (req, res) => {
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

  app.post("/api/blog", async (req, res) => {
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

  app.patch("/api/blog/:id", async (req, res) => {
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

  app.delete("/api/blog/:id", async (req, res) => {
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

  return httpServer;
}
