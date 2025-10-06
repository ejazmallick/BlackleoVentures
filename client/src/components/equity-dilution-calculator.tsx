import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingDown } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { EquityCalculationResult } from "@shared/schema";

export function EquityDilutionCalculator() {
  const [currentOwnership, setCurrentOwnership] = useState<string>("100");
  const [fundraisingAmount, setFundraisingAmount] = useState<string>("");
  const [preMoneyValuation, setPreMoneyValuation] = useState<string>("");
  const [result, setResult] = useState<EquityCalculationResult | null>(null);
  const { toast } = useToast();

  const calculateMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", "/api/equity-calculator", {
        currentOwnership: parseFloat(currentOwnership),
        fundraisingAmount: parseFloat(fundraisingAmount),
        preMoneyValuation: parseFloat(preMoneyValuation),
      });
      
      // Check response.ok BEFORE parsing JSON
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Failed to calculate equity dilution" })) as { error?: string };
        throw new Error(errorData.error || "Failed to calculate equity dilution");
      }
      
      const data = await response.json() as { success: boolean; result: EquityCalculationResult };
      return data;
    },
    onSuccess: (data) => {
      setResult(data.result);
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Calculation Error",
        description: error.message || "Failed to calculate equity dilution. Please check your inputs.",
      });
    },
  });

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentOwnership && fundraisingAmount && preMoneyValuation) {
      calculateMutation.mutate();
    }
  };

  const formatCurrency = (value: number, showDecimals: boolean = false) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: showDecimals ? 2 : 0,
      maximumFractionDigits: showDecimals ? 2 : 0,
    }).format(value);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-primary">Equity Dilution & Cap Table Simulator</CardTitle>
        <CardDescription>
          Calculate how your ownership changes after fundraising rounds
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleCalculate} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-ownership">Current Ownership (%)</Label>
            <Input
              id="current-ownership"
              type="number"
              min="0"
              max="100"
              step="0.01"
              value={currentOwnership}
              onChange={(e) => setCurrentOwnership(e.target.value)}
              placeholder="100"
              data-testid="input-current-ownership"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fundraising-amount">Fundraising Amount (₹)</Label>
            <Input
              id="fundraising-amount"
              type="number"
              min="0"
              step="100000"
              value={fundraisingAmount}
              onChange={(e) => setFundraisingAmount(e.target.value)}
              placeholder="5000000"
              data-testid="input-fundraising-amount"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="pre-money-valuation">Pre-Money Valuation (₹)</Label>
            <Input
              id="pre-money-valuation"
              type="number"
              min="0"
              step="100000"
              value={preMoneyValuation}
              onChange={(e) => setPreMoneyValuation(e.target.value)}
              placeholder="20000000"
              data-testid="input-pre-money-valuation"
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={!currentOwnership || !fundraisingAmount || !preMoneyValuation || calculateMutation.isPending}
            data-testid="button-calculate-equity"
          >
            <Calculator className="mr-2 h-4 w-4" />
            Calculate Dilution
          </Button>
        </form>

        {result && (
          <div className="space-y-4 pt-4 border-t">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-primary" />
              Results
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Pre-Money Valuation</p>
                <p className="text-lg font-semibold" data-testid="text-pre-money">
                  {formatCurrency(result.preMoneyValuation)}
                </p>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Post-Money Valuation</p>
                <p className="text-lg font-semibold" data-testid="text-post-money">
                  {formatCurrency(result.postMoneyValuation)}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Your Ownership (After)</p>
                <p className="text-lg font-semibold text-primary" data-testid="text-founder-ownership">
                  {result.founderOwnershipAfter}%
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Investor Ownership</p>
                <p className="text-lg font-semibold" data-testid="text-investor-ownership">
                  {result.newInvestorOwnership}%
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Dilution</p>
                <p className="text-lg font-semibold text-red-500" data-testid="text-dilution">
                  -{result.dilutionPercentage}%
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Share Price</p>
                <p className="text-lg font-semibold" data-testid="text-share-price">
                  {formatCurrency(result.sharePrice, true)}
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
