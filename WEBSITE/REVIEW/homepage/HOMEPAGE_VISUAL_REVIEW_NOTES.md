# HOMEPAGE_VISUAL_REVIEW_NOTES.md

## Purpose

This file records visual review notes for the implemented homepage.

---

## Status

Ready for Human Review

---

## Screenshot Files

Captured with headless Chrome (Playwright, `channel: chrome`) against the production build (`next start`). Retina (2×) for section crops, 1× for full-page exports. The sticky header was neutralized during capture so section crops are not overlapped; the Next.js dev indicator is absent because shots were taken against the production build.

- `01-desktop-fullpage.png` — 1440w full page (1440×7982)
- `02-desktop-hero.png` — 1440w hero (2×)
- `03-desktop-executive-snapshot.png` — 1440w Executive Snapshot (2×)
- `04-desktop-capabilities-transformations.png` — 1440w Capabilities → Transformations range
- `05-desktop-lower-page.png` — 1440w Operating Manual → Footer range
- `06-tablet-fullpage.png` — 768w full page
- `07-mobile-fullpage.png` — 390w full page
- `08-mobile-hero.png` — 390w hero (2×)
- `09-mobile-transformations.png` — 390w Transformations (2×)

All 9 required screenshots were captured successfully.

---

## Self-Assessment

### Executive Feel

Does the homepage feel like an executive knowledge system?

Notes:

- Yes. The page leads with identity and belief ("AI-native Product Executive", "Design creates systems that create products") before any work, and is organized around capabilities, transformations, and an operating manual rather than projects.
- Mono labels + serif display read as editorial/field-manual, not marketing.
- The Executive Snapshot reads as a credibility scan (Leadership / Organization / Scale / Outcomes / Building), which is the right first-proof altitude for a senior evaluator.

### Portfolio Avoidance

Does it avoid portfolio, resume-site, SaaS landing page, and case-study-gallery patterns?

Notes:

- No project grid, no screenshot thumbnails, no device mockups, no hero image, no gradients, no shadows, no icon cards.
- Nav uses Capabilities / Transformations / Operating Manual / Thinking / Building / Contact — no Portfolio/Projects/Case Studies/About/Blog.
- Transformation cards lead with "What it proves," not "View project."
- The only "projects" word is the intentional line "Projects expire. Capabilities compound."

### Hero Strength

Does the hero feel clear, differentiated, and senior?

Notes:

- Strong. Large Fraunces headline carries the chosen primary line; mono eyebrow and a right-column "THE BELIEF" marginalia add an editorial, non-generic signature.
- Supporting copy is specific (regulated fintech, design systems, trust, behavioral growth, AI-assisted development) without hype.
- Possible human call: the right-column marginalia leaves vertical negative space beside the tall headline — intentional, but worth a look.

### Visual Hierarchy

Does the page guide the reader from identity to proof to usefulness?

Notes:

- Yes: Hero (identity) → Executive Snapshot (fast proof) → Belief (thesis) → Capabilities → Transformations (deeper proof) → Operating Manual / Thinking (usefulness) → Building (builder proof) → Evolution → Contact.
- This matches the layered-experience and emotional-journey intent in the foundation docs.

### Section Rhythm

Does the spacing feel intentional and editorial?

Notes:

- Consistent 80px vertical rhythm with hairline top borders separating sections gives a calm, paced cadence.
- Card grids (snapshot, capabilities) use a seamless 1px-divider table aesthetic; transformation/building cards use bordered cards — a deliberate, controlled variation.
- Executive Snapshot now fills cleanly (Leadership spans two columns); no empty cell.

### Evidence Labels

Do evidence-gated labels feel like editorial metadata, not errors?

Notes:

- Yes. The "EVIDENCE-GATED" chip is a small mono, olive-bordered tag that reads as a footnote/annotation, not a warning. It sits beside snapshot labels and under each transformation's "What it proves."
- Numbers (e.g. "28× growth in Digital Gold adoption") are stated plainly, not amplified into big counters.

### Mobile Quality

Does mobile feel designed, not merely stacked?

Notes:

- Yes. Single-column with preserved hierarchy; hero headline scales down via clamp; nav wraps into legible mono rows under the brand; cards become full-width with the same internal structure (index, headline, body, proof, chip, CTA).
- No horizontal overflow at 390w. Evidence chips remain visible.

---

## Potential Concerns

- **Evidence still pending.** Several headline claims (title, 28× Digital Gold, AI-native impact, MAU/scale) remain `[EVIDENCE-GATED]`. Visually fine, but they cannot ship as final public claims until verified.
- **Placeholder CTAs.** LinkedIn and Resume render as visible disabled placeholders; Contact uses a `mailto:` to the owner address. Confirm/replace before any public launch.
- **Story CTAs are anchors.** "Read Transformation" currently points at `#transformations` because story pages don't exist yet; they become real links when those pages are built.
- **Hero right-column whitespace.** The marginalia note leaves negative space beside the headline at desktop — intentional editorial restraint, but a candidate for a human taste call (e.g. add a small metric/credential line later, once evidence-approved).
- **Tablet (768w)** falls to the same 2-column behavior as small desktop; review `06-tablet-fullpage.png` to confirm it reads as intended rather than as a shrunk desktop.

---

## Recommended Next Step

Review the nine screenshots (especially `01`, `02`, `04`, `07`, `09`) for executive feel, hero strength, and mobile intentionality. Do not build new pages until these are reviewed and the hero/visual direction is confirmed. After sign-off, the two unblockers are: (1) verify the gated claims, and (2) build the first transformation story page (Building the Design Organization), which turns the story CTAs into real links.

---

## Final Taste Polish Pass

