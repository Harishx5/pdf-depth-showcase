
Goal: Make the Email option work reliably on laptop browsers (not just phone), while keeping the 2-option popover (Email + WhatsApp) and smooth close animation.

What I found
- In `src/components/Contact.tsx`, the Email option currently uses `preventDefault()` + `window.location.href = mailto...`, which can fail in desktop/iframe contexts depending on browser/mail-handler settings.
- `animate-enter` / `animate-exit` classes are referenced but not defined anywhere, so close animation is inconsistent/missing.
- WhatsApp link is already correct for `+91 8056073997` with `Hi👋`.

Implementation plan
1) Strengthen Email click behavior in `Contact.tsx`
- Keep the Email option visible in the popover as requested.
- Build a proper `mailto:` compose URL with recipient `harishkanna068@gmail.com` (and optional prefilled subject/body for “contacting you via email” flow).
- Use a dedicated click handler that:
  - first attempts `mailto:` (device/local app or registered browser mail handler),
  - then applies a browser fallback compose URL (Gmail web compose) if desktop doesn’t launch a local handler.
- Remove conflicting behavior that can block native handling.

2) Preserve exact user flow text/intent
- Label remains “Email” (or “Contact via Email” if preferred) and points to your email.
- Clicking Email directly starts composing to `harishkanna068@gmail.com`.
- Clicking WhatsApp opens DM to `+91 8056073997` with prefilled `Hi👋`.

3) Make popover close animation actually smooth
- Add missing animation keyframes/classes in `src/index.css` for enter and exit.
- Keep the existing `isClosing` timing logic in `Contact.tsx`, but align timing with CSS duration (same ms value) to avoid abrupt unmount.

4) UX polish for reliability
- Close popover after selecting Email/WhatsApp.
- While closing, disable pointer interaction on the popover to prevent accidental double clicks.

Technical details
- Files to update:
  - `src/components/Contact.tsx`:
    - add robust email handler (`mailto` + browser fallback),
    - keep two options under “Say Hello”,
    - trigger close animation consistently.
  - `src/index.css`:
    - define `@keyframes` and utility classes for `animate-enter` / `animate-exit`.
- Expected outcome:
  - Mobile: opens native mail app compose screen.
  - Laptop/desktop: opens local mail client if configured; otherwise opens browser compose fallback.
  - Popover opens/closes with smooth animation in both directions.

Validation checklist
- Desktop (Chrome/Edge): click “Say Hello” → “Email” opens compose to `harishkanna068@gmail.com`.
- Desktop without local mail client: Email still opens browser compose fallback.
- Mobile: Email opens phone mail app compose.
- WhatsApp opens `wa.me/918056073997?text=Hi%F0%9F%91%8B`.
- Popover close animation is visible and not abrupt.
