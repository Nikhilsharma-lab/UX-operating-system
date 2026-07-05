# ART-DIRECTION.md

Art direction for the painterly abstract image architecture (Decision 051).

Every art slot on the site currently renders a deterministic in-code SVG
placeholder via `components/editorial/editorial-art.tsx` (find any slot in the
DOM by `data-art-slot="<slot id>"`). Nikhil generates the final raster
paintings in ChatGPT using the prompts below, then replaces slots one at a
time. Spec and implementation match 1:1 — 18 slots.

**Shared rules for every final image**

- Original abstract painterly editorial illustration. Warm paper field,
  ink-and-gouache texture, loose hand-drawn geometry, slightly imperfect brush
  edges, quiet negative space, literary-magazine composition.
- Palette: cream `#f6f4ef`, ink black `#231f20`, muted olive, ash gray, and
  **one** restrained accent (site accent is `#0066ff`; use sparingly, once per
  image).
- No text. No logos. No brand references. No real people (symbolic, anonymous
  silhouettes only if essential). No product UI. No stock-photo realism. No
  corporate vector style. Do not reference any publication, cartoon tradition,
  or named illustrator in the prompt or output.
- Export: PNG or high-quality JPG at 2× the layout size listed per slot.
  Suggested path: `public/art/<slot-id-with-dashes>.png`.

**Replacement procedure (same for every slot)**

1. Generate the image in ChatGPT with the slot's prompt.
2. Export at the recommended dimensions; optimize (~<400 KB).
3. Place the file under `public/art/`.
4. Ask Claude Code to "replace art slot `<slot id>` with `/art/<file>`" — the
   `EditorialArt` component will be swapped for a `next/image` render with the
   same caption furniture. Do not delete the placeholder component; other
   slots still use it.

---

## Slot ID: home.hero.editorial-opener — REPLACED (real asset shipped)

**Status:** this slot no longer renders a placeholder. The hero now uses the
user-supplied illustration `public/art/hero-doorway.png` (1672×941) as a
full-bleed poster background with poster-yellow headline and parchment dek
(`components/home/hero-section.tsx`). The prompt below is retained for
reference / future regeneration only.

## Original spec: home.hero.editorial-opener

- **Route:** `/`
- **Component:** `app/page.tsx` (band between hero and Executive Snapshot)
- **Aspect ratio:** wide, 1360×560 (export 2720×1120)
- **Current placeholder:** `hero-painting` SVG (gestural ink resolving into a hand-drawn grid)
- **Final art type:** Hero Editorial Painting
- **Palette:** cream field, ink black, muted olive wash, ash, single blue accent point
- **Composition:** left half loose and ambiguous (overlapping washes, crossing ink gestures); right half resolving into ordered structure (imperfect grid of hand-ruled cells); one small accent mark where ambiguity becomes order
- **Mood:** confident, calm, systems-thinking, quietly witty
- **Do:** brushy paper texture, asymmetry, generous negative space
- **Don't:** literal dashboards, arrows with labels, people at desks, gradients

**ChatGPT image prompt:**
Create an original abstract painterly editorial illustration on warm paper. The composition should suggest ambiguity becoming structure: loose overlapping ink gestures and a soft gouache wash on the left gradually resolving into an ordered, hand-ruled grid of small rectangles on the right, with a single small blue accent mark at the point of resolution. Use restrained ink, gouache-like texture, imperfect brush edges, quiet negative space, and a literary magazine composition. Palette: cream, ink black, muted olive, ash, and one restrained blue accent. No text, no logos, no brand references, no real people, no product UI, no stock-photo realism, no corporate vector style.

**Replacement instructions:** export 2720×1120, save as `public/art/home-hero-editorial-opener.png`, replace slot `home.hero.editorial-opener`.

---

## Slot ID: home.transformations.strip

- **Route:** `/` (Transformations section)
- **Component:** `components/home/featured-transformations.tsx`
- **Aspect ratio:** strip, 1360×240 (export 2720×480)
- **Current placeholder:** `transformation-plate` SVG (strata + rising path)
- **Final art type:** Spot Painting (strip format)
- **Palette:** cream, ink, olive; accent optional
- **Composition:** a long horizontal band of layered strata with a thin rising path crossing them; small circular marks along the path
- **Mood:** momentum without triumphalism

