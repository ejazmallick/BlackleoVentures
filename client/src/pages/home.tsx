import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  AlertCircle,
  TrendingDown,
  FileX,
  Clock,
  Shield,
  Users,
  Target,
  Headphones,
  Briefcase,
  IndianRupee,
  Building,
  Award,
  FileCheck,
  GitMerge,
  FileText,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Calendar,
  ChevronRight,
  Menu,
  X,
  Phone,
  Mail,
  MessageCircle,
  Download,
  Info,
} from "lucide-react";
import logoUrl from "@assets/backleo_1759611500843.png";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Black Leo Ventures",
      "description": "Your startup growth partner - From building your MVP to making you investor-ready; we prepare your startup for growth and provide direct access to vetted capital.",
      "url": "https://blackleoventures.com",
      "logo": logoUrl,
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Business Development",
        "availableLanguage": ["English", "Hindi"]
      },
      "sameAs": [
        "https://www.linkedin.com/company/blackleoventures",
        "https://twitter.com/blackleoventures"
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What if my startup is pre-revenue?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We work with startups at all stages, including pre-revenue. Our team specializes in helping early-stage founders articulate their vision, build compelling financial projections, and connect with investors who focus on seed and pre-seed opportunities."
          }
        },
        {
          "@type": "Question",
          "name": "How many investor introductions will I actually get?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Quality over quantity is our approach. Rather than sending your deck to hundreds of investors, we typically provide 5-10 highly targeted, warm introductions to investors who are actively seeking opportunities in your sector and stage."
          }
        },
        {
          "@type": "Question",
          "name": "What's your fee structure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We believe in complete transparency. Our fee structure typically includes a modest upfront consulting fee for the pitch deck audit and strategy work, plus a success fee based on the funding secured. No hidden fees, ever."
          }
        }
      ]
    };

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Startup Funding & Investment Advisory",
      "provider": {
        "@type": "Organization",
        "name": "Black Leo Ventures"
      },
      "areaServed": "IN",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Startup Growth Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Funds for Startups",
              "description": "Direct access to seed, Series A, and growth-stage funding from vetted investors."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Pitch Deck Development",
              "description": "Comprehensive pitch deck audit and development services."
            }
          }
        ]
      }
    };

    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.text = JSON.stringify(organizationSchema);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.text = JSON.stringify(faqSchema);
    document.head.appendChild(script2);

    const script3 = document.createElement('script');
    script3.type = 'application/ld+json';
    script3.text = JSON.stringify(serviceSchema);
    document.head.appendChild(script3);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(script3);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={logoUrl} alt="Black Leo Ventures" className="h-10 w-auto" data-testid="img-logo" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-services"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-process"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection("case-studies")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-case-studies"
              >
                Case Studies
              </button>
              <a
                href="/about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-about"
              >
                About Us
              </a>
              <a
                href="https://drive.google.com/file/d/1sU4-aKaIxF-ZB-IjXw9h4cwf8QEnB4q2/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                data-testid="link-company-profile"
              >
                <Download className="w-3 h-3" />
                Company Profile
              </a>
              <Button
                size="sm"
                onClick={() => scrollToSection("contact")}
                data-testid="button-nav-contact"
              >
                Contact Us
              </Button>
            </div>

            {/* Mobile Navigation */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-8">
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                    data-testid="link-mobile-services"
                  >
                    Services
                  </button>
                  <button
                    onClick={() => scrollToSection("process")}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                    data-testid="link-mobile-process"
                  >
                    Process
                  </button>
                  <button
                    onClick={() => scrollToSection("case-studies")}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                    data-testid="link-mobile-case-studies"
                  >
                    Case Studies
                  </button>
                  <a
                    href="/about"
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                    data-testid="link-mobile-about"
                  >
                    About Us
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1sU4-aKaIxF-ZB-IjXw9h4cwf8QEnB4q2/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors text-left flex items-center gap-2"
                    data-testid="link-mobile-company-profile"
                  >
                    <Download className="w-4 h-4" />
                    Company Profile
                  </a>
                  <Button
                    className="w-full mt-4"
                    onClick={() => scrollToSection("contact")}
                    data-testid="button-mobile-contact"
                  >
                    Contact Us
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight" data-testid="text-hero-headline">
                  One stop shop for your{" "}
                  <span className="text-primary">startups' success</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed" data-testid="text-hero-subheadline">
                  Secure exclusive one-on-one access to investors. From building your MVP to making you investor-ready; we prepare your startup for growth and provide direct access to vetted capital.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg"
                  asChild
                  data-testid="button-pitch-deck-audit"
                >
                  <a href="https://wa.me/917837059633?text=Hi%2C%20I%27m%20interested%20in%20a%20Pitch%20Deck%20Audit%20for%20my%20startup.%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Apply for Pitch Deck Audit
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg"
                  asChild
                  data-testid="button-schedule-meeting"
                >
                  <a href="https://zcal.co/blackleoventures/30min" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule a Meeting
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-base px-4 py-1" data-testid="badge-startups-funded">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Trusted by Startups Nationwide
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-base px-4 py-1" data-testid="badge-capital-raised">
                    <IndianRupee className="w-4 h-4 mr-2" />
                    Proven Track Record
                  </Badge>
                </div>
              </div>
            </div>

            <div className="relative lg:block hidden">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/20 flex items-center justify-center p-12">
                <div className="text-center space-y-4">
                  <div className="text-5xl font-bold text-primary" data-testid="text-success-rate">Your Growth Partner</div>
                  <p className="text-lg text-muted-foreground">From idea validation to successful funding rounds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indian Startup Facts Slider */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              India's Startup Ecosystem: Fast Facts
            </h2>
            <p className="text-lg text-muted-foreground">
              Why India is the perfect launchpad for your startup
            </p>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-2 border-primary/20 h-full">
                  <CardHeader className="text-center space-y-4">
                    <div className="text-5xl font-bold text-primary">3rd</div>
                    <CardTitle className="text-xl">Largest Startup Ecosystem</CardTitle>
                    <CardDescription className="text-base">
                      India ranks 3rd globally with 100,000+ startups, right after the US and China
                    </CardDescription>
                  </CardHeader>
                </Card>
              </CarouselItem>

              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-2 border-primary/20 h-full">
                  <CardHeader className="text-center space-y-4">
                    <div className="text-5xl font-bold text-primary">110+</div>
                    <CardTitle className="text-xl">Unicorn Startups</CardTitle>
                    <CardDescription className="text-base">
                      India has created 110+ unicorns valued at over $1 billion each
                    </CardDescription>
                  </CardHeader>
                </Card>
              </CarouselItem>

              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-2 border-primary/20 h-full">
                  <CardHeader className="text-center space-y-4">
                    <div className="text-5xl font-bold text-primary">$25B+</div>
                    <CardTitle className="text-xl">Annual Funding</CardTitle>
                    <CardDescription className="text-base">
                      Indian startups raised over $25 billion in funding in recent years
                    </CardDescription>
                  </CardHeader>
                </Card>
              </CarouselItem>

              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-2 border-primary/20 h-full">
                  <CardHeader className="text-center space-y-4">
                    <div className="text-5xl font-bold text-primary">1.4B</div>
                    <CardTitle className="text-xl">Market Opportunity</CardTitle>
                    <CardDescription className="text-base">
                      Access to India's 1.4 billion population - the world's largest consumer market
                    </CardDescription>
                  </CardHeader>
                </Card>
              </CarouselItem>

              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-2 border-primary/20 h-full">
                  <CardHeader className="text-center space-y-4">
                    <div className="text-5xl font-bold text-primary">850M+</div>
                    <CardTitle className="text-xl">Internet Users</CardTitle>
                    <CardDescription className="text-base">
                      India has 850+ million internet users, creating massive digital opportunities
                    </CardDescription>
                  </CardHeader>
                </Card>
              </CarouselItem>

              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-2 border-primary/20 h-full">
                  <CardHeader className="text-center space-y-4">
                    <div className="text-5xl font-bold text-primary">50+</div>
                    <CardTitle className="text-xl">Government Schemes</CardTitle>
                    <CardDescription className="text-base">
                      Startup India and other initiatives provide grants, tax benefits, and support
                    </CardDescription>
                  </CardHeader>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 md:py-32 bg-card" id="pain-points">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-pain-headline">
              Why Most Fundraising Efforts Yield No Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding the common pitfalls that prevent startups from securing funding
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="hover-elevate border-destructive/20" data-testid="card-pain-1">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-destructive/10 text-destructive">
                    <AlertCircle className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">Pitch Lacks Conviction & Structure</CardTitle>
                    <CardDescription className="text-base">
                      Investors see hundreds of pitches. Without a compelling story and clear structure, your startup gets lost in the noise.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover-elevate border-destructive/20" data-testid="card-pain-2">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-destructive/10 text-destructive">
                    <TrendingDown className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">Misaligned Valuation & Unrealistic Financials</CardTitle>
                    <CardDescription className="text-base">
                      Overvaluation or poorly structured financial projections signal inexperience and kill investor confidence instantly.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover-elevate border-destructive/20" data-testid="card-pain-3">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-destructive/10 text-destructive">
                    <FileX className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">Regulatory & Compliance Paperwork Stalls Progress</CardTitle>
                    <CardDescription className="text-base">
                      Complex documentation requirements and compliance issues create months of delays, draining momentum and resources.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover-elevate border-destructive/20" data-testid="card-pain-4">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-destructive/10 text-destructive">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">Months Chasing Leads, Not Closing Deals</CardTitle>
                    <CardDescription className="text-base">
                      Without the right network, founders waste time pursuing dead-end leads instead of connecting with serious investors.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-2xl md:text-3xl font-semibold italic text-primary" data-testid="text-bridge-statement">
              "Focus on the few, not the many."
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 md:py-32" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-value-headline">
              Our 5-Point Advantage
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connecting you with the right investors through our proven approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card className="hover-elevate" data-testid="card-advantage-1">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl mb-2">No Hidden Fees</CardTitle>
                <CardDescription className="text-base">
                  Complete transparency in pricing. What you see is what you pay - no surprises, no hidden costs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-elevate" data-testid="card-advantage-2">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl mb-2">Proprietary Matchmaking</CardTitle>
                <CardDescription className="text-base">
                  Our algorithm matches you with investors who align with your industry, stage, and vision.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-elevate" data-testid="card-advantage-4">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl mb-2">Hands-On Founder Support</CardTitle>
                <CardDescription className="text-base">
                  Comprehensive support covering deck design, financial modeling, narrative crafting, and MVP development.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-elevate" data-testid="card-advantage-5">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                  <Headphones className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl mb-2">360° Ecosystem Support</CardTitle>
                <CardDescription className="text-base">
                  Beyond funding - access to tech development, marketing strategy, and operational excellence.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-expertise-headline">
                Our Expertise
              </h3>
              <p className="text-xl text-muted-foreground">
                Connecting you with the right investors
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover-elevate" data-testid="card-expertise-1">
                <CardHeader className="text-center">
                  <div className="mx-auto p-4 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    <IndianRupee className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Funds for Startups</CardTitle>
                  <CardDescription className="text-base">
                    Direct access to seed, Series A, and growth-stage funding from vetted investors.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-elevate" data-testid="card-expertise-2">
                <CardHeader className="text-center">
                  <div className="mx-auto p-4 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    <Briefcase className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Funds for Funds</CardTitle>
                  <CardDescription className="text-base">
                    Supporting fund managers with LP connections and fund structuring expertise.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-elevate" data-testid="card-expertise-3">
                <CardHeader className="text-center">
                  <div className="mx-auto p-4 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    <Award className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Grants & Incubation</CardTitle>
                  <CardDescription className="text-base">
                    Navigate government grants, incubator programs, and non-dilutive funding opportunities.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-elevate" data-testid="card-expertise-4">
                <CardHeader className="text-center">
                  <div className="mx-auto p-4 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    <FileCheck className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Deal Origination</CardTitle>
                  <CardDescription className="text-base">
                    End-to-end deal structuring, term sheet negotiation, and transaction execution.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-elevate" data-testid="card-expertise-5">
                <CardHeader className="text-center">
                  <div className="mx-auto p-4 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    <GitMerge className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">M&A Advisory</CardTitle>
                  <CardDescription className="text-base">
                    Strategic mergers and acquisitions guidance for growth and exit opportunities.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-elevate" data-testid="card-expertise-6">
                <CardHeader className="text-center">
                  <div className="mx-auto p-4 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    <FileText className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Documentation</CardTitle>
                  <CardDescription className="text-base">
                    Comprehensive legal and compliance documentation support for seamless deals.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Indian Startup Success Stories */}
      <section className="py-24 md:py-32 bg-card" id="case-studies">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-casestudy-headline">
              Indian Startup Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real examples of how Indian startups transformed their vision into billion-dollar success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-elevate group" data-testid="card-casestudy-1">
              <CardHeader>
                <div className="mb-4">
                  <Badge className="mb-3">E-commerce</Badge>
                  <CardTitle className="text-2xl mb-2">Zepto: 10-Minute Delivery</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed space-y-3">
                  <p className="font-semibold text-foreground">Founded: 2021 | Valuation: $3.6B</p>
                  <p>Two 19-year-old Stanford dropouts built India's fastest-growing quick commerce platform. Raised over $1.4 billion from top-tier investors including Y Combinator, Nexus Venture Partners, and Glade Brook Capital.</p>
                  <div className="pt-3 border-t">
                    <p className="text-sm font-semibold text-primary">Key Success Factor: Solved hyperlocal delivery with tech-driven dark stores</p>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-elevate group" data-testid="card-casestudy-2">
              <CardHeader>
                <div className="mb-4">
                  <Badge className="mb-3">FinTech</Badge>
                  <CardTitle className="text-2xl mb-2">CRED: Premium Credit Card Platform</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed space-y-3">
                  <p className="font-semibold text-foreground">Founded: 2018 | Valuation: $6.4B</p>
                  <p>Kunal Shah's second unicorn created a members-only club for creditworthy Indians. Raised funding from Sequoia Capital, Ribbit Capital, and Tiger Global with innovative reward mechanisms.</p>
                  <div className="pt-3 border-t">
                    <p className="text-sm font-semibold text-primary">Key Success Factor: Gamified credit card payments with exclusive rewards</p>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-elevate group" data-testid="card-casestudy-3">
              <CardHeader>
                <div className="mb-4">
                  <Badge className="mb-3">EdTech</Badge>
                  <CardTitle className="text-2xl mb-2">Physics Wallah: Affordable Education</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed space-y-3">
                  <p className="font-semibold text-foreground">Founded: 2020 | Valuation: $2.8B</p>
                  <p>Started as YouTube channel, Alakh Pandey built India's most affordable ed-tech platform. Achieved unicorn status with backing from Westbridge Capital and GSV Ventures, serving 10M+ students.</p>
                  <div className="pt-3 border-t">
                    <p className="text-sm font-semibold text-primary">Key Success Factor: Quality education at 1/10th the cost of competitors</p>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-elevate group" data-testid="card-casestudy-4">
              <CardHeader>
                <div className="mb-4">
                  <Badge className="mb-3">SaaS</Badge>
                  <CardTitle className="text-2xl mb-2">Postman: API Development Platform</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed space-y-3">
                  <p className="font-semibold text-foreground">Founded: 2014 | Valuation: $5.6B</p>
                  <p>Abhinav Asthana built the world's leading API platform from Bengaluru. Now used by 25M+ developers globally with funding from Insight Partners, Nexus Venture Partners, and CRV.</p>
                  <div className="pt-3 border-t">
                    <p className="text-sm font-semibold text-primary">Key Success Factor: Solved global API development pain point</p>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-elevate group" data-testid="card-casestudy-5">
              <CardHeader>
                <div className="mb-4">
                  <Badge className="mb-3">HealthTech</Badge>
                  <CardTitle className="text-2xl mb-2">PharmEasy: Online Pharmacy Leader</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed space-y-3">
                  <p className="font-semibold text-foreground">Founded: 2015 | Valuation: $5.6B</p>
                  <p>Dharmil Sheth and Dhaval Shah revolutionized medicine delivery in India. Raised funding from TPG, Prosus Ventures, and Temasek, serving 100+ cities with 90M+ deliveries.</p>
                  <div className="pt-3 border-t">
                    <p className="text-sm font-semibold text-primary">Key Success Factor: Made healthcare accessible and affordable pan-India</p>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-elevate group" data-testid="card-casestudy-6">
              <CardHeader>
                <div className="mb-4">
                  <Badge className="mb-3">Logistics</Badge>
                  <CardTitle className="text-2xl mb-2">Delhivery: Supply Chain Giant</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed space-y-3">
                  <p className="font-semibold text-foreground">Founded: 2011 | Market Cap: $5B+</p>
                  <p>Sahil Barua built India's largest logistics network from scratch. Successfully IPO'd with backing from SoftBank, Tiger Global, and Carlyle Group, handling 2B+ shipments annually.</p>
                  <div className="pt-3 border-t">
                    <p className="text-sm font-semibold text-primary">Key Success Factor: Built tech-first logistics infrastructure for e-commerce boom</p>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl mb-4">
                  Your Startup Could Be Next
                </CardTitle>
                <CardDescription className="text-lg">
                  These founders started where you are today. With the right strategy, pitch, and investor connections, your startup can achieve similar success. Let Black Leo Ventures guide your fundraising journey.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32" id="process">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-process-headline">
              Our 4-Step Funding System
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven, systematic approach to securing the right funding for your startup
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover-elevate relative" data-testid="card-step-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                    1
                  </div>
                </div>
                <CardTitle className="text-2xl mb-4">Apply & Audit</CardTitle>
                <CardDescription className="text-base">
                  We assess your pitch deck, financial metrics, and overall fundraising readiness with a comprehensive audit.
                </CardDescription>
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span data-testid="text-duration-1">7 days</span>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover-elevate relative" data-testid="card-step-2">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                    2
                  </div>
                </div>
                <CardTitle className="text-2xl mb-4">Strategize & Build</CardTitle>
                <CardDescription className="text-base">
                  We build your pitch deck, financial model, and compelling founder story that resonates with investors.
                </CardDescription>
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span data-testid="text-duration-2">14 days</span>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover-elevate relative" data-testid="card-step-3">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                    3
                  </div>
                </div>
                <CardTitle className="text-2xl mb-4">Match & Connect</CardTitle>
                <CardDescription className="text-base">
                  We match you with the right investors, send warm introductions, and prepare you for winning pitches.
                </CardDescription>
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span data-testid="text-duration-3">21 days</span>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover-elevate relative" data-testid="card-step-4">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                    4
                  </div>
                </div>
                <CardTitle className="text-2xl mb-4">Close & Support</CardTitle>
                <CardDescription className="text-base">
                  We negotiate terms, support due diligence, and ensure successful fund disbursal and ongoing growth.
                </CardDescription>
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span data-testid="text-duration-4">30 days</span>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-card" id="faq">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-faq-headline">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about working with Black Leo Ventures
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6" data-testid="accordion-item-1">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                What if my startup is pre-revenue?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                We work with startups at all stages, including pre-revenue. Our team specializes in helping early-stage founders articulate their vision, build compelling financial projections, and connect with investors who focus on seed and pre-seed opportunities. We'll help you showcase your market potential, team strength, and traction metrics that matter most to early-stage investors.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6" data-testid="accordion-item-2">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                How many investor introductions will I actually get?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Quality over quantity is our approach. Rather than sending your deck to hundreds of investors, we typically provide 5-10 highly targeted, warm introductions to investors who are actively seeking opportunities in your sector and stage. These are curated connections based on our proprietary matching algorithm and personal relationships, significantly increasing your chances of meaningful conversations and term sheets.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6" data-testid="accordion-item-3">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                What's your fee structure?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                We believe in complete transparency. Our fee structure typically includes a modest upfront consulting fee for the pitch deck audit and strategy work, plus a success fee based on the funding secured. We align our incentives with your success - we only win when you win. Detailed pricing is provided during the initial consultation based on your specific needs and fundraising goals. No hidden fees, ever.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6" data-testid="accordion-item-4">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                How do you protect my intellectual property and confidential information?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Your IP and confidential information are sacred to us. We sign comprehensive NDAs with all clients before any information exchange. All investor introductions are made only with your explicit approval, and we never share your materials without your consent. Our team operates under strict confidentiality protocols, and we have robust systems in place to ensure your data security and privacy throughout the entire engagement.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6" data-testid="accordion-item-5">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Do you guarantee funding success?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                While we cannot guarantee funding (no ethical advisor can), we have a strong track record with qualified startups that complete our full program. We conduct a thorough assessment during the audit phase to ensure your startup is truly ready for fundraising. If we identify gaps, we'll work with you to address them before approaching investors. Our comprehensive approach and curated network significantly improve your chances of securing the right investment partners.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6" data-testid="accordion-item-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                What happens after I secure funding?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                Our relationship doesn't end at funding. We provide ongoing support through our 360° ecosystem, including connections to tech partners, marketing agencies, and operational consultants. Many of our clients return for subsequent funding rounds, and we're always here to provide strategic guidance as your startup scales. We're invested in your long-term success, not just the initial funding round.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground" id="contact">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-cta-headline">
                Ready to Start Your Funding Journey?
              </h2>
              <p className="text-xl md:text-2xl opacity-90">
                Let's discuss how we can help your startup succeed
              </p>
              <p className="text-lg opacity-75">
                Schedule a consultation to explore how Black Leo Ventures can support your fundraising goals
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg"
                asChild
                data-testid="button-cta-apply"
              >
                <a href="https://wa.me/917837059633?text=Hi%2C%20I%27m%20interested%20in%20a%20Pitch%20Deck%20Audit%20for%20my%20startup.%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Apply for Pitch Deck Audit
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg border-primary-foreground/20 hover:bg-primary-foreground/10"
                asChild
                data-testid="button-cta-schedule"
              >
                <a href="https://zcal.co/blackleoventures/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Free Consultation
                </a>
              </Button>
            </div>

            <div className="pt-8">
              <div className="flex flex-wrap items-center justify-center gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-2xl font-bold" data-testid="text-stat-success">Comprehensive</div>
                  <div className="text-sm opacity-75">End-to-End Support</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold" data-testid="text-stat-startups">Curated</div>
                  <div className="text-sm opacity-75">Investor Network</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold" data-testid="text-stat-capital">Transparent</div>
                  <div className="text-sm opacity-75">Pricing & Process</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold" data-testid="text-stat-time">Expert</div>
                  <div className="text-sm opacity-75">Guidance Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-card border-t">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <img src={logoUrl} alt="Black Leo Ventures" className="h-10 w-auto" data-testid="img-footer-logo" />
              <p className="text-sm text-muted-foreground">
                Your startup growth partner - From idea to scale
              </p>
              <div className="pt-4">
                <Button 
                  asChild
                  className="w-full"
                  data-testid="button-footer-consultation"
                >
                  <a href="https://wa.me/917837059633?text=Hi%2C%20I%27m%20interested%20in%20booking%20a%20consultation%20with%20Black%20Leo%20Ventures.%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Book a Consultation
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4" data-testid="text-footer-services">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-foreground transition-colors" data-testid="link-footer-funds">Funds for Startups</a></li>
                <li><a href="#services" className="hover:text-foreground transition-colors" data-testid="link-footer-grants">Grants & Incubation</a></li>
                <li><a href="#services" className="hover:text-foreground transition-colors" data-testid="link-footer-deals">Deal Origination</a></li>
                <li><a href="#services" className="hover:text-foreground transition-colors" data-testid="link-footer-ma">M&A Advisory</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4" data-testid="text-footer-company">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#case-studies" className="hover:text-foreground transition-colors" data-testid="link-footer-cases">Case Studies</a></li>
                <li><a href="#process" className="hover:text-foreground transition-colors" data-testid="link-footer-process">Our Process</a></li>
                <li><a href="#faq" className="hover:text-foreground transition-colors" data-testid="link-footer-faq">FAQ</a></li>
                <li><a href="#contact" className="hover:text-foreground transition-colors" data-testid="link-footer-contact">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4" data-testid="text-footer-contact-info">Contact Information</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <a href="tel:+917837059633" className="font-medium text-foreground hover:text-primary transition-colors">
                    +91 78370 59633
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Building className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">CIN</div>
                    <span className="text-xs">U85300MP2020PTC053751</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <Badge variant="outline" data-testid="badge-registered">
                  <Building className="w-3 h-3 mr-1" />
                  Registered Company
                </Badge>
                <Badge variant="outline" data-testid="badge-gstin">
                  <FileCheck className="w-3 h-3 mr-1" />
                  GSTIN Verified
                </Badge>
                <Badge variant="outline" data-testid="badge-cin">
                  <FileCheck className="w-3 h-3 mr-1" />
                  CIN: U85300MP2020PTC053751
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground" data-testid="text-copyright">
                © 2025 Black Leo Ventures. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
