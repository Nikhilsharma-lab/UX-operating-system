# HOMEPAGE_IA_REVIEW.md

## Purpose

This file reviews the homepage IA cleanup: Executive Snapshot, Selected Outcomes, Operating Thesis, and Capabilities.

---

## Changes Made

- Reclassified the identity grid as **Executive Snapshot** (title, subtitle, tightened card copy per spec) and removed the metric ledger from inside it.
- Created **Selected Outcomes** as a compact metric strip (`components/home/selected-outcomes.tsx`), rendered through the existing evidence machinery (`evidenceMode` + `resolveLedger`), so public gating, fallbacks, and the internal-only pending note are preserved unchanged.
- Aligned ledger label copy to the spec (values, statuses, claim IDs, and sources untouched): 0→20, 12M+, 1B+, 85%, 28× labels updated; 62% and 500+ already matched.
- Renamed the belief section's label to **Operating Thesis** (rubric above the thesis line) and replaced the right-column list with the seven "what each system does" lines. Left-side prose untouched.
- Removed the standalone **Capabilities** section from the homepage (preferred decision) and removed its nav/footer links; no fallback Capability Map was needed since navigation was cleanly updated.
- Split the former library band: **Cases** is now a compact standalone section placed before Transformations; **Operating Manual** is a standalone section after Transformations. Content in both is unchanged.
- Homepage order updated in `app/page.tsx`.

---

## New Homepage Order

1. Hero
2. Executive Snapshot (`#executive-snapshot`)
3. Selected Outcomes (`#selected-outcomes`)
4. Operating Thesis (`#belief`)
5. Cases (`#cases`)
6. Transformations (`#transformations`)
7. Operating Manual (`#operating-manual`)
8. Thinking (`#thinking`)
9. Ventures / Building (`#building`)
10. Evolution (`#evolution`)
11. Contact (`#contact`)
12. Footer

Verified identical on desktop (1440) and mobile (390) against the production build.

---

## Executive Snapshot Review

- Section title "Executive Snapshot" with the optional subtitle as the dek.
- Five cards with the specified copy: Leadership (two lines, "consumer, merchant, and internal"), Organization (replaced list-like sentence), Scale (unchanged), Outcomes (reordered per spec, ends "AI-assisted implementation speed"), Building (two lines, unchanged).
- Editorial grid style kept (hairline cells, Leadership cell spans two columns). No metrics added.

---

## Selected Outcomes Review

- Compact metric strip: serif ledger numbers (22px Caslon, the documented ledger-number role) over restrained one-line sans labels, hairline rows, 2/3/4 columns responsive.
- All seven allowed metrics are `public_approved` in `lib/evidence-ledger.ts`, so all seven numbers render in public mode: 0→20, 12M+, 1B+, 85%, 28×, 62%, 500+.
- Rendering stays data-driven: any future non-approved metric renders its public-safe fallback label; the pending note renders in internal mode only.
- No explanation paragraphs, no verification wording, no internal language.

---

## Capabilities Decision

**Removed standalone Capabilities from the homepage.** Its jobs are covered: Executive Snapshot shows leadership scope, Selected Outcomes shows proof, Cases show product/UX problem-solving, Transformations show org/system leadership, the Operating Manual shows reusable capability systems. Header and footer "Capabilities" links were removed (they pointed at the deleted `/#capabilities` anchor; no route existed, so no route changed). The fallback Capability Map was not needed. `components/home/capabilities-section.tsx` deleted.

Note for the strategy owner: `PAGES/HOME.md` (locked v1) still lists Capabilities in nav and section architecture; that document needs a strategy-owner update to reflect this decision. Not edited here since it is ChatGPT-owned.

---

## Operating Thesis Review

- Label "Operating Thesis" added above the thesis headline (Neutraface rubric voice).
- Placement: after Selected Outcomes, before Cases (recommended placement).
- Right column now reads: Hiring creates the team. / Research changes decisions. / Reviews protect quality. / Design systems reduce drift. / AI workflows compress translation. / Trust compounds execution. / Culture is what repeats.
- Left prose and drop-cap treatment untouched; bone band retained.

---

## Public Safety Check

Production public HTML (`/`) scanned; zero occurrences of: internal evidence note, claims register, CLAIM-, gated, needs evidence, external verification pending, externally verified, Shell v1, Page Space. Zero em/en dashes (Decision 049 audit holds).

One deliberate near-term phrase remains: "In evidence review: three further case reports join the archive as artifacts clear review." — this is designed public editorial copy (Decision 053, "design as forthcoming"), not internal governance vocabulary, and is not on the banned list. Flagging for awareness in case the strategy owner wants different public phrasing.

Metric display audit: the strip is the only standalone metric display. Remaining mentions are inside the spec's own Snapshot prose (0→20, 12M+, 1B+) and the existing Transformations proves-line (28×), which were left untouched per "do not change claims."

---

## Mobile Review

- Order identical to desktop; no horizontal overflow at 390px (production build, headless-verified).
- Strip falls to two columns; Snapshot cards stack single-column with Leadership first; thesis rail stacks below prose.

---

## Remaining Issues

- `PAGES/HOME.md` (locked strategy v1) is now out of date on nav + section architecture (Capabilities, section order). Needs a strategy-owner revision.
- `PROGRAM_INDEX.md` decision-log mirror lags DECISION_LOG.md (entries 037–055 not mirrored); 056 was added to both, but a full mirror sync is outstanding.
- The Cases section is intentionally compact (one live case). When Case 02 ships, the two-column layout absorbs it without redesign.

---

## Recommended Next Step

Have the strategy owner update `PAGES/HOME.md` to v2 (new section architecture + nav), then run `/impeccable critique /` for a scored pass on the new IA before the next content milestone (Digital Gold evidence wiring).
