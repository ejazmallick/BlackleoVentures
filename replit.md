# Black Leo Ventures - Corporate Website

## Overview
A premium, SEO-optimized corporate website for Black Leo Ventures - a startup funding and investor connection platform. The website showcases their services, value proposition, case studies, and funding process with exceptional UI/UX design.

## Project Details
- **Domain**: blackleoventures.com
- **Type**: 100% Frontend-only Corporate Website
- **Framework**: React + Vite + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Deployment**: Vercel-ready with optimized configuration

## Features
1. **Hero Section** - Compelling headline with dual CTAs, cinematic TV/display showcasing "Your Growth Partner" with live broadcast animation
2. **Cinematic TV Display** - Professional TV/monitor frame with:
   - Large rotating service messages as main focal point (text-xl/2xl)
   - Live broadcast indicator with pulsing red dot
   - Service badges (01-04) for Funding, Pitch, Grants, M&A
   - Animated audio visualization bars
   - Scanline effects and screen glare for film-like aesthetic
3. **Pain Points Section** - Addresses common fundraising challenges with interactive cards
4. **Value Proposition** - 5-point advantage including Pitch Deck Analysis & Improvement
5. **Transparent Pricing** - Detailed fee structure with consulting and success fees clearly displayed
6. **Case Studies** - Real founder testimonials with animated metrics counters
7. **Process Flow** - 4-step funding system with timeline disclaimer
8. **FAQ Section** - Comprehensive Q&A addressing transparency, security, and process
9. **Final CTA** - Conversion-focused call-to-action
10. **Professional Footer** - Complete navigation and trust badges with clickable logo (h-16)
11. **Floating WhatsApp** - Persistent WhatsApp contact button for instant communication
12. **Theme Page** - Dedicated page (/theme) for color customization, accessible via footer links

