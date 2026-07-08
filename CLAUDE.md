# CLAUDE.md

Working notes for Claude Code in this repository.

## Design authority (Decision 065)

The visual design system is now **empirically measured**, not prescribed from
memory. The source of truth is:

1. `design-audit/nyer-observed.json` + `design-audit/nyer-observed.md` — the
   computed styles, layout metrics, colors, rules, and interactions captured
   live from newyorker.com (headless Chrome, 1440px + 390px).
2. `DESIGN.md` (root) — the human-readable contract derived from that JSON.

Every visual value applied must trace to a measurement in that JSON. If a
value is not measured, do not invent it — add a measurement (re-run the
capture in `design-audit/`) or leave the surface unchanged.

**Legacy visual-design docs are replaced.** The prior "Warm Editorial Zine" /
"New Yorker Editorial" v1–v3 systems (in `design/` and older `DESIGN.md`
revisions) described unverified values and are marked superseded. Where they
disagree with the measured system, the measured system wins.

## Font-licensing note

The repo self-hosts the actual proprietary New Yorker faces (Irvin
Heading/Text, Adobe Caslon Pro, Graphik, Neutraface). They are kept by owner
decision for maximum parity; legal responsibility for licensing sits with the
owner. Swapping to licensed/free equivalents remains an open option and would
change measured metrics slightly.

## Guards

- `npm run lint`
- `NEXT_DIST_DIR=.next-prod npm run build`
- `npm run check:type` — typography regression guard; its expected values are
  the measured v4 scale (Decision 065). Regenerate it from
  `nyer-observed.json` if the measured scale changes.

## Non-visual governance

Strategy, evidence gating, and content architecture live in
`PROGRAM_INDEX.md`, `DECISION_LOG.md`, and the `FOUNDATION/`, `EVIDENCE/`, and
`QUALITY/` systems. Those are unchanged by the visual rebuild.
