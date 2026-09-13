---
name: Kinetic Editorial
colors:
  surface: '#f8f9fb'
  surface-dim: '#d9dadc'
  surface-bright: '#f8f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#edeef0'
  surface-container-high: '#e7e8ea'
  surface-container-highest: '#e1e2e4'
  on-surface: '#191c1e'
  on-surface-variant: '#45474a'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f3'
  outline: '#75777a'
  outline-variant: '#c5c6ca'
  surface-tint: '#5d5e61'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1a1c1e'
  on-primary-container: '#838486'
  inverse-primary: '#c6c6c9'
  secondary: '#ac2e00'
  on-secondary: '#ffffff'
  secondary-container: '#d73b00'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#151d20'
  on-tertiary-container: '#7d8589'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e5'
  primary-fixed-dim: '#c6c6c9'
  on-primary-fixed: '#1a1c1e'
  on-primary-fixed-variant: '#454749'
  secondary-fixed: '#ffdbd1'
  secondary-fixed-dim: '#ffb5a0'
  on-secondary-fixed: '#3b0900'
  on-secondary-fixed-variant: '#862200'
  tertiary-fixed: '#dce4e7'
  tertiary-fixed-dim: '#c0c8cb'
  on-tertiary-fixed: '#151d20'
  on-tertiary-fixed-variant: '#40484b'
  background: '#f8f9fb'
  on-background: '#191c1e'
  surface-variant: '#e1e2e4'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 60px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 12px
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a high-velocity, high-density interface bridging digital-out-of-home (DOOH) physical presence with enterprise ad-tech precision. The design language avoids nostalgic newsprint clichés, instead adopting an authoritative architectural tone: structural grids, sharp typography, precise data framing, and deliberate contrast.

The aesthetic fuses contemporary Swiss brutalism with high-end programmatic workflow environments. Whitespace is controlled and architectural, punctuated by razor-thin slate dividers, monolithic metrics, and high-impact kinetic accents. The interface communicates institutional reliability, speed, and massive physical scale, speaking directly to enterprise media buyers, billboard operators, and quantitative ad traders.

## Colors

The palette relies on stark, editorial-grade tonal contrast:
- **Primary (`#111315`):** Monolithic charcoal, acting as the bedrock for structural typography, terminal-like data blocks, and dense headers.
- **Secondary (`#FF4800`):** Electric Signal Orange. Used strictly for high-priority user actions, live auction statuses, physical DOOH screen inventory availability, and real-time impression telemetry.
- **Tertiary (`#2C3437`):** Deep industrial slate. Deployed for subtle surface separation, structural technical rules, and contextual telemetry graphs.
- **Neutral (`#F6F7F9`):** Architectural off-white. Complemented by pure `#FFFFFF` for primary active cards and deep slate borders (`#E2E5E9` / `#1A1D20` in dark segments) to preserve extreme optical clarity.

Functional semantic tokens use un-muted signals: active live streams use a crisp emerald (`#00A86B`), error diagnostics use crimson (`#E02424`), and processing queues use pure amber (`#F59E0B`).

## Typography

The typographic system communicates technical rigour and editorial clarity:
- **Headlines (Space Grotesk):** Provides mechanical, geometric sharpness, anchoring key sections, screen inventory identifiers, and major volume figures.
- **Body Text (Inter):** Highly legible grotesque sans optimized for complex ad-server setups, density-heavy configuration panels, and administrative tables.
- **Metadata & Data Stream (JetBrains Mono):** Monospaced precision for technical inventory specs (e.g., pixel dimensions, frame rates, auction latencies, programmatic RTB bids, and geographic coordinates).

All numerical statistics, exchange tables, and latency tickers must utilize `font-variant-numeric: tabular-nums` to maintain vertical alignment in real-time streaming displays.

## Layout & Spacing

The layout is built upon a 12-column rigid fluid grid for desktop and an adaptive 4-column system for mobile viewports.

