# DESIGN.md — measured visual system

> **Provenance.** Every visual value in this file was measured live from
> newyorker.com this session (headless Chrome, computed styles, 1440px and
> 390px) and is recorded in `design-audit/nyer-observed.json` +
> `nyer-observed.md`. Those files are the design authority; this document is
> their human-readable contract. **This supersedes all prior visual-design
> markdown** (the v1–v3 "Warm Editorial Zine" / "New Yorker Editorial"
> systems and the earlier token/type specs), which described values that were
> not empirically verified. When a value here disagrees with any older doc,
> this file — and the JSON it derives from — wins.
>
> Claude Code must read this file before any UI, layout, component,
> typography, motion, or visual change. Values are mirrored as machine-
> readable CSS in `app/globals.css`; keep the two in sync. If you change a
> visual value, it must trace to a measurement in `nyer-observed.json` (re-run
> the capture in `design-audit/` to add one) — never to memory or assumption.

---

## Color (measured)

| Token | Value | Measured role |
|---|---|---|
| `--color-vellum` / `--color-paper` | `#ffffff` | page + surface (NYer canvas renders white) |
| `--color-ink` | `#000000` | body / river / heading ink |
| `--color-ash` | `#e5e5e5` | 1px hairline rules (dominant) |
| `--color-on-dark` | `#f5f5f5` | nav + dek text on the black band |
| `--color-on-dark-muted` | `#e5e5e5` | byline on dark |
| `--color-footer-muted` | `#a2a2a2` | footer links |
| `--color-rule-dark` | `#333333` | masthead bottom rule (article pages) |
| `--color-accent-blue` | `#0879bf` | Subscribe button + universal outline-button hover fill |
| `--color-olive-char` / `--color-lichen` | `#333333` | secondary reading grey / labels (NYer card-dek) |
| `--color-sage` | `#6b6b6b` | lightest small-label grey (neutral, AA-safe) |
| `--color-moss` | `#b3b3b3` | muted text on dark surfaces |

**Greys are strictly neutral (R=G=B).** NYer's grey family is neutral
(`#333` / `#a2a2a2` / `#e5e5e5`); do not reintroduce blue-slate or warm-tinted
greys. Pure black `#000` for body and headings; `#333` for secondary reading
text; `#a2a2a2` for the lightest footer greys.

`--color-bone #f6f4ef` (warm tint zones) and `--color-carbon #2b2e35` are
**UNMEASURED legacy** tokens with no NYer counterpart; treat as deliberate
portfolio divergences, not measured values.

## Type roles (measured; desktop / mobile)

Faces are self-hosted via `next/font/local` in `app/layout.tsx`:
IrvinHeadingPro (`--font-heading-serif`), IrvinText (`--font-headline-serif`),
Adobe Caslon Pro (`--font-editorial-serif`), Graphik (`--font-geometric-mono`),
Neutraface (`--font-rubric`). **Font-licensing note:** these are the actual
proprietary New Yorker faces; owner-approved to keep for maximum parity (the
reason measured metrics match to the pixel). Legal responsibility is the
owner's; swapping to licensed/free equivalents remains an open option.

| Role class | Face | Size / leading | Weight | Measured source |
|---|---|---|---|---|
| `.t-display` / `.t-display-feature` | Irvin Heading | 36/40 · 28/32 | 400 | home lead hed |
| `.t-hed-1` | Irvin Heading | 42/46.7 · 30/32 | 400 | article H1 |
| `.t-hed-2` | Irvin Heading | 28/32 | 400 | section title ("Today's Mix") |
| `.t-hed-3` | Caslon | 32/36 | 400 | in-article H2 |
| `.t-hed-card` / `.t-mix-hed` | Caslon | 22/28 | 400 | river / card hed |
| `.t-dek` | Caslon | 21/28 · 17/24 | 400 | dek / standfirst |
| `.t-body-serif` | Caslon | 21/31.5 | 400 | article body (measure **624px**) |
| `.t-mix-dek` | Caslon | 17/24, `#333` | 400 | card dek |
| `.t-rubric` | Irvin Text | 12/16, no transform | 400 | rubric / small hed |
| `.t-nav` | Graphik | 12/15.24, ls −0.15px | 500 | masthead nav |
| `.t-meta` | Graphik | 12/14, ls −0.15px | 500 | timestamp / meta |
| `.t-footer-link` | Graphik | 14/23.94, ls −0.175px, `#a2a2a2` | 500 | footer link |

**No uppercase transform** on rubrics/nav/section labels — the Irvin/Graphik
faces carry the look; NYer sets these with `text-transform: none`. All serif
weights are 400 (measured; the faces ship no lighter cut that NYer uses).
Portfolio-only sans roles `.t-body` and `.t-body-sm` (15px floor) have no NYer
counterpart and are deliberate.

## Layout (measured)

- Content container `--spacing-page-max: 1312px`, centered; side margins 64px
  at 1440 (`.page-shell` padding 24px + centering), 24px at mobile.
- Article reading measure: `.measure-article` = 624px (measured body column).
- River grid observed as 3 columns × 304px with 32px gutters; separation is
  whitespace + `#e5e5e5` hairlines, not bordered/rounded cards.
- Image ratios in use: 4:3 (dominant), 3:2, 16:9, 1:1.

## Rules, links, buttons (measured)

- Hairline: `1px solid #e5e5e5`. Masthead bottom rule on article pages:
  `1px #333`.
- Body/prose links (`main p a`): black, **always underlined** (also on
  `:link`); hover stays black + underlined.
- Buttons: `#0879bf` fill, white text, Graphik 12/500 ls −0.12px, padding
  `4px 8px`, radius `1px`. Outline buttons fill `#0879bf` on hover.

## Masthead & footer

- Masthead: black `#000` band. NYer's home masthead is a single ~64px row
  (logo centered, nav right); the portfolio keeps its own **stacked** ~93px
  bar (wordmark over centered nav) — a deliberate divergence. Nav uses
  `.t-nav`; article-page bar carries the `1px #333` bottom rule.
- Footer: white field, `#e5e5e5` top rule, `.t-footer-link` links in
  `#a2a2a2`.

## Deliberate divergences (owner-approved, left in place)

1. **Fonts** — proprietary NYer faces kept (see type note).
2. **Article header** — portfolio case pages are light; NYer uses a dark
   content-header band (white title on black).
3. **Masthead + hero composition** — stacked masthead + centered feature-hero
   vs NYer's single-row masthead + left-text/right-image lead.

## UNMEASURED this session (do not invent)

Figure caption + credit styles, drop-cap treatment, nav/selection hover
colors, and behavior above 1440px did not render headlessly and were not
changed. Re-measure before specifying them.

---

## Non-visual governance (unchanged, still binding)

Evidence rules, claim gating, accessibility (WCAG AA intent, semantic HTML,
focus-visible, reduced motion, no horizontal overflow), and the
implementation rules for Claude Code continue to apply as recorded in
`PROGRAM_INDEX.md`, `DECISION_LOG.md`, and the `EVIDENCE/` and `QUALITY/`
systems. This file governs the **visual** layer only.
