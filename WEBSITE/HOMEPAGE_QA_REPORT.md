# WEBSITE/HOMEPAGE_QA_REPORT.md

## Purpose

This file records the first QA pass of the implemented homepage.

---

## Status

QA v1 Complete

---

## Reviewed Against

- PAGES/HOME.md
- PAGES/HOME_COPY.md
- WEBSITE/HOMEPAGE_IMPLEMENTATION_PLAN.md
- DESIGN.md

---

## Summary

The implemented homepage holds up well against the locked strategy, copy, and design contract. It reads as an editorial executive knowledge system — not a portfolio, resume, SaaS landing page, case-study gallery, or hype page. The Warm Editorial Zine system is followed faithfully (cream vellum canvas, Fraunces serif display, IBM Plex Mono UI, hairline borders, flat surfaces, no shadows/gradients). Copy matches `HOME_COPY.md` Draft v2, the primary hero headline is correct, and all evidence-gated claims render as visible editorial metadata. Two real issues were found and fixed during this pass; the page builds and lints cleanly.

---

## What Was Good

- Strategy: clearly an executive knowledge system. No portfolio/resume/SaaS/case-study-gallery feel.
- Hero: strong serif headline with mono eyebrow and a "THE BELIEF" marginalia note in the right column — distinctive and editorial.
- Copy fidelity: hero, snapshot, belief, capabilities, transformations, and previews match `HOME_COPY.md` v2.
- Transformation cards lead with "What it proves" + an evidence-gated chip — transformation framing, not case-study framing.
- Design tokens verified via computed styles: body background `rgb(246,246,244)` (vellum), base font IBM Plex Mono, headline font Fraunces, text near-black.
- Structure: single `h1`, ordered headings (h1 → h2 → h3), semantic `header` / `main#main` / `footer` landmarks, skip link.
- No horizontal overflow at desktop (1280), tablet (768), or mobile (375).
- Evidence-gated labels: 8 visible chips (5 Executive Snapshot cards + 3 transformation cards), styled as metadata, not errors.
- Highlighter yellow used only in `::selection` — no large yellow surfaces, consistent with DESIGN.md.

---

## Issues Found

- **Executive Snapshot empty cell.** Five cards in a 3-column seamless (gap-px over `bg-ash`) grid left the 6th slot showing the ash background — a grey rectangle that looked unfinished.
- **Low-contrast labels.** Index numbers and small caption labels (e.g. "01", "WHAT IT PROVES", "Seed", "THE BELIEF") used `text-sage` (#979886 on #f6f6f4 ≈ 2.8:1), failing WCAG AA for text.
- **Nav-label scan.** "Projects" appears in body text — confirmed intentional (the approved line "Projects expire. Capabilities compound."), not a section/nav label. No forbidden labels exist as nav or section labels.

---

## Changes Made

- `components/home/executive-snapshot.tsx` — first card (Leadership) now spans two columns (`sm:col-span-2 lg:col-span-2`), so 5 cards fill the grid with no empty cell at both the 2-col and 3-col breakpoints.
- `components/home/hero-section.tsx`, `capabilities-section.tsx`, `featured-transformations.tsx`, `thinking-preview.tsx`, `operating-manual-preview.tsx` — changed textual labels from `text-sage` to `text-lichen` (#6d6e5e ≈ 4.7:1) to meet WCAG AA contrast. Sage remains only for non-essential decoration.

No copy was changed (no drift from `HOME_COPY.md` was found). No evidence-gated labels removed. No new dependencies.

---

## Evidence-Gated Claims Still Present

All present and visible (unchanged):

- Executive Snapshot — Leadership, Organization, Scale, Outcomes, Building (5 chips)
- Featured Transformations — "What it proves" on all three stories (3 chips), including "28× growth in Digital Gold adoption"

No claim marked verified. No animated counters. No exaggerated metrics.

---

## Responsive Review

- **Desktop (1280):** Strong editorial hierarchy, generous spacing, 3-column snapshot/capabilities grids fill cleanly, hero marginalia in right column. No overflow.
- **Tablet (768):** Type scale reduces via clamp, grids fall to 2 columns, section rhythm preserved, no cramped cards. No overflow.
- **Mobile (375):** Single-column, nav wraps to legible rows under the brand, hero headline scales down (clamp min 2.4rem), CTAs stack and remain readable, cards stack, evidence labels remain visible. No horizontal overflow.

---

## Accessibility Review

- Single `h1`; heading order h1 → h2 → h3 with no skips.
- Semantic landmarks: `header`, `main#main`, `footer`; two labelled `nav` regions (Primary, Footer).
- Skip-to-content link present and focus-revealed.
- `:focus-visible` outline (2px ink) on interactive elements.
- Contrast: body/headlines near-black on cream (pass); labels moved sage → lichen to pass AA.
- Descriptive link labels; placeholder LinkedIn/Resume use `aria-disabled` with explanatory `title`.
- No text embedded in images; no images used at all. No motion dependency.

---

## Remaining Risks

- **Evidence gating is still required.** CLAIM-001 (title), the 28× Digital Gold figure, and the AI-native impact remain unverified; copy must not lose its gates until Evidence Review passes.
- **Placeholder CTAs.** LinkedIn and Resume are visible aria-disabled placeholders; real URLs needed before any public launch. Contact uses `mailto:hi.nikhilsharma@gmail.com` (owner email) — confirm before launch.
- **Story CTAs** ("Read Transformation") currently anchor to `#transformations`; they become real links only once transformation story pages exist (out of scope here).
- `next lint` prints a deprecation notice (removed in Next 16) — cosmetic; migrate later.

---

## Recommended Next Step

Homepage is review-ready and passes QA. Next, either: (1) verify the gated claims so labels can be lifted, or (2) build the first transformation story page (Building the Design Organization), which introduces dynamic routing and turns the homepage story CTAs into real links. Defer LinkedIn/Resume wiring until those URLs are confirmed.