**ChatGPT image prompt:**
Create an original abstract painterly editorial illustration on warm paper in a long horizontal strip format. The composition should suggest gradual organizational change through three or four soft layered strata crossed by one thin rising hand-drawn path with small circular marks along it. Use restrained ink, gouache-like texture, imperfect brush edges, quiet negative space, and a literary magazine composition. Palette: cream, ink black, muted olive, ash, and at most one restrained blue accent. No text, no logos, no brand references, no real people, no product UI, no stock-photo realism, no corporate vector style.

**Replacement instructions:** export 2720×480, save as `public/art/home-transformations-strip.png`, replace slot `home.transformations.strip`.

---

## Slot ID: home.cases.strip

- **Route:** `/` (Cases section)
- **Component:** `components/home/cases-preview.tsx`
- **Aspect ratio:** strip, 1360×240 (export 2720×480)
- **Current placeholder:** `journey-painting` SVG (path, threshold, commitment dot)
- **Final art type:** Spot Painting (strip format)
- **Palette:** cream, ink, olive, one blue accent
- **Composition:** a single meandering path moving left to right, hesitating in a small loop at a vertical threshold line, then continuing to a filled accent endpoint
- **Mood:** hesitation resolved into commitment

**ChatGPT image prompt:**
Create an original abstract painterly editorial illustration on warm paper in a long horizontal strip format. The composition should suggest a user journey: one hand-drawn ink path traveling left to right, briefly looping in hesitation at a thin vertical threshold line, then continuing with confidence to end in a single small filled blue circle. Use restrained ink, gouache-like texture, imperfect brush edges, quiet negative space, and a literary magazine composition. Palette: cream, ink black, muted olive, ash, and one restrained blue accent. No text, no logos, no brand references, no real people, no product UI, no stock-photo realism, no corporate vector style.

**Replacement instructions:** export 2720×480, save as `public/art/home-cases-strip.png`, replace slot `home.cases.strip`.

---

## Slot ID: home.manual.strip

- **Route:** `/` (Operating Manual section)
- **Component:** `components/home/operating-manual-preview.tsx`
- **Aspect ratio:** strip, 1360×240 (export 2720×480)
- **Current placeholder:** `diagram-painting` SVG (nodes, flows, gate)
- **Final art type:** Spot Painting (strip format)
- **Palette:** cream, ink, olive
- **Composition:** a handmade schematic band: faint vertical rules, five or six irregular nodes joined by wobbling connector lines, one dashed vertical "gate" line
- **Mood:** technical but human

**ChatGPT image prompt:**
Create an original abstract painterly editorial illustration on warm paper in a long horizontal strip format. The composition should suggest an operating system drawn by hand: faint vertical guide rules, five or six irregular ink nodes connected by slightly wobbly lines, and one dashed vertical gate line the flow must pass through. Use restrained ink, gouache-like texture, imperfect brush edges, quiet negative space, and a literary magazine composition. Palette: cream, ink black, muted olive, ash, and at most one restrained blue accent. No text, no logos, no brand references, no real people, no product UI, no stock-photo realism, no corporate vector style.

**Replacement instructions:** export 2720×480, save as `public/art/home-manual-strip.png`, replace slot `home.manual.strip`.

---

## Slot ID: transformations.index.opener

- **Route:** `/transformations`
- **Component:** `app/transformations/page.tsx`
- **Aspect ratio:** wide, 1360×560 (export 2720×1120)
- **Current placeholder:** `transformation-plate` SVG
- **Final art type:** Transformation Plate
- **Palette:** cream, ink, olive, single accent
- **Composition:** an archive of change: several soft strata fields stacked like sediment, a rising path cutting across them, small ritual marks (circles, ticks) clustered at intervals
- **Mood:** patient, cumulative, earned

**ChatGPT image prompt:**
Create an original abstract painterly editorial illustration on warm paper. The composition should suggest organizational transformation as sediment: four or five soft horizontal gouache strata stacked like geological layers, crossed by one rising hand-drawn path, with small clusters of circular ritual marks where the path meets each layer, ending in a single blue accent mark near the top. Use restrained ink, gouache-like texture, imperfect brush edges, quiet negative space, and a literary magazine composition. Palette: cream, ink black, muted olive, ash, and one restrained blue accent. No text, no logos, no brand references, no real people, no product UI, no stock-photo realism, no corporate vector style.

**Replacement instructions:** export 2720×1120, save as `public/art/transformations-index-opener.png`, replace slot `transformations.index.opener`.

---

## Slot ID: transformation.building-design-organization.opener

