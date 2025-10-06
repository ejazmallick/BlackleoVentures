import type { VercelRequest, VercelResponse } from '@vercel/node';
import { equityCalculationRequestSchema } from "../shared/schema";

function calculateEquityDilution(
  currentOwnership: number,
  fundraisingAmount: number,
  preMoneyValuation: number
) {
  const postMoneyValuation = preMoneyValuation + fundraisingAmount;
  const newInvestorOwnership = (fundraisingAmount / postMoneyValuation) * 100;
  const founderOwnershipAfter = currentOwnership * (1 - newInvestorOwnership / 100);
  const dilutionPercentage = currentOwnership - founderOwnershipAfter;
  
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const validated = equityCalculationRequestSchema.parse(req.body);
    
    const result = calculateEquityDilution(
      validated.currentOwnership,
      validated.fundraisingAmount,
      validated.preMoneyValuation
    );

    return res.status(200).json({ 
      success: true, 
      result 
    });
  } catch (error: any) {
    console.error("Equity calculation error:", error);
    
    if (error.name === 'ZodError') {
      return res.status(400).json({ 
        success: false, 
        error: "Please enter valid numbers for all fields" 
      });
    }
    
    return res.status(500).json({ 
      success: false, 
      error: error.message || "Failed to calculate equity dilution. Please try again." 
    });
  }
}
