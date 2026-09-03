---
name: Ethereal Luminescence
colors:
  surface: '#fbf8ff'
  surface-dim: '#dad9e3'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f2fd'
  surface-container: '#eeedf7'
  surface-container-high: '#e8e7f1'
  surface-container-highest: '#e3e1ec'
  on-surface: '#1a1b22'
  on-surface-variant: '#47464a'
  inverse-surface: '#2f3038'
  inverse-on-surface: '#f1effa'
  outline: '#78767b'
  outline-variant: '#c8c5ca'
  surface-tint: '#5f5e60'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1d'
  on-primary-container: '#858386'
  inverse-primary: '#c8c6c8'
  secondary: '#4648d4'
  on-secondary: '#ffffff'
  secondary-container: '#6063ee'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001f26'
  on-tertiary-container: '#0090a9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e1e4'
  primary-fixed-dim: '#c8c6c8'
  on-primary-fixed: '#1c1b1d'
  on-primary-fixed-variant: '#474649'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#fbf8ff'
  on-background: '#1a1b22'
  surface-variant: '#e3e1ec'
typography:
  display:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '600'
    lineHeight: 68px
    letterSpacing: -0.04em
  display-mobile:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 52px
    letterSpacing: -0.035em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.025em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.025em
  headline-sm:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: -0.02em
  title-md:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: -0.01em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter-mobile: 1rem
  gutter-desktop: 2rem
  margin-mobile: 1.25rem
  margin-desktop: 5rem
  container-max: 76rem
  stack-xs: 0.25rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 1.5rem
  stack-xl: 2.5rem
  stack-2xl: 4.5rem
  stack-3xl: 7.5rem
---

## Brand & Style

This design system delivers an executive, calm, and hyper-refined aesthetic tailored for next-generation intelligence and premium SaaS platforms. It bridges surgical Swiss typography with ethereal, atmospheric depth.

### Brand Personality & Emotional Impact
- **Quiet Authority:** Confident, restrained, and unhurried. It avoids aggressive marketing tropes in favor of spacious, architectural clarity.
- **Luminous Precision:** Crisp, jet-black typographic hierarchy floating above organic, diffuse pastel light wells.
- **Tactile Weightlessness:** Glass-like translucency paired with solid, confident pill touchpoints that feel physically grounded yet visually weightless.

### Design Style: Ethereal Minimalist Glass
The aesthetic combines ultra-clean Scandinavian minimalism with prismatic, soft-focus diffusion. Surfaces rely on subtle off-white backdrops, feather-light borders (4-6% black opacity), frosted glass membranes, and multi-chromatic pastel ambient glows (lavender, cyan, blush, and periwinkle) to create atmospheric depth without visual clutter.

## Colors

The palette operates on a high-contrast foundation balanced by soft, atmospheric ambient tones.

### Foundation & Surfaces
- **Canvas Base:** `#FAFAF9` (Stone 50) soft off-white canvas, paired with pure white (`#FFFFFF`) on top-level cards to preserve luminance.
- **Sub-Surface:** `#F4F4F5` (Zinc 100) for subtle inset panels and secondary card backdrops.
- **Glass Membrane:** `rgba(255, 255, 255, 0.72)` combined with `backdrop-filter: blur(16px)` for interactive overlays and dynamic cards.

### Typographic Contrast
- **Ink Primary:** `#09090b` (Deep Slate Black) for headings, active labels, and primary pill buttons.
- **Ink Secondary:** `#52525b` (Zinc 600) for body reading text, maintaining AA contrast against light backdrops.
- **Ink Muted:** `#71717a` (Zinc 500) for secondary metadata, timestamps, and de-emphasized indicators.
- **Hairlines & Borders:** `rgba(9, 9, 11, 0.06)` or `#E4E4E7` (Zinc 200 at 70% opacity).

### Ethereal Pastel Mesh Glows (Ambient Lighting Only)
These shades must never be used for body text; they are dedicated exclusively to radial ambient backgrounds, blurred halos, and soft status pill surfaces:
- **Soft Violet Glow:** `#EDE9FE` / `#DDD6FE` (Radial center opacity: 35-50%)
- **Soft Cyan / Ice Blue:** `#E0F2FE` / `#CCFBF1`
- **Soft Blush / Pink:** `#FCE7F3` / `#FDF2F8`
- **Soft Mint:** `#D1FAE5`

## Typography

The type system is powered entirely by Geist, leveraging its geometric precision, neutral character, and technical micro-details.

### Principles
- **Aggressive Negative Tracking:** Large headlines and display numbers feature negative letter spacing (-0.025em to -0.04em) to produce an authoritative, cohesive lockup.
- **Scale Contrast:** Ample differentiation between display scales and reading sizes ensures effortless scanning.
- **Label Restraint:** Eyebrows and categories use `label-caps` in uppercase styling with deliberate positive tracking (+0.06em) and subdued colors (`#71717a`) to offset bold black titles.

## Layout & Spacing

The layout is built upon an architectural 12-column responsive fluid grid with generous vertical rhythm to evoke expansive breathing room.

### Layout Philosophy
- **High Whitespace Ratio:** Sections transition with generous vertical spacing (`stack-2xl` to `stack-3xl`), separating thoughts with deliberate pause.
- **Centered Symmetry:** Hero modules, social proof tiers, and primary statements utilize centered structural alignment with a constrained reading measure (max 680px for copy).
- **Columns & Margins:**
  - **Desktop (≥1024px):** 12 columns, 32px gutters, maximum container width of `1216px` (76rem), with dynamic side margins minimum `80px`.
  - **Tablet (768px - 1023px):** 8 columns, 24px gutters, `32px` page margins.
  - **Mobile (≤767px):** 4 columns, 16px gutters, `20px` edge margins. Elements stack into single-column vertical cards.

