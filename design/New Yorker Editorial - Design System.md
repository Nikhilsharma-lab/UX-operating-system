> **SUPERSEDED (Decision 065).** This file described a design system that was
> not empirically verified against the live site. The design authority is now
> the measured system in `design-audit/nyer-observed.json` and the root
> `DESIGN.md`. Retained for history only; do not apply values from below.

# Design System Inspired by The New Yorker

## 1. Visual Theme & Atmosphere

The New Yorker's design system embodies sophisticated editorial elegance with a distinctly refined, intellectually authoritative aesthetic. The palette balances deep blacks and pristine whites with carefully measured accents of slate blue and muted greens, creating a timeless quality that feels both classic and contemporary. The visual language prioritizes typography as a primary design element, leveraging serif and humanist typefaces to establish a cultured, literary voice. High-contrast layouts with generous whitespace reflect confident editorial restraint, while strategic use of vibrant accent colors—particularly in featured content cards—introduces visual hierarchy without sacrificing sophistication. The overall atmosphere is one of curated intelligence: refined, purposeful, and distinctly New York.

**Key Characteristics**
- Serif-driven typography paired with modern sans-serif for interface elements
- High contrast black-and-white foundation with restrained color accents
- Generous whitespace and deliberate negative space
- Sophisticated editorial layout with clear visual hierarchy
- Timeless, magazine-quality aesthetic applied to digital
- Strategic color blocking for featured content and editorial callouts

## 2. Color Palette & Roles

### Primary
- **Deep Charcoal** (`#2B2E35`): Primary interface background, header/footer backgrounds, and dominant text elements
- **Jet Black** (`#000000`): Core text, primary typography, and maximum contrast elements
- **Slate Gray** (`#4A5568`): Secondary text, supporting copy, metadata, and tertiary interface elements

### Accent Colors
- **Slate Blue** (`#0879BF`): Accent highlights, interactive elements, links requiring secondary emphasis
- **Vibrant Green** (`#38A169`): Success states, positive indicators, and featured content highlights
- **Soft Blush** (`#F7C2C2`): Subtle highlight color for special editorial features
- **Medium Charcoal** (`#4F525B`): Supporting interface text and borders

### Interactive
- **Dark Navy** (`#2D3748`): Interactive hover states and active element backgrounds
- **Alert Red** (`#DB3334`): Error states, warnings, and critical alerts
- **Error Red** (`#E53E3E`): Secondary error indication and validation failures

### Neutral Scale
- **White** (`#FFFFFF`): Primary background, card surfaces, and clean space
- **Off-White** (`#F7FAFC`): Subtle background variation, secondary surfaces
- **Light Gray** (`#F5F5F5`): Tertiary background, section dividers
- **Pale Gray** (`#E2E8F0`): Form inputs and subtle borders
- **Medium Gray** (`#E5E5E5`): Dividing lines, subtle separators
- **Dark Gray** (`#333333`): Secondary text hierarchy

### Surface & Borders
- **Almost Black** (`#121212`): Deep background layers for high-contrast sections
- **Light Neutral Gray** (`#A0AEC0`): Disabled states, muted UI elements

## 3. Typography Rules

### Font Family
- **Primary Display**: TNY Adobe Caslon Pro (serif stack: Georgia, serif fallback)
- **Secondary Heading**: Irvin Heading Pro (serif stack: Garamond, serif fallback)
- **Body & Interface**: Inter (sans-serif stack: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif fallback)
- **Navigation & UI Labels**: Graphik (sans-serif stack: Helvetica Neue, Arial, sans-serif fallback)

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|-----------------|-------|
| Display/Hero | TNY Adobe Caslon Pro | 42px | 700 | 31.5px | 0px | Main article headline, cover stories |
| Heading Level 2 | Irvin Heading Pro | 28px | 400 | 32px | 0px | Section headers, feature titles |
| Heading Level 3 | Irvin Heading Pro | 36px | 400 | 40px | 0px | Subsection headers, prominent callouts |
| Body Copy | Inter | 14px | 400 | 19.6px | 0px | Article text, main content |
| UI Label/Navigation | Graphik | 12px | 500 | 15.24px | 0px | Navigation items, UI labels, breadcrumbs |
| Button Text | Inter | 14px | 600 | 19.6px | 0px | Primary and secondary buttons |
| Caption/Meta | Inter | 8px | 400 | 19.6px | 0px | Byline, publish date, image credits |
| Link Text | Inter | 14px | 400 | 14px | 0px | Inline and standalone links |

