# OPERATING_MANUAL_REVIEW_NOTES.md

## Purpose

This file records visual and editorial review notes for the Operating Manual shell.

---

## Status

Ready for Human Review

---

## Screenshot Files

- 01-manual-index-desktop.png
- 02-manual-index-mobile.png
- 03-manual-entry-desktop.png
- 04-manual-entry-mobile.png

Representative entry: `/operating-manual/ai-workflow`.

---

## Self-Assessment

### Does it feel like an operating manual, not a blog?

Notes:

- Yes. There are no dates, no author bylines, no "posts" — entries are numbered (01–05), categorized (Org System / Product Infrastructure / AI-native Delivery / Quality Ritual / Trust System), and structured as systems (principles → operating model → quality gates → anti-patterns), not articles.
- The anti-frame note on the index ("This is not a blog. It is a growing manual of repeatable systems extracted from transformation work.") sets the contract explicitly.
- The operating-model block — a hairline 2-column grid with mono labels (Inputs / Rituals / Decision rules / Outputs / Ownership / Review cadence) — is the most "field manual" element on the page and differentiates these pages from the narrative transformation stories.

### Does it extend the executive knowledge system?

Notes:

- Yes. It reuses the existing visual language (mono meta-labels, hairline dividers, serif section headings, numbered section rails, the two-cell audience/status band from story pages) rather than inventing a new one.
- The manual is data-driven from `lib/operating-manual.ts`, mirroring the `lib/transformations.ts` pattern — same architecture, new content type.
- Each entry cites its source transformations ("From: …" on cards; Related transformations on pages), which makes the manual read as *extracted from* the transformation work rather than as free-floating advice.

### Does each manual entry feel reusable?

Notes:

- Mostly. Principles, quality gates, and anti-patterns are written as portable rules (no company names in the rule text), so they read as systems someone else could adopt.
- The operating-model outlines are intentionally shells — enough structure to be credible, not enough to be a full guide. The future-depth note manages that expectation explicitly on every page.
- Design Reviews and Stakeholder Management are the most immediately reusable; AI Workflow is the most distinctive.

### Does it avoid unsupported claims?

Notes:

- Yes. No metrics appear anywhere in the manual — no 85%, no 0→20, no 28×, no interview counts, no fraud/onboarding numbers. Nothing is marked verified.
- The AI Workflow entry restates the story's *rules* (production-ready ≠ production-owned by AI; engineering owns production quality) without restating its numbers.
- Vault and LANE are not named in manual pages; concepts stay at the public-safe altitude already approved in the stories.

### Does it connect cleanly to transformation stories?

Notes:

- Yes. Mapping implemented as specified: Organization Design → Story 1; Design Systems → Stories 1+2; AI Workflow → Story 2; Design Reviews → Story 1; Stakeholder Management → Stories 1+2. All links resolve to live routes.
- Reverse links (stories → manual entries) do not exist yet; stories still list manual *areas* as plain text. Acceptable for shell v1; worth wiring when manual pages get full prose.

### Mobile Quality

Notes:

- Index (390w): cards stack single-column, masthead and hero scale correctly, no overflow (~2,429px tall — compact).
- Entry (390w): operating-model grid collapses to a single column, numbered rails hold alignment, audience/status band stacks (~4,107px tall — a manageable read, far shorter than story pages).

---

## Potential Concerns

- The homepage Operating Manual preview lists 8 topics but only 5 have live entries; the remaining 3 (Hiring, Research, Decision Making) currently link to the manual index. Fine for shell v1, but the preview and the manual should converge as entries are added.
- "Shell v1" is honest but appears in several places (index eyebrow area, cards, entry status). If it reads as too unfinished to a first-time visitor, consider softening to "In development" in public copy while keeping Shell v1 internally.
- All five entries share an identical section skeleton. That is the point (it is a manual), but as full prose lands, entries should earn some individual texture so the manual does not feel templated.
- Entry-page thesis is set in serif at reading size; on very long theses (Stakeholder Management) it wraps to three lines on desktop — acceptable, monitor as content grows.

---

## Recommended Next Step

Do not write full manual prose until the shell is reviewed. Have Nikhil review the four screenshots and the five entry pages, confirm the category labels and the 8-topic homepage preview treatment, then choose the first entry to expand into a full operating guide (AI Workflow is the strongest candidate — it compounds the Story 2 narrative).

---

## Operating Manual Polish Pass

Polished screenshots: `05-manual-polished-index-desktop.png`, `06-manual-polished-index-mobile.png`, `07-manual-polished-entry-desktop.png`, `08-manual-polished-entry-mobile.png` (representative entry: `/operating-manual/ai-workflow`). Logged as Decision **039**.

### Changes Made

- **Public status wording:** all rendered "Shell v1" replaced with **"In development"** — entry data status, index cards, entry-page status cell, and the index eyebrow ("Field guide · In development"). "Shell v1" survives only as an internal type option in `lib/operating-manual.ts` (documented as not-for-UI); it appears nowhere in rendered HTML (verified by grep against the live pages).
- **Homepage preview (Option 1):** trimmed from 8 topics to the **5 live manual entries**, all linking to real routes. The three planned topics (Hiring, Research, Decision Making) were removed rather than marked "Planned" — cleanest option, no fake links, and the preview now converges exactly with the manual index. Also dropped the stray right hairline on the unpaired fifth row cell.
- **Index/entry microcopy:** reviewed against the "serious executive field guide" bar — no further changes needed. The anti-frame line ("This is not a blog…") is retained verbatim; the entry structure (What this solves → Core principles → Operating model → Quality gates → Anti-patterns → Related transformations → future depth note) is unchanged and stays shell-level.

### Public Language Check

- "Shell v1" — absent from all rendered UI. ✓
- "In development" — honest, public-facing, does not imply completion. The future-depth note still explicitly says each entry "is intentionally in shell form." ✓
- No course/blog/placeholder vocabulary introduced. ✓

### Homepage Preview Check

- 5 rows, all live routes, no dead anchors, no "Planned" placeholders. The preview intro's broader topic sentence (hiring, research, decision-making…) still describes the manual's ambition — acceptable as forward-looking prose, revisit if it reads as over-promise.

### Evidence Safeguards

- No metrics anywhere in manual pages: no 85%, 0→20, 12M+, 1B+, 28×, 500+ interviews, fraud or onboarding metrics. Nothing marked externally verified. Vault/LANE still not named in manual pages. The manual remains concept/system-led.

### Remaining Risks

- "In development" appears on every card and entry; once the first full entry ships, statuses should differentiate (e.g. "Field guide v1" vs "In development") so the manual shows progress.
- The homepage preview intro sentence promises more topics than the 5 live entries; fine while the manual is visibly in development, but tighten it if entries stall.
- No reverse links from transformation stories to manual entries yet (stories still list manual areas as plain text) — wire when full prose lands.

### Recommended Next Step

Have Nikhil sign off on the polished shell (screenshots 05–08), then expand the first entry into a full operating guide — **AI Workflow** remains the strongest candidate. Do not start Digital Gold, Thinking, or Building pages before that sign-off.
