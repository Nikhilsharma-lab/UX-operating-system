# EDITORIAL_REDESIGN_REVIEW.md

## Purpose

This file reviews the editorial publication redesign and abstract painterly image architecture.

---

## Outcome

- The site now carries a complete painterly image architecture: 18 art slots across every page type, each rendering an intentional, deterministic in-code SVG composition (not a gray box), each with a matching ChatGPT-ready generation prompt in `ART-DIRECTION.md`. The text-dump feeling is broken by image-led openers on every index and long-form page, strip art pacing the homepage departments, and spot art at the case's natural breaks. Copy, claims, metrics, statuses, and evidence language are byte-for-byte untouched (git diff: 112 insertions, 1 import-line deletion, zero changes under `lib/`).
- The existing editorial foundation (real licensed literary faces, hairline rules, ledger furniture, kickers, numbered sections, decision cards, section indexes, drop caps, statuses-as-page-furniture) already delivered most of the publication grammar this task specifies; this pass added the missing layer — art direction — rather than re-skinning what worked.

---

## Type System

- Display serif: Adobe Caslon Pro (`--font-editorial-serif`), Irvin Heading Pro for big section display (`--font-heading-serif`), Irvin Text for headlines (`--font-headline-serif`) — all pre-existing, local, licensed.
- Text serif: Caslon (story prose, standfirsts, pull-notes) — pre-existing.
- UI font: Graphik (`--font-geometric-mono` token) + Neutraface New Yorker Book for kickers (`--font-rubric`) — pre-existing.
- Mono: IBM Plex Mono fallback chain (new `--font-mono` variable).
- Local font-family references: four new publication aliases added in `@theme` — `--font-display`, `--font-text`, `--font-ui`, `--font-mono` — pointing at the already-wired local faces with safe fallbacks (`"Libre Caslon Text", Georgia, serif` / `"Source Serif 4"` / Helvetica chain / `ui-monospace`). Nikhil can repoint each by editing the first name.
- Font files committed: **none added by this pass** (verified: no .woff/.woff2/.ttf/.otf in the diff). The faces used were already in the repo from Decision 032 with Nikhil-confirmed licensing.
- Scale notes: existing modular scale retained (t-caption → t-display); reading measure on long-form pages is `max-w-[680px]` ≈ 70ch — within the 65–75ch target.

---

## Layout Grammar

