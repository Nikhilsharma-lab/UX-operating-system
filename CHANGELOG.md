# CHANGELOG.md

All notable changes to the Nikhil Sharma Executive Knowledge System are recorded here.

The format is loosely based on Keep a Changelog. Dates are absolute.

---

## [Unreleased]

### Added

- 2026-07-06 — Cases IA prototype (Decision 061): `/cases` rebuilt as a library of four big product systems with nested placeholder case cards (10 total); new `app/cases/[slug]/[caseSlug]` placeholder case landing pages showing the 13-section case-report shell (all "Content pending"); homepage Cases preview switched to high-level big-project cards linking only to `/cases`. Nested data model in `lib/cases.ts` (`caseProjects`/`CaseCard`/`CASE_SHELL`); `caseSlots`/`CASE_STRUCTURE` removed. Existing `/cases/digital-gold-growth` route preserved but no longer featured. No real names, metrics, or confidential content; public-safety scan clean. Screenshots + review in `WEBSITE/REVIEW/cases-ia/`.

- 2026-07-06 — Executive Snapshot to four cards (Decision 060): removed the Outcomes card (redundant with the adjacent Selected Outcomes strip), fixing the cramped 5-column grid — cards go 262→332px wide and headings fit one line. Card text rebuilt to the New Yorker "Today's Mix" hierarchy (`.t-mix-hed` Caslon 22/28 near-black + `.t-mix-dek` Caslon 17/24 #333, measured 1:1 from a local crawl), subheadings aligned on one baseline. Leadership heading tightened to "Built the design function".

- 2026-07-06 — Page shell widened to 1472px (Decision 059): single-token change (`--spacing-page-max`), sitewide via `.page-shell`; reading measures unaffected (element-capped); hero fold-fit and snapshot baseline verified at 1600×900. Executive Snapshot plates now use the five owner-supplied photographs (Decision 058 amendment).

- 2026-07-05 — Executive Snapshot editorial gallery (Decision 058): the five snapshot cards became open staggered columns per the owner's reference — rubric + short extractive heading above each placeholder plate, plate bottoms flush on a shared baseline, descriptions below; centered section header (`align` prop on SectionShell); `portrait`/`tall` aspects added to EditorialArt; five `home.snapshot.*-plate` slots registered in ART-DIRECTION.md.

- 2026-07-05 — Masthead matched to hero (Decision 057): header flipped to the hero's near-black field with white Irvin wordmark and muted-paper Graphik nav; mobile panel matched; DESIGN.md masthead rule updated (supersedes the white masthead of 032/033).

- 2026-07-05 — Homepage IA cleanup (Decision 056): identity grid reclassified as Executive Snapshot (ledger removed from inside it, card copy tightened); Selected Outcomes added as a compact evidence-gated metric strip (seven public-approved metrics); standalone Capabilities removed from homepage + nav; belief section relabeled Operating Thesis with new right-column lines; library band split into standalone Cases (before Transformations) and Operating Manual (after) sections. New components `selected-outcomes.tsx`, `cases-section.tsx`, `manual-section.tsx`; removed `capabilities-section.tsx`, `library-band.tsx`. Screenshots + review in `WEBSITE/REVIEW/homepage-ia/`.

- 2026-07-05 — Thinking section decoupled (Decision 055): Thinking left the library band (whose sticky case rail was scrolling into it) and became its own full-viewport section — bone tint band, user-supplied sticker-album illustration as the left plate (`public/art/thinking-album.jpeg`), centered Irvin title and Caslon paragraph right; essay seeds shipped first as one flowing paragraph, then as a hairline-river list, and landed on the fiction-page grammar (same day): rubric + Irvin title above a maximized plate with a byline-position dek beneath (left), drop-cap Caslon intro + seed river under an accent rubric header (right). Library band is now Operating Manual + case rail only. New component `thinking-section.tsx`. Guards pass (lint, build, check:type, zero-dash audit).

- 2026-07-05 — Hero feature opener (Decision 054): hero image replaced with the user-supplied tile-grid face illustration (`public/art/hero-face-grid.jpeg`); hero recomposed on a near-black field in the New Yorker feature-title style — centered Irvin headline (new `t-display-feature` role class) and centered white Caslon dek; hero eyebrow and plate caption removed. Type guard (`check:type`) passes; DESIGN.md and ART-DIRECTION.md synced.

- 2026-07-05 — Homepage recomposition (Decision 053): magazine front-page grammar. White Irvin masthead shipped (black hairline rule; dark bar retired sitewide); hero recomposed as a white magazine lead with the doorway illustration as a captioned art plate; numbered section eyebrows retired in favor of the rubric voice (indices only where sequence is real); Cases + Operating Manual + Thinking merged into a river+rail library band with forthcoming content designed as intentional editorial objects (no more "Content pending" cards or "Image slot" panels on the homepage); transformations re-hierarchized as lead story + two secondary; ventures given illustrated plates; evolution compacted to a timeline strip; calm structural motion layer added (hero load sequence + below-fold entrances, reduced-motion safe). Components: `library-band.tsx` and `reveal.tsx` added; `cases-preview.tsx`, `operating-manual-preview.tsx`, `thinking-preview.tsx` removed. Guards pass: lint, production build, `check:type`.

- 2026-07-05 — Typography scale v3 (Decision 052): re-tokenized the entire type system against measured newyorker.com values. Role classes (`.t-display` → `.t-caption`) in `app/globals.css` are now the single source of truth; ~40 arbitrary `text-[Npx]` component values and every `font-light` (faux 300 weight) purged; support-text floor raised 13→15px; deks unified at Caslon 21/28; in-article section headings 21→28px; hero capped 86→64px; page H1s capped at 42px w400; paragraph rhythm 24px. Regression guard added: `npm run check:type` (scripts/check-type.mjs, 12 computed-style probes on 3 key pages against the production build). `DESIGN.md` Type Scale section rewritten with the measured reference table.

- 2026-06-28 — Initial documentation architecture for the Executive Knowledge System.
  - Root files: `README.md`, `PROGRAM_INDEX.md`, `MASTER_PLAYBOOK.md`, `AI_COLLABORATION_MODEL.md`, `DESIGN.md`, `DECISION_LOG.md`, `CHANGELOG.md`, `BACKLOG.md`, `ANTI_GOALS.md`, `VOCABULARY.md`, `CONTENT_GRAPH.md`.
  - Folder system: `FOUNDATION/`, `WEBSITE/`, `PAGES/`, `TRANSFORMATION_STORIES/`, `OPERATING_SYSTEM/`, `THINKING/`, `FRAMEWORKS/`, `BUILDING/`, `WRITING/`, `MEDIA/`, `GROWTH/`, `QUALITY/`, `RELEASES/`.
  - Drift-protection systems: `EVIDENCE/`, `CAREER_ASSETS/`, `PROMPTS/`, `AUDITS/`, `GOVERNANCE/`, `FUTURE/`.
  - `styles/globals.css` — Tailwind v4 theme tokens, `:root` variables, and base/utility layers (not yet wired; awaiting app scaffold).
  - Decision Log seeded with decisions 001–008.

### Notes

- This release is documentation scaffolding only. No UI, components, or packages were created.
