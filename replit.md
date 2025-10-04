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
1. **Hero Section** - Compelling headline with dual CTAs and trust badges
2. **Pain Points Section** - Addresses common fundraising challenges
3. **Value Proposition** - 5-point advantage with expertise areas (6 services)
4. **Case Studies** - Real founder testimonials with metrics
5. **Process Flow** - 4-step funding system with timelines
6. **FAQ Section** - Comprehensive Q&A addressing transparency, security, and process
7. **Final CTA** - Conversion-focused call-to-action
8. **Professional Footer** - Complete navigation and trust badges

## Design System
- **Brand Colors**: Black and Gold/Orange (primary: hsl(25, 90%, 55%))
- **Typography**: Inter for body text, Space Grotesk for accents
- **Dark Mode**: Fully supported with automatic theme switching
- **Responsive**: Mobile-first design, optimized for all screen sizes

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
│   ├── components/ui/        # shadcn components
│   ├── App.tsx               # Main app router
│   └── index.css             # Global styles + design tokens
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
- 2024-10-04: Initial website creation with all sections
- Implemented comprehensive SEO meta tags
- Added Vercel deployment configuration
- Created all sections per client requirements document
