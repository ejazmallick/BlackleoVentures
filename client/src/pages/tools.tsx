import { Button } from "@/components/ui/button";
import { PitchPracticeAI } from "@/components/pitch-practice-ai";
import { EquityDilutionCalculator } from "@/components/equity-dilution-calculator";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ThemeToggle } from "@/components/theme-toggle";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { ArrowLeft, Sparkles } from "lucide-react";
import logoUrl from "@assets/logo blackleo_1759773901852.png";
import { useLocation } from "wouter";
import { useEffect } from "react";

export default function Tools() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    document.title = "Startup AI Tools - Black Leo Ventures | Free Fundraising Tools";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Free AI-powered tools for Indian startups - Practice your pitch with AI investors and calculate equity dilution. Prepare for fundraising with Black Leo Ventures.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <FloatingWhatsApp />

      <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2" data-testid="link-tools-logo">
              <img src={logoUrl} alt="Black Leo Ventures" className="h-16 w-auto" data-testid="img-tools-logo" />
            </a>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                onClick={() => setLocation("/")}
                data-testid="button-back-home"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <ScrollReveal>
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center space-y-6 mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Free AI-Powered Tools</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold">
                Startup <span className="text-primary">AI Tools</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Prepare for your fundraising journey with our free AI-powered tools designed specifically for Indian startups
              </p>

              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Practice your pitch with an AI investor simulator and understand equity dilution before you enter fundraising conversations
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              <PitchPracticeAI />
              <EquityDilutionCalculator />
            </div>

            <div className="mt-16 text-center">
              <div className="inline-block p-8 bg-card border rounded-lg">
                <h3 className="text-2xl font-bold mb-3">Need Expert Guidance?</h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  While these tools help you prepare, our expert team provides personalized fundraising support
                </p>
                <Button
                  size="lg"
                  asChild
                  data-testid="button-contact-experts"
                >
                  <a href="/">
                    Explore Our Services
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <footer className="py-12 bg-card border-t">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img src={logoUrl} alt="Black Leo Ventures" className="h-8 w-auto" />
              <span className="text-sm text-muted-foreground">Your startup growth partner</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Black Leo Ventures. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
