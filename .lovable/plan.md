

## Fix Email Button to Open Device Email Client

The issue is that the current `onClick` handler calls `e.preventDefault()` which blocks the native `mailto:` link behavior, and `window.open('mailto:...')` doesn't reliably open email clients.

### Change (src/components/Contact.tsx, lines 79-91)

Replace the email link with a simpler approach that uses `window.location.href = 'mailto:...'` which is the most reliable way to trigger the device's native email client:

```tsx
<a
  href="mailto:harishkanna068@gmail.com"
  onClick={(e) => {
    e.preventDefault();
    window.location.href = 'mailto:harishkanna068@gmail.com';
  }}
  className="flex items-center gap-2 px-5 py-3 rounded-xl glass hover:glow-border transition-all duration-300 text-foreground text-sm font-medium whitespace-nowrap"
>
  <Mail className="w-4 h-4 text-primary" />
  Email
</a>
```

Key fix: Use `window.location.href` instead of `window.open()` — this reliably triggers the OS-level email client (Gmail app, Apple Mail, Outlook, etc.) on both mobile and desktop. Remove `target="_blank"` which can interfere with mailto behavior.