- **Route:** `/transformations/building-design-organization`
- **Component:** `app/transformations/[slug]/page.tsx` (renders per slug)
- **Aspect ratio:** plate, 1360×680 (export 2720×1360)
- **Current placeholder:** `transformation-plate` SVG (seeded per slug)
- **Final art type:** Transformation Plate
- **Palette:** cream, ink, olive, single accent
- **Composition:** scattered marks (a loose diaspora of small strokes) gradually gathering into four ordered clusters connected by faint lines; a slow rising path beneath — teams, pods, and rituals implied, never literal
- **Mood:** trust built gradually
- **Don't:** office scenes, figures at whiteboards, org-chart boxes with labels

**ChatGPT image prompt:**
Create an original abstract painterly editorial illustration on warm paper. The composition should suggest scattered effort becoming an organized capability: many small loose ink marks on the left slowly gathering into four calm, ordered clusters on the right, joined by faint hand-drawn connecting lines over a soft olive wash, with one small blue accent mark inside the most settled cluster. Use restrained ink, gouache-like texture, imperfect brush edges, quiet negative space, and a literary magazine composition. Palette: cream, ink black, muted olive, ash, and one restrained blue accent. No text, no logos, no brand references, no real people, no product UI, no stock-photo realism, no corporate vector style.

**Replacement instructions:** export 2720×1360, save as `public/art/transformation-building-design-organization-opener.png`, replace slot `transformation.building-design-organization.opener`.

---

## Slot ID: transformation.ai-native-product-development.opener

- **Route:** `/transformations/ai-native-product-development`
- **Component:** `app/transformations/[slug]/page.tsx`
- **Aspect ratio:** plate, 1360×680 (export 2720×1360)
- **Current placeholder:** `transformation-plate` SVG (seeded per slug)
- **Final art type:** Transformation Plate
- **Palette:** cream, ink, olive, single accent
- **Composition:** two hands of the same drawing: a loose sketch-like field on one side and its tighter, machine-steadied echo on the other, joined by a continuous line that passes through a small review gate; human judgment implied as the gate
- **Mood:** acceleration with ownership intact
- **Don't:** robots, circuit boards, brains, code glyphs

**ChatGPT image prompt:**
Create an original abstract painterly editorial illustration on warm paper. The composition should suggest human intent amplified without being replaced: a loose, sketchy ink passage on the left continued by a steadier, more regular version of the same forms on the right, the two joined by one continuous line that passes through a small hand-drawn gate at the center, with a single blue accent at the gate. Use restrained ink, gouache-like texture, imperfect brush edges, quiet negative space, and a literary magazine composition. Palette: cream, ink black, muted olive, ash, and one restrained blue accent. No text, no logos, no brand references, no real people, no product UI, no stock-photo realism, no corporate vector style.

**Replacement instructions:** export 2720×1360, save as `public/art/transformation-ai-native-product-development-opener.png`, replace slot `transformation.ai-native-product-development.opener`.

---

## Slot ID: transformation.digital-gold-growth.opener

