

## Plan: Increase Admin Dashboard Screenshot Preview Size

The admin dashboard currently shows uploaded screenshots at `max-w-xs` (~320px) in both the AI Projects and regular Projects sections of `ContentManager.tsx`. The client-side hover preview uses a massive `w-[calc(100%+90rem)]`. The user wants the admin preview to be larger.

### Changes

**File: `src/components/ContentManager.tsx`**
- **Line 286**: Change `max-w-xs` to `max-w-2xl` (~672px) for the AI Projects screenshot preview
- **Line 455**: Change `max-w-xs` to `max-w-2xl` (~672px) for the regular Projects screenshot preview

This makes the admin preview significantly larger (about 2x) while still being contained within the dashboard layout, and clearly different from the client-side hover overlay which fills far beyond the card.

