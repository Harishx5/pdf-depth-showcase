

## Plan: Enlarge Screenshot on Hover (Overflow Upward)

### Problem
The screenshot is constrained to the small title/description area (`min-h-[120px]`), making it too small. The user wants a larger screenshot that can overflow **above** the card, but must **not** cover the tech tags or action buttons below.

### Changes

**1. `src/components/Projects.tsx`** (lines 22-40)
- Remove `overflow-hidden` if present on the card
- Change the screenshot container from `absolute inset-0` to a larger size that extends upward
- Use negative top positioning (e.g., `absolute -top-32 left-0 right-0 h-[calc(100%+8rem)]`) so the image grows upward out of the card
- Add `z-10` to the image so it floats above neighboring content
- Add a subtle rounded corner and shadow for polish

**2. `src/components/AIProjects.tsx`** (lines 26-42)
- Remove `overflow-hidden` from the card container (line 26)
- Apply the same enlarged screenshot styling: negative top offset, increased height, z-index
- Keep tech tags and buttons at their normal position with no overlay

### Visual on Hover
```text
      ┌────────────────────┐
      │  Screenshot IMG    │  ← overflows upward
      │  (larger, -top)    │
──────┤                    ├──────  card top edge
      │                    │
      └────────────────────┘
      [React] [TS] [Supabase]   ← untouched
      [Live Demo]  [GitHub]     ← untouched
──────────────────────────────  card bottom edge
```

### Files Changed
1. `src/components/Projects.tsx` — enlarge screenshot, allow upward overflow
2. `src/components/AIProjects.tsx` — same changes, remove `overflow-hidden`