### Principles
- Serif typefaces establish editorial authority and timeless quality for headings and display text
- Sans-serif fonts provide clean, scannable interface hierarchy for navigation and UI elements
- Line height is consistently generous (1.4–1.5× font size) to enhance readability of body text
- Weight variation (400 regular, 600 semibold, 700 bold) creates visual hierarchy without introducing additional typefaces
- Navigation uses smaller, uppercase-friendly weights to maintain refinement while ensuring legibility at reduced sizes

## 4. Component Stylings

### Buttons

**Primary Button**
- Background: `#2B2E35`
- Text Color: `#FFFFFF`
- Font: Inter, 14px, 600 weight
- Padding: `8px 16px 8px 16px`
- Border Radius: `6px`
- Border: `0px none`
- Line Height: `19.6px`
- Hover State: Background `#1A1D23` (10% darker), cursor pointer
- Active State: Background `#0F1114` (20% darker)
- Disabled State: Background `#A0AEC0`, Text Color `#FFFFFF`, cursor not-allowed

**Secondary Button (Light)**
- Background: `#F7FAFC`
- Text Color: `#2D3748`
- Font: Inter, 14px, 600 weight
- Padding: `8px 16px 8px 24px`
- Border Radius: `0px`
- Border: `0px none`
- Line Height: `19.6px`
- Width: 100%
- Hover State: Background `#E2E8F0`, Text Color `#2D3748`
- Active State: Background `#CBD5E0`

**Tertiary Button (Text-Only)**
- Background: `transparent`
- Text Color: `#4A5568`
- Font: Inter, 14px, 400 weight
- Padding: `8px 8px 1px 6px`
- Border Radius: `0px`
- Border: `0px none`
- Line Height: `19.6px`
- Hover State: Text Color `#2B2E35`, text-decoration underline

**Navigation Button (Full-Width)**
- Background: `#2B2E35`
- Text Color: `#FFFFFF`
- Font: Inter, 14px, 600 weight
- Padding: `8px 16px 8px 24px`
- Border Radius: `0px`
- Border: `0px none`
- Line Height: `19.6px`
- Width: 100%
- Hover State: Background `#1A1D23`

### Cards & Containers

**Featured Content Card (Green)**
- Background: `#5CD687`
- Text Color: `#000000`
- Font: TNY Adobe Caslon Pro, 21px, 400 weight
- Padding: `24px 24px 24px 24px`
- Border Radius: `16px`
- Border: `0px none`
- Line Height: `31.5px`
- Min Height: `377px`
- Hover State: Transform scale(1.02), box-shadow `0px 8px 24px rgba(0,0,0,0.12)`

**Featured Content Card (Blue)**
- Background: `#84D1FF`
- Text Color: `#000000`
- Font: TNY Adobe Caslon Pro, 21px, 400 weight
- Padding: `24px 24px 24px 24px`
- Border Radius: `16px`
- Border: `0px none`
- Line Height: `31.5px`
- Min Height: `377px`
- Hover State: Transform scale(1.02), box-shadow `0px 8px 24px rgba(0,0,0,0.12)`

**Standard Content Card**
- Background: `#FFFFFF`
- Text Color: `#000000`
- Font: Inter, 14px, 400 weight
- Padding: `24px 24px 24px 24px`
- Border Radius: `16px`
- Border: `1px solid #E5E5E5`
- Line Height: `19.6px`
- Box Shadow: `0px 2px 8px rgba(0,0,0,0.06)`
- Hover State: Border `1px solid #2B2E35`, box-shadow `0px 4px 16px rgba(0,0,0,0.12)`

