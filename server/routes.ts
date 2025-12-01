import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
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

  return httpServer;
}
