
## Plan: Add Lamp Background Effect to Admin Login Page

### Overview
Add the Aceternity UI "Lamp" effect as a full-page background on the `/adminlogin` page, with the login card centered over it.

### Changes

**1. Install `framer-motion` dependency**

**2. Create `src/components/ui/lamp.tsx`**
- Port the `LampContainer` component using `framer-motion` for the animated lamp/glow effect
- The provided code snippets are incomplete (missing JSX), so I will reconstruct the full Aceternity UI Lamp component with proper motion divs, gradients, and conic-gradient animations
- Uses dark slate/cyan color scheme for the glow effect

**3. Update `src/pages/AdminLogin.tsx`**
- Wrap the entire page in `<LampContainer>` instead of the plain `div`
- Keep the login `Card` centered inside the lamp container
- Make the card background semi-transparent (`bg-background/80 backdrop-blur`) so the lamp effect shows through
- Remove the outer `min-h-screen bg-background` wrapper since LampContainer handles that

### Result
The admin login page will have an animated lamp/glow effect in the background with the authentication card floating centered on top.
