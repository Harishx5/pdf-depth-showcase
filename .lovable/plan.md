

## Plan: Replace Logo with Theme Toggle Button

### What's changing
Remove the "SK Harish" logo link from the navbar and replace it with a Sun/Moon toggle button that switches between the current light theme and the dark theme (which already has CSS variables defined under `.dark`).

### Implementation

**1. Set up ThemeProvider in `src/App.tsx`**
- Import `ThemeProvider` from `next-themes`
- Wrap the app content with `<ThemeProvider attribute="class" defaultTheme="light">`
- This enables the `.dark` class toggle on `<html>`, which activates the existing dark CSS variables

**2. Update `src/components/Navbar.tsx`**
- Remove the `<a href="#">SK Harish</a>` logo element (lines 28-31)
- Replace with a toggle button using `useTheme()` from `next-themes`
- Show `Sun` icon when in dark mode (click → light), `Moon` icon when in light mode (click → dark)
- Style as a rounded icon button with subtle border, consistent with the navbar aesthetic

### Files changed
- `src/App.tsx` — wrap with ThemeProvider
- `src/components/Navbar.tsx` — replace logo with theme toggle