- **Route:** `/transformations/digital-gold-growth`
- **Component:** `app/transformations/[slug]/page.tsx`
- **Aspect ratio:** plate, 1360×680 (export 2720×1360)
- **Current placeholder:** `transformation-plate` SVG (seeded per slug)
- **Final art type:** Transformation Plate
- **Palette:** cream, ink, muted olive, one warm-gold-leaning accent permitted for this slot only (or the blue accent, Nikhil's choice)
- **Composition:** many tiny repeated marks accumulating over time into one substantial form: drops becoming a body; habit as accumulation
- **Mood:** patience compounding

**ChatGPT image prompt:**
Create an original abstract painterly editorial illustration on warm paper. The composition should suggest small repeated actions accumulating into something substantial: a rhythm of many tiny identical ink marks arriving from the left, layering and settling into one dense, calm gouache form on the right, with a single restrained accent mark at its center. Use restrained ink, gouache-like texture, imperfect brush edges, quiet negative space, and a literary magazine composition. Palette: cream, ink black, muted olive, ash, and one restrained accent. No text, no logos, no brand references, no real people, no product UI, no stock-photo realism, no corporate vector style.

**Replacement instructions:** export 2720×1360, save as `public/art/transformation-digital-gold-growth-opener.png`, replace slot `transformation.digital-gold-growth.opener`.

---

## Slot ID: manual.index.opener

- **Route:** `/operating-manual`
- **Component:** `app/operating-manual/page.tsx`
- **Aspect ratio:** wide, 1360×560 (export 2720×1120)
- **Current placeholder:** `diagram-painting` SVG
- **Final art type:** Operating Manual Diagram-Painting
- **Palette:** cream, ink, olive, single accent
- **Composition:** a table-of-contents-like field of small handmade schematic vignettes (a grid corner, a node pair, a gate, a loop), arranged with archival calm
- **Mood:** a field manual's opening spread

**ChatGPT image prompt:**
Create an original abstract painterly editorial illustration on warm paper. The composition should suggest the opening spread of a handmade field manual: a calm arrangement of small schematic vignettes drawn in ink — a corner of a grid, a pair of connected nodes, a small dashed gate, a feedback loop — spaced generously like specimens on an archival sheet, with one small blue accent dot. Use restrained ink, gouache-like texture, imperfect brush edges, quiet negative space, and a literary magazine composition. Palette: cream, ink black, muted olive, ash, and one restrained blue accent. No text, no logos, no brand references, no real people, no product UI, no stock-photo realism, no corporate vector style.

**Replacement instructions:** export 2720×1120, save as `public/art/manual-index-opener.png`, replace slot `manual.index.opener`.

---

## Slot ID: manual.organization-design.opener

- **Route:** `/operating-manual/organization-design`
- **Component:** `app/operating-manual/[slug]/page.tsx` (guides render this slot per slug)
- **Aspect ratio:** wide, 1360×560 (export 2720×1120)
- **Current placeholder:** `diagram-painting` SVG (seeded per slug)
- **Final art type:** Operating Manual Diagram-Painting
- **Palette:** cream, ink, olive, single accent
- **Composition:** ownership as territory: softly washed regions with hand-drawn boundaries, small nodes anchored inside each region, thin lines of trust crossing between regions through marked crossings
- **Mood:** governance without bureaucracy

**ChatGPT image prompt:**
Create an original abstract painterly editorial illustration on warm paper. The composition should suggest organizational ownership as mapped territory: three or four softly washed gouache regions with imperfect hand-drawn boundaries, small ink nodes anchored inside each region, and thin connecting lines that cross the boundaries only at small marked crossings, one of them accented in blue. Use restrained ink, gouache-like texture, imperfect brush edges, quiet negative space, and a literary magazine composition. Palette: cream, ink black, muted olive, ash, and one restrained blue accent. No text, no logos, no brand references, no real people, no product UI, no stock-photo realism, no corporate vector style.

**Replacement instructions:** export 2720×1120, save as `public/art/manual-organization-design-opener.png`, replace slot `manual.organization-design.opener`.

---

## Slot ID: manual.design-systems.opener

- **Route:** `/operating-manual/design-systems`
- **Component:** `app/operating-manual/[slug]/page.tsx`
- **Aspect ratio:** wide, 1360×560 (export 2720×1120)
- **Current placeholder:** `diagram-painting` SVG (seeded per slug)
- **Final art type:** Operating Manual Diagram-Painting
- **Palette:** cream, ink, olive, single accent
- **Composition:** repetition made trustworthy: a field of near-identical hand-drawn components in imperfect rows, each with slight human variance, one row visibly aligned by a thin governance rule beneath it
- **Mood:** consistency as craft

**ChatGPT image prompt:**
Create an original abstract painterly editorial illustration on warm paper. The composition should suggest a governed design system: rows of small, nearly identical hand-drawn ink rectangles with slight human variation, one row sitting neatly on a thin ruled baseline that the others drift from, and a single blue accent marking the aligned row. Use restrained ink, gouache-like texture, imperfect brush edges, quiet negative space, and a literary magazine composition. Palette: cream, ink black, muted olive, ash, and one restrained blue accent. No text, no logos, no brand references, no real people, no product UI, no stock-photo realism, no corporate vector style.

**Replacement instructions:** export 2720×1120, save as `public/art/manual-design-systems-opener.png`, replace slot `manual.design-systems.opener`.

---

## Slot ID: manual.ai-workflow.opener

- **Route:** `/operating-manual/ai-workflow`
- **Component:** `app/operating-manual/[slug]/page.tsx`
- **Aspect ratio:** wide, 1360×560 (export 2720×1120)
- **Current placeholder:** `diagram-painting` SVG (seeded per slug)
- **Final art type:** Operating Manual Diagram-Painting
- **Palette:** cream, ink, olive, single accent
- **Composition:** a generate-review-ship loop drawn by hand: a circular flow with stations, one station enlarged as the human review gate; the loop's line confident but visibly hand-pulled
- **Mood:** speed under judgment

**ChatGPT image prompt:**
Create an original abstract painterly editorial illustration on warm paper. The composition should suggest a disciplined loop: one continuous hand-drawn ink circuit passing through several small stations, with one station enlarged as a gate where the line pauses before continuing, marked with a single blue accent. Use restrained ink, gouache-like texture, imperfect brush edges, quiet negative space, and a literary magazine composition. Palette: cream, ink black, muted olive, ash, and one restrained blue accent. No text, no logos, no brand references, no real people, no product UI, no stock-photo realism, no corporate vector style.

**Replacement instructions:** export 2720×1120, save as `public/art/manual-ai-workflow-opener.png`, replace slot `manual.ai-workflow.opener`.

---

## Slot ID: manual.design-reviews.placeholder-art

- **Route:** `/operating-manual/design-reviews`
- **Component:** `app/operating-manual/[slug]/page.tsx` (shell entries render spot art)
- **Aspect ratio:** strip, 1360×240 (export 2720×480)
- **Current placeholder:** `spot` SVG
- **Final art type:** Spot Painting
- **Palette:** cream, ink, olive
- **Composition:** a quiet critique mark: one form drawn twice, the second slightly better; a small tick beside it
- **Mood:** improvement through attention

**ChatGPT image prompt:**
Create an original abstract painterly editorial illustration on warm paper in a small horizontal vignette format. The composition should suggest quiet critique: a single hand-drawn ink form repeated twice side by side, the second version calmer and better resolved, with one small approving tick mark beside it and a soft olive wash behind. Use restrained ink, gouache-like texture, imperfect brush edges, quiet negative space, and a literary magazine composition. Palette: cream, ink black, muted olive, ash. No text, no logos, no brand references, no real people, no product UI, no stock-photo realism, no corporate vector style.

**Replacement instructions:** export 2720×480, save as `public/art/manual-design-reviews-placeholder-art.png`, replace slot `manual.design-reviews.placeholder-art`.

---

## Slot ID: manual.stakeholder-management.placeholder-art

- **Route:** `/operating-manual/stakeholder-management`
- **Component:** `app/operating-manual/[slug]/page.tsx`
- **Aspect ratio:** strip, 1360×240 (export 2720×480)
- **Current placeholder:** `spot` SVG
- **Final art type:** Spot Painting
- **Palette:** cream, ink, olive
- **Composition:** two separate ink forms leaning toward each other with a faint shared wash between them; trust as overlapping ground
- **Mood:** alignment earned, not performed

**ChatGPT image prompt:**
Create an original abstract painterly editorial illustration on warm paper in a small horizontal vignette format. The composition should suggest trust between two parties: two distinct hand-drawn ink forms inclined gently toward one another, sharing a single soft olive wash where their ground overlaps. Use restrained ink, gouache-like texture, imperfect brush edges, quiet negative space, and a literary magazine composition. Palette: cream, ink black, muted olive, ash. No text, no logos, no brand references, no real people, no product UI, no stock-photo realism, no corporate vector style.

**Replacement instructions:** export 2720×480, save as `public/art/manual-stakeholder-management-placeholder-art.png`, replace slot `manual.stakeholder-management.placeholder-art`.

---

## Slot ID: cases.index.opener

- **Route:** `/cases`
- **Component:** `app/cases/page.tsx`
- **Aspect ratio:** wide, 1360×560 (export 2720×1120)
- **Current placeholder:** `journey-painting` SVG
- **Final art type:** Case Journey Painting
- **Palette:** cream, ink, olive, single accent
- **Composition:** several faint journey paths crossing a shared field, most fading, one continuing through a threshold to a filled endpoint; an archive of journeys implied
- **Mood:** evidence over anecdote

**ChatGPT image prompt:**
Create an original abstract painterly editorial illustration on warm paper. The composition should suggest an archive of user journeys: several faint hand-drawn ink paths crossing a shared field, most dissolving midway, one continuing decisively through a thin vertical threshold line to end in a single filled blue endpoint. Use restrained ink, gouache-like texture, imperfect brush edges, quiet negative space, and a literary magazine composition. Palette: cream, ink black, muted olive, ash, and one restrained blue accent. No text, no logos, no brand references, no real people, no product UI, no stock-photo realism, no corporate vector style.

**Replacement instructions:** export 2720×1120, save as `public/art/cases-index-opener.png`, replace slot `cases.index.opener`.

---

## Slot ID: case.digital-gold-growth.opener

- **Route:** `/cases/digital-gold-growth`
- **Component:** `app/cases/[slug]/page.tsx`
- **Aspect ratio:** wide, 1360×560 (export 2720×1120)
- **Current placeholder:** `journey-painting` SVG (seeded per slug)
- **Final art type:** Case Journey Painting
- **Palette:** cream, ink, olive, single accent
- **Composition:** the case's thesis in abstract: a crowd of marks approaching a threshold, hesitating (small loop), then a lighter stepping-stone rhythm of tiny repeated marks carrying the path across to a settled endpoint — commitment made small and repeatable
- **Mood:** psychological weight lifted

**ChatGPT image prompt:**
Create an original abstract painterly editorial illustration on warm paper. The composition should suggest hesitation at the moment of commitment resolved by making the first step small: a loose crowd of ink marks gathering before a thin vertical threshold line, one path looping in hesitation, then crossing via a rhythm of tiny repeated stepping-stone marks that carry it to a calm filled blue endpoint. Use restrained ink, gouache-like texture, imperfect brush edges, quiet negative space, and a literary magazine composition. Palette: cream, ink black, muted olive, ash, and one restrained blue accent. No text, no logos, no brand references, no real people, no product UI, no stock-photo realism, no corporate vector style.

**Replacement instructions:** export 2720×1120, save as `public/art/case-digital-gold-growth-opener.png`, replace slot `case.digital-gold-growth.opener`.

---

## Slot ID: case.digital-gold-growth.journey-break

- **Route:** `/cases/digital-gold-growth` (inside §04 Journey Diagnosis)
- **Component:** `app/cases/[slug]/page.tsx`
- **Aspect ratio:** strip, 1360×240 (export 2720×480)
- **Current placeholder:** `spot` SVG
- **Final art type:** Spot Painting
- **Palette:** cream, ink, olive
- **Composition:** the diagnosis in miniature: a path stopping just short of a line, weight pooling behind it
- **Mood:** the held breath before commitment

**ChatGPT image prompt:**
Create an original abstract painterly editorial illustration on warm paper in a small horizontal vignette format. The composition should suggest a journey pausing just before a threshold: one hand-drawn ink path stopping short of a thin vertical line, with soft gouache weight pooling behind the stopping point. Use restrained ink, gouache-like texture, imperfect brush edges, quiet negative space, and a literary magazine composition. Palette: cream, ink black, muted olive, ash. No text, no logos, no brand references, no real people, no product UI, no stock-photo realism, no corporate vector style.

**Replacement instructions:** export 2720×480, save as `public/art/case-digital-gold-growth-journey-break.png`, replace slot `case.digital-gold-growth.journey-break`.

---

## Slot ID: case.digital-gold-growth.tradeoff-break

- **Route:** `/cases/digital-gold-growth` (inside §10 Tradeoffs)
- **Component:** `app/cases/[slug]/page.tsx`
- **Aspect ratio:** strip, 1360×240 (export 2720×480)
- **Current placeholder:** `spot` SVG
- **Final art type:** Spot Painting
- **Palette:** cream, ink, olive
- **Composition:** a balance held by hand: two unequal ink masses on a slightly tilted hand-drawn beam, the tilt accepted rather than corrected
- **Mood:** a deliberate trade, not a loss

**ChatGPT image prompt:**
Create an original abstract painterly editorial illustration on warm paper in a small horizontal vignette format. The composition should suggest an accepted tradeoff: two unequal soft ink masses resting on a slightly tilted hand-drawn beam, the tilt clearly deliberate and at rest, with a small olive wash beneath the heavier side. Use restrained ink, gouache-like texture, imperfect brush edges, quiet negative space, and a literary magazine composition. Palette: cream, ink black, muted olive, ash. No text, no logos, no brand references, no real people, no product UI, no stock-photo realism, no corporate vector style.

**Replacement instructions:** export 2720×480, save as `public/art/case-digital-gold-growth-tradeoff-break.png`, replace slot `case.digital-gold-growth.tradeoff-break`.

---

## Not in the painterly system (real assets, tracked separately)

These existing `ImageSlot` frames await **real, approved assets**, not
generated paintings; they are intentionally outside this art system:

- Hero marginalia portrait (`components/home/hero-section.tsx`) — real editorial photograph of Nikhil
- Building section LANE / Svenklas slots — real public-safe product imagery
- Story artifact bands + case artifact frames — sanitized real artifacts after evidence review
