# CASES_IA_REVIEW.md

## Purpose

This file reviews the new Cases IA prototype: big projects with nested case cards.

---

## Status

IA prototype ready. Real case names and content pending from Nikhil.

---

## Structure Implemented

- `/cases` is now a case-archive **library**: four big product systems, each with a project header (number, title, status), an overview, a generic scope list, and a grid of nested case cards.
- Each case card carries a category, number, status ("Content pending"), summary, and a CTA ("Open case shell") linking to its placeholder detail page.
- Card counts per the brief: Big Project 01 → 3 cases, 02 → 2, 03 → 3, 04 → 2 (10 placeholder cases total).
- Nesting is expressed editorially: a strong ink top-rule opens each project, then the card grid — not a flat grid of unrelated cards.
- Data is fully driven by `caseProjects` in `lib/cases.ts` (nested `CaseProject` → `CaseCard[]`).

---

## Routes Created

- `/cases` — rebuilt as the big-project library.
- `/cases/[slug]/[caseSlug]` — new dynamic placeholder case landing page. Statically generates all 10 combos:
  - `/cases/project-01/case-01`, `/case-02`, `/case-03`
  - `/cases/project-02/case-01`, `/case-02`
  - `/cases/project-03/case-01`, `/case-02`, `/case-03`
  - `/cases/project-04/case-01`, `/case-02`
- Invalid combinations (e.g. `/cases/project-01/case-09`, `/cases/project-09/case-01`) correctly return 404.
- **Existing `/cases/digital-gold-growth` preserved** (`app/cases/[slug]/page.tsx`, unchanged). It shares the first-level `[slug]` segment name with the new two-segment route, so Next.js raises no sibling-slug conflict. It is **not featured** anywhere in the new Cases IA.

---

## Placeholder Policy

- No real project names, case names, product names, metrics, screenshots, or confidential context anywhere in the new IA.
- Generic categories only: Product journey, Funnel repair, Trust system, Platform experience, Research system, Design infrastructure.
- All statuses are "Content pending". Case-card CTA is "Open case shell".
- Detail pages show the 13-section senior case-report shell, each section rendering only "Content pending." — no invented prose.

---

## Homepage Preview Review

- The homepage Cases section (`components/home/cases-section.tsx`) now shows the four big projects at a high level only: number, title, status, and "N cases planned".
- Every card links to `/cases`; **no** placeholder detail page is linked from the homepage. One "See the case library" link to `/cases`.
- The former Digital Gold homepage case card is removed from the Cases preview (the `/cases/digital-gold-growth` route still exists and the Transformations section's own Digital Gold card is untouched, out of scope).

---

## Case Detail Shell Review

- Header: back-to-Cases link, `NN·NN` index, project title · category, `Project, Case` title, a 4-cell meta grid (Product system / Case / Category / Status), and a placeholder note.
- Body: the 13-section shell (Executive Summary → What I'd Do Differently), each "Content pending."
- Footer nav: Back to Cases, Return Home.

---

## Public Safety Check

Rendered HTML of `/cases` + a placeholder case page scanned; **zero** occurrences of: Airtel, Digital Gold, Fraud Prevention, Safe Pay, Onboarding, 28×, 62%, 500+, 7×, 1B+, 12M+, claims register, CLAIM-, gated, needs evidence, external verification pending, externally verified. Zero em/en dashes. (The pre-existing `/cases/digital-gold-growth` page retains its own approved content and was out of scope for this scan.)

---

## Mobile Review

- `/cases`, the placeholder case page, and the homepage all render with **no horizontal overflow** at 390px (verified on the production build).
- Project card grids fall from 3-up → 2-up → 1-up; the detail meta grid falls to a single column; section shells stack cleanly.

---

## Remaining Issues

- `home-snapshot-outcomes.jpg` remains unused from an earlier change (unrelated to Cases); noted in ART-DIRECTION.md.
- The `/cases/project-NN` single segment (no case) resolves through the digital-gold `[slug]` route and 404s (no project landing page was requested). If a project-level landing page is wanted later, add `app/cases/[slug]/page.tsx` handling for project slugs or a dedicated route.

---

## Recommended Next Step

Nikhil should review the IA and then provide the real big project names, case names, and content.
