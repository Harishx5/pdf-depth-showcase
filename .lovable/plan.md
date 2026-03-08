

## Plan: Move Lamp Effect Down from Top

Currently the lamp visual container is at the top of the page (starts at the top of the flex column). I'll add top padding/margin to push the lamp section down, so the glow opening sits more toward the center-top area rather than flush at the very top.

### Change in `src/components/ui/lamp.tsx`
- Add `mt-20` (or similar) to the lamp visual container (line 20) to push it down from the top
- Adjust the children wrapper's margin accordingly to keep the login card properly positioned below the lamp