**Minimal Card (Unstyled)**
- Background: `transparent`
- Text Color: `#000000`
- Font: TNY Adobe Caslon Pro, 21px, 400 weight
- Padding: `0px 0px 0px 0px`
- Border Radius: `0px`
- Border: `0px none`
- Line Height: `31.5px`

### Inputs & Forms

**Text Input**
- Background: `#FFFFFF`
- Text Color: `#000000`
- Font: Inter, 14px, 400 weight
- Padding: `12px 12px 12px 12px`
- Border: `1px solid #E2E8F0`
- Border Radius: `4px`
- Line Height: `19.6px`
- Focus State: Border `1px solid #0879BF`, box-shadow `0px 0px 0px 3px rgba(8,121,191,0.1)`
- Disabled State: Background `#F5F5F5`, Text Color `#A0AEC0`, Border `1px solid #E5E5E5`
- Error State: Border `1px solid #DB3334`, box-shadow `0px 0px 0px 3px rgba(219,51,52,0.1)`

**Select Input**
- Background: `#FFFFFF`
- Text Color: `#000000`
- Font: Inter, 14px, 400 weight
- Padding: `12px 12px 12px 12px`
- Border: `1px solid #E2E8F0`
- Border Radius: `4px`
- Appearance: `none` (custom styling)
- Focus State: Border `1px solid #0879BF`

**Checkbox**
- Background: `#FFFFFF`
- Border: `2px solid #E2E8F0`
- Border Radius: `4px`
- Size: `16px × 16px`
- Checked State: Background `#2B2E35`, Border `2px solid #2B2E35`
- Focus State: box-shadow `0px 0px 0px 3px rgba(0,0,0,0.1)`

### Navigation

**Navigation Item**
- Background: `transparent`
- Text Color: `#000000`
- Font: Graphik, 12px, 500 weight
- Padding: `0px 0px 0px 0px`
- Border Radius: `0px`
- Line Height: `15.24px`
- Hover State: Text Color `#4A5568`, text-decoration underline
- Active State: Text Color `#2B2E35`, border-bottom `2px solid #2B2E35`

**Header Navigation Bar**
- Background: `#000000`
- Text Color: `#FFFFFF`
- Padding: `16px 24px 16px 24px`
- Box Shadow: `0px 2px 8px rgba(0,0,0,0.12)`
- Display: flex, justify-content space-between, align-items center

**Footer Navigation**
- Background: `#2B2E35`
- Text Color: `#FFFFFF`
- Font: Graphik, 12px, 400 weight
- Padding: `48px 24px 48px 24px`
- Link Hover State: Text Color `#A0AEC0`

## 5. Layout Principles

### Spacing System
Base unit: `8px`

- **Micro**: `4px` — inline text spacing, tight grouping
- **Extra Small**: `8px` — component internal padding, button padding
- **Small**: `12px` — form inputs, compact containers
- **Base**: `16px` — standard margin, breathing room between elements
- **Medium**: `24px` — card padding, section spacing
- **Large**: `32px` — section gaps, content divisions
- **Extra Large**: `48px` — major section padding, layout divisions
- **XXL**: `56px` — vertical rhythm between major content blocks
- **XXXL**: `64px` — top-level section padding
- **Hero**: `116px` — display/hero section padding

**Usage Context:**
- Buttons and inline components: `8px` to `16px`
- Card and container padding: `24px` to `48px`
- Vertical rhythm between sections: `32px` to `64px`
- Form field spacing: `12px` to `24px`

### Grid & Container
- **Max Content Width**: `1200px` (center-aligned with padding)
- **Container Padding**: `24px` on tablet (768px+), `16px` on mobile (<768px)
- **Column Strategy**: 12-column flexible grid on desktop, 6-column on tablet, 4-column on mobile
- **Gutter Width**: `24px` between columns
- **Section Padding**: `64px` vertical, `24px` horizontal (default)

