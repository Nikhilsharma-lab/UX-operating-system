# DESIGN.md — dark kamran visual system

> **Authority.** The source of truth for every visual value is
> [`app/globals.css`](app/globals.css) (the `@theme` token layer) plus the
> shared component primitives — [`components/page-shell.tsx`](components/page-shell.tsx)
> and [`components/article.tsx`](components/article.tsx). This document is the
> human-readable contract derived from them; when it disagrees with the code,
> the code wins. Keep the two in sync.
>
> The system is a dark, single-column, typographic layout in the spirit of
> kamran.fyi — calm, composed, editorial. It **supersedes** the earlier
> measured "New Yorker Editorial" system (Decision 065) and the legacy
> "Warm Editorial Zine" kit; both are retired. There is no external
> pixel-parity target anymore — the design is self-authored.

---

## Register & voice

Portfolio / executive knowledge system: **design IS the product**. Three words:
composed, evidentiary, editorial. White space is a leadership signal — calm
pacing over density. Authority comes from type, spacing, and hierarchy, never
from decoration. Timeless over trendy.

## Theme

**Dark only.** `<html data-theme="dark">` is set in `app/layout.tsx`; the light
theme was removed by owner decision. Do not reintroduce a light palette or a
theme toggle without a decision.

## Color (dark, OKLCH)

Tokens live in `@theme` in `app/globals.css`. Utilities are `bg-*` / `text-*` /
`border-*` on the token name (e.g. `text-ink`, `border-ash`).

| Token | OKLCH | Role |
|---|---|---|
| `--color-vellum` | `0.145 0.012 44` | page background |
| `--color-paper` | `0.2 0.018 46` | card / pill surface |
| `--color-bone` | `0.238 0.02 48` | lifted panel / hover fill |
| `--color-ink` | `0.955 0.016 72` | bright text: names, titles, links, values |
| `--color-carbon` | `0.87 0.02 68` | body / intro text |
| `--color-lichen` | `0.685 0.032 60` | muted: roles, descriptions, dates |
| `--color-sage` | `0.55 0.03 58` | faint: small labels, meta |
| `--color-ash` | `0.275 0.022 48` | 1px hairline borders (dominant rule) |
| `--color-rule-dark` | `0.32 0.02 48` | stronger border / card hover edge |
| `--color-accent-blue` | `0.83 0.13 82` | **the accent is amber (~#FCD34D)** — the token name is legacy |

**Amber is used sparingly** and always to mean something: bullet ticks, a key
outcome/result, `::selection`, the focus ring, small brand marks. It never
fills large areas (no drenched surfaces, no gradient text). Greys carry the
page; amber is the single highlight.

Surfaces are **flat** — `--shadow-1` / `--shadow-2` are `none`. Depth comes from
the 1px `ash` hairline and the `paper` surface tint, not shadows.

## Type

Self-hosted via `next/font/local` in `app/layout.tsx` (all OFL):

- **Geist** (`--font-geist`) — the sans; carries everything (headings, body, UI).
- **Geist Mono** (`--font-geist-mono`) — small numeric / mono bits only.
- **Newsreader italic** (`--font-newsreader`) — the serif-italic accent
  (`.font-editorial-serif`), used for the occasional pull-quote / tagline.

No display serif, no second sans. Contrast comes from **weight and size within
Geist**, plus the rare Newsreader italic.

### Roles

- **Section label** — `.k-label`: 12px / 500 / `0.16em` tracking / uppercase /
  `lichen`. The one repeated small-caps label; it is the site's section grammar.
- **Detail-page primitives** (`components/article.tsx`), used inside
  `<PageShell>` by `/cases/*`, `/transformations/*`, `/operating-manual/*`,
  `/resume`:
  - `ArticleHead` — eyebrow (`.k-label`) + `h1` (26 / 30px, 600, tight) + dek
    (16px `carbon`) + optional meta row (`sage` label / `ink` value, over a
    hairline).
  - `Section` — `.k-label` + content, `mt-12` cadence.
  - `P` — 15px / 1.7 `carbon`, measure capped ~64ch.
  - `BulletList` — amber 4px dot + 15px `carbon`.
  - `Note` — italic `lichen`, `accent-blue/50` left border (the one sanctioned
    left-border; everywhere else use full borders).
  - `RelatedLinks` — hairline-divided rows, title + `Arrow`.
- **Legacy `.t-*` scale** (`.t-hed-1` … `.t-body-serif`, in `globals.css`)
  remains for any surface not yet on the primitives; prefer the primitives and
  explicit Tailwind sizes for new work.

Body line length caps ~64–70ch (`.measure-article` = 624px). Light text on the
dark bg reads lighter, so leading runs generous (1.6–1.7 for body).

## Layout

- **Reading column** — `PageShell` centers a **640px** column with `px-6` and a
  slim "back to home" affordance; detail pages render inside it. The homepage
  (`app/page.tsx`) uses a **560px** column. Index pages use the `.page-shell`
  container (`--spacing-page-max` 1312px).
- **Cards** — `rounded-xl border border-ash bg-paper p-4/5`, hover
  `border-rule-dark`. Used only when content is genuinely distinct (project
  cards, ventures). Never nested; prefer hairline-separated rows or spacing.
- **Chips** — `rounded-full border border-ash bg-paper px-2.5 py-1 text-[12.5px]
  text-lichen` for tag/skill lists.
- **Dividers** — 1px `ash` hairlines (`border-t` / `divide-y`) do most of the
  structural work.
- Radius: `--radius-sm` 8px, `--radius-lg` 12px.

## Links, focus, selection

- In-prose links (`main p a`): `ink`, underlined, 2px offset.
- Nav / footer / related: `lichen` -> `ink` on hover, 0.16s ease.
- External links open in a new tab with `rel="noopener noreferrer"`.
- `:focus-visible`: 2px amber outline, 2px offset (keyboard reachable).
- `::selection`: amber background, `vellum` text.

## Motion

Calm entrance only. `@keyframes rise-in` (opacity + 14px translateY, 0.6s
`cubic-bezier(0.16,1,0.3,1)`) drives `.hero-enter` (+ `-1/-2/-3` stagger delays)
on the **homepage** header/lead. Detail pages are static. Every animation has a
`prefers-reduced-motion: reduce` reset (no motion, content visible). Reveals
never gate visibility — content is visible by default.

## Accessibility

WCAG 2.1 AA intent: semantic headings, keyboard nav with the visible amber
focus ring, a `Skip to content` link (in `app/layout.tsx`), no horizontal
overflow at 390px or desktop, alt text on meaningful images, reduced-motion
support. Verify contrast against `vellum`: `ink` / `carbon` / `lichen` clear AA
for body; `sage` is for small non-essential labels only.

## Guards

- `npm run lint`
- `NEXT_DIST_DIR=.next-prod npm run build` (prod QA build; uses a separate
  `.next-prod` dist dir so it never disturbs the running `next dev` server)
- `npx tsc --noEmit` (types)

The former `check:type` puppeteer regression guard was retired with the
New Yorker system; the design is now self-authored, so `globals.css` is the
regression baseline.
