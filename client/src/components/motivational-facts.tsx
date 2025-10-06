import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, TrendingUp, Lightbulb, Target } from "lucide-react";

const motivationalFacts = [
  {
    icon: TrendingUp,
    quote: "India is home to the 3rd largest startup ecosystem in the world with 100+ unicorns and counting.",
    author: "NASSCOM Report 2024",
    color: "text-primary"
  },
  {
    icon: Lightbulb,
    quote: "Indian startups raised $24 billion in funding in 2023, proving that great ideas find capital.",
    author: "Inc42 India Startup Funding Report",
    color: "text-primary"
  },
  {
    icon: Target,
    quote: "Over 60% of Indian unicorns achieved their status within 7 years of founding. Your time is now.",
    author: "Hurun India Future Unicorn Index",
    color: "text-primary"
  },
  {
    icon: Quote,
    quote: "The best time to build a startup is when you have a problem worth solving. The second best time is now.",
    author: "Wisdom for Indian Entrepreneurs",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    quote: "Indian B2B SaaS companies are growing at 30% CAGR, creating global impact from India.",
    author: "SaaSBoomi & McKinsey Report",
    color: "text-primary"
  },
  {
    icon: Lightbulb,
    quote: "Tier 2 and Tier 3 cities contribute 45% of India's startup growth. Innovation has no geography.",
    author: "Startup India Initiative",
    color: "text-primary"
  }
];

export function MotivationalFacts() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % motivationalFacts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = motivationalFacts[currentIndex];
  const Icon = current.icon;

  return (
    <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 overflow-hidden">
      <CardContent className="p-8 md:p-12">
        <div className="relative">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className={`w-7 h-7 ${current.color}`} />
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <div className="relative min-h-[120px]">
                {motivationalFacts.map((fact, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ${
                      index === currentIndex
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                    data-testid={`fact-${index}`}
                  >
                    <blockquote className="text-lg md:text-xl font-medium leading-relaxed">
                      "{fact.quote}"
                    </blockquote>
                    <footer className="mt-4 text-sm text-muted-foreground font-medium">
                      — {fact.author}
                    </footer>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 pt-4">
                {motivationalFacts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "w-1.5 bg-primary/30 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to fact ${index + 1}`}
                    data-testid={`button-fact-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
