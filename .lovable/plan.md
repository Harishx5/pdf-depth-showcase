

## Contact Section Overhaul

All four areas will be addressed in a single update to `Contact.tsx` and `tailwind.config.ts`.

### 1. Define missing animation keyframes (tailwind.config.ts)

Add `enter` and `exit` keyframes and animation utilities to the `keyframes` and `animation` sections:
- `popover-enter`: fade in + scale up from 0.95 over 200ms
- `popover-exit`: fade out + scale down to 0.95 over 200ms
- Register as `animate-enter` and `animate-exit` classes

### 2. Popover styling and position (Contact.tsx)

- Move the Email/WhatsApp options to appear **below** the Say Hello button instead of above (more natural on desktop)
- Add a subtle glass background container around both options with rounded corners, padding, and a soft shadow
- Add a small caret/arrow pointing up toward the button
- Use the new `animate-enter` / `animate-exit` Tailwind classes

### 3. Make info cards interactive (Contact.tsx)

- **Email card**: clicking opens mailto with the same robust handler (hidden link click + Gmail compose fallback)
- **Phone card**: clicking opens `tel:+918056073997` to initiate a call
- **Location card**: remains non-interactive (no href), add `cursor-default` styling
- Add hover cursor and visual feedback to the clickable cards

### 4. Button redesign (Contact.tsx)

- Change the "Say Hello" button from a full-width dark pill to a more refined outlined style with a primary accent on hover
- Smaller, centered, with an icon that rotates on hover
- Match the style language of the Hero section's "Get In Touch" button for consistency

### 5. Fix email redirect bug (Contact.tsx)

- Keep the hidden-link-click approach for `mailto:harishkanna068@gmail.com`
- Shorten the Gmail compose fallback timeout from 1500ms to 800ms for faster desktop fallback
- Remove `e.preventDefault()` from the popover Email link so the native `<a href="mailto:">` fires first; only use `window.location.href` as a secondary trigger

### Files changed
- `tailwind.config.ts` — add `popover-enter`/`popover-exit` keyframes + animation utilities
- `src/components/Contact.tsx` — all UI/flow changes above

