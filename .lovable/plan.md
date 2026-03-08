

## Plan: Fix Screenshot Hover Behavior on Project Cards

### Problem
The current screenshot overlay covers the entire card content on hover, hiding everything including tech tags and buttons. The user wants only the **title and description** to be hidden on hover (replaced by the screenshot image), while **tech tags, Live Demo, and GitHub buttons remain visible**.

### Changes

**1. `src/components/Projects.tsx`**
- Move the screenshot `<img>` to only cover the title + description area (not the whole card)
- On hover, hide the title (`h3`, "Top Project" badge) and description (`p`) using `group-hover:opacity-0`
- Show the screenshot image in the same area using `group-hover:opacity-100`
- Tech tags and action buttons remain untouched and always visible
- Use a `relative` wrapper around just the title+description area with the image absolutely positioned inside it

**2. `src/components/AIProjects.tsx`**
- Add the same screenshot hover behavior (this component currently has no screenshot support)
- Same pattern: hide title + description on hover, show image, keep tech + buttons visible

### Visual on Hover (when screenshot exists)
```text
┌──────────────────────────┐
│                          │
│   Screenshot Image       │  ← replaces title + description
│                          │
│  [React] [TS] [Supabase] │  ← always visible
│  [Live Demo]  [GitHub]   │  ← always visible
└──────────────────────────┘
```

### Files Changed
1. `src/components/Projects.tsx` — restructure overlay to only cover title/description
2. `src/components/AIProjects.tsx` — add screenshot hover with same pattern

