# CHANGELOG.md

All notable changes to the Nikhil Sharma Executive Knowledge System are recorded here.

The format is loosely based on Keep a Changelog. Dates are absolute.

---

## [Unreleased]

### Added

- 2026-07-05 — Typography scale v3 (Decision 052): re-tokenized the entire type system against measured newyorker.com values. Role classes (`.t-display` → `.t-caption`) in `app/globals.css` are now the single source of truth; ~40 arbitrary `text-[Npx]` component values and every `font-light` (faux 300 weight) purged; support-text floor raised 13→15px; deks unified at Caslon 21/28; in-article section headings 21→28px; hero capped 86→64px; page H1s capped at 42px w400; paragraph rhythm 24px. Regression guard added: `npm run check:type` (scripts/check-type.mjs, 12 computed-style probes on 3 key pages against the production build). `DESIGN.md` Type Scale section rewritten with the measured reference table.

- 2026-06-28 — Initial documentation architecture for the Executive Knowledge System.
  - Root files: `README.md`, `PROGRAM_INDEX.md`, `MASTER_PLAYBOOK.md`, `AI_COLLABORATION_MODEL.md`, `DESIGN.md`, `DECISION_LOG.md`, `CHANGELOG.md`, `BACKLOG.md`, `ANTI_GOALS.md`, `VOCABULARY.md`, `CONTENT_GRAPH.md`.
  - Folder system: `FOUNDATION/`, `WEBSITE/`, `PAGES/`, `TRANSFORMATION_STORIES/`, `OPERATING_SYSTEM/`, `THINKING/`, `FRAMEWORKS/`, `BUILDING/`, `WRITING/`, `MEDIA/`, `GROWTH/`, `QUALITY/`, `RELEASES/`.
  - Drift-protection systems: `EVIDENCE/`, `CAREER_ASSETS/`, `PROMPTS/`, `AUDITS/`, `GOVERNANCE/`, `FUTURE/`.
  - `styles/globals.css` — Tailwind v4 theme tokens, `:root` variables, and base/utility layers (not yet wired; awaiting app scaffold).
  - Decision Log seeded with decisions 001–008.

### Notes

- This release is documentation scaffolding only. No UI, components, or packages were created.
