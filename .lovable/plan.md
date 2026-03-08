

## Plan: Add 3 New Portfolio Sections

Based on your request, I'll add three new sections and restructure the page layout.

### 1. AI Projects Showcase Section
A dedicated section filtering/highlighting AI-specific projects (InvexAI, SkillSwap, HELLA AI) with a distinct visual treatment. Each card shows description, tech stack, and Live Demo / GitHub buttons. Separate from the existing "Featured Work" section.

**New file**: `src/components/AIProjects.tsx`
- Curated list of AI projects: InvexAI (inventory forecasting), SkillSwap (AI matching), HELLA AI (chatbot), plus an IDS project placeholder
- Cards with prominent AI/ML tech tags, descriptions, and action buttons
- Visual distinction from general projects (e.g., gradient accent border, AI badge)

### 2. Interactive Tech Stack Graph
Replace the current flat skill tags in `Skills.tsx` with animated progress bars and an optional radar-style visualization.

**Modified file**: `src/components/Skills.tsx`
- Categorized skill bars: AI & Machine Learning, Backend, Frontend, Tools
- Each skill has an animated progress bar (using scroll-triggered animation) with percentage
- Clean, visual layout using the existing `Progress` component styled with primary color
- Skills data restructured with proficiency percentages

### 3. AI Prompt Engineering Showcase
A new section demonstrating prompt engineering expertise with interactive workflow examples.

**New file**: `src/components/PromptShowcase.tsx`
- 3 example cards: AI Content Generator, AI Data Analyzer, AI Chatbot Logic
- Each shows the prompt structure/workflow in a styled code block
- Workflow diagrams rendered as styled step-by-step flows (CSS, not images)
- Collapsible or tabbed interface to keep it clean

### 4. "Currently Exploring" Mini-Section
A small accent section showing cutting-edge interests.

**New file**: `src/components/CurrentlyExploring.tsx`
- Pill/badge layout listing: Agentic AI, Autonomous AI Systems, RAG Architectures, AI Agents
- Subtle animated entrance, placed after the Prompt Showcase

### 5. Page Layout Update
**Modified file**: `src/pages/Index.tsx`

New order:
```
Hero → About → AI Capabilities → AI Projects Showcase → Skills (with graphs) → Prompt Engineering Showcase → Currently Exploring → Experience → Projects (general) → Education → Certifications → Contact
```

### Technical Details
- All new components use existing `ScrollAnimation`, `glass` styling, and design tokens
- Recharts (already installed) used for optional radar chart in Skills
- Progress bars use `@radix-ui/react-progress` (already installed)
- Tabs component (already available) for Prompt Showcase examples
- No new dependencies needed

