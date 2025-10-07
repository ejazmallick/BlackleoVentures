import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "@/pages/home";
import About from "@/pages/about";
import Tools from "@/pages/tools";
import Theme from "@/pages/theme";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/tools" component={Tools} />
      <Route path="/theme" component={Theme} />
      <Route component={NotFound} />
    </Switch>
  );
}

type ColorTheme = "yellow" | "violet" | "red";

function ColorThemeLoader() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("color-theme") as ColorTheme;
    if (savedTheme) {
      const root = document.documentElement;
      
      switch (savedTheme) {
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
    }
  }, []);

  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="blackleo-theme">
        <TooltipProvider>
          <ColorThemeLoader />
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
