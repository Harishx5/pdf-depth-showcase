## Plan: Remove Email Modal & Auto-Capture Visitor Identity

### Problem

The email collection modal popup interrupts visitors. The user wants to remove it entirely and instead silently capture whatever identity info is available (e.g., browser-based signals) without prompting.

### Important Limitation

Browsers do **not** expose logged-in Google/social account emails to websites — there's no API to "fetch the email they're logged in with in their browser." The best we can do without a popup is capture anonymous session data (IP-derived info, user agent, referrer, etc.).

### Changes

**2. Update `src/hooks/useVisitorTracking.ts**`

- Remove references to `localStorage.getItem('visitor_email')` — just pass `null` for `visitor_email`
- Remove the `setVisitorEmail` export (no longer needed)
- Add `referrer` tracking (`document.referrer`) to capture where visitors come from

**3. Clean up**

- Remove `setVisitorEmail` import from any other files that reference it

### Result

Visitors are tracked silently by session ID, user agent, page URL, and sections viewed. Email column will be null for all visitors (since browsers don't expose logged-in account emails to arbitrary websites).