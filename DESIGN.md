# DESIGN.md

## Purpose

This file defines the operational design rules for the Nikhil Sharma Executive Knowledge System.

Claude Code must read this file before making any UI, layout, component, typography, motion, or visual change.

This file exists to maintain design-system consistency across the entire project.

The token values defined here are mirrored as machine-readable CSS in `styles/globals.css`. When the Next.js app is scaffolded, `styles/globals.css` becomes the wired source; this file remains the human-readable contract. Keep the two in sync.

### Canonical Source — Visual System v2 (New Yorker Editorial, Decision 032)

**The active visual system is "New Yorker Editorial"** (from `Desktop/FOnts/www.newyorker.com-DESIGN.md`). It **supersedes the Warm Editorial Zine** (Decisions 006/026) — that system, and the cream/Fraunces/mono/flat specifics elsewhere in this file, are retained for history but no longer authoritative where they conflict.

Active system summary (wired in `app/globals.css` + `app/layout.tsx`):

- **Canvas:** white `#ffffff` page; deep charcoal `#2b2e35` footer/dark panels.
- **Masthead (authentic):** white header, the wordmark set in **Irvin** (black), with a 1px **black hairline rule** beneath — the New Yorker signature. Nav in Graphik, uppercase, letter-spaced. (Reverted from the earlier solid-black bar.)
- **Reading texture:** long-form prose, deks/ledes, hero supporting copy, and section intros are set in **Caslon** (serif) — the New Yorker reads serif. Sans (Graphik/Inter) is reserved for rubrics, nav, metadata, labels, and short card copy.
- **Drop cap:** story openers use a Caslon drop cap on the first letter (`.dropcap`).
- **Type (four voices — real licensed New Yorker faces, self-hosted via `next/font/local`):** **Adobe Caslon Pro** for display/hero (`font-editorial-serif`); **Irvin Heading Pro** for H2/H3 section & feature titles (`font-heading-serif`); **Inter** for body (`font-sans`); **Graphik** for navigation/UI labels (`--font-geometric-mono` now resolves to Graphik, so existing label classes reskin without edits).
- **Text:** black `#000000` primary, slate gray `#4a5568` secondary, `#718096` muted.
- **Accent:** slate blue `#0879bf` (links, marks, focus, selection); green `#38a169` / `#5cd687` and sky `#84d1ff` reserved for color-blocked featured cards; blush `#f7c2c2`.
- **Radii:** 6px (buttons/inputs), 16px (featured cards).
- **Elevation:** subtle shadows are now allowed (Level 1 `0 2px 8px /.06`, Level 2 `0 4px 16px /.12`) — this reverses the old flat/no-shadow rule.
- **Token names preserved** (`vellum`, `paper`, `ink`, `carbon`, `ash`, `highlighter-yellow`, etc.) with New Yorker **values**, so components reskinned without per-component edits.

> Note: the New Yorker faces (Adobe Caslon Pro, Irvin Heading Pro, Graphik) are self-hosted in `app/fonts/` and **committed** — the license permits use on personal websites (confirmed by Nikhil). A deeper, pixel-faithful pass (color-blocked featured cards, full elevation on cards, exact 12-column grid) is a follow-up to this v1 reskin.

---

## Project Design Identity

This is not a UX portfolio.

This is an executive knowledge system for an AI-native Product Executive.

The design must communicate:

- Executive clarity
- Calm confidence
- Systems thinking
- Editorial intelligence
- Premium restraint
- Strategic depth
- Evidence-backed credibility
- Long-term usefulness

The design must not communicate:

- Generic portfolio
- Dribbble-style visual polish
- Behance-style case study gallery
- Trendy AI landing page
- Startup SaaS template
- Overdesigned personal brand
- Decorative motion
- Visual noise

---

## Design Thesis

The interface should feel like:

> A warm editorial zine for a product executive — cream paper, sharp serif posters, mono marginalia, flat surfaces, hairline borders, and a single yellow highlighter mark.

The site should feel:

- Sharp, not loud
- Premium, not luxurious
- Editorial, not decorative
- Technical, not cold
- Human, not casual
- Minimal, not empty
- Confident, not self-promotional
- Timeless, not trendy

---

