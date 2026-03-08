

## Changes to Contact.tsx

1. **Smooth close animation**: Add a `closing` state that triggers a fade-out/scale-down CSS animation before unmounting the popover. When closing (click outside or toggle), set `closing=true`, wait for animation to finish (~200ms), then hide.

2. **Fix email button**: The `mailto:` link should work in most browsers, but in the preview iframe it may be blocked. Add `target="_blank"` and `rel="noopener noreferrer"` to the email link to ensure it opens the user's email client. Also use `window.open()` as a fallback via an `onClick` handler.

3. **WhatsApp link**: Already correct (`https://wa.me/918056073997?text=Hi%F0%9F%91%8B`), will keep as-is.

### Implementation
- Add `isClosing` state alongside `showOptions`
- When closing, set `isClosing=true`, use `setTimeout(200ms)` to then set both to false
- Apply `animate-fade-out` class when `isClosing` is true, `animate-fade-in` when opening
- Email `<a>` gets `target="_blank"` and an `onClick` handler with `window.open('mailto:...')` fallback

