# CASES_REVIEW_NOTES.md

## Purpose

This file reviews the Cases section shell.

---

## Status

Shell ready. Full case content pending from Nikhil.

---

## Why This Section Exists

- A private-review simulation flagged that the site — strong on operating models and transformation narrative — lacks visible product/UX problem-solving evidence for senior design-leader reviewers. Cases is the structural answer: a public home for Director-level case reports (business problem → journey diagnosis → strategic bet → shipped experience → metric movement).
- It ships as a shell deliberately: the structure is public now, but no case names, metrics, artifacts, or product context are invented — those come from Nikhil, then pass evidence review, then individual case pages get built.

---

## Screenshot Files

All captured from the production/public build:

- `01-cases-index-desktop.png` (1440×1753)
- `02-cases-index-mobile.png` (390×2759)
- `03-home-with-cases-desktop.png` (1440×9118)
- `04-home-with-cases-mobile.png` (390×13933)

---

## Self-Assessment

### Does this answer the design-director concern structurally?

Notes:

- Yes, structurally. A reviewer now sees a named, navigable place where product/UX craft evidence will live, plus a 16-part framework that makes the *intent* legible (journey diagnosis, before/after experience, metric movement, artifacts, role). What it cannot do yet is show actual craft — that requires real case content and remains the top open item from the private-beta review ("no public design artifact").

### Does it avoid inventing unfinished case-study content?

Notes:

- Yes. The four slots contain only status ("Content pending") and process language about what will be added after evidence intake. No narrative, no domains, no outcomes, no timeframes, no metrics — verified by scan (no 28×/62%/500+/7×, no domain guesses).

### Does it avoid naming cases before Nikhil provides them?

Notes:

- Yes. Slots are "Case 01–04". No Digital Gold, Fraud Prevention, Safe Pay, Onboarding, or any assumed case name appears anywhere in the section (scanned). No individual `/cases/*` routes exist (verified 404), and no `/product-journeys` or `/experience-outcomes` routes were created.

### Does it feel senior, not junior-portfolio?

Notes:

- Yes. No image placeholders, no gray boxes, no mockups — the shell is typographic: hairline-bordered cards, mono status labels, serif headings, and the numbered framework as the visual centerpiece. The editorial note explicitly rejects the junior format ("business problem first… not just how screens were produced").

### Does it use the Director-level case structure?

Notes:

