

## Plan: Show Full Screenshot Without Cropping

### Problem
The screenshot uses `object-cover` which crops/trims the image to fill the container. The user wants the full image displayed as uploaded, and is okay with it overflowing left/right.

### Changes

**1. `src/components/Projects.tsx` (line 37)**
- Change `object-cover` to `object-contain` so the image displays at its natural aspect ratio without cropping
- Remove `h-[calc(100%+8rem)]` constraint and use `w-auto` + `max-w-none` to allow natural sizing
- Keep the image centered with overflow allowed on sides

**2. `src/components/AIProjects.tsx` (line 40)**
- Same change: `object-cover` → `object-contain`, allow natural dimensions

### Specific CSS Change
From:
```
h-[calc(100%+8rem)] w-full object-cover
```
To:
```
w-full object-contain
```

This preserves the full image as uploaded without any trimming. The image will scale to fit within the width while maintaining aspect ratio, showing the complete screenshot.

### Files Changed
1. `src/components/Projects.tsx` — line 37
2. `src/components/AIProjects.tsx` — line 40

