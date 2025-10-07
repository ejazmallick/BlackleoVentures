import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Palette, Check } from "lucide-react";
import logoUrl from "@assets/logo blackleo_1759773901852.png";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";

type ColorTheme = "yellow" | "violet" | "red";

export default function Theme() {
  const [, setLocation] = useLocation();
  const [currentTheme, setCurrentTheme] = useState<ColorTheme>("yellow");

  useEffect(() => {
    document.title = "Theme Customization - Black Leo Ventures";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Customize your website experience with Black Leo Ventures color themes. Choose from Yellow, Violet, or Red accent colors.');
    }

    const savedTheme = localStorage.getItem("color-theme") as ColorTheme;
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const applyTheme = (theme: ColorTheme) => {
    const root = document.documentElement;
    
    switch (theme) {
      case "yellow":
        root.style.setProperty("--primary", "51 100% 50%");
        root.style.setProperty("--primary-foreground", "0 0% 10%");
        root.style.setProperty("--sidebar-primary", "51 100% 50%");
        root.style.setProperty("--sidebar-primary-foreground", "0 0% 10%");
        root.style.setProperty("--ring", "51 100% 50%");
        break;
      case "violet":
        root.style.setProperty("--primary", "271 76% 53%");
        root.style.setProperty("--primary-foreground", "0 0% 98%");
        root.style.setProperty("--sidebar-primary", "271 76% 53%");
        root.style.setProperty("--sidebar-primary-foreground", "0 0% 98%");
        root.style.setProperty("--ring", "271 76% 53%");
        break;
      case "red":
        root.style.setProperty("--primary", "16 100% 50%");
        root.style.setProperty("--primary-foreground", "0 0% 98%");
        root.style.setProperty("--sidebar-primary", "16 100% 50%");
        root.style.setProperty("--sidebar-primary-foreground", "0 0% 98%");
        root.style.setProperty("--ring", "16 100% 50%");
        break;
    }
    
    setCurrentTheme(theme);
    localStorage.setItem("color-theme", theme);
  };

  const themes: Array<{ name: ColorTheme; label: string; color: string }> = [
    { name: "yellow", label: "Yellow (Primary)", color: "bg-[#FFD700]" },
    { name: "violet", label: "Violet", color: "bg-[#8A2BE2]" },
    { name: "red", label: "Red", color: "bg-[#FF4500]" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2" data-testid="link-home-logo">
              <img src={logoUrl} alt="Black Leo Ventures" className="h-16 w-auto" data-testid="img-logo" />
            </a>
            <Button
              variant="ghost"
              onClick={() => setLocation("/")}
              data-testid="button-back-home"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </nav>

      {/* Theme Customization Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              <Palette className="w-4 h-4" />
              <span className="text-sm font-medium">Personalize Your Experience</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold">
              Theme <span className="text-primary">Customization</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Choose your preferred color theme to personalize your browsing experience
            </p>
          </div>

          <Card className="overflow-hidden">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl md:text-3xl">Select Your Color Theme</CardTitle>
              <CardDescription className="text-base mt-2">
                Pick from our curated color palettes to match your style
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pb-12">
              <p className="text-center text-muted-foreground mb-6">
                Select your preferred color theme below
              </p>
              <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {themes.map((theme) => (
                  <Card
                    key={theme.name}
                    className={`p-6 cursor-pointer transition-all hover-elevate ${
                      currentTheme === theme.name
                        ? "border-2 border-primary ring-2 ring-primary/20"
                        : "border"
                    }`}
                    onClick={() => applyTheme(theme.name)}
                    data-testid={`card-theme-${theme.name}`}
                  >
                    <div className="flex flex-col items-center gap-3 text-center">
                      <div className={`w-16 h-16 rounded-full ${theme.color} border-2 border-border shadow-lg`} />
                      <div className="font-semibold">{theme.label}</div>
                      {currentTheme === theme.name && (
                        <div className="flex items-center gap-1 text-xs text-primary font-medium">
                          <Check className="w-3 h-3" />
                          Active
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Your theme preference will be saved and applied across all pages
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
