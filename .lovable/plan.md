

## Plan: Admin-Editable Portfolio Content (CMS)

### Overview
Create a content management system that stores all portfolio section data in Supabase, makes it editable from the admin dashboard, and renders it dynamically on the client side. Icons will be stored as string names (e.g., "Bot", "Code2") and rendered via a dynamic icon component.

### Database

**New table: `site_content`**
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| section_key | text | unique, e.g. "hero", "skills", "about" |
| content | jsonb | All section data as JSON |
| updated_at | timestamptz | auto-updated |

RLS: Anyone can SELECT (public site). Only admins can UPDATE/INSERT.

Each section stores its full data structure as JSON. For example, `skills` would store:
```json
{
  "categories": [
    { "title": "AI & Machine Learning", "skills": [{ "name": "Prompt Engineering", "level": 92 }] }
  ],
  "radarData": [{ "subject": "AI/ML", "value": 85 }]
}
```

### New Shared Code

1. **`src/components/DynamicIcon.tsx`** — Maps icon name strings (e.g. "Bot") to lucide-react components using the `icons` export from lucide-react.

2. **`src/hooks/useSiteContent.ts`** — React Query hook to fetch content by section_key. Returns parsed JSON with fallback to hardcoded defaults (so the site works even if DB is empty).

### Section Updates (all 11 components)

Each component (Hero, About, Skills, AICapabilities, AIProjects, PromptShowcase, CurrentlyExploring, Experience, Projects, Education, Certifications, Contact) will:
- Call `useSiteContent('section_key')` to fetch data
- Fall back to current hardcoded data if no DB entry exists
- Use `DynamicIcon` for icon rendering where applicable

### Admin Dashboard Changes

Add a **"Content Manager"** tab/section to `AdminDashboard.tsx` with:
- A sidebar/accordion listing all sections (Hero, About, Skills, etc.)
- Section-specific edit forms:
  - **Skills**: Editable category names, skill names, percentage sliders
  - **About**: Text fields for title/description, icon picker (dropdown of lucide icon names)
  - **Projects**: Add/remove/edit project cards
  - **Experience**: Edit job title, company, achievements list
  - **Education**: Edit degree, school, period
  - **Certifications**: Edit cert names and issuers
  - **Contact**: Edit email, phone, social links
  - **Hero**: Edit name, subtitle, tags, description
  - **CurrentlyExploring**: Edit topic tags
  - **PromptShowcase**: Edit examples
  - **AICapabilities/AIProjects**: Edit cards
- Icon picker dropdown showing common lucide icon names for sections that use icons
- Save button per section that upserts to `site_content`

### Section Content Keys & Structures

| Section Key | Editable Fields |
|------------|----------------|
| hero | name, subtitle, tags, description, email, location, github_url |
| about | section_title, description, highlights[{icon, title, desc}] |
| ai_capabilities | cards[{icon, title, items[]}] |
| ai_projects | projects[{title, desc, tech[], liveUrl, githubUrl}] |
| skills | categories[{title, skills[{name, level}]}], radarData[{subject, value}] |
| prompt_showcase | examples[{id, title, prompt, output, workflow[]}] |
| currently_exploring | topics[] |
| experience | job_title, company, location, period, achievements[] |
| projects | projects[{name, desc, tech[], link, github, highlight}] |
| education | entries[{degree, school, period, current}] |
| certifications | certs[{title, issuers[], icon}] |
| contact | email, phone, location, github, linkedin, whatsapp, description |

### Implementation Order
1. Create `site_content` table with RLS
2. Build `DynamicIcon` component and `useSiteContent` hook
3. Update all 11 section components to use dynamic data
4. Build the admin content editor UI with forms for each section
5. Wire up save/upsert functionality

### Result
All portfolio content becomes editable from the admin dashboard. Changes reflect immediately on the public site. Icons are customizable via dropdown. Skill percentages update in real-time via the admin panel.

