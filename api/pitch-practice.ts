import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from "@google/genai";
import { pitchPracticeRequestSchema, type PitchPracticeMessage } from "./schemas";

async function generateInvestorResponse(
  userMessage: string,
  conversationHistory: PitchPracticeMessage[] = []
): Promise<string> {
  if (!process.env.GOOGLE_API_KEY) {
    throw new Error("GOOGLE_API_KEY environment variable is not set");
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });
    
    const systemPrompt = `You are a seasoned venture capital investor with 15+ years of experience evaluating startups. 
You are direct, analytical, and ask tough but fair questions. You focus on:
- Market size and opportunity
- Business model viability and unit economics
- Competitive advantages and moats
- Team capabilities and execution track record
- Traction, metrics, and growth potential
- Capital efficiency and burn rate

You speak like a real investor - professional but conversational. You challenge assumptions, 
probe for weaknesses, and ask for specific numbers and evidence. You're skeptical but open-minded.
When you see potential, you encourage it. When you see red flags, you point them out directly.

Keep responses concise (2-4 sentences) and always end with a specific follow-up question.`;

    // Build conversation history for context
    const contents = [
      { role: "user", parts: [{ text: systemPrompt }] },
      ...conversationHistory.map(msg => ({
        role: msg.role === 'user' ? 'user' as const : 'model' as const,
        parts: [{ text: msg.content }]
      })),
      { role: "user", parts: [{ text: userMessage }] }
    ];

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: contents,
    });

    // Extract text from response - response.text is a property, not a method
    const text = response.text;
    
    if (!text || typeof text !== 'string') {
      console.error("Invalid response from Gemini:", response);
      return "I'm listening. What else can you tell me about your startup?";
    }

    return text;
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