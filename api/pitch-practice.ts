import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { pitchPracticeRequestSchema, type PitchPracticeMessage } from "./schemas";

// Initialize AI model with error handling
let model: any = null;
try {
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');
  model = genAI.getGenerativeModel({ model: "gemini-pro" });
} catch (error) {
  console.error("Failed to initialize AI model:", error);
}

async function generateInvestorResponse(
  userMessage: string,
  conversationHistory: PitchPracticeMessage[] = []
): Promise<string> {
  if (!model) {
    throw new Error("AI model not initialized properly");
  }

  if (!process.env.GOOGLE_API_KEY) {
    throw new Error("GOOGLE_API_KEY environment variable is not set");
  }

  // Limit history to reduce memory usage
  const limitedHistory = conversationHistory.slice(-3);
  
  try {
    const prompt = `You are a venture capital investor evaluating startups. Be direct and professional. Focus on market opportunity, business model, team, and traction.

Previous conversation:
${limitedHistory.map(msg => `${msg.role === 'user' ? 'Startup' : 'Investor'}: ${msg.content}`).join('\n')}

Startup: ${userMessage}

Investor:`;

    const result = await model.generateContent(prompt);
    const text = await result.response.text();

    if (!text) {
      throw new Error("Empty response from AI model");
    }

    return text.trim();
  } catch (error: any) {
    console.error("AI generation error:", error);
    throw new Error(
      error.message || "Failed to generate response"
    );
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
    });
  }

  try {
    const validated = pitchPracticeRequestSchema.parse(req.body);
    
    const response = await generateInvestorResponse(
      validated.message,
      validated.conversationHistory
    );

    return res.status(200).json({ 
      success: true, 
      response 
    });
  } catch (error: any) {
    console.error("Request handling error:", error);
    
    if (error.name === 'ZodError') {
      return res.status(400).json({ 
        success: false, 
        error: "Invalid request format" 
      });
    }
    
    return res.status(500).json({ 
      success: false, 
      error: error.message || "Internal server error" 
    });
  }
}