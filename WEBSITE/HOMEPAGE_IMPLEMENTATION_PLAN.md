# WEBSITE/HOMEPAGE_IMPLEMENTATION_PLAN.md

## Purpose

This file defines how the homepage should be implemented later.

It is not UI code.

It translates homepage strategy, homepage copy, and design direction into section architecture, component needs, content rules, responsive behavior, accessibility expectations, and implementation risks.

---

## Status

Planning v1 — No UI implemented

---

## Related Files

- PAGES/HOME.md
- PAGES/HOME_COPY.md
- DESIGN.md
- FOUNDATION/03_POSITIONING.md
- FOUNDATION/04_BRAND_THESIS.md
- FOUNDATION/05_AUDIENCE.md
- EVIDENCE/CLAIMS_REGISTER.md
- QUALITY/REVIEW_CHECKLIST.md

---

# Implementation Principle

The homepage should feel like an editorial executive knowledge system, not a portfolio, SaaS landing page, or resume website.

The implementation should prioritize:

- Typography
- Hierarchy
- White space
- Section rhythm
- Evidence clarity
- Editorial restraint
- Fast scanning
- Deep reading
- Minimal interaction
- No visual noise

---

# Page Architecture

## 1. Navigation

Content source:

- PAGES/HOME.md
- PAGES/HOME_COPY.md

Recommended links:

- Capabilities
- Transformations
- Operating Manual
- Thinking
- Building
- Contact

Implementation notes:

- Sticky or simple top nav can be decided later.
- Use cream background.
- Use thin bottom border.
- Use mono type.
- Avoid heavy visual branding.
- Avoid portfolio-style labels.

---

## 2. Hero

Content source:

- HOME_COPY.md / Hero section

Component needs:

- Eyebrow
- Primary headline
- Supporting copy
- Primary CTA
- Secondary CTA
- Tertiary text/link CTA

Visual behavior:

- Large editorial serif headline
- Monospace eyebrow
- Generous negative space
- No mockup collage
- No hero image unless meaningful
- Possible small evidence/marginalia block on right side

Responsive behavior:

- Desktop: headline left, optional marginalia/right note
- Mobile: single column, strong headline, CTAs stacked or wrapped

---

## 3. Executive Snapshot

Component needs:

- Section label
- Section headline
- Intro copy
- Snapshot grid/cards
- Evidence-gated label styling

Snapshot cards:

- Leadership
- Organization
- Scale
- Outcomes
- Building

Implementation notes:

- Use cards with 1px borders.
- Keep metrics evidence-gated until verified.
- Do not visually over-amplify unverified claims.

---

## 4. Belief

Component needs:

- Section label
- Headline
- Short narrative copy
- System list

Visual behavior:

- This can be a strong editorial section.
- Use wide text block.
- System list can be arranged as mono stacked lines or bordered rows.
- Highlight “Design creates systems that create products.”

---

## 5. Capabilities

Component needs:

- Section label
- Headline
- Intro
- Six capability cards

Cards:

1. Organizational Design
2. AI-native Product Development
3. Behavioral Growth
4. Customer Trust
5. Product Infrastructure
6. Builder Energy

Implementation notes:

- Avoid generic icon cards.
- Text should lead.
- Use small indices such as 01, 02, 03.
- Use hairline borders and restrained spacing.

---

## 6. Featured Transformations

Component needs:

- Section label
- Headline
- Intro
- Three story cards

Stories:

1. Building the Design Organization
2. AI-native Product Development
3. Digital Gold Growth

Implementation notes:

- Do not call them projects.
- Do not use screenshot-first cards.
- Use “What it proves” as the key differentiator.
- Digital Gold metric remains evidence-gated.
- Fraud Prevention should not appear in V1 homepage featured cards.

---

## 7. Operating Manual Preview

Component needs:

- Section label
- Headline
- Copy
- Link grid/list

Preview links:

- Hiring
- Design Reviews
- Product Reviews
- AI Workflow
- Research
- Decision Making
- Design Systems
- Stakeholder Management

Implementation notes:

- Should feel like a field manual.
- Use clean list/table treatment.
- Avoid resource-library styling.

---

## 8. Thinking Preview

Component needs:

- Section label
- Headline
- Copy
- Essay seed list
- CTA

Implementation notes:

- If essays are not ready, keep this as preview.
- Do not fake published essay links.
- Could visually appear as “notes from the operating system.”

---

## 9. Building Preview

Component needs:

- Section label
- Headline
- Two venture blocks
- CTA

Blocks:

- LANE
- Svenklas

Implementation notes:

- Do not frame as side projects.
- Present as builder proof.
- Keep visually secondary to executive positioning.

---

## 10. Evolution Preview

Component needs:

- Section label
- Headline
- Timeline / stacked career arc
- CTA

Arc:

- Architecture
- Healthcare
- Payments
- Banking
- AI-native building
- Entrepreneurship

Implementation notes:

- This replaces generic About.
- Keep short in V1.

---

## 11. Contact

Component needs:

- Section label
- Headline
- Copy
- Contact CTA
- LinkedIn CTA
- Resume CTA

Implementation notes:

- Calm, serious, not salesy.
- Avoid freelance framing.
- Use senior conversation framing.

---

## 12. Footer

Component needs:

- Short positioning line
- Core links
- Contact / LinkedIn / Resume

Implementation notes:

- Editorial close.
- No SaaS-style mega footer.
- No fake social proof.

---

# Component Inventory

Future UI implementation will likely need:

- SiteHeader
- NavLink
- SectionShell
- SectionEyebrow
- HeroSection
- CTAGroup
- ExecutiveSnapshot
- SnapshotCard
- BeliefSection
- CapabilityGrid
- CapabilityCard
- TransformationGrid
- TransformationCard
- ManualPreview
- ThinkingPreview
- BuildingPreview
- EvolutionPreview
- ContactSection
- SiteFooter
- EvidenceGateLabel

Do not create these components yet.

---

# Design Token Requirements

Implementation must follow `DESIGN.md`.

Use:

- Cream page background
- White cards
- Black / carbon text
- Olive-sage muted text
- Highlighter yellow only as rare accent
- Editorial serif for major headlines
- Geometric mono for UI, labels, metadata, and marginalia
- 1px hairline borders
- No shadows
- No gradients
- No glassmorphism
- No 3D
- No generic SaaS visuals

---

# Responsive Requirements

Desktop:

- Strong editorial layout
- Large type
- Wide spacing
- Possible 2-column sections where useful

Tablet:

- Reduce type scale
- Preserve section rhythm
- Avoid cramped grids

Mobile:

- Single-column
- Clear hierarchy
- No tiny marginalia
- CTAs readable
- Cards stacked
- No horizontal overflow

---

# Accessibility Requirements

Future implementation must include:

- Semantic landmarks
- Proper heading order
- Keyboard-accessible navigation
- Visible focus states
- Sufficient color contrast
- Descriptive link labels
- No motion dependency
- Reduced-motion safe behavior
- No text embedded in images

---

# Evidence Handling

Any claim marked `[EVIDENCE-GATED]` in `PAGES/HOME_COPY.md` must be visually handled carefully.

Rules:

- Do not remove evidence-gated labels unless claim is approved.
- Do not visually exaggerate unverified metrics.
- Do not convert unverified claims into animated metric counters.
- Do not make evidence-gated claims look final.

Before public launch, homepage claims must pass Evidence Review.

---

# Implementation Risks

## Risk 1 — Looks like a generic portfolio

Mitigation:

- Avoid project grids.
- Use transformation language.
- Lead with thesis and operating system.

## Risk 2 — Looks like a SaaS landing page

Mitigation:

- Avoid gradients, fake product UI, decorative icons, and marketing hype.

## Risk 3 — Too dense

Mitigation:

- Use section rhythm, hierarchy, and progressive disclosure.

## Risk 4 — Too abstract

Mitigation:

- Keep Executive Snapshot and Featured Transformations high on the page.

## Risk 5 — Unsupported claims

Mitigation:

- Keep Evidence Gate visible in copy until claims are verified.

---

# Future Implementation Sequence

When UI implementation begins, proceed in this order:

1. Scaffold app if not already scaffolded.
2. Install / configure Tailwind only if required.
3. Add global design tokens from `DESIGN.md`.
4. Create layout shell.
5. Build homepage sections with static content.
6. Add responsive behavior.
7. Add accessibility checks.
8. Add evidence-gated claim handling.
9. Run lint / build checks.
10. Report changed files.

Do not begin this sequence until explicitly instructed.

---

# Definition of Done

This implementation plan is done when:

- [ ] It translates `PAGES/HOME.md` into buildable section architecture.
- [ ] It uses `PAGES/HOME_COPY.md` as copy source.
- [ ] It follows `DESIGN.md`.
- [ ] It defines section-by-section implementation notes.
- [ ] It defines component inventory.
- [ ] It defines responsive requirements.
- [ ] It defines accessibility requirements.
- [ ] It defines evidence-gated claim handling.
- [ ] It identifies implementation risks.
- [ ] It does not modify UI code.
