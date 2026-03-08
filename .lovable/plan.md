

## Plan: New Landing Page with Centered Circle + Move Portfolio to /portfolio

### Changes

**1. Create `src/pages/Landing.tsx`**
- Full-viewport page (`h-screen w-screen`) with flexbox centering
- A dark yellow circle centered with padding/gaps on all sides
- Circle sized using `w-[80vmin] h-[80vmin]` (or similar) to maintain equal gaps from all edges
- Dark yellow color: `bg-[#B8860B]` or similar

**2. Update `src/App.tsx` routes**
- `/` → new `Landing` page
- `/portfolio` → current `Index` page

### Files
- `src/pages/Landing.tsx` — new
- `src/App.tsx` — update routes

