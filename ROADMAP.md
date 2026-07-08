# ROADMAP.md

## Design authority change (Decision 065)

The visual design system is now the **empirically measured** New Yorker system
(`design-audit/nyer-observed.json` → `DESIGN.md`). Legacy hand-written design
docs were replaced. See `DECISION_LOG.md` (065) for the full record.

## Open items from the parity rebuild

- **Font-licensing decision (owner).** The repo self-hosts the actual
  proprietary NYer faces for maximum parity. Decide whether to keep them or
  swap to licensed/free equivalents (would slightly reduce measured parity).
- **Deliberate divergences left in place** (owner-approved): light case-page
  header vs NYer's dark article band; stacked masthead + centered hero vs
  NYer's single-row masthead + split lead. Revisit only if desired.
- **Unmeasured roles** (figure caption, credit, drop cap, hover colors,
  >1440px): measure and specify when those surfaces are built.
- **Re-measure cadence.** newyorker.com evolves; re-run the `design-audit/`
  capture before large visual changes so the authority stays current.
