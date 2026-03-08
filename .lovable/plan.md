

## Plan: Drag-to-Reorder Sections in Content Manager

### Overview
Add drag-and-drop reordering to the Content Manager accordion so admins can change the display order of sections. The order will be persisted in Supabase and reflected on the public site.

### Changes

**1. Database: Store section order**
- Add a new row in `site_content` with key `section_order` containing an array of section keys in display order, e.g. `["hero", "about", "skills", ...]`
- When no order exists, fall back to the current hardcoded order

**2. `src/components/ContentManager.tsx`**
- Replace the static `Accordion` list with a drag-and-drop sortable list using HTML5 drag events (no new library needed — use `draggable`, `onDragStart`, `onDragOver`, `onDrop`)
- Add a `GripVertical` drag handle (already imported) to each `AccordionTrigger`
- Track section order in state; on drop, reorder the array and auto-save to `site_content` with key `section_order`
- Load `section_order` from DB on mount; merge with any new/custom sections

**3. `src/pages/Index.tsx`**
- Fetch the `section_order` from `site_content` using `useSiteContent`
- Map section keys to components and render in the stored order
- Fall back to current hardcoded order if no DB entry exists

### Implementation Details

- Drag handle: `GripVertical` icon on the left of each accordion title, with `cursor-grab` styling
- Visual feedback: Apply a border highlight on the drop target during drag
- Component map in Index.tsx:
```typescript
const SECTION_COMPONENTS: Record<string, React.ReactNode> = {
  hero: <Suspense ...><Hero /></Suspense>,
  about: <About />,
  ai_capabilities: <AICapabilities />,
  // ... etc
};
const order = data.order; // from useSiteContent('section_order', defaultOrder)
return order.map(key => SECTION_COMPONENTS[key]);
```

### Files Changed
1. `src/components/ContentManager.tsx` — drag-and-drop reorder + save order
2. `src/pages/Index.tsx` — dynamic render order from DB
3. New migration — seed default order (optional, works without it via fallback)