- **Desktop (>= 1200px):** 12-column layout with 24px gutters and 32px canvas margins. Maximum container constraints are loosened to support high-density command consoles (max-width `1680px`).
- **Tablet (768px - 1199px):** 8-column layout with 16px gutters and 24px margins. Visual media previews reflow above bid metric tables.
- **Mobile (< 768px):** 4-column layout with 12px gutters and 16px margins. Complex nested split-panes compress into swipeable tabular panels.

Spacing adheres strictly to a baseline 4px/8px modular rhythm. Component paddings prioritize density without compromising legibility, maintaining tight vertical rhythm across operational consoles.

## Elevation & Depth

This system avoids soft, multi-layered diffuse drop shadows in favor of a crisp architectural approach:

1. **Surface Layering:** Depth is primarily established through structural container tiers (`#FFFFFF` resting atop `#F6F7F9`, framed with 1px `#E2E5E9` borders).
2. **Hard-Edged Framing:** Card boundaries and data splits use hairline borders (`1px solid`). For high-contrast dark console panels, surfaces transition to `#111315` and `#181B1E` with `#262A2E` dividers.
3. **Elevated Overlays & Drawers:** Modal sheets, quick-look screen previews, and terminal inspectors employ a high-precision offset shadow with zero ambient spread: `0px 8px 0px 0px rgba(17, 19, 21, 0.08)`, reinforced by a sharp 1px slate frame.
4. **Interactive Insets:** Pressed and selected inventory slots depress inward via border color transformations to Secondary Signal Orange, eliminating ambiguous blur states.

## Shapes

The interface implements a strict `Soft (1)` geometric curve across standard operational components:
- Standard containers, cards, and input fields utilize `0.25rem` (4px) radii, presenting a crisp, industrial edge.
- Modal panels and visual DOOH video preview wrappers utilize `0.5rem` (8px).
- Status telemetry pills, RTB bid indicator chips, and auction tags deliberately diverge by using full pill radials (`9999px`) to create an immediate visual separation between structural layout architecture and dynamic data micro-elements.

## Components

### Buttons
- **Primary Action:** Solid `#111315` background, `#FFFFFF` Space Grotesk text, 4px border radius. On hover, background shifts to `#FF4800` instantly with no soft easing.
- **Signal / Auction Button:** Solid `#FF4800` background, pure white text, high-emphasis interactive state for time-critical bid submissions.
- **Secondary / Outline:** Transparent background, 1px solid `#111315`, monospace micro-labeling. On hover, subtle tint `#111315` at 5% opacity.

### Chips & Pill Tags
- **Inventory Status Pills:** Pill-shaped (`rounded-full`), height 24px, uppercase JetBrains Mono typography at 10px. Live units feature an animated pulsing dot (`#FF4800` or `#00A86B`) paired with a neutral tint surface (`rgba(17, 19, 21, 0.04)`).
- **Format Filter Chips:** Low-radius (4px) square-cut chips for screen formats (`48-Sheet`, `D-6`, `Spectacular`), highlighting active selection with bold 1px charcoal borders.

### Cards & Terminal Previews
- **DOOH Display Card:** Pure white background, 1px slate border, containing an upper 16:9 ratio live preview frame with sharp corners, followed by a lower monospace metadata telemetry row (resolution, address, foot-traffic CPM).
- **Data Terminal Card:** Inverted `#111315` surface, with hairline dividers (`#262A2E`), display metrics rendered in Space Grotesk, and inline labels in light slate JetBrains Mono.

### Form Inputs & Checkboxes
- **Input Fields:** Crisp 40px height, `#FFFFFF` fill, 1px `#D0D5DD` border, transitioning to 1.5px `#111315` upon focus. Placeholders set in Inter regular.
- **Checkboxes & Radios:** Sharp 4px rounded rectangles for checkboxes; circles for radio buttons. Checked state fills with `#111315` housing a stark white angular checkmark.

### Exchange Metric Panels
- High-contrast single-stat tiles displaying real-time auction performance. Figures scale using `Space Grotesk` medium-to-bold with an adjacent inline delta pill tag.