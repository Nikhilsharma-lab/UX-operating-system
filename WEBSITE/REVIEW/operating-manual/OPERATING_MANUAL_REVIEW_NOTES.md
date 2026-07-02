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
