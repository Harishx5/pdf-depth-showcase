

## Plan: Add "Add New Section" Button to Content Manager

### What the user wants
An "Add New" button at the bottom of the Content Manager accordion (after Contact) that lets admins create new custom sections/headings for the portfolio.

### Design

**New custom section structure:**
Each custom section stored in `site_content` with a key like `custom_<timestamp>` and a generic content schema:
```json
{
  "section_label": "New Section",
  "title_prefix": "",
  "title_highlight": "New Section",
  "type": "custom",
  "items": [
    { "icon": "Star", "title": "Item Title", "description": "Description text" }
  ]
}
```

### Changes

**1. `src/components/ContentManager.tsx`**
- Make `SECTIONS` dynamic — start with the static list, then append any custom sections found in the DB (keys starting with `custom_`)
- Add a `CustomSectionEditor` component with fields for section label, title prefix/highlight, and a list of items (each with icon, title, description) — generic enough for any content
- Add an "Add New Section" button after the accordion that:
  - Generates a new key like `custom_<Date.now()>`
  - Adds it to `sectionData` state with default empty structure
  - Adds it to the dynamic sections list
- Add a "Delete Section" button inside custom section editors (not available for built-in sections)

**2. `src/pages/Index.tsx`**
- After `<Contact />`, render a `CustomSections` component that queries all `site_content` rows where `section_key` starts with `custom_` and renders each one using a generic layout (icon, title, description cards — similar to About highlights)

**3. New `src/components/CustomSections.tsx`**
- Fetches all custom sections from `site_content` where key starts with `custom_`
- Renders each as a styled section with heading (prefix + highlight) and item cards with `DynamicIcon`
- Uses `ScrollAnimation` wrapper for consistency

### Result
Admins can add unlimited new sections from the dashboard. Each new section appears on the public site below Contact with customizable headings, icons, and content items.

