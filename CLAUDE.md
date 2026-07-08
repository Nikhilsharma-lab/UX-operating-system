# CLAUDE.md

Working notes for Claude Code in this repository.

## Design authority (dark kamran)

The visual design system is the **dark, single-column "kamran" language**. The
source of truth is the code:

1. `app/globals.css` — the `@theme` token layer (dark OKLCH palette, amber
   accent, fonts, radius, motion) and the `.k-label` / `.t-*` utilities.
2. `components/page-shell.tsx` + `components/article.tsx` — the shared
   detail-page primitives every sub-page renders through.
3. `DESIGN.md` (root) — the human-readable contract derived from the above.
   **Read it before any UI/layout/type/motion change.**

The prior systems are **retired**: the measured "New Yorker Editorial" system
(Decision 065, sourced from `design-audit/`) and the legacy "Warm Editorial
Zine" kit. The `design-audit/` capture dir and the `design/` kit have been
removed; there is no external pixel-parity target anymore. When a value is
unspecified, follow the tokens and primitives in the code — do not reintroduce
a light theme, a theme toggle, or the old faces without a logged decision.

## Fonts

Self-hosted (OFL) via `next/font/local` in `app/layout.tsx`: **Geist** (sans,
everything), **Geist Mono** (small numeric bits), **Newsreader italic** (the
serif-italic accent). The old proprietary New Yorker faces (Irvin, Adobe Caslon
Pro, Graphik, Neutraface) were removed with the redesign.

## Guards

- `npm run lint`
- `NEXT_DIST_DIR=.next-prod npm run build` — prod QA build; the dedicated
  `.next-prod` dist dir (ignored by the dev watcher via `next.config.mjs`) keeps
  it from disturbing a running `next dev` server.
- `npx tsc --noEmit` — type check.

(The former `npm run check:type` puppeteer typography guard was retired with the
New Yorker system.)

## Non-visual governance

Strategy, evidence gating, and content architecture live in
`PROGRAM_INDEX.md`, `DECISION_LOG.md`, and the `FOUNDATION/`, `EVIDENCE/`, and
`QUALITY/` systems. Those are unchanged by the visual rebuild.
