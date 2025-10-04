# Black Leo Ventures - Design Guidelines

## Design Approach

**Reference-Based: Premium Corporate/VC Platform**
Drawing inspiration from leading venture platforms (Linear, Stripe, Sequoia Capital, Y Combinator) combined with professional B2B SaaS aesthetics. The design must convey trust, credibility, and sophistication while maintaining accessibility and clarity.

## Core Design Principles

1. **Trust Through Professionalism**: Every element reinforces credibility
2. **Clarity Over Complexity**: Information-dense content presented with breathing room
3. **Strategic Visual Hierarchy**: Guide users from problem → solution → action
4. **Sophisticated Minimalism**: Premium feel without unnecessary ornamentation

## Color Palette

**Dark Mode Primary** (based on Black Leo Ventures brand):
- Primary Background: 0 0% 7% (deep charcoal)
- Secondary Background: 0 0% 12% (elevated surfaces)
- Accent Gold/Orange: 25 90% 55% (for CTAs, highlights, trust elements)
- Text Primary: 0 0% 98% (high contrast white)
- Text Secondary: 0 0% 65% (muted descriptive text)
- Border Subtle: 0 0% 20% (section dividers)
- Success Green: 142 76% 45% (for metrics, positive data)

**Light Mode**:
- Primary Background: 0 0% 100%
- Secondary Background: 0 0% 97%
- Accent maintains same hue with adjusted lightness: 25 85% 50%
- Text Primary: 0 0% 10%
- Text Secondary: 0 0% 40%

## Typography

**Font Stack**:
- Headings: Inter (700, 600) - clean, professional, excellent at large sizes
- Body: Inter (400, 500) - optimal readability for longer content
- Accents/Numbers: Space Grotesk (600) - for metrics, statistics

**Scale**:
- Hero H1: text-5xl md:text-6xl lg:text-7xl (font-bold)
- Section Headlines: text-3xl md:text-4xl lg:text-5xl (font-semibold)
- Subsection Titles: text-xl md:text-2xl (font-semibold)
- Body Large: text-lg md:text-xl (leading-relaxed)
- Body Standard: text-base md:text-lg (leading-relaxed)
- Small/Caption: text-sm (font-medium)

## Layout System

**Spacing Units**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Component padding: p-6 to p-8
- Section padding: py-16 md:py-24 lg:py-32
- Container max-widths: max-w-7xl for full sections, max-w-4xl for text content
- Grid gaps: gap-6 to gap-12 depending on content density

**Responsive Breakpoints**:
- Mobile-first approach
- md: 768px (tablet)
- lg: 1024px (desktop)
- xl: 1280px (large desktop)

## Component Library

### Hero Section
- Full-width container with max-w-7xl inner content
- Two-column layout: 60% content / 40% visual on desktop, stacked on mobile
- Large hero image showing professional founder/investor meeting or sophisticated office environment
- Trust badges row below headline (subtle, small logos with "As seen in" text)
- Dual CTAs: Primary (gold/orange filled) + Secondary (outline with blur backdrop on image)
- Floating stats cards overlaying hero image edge (e.g., "100+ Startups Funded", "₹500M+ Raised")

### Pain/Problem Section
- Dark card with subtle border glow
- 2x2 grid on desktop, single column mobile
- Icon (Lucide icons) + headline + description per pain point
- Red/orange accent for icons indicating problems
- Bridge statement in larger, italicized text below grid

### Value Proposition Cards
- 3-column grid for 5-point advantage (responsive to 2-col, then 1-col)
- Elevated cards with hover effect (subtle lift + border glow)
- Icon + title + 2-3 line description
- Expertise area displayed as horizontal scrollable tag row or 3x2 grid with icons

### Social Proof / Case Studies
- Large testimonial cards with founder photo (circular, 80px)
- Quote in large text (text-xl italic)
- Metrics displayed prominently: funding amount (large), valuation uplift %, time taken
- Before/after comparison for some metrics
- Hover reveals full case study details
- Partner/investor logos in grayscale, color on hover, 5-6 logos per row

### Process Flow
- Horizontal timeline on desktop (4 steps with connecting line)
- Vertical timeline on mobile
- Numbered badges (1-4) in accent color
- Step title + description + time estimate
- Icon representing each step
- Subtle animation on scroll (fade in sequentially)

### FAQ Section
- Accordion pattern with smooth expand/collapse
- Question in semibold, answer in regular weight
- Grouped by category: "Pricing & Fees", "Process & Timeline", "Trust & Security"
- Plus/minus icon toggle
- Subtle border between items

### CTA Sections
- Full-width colored background sections (accent gold/orange or gradient)
- Centered content with compelling headline
- Primary button (contrasting color - dark on gold background)
- Urgency messaging: "Limited Spots Each Month" with countdown or spots remaining indicator
- Secondary supporting text below CTA

### Footer
- 4-column layout on desktop: Services, Resources, Company, Legal
- Newsletter signup form (single-line email + button)
- Trust badges row: GSTIN number display, "Registered Company", policy icons
- Small partner logos (grayscale)
- Social media icons (LinkedIn, Twitter, Medium) - simple, monochrome
- Copyright and legal links at bottom
- Background: slightly elevated from main background

## Images

**Hero Section**: Large, professional image (1920x1080 min)
- Scenario: Sophisticated office setting, founder presenting to investors, or modern workspace
- Style: High-quality photography, slightly desaturated for premium feel
- Placement: Right side of hero on desktop, background overlay on mobile
- Treatment: Subtle gradient overlay to ensure text readability

**Case Study Sections**: Founder headshots
- Size: 80px circular avatars
- Style: Professional but approachable, consistent editing
- Placement: Top-left of testimonial cards

**Trust Badges**: Partner/investor logos
- Format: SVG or high-res PNG with transparency
- Style: Grayscale default, full color on hover
- Placement: Below hero, in social proof section, footer

## Animations & Interactions

**Minimal, purposeful animations only**:
- Fade-in on scroll for section entry (stagger for card grids)
- Smooth hover states: subtle lift (translateY(-2px)) + shadow increase
- CTA button: slight scale on hover (scale-105)
- Accordion expand/collapse: smooth height transition
- NO scroll-triggered parallax or complex animations

## Accessibility & Performance

- Maintain WCAG AA contrast ratios (4.5:1 minimum for text)
- Focus states with visible outlines (ring-2 ring-offset-2)
- Semantic HTML (nav, main, section, article, aside, footer)
- Descriptive alt text for all images
- Keyboard navigation for all interactive elements
- Lazy loading for images below fold
- Optimized image formats (WebP with fallbacks)

## SEO Structure

- H1 only on hero headline
- Proper H2-H6 hierarchy throughout
- Meta descriptions under 160 characters
- Schema.org markup for Organization, Service, FAQPage
- Open Graph tags for social sharing
- Optimized page title: "Black Leo Ventures | Startup Funding & Investor Connections"

This design balances corporate sophistication with startup energy, ensuring trust while maintaining approachability for founders seeking funding support.