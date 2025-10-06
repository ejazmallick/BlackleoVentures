import { z } from "zod";

// Pitch Practice AI schemas
export const pitchPracticeMessageSchema = z.object({
  role: z.enum(['user', 'assistant']),
  content: z.string(),
});

export const pitchPracticeRequestSchema = z.object({
  message: z.string().min(1, "Message cannot be empty"),
  conversationHistory: z.array(pitchPracticeMessageSchema).optional().default([]),
});

export type PitchPracticeMessage = z.infer<typeof pitchPracticeMessageSchema>;
export type PitchPracticeRequest = z.infer<typeof pitchPracticeRequestSchema>;

// Equity Dilution Calculator schemas
export const equityCalculationRequestSchema = z.object({
  currentOwnership: z.number().min(0).max(100),
  fundraisingAmount: z.number().min(0),
  preMoneyValuation: z.number().min(0),
});

export const equityCalculationResultSchema = z.object({
  preMoneyValuation: z.number(),
  postMoneyValuation: z.number(),
  newInvestorOwnership: z.number(),
  founderOwnershipAfter: z.number(),
  fundraisingAmount: z.number(),
  sharePrice: z.number(),
  dilutionPercentage: z.number(),
});

export type EquityCalculationRequest = z.infer<typeof equityCalculationRequestSchema>;
export type EquityCalculationResult = z.infer<typeof equityCalculationResultSchema>;
