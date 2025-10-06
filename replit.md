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
1. **Hero Section** - Compelling headline with dual CTAs, animated "Your Growth Partner" board with rotating messages
2. **Pain Points Section** - Addresses common fundraising challenges with interactive cards
3. **Value Proposition** - 5-point advantage including Pitch Deck Analysis & Improvement
4. **Transparent Pricing** - Detailed fee structure with consulting and success fees clearly displayed
5. **Case Studies** - Real founder testimonials with animated metrics counters
6. **Process Flow** - 4-step funding system with timeline disclaimer
7. **FAQ Section** - Comprehensive Q&A addressing transparency, security, and process
8. **Final CTA** - Conversion-focused call-to-action
9. **Professional Footer** - Complete navigation and trust badges with clickable logo
10. **Floating WhatsApp** - Persistent WhatsApp contact button for instant communication
11. **Color Theme Switcher** - Hidden by default with discoverable eye button and intro animation

## Design System
- **Brand Colors**: Yellow-based theme with multiple color schemes
  - Primary (Yellow): #FFD700 / HSL 51, 100%, 50%
  - Alternative themes: Violet (#8A2BE2), Red (#FF4500)
  - Accents: Black (#000000), White (#FFFFFF)
- **Color Theme Switcher**: Discoverable eye button on left edge with 5-second intro animation
- **Typography**: Inter for body text, Space Grotesk for accents
- **Dark Mode**: Fully supported with persistent theme toggle and localStorage sync
- **Responsive**: Mobile-first design, optimized for all screen sizes
- **Animations**: 
  - Scroll reveal effects for enhanced engagement
  - Animated counters for metrics
  - Interactive card hover effects with scale and shadow
  - Gradient animations on hero section
  - Rotating text animation in "Your Growth Partner" board
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
│   │   ├── home.tsx          # Main landing page with all sections
│   │   └── not-found.tsx     # 404 page
│   ├── components/
│   │   ├── ui/               # shadcn components
│   │   ├── theme-provider.tsx    # Dark/light mode provider
│   │   ├── theme-toggle.tsx      # Theme switcher component
│   │   ├── animated-counter.tsx  # Animated number counter
│   │   ├── scroll-reveal.tsx     # Scroll-based reveal animations
│   │   └── floating-whatsapp.tsx # Floating WhatsApp CTA button
│   ├── App.tsx               # Main app router
│   └── index.css             # Global styles + design tokens + animations
├── index.html                # HTML with SEO meta tags
attached_assets/
└── backleo_1759611500843.PNG # Company logo
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
- 2025-10-06: Yellow color theme transformation
  - Updated color scheme from orange to yellow-based theme (#FFD700 primary)
  - Added alternative color themes: Violet (#8A2BE2) and Red (#FF4500)
  - Created ColorThemeSwitcher component with discoverable eye button on left edge
  - Implemented 5-second intro animation showing "Theme" label for discoverability
  - Added 5th service "Pitch Deck Analysis & Improvement" to Our 5-Point Advantage
  - Enhanced "Your Growth Partner" hero box with animated rotating text messages
  - Added timeline disclaimer to "Our 4-Step Funding System"
  - Made logo clickable to redirect to home page on all pages
  - Added BHAWNA CHOURASIYA as third director in About Us page
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