### Whitespace Philosophy
Whitespace is treated as a primary design element, not empty space. The layout employs generous margins and padding to establish visual hierarchy and breathing room around content. Strategic use of whitespace creates rhythm and focuses attention on editorial content. Headlines benefit from increased vertical whitespace; body text is surrounded by margin to enhance scanability. Featured cards and callouts leverage whitespace to establish visual prominence and sophistication.

### Border Radius Scale
- **Sharp**: `0px` — navigation bars, full-width elements, modal bodies
- **Subtle**: `4px` — inputs, text fields, small UI components
- **Medium**: `6px` — primary buttons, compact components
- **Rounded**: `8px` — images, media containers
- **Large**: `12px` — modals, overlays
- **Extra Large**: `16px` — featured cards, large containers

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 (Flat) | `box-shadow: none` | Background elements, neutral surfaces, icons |
| 1 (Subtle) | `box-shadow: 0px 2px 8px rgba(0,0,0,0.06)` | Standard cards, containers, default UI elements |
| 2 (Raised) | `box-shadow: 0px 4px 16px rgba(0,0,0,0.12)` | Hovered cards, interactive states, section separations |
| 3 (Floating) | `box-shadow: 0px 8px 24px rgba(0,0,0,0.15)` | Dropdowns, modals, popovers, overlays |
| 4 (Highest) | `box-shadow: 0px 16px 32px rgba(0,0,0,0.20)` | Full-page modals, critical overlays, toasts |

**Shadow Philosophy:** The elevation system employs subtle, naturalistic shadows that reinforce spatial hierarchy without creating visual chaos. Shadows use black at varying opacity levels to suggest distance and interactivity. Most interface elements remain flat or only slightly elevated; significant elevation is reserved for interactive overlays and modal content that demands attention. The shadow scale progresses gradually, allowing smooth transitions between states as users interact with elements.

## 7. Do's and Don'ts

### Do
- Use the serif typeface (TNY Adobe Caslon Pro) exclusively for editorial headings and display text to maintain sophistication
- Maintain high contrast between text and background (minimum 4.5:1 for WCAG AA compliance)
- Employ the full spacing scale consistently; never invent arbitrary spacing values
- Reserve bright accent colors (green, blue, blush) for featured content and important interactive states
- Leverage generous whitespace to create visual rhythm and improve content scannability
- Use the dark navy (`#2B2E35`) as the primary interaction color for buttons and hover states
- Stack the 12-column grid with consistent gutters to maintain alignment across sections
- Apply subtle shadows (`0px 2px 8px`) only to interactive elements or cards requiring visual separation
- Test typography contrast on the deep charcoal backgrounds; ensure minimum 7:1 contrast for body text
- Prioritize the slate gray (`#4A5568`) for secondary text hierarchy and metadata

### Don't
- Never mix serif and sans-serif typefaces within a single heading or text element
- Avoid using the error red (`#DB3334`) for non-critical messaging or visual interest
- Do not apply shadow elevations to full-width navigation or header bars
- Never reduce padding below `8px` for interactive elements; maintain touch-friendly targets
- Avoid introducing new colors outside the established palette; the system is intentionally restrained
- Do not use the off-white (`#F7FAFC`) as a primary text color; it lacks sufficient contrast against light backgrounds
- Never stack more than two levels of visual hierarchy in proximity; use whitespace instead
- Avoid animating shadows or transitions longer than 300ms; keep interactions snappy
- Do not override the 12-column grid system for custom layouts without documented exceptions
- Never apply the serif typeface to UI elements, navigation, or form labels; reserve it for editorial content

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | 320px–767px | Single column layout, 16px padding, larger touch targets (48px minimum), stacked navigation, font sizes increase 1–2px |
| Tablet | 768px–1023px | 2–3 column grid, 24px padding, 6-column flexible grid system, condensed navigation |
| Desktop | 1024px–1439px | Full 12-column grid, 24px padding, max-width 1200px, optimal reading line length (65–75 characters) |
| Large Desktop | 1440px+ | Max-width 1200px centered with side margins, 32px padding, expanded featured content cards |

