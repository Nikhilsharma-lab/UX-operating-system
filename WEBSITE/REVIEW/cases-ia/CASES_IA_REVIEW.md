# CASES_IA_REVIEW.md

## Purpose

This file reviews the new Cases IA prototype: Big Project → Subproject → Case Study.

---

## Status

IA prototype ready. Real project names, subproject names, case names, and content pending from Nikhil.

---

## Structure Implemented

- `/cases` is a three-level case-archive **library**: Big Project → Subproject → Case Study.
- Four big projects, six subprojects, eleven placeholder case studies:
  - Big Project 01 → Subproject 01 (3 cases), Subproject 02 (2 cases)
  - Big Project 02 → Subproject 01 (2 cases), Subproject 02 (1 case)
  - Big Project 03 → Subproject 01 (2 cases)
  - Big Project 04 → Subproject 01 (1 case)
- Nesting is expressed editorially: a strong ink top-rule opens each big project; its subprojects sit in an indented band (1px left hairline + left padding) with `NN.NN` numbering (e.g. 01.02); case studies are compact hairline cards inside each subproject. Not a flat grid.
- Data is driven by `caseProjects` in `lib/cases.ts` (`CaseBigProject` → `CaseSubproject` → `CaseStudy`).

---

## Routes Created

- `/cases` — rebuilt as the three-level library.
- `/cases/[slug]/[subSlug]/[caseSlug]` — new dynamic placeholder case landing page; statically generates all 11 combos (e.g. `/cases/project-01/subproject-01/case-01`). Invalid combos (bad project, subproject, or case slug) return 404.
- **Removed** the previous flat `/cases/[slug]/[caseSlug]` route (last iteration's 2-segment prototype). It had to go: its level-2 dynamic segment (`[caseSlug]`) would conflict with the new level-2 `[subSlug]` — Next.js forbids two dynamic names at the same path level. Old 2-segment URLs now 404, which is expected since this task supersedes that structure.
- **Existing `/cases/digital-gold-growth` preserved** (`app/cases/[slug]/page.tsx`, unchanged behavior). It shares the level-1 `[slug]` name with the new three-segment route, so there is no sibling-slug conflict. Its full-case type was renamed `CaseStudy` → `FullCaseStudy` in `lib/cases.ts` (so the leaf type could take the spec name `CaseStudy`); no behavior change, and it is **not featured** in the Cases IA.

---

## Hierarchy Review

### Big Project Level

- Number, title (Irvin `t-hed-2`), status, a short **overview**, and a generic **scope** list (mono, middot-separated). Strong ink top-rule separates each big project.

### Subproject Level

- `NN.NN` number, title (`t-hed-3`), status, and a short **description** (distinct from the project overview). Sits in an indented band under its big project so the parent/child relationship is unmistakable.

### Case Study Level

- Compact card: category (mono, uppercase), case number, title ("Case Study NN", Irvin), short **summary**, status, and an "Open case shell" CTA linking to the placeholder detail route.

---

## Placeholder Policy

- No real project, subproject, or case names; no product names, metrics, screenshots, or confidential context anywhere in the IA.
- Generic categories only: Product journey, Funnel repair, Trust system, Platform experience, Research system, Design infrastructure.
- Distinct copy per level: Big Project **overview**, Subproject **description**, Case Study **summary**. All statuses "Content pending"; CTA "Open case shell".
- Detail pages show the 13-section senior case-study shell, each section only "Content pending." — no invented prose.

---

## Homepage Preview Review

- The homepage Cases section shows the four big projects at a high level only: number, title, status, and "N subprojects · M cases planned" (correct singular/plural).
- Every card links to `/cases`; **no** placeholder detail page is linked from the homepage. One "See the case library" link.

---

## Case Detail Shell Review

- Header: back-to-Cases link, `NN·NN·NN` index, project · subproject · category line, case title, a meta grid (Big project / Subproject / Case study / Category / Status), and a placeholder note.
- Body: the 13-section shell (Executive Summary → What I'd Do Differently), each "Content pending."
- Footer nav: Back to Cases, Return Home.

---

## Public Safety Check

Rendered HTML of `/cases` + a placeholder case page scanned; **zero** occurrences of: Airtel, Digital Gold, Fraud Prevention, Safe Pay, Onboarding, 28×, 62%, 500+, 7×, 1B+, 12M+, claims register, CLAIM-, gated, needs evidence, external verification, externally verified. Zero em/en dashes. (The pre-existing `/cases/digital-gold-growth` page retains its own approved content and was out of scope.)

---

## Mobile Review

- `/cases`, the placeholder case page, and the homepage all render with **no horizontal overflow** at 390px (production build).
- Subproject indent collapses on mobile (the left-rule band is `md:` only); case grids fall 3-up → 2-up → 1-up; the detail meta grid falls to one column.

---

## Remaining Issues

- The old 2-segment URLs (`/cases/project-01/case-01`) 404 by design now — nothing links to them.
- `/cases/project-NN` and `/cases/project-NN/subproject-NN` (partial paths) resolve through the digital-gold `[slug]` route and 404 (no project- or subproject-level landing pages were requested).
- `home-snapshot-outcomes.jpg` remains unused from an earlier unrelated change (noted in ART-DIRECTION.md).

---

## Recommended Next Step

Nikhil should review the IA and then provide the real big project names, subproject names, case names, and case content.