### Frontend Design Skill Review

Reviewed the homepage against the target "executive field manual meets editorial zine." It was already on-direction (Fraunces display + IBM Plex Mono labels, cream canvas, hairline rules, flat surfaces — a knowledge system, not a portfolio). Five craft gaps kept it from feeling *resolved*: an underweight hero right rail leaving an empty column; a tonally flat all-monochrome palette with no editorial annotation; a quiet cream footer that let the page trail off; a slightly oversized/heavy mobile hero; and lower sections (Operating Manual / Thinking / Building / Evolution) sharing the same list-and-card energy. These mapped exactly to the A–E polish brief.

### Changes Made

- **A. Hero right rail** — replaced the single belief line with a stronger editorial marginalia: "THE BELIEF" + serif belief line, a hairline separator, then "THIS SYSTEM MAPS" with a hairline-divided list (Organizations / Workflows / Decisions / Evidence / Outcomes). Narrow, editorial, no metrics, no images. On mobile it sits below the hero CTAs as a clean belief panel.
- **B. Editorial accent marks** — exactly two tiny highlighter-yellow (#fff347) bars: under the hero CTAs and above the Belief headline. No yellow text, buttons, or large fills.
- **C. Carbon footer** — converted the footer to `#2c2c26` with paper/olive-sage text: positioning line, core links, and Contact / LinkedIn / Resume. Restrained, no mega-footer, no gradients/shadows.
- **D. Mobile hero scale** — reduced the headline clamp floor (2.4rem → 2.1rem) and eased line-height (1.02 → 1.04); supporting copy set to a lighter 15px/1.55 on mobile, full token size at md+. Still bold.
- **E. Section variation** — Operating Manual is now a two-column index/table with numbered rows and a column rule; Thinking reads as field notes ("NOTE 01" mono kicker + serif idea); Building is two "venture notes" split by a vertical rule rather than cards; Evolution is a compact, numbered career arc.

No copy meaning changed, no section reordering, no evidence labels removed, no new dependencies. Hover stayed color/background only (no motion added).

### Screenshots Added

- `10-desktop-polished-fullpage.png`
- `11-desktop-polished-hero.png`
- `12-mobile-polished-hero.png`
- `13-mobile-polished-fullpage.png`

(Captured against the production build via headless Chrome; sticky header neutralized; no dev indicator.)

### Remaining Risks

- Evidence gates still required: title, 28× Digital Gold, AI-native impact, and scale claims remain `[EVIDENCE-GATED]` — all 8 chips remain visible after polish.
- Placeholder CTAs unchanged: LinkedIn / Resume are still visible disabled placeholders (now in the carbon footer too); Contact uses `mailto:`.
- Story CTAs still anchor to `#transformations` until story pages exist.

### Recommended Next Step

Homepage is resolved and review-ready. Do not build transformation story pages yet. Next: confirm the polished direction from `10`–`13`, then either verify the gated claims or proceed (in a separate task) to the first transformation story page.

---

## Visual Excellence Pass (Decision 024)

### Visual thesis

A premium editorial operating system — Linear-restraint, Stripe-system-depth, Monocle-editorial-confidence — executed as a three-voice type system unified by an evidence-ledger / operating-system-grid motif.

### Typography upgrade (biggest lever)

- Introduced **Hanken Grotesk** (sans) as the body voice via `next/font`. Body copy, intros, and card summaries are now sans — the page reads premium and readable instead of like a terminal document.
- **Fraunces** serif stays for hero/section headlines and belief lines.
- **IBM Plex Mono** demoted to "system seasoning": labels, eyebrows, indices, metadata, evidence tags, ledger numbers, nav, button labels only. Body type tracking/leading retuned for sans.

### Motif

- Every section now carries a two-digit ledger index ("01"–"09") with a short coordinate rule before its eyebrow.
- Proof is an evidence ledger (serif number + sans label + hairline), with the restrained "EVIDENCE-GATED · Figures pending Evidence Review" footnote.
- Cards carry mono metadata bands ("CASE FILE 01 · TRANSFORMATION", "VENTURE 01 · …", "CAPABILITY").

### Component upgrades

- Transformation cards → **case-file dossiers**: header meta band → serif title → sans summary → "WHAT IT PROVES" + evidence tag → "Read transformation →" footer, with a subtle hover border shift (ash → olive-char).
- Capability cards → operating-map cells with index + "CAPABILITY" tag and a hover background tone shift (→ bone/50).
- Hero right rail → numbered system index (01–05) for "THIS SYSTEM MAPS".
- Building → venture memos with category tags.

### Interaction

Restrained, expensive-feeling: 0.16s tone-shift transitions on links/cards (border/background/color), visible focus outlines. No bounce/parallax/gimmicks/scroll-hijack.

### Mobile

Stacked CTAs (two buttons + quiet Contact link), belief/system-index panel below the hero, single-column ledger and grids, breathing room on cards. No horizontal overflow.

### DESIGN.md

Updated: three-voice typography, Visual Motif, Card Modules, Interaction Rules, Mobile Rules.

### Screenshots added

`17-excellence-desktop-fullpage.png`, `18-excellence-desktop-hero.png`, `19-excellence-desktop-transformations.png`, `20-excellence-mobile-fullpage.png` (production capture). `14`–`16` are from the interim refinement step.

### Remaining risks

- Evidence gates remain on all metrics (ledger footnote + per-card chips); claims still unverified.
- LinkedIn/Resume placeholders removed from public footer/contact (Contact mailto only) until real URLs exist.
- Story CTAs still anchor to `#transformations` until story pages exist.

### Recommended next step

Confirm the upgraded direction from `17`–`20`. Do not build transformation story pages yet.
