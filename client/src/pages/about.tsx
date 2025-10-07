import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, ArrowLeft, Linkedin, Download } from "lucide-react";
import logoUrl from "@assets/logo blackleo_1759773901852.png";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2" data-testid="link-home-logo">
              <img src={logoUrl} alt="Black Leo Ventures" className="h-16 w-auto" data-testid="img-logo" />
            </a>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                asChild
                data-testid="button-back-home"
              >
                <a href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </a>
              </Button>
              <Button
                asChild
                size="sm"
                data-testid="button-company-profile"
              >
                <a 
                  href="https://drive.google.com/file/d/1sU4-aKaIxF-ZB-IjXw9h4cwf8QEnB4q2/view" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Company Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold" data-testid="text-about-headline">
              About <span className="text-primary">Black Leo Ventures</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Your startup growth partner - From building your MVP to making you investor-ready; we prepare your startup for growth and provide direct access to vetted capital.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl">Our Mission</CardTitle>
                <CardDescription className="text-base pt-4">
                  To empower Indian startups with the resources, guidance, and capital they need to transform innovative ideas into successful, scalable businesses. We bridge the gap between ambitious founders and the right investors.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl">Our Vision</CardTitle>
                <CardDescription className="text-base pt-4">
                  To become India's most trusted startup funding partner, creating a thriving ecosystem where founders receive comprehensive support from MVP development to Series A funding and beyond.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <p className="text-xl text-muted-foreground">
              A passionate team, dedicated to your success.
            </p>
            <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-leadership-headline">
              MEET OUR TEAM
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Founder and Advisor */}
            <Card className="hover-elevate" data-testid="card-director-1">
              <CardHeader className="text-center space-y-6">
                <div className="mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-4 border-primary/20 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">NA</span>
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-2xl">Nirdosh Arora</CardTitle>
                  <CardDescription className="text-base font-medium text-primary">
                    Founder and Advisor
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            {/* Founder and CEO */}
            <Card className="hover-elevate" data-testid="card-director-2">
              <CardHeader className="text-center space-y-6">
                <div className="mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-4 border-primary/20 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">UC</span>
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-2xl">Utkarsh Chourasiya</CardTitle>
                  <CardDescription className="text-base font-medium text-primary">
                    Founder and CEO
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            {/* Investment and Valuation Director */}
            <Card className="hover-elevate" data-testid="card-director-3">
              <CardHeader className="text-center space-y-6">
                <div className="mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-4 border-primary/20 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">AN</span>
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-2xl">Abhishek Negi</CardTitle>
                  <CardDescription className="text-base font-medium text-primary">
                    Investment and Valuation Director
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            {/* Marketing Strategist */}
            <Card className="hover-elevate" data-testid="card-director-4">
              <CardHeader className="text-center space-y-6">
                <div className="mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-4 border-primary/20 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">CF</span>
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-2xl">Prof. Christian Farioli</CardTitle>
                  <CardDescription className="text-base font-medium text-primary">
                    Marketing Strategist
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            {/* Director - Financing */}
            <Card className="hover-elevate" data-testid="card-director-5">
              <CardHeader className="text-center space-y-6">
                <div className="mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-4 border-primary/20 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">SP</span>
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-2xl">Subramaniam Parameswaran</CardTitle>
                  <CardDescription className="text-base font-medium text-primary">
                    Director - Financing
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-company-info-headline">
              Company Information
            </h2>
            
            <div className="max-w-2xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Corporate Identification Number (CIN)</CardTitle>
                  <CardDescription className="text-base font-mono pt-2">
                    U85300MP2020PTC053751
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact</CardTitle>
                  <CardDescription className="text-base pt-2 space-y-2">
                    <div>Phone: <a href="tel:+917837059633" className="font-medium text-foreground hover:text-primary transition-colors">+91 78370 59633</a></div>
                    <div>Email: <a href="mailto:info@blackleoventures.com" className="font-medium text-foreground hover:text-primary transition-colors">info@blackleoventures.com</a></div>
                  </CardDescription>
                </CardHeader>
              </Card>

              <Button
                size="lg"
                asChild
                className="w-full max-w-md"
                data-testid="button-download-profile"
              >
                <a 
                  href="https://drive.google.com/file/d/1sU4-aKaIxF-ZB-IjXw9h4cwf8QEnB4q2/view" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Company Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
            <CardHeader className="space-y-6 p-12">
              <CardTitle className="text-3xl md:text-4xl">
                Ready to Take Your Startup to the Next Level?
              </CardTitle>
              <CardDescription className="text-lg">
                Let's discuss how Black Leo Ventures can help you secure funding and scale your business.
              </CardDescription>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  asChild
                  data-testid="button-contact-whatsapp"
                >
                  <a href="https://wa.me/917837059633?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Black%20Leo%20Ventures%20and%20how%20you%20can%20help%20my%20startup." target="_blank" rel="noopener noreferrer">
                    Contact Us
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  data-testid="button-schedule-meeting"
                >
                  <a href="https://zcal.co/blackleoventures/30min" target="_blank" rel="noopener noreferrer">
                    Schedule a Meeting
                  </a>
                </Button>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card border-t">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4">
            <img src={logoUrl} alt="Black Leo Ventures" className="h-20 w-auto mx-auto" data-testid="img-footer-logo" />
            <div className="flex items-center justify-center gap-6 text-sm">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="/theme" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-theme">Theme</a>
              <a href="https://www.linkedin.com/company/black-leo-ventures" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1" data-testid="link-footer-linkedin">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              © 2025 Black Leo Ventures. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
