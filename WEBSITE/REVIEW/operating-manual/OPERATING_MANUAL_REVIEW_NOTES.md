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

---

## AI Workflow Operating Guide v1

Screenshots: `09-ai-workflow-guide-desktop.png` (1440×8616), `10-ai-workflow-guide-mobile.png` (390×11823), `11-manual-index-after-ai-guide-desktop.png` (1440×1434). Logged as Decision **040**.

### Changes Made

- **Data model:** added an optional `guide` structure to `ManualEntry` (`ManualGuide`: supportingLine, whenToUse, whenNotToUse, principles-with-notes, inputs, steps with purpose/owner/output, owner cards, gate groups, metrics + framing note, governance, phases, leadership questions, derived-from note, future additions) and extended `ManualStatus` with `"Operating guide v1"`. Static TS only — no CMS, no MDX. Shell entries are untouched and still render the shell layout.
- **AI Workflow content:** expanded from shell to a 15-section operating guide — What this solves (8 items) → When to use → When not to use → 8 core principles each with a one-line explanation → 13-item inputs checklist → an 11-step operating model (each step with Purpose / Owner / Output) → 4-role ownership model (Design / Engineering / Product / QA) → 3-stage quality gates (before generation / before engineering review / before production) → 10 anti-patterns → 11 metrics to track (explicitly no benchmark numbers) → 7 governance rules → 5-phase implementation sequence → 8 leadership questions → related transformations with the derived-from note → future additions.
- **Page rendering:** the entry template now branches — guide layout when `entry.guide` exists, shell layout otherwise. Guide layout reuses existing patterns only: hairline lists, mono labels, bordered step cards (same grammar as story decision cards), hairline owner/gate grids, phase blocks. No images, no icons, no new visual language.
- **Status:** AI Workflow shows "Operating guide v1" on the entry page and the index card; the other four entries remain "In development". The shell "intentionally in shell form" note no longer renders on AI Workflow (replaced by the Future Additions section); homepage preview unchanged (visually consistent).

### Reusability Review

- The guide reads as "how to build the system again," not as a retelling of Story 2: no company context, no narrative beats, no outcomes claims — rules, checklists, owners, gates, and sequence throughout.
- When-to-use / when-not-to-use is the strongest reusability signal — it scopes the model honestly (messy design systems, regulated logic, and review-bypass ambitions are all disqualifiers).
- The ownership model and quality gates are directly liftable by another team; the leadership questions double as interview-defense material.
- Tool references stay generic (Figma, MCP) — no internal tool names; the guide is stack-portable.

### Evidence Safeguards

- None of the gated/forbidden figures appear: no 85%, no 1 day → 1 hour, no 20 designers, no 0→20, 12M+, 1B+, 28×, 500+ interviews, fraud or onboarding metrics. Verified by grep against the rendered HTML.
- The Metrics to Track section explicitly states targets depend on context and "no benchmark numbers are implied here."
- Nothing marked externally verified; Vault/LANE and internal tooling not named ("Page Space" stays out; MCP referenced generically).
- Allowed concept references only: AI compresses repetitive translation, engineering ownership intact, human review required, AI exposes weak design systems, hygiene before scaling.

### Visual Review

- **Desktop:** long page (~8,600px) but structured — bordered step cards, two-column checklists (inputs, metrics), 2×2 ownership grid, 3-column gate grid, and phase rows break up the text. Reads as a field manual, clearly distinct from the serif-prose story pages.
- **Mobile (390w):** all grids collapse to single column cleanly; step cards and phase blocks stack; no overflow (~11,800px tall — long but navigable through numbered sections).
- **Index:** AI Workflow card now shows "Operating guide v1" against four "In development" cards — visible progress without redesign.

### Remaining Risks

- Page length: 15 sections is at the upper bound. If reading fatigue shows up in review, a sticky in-page section index would help — deferred to keep this task scoped.
- The index eyebrow still reads "Field guide · In development"; accurate for the manual overall, but worth revisiting once 2–3 entries are full guides.
- The 8 core principles partially overlap the anti-patterns (inverse phrasings). Intentional (principles teach, anti-patterns warn), but watch for redundancy as other entries expand.
- Story 2 does not yet link back to this guide; wiring story → manual links is a natural follow-up.

### Recommended Next Step

Have Nikhil review the guide at `/operating-manual/ai-workflow` (screenshots 09–10) for sign-off. Then either (a) wire reverse links from Story 2 to this guide, or (b) expand the second manual entry (Design Systems is the natural next — it feeds the AI Workflow's readiness requirements). Do not start Digital Gold, Thinking, or Building pages.