## Design System
- **Brand Colors**: Yellow-based theme with multiple color schemes
  - Primary (Yellow): #FFD700 / HSL 51, 100%, 50%
  - Alternative themes: Violet (#8A2BE2), Red (#FF4500)
  - Accents: Black (#000000), White (#FFFFFF)
- **Logo**: h-16 (little big) consistently across all pages and footers for premium brand presence
- **Color Theme Switcher**: Available on dedicated Theme page (/theme) accessible via footer links on all pages
- **Typography**: Inter for body text, Space Grotesk for accents
- **Dark Mode**: Fully supported with persistent theme toggle and localStorage sync
- **Responsive**: Mobile-first design, optimized for all screen sizes
- **Animations**: 
  - Scroll reveal effects for enhanced engagement
  - Animated counters for metrics
  - Interactive card hover effects with scale and shadow
  - Gradient animations on hero section
  - Cinematic TV/display with rotating service messages (3-second intervals)
  - Live broadcast indicators and audio visualization effects
  - Pulse, shimmer, and float effects
  - Accessibility: Respects prefers-reduced-motion settings

## SEO Optimization
- Comprehensive meta tags for search engines
- Open Graph tags for social media sharing
- Semantic HTML structure
- Optimized page titles and descriptions
- Schema markup ready for implementation

## Project Structure
```
client/
├── src/
│   ├── pages/
│   │   ├── home.tsx          # Main landing page with cinematic TV display
│   │   ├── about.tsx         # About page with team information
│   │   ├── tools.tsx         # AI tools page (Pitch Practice & Equity Calculator)
│   │   ├── theme.tsx         # Dedicated theme customization page
│   │   └── not-found.tsx     # 404 page
│   ├── components/
│   │   ├── ui/               # shadcn components
│   │   ├── theme-provider.tsx    # Dark/light mode provider
│   │   ├── color-theme-switcher.tsx  # Color theme switcher (used on theme page)
│   │   ├── animated-counter.tsx  # Animated number counter
│   │   ├── scroll-reveal.tsx     # Scroll-based reveal animations
│   │   └── floating-whatsapp.tsx # Floating WhatsApp CTA button
│   ├── App.tsx               # Main app router
│   └── index.css             # Global styles + design tokens + animations
├── index.html                # HTML with SEO meta tags
attached_assets/
└── logo blackleo_1759773901852.png # Company logo
```

## Development
```bash
npm install
npm run dev
```

## Build for Production
```bash
npm run build
```

## Deployment to Vercel
1. Connect your repository to Vercel
2. Import the project
3. Vercel will automatically detect the configuration from vercel.json
4. Deploy with one click

Or via CLI:
```bash
npm install -g vercel
vercel --prod
```

## Content Guidelines
- No fake or placeholder information
- All content is professional and credible
- Real metrics and case studies (using realistic examples)
- Trust-building elements throughout

## User Preferences
- Frontend-only implementation (no backend/API)
- Vercel hosting optimized
- SEO-ready with comprehensive meta tags
- Responsive design for all devices
- Professional, trustworthy design aesthetic
- Fast loading and optimized performance

## Recent Changes
- 2025-10-07: Cinematic Hero Display Enhancement & Theme Page Migration
  - **Logo Enhancement**: Increased logo size to h-16 (little big) across ALL pages and footers for premium brand presence
  - **Theme Page Migration**: 
    - Removed ColorThemeSwitcher component from home, about, and tools pages for cleaner UI
    - Created dedicated Theme page (/theme) with complete color customization controls
    - Added Theme page links to footer on all pages (home, about, tools)
  - **Cinematic TV Display Redesign**: Transformed "Your Growth Partner" hero box into professional broadcast display
    - AnimatedBoardText as dominant focal point at text-xl/2xl size with rotating service messages
    - Live broadcast indicator with pulsing red dot for dynamic feel
    - Service badges (01-04) for Funding, Pitch, Grants, M&A
    - Animated audio visualization bars in status bar
    - Scanline effects and screen glare for cinematic film aesthetic
    - Professional TV/monitor frame with bezel and power indicator
    - Messages rotate every 3 seconds showcasing key service offerings
  - **Architect Approved**: All changes reviewed and approved for production readiness
- 2025-10-06: UI Accessibility and Visibility Improvements
  - **Case Studies Section**: Fixed "Key Success Factor" text visibility in dark mode
    - Changed text color to use `text-foreground dark:text-white` for maximum visibility
    - Increased background opacity to `bg-primary/20 dark:bg-primary/30` for better contrast
    - Applied consistently across all 6 success story cards for yellow, violet, and red themes
  - **Color Theme Switcher**: Enhanced accessibility and discoverability
    - Made switcher button invisible by default (`opacity-0`) with reveal on hover
    - Added `focus-within:opacity-100` for keyboard navigation accessibility
    - Added `active:opacity-100` for touch device activation
    - Added `aria-label="Toggle color theme selector"` for screen reader support
    - Ensures full accessibility for mouse, keyboard, touch, and screen reader users
- 2025-10-06: Black Leo Ventures Platform Transformation
  - **Logo Update**: Replaced company logo with new Black Leo Ventures logo (logo blackleo_1759773901852.png) across all pages
  - **Hero Section Redesign**: 
    - Changed main headline to "Secure one on one access to investors"
    - Reorganized subheading: "From building your MVP to making you investor-ready; we prepare your startup for growth and provide direct access to vetted capital."
  - **Our Expertise Section**: Redesigned with 6 comprehensive services:
    1. Funds for Startups - Direct investor connections and fundraising support
    2. Funds for Funds - Capital raising for investment funds
    3. Grants & Incubation Support - Redirects to http://getgrants.in/ for government grants
    4. Deal Origination & Structuring - Investment deal pipeline and structuring
    5. Mergers and Acquisitions - M&A advisory and execution
    6. Documentation - Legal and compliance documentation
  - **AI-Powered Tools**: Added serverless Vercel API functions
    - Pitch Practice tool with Gemini AI-powered investor simulation (gemini-2.0-flash model)
    - Equity Calculator for dilution analysis and funding scenarios
    - Configured GOOGLE_API_KEY secret for Gemini AI integration
  - **Technical Updates**:
    - Fixed Vercel serverless functions to use @google/genai package with GoogleGenAI class
    - Implemented proper API routing with /api directory structure
    - Added Zod validation schemas for API requests
- 2025-10-06: Yellow color theme transformation
  - Updated color scheme from orange to yellow-based theme (#FFD700 primary)
  - Added alternative color themes: Violet (#8A2BE2) and Red (#FF4500)
  - Created ColorThemeSwitcher component with discoverable eye button in bottom left
  - Implemented 5-second intro animation showing "Theme" label for discoverability
  - Added 5th service "Pitch Deck Analysis & Improvement" to Our 5-Point Advantage
  - Enhanced "Your Growth Partner" hero box with animated rotating text messages
  - Added timeline disclaimer to "Our 4-Step Funding System" (updated to use "startup's")
  - Made logo clickable to redirect to home page on all pages
  - Leadership team displays 2 directors: Nirdosh Arora and Utkarsh Chourasiya
- 2025-10-05: Masterpiece design transformation
  - Implemented complete dark/light mode system with ThemeProvider and persistent theme toggle
  - Added transparent pricing section with detailed fee breakdown (consulting + success fees)
  - Created engaging user interactions: scroll reveal animations, animated counters, interactive card effects
  - Enhanced hero section with animated gradient backgrounds and improved visual hierarchy
  - Added floating WhatsApp button for instant contact
  - Implemented accessibility features: prefers-reduced-motion support
  - Added custom CSS animations: pulse, shimmer, float, glow effects
  - Improved overall visual design with consistent spacing and professional aesthetics
- 2025-01-05: Final updates for Indian market optimization
  - Replaced all currency icons with IndianRupee (₹) from lucide-react
  - Updated phone number to +91 78370 59633 (removed IVR reference)
  - Integrated WhatsApp links (wa.me) for all CTAs with prefilled messages
  - Added scheduling link (https://zcal.co/blackleoventures/30min)
  - Removed "Conviction-Driven Pitches" advantage card
  - Updated footer copyright year to 2025
  - Created comprehensive About Us page with director information (Nirdosh Arora, Utkarsh Chourasiya)
  - Added company profile download link in navigation
- 2024-10-04: Initial website creation with all sections
- Implemented comprehensive SEO meta tags
- Added Vercel deployment configuration
- Created all sections per client requirements document
