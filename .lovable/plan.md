

## Plan: Add Loading Screen with Custom Animation

### What to build
A full-screen loading component with a black background that displays the provided "Loading" text animation. It will show on initial page load and disappear once the page content is ready.

### Implementation

**1. Create `src/components/LoadingScreen.tsx`**
- Convert the provided HTML into a React component
- Use `useState` + `useEffect` to show the loader for ~2.5s on mount, then fade out and unmount
- Full-screen fixed overlay with black background (`bg-black`) and `z-50`
- Add a fade-out transition before removing

**2. Add CSS to `src/index.css`**
- Paste the full provided CSS (`.loader`, `.text`, `.line`, all keyframes) into the global stylesheet

**3. Update `src/pages/Index.tsx`**
- Import and render `<LoadingScreen />` at the top level
- The loading screen overlays everything, then fades out to reveal the page content

### Files changed
- `src/components/LoadingScreen.tsx` — new component
- `src/index.css` — add loader CSS
- `src/pages/Index.tsx` — render the loader