## Core Visual Language

### Theme

Light.

### Canvas

The page canvas is always warm cream:

```css
#f6f6f4
```

Never use pure white as the page background.
Pure white is reserved for card surfaces only.

### Typography

The system uses three voices (upgraded from two — see Decision 024). Mono is now "system seasoning," not the main reading voice.

1. Editorial Serif — `Fraunces` (`--font-editorial-serif`)
   - Used for display, hero headline, major section headlines, belief statements, and editorial pull lines.
   - High-contrast modern editorial serif (resembles Reckless Neue, GT Sectra, PP Editorial New, Fraunces, Instrument Serif).
   - Used at large sizes. Weight 300–400. Tight tracking. Authority through restraint.
2. Sans (Body) — `Hanken Grotesk` (`--font-sans`)
   - The default body voice: body copy, longer descriptions, card summaries, explanatory content.
   - Warm, highly legible neo-grotesque. Used ~14–18px with near-zero tracking and generous line-height.
   - Reason: heavy mono body read as a raw terminal document; sans makes the site premium and readable.
3. Geometric Mono — `IBM Plex Mono` (`--font-geometric-mono`)
   - Used ONLY for system seasoning: labels, eyebrows, section tags, numbering/indices, metadata, evidence tags, field-note IDs, ledger numbers, nav, and button labels.
   - Used mostly at 11–13px. Uppercase labels use slightly positive tracking (≈ +0.06em) for legibility.
   - Do not use mono for paragraph body text.

### Visual Motif

A recurring, restrained motif of **evidence ledger + operating-system grid** ties the page together:

- Every major section carries a two-digit index ("01"–"09") with a short coordinate rule before its eyebrow.
- Proof is expressed as a ledger (strong serif number + quiet sans label + hairline divider), never as SaaS metric cards.
- Cards carry small mono metadata bands (e.g. "CASE FILE 01 · TRANSFORMATION", "VENTURE 01", "WHAT IT PROVES").
- Numbered markers, fine rules, and small annotated labels recur throughout.

No decorative icons, illustrations, gradients, or 3D. The motif must stay visible but quiet.

### Palette

Near-monochrome, warm, olive-sage, and restrained.

Primary colors:

- Vellum: `#f6f6f4`
- Paper: `#ffffff`
- Ink: `#000000`
- Carbon: `#2c2c26`
- Ash: `#d0d0c8`
- Olive Char: `#57584b`
- Lichen: `#6d6e5e`
- Sage: `#979886`
- Moss: `#aaab9c`
- Bone: `#e8e7d9`
- Highlighter Yellow: `#fff347`
- Khaki Olive: `#aaa674`

### Accent Rule

Highlighter Yellow `#fff347` is the only vivid accent.

It may appear as:

- 2–6px strokes
- Small decorative bars
- Small highlight blocks
- Occasional emphasis marks

It must not be used as:

- Large backgrounds
- Main text color
- Filled buttons
- Large cards
- Section backgrounds

Maximum usage:

- 3–4 instances per screen.

---

## Non-Negotiable Design Principles

### 1. Typography first

The brand is carried by typography, spacing, rhythm, and hierarchy.
Do not rely on decorative visuals to create impact.

### 2. Evidence should be visible

Metrics, outcomes, decisions, and transformation points should be easy to scan.
Important numbers should have visual priority.

### 3. White space is a leadership signal

Do not crowd sections.
Senior design should feel calm and composed.

### 4. Motion must clarify

Motion should help users understand structure, progression, or relationships.
Do not add motion for delight alone.

### 5. Components must feel systemic

Every component should feel like part of a coherent operating system.
Avoid one-off visual treatments unless intentionally justified.

### 6. No generic portfolio patterns

Avoid:

- Large mockup galleries
- Floating device frames
- Generic process diagrams
- Overused gradient blobs
- Excessive glassmorphism
- Trendy AI neon effects
- Random 3D objects
- Dribbble-style decorative cards
- Screenshot grids without explanation

### 7. Editorial over decorative

Use:

- Structure
- Headings
- Captions
- Pull quotes
- Notes
- Indexes
- References
- Marginalia
- Decision logs
- Framework diagrams