## Elevation & Depth

Visual depth is achieved through ambient light wells, surface opacity layering, and subtle boundaries rather than harsh drop shadows.

### Elevation Hierarchy
1. **Canvas Level (0):** `#FAFAF9` matte neutral base.
2. **Ambient Layer (-1 relative to cards):** Multi-color pastel radial gradient meshes positioned beneath glass panels.
   - Example configuration: `background: radial-gradient(circle at 50% 50%, rgba(224, 231, 255, 0.45) 0%, rgba(243, 232, 255, 0.35) 45%, rgba(250, 250, 249, 0) 70%); filter: blur(60px);`
3. **Resting Cards (Elevation 1):** Solid white `#FFFFFF` or `rgba(255, 255, 255, 0.8)` translucent glass with `backdrop-filter: blur(16px)`, bordered by `1px solid rgba(9, 9, 11, 0.05)`.
   - Shadow: `0 1px 2px rgba(0, 0, 0, 0.03), 0 8px 24px -4px rgba(0, 0, 0, 0.02)`
4. **Floating Cards & Menus (Elevation 2):** Elevated floating glass components.
   - Shadow: `0 12px 32px -6px rgba(9, 9, 11, 0.05), 0 4px 12px -2px rgba(9, 9, 11, 0.02)`
   - Border: `1px solid rgba(9, 9, 11, 0.07)`
5. **Interactive Controls & Buttons:** Pure flat `#09090b` with micro-inner-bevel: `box-shadow: inset 0 1px 0.5px rgba(255, 255, 255, 0.2)`.

## Shapes

The design system embraces high curvature with an intentional pairing between pill-shaped control triggers and rounded content containers.

### Application Rules
- **Pill Radius (`rounded-full` / 9999px):** All buttons, input wrappers, status chips, search bars, and navigational floating islands.
- **Card Radius (`rounded-2xl` to `rounded-3xl` / 20px - 28px):** Feature tiles, dashboard previews, and floating modal panels.
- **Inner Corner Matching:** When nesting elements within a card (e.g., inner code previews or image frames), subtract the padding from the card radius (e.g., `24px card` with `12px padding` contains an inner container of `12px radius`).

## Components

### Buttons
- **Primary Pill:** Full rounded (`rounded-full`), background `#09090b`, text `#FFFFFF`, font weight 500, letter spacing `-0.01em`. Height 42px (standard) or 48px (hero). Features subtle top inner glow (`inset 0 1px 0 rgba(255,255,255,0.18)`). Hover transforms brightness slightly (`#27272a`) with a soft scale of `0.99`.
- **Secondary Pill:** Full rounded, background `rgba(255, 255, 255, 0.9)`, border `1px solid rgba(9, 9, 11, 0.08)`, text `#09090b`. Hover state brings background to `#F4F4F5`.
- **Ghost Action:** Transparent background, text `#71717a`, hover text `#09090b`.

### Chips & Badges
- **Pastel Status Pills:** Height 24px-28px, `rounded-full`, horizontal padding 10px-12px.
- **Colorways:**
  - *Lavender Soft:* Background `#EDE9FE`, text `#5B21B6`.
  - *Mint Soft:* Background `#D1FAE5`, text `#065F46`.
  - *Monochrome Subdued:* Background `rgba(9, 9, 11, 0.04)`, border `1px solid rgba(9, 9, 11, 0.06)`, text `#18181b`. Includes small leading 6px circular dot indicator.

### Cards & Surfaces
- **Frosted Ambient Card:** Multi-layer structure. Behind the card sits a soft multi-color pastel blur (`#E0E7FF`, `#F3E8FF`, `#CCFBF1`). The card itself uses `background: rgba(255, 255, 255, 0.75)`, `backdrop-filter: blur(20px)`, and `border: 1px solid rgba(9, 9, 11, 0.06)`. Internal padding is generous (32px to 48px).
- **Metric Cards:** Plain solid `#FFFFFF`, subtle bottom drop shadow, bold numerical display in `display-mobile` or `headline-md`, accompanied by muted Zinc labels.

### Input Fields
- **Container:** `rounded-full` height 48px, background `#FFFFFF` or `rgba(255, 255, 255, 0.8)`, border `1px solid rgba(9, 9, 11, 0.1)`, horizontal padding 20px.
- **Typography:** Geist 14px, placeholder text `#A1A1AA`.
- **Focus State:** Border shifts to `#09090b`, accompanied by a diffuse outline `box-shadow: 0 0 0 3px rgba(9, 9, 11, 0.05)`.

### Partner Logos
- **Treatment:** Strictly single-tone monochrome `#71717a` or `#A1A1AA`, set to 70% opacity. Hover transitions smoothly to `#09090b`.

### Selection Controls (Checkboxes & Radios)
- **Checkboxes:** 18px square with `rounded-md` (5px), border `1.5px solid #D4D4D8`. Checked state transitions to `#09090b` fill with a crisp `#FFFFFF` checkmark.
- **Radio Buttons:** 18px circle, border `1.5px solid #D4D4D8`. Checked state creates a centered 6px solid `#09090b` dot inside a white ring.