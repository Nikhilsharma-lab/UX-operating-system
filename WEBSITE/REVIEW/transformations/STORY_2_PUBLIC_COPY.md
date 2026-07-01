# STORY_2_PUBLIC_COPY.md

This is the public-facing copy currently rendered at
`/transformations/ai-native-product-development` (public mode). No internal
scaffold, no hidden evidence notes, no dev-only content — review the story
here without opening TS files.

---

**Eyebrow:** 02 — Transformation · AI-native Product Development
**Title:** AI-native Product Development
**Proof line:** Nikhil is applying AI-assisted design-to-code workflows to reduce implementation friction and improve product delivery quality.
**Primary audience:** AI Product Builder / Engineering Leader
**Status:** Draft v1

---

## 1. Context

By the time this work began, Airtel Payments Bank had matured its design capability and built Vault — a central design system spanning the consumer app, business apps, the website, and internal artifacts. The design foundation was strong and widely adopted. What had not matured was the path from design to production: turning an approved Figma screen into shipped frontend was still a manual crossing, made component by component.

## 2. Business Problem

The cost landed on the whole product organization, not only on visual polish. Repetitive frontend translation created rework, stretched QA and UAT cycles, produced inconsistent implementation, delayed experiments, and lowered confidence in what would actually ship.

It was not a skill problem. The work that consumed the most delivery time carried the least product judgment — and the organization paid that cost on every screen.

## 3. Organizational Challenge

The deeper challenge was structural. Design, the design system, engineering, and QA still operated as separate translation layers. Figma held design intent. Engineering held production reality. QA found the mismatches between them late, after the expensive work was done.

The organization had a design system, but not a design-to-production system — no shared path where intent became implementation without being rebuilt by hand.

## 4. Constraints

The constraints clustered into a few real risks, not a checklist:

- Trust and quality: engineering skepticism about AI-generated code, and genuine concerns about code quality, security, accessibility, responsiveness, and production readiness.
- Source quality: token and component mismatches between Figma and code, plus gaps in the design team's implementation-aware skills.
- Governance: version control, compliance in a regulated environment, and the need for clear review and ownership.
- Adoption: leadership skepticism about introducing AI tooling inside a regulated bank.

## 5. Research

This was not only user research; it was workflow research. Nikhil and the team treated the handoff itself as the object of study, mapping exactly where design-to-engineering translation broke down.

- Spacing and visual parity between Figma and code.
- Missing or inconsistent component states.
- Specs that varied from designer to designer.
- Responsive behavior and edge cases discovered late.
- Repeated QA and UAT loops on the same classes of issue.
- Engineering effort spent rebuilding UI that already existed in Figma.
- Unclear ownership between design QA and engineering QA.

## 6. Decisions

The shift rested on a set of deliberate decisions about where AI belonged in the workflow — and, just as importantly, where it did not.

1. **Add AI to Vault only after the design-system foundations were stable.** — Why: AI amplifies whatever it reads; unstable foundations would only scale inconsistency. · Tradeoff: Waiting, while the manual workflow kept costing time. · Result: AI worked from a coherent source, not a messy one.
2. **Use AI to reduce implementation friction, not to replace engineering.** — Why: The waste was repetitive translation, not engineering judgment. · Tradeoff: Less dramatic than an "AI builds the product" story. · Result: Engineering stayed the owner of production quality.
3. **Keep humans in the review loop.** — Why: Generated code is a starting point, not a guarantee. · Tradeoff: Review time stays in the workflow. · Result: Speed without surrendering quality.
4. **Treat prompts and workflows as product infrastructure.** — Why: Repeatable systems beat one-off cleverness. · Tradeoff: Up-front effort to build and maintain them. · Result: A workflow the team could use, not a personal trick.
5. **Make design tokens and components AI-readable.** — Why: Structured, named inputs produce reliable outputs. · Tradeoff: Stricter Figma hygiene and discipline. · Result: Cleaner generation, less correction.
6. **Define "production-ready frontend" carefully.** — Why: An overstated claim would erode engineering trust. · Tradeoff: A more modest promise. · Result: Componentized, token-aligned, responsive foundations that still require engineering review — not code shipped without engineering ownership.

> The full workflow rested on more decisions than the six above — starting with controlled components before full screens, using AI first for repetitive UI patterns, letting designers generate foundations without bypassing engineering quality, separating visual QA from engineering QA, keeping business logic outside early AI generation, and keeping LANE separate from Vault. Those are carried in the canonical story and future Operating Manual material; the six shown here are the ones that most shaped where AI belonged — and where it did not.

## 7. Tradeoffs

Every advantage came with a counterweight. AI could speed up repetitive UI work, but it could just as easily accelerate inconsistency if the source design system was weak. Designers gained real leverage — but only by becoming more disciplined about Figma hygiene, tokens, variants, states, and implementation thinking.

Engineering spent less time on repetitive translation, yet still had to own production quality; review never went away. Starting with controlled components slowed the initial rollout, but it avoided scaling a broken workflow. And keeping business logic outside early AI generation limited scope on purpose, to protect quality and safety in a regulated environment.

## 8. Execution

Nikhil shifted Vault from a Figma-first design system toward AI-assisted design-to-code infrastructure — connecting cleaner Figma components, tokens, and variants to a generate-review-refine workflow rather than a static handoff.

- A designer creates or updates a component or screen in Figma.
- The component is checked against the design system.
- Figma MCP connects the design file to Claude Code.
- Claude Code reads the Figma structure and maps it to the frontend stack.
- A designer or engineer gives implementation instructions.
- Claude Code generates a frontend foundation — componentized, token-aligned, and responsive.
- The designer performs visual QA: accuracy, interaction quality, responsive behavior, hierarchy, and design-system compliance.
- Engineering reviews the code and owns quality, architecture, performance, accessibility, security, and integration.
- Product and QA validate behavior.
- The code moves through the normal release process.
- Learnings feed back into the design system.

The stack was conventional and public-safe: Figma MCP, Claude Code (with Cursor and Codex), and a Next.js / React / Tailwind frontend built on design tokens, shipped through Vercel and an existing internal frontend system.

> LANE is a separate system. Vault and this workflow are about design-system-to-frontend execution; LANE is an AI-native product-ops platform for problem framing and PM/design intake. LANE was not part of this workflow or the 85% QA/UAT reduction.

## 9. Outcomes

- Frontend QA/UAT time dropped by about 85% over two years.
- For a single flow, QA/UAT moved from around a day to an hour or less.
- 20 designers worked in the new workflow.
- Prototyping and handoff both got faster.
- Implementation became more consistent.
- Fewer QA defects, and less rework.
- Engineering dependency shifted from repetitive UI translation toward higher-value work — review, architecture, integration, performance, accessibility, and maintainability.
- Trust in what would actually ship improved.

> AI did not replace the product team. It compressed the waste between design intent and shipped UI.

## 10. Lessons

- AI-native workflows are operating-model changes, not tool rollouts.
- Source quality determines output quality.
- Prompt discipline matters as much as design discipline.
- Human review becomes more important, not less.
- Engineering trust is a prerequisite, not a byproduct.
- AI should automate repetitive translation, not product judgment.
- The goal is not designers generating code; it is reducing the waste between design intent and shipped product.

> AI will not fix a weak design system. It will expose it.

## 11. What I’d Do Differently

- Audit the design system's AI-readiness earlier.
- Set stricter foundations first: naming, variants, tokens, states, accessibility, responsive rules, and coded-component parity.
- Run smaller, more controlled pilots.
- Build prompt libraries sooner.
- Involve engineering from the start.
- Measure workflow impact from day one — time saved, QA issues reduced, visual defects avoided, engineering rework reduced, and adoption across squads.

## 12. Frameworks Created

- **Executable Design System** — a design system structured to support frontend generation, not only visual reuse.
- **Design-to-Production Workflow** — a repeatable path from Figma structure to generated frontend foundation to engineering review.
- **AI-readiness for Design Systems** — the hygiene bar for naming, variants, tokens, states, accessibility, and responsive behavior before AI generation.
- **Human-in-the-Loop Review Model** — the rule that AI output must pass design QA, engineering review, product validation, and QA/UAT.
- **Visual QA vs Engineering QA** — a separation of visual-parity ownership from code quality and production ownership.
- **Prompt Systems as Product Infrastructure** — reusable prompts and workflow rules treated as part of the delivery system, not ad hoc commands.
- **Generate / Review / Refine / Ship** — the operating loop that keeps AI useful without bypassing governance.
- **AI Governance for Product Teams** — the boundaries for what AI can generate, what humans must review, and what cannot be automated.

## 13. Related Essays

Planned essays that will expand this story:

- AI will expose your design system
- Design-to-code is not the same as shipping
- Why AI-native teams need stronger governance
- Prompting as product infrastructure
- The future design system is executable

## 14. Related Operating Manual Pages

Operating Manual areas this story will connect to:

- AI Workflow
- Design Systems
- Design Reviews
- Product Reviews
- Decision Making
- Stakeholder Management
- Research
- Engineering Collaboration
- Quality Gates

## 15. Related Evidence

Evidence areas tracked behind this story: the AI-assisted design-to-code workflow (Figma MCP, Claude Code, Vault), QA/UAT impact (about 85% over two years; a single flow from roughly a day to an hour or less), and workflow adoption across 20 designers. These figures are user-confirmed and public-approved, with external verification pending.

## 16. Related Future Formats

Ways this transformation can become reusable:

- LinkedIn post
- X thread
- Talk
- Workshop
- Operating Manual chapter
- AI workflow template
- Design system AI-readiness checklist
- Conference proposal
- Product demo narrative

---

**Foot:** Back to Transformations · Return Home · Contact

---

## Notes on this export

- This is the **public** render. The 28× Digital Gold figure does **not** appear here (correctly gated), and no internal repo names, architecture, exact prompts, or security details are exposed.
- The internal/dev render additionally shows per-section evidence notes (e.g. the Vault public-safety marker on §8 and the CLAIM-004 / CLAIM-011 markers on §8–9) — those are not part of this public copy.
- "Production-ready" appears only in its defined form — "componentized, token-aligned, responsive foundations that still require engineering review — not code shipped without engineering ownership." "Zero developer dependency" does not appear.
- **Polish update:** §6 now renders **6** public decision cards (down from 12); the other six are summarized in a closing note and carried in full in the canonical story. The internal hosting tool is generalized to "an existing internal frontend system" (the name **Page Space** is kept only in an internal note in the canonical markdown). §12 frameworks now carry one-line descriptions.
