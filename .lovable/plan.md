

## Plan: Remove All Lovable References

### Files to modify

**1. `index.html`** — Replace Lovable branding with generic/project-specific content:
- Title: "Lovable App" → "Portfolio"
- Description: "Lovable Generated Project" → "Personal Portfolio"
- Author: "Lovable" → remove or set your name
- Twitter site: "@Lovable" → remove
- OG/Twitter titles and descriptions: replace with "Portfolio" / "Personal Portfolio"
- Remove TODO comments

**2. `README.md`** — Rewrite to a clean project README without Lovable references

**3. `vite.config.ts`** — Remove `lovable-tagger` import and usage from the plugin config

**4. `package.json`** — Remove `lovable-tagger` from devDependencies (lock file updates automatically)

### 4 files changed, no functional impact on the app.

