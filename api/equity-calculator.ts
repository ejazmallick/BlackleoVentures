import type { VercelRequest, VercelResponse } from '@vercel/node';
import { equityCalculationRequestSchema } from "./schemas";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed'
    });
  }

  try {
    // Parse request body
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    // Validate input
    const { currentOwnership, fundraisingAmount, preMoneyValuation } = equityCalculationRequestSchema.parse(body);

    // Basic validation
    if (preMoneyValuation <= 0) {
      return res.status(400).json({
        success: false,
        error: "Pre-money valuation must be greater than 0"
      });
    }

    if (currentOwnership <= 0 || currentOwnership > 100) {
      return res.status(400).json({
        success: false,
        error: "Current ownership must be between 0 and 100"
      });
    }

    if (fundraisingAmount <= 0) {
      return res.status(400).json({
        success: false,
        error: "Fundraising amount must be greater than 0"
      });
    }

    // Safe calculations
    const postMoneyValuation = Number(preMoneyValuation) + Number(fundraisingAmount);
    const newInvestorOwnership = (Number(fundraisingAmount) / postMoneyValuation) * 100;
    const founderOwnershipAfter = Number(currentOwnership) * (1 - newInvestorOwnership / 100);
    const dilutionPercentage = Number(currentOwnership) - founderOwnershipAfter;
    const sharePrice = preMoneyValuation / 10000000; // 10M shares base

    // Return calculated results
    return res.status(200).json({
      success: true,
      result: {
        preMoneyValuation: Number(preMoneyValuation.toFixed(2)),
        postMoneyValuation: Number(postMoneyValuation.toFixed(2)),
        newInvestorOwnership: Number(newInvestorOwnership.toFixed(2)),
        founderOwnershipAfter: Number(founderOwnershipAfter.toFixed(2)),
        fundraisingAmount: Number(fundraisingAmount.toFixed(2)),
        sharePrice: Number(sharePrice.toFixed(4)),
        dilutionPercentage: Number(dilutionPercentage.toFixed(2))
      }
    });
  } catch (error: any) {
    console.error("Equity calculation error:", error);

    // Handle specific error types
    if (error.name === 'SyntaxError') {
      return res.status(400).json({
        success: false,
        error: "Invalid JSON format"
      });
    }

    if (error.name === 'ZodError') {
      return res.status(400).json({
        success: false,
        error: "Invalid input: currentOwnership (0-100), fundraisingAmount (>0), preMoneyValuation (>0)"
      });
    }

    // Generic error response
    return res.status(500).json({
      success: false,
      error: "Failed to calculate equity dilution"
    });
  }
}
