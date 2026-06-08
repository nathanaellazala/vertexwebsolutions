# PRD - Vertex Web Solutions Landing Site

## Original Problem Statement
Build a premium, highly custom, interactive luxury-tech landing page for Vertex Web Solutions — a digital solutions company helping local businesses with AI Voice Receptionists, Custom Website Building, and Social Media Marketing. Phone CTA: 305-469-3585 (tel:3054693585). No prices anywhere. Dark futuristic theme. 15 sections total.

## User Choices
- Phone CTAs only (no backend / no forms / no lead storage)
- Generated text + icon Vertex logo (stylized triangular V)
- 100% illustrative visuals — no photos
- Font pairing chosen by design agent

## Architecture
- Single-page React (CRA + Tailwind) landing site
- Backend untouched (default hello-world)
- Stack: React 19, Tailwind, Framer Motion, lucide-react, shadcn/ui base
- Fonts: Clash Display (headings) + Manrope (body) + JetBrains Mono (labels)
- Custom cursor glow on desktop, smooth scroll, glass navbar, grid + orbs backgrounds

## Implemented (2026-12)
- Sticky glass Navbar with mobile menu + tel CTA
- Hero with animated floating dashboard (incoming call, transcript, lead captured, side metric cards)
- Problem section (3 cards: missed calls / weak online presence / inconsistent marketing)
- Services overview (3 cards: AI Voice, Websites, Social)
- Package Deal flow diagram (7-step ecosystem)
- AI Receptionist deep dive with phone mockup, waveform, transcript bubbles, lead summary
- Website deep dive with 3D wireframe mockup + mobile mock + feature bento
- Social Media deep dive with dual scrolling post feed
- Industries grid (18 cards with icons + benefits)
- Why Vertex (4 cards with watermark numbers)
- Testimonials marquee (6 placeholder cards × 2)
- Interactive Demo with 4 selectable option cards + recommendation panel
- Final CTA with triangular SVG network animation
- Footer with brand, nav, legal, copyright

## Conversion / Compliance
- 13 phone CTAs all use tel:3054693585
- No prices, no "starting at", no plans/pricing words on page

## Backlog / Next Action Items
- P1: Add real testimonials when client provides them
- P2: Privacy Policy + Terms of Service pages (currently href="#")
- P2: SEO meta tags + OpenGraph image
- P3: Optional analytics integration (call tracking)
