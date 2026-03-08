

# Professional Portfolio Website for SK Harish Kanna

## Resume Data Extracted

**Name:** SK Harish Kanna | **Role:** Full Stack Web Developer
**Email:** harishkanna068@gmail.com | **Phone:** +91 8056073997 | **Location:** India
**GitHub:** linked | **Summary:** Generative AI & Prompt Engineering specialist

**Education:** 10th (Maharishi Vidya Mandir, 2019-2020), 12th (Maharishi Vidya Mandir, 2020-2022), BE-CSE at SA Engineering College (2022-2026)

**Experience:** Software Developer Intern at Marzelet Info Tech (Jan 2026 - Present)

**Projects:** InvexAI, Skillswap, Hella, E-commerce Platform, Billing Software, Hoops Hub, Sap Hrerp

**Skills:** HTML, CSS, JavaScript, React, Firebase, Git, Generative AI, AI Tools Specialist, Generative AI Solutions Architect, API Integration for AI Solutions, Debugging AI Output and Error Handling, AI-powered code optimization

**Certifications:** 4 certifications from Microsoft/IBM/AWS/Oracle/Infosys/Simplilearn + Agentic AI by Claude (Anthropic)

---

## Architecture

### Pages & Sections (Single-page scrolling portfolio)
1. **Hero** — Name, title, animated 3D interactive scene (floating geometric shapes using CSS 3D transforms + mouse tracking), professional dark theme with subtle blue/cyan accents
2. **About** — Summary with scroll-triggered fade-in animations
3. **Experience** — Timeline layout with 3D card flip/tilt on scroll
4. **Projects** — Card grid with 3D perspective transforms on hover, links to live sites
5. **Skills** — Animated skill badges with staggered reveal on scroll
6. **Education** — Timeline with scroll animations
7. **Certifications** — Grid layout with issuer logos
8. **Contact** — Email, phone, GitHub links with CTA

### Technical Approach

- **3D Interactive Scene:** CSS 3D transforms + `mousemove` event tracking for parallax. Floating geometric shapes (cubes, spheres via CSS) that respond to cursor position. No heavy 3D library needed — pure CSS + JS for performance.
- **Scroll Animations:** Intersection Observer API for scroll-triggered animations (fade, slide, scale, rotate). Each section animates in as user scrolls.
- **Theme:** Dark background (#0a0a0f), subtle gradient overlays, cyan/blue accent (#06b6d4), clean typography, glass-morphism cards.
- **Responsive:** Mobile-first with Tailwind breakpoints.

### Files to Create/Modify
- `src/pages/Index.tsx` — Main portfolio page orchestrating all sections
- `src/components/Hero.tsx` — Hero with interactive 3D scene
- `src/components/About.tsx` — About section
- `src/components/Experience.tsx` — Experience timeline
- `src/components/Projects.tsx` — Projects grid
- `src/components/Skills.tsx` — Skills section
- `src/components/Education.tsx` — Education timeline
- `src/components/Certifications.tsx` — Certifications grid
- `src/components/Contact.tsx` — Contact section
- `src/components/Navbar.tsx` — Fixed navigation bar
- `src/components/ScrollAnimation.tsx` — Reusable scroll-triggered animation wrapper
- `src/components/Interactive3DScene.tsx` — Mouse-tracking 3D floating shapes
- `src/hooks/useScrollAnimation.ts` — Intersection Observer hook
- `src/hooks/useMousePosition.ts` — Mouse position tracking hook
- `src/index.css` — Custom animations, 3D keyframes, theme colors

All resume data will be hardcoded as constants within components — no backend needed.