Think essay, operating manual, archive, and field notes.
Not gallery.

### 8. Every section must answer a question

Before building any UI section, identify the hiring question it answers.

Examples:

- Who is Nikhil?
- Can he build organizations?
- Can he solve complex business problems?
- How does he think?
- Can he create products?
- Can he influence beyond his company?

If the section does not answer a question, do not build it.

---

## Type Scale

Reconciled to the three-voice system and the canonical "Warm Editorial Zine" conventions: **mono** uppercase labels track **positive** (+0.04–0.06em); **sans** body tracks near-zero (≈ −0.01em); **serif** headlines track **negative** (−0.02 to −0.03em).

Eyebrow / Label

- Size: 11–12px
- Line height: 17px
- Letter spacing: +0.06em
- Transform: UPPERCASE
- Font: mono

Caption / Metadata

- Size: 11–12px
- Line height: 17px
- Letter spacing: +0.04em (uppercase) / 0 (sentence case)
- Font: mono

Body Small

- Size: 14px
- Line height: 22px
- Letter spacing: −0.006em
- Font: sans

Body

- Size: 16px
- Line height: 26px
- Letter spacing: −0.011em
- Font: sans

Subheading

- Size: 18–20px
- Line height: 30px
- Letter spacing: −0.01em
- Font: serif (editorial lines) or sans (UI) by context

Heading Small

- Size: 22–24px
- Line height: 1.18
- Letter spacing: −0.01em
- Font: serif

Heading

- Size: 28–32px
- Line height: 1.08
- Letter spacing: −0.02em
- Font: serif

Heading Large

- Size: 44–48px
- Line height: 1.1
- Letter spacing: −0.024em
- Font: serif

Display Small

- Size: 64px
- Line height: 1.0
- Letter spacing: −0.03em
- Font: serif

Display (Hero)

- Size: clamp 2.1rem → 5.5rem (≈ 34–88px)
- Line height: 1.04
- Letter spacing: −0.03em
- Font: serif

Ledger Number

- Size: 22px
- Letter spacing: −0.01em
- Font: serif, tabular-nums

---

## Spacing

Base unit: 4px.

Approved spacing values:

- 4px
- 8px
- 12px
- 16px
- 24px
- 32px
- 64px
- 80px
- 128px

Section gap:

- 80px by default
- 128px for major page transitions

Card padding:

- 24px

Element gap:

- 8px

---

## Radii

- Nav: 3px
- Tags: 3px
- Buttons: 3px
- Cards: 8px
- Product panels: 8px

Do not introduce large rounded SaaS-card radii.

---

## Surfaces

Vellum `#f6f6f4` — Page background.

Paper `#ffffff` — Card surfaces, elevated panels, product mockup backgrounds.

Carbon `#2c2c26` — Dark panels, footer, filled button background.

Bone `#e8e7d9` — Soft tag backgrounds, subtle warm tint zones.

Highlighter `#fff347` — Small accent strokes only.

---

## Elevation

The system is intentionally flat.

Do not use:

- Drop shadows
- Glow effects
- Glass effects
- Floating cards
- Blur-heavy surfaces
- Gradient elevation

Visual hierarchy comes from:

1. 1px hairline borders
2. Color contrast
3. Typography
4. Spacing
5. Section rhythm

---

## Borders

Use 1px hairline borders.

Default border:

```css
#d0d0c8
```

Stronger border:

```css
#57584b
```

Dark panels may use:

```css
#57584b
```

---

## Component Rules

### Top Navigation

- Background: `#f6f6f4`
- Height: approximately 56px
- Border bottom: 1px solid `#d0d0c8`
- No shadow
- Mono text
- 3px radius on interactive elements

### Primary Button

- Background: `#2c2c26`
- Text: `#ffffff`
- Font: mono
- Size: 14px
- Weight: 500
- Padding: 8px 16px
- Radius: 3px
- No shadow
- No gradient

### Secondary Button

- Background: transparent
- Border: 1px solid `#000000`
- Text: `#000000`
- Font: mono
- Size: 14px
- Weight: 500
- Padding: 8px 16px
- Radius: 3px

### Eyebrow Label

- Font: mono
- Size: 12px
- Weight: 500
- Uppercase
- Tracking: -0.8px
- Color: `#6d6e5e`

