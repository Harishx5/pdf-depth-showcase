

# Portfolio Overhaul — AI Developer Focus

This is a comprehensive content and UI update across most components to reposition the portfolio around Full Stack Development + Agentic AI/ML expertise.

## Changes by File

### 1. `src/components/Hero.tsx`
- Update title to "SK Harish Kanna" with subtitle "Full Stack Developer | Agentic AI & Machine Learning"
- Replace tagline with: "Building intelligent web applications using Agentic AI systems, Generative AI, and modern full-stack technologies."
- Rename buttons: "View Projects" (primary) and "Contact Me" (secondary)

### 2. `src/components/About.tsx`
- Rewrite the about paragraph to emphasize full stack dev, Agentic AI, Generative AI, prompt engineering, and AI-powered applications
- Update the three highlight cards:
  - "Agentic AI Systems" — autonomous workflows, prompt chaining, task automation
  - "Full Stack Development" — React, TypeScript, modern backend services
  - "AI-Powered Solutions" — Generative AI tools, automation, scalable digital solutions

### 3. `src/components/Experience.tsx`
- Update achievements list per the brief: emphasize AI-driven apps, LLM integrations, prompt engineering, Supabase/Netlify, AI workflows
- Remove references to no-code platforms (Bolt, Lovable, Vibe Code Studio) in bullet points
- Keep the same visual layout (timeline card)

### 4. `src/components/Projects.tsx`
- Reorder: InvexAI, SkillSwap, SAP HR ERP as top (highlight: true), others as regular
- Add GitHub links (placeholder `#` for now) — each card gets "Live Demo" and "GitHub" buttons instead of the whole card being a link
- Update descriptions to emphasize AI integration and full stack architecture
- Add `github` field to project data

### 5. `src/components/Skills.tsx`
- Reorganize into 4 categories:
  - Frontend: HTML5, CSS3, JavaScript, React, TypeScript, TailwindCSS
  - Backend & Tools: Supabase, Firebase, API Integration, Git, Netlify, Replit
  - AI/ML & Agentic Systems: Generative AI, Agentic AI, ML Applications, Prompt Engineering, LLM Workflows, GPT-4, Gemini, AI Automation
  - Development Approach: Rapid Prototyping, No-Code/Low-Code Development, AI-Assisted Development, System Integration

### 6. New: `src/components/AICapabilities.tsx`
- New section with three subsection cards:
  - **Agentic AI Systems**: autonomous workflows, prompt chaining, AI task automation
  - **Generative AI**: GPT-4/Gemini integrations, prompt engineering, content generation
  - **Machine Learning Applications**: data-driven insights, AI predictions, recommendation systems
- Glass card styling consistent with rest of site

### 7. `src/components/Contact.tsx` (Footer)
- Expand footer to include Email, GitHub, LinkedIn icons/links and a "Download Resume" link
- Add social icon row above copyright

### 8. `src/pages/Index.tsx`
- Add `<AICapabilities />` component between Skills and Education sections
- Section order: Hero → About → Experience → Projects → Skills → AI Capabilities → Education → Certifications → Contact

### Files Changed
- `src/components/Hero.tsx` — content updates
- `src/components/About.tsx` — rewrite content and cards
- `src/components/Experience.tsx` — update achievements
- `src/components/Projects.tsx` — reorder, add GitHub buttons, update descriptions
- `src/components/Skills.tsx` — reorganize into 4 categories
- `src/components/AICapabilities.tsx` — new section
- `src/components/Contact.tsx` — enhanced footer
- `src/pages/Index.tsx` — add AI Capabilities section

