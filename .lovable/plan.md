

## Plan: Project Screenshot with Hover Preview

### Overview
Add a screenshot URL field to each project in the admin dashboard. On the public site, hovering over a project card reveals the screenshot image as an overlay, while keeping the Live Demo and GitHub buttons visible.

### Changes

**1. `src/data/defaults.ts`** (line ~197-203)
- Add `screenshot: ''` to each project object in `projectsDefaults`

**2. `src/components/ContentManager.tsx`** (ProjectsEditor, ~line 376-390)
- Add a "Screenshot URL" input field for each project card
- Add it after the GitHub URL field: `<Input value={p.screenshot || ''} onChange={...} />`
- Update the "Add Project" button to include `screenshot: ''` in the new project template

**3. `src/components/Projects.tsx`**
- Add hover state per card using CSS (`group` is already applied)
- When a screenshot URL exists, render an overlay `<img>` inside the card that:
  - Is hidden by default (`opacity-0 pointer-events-none`)
  - Fades in on group hover (`group-hover:opacity-100`)
  - Covers the card content area but **stops before** the Live Demo / GitHub row
  - Uses `absolute` positioning within a `relative` container
- Structure: wrap the card content (title, description, tech) in a `relative` div, place the image overlay inside it, and keep the action buttons **outside** the overlay area so they remain clickable and visible

### Visual Layout on Hover
```text
┌──────────────────────────┐
│  ┌────────────────────┐  │
│  │                    │  │
│  │   Screenshot IMG   │  │  ← overlay covers this area
│  │   (fade in)        │  │
│  │                    │  │
│  └────────────────────┘  │
│  [Live Demo]  [GitHub]   │  ← always visible, not covered
└──────────────────────────┘
```

### Files Changed
1. `src/data/defaults.ts` — add `screenshot` field to project objects
2. `src/components/ContentManager.tsx` — add Screenshot URL input in ProjectsEditor
3. `src/components/Projects.tsx` — render hover image overlay above content but below action buttons

