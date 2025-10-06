import { GoogleGenAI } from "@google/genai";
import type { PitchPracticeMessage } from "@shared/schema";

// Using GOOGLE_API_KEY from environment
const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY || "" });

export async function generateInvestorResponse(
  userMessage: string,
  conversationHistory: PitchPracticeMessage[] = []
): Promise<string> {
  try {
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
      model: "gemini-2.0-flash-exp",
      contents: contents,
    });

    return response.text || "I'm listening. What else can you tell me about your startup?";
  } catch (error) {
    console.error("Gemini API error:", error);
    throw new Error(`Failed to generate investor response: ${error}`);
  }
}

export function calculateEquityDilution(
  currentOwnership: number,
  fundraisingAmount: number,
  preMoneyValuation: number
) {
  const postMoneyValuation = preMoneyValuation + fundraisingAmount;
  const newInvestorOwnership = (fundraisingAmount / postMoneyValuation) * 100;
  const founderOwnershipAfter = currentOwnership * (1 - newInvestorOwnership / 100);
  const dilutionPercentage = currentOwnership - founderOwnershipAfter;
  
  // Calculate implied share price (assuming 10M shares outstanding for simplicity)
  const totalShares = 10000000;
  const sharePrice = preMoneyValuation / totalShares;

  return {
    preMoneyValuation,
    postMoneyValuation,
    newInvestorOwnership: parseFloat(newInvestorOwnership.toFixed(2)),
    founderOwnershipAfter: parseFloat(founderOwnershipAfter.toFixed(2)),
    fundraisingAmount,
    sharePrice: parseFloat(sharePrice.toFixed(4)),
    dilutionPercentage: parseFloat(dilutionPercentage.toFixed(2)),
  };
}