### Section Header

- Centered
- Serif headline
- Mono subtitle
- Subtitle max width: approximately 560px
- Gap between eyebrow and headline: 16–24px

### Cards

- Background: `#ffffff`
- Border: 1px solid `#d0d0c8`
- Radius: 8px
- Padding: 24px
- No shadow

### Dark Product Panel

- Background: `#2c2c26`
- Border: 1px solid `#57584b`
- Radius: 8px
- Text and UI strokes use `#d0d0c8`, `#aaab9c`, and `#ffffff`

### Olive Tag / Badge

- Background: transparent or `#e8e7d9`
- Border: 1px solid `#aaa674`
- Text: `#6d6e5e`
- Font: mono
- Size: 12px
- Weight: 500
- Padding: 4px 8px
- Radius: 3px

### Accent Bar

- 2–6px horizontal strokes
- Use `#000000` and `#fff347`
- Width range: 40–120px
- Decorative punctuation only
- Use sparingly

---

## Layout

Page max width:

```css
1200px
```

Layout principles:

- Centered max-width page system
- 80px default vertical section rhythm
- Strong hero statement
- Editorial grids
- Metric strips
- Index-like navigation
- Annotated cards
- Transformation timelines
- Decision logs
- Framework diagrams
- Operating manual layouts

Avoid:

- Random card grids
- Equal-weight sections
- Dense walls of text
- Decorative sidebars
- Repeating the same section pattern too often

---

## Motion

Motion should be:

- Subtle
- Calm
- Structural
- Purposeful

Allowed:

- Page entrance
- Section reveal
- Text fade/rise
- Subtle hover states
- Timeline progression
- Accordion expansion
- Metric reveal

Avoid:

- Bounce
- Excessive parallax
- Scroll hijacking
- Cursor gimmicks
- Floating objects
- Overanimated cards
- Motion that slows comprehension

Motion must respect reduced-motion preferences.

---

## Imagery

Imagery should support thinking.

Use images for:

- Evidence
- Diagrams
- Systems
- Process artifacts
- Product context
- Field research context
- Founder/building context

Avoid:

- Decorative stock images
- Generic workspace photography
- Random abstract AI visuals
- Mockups that do not add evidence
- Screenshots without explanation

If an image does not clarify the story, remove it.

---

## Metrics

Metrics are proof, not decoration.

Important metrics include:

- 12M+ monthly active users
- 0→12 design function
- 20+ design hires
- 500+ user interviews
- 50 field studies
- 85% QA/UAT reduction
- 62% fraud reduction
- 28× digital gold growth
- 7× onboarding growth
- 39% fraud-related support handling
- 32% higher average balance
- ₹70L monthly revenue
- 300K+ units sold

Rules:

- Do not exaggerate metrics.
- Do not show unsupported claims.
- Link major metrics to evidence where possible.
- Use consistent formatting.
- Give context when needed.
- Pass Claims Review before publishing major numbers.

### Evidence Ledger Rendering Rule (Decisions 025, 028)

The Executive Snapshot ledger is data-driven. Each metric carries a
`status` (`public_approved | externally_verified | needs_evidence | private | do_not_publish`),
an `externalVerification` (`pending | confirmed`), a `source`, and a
`publicSafeFallback`. Rendering is governed by mode (`lib/evidence.ts` →
`evidenceMode()`):

- **Public** (production build, or `EVIDENCE_MODE=public`): only
  public-approved or externally-verified metrics render their numbers
  (`canPublishNumeric`). Gated metrics show the polished `publicSafeFallback`
  (label-only, deduped) and feel intentional, not like missing data. Internal
  governance language (e.g. "evidence-gated") never appears.
- **Internal / staging** (dev, or `EVIDENCE_MODE=internal`): numbers render
  with a single restrained "evidence review pending" note.

Terminology (Decision 028): **public_approved** = Nikhil-confirmed and safe
to render publicly, but NOT independently supported by an artifact
(`externalVerification: "pending"`). **externally_verified** = an artifact
exists. Never label a public-approved claim "externally verified". The public
renderer keys off public approval, not external verification.

