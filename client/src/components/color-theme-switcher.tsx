import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Card } from "@/components/ui/card";

type ColorTheme = "yellow" | "violet" | "red";

export function ColorThemeSwitcher() {
  const [visible, setVisible] = useState(true);
  const [currentTheme, setCurrentTheme] = useState<ColorTheme>("yellow");
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("color-theme") as ColorTheme;
    if (savedTheme) {
      setCurrentTheme(savedTheme);
      applyTheme(savedTheme);
    }
    
    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 5000);

    return () => clearTimeout(introTimer);
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
    <>
      {visible && (
        <div className="fixed left-4 bottom-28 z-40">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="default"
                className="h-14 w-14 rounded-full shadow-xl hover-elevate border-2 border-background"
                data-testid="button-color-theme-toggle"
              >
                <Eye className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader>
                <SheetTitle>Color Theme</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                <p className="text-sm text-muted-foreground">
                  Choose a color theme for the website
                </p>
                {themes.map((theme) => (
                  <Card
                    key={theme.name}
                    className={`p-4 cursor-pointer transition-all hover-elevate ${
                      currentTheme === theme.name
                        ? "border-2 border-primary"
                        : "border"
                    }`}
                    onClick={() => applyTheme(theme.name)}
                    data-testid={`card-theme-${theme.name}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full ${theme.color} border-2 border-border`} />
                      <div className="flex-1">
                        <div className="font-medium">{theme.label}</div>
                        {currentTheme === theme.name && (
                          <div className="text-xs text-primary font-medium">Active</div>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      )}
      
      <div className="fixed left-0 bottom-6 z-50 opacity-0 hover:opacity-100 focus-within:opacity-100 active:opacity-100 transition-all duration-300 group">
        <button
          onClick={() => setVisible(!visible)}
          className="bg-primary text-primary-foreground px-3 py-5 rounded-r-lg shadow-xl hover-elevate flex items-center gap-2 focus-visible:opacity-100"
          data-testid="button-toggle-color-switcher"
          aria-label="Toggle color theme selector"
        >
          {visible ? <EyeOff className="h-6 w-6" /> : <Eye className="h-6 w-6" />}
          <span className="text-sm font-semibold whitespace-nowrap pr-2">
            {visible ? "Hide" : "Colors"}
          </span>
        </button>
      </div>
    </>
  );
}
