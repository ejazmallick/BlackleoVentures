import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  pitchPracticeRequestSchema, 
  equityCalculationRequestSchema 
} from "@shared/schema";
import { generateInvestorResponse, calculateEquityDilution } from "./gemini";

export async function registerRoutes(app: Express): Promise<Server> {
  // Pitch Practice AI endpoint
  app.post("/api/pitch-practice", async (req, res) => {
    try {
      const validated = pitchPracticeRequestSchema.parse(req.body);
      
      const investorResponse = await generateInvestorResponse(
        validated.message,
        validated.conversationHistory
      );

      res.json({ 
        success: true, 
        response: investorResponse 
      });
    } catch (error: any) {
      console.error("Pitch practice error:", error);
      
      // Differentiate between validation and server errors
      if (error.name === 'ZodError') {
        res.status(400).json({ 
          success: false, 
          error: "Invalid request format" 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          error: error.message || "Failed to generate investor response. Please try again." 
        });
      }
    }
  });

  // Equity Dilution Calculator endpoint
  app.post("/api/equity-calculator", async (req, res) => {
    try {
      const validated = equityCalculationRequestSchema.parse(req.body);
      
      const result = calculateEquityDilution(
        validated.currentOwnership,
        validated.fundraisingAmount,
        validated.preMoneyValuation
      );

      res.json({ 
        success: true, 
        result 
      });
    } catch (error: any) {
      console.error("Equity calculation error:", error);
      
      // Differentiate between validation and calculation errors
      if (error.name === 'ZodError') {
        res.status(400).json({ 
          success: false, 
          error: "Please enter valid numbers for all fields" 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          error: error.message || "Failed to calculate equity dilution. Please try again." 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