- Yes — the exact 16-part structure as specified (Executive Summary → What I'd Do Differently), rendered as a numbered two-column list under "Future case structure", with the "written after evidence intake" note. Stored once in `lib/cases.ts` (`CASE_STRUCTURE`) so future case pages can consume the same source.

### Does it create a clear path toward real UX/product cases?

Notes:

- Yes. The pipeline is explicit: Nikhil supplies case names + evidence → intake → individual `/cases/[slug]` pages built on the published structure. The data model (`CaseSlot`) is deliberately minimal and will be replaced by a full case model at that point.

### Mobile Quality

Notes:

- Clean. Cards stack single-column, the 16-part framework collapses to one column, no horizontal overflow on `/cases` or the homepage at 390w (programmatically checked). Homepage grew to ~13.9k px with the new section — long but consistent with the rest of the site.

---

## Potential Concerns

- Four "Content pending" cards is honest but visibly empty — acceptable for a private/soft-launch audience, but this section should not stay a shell for long once the site is shared more broadly. If cases will take months, consider reducing to 2–3 slots.
- The homepage now has 10 sections; Cases pushed Operating Manual → 06 through Contact → 10. Renumbering was applied consistently, but the homepage is getting long — worth watching.
- "Director-level" appears in public copy (title + editorial note). It reads as intentional positioning; flag to Nikhil in case he prefers the seniority claim implicit rather than stated.

---

## Recommended Next Step

Nikhil should provide the actual case names, business context, user problem, journey diagnosis, strategic bet, key decisions, artifacts, metrics, and narrative before individual case pages are created.

---

## Cases Wording Polish (Decision 048)

Public self-grading language removed while keeping the senior structure intact: the index title is now "Product and UX cases built around business problems, design decisions, and measurable outcomes."; "Director-level UX/product case" → "senior UX/product case"; "Built for Director-level case reports" → "Built for senior product case reports"; "junior portfolio format" → "generic portfolio format"; homepage section title → "Product and UX cases, in preparation." with "senior product and UX cases" in the intro. The load-bearing ideas are preserved verbatim (business problem first → user journey → strategic bet → experience and outcome evidence; "changed behavior, not just how screens were produced"). Verified on the production build: no "Director-level" or "junior portfolio" in public DOM; no metrics, case names, or internal language. Screenshots: `05-cases-wording-polish-desktop.png`, `06-home-cases-wording-polish-desktop.png`. (The concern flagged above about "Director-level" in public copy is now resolved.)

---

## Case 01 · Digital Gold Growth Draft (Decision 050)

### What Was Added

- `/cases/digital-gold-growth`: the first real case page, built on the published 16-part structure with the supplied copy verbatim. New `CaseStudy` model + `digitalGoldCase` data in `lib/cases.ts`; SSG route at `app/cases/[slug]/page.tsx`. Header carries the full meta grid (status Draft in progress, Financial services, 3 months, Product Design Head, 2 designers, 5 developers, 1 PM, 28× metric signal) plus the restrained preparation note. Layout: serif case title, mono labels, hairline meta grid, 3 decision cards, a compact 6-row tradeoff matrix, bone-tinted pending blocks for artifacts and metric wiring. Distinct from story pages (meta-dense header, matrix, pending blocks) while staying in the ledger vocabulary.
- Cases index: Case 01 now links to the page with title, summary, metric signal, and Read case affordance; slots 02-04 unchanged and unnamed. Homepage preview: Case 01 links with its title; other slots stay pending. Story shell cross-link added (Digital Gold transformation foot: "Related case: Digital Gold Growth"); the case links back ("Related transformation: Digital Gold Growth").

### Repetition Review

- Each section keeps its assigned job (summary condenses; business = what the bank needed; user = felt hesitation; diagnosis = where the journey broke; bet = the reframing; decisions/before/after/shipped = concrete change; tradeoffs = costs; lessons = reusable principle). The trust-at-commitment idea appears in full only in the summary and diagnosis; elsewhere it is referenced, not restated.

### Evidence Placeholders

- Metric Movement shows the approved 28× headline signal and an explicit "to wire in" list (baseline, final number, timeframe definition, metric definition, measurement source, attribution model, comparison type). Nothing invented.

### Artifact Placeholders

- Experience Before carries an "Artifact pending" block; Artifacts section lists available-to-prepare vs to-wire items with the confidentiality note. No fake screenshots, no gray boxes.

### Public Safety

- Production scan clean: no claim IDs, claims register, gated, needs evidence, external verification language; no em/en dashes; no employer branding; 28× is the only metric (already public-approved for the homepage, Decision 046). Placeholder routes 404 (`/cases/fraud-prevention`, `/cases/safe-pay`). No overflow desktop or mobile.

### Remaining Missing Inputs

- Baseline
- Final number
- Metric definition
- Measurement source
- Attribution model
- Old journey screenshots / flow
- New journey screenshots / flow
- Funnel snapshot
- SIP landing-page annotation

### Recommended Next Step

Wire in evidence and artifacts after Nikhil provides the missing inputs.

### Build note

- Recurring `.next` corruption traced to the managed dev preview auto-respawning on port 3000 and writing into the same dist dir as production builds. Fixed permanently: `next.config.mjs` now honors `NEXT_DIST_DIR`; QA builds run with `NEXT_DIST_DIR=.next-prod PORT=3100`, fully isolated (`.next-prod/` gitignored).
