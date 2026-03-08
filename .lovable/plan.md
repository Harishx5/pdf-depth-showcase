

## Plan: Color System, SEO, README, and Performance Updates

### 1. Unified Accent Color System
**File: `src/index.css`** — Update CSS custom properties in both light and dark themes:
- `--primary` → map to `#3B82F6` (blue-500) as the main accent
- `--secondary` → map to `#6366F1` (indigo-500) as secondary accent  
- Dark mode background stays `#111827` (gray-900, already close to current)
- Light mode background → `#F9FAFB` (gray-50)
- Update `--glow`, `.text-gradient`, `.glow-border` to use the new blue accent
- All components automatically pick up the change through CSS variables — no component edits needed

### 2. SEO Metadata
**File: `index.html`** — Add missing meta tags:
- `<meta name="keywords">` with AI/ML/developer keywords
- `<meta name="author" content="Harish Kanna">`
- Update title to "Harish Kanna | AI Developer Portfolio"
- Update description and OG/Twitter tags with the full professional description

### 3. Enhanced README
**File: `README.md`** — Rewrite with:
- Title: "AI Developer Portfolio"
- Project descriptions (AI Inventory, Skill Swap, IDS)
- Full tech stack listing (React, TypeScript, Tailwind, Python, ML)
- Live website link placeholder
- Getting started instructions

### 4. Currently Exploring Updates
**File: `src/components/CurrentlyExploring.tsx`** — Add missing topics:
- "RAG Systems" (currently "RAG Architectures" — keep or rename)
- "LLM Applications" (new)
- "Autonomous AI Workflows" (new, replacing "Autonomous AI Systems" for variety)

### 5. Lazy Load Heavy Components
**File: `src/pages/Index.tsx`** — Wrap `Interactive3DScene` (and optionally `LoadingScreen`) with `React.lazy()` + `Suspense` for better initial load performance.

### Summary: 5 files modified, no new dependencies.

