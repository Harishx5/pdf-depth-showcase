

## Plan: Resume Download, Hero Keywords, and README Enhancement

### 1. Resume Download Button
**File: `src/components/Hero.tsx`**
- Add a "Download Resume" button next to the existing CTA buttons using `lucide-react`'s `Download` icon
- Link to `/resume.pdf` (place a placeholder file note — user will need to upload their actual resume to `public/resume.pdf`)
- Styled as a secondary button matching the existing "Contact Me" style

**File: `src/components/Navbar.tsx`**
- Add a "Resume" link in the nav items for quick access from anywhere on the page

### 2. Improve Hero Keywords
**File: `src/components/Hero.tsx`**
- Update subtitle from `"Full Stack Developer | Agentic AI & Machine Learning"` to `"AI Engineer | Full Stack Developer | LLM Applications"`
- Update description paragraph to include "Python Developer" naturally
- Add keyword badges/chips below the subtitle for: AI Engineer, LLM Applications, Python Developer, Generative AI

### 3. Improve README
**File: `README.md`**
- Add badges at the top (React, TypeScript, Tailwind, Python, MIT License)
- Add a brief personal intro line ("Hi, I'm Harish Kanna...")
- Expand project descriptions with tech stacks
- Add a "Features" section listing portfolio highlights (3D scene, interactive skills, prompt showcase)
- Add "Connect" section with links
- Overall more polished GitHub presence

### Summary: 3 files modified. User will need to add their actual `resume.pdf` to `public/`.

