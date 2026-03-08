

## Plan: Replace Simple Toggle Button with Animated Sun/Moon Theme Switch

Replace the current icon button (lines 34-40 in `Navbar.tsx`) with the animated CSS toggle that shows a sun with clouds (light mode) transitioning to a moon with stars (dark mode).

### Implementation

**1. Create `src/components/ThemeToggle.tsx`**
- Convert the HTML/CSS toggle into a React component
- Use `useTheme` from `next-themes` to control the checkbox state (`checked` = dark mode)
- On change, call `setTheme()` to toggle
- Use a `mounted` guard to avoid hydration mismatch
- Embed the SVG stars and moon spots as JSX

**2. Add toggle styles to `src/index.css`**
- Add all the `.theme-switch` CSS rules (CSS custom properties, container, clouds, stars, circle, moon spots, checked states, transitions)
- Reduce `--toggle-size` slightly (e.g. `16px`) so it fits comfortably in the navbar

**3. Update `src/components/Navbar.tsx`**
- Remove the `Sun`/`Moon` lucide imports and the old `<button>` (lines 34-40)
- Import and render `<ThemeToggle />` in its place
- Remove unused `mounted` state since it moves into ThemeToggle

### Files Changed
- `src/components/ThemeToggle.tsx` — new component
- `src/index.css` — add toggle CSS
- `src/components/Navbar.tsx` — swap button for `<ThemeToggle />`

