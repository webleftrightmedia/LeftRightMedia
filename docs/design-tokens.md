# Left Right Media — Design Tokens

All values below are the source of truth. They match the Tailwind v4 `@theme` block in `client/src/index.css`.

---

## Colors

| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| Ink | `#111315` | `bg-ink`, `text-ink` | Primary text, dark surfaces, solid buttons |
| Ink Light | `#1A1C1E` | `bg-ink-light` | Slightly lighter dark surface tier |
| Ink Muted | `#45474A` | `text-ink-muted` | Secondary text, labels, placeholders |
| Concrete | `#F6F7F9` | `bg-concrete` | Page background |
| Concrete White | `#FFFFFF` | `bg-concrete-white` | Card surfaces, elevated panels |
| Slate Border | `#E2E5E9` | `border-slate-border` | All borders, dividers, card outlines |
| Slate Dark | `#2C3437` | `bg-slate-dark` | Dark mode surface tier |
| Slate Divider | `#262A2E` | `border-slate-divider` | Dark mode dividers |
| Accent (Signal Orange) | `#FF4800` | `bg-accent`, `text-accent` | **Primary CTA**, live status, urgent actions |
| Accent Hover | `#D73B00` | `hover:bg-accent-hover` | Orange hover state |
| Accent Secondary (Cobalt) | `#0047AB` | `bg-accent-secondary` | **Secondary actions**, informational CTAs |
| Accent Secondary Hover | `#003580` | `hover:bg-accent-secondary-hover` | Cobalt hover state |
| Success | `#00A86B` | `bg-success` | Live/active status indicators |
| Error | `#E02424` | `bg-error` | Error states, validation failures |
| Warning | `#F59E0B` | `bg-warning` | Processing, pending, queued states |

---

## Typography

| Role | Font | Weights | Tailwind Utility |
|------|------|---------|------------------|
| Display | Space Grotesk | 700 | `text-display` / `text-display-mobile` |
| Headline LG | Space Grotesk | 600 | `text-headline-lg` / `text-headline-lg-mobile` |
| Headline MD | Space Grotesk | 600 | `text-headline-md` |
| Headline SM | Space Grotesk | 500 | `text-headline-sm` |
| Body LG | Inter | 400 | `text-body-lg` |
| Body MD | Inter | 400 | `text-body-md` |
| Body SM | Inter | 400 | `text-body-sm` |
| Label LG | JetBrains Mono | 600 | `text-label-lg` |
| Label MD | JetBrains Mono | 500 | `text-label-md` |
| Label SM | JetBrains Mono | 500 | `text-label-sm` |

> All labels are automatically uppercased and tracked out.
> All numeric/data values must use `font-variant-numeric: tabular-nums` (class: `tabular-nums`).

---

## Font Families

| Token | Tailwind Class | Font |
|-------|----------------|------|
| Display | `font-display` | Space Grotesk |
| Body | `font-body` | Inter |
| Mono | `font-mono` | JetBrains Mono |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-sm` | 2px | Subtle rounding on tight elements |
| `rounded` (default) | 4px | Cards, inputs, buttons |
| `rounded-md` | 6px | Medium containers |
| `rounded-lg` | 8px | Modals, video preview wrappers |
| `rounded-xl` | 12px | Large panels |
| `rounded-full` | 9999px | Status pills, chips, badges |

---

## Shadows

**All shadows are globally disabled.** Depth is achieved through:
1. Surface layering: `#FFFFFF` cards on `#F6F7F9` background with 1px `#E2E5E9` borders
2. Hairline borders: `border border-slate-border`
3. Overlay shadow (modals only): `shadow-overlay` → `0px 8px 0px 0px rgba(17, 19, 21, 0.08)`

---

## Spacing

Standard Tailwind spacing scale plus:

| Token | Value | Usage |
|-------|-------|-------|
| `gutter` | 24px | Column gutters (desktop) |
| `gutter-mobile` | 12px | Column gutters (mobile) |
| `margin` | 32px | Page margins (desktop) |
| `margin-mobile` | 16px | Page margins (mobile) |

---

## Layout

| Breakpoint | Columns | Gutters | Margins | Max Width |
|------------|---------|---------|---------|-----------|
| Mobile (<768px) | 4 | 12px | 16px | 100% |
| Tablet (768–1199px) | 8 | 16px | 24px | 100% |
| Desktop (≥1200px) | 12 | 24px | 32px | 1680px |

---

## Component Interaction Rules

### Buttons
- **Hover = instant invert.** No soft transitions. Use `transition-none`.
- Solid button: `bg-ink` → hover `bg-accent` (instant)
- Signal button: `bg-accent` → hover `bg-accent-hover` (instant)
- Outline button: `transparent` → hover `bg-ink text-white` (instant)
- Border radius: `4px` (never rounded-full on buttons)

### Status Badges
- Pill-shaped (`rounded-full`), 24px height
- JetBrains Mono uppercase, 10px
- Animated pulsing dot for LIVE/PENDING states
- Neutral tint surface: `rgba(17, 19, 21, 0.04)`

### Cards
- White background, 1px `slate-border` border
- 4px border radius
- No shadows — ever

### Focus States
- Hard 2px outline, 2px offset
- Color: `#111315` (ink)
- No glow, no ring, no soft transition

### Animations
- Pulsing dot: `animate-pulse-dot` (2s ease, infinite)
- Ring expand: `animate-ring-expand` (1.5s ease-out, infinite)
- All other interactions: **instant** (no transition)