The internal claim marker (`EvidenceGateLabel`) renders `null` in public and
a quiet "Evidence review pending" chip internally — never "evidence-gated".
Set a metric to `public_approved` in `lib/evidence-ledger.ts` (after Nikhil
confirms it in `EVIDENCE/CLAIMS_REGISTER.md`) and its number renders publicly;
set `externalVerification: "confirmed"` only when an artifact exists.

---

## Accessibility

Minimum requirements:

- Semantic HTML
- Proper heading order
- Keyboard navigation
- Visible focus states
- Sufficient contrast
- Alt text for meaningful images
- No text embedded in images
- Responsive from mobile to desktop
- No horizontal overflow
- Reduced-motion support

Accessibility is part of craft.

---

## Responsive Rules

The site must work across:

- Mobile
- Tablet
- Laptop
- Large desktop

Rules:

- Do not design desktop first and compress later.
- Avoid fragile fixed-width layouts.
- Keep text readable on mobile.
- Ensure metric sections remain scannable.
- Avoid horizontal scrolling unless intentionally required.
- Navigation must remain clear at all sizes.

---

## Implementation Rules for Claude Code

Before making UI changes, read:

1. `DESIGN.md`
2. `MASTER_PLAYBOOK.md`
3. `PROGRAM_INDEX.md`
4. Relevant page file in `PAGES/`
5. Relevant system files in `WEBSITE/`

When implementing:

- Do not introduce new visual styles without approval.
- Do not add new dependencies unless necessary.
- Do not redesign unrelated sections.
- Do not change approved copy unless instructed.
- Do not create decorative components.
- Do not use placeholder lorem ipsum.
- Do not invent metrics.
- Do not add fake testimonials.
- Do not add fake company logos.
- Do not create unsupported claims.

After implementing, report:

1. Files changed
2. Design decisions made
3. Assumptions
4. Deviations from `DESIGN.md`
5. Recommended follow-up

---

## Design Review Questions

Before shipping any visual change, ask:

1. Does this reinforce Nikhil as an AI-native Product Executive?
2. Does this feel like an executive knowledge system, not a portfolio?
3. Does this section teach, prove, clarify, or demonstrate judgment?
4. Is the hierarchy clear in 5 seconds?
5. Is the writing doing enough work?
6. Is the design too decorative?
7. Is the motion purposeful?
8. Would this still feel credible five years from now?
9. Does it connect to the larger knowledge system?
10. Would a VP of Design take this seriously?

---

## Card Modules (upgraded)

Cards are editorial modules, not generic boxes. Rules:

- Give cards internal structure and asymmetry: a mono metadata band (label / index / category), a serif title, a sans summary, and — where relevant — an annotated outcome block with an evidence tag.
- Transformation cards are **case files / dossiers**: header band ("CASE FILE NN · TRANSFORMATION") → serif title → sans summary → "WHAT IT PROVES" + evidence tag → action footer ("Read transformation →").
- Capability cards are **operating-map cells**: index + "CAPABILITY" tag → serif title → sans copy, in a seamless hairline grid.
- Titles dominate; descriptions are muted (olive-char); labels are mono lichen.
- No icons, no heavy shadows, no SaaS-style cards, no equal-weight everything.

## Interaction Rules

Motion must feel expensive, not playful. Allowed:

- Subtle hover tone shifts only: border `ash → olive-char`, background `→ bone/50`, link color `→ ink`. Transition ≈ 0.16s ease.
- Refined, visible `:focus-visible` outlines (2px ink).

Not allowed: bounce, parallax, cursor gimmicks, overanimated cards, scroll hijacking, flashy transitions, or any motion that reads like an agency portfolio.

## Mobile Rules

Mobile is its own art-direction pass, not a compressed desktop.

- Hero: serif headline scales via clamp (floor ≈ 2.1rem); supporting copy is lighter sans; the two CTAs stack vertically with Contact as a quiet text link below; the belief/system-index rail moves below the CTAs as a clean panel.
- Ledger and grids fall to single column with hairline-divided rows.
- Section indices and labels remain legible; cards keep breathing room; no horizontal overflow.

## Final Rule

When in doubt, remove decoration and increase clarity.

The strongest version of this site should feel inevitable, not impressive.