### Touch Targets
- Minimum interactive element size: `48px × 48px` (touch-friendly)
- Buttons: `44px` minimum height, `48px` preferred
- Navigation items: `16px` padding horizontal, `12px` padding vertical (resulting in ≥44px touch zone)
- Form inputs: `40px` minimum height
- Checkboxes: `24px × 24px` (visual size + padding for touch)
- Links: `16px` padding around text to ensure adequate touch zone

### Collapsing Strategy
- **Navigation**: Header nav collapses to hamburger menu below 768px; drawer slides in from left
- **Grid**: 12 columns collapse to 6 on tablet, 4 on mobile; featured cards stack vertically
- **Typography**: Heading sizes reduce 1–2px on mobile (e.g., 42px → 36px for h1, 28px → 24px for h2)
- **Spacing**: Section padding reduces from `64px` to `48px` on tablet, `32px` on mobile
- **Cards**: Full-width on mobile/tablet with 100% width; desktop width constrained to 2–3 columns
- **Images**: Responsive with `max-width: 100%`, maintain aspect ratio with container queries where supported
- **Forms**: Input fields stack vertically; labels appear above fields at mobile breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- **Primary CTA**: Deep Charcoal (`#2B2E35`) — use for primary buttons, dark text, interactive elements
- **Secondary CTA**: Slate Blue (`#0879BF`) — accent highlights, secondary interactive states
- **Success/Featured**: Vibrant Green (`#38A169`) — positive indicators, featured card backgrounds
- **Error/Alert**: Alert Red (`#DB3334`) — error states, validation failures, critical warnings
- **Neutral Text**: Jet Black (`#000000`) for primary, Slate Gray (`#4A5568`) for secondary, Dark Gray (`#333333`) for tertiary
- **Background**: White (`#FFFFFF`) primary, Off-White (`#F7FAFC`) secondary, Light Gray (`#F5F5F5`) tertiary
- **Header/Footer**: Jet Black (`#000000`) background, White (`#FFFFFF`) text
- **Borders/Dividers**: Medium Gray (`#E5E5E5`) for standard dividers, Pale Gray (`#E2E8F0`) for subtle divisions

### Iteration Guide
1. **All typography must follow the strict hierarchy table**: Display uses TNY Adobe Caslon Pro 42px/700, body uses Inter 14px/400. Never deviate.
2. **Spacing always adheres to the 8px base unit scale**: Use only `4px, 8px, 12px, 16px, 24px, 32px, 48px, 56px, 64px, 116px`. Never introduce arbitrary spacing.
3. **Buttons require 48px minimum touch target**: This includes padding; ensure interactive areas meet mobile usability standards.
4. **Color contrast must exceed 4.5:1 for WCAG AA**: Black text on white passes; verify charcoal text on light backgrounds.
5. **Serif typeface (TNY Adobe Caslon Pro) is reserved exclusively for editorial headings and display text**: All UI, navigation, and form labels use Inter or Graphik sans-serif.
6. **Card border radius is 16px for featured content, 4px for inputs and form elements**: Apply consistently across components.
7. **The grid system is 12 columns on desktop with 24px gutters, collapsing to 6 columns on tablet and 4 on mobile**.
8. **Shadows use the four-level elevation scale**: Level 1 (0px 2px 8px) for cards, Level 2 (0px 4px 16px) for hover states, Level 3+ for overlays only.
9. **Navigation bars and full-width elements use 0px border radius and no shadows**: They are structural, not floating.
10. **The palette is intentionally restrained—only 8 semantic colors plus neutrals**: Resist adding new colors; use combinations of existing palette and opacity variations instead.