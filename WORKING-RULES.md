# WORKING-RULES.md

## Visual design: evidence over memory (Decision 065)

The design authority is the empirically observed New Yorker system captured in
`design-audit/nyer-observed.json` (and its human-readable contract, root
`DESIGN.md`). This rule exists because prior attempts driven by hand-written
design markdown repeatedly failed to match the live reference.

1. **Measure, don't recall.** Every visual value (type size, leading,
   tracking, weight, color, spacing, rule, radius) must trace to a computed
   style measured this-or-a-prior session and recorded in
   `design-audit/nyer-observed.json`. If you cannot point to the measurement,
   do not apply the value.
2. **Legacy design docs are void for visual decisions.** The `design/` kits
   and superseded `DESIGN.md` revisions describe unverified values; do not
   obey them. They are retained for history only.
3. **Flag the unmeasured.** Values that could not be measured (figure
   captions, drop cap, hover colors, >1440px behavior) are marked UNMEASURED
   in `DESIGN.md`; leave them unchanged until measured.
4. **Keep code and contract in sync.** `app/globals.css` mirrors `DESIGN.md`;
   the `check:type` guard asserts the measured scale on a served build.
5. **Deliberate divergences are named.** Fonts (proprietary faces kept),
   light case-page header vs NYer's dark band, and the stacked masthead +
   centered hero are owner-approved divergences recorded in `DESIGN.md`.

## General

- Commit or push only when the user asks.
- Do not overwrite design-authority docs without explicit approval.