- Image-led openers on every index (`/transformations`, `/operating-manual`, `/cases`) and every long-form page (3 stories, 3 guides + 2 shell entries, 1 case), each with "Plate" caption furniture (mono label + hairline).
- Homepage departments (Transformations / Cases / Manual) each open with a thin art strip — publication pacing between sections.
- Already-present grammar confirmed and retained: hairline rules, kickers, numbered ledger eyebrows (kept per Decision 049's 1A ruling), byline-style meta grids, status furniture, dossier cards, two-step radius, no shadows outside the two subtle elevations, no glassmorphism/gradients anywhere.

---

## Painterly Image Architecture

- `components/editorial/editorial-art.tsx`: five variants — hero-painting (ambiguity→structure), transformation-plate (strata + rising path + ritual marks), diagram-painting (handmade schematic with governance gate), journey-painting (path, threshold, hesitation loop, commitment point), spot (wash + gesture + ticks).
- Deterministic: compositions derive from an FNV hash of the slotId feeding a tiny PRNG — unique per slot, identical across renders and builds. No canvas, no remote assets, no raster files, no runtime randomness.
- Painterly quality: irregular blobs, wobbling strokes, hatch marks, and an feTurbulence + feDisplacementMap filter giving brush-edge roughness; warm paper ground with faint grain; accent used once per composition.

---

## Slot Inventory

18 slots, all verified rendering in the production DOM (`data-art-slot`):

| Slot | Variant | Aspect |
|---|---|---|
| home.hero.editorial-opener | hero-painting | wide |
| home.transformations.strip | transformation-plate | strip |
| home.cases.strip | journey-painting | strip |
| home.manual.strip | diagram-painting | strip |
| transformations.index.opener | transformation-plate | wide |
| transformation.building-design-organization.opener | transformation-plate | plate |
| transformation.ai-native-product-development.opener | transformation-plate | plate |
| transformation.digital-gold-growth.opener | transformation-plate | plate |
| manual.index.opener | diagram-painting | wide |
| manual.organization-design.opener | diagram-painting | wide |
| manual.design-systems.opener | diagram-painting | wide |
| manual.ai-workflow.opener | diagram-painting | wide |
| manual.design-reviews.placeholder-art | spot | strip |
| manual.stakeholder-management.placeholder-art | spot | strip |
| cases.index.opener | journey-painting | wide |
| case.digital-gold-growth.opener | journey-painting | wide |
| case.digital-gold-growth.journey-break | spot | strip |
| case.digital-gold-growth.tradeoff-break | spot | strip |

---

## ART-DIRECTION.md Check

- Present at repo root. All 18 slots documented with slot ID, route, component, aspect + export dimensions, current placeholder, final art type, palette, composition, mood, do/don't, a ready-to-run ChatGPT prompt, and replacement instructions. Spec ↔ implementation verified 1:1 against the rendered DOM. Also lists the three real-asset ImageSlot groups explicitly as outside the painterly system.

---

## ChatGPT Image Generation Readiness

- Every prompt follows the required structure ("Create an original abstract painterly editorial illustration on warm paper…") with per-slot concept metaphors. Scanned: no "New Yorker", no publication names, no cartoon references, no illustrator names (living or dead), no Airtel/bank references, no dashboards, no real people, no stock-photo language. A shared replacement procedure heads the file.

---

## Public Safety Check

- Production scan across all 13 routes: no internal evidence language (claim IDs, claims register, gated, needs evidence, external verification), no em/en dashes, no "Shell v1", no "Page Space", no "New Yorker" in DOM. All homepage metrics render unchanged (28×, 500+, 62%, 0→20, 85%, 12M+, 1B+). No employer branding. No raster images generated. No trade dress copied — the art system is original abstract composition.

---

## Copy Integrity Check

- `git diff` confirms zero modifications under `lib/` (all story/guide/case copy lives there) and zero string edits in pages — the pass is purely additive (art components, captions, CSS variables). Captions are new page furniture, not rewrites of existing copy.

---

## Page Reviews

### Homepage
- Hero → wide editorial opener painting → proof ledger → departments each opened by an art strip. Reads as a front page rather than a stacked document. Length grew to ~10.8k px desktop (was ~9.6k) — the art adds height but also pacing.

### Transformations
- Index: opener plate above the two field-report cards; archive framing intact. Story pages: per-slug opener plates between the meta band and the prose; drop caps and section furniture unchanged; artifact ImageSlot band retained beneath the plate.

### Operating Manual
- Index: diagram-painting opener above the entry cards. Guides: per-slug diagram openers before the section index; the section index + block grammar still carries the long pages. Shell entries get quiet spot strips instead of full openers — proportionate to their status.

### Cases
- Index: journey opener above the case cards. Digital Gold case: journey opener under the meta grid, spot breaks inside Journey Diagnosis and Tradeoffs — the two natural pause points; pending-artifact blocks unchanged and still honest.

---

## Mobile Review

- 390px: zero horizontal overflow on all captured pages (programmatic check). SVG art scales fluidly (viewBox), captions wrap, strips stay legible. Homepage mobile ~15.4k px and case mobile ~10.4k px — long, consistent with the site's reading-first character.

---

## Remaining Issues

- The five SVG variants are placeholders, not finals: at plate size they read as intentional sketches, but the gouache texture and warmth the prompts describe only arrives with the ChatGPT paintings. Generate `home.hero.editorial-opener` first — it sets the register for everything else.
- The olive wash in the placeholders reads slightly gray at low opacity on some displays; the final paintings should carry the muted olive more confidently.
- Homepage now has 11 content moments + 4 art slots; if Nikhil wants a shorter front page, the Thinking/Building preview sections are the candidates to compress — flagged, not changed (copy-preservation rule).
- Copy-length flag (per task §0): no layouts required shorter copy; nothing to flag beyond homepage total length above.

---

## Recommended Next Step

Nikhil reviews screenshots 01–09, then generates the final paintings in ChatGPT starting with `home.hero.editorial-opener` (the register-setter), followed by the three index openers, then story/guide/case plates, then strips and spots. Replace slots one at a time per the procedure in `ART-DIRECTION.md`.
