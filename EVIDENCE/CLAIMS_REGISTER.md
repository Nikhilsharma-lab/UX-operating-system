# EVIDENCE/CLAIMS_REGISTER.md

## Purpose

This file tracks every major public claim used across the Nikhil Sharma Executive Knowledge System.

No major public claim should ship unless it is registered here and has passed Evidence Review.

This file protects the project from unsupported claims, memory drift, confidentiality issues, and interview risk.

It covers two kinds of claims: narrative claims (role, scope, products) tracked as claim shells below, and metric claims tracked in the Metric Claims table.

## Status

Planned

## Priority

P0

## Owner

Nikhil / Shared

---

## Rendering Link

Claim status drives public rendering. The Executive Snapshot ledger
(`lib/evidence-ledger.ts`) mirrors these claims with a machine `status`
(`public_approved | externally_verified | needs_evidence | private | do_not_publish`)
and an `externalVerification` flag (`pending | confirmed`). A claim renders
its number publicly once it is `public_approved` (Nikhil-confirmed) — an
artifact is not required to render, only to claim external verification.
Gated claims (`needs_evidence`) never render their number publicly; a
polished `publicSafeFallback` shows instead. See the Evidence Ledger
Rendering Rule in `DESIGN.md`.

## Public-approved vs Externally verified (Decision 028)

- **User-confirmed / Public-approved** — Nikhil has confirmed the claim is
  accurate and safe to use publicly. It MAY render publicly. It is NOT
  independently supported by an artifact unless one is recorded.
- **Externally verified** — a supporting artifact exists (public source,
  resume, LinkedIn, report, analytics record, screenshot, document). Do NOT
  mark a claim externally verified unless such an artifact exists. None of
  the current homepage claims are externally verified; they are
  public-approved with external verification pending.

## Status Language

Use this status language for every claim:

- **Needs Evidence** — the claim has no captured supporting evidence yet.
- **Needs Verification** — a factual claim (e.g. title) awaiting confirmation against source documents.
- **Public-Safe After Verification** — can go public once verified or evidence-framed.
- **Private / Needs Sanitization** — must be sanitized or kept private until confidentiality review clears it.

---

## Per-Claim Schema

Each claim should eventually capture:

- **Claim** — the exact statement as it would appear publicly.
- **Source** — where the number comes from.
- **Time period** — the window it covers.
- **Baseline** — the starting state.
- **Final state** — the ending state.
- **Nikhil's contribution** — his specific role in the outcome.
- **Public** — what can be said publicly.
- **Private** — what must remain confidential.
- **Interview defense notes** — how to defend it when challenged.
- **Confidence level** — High / Medium / Low.

---

# Claim Register

## CLAIM-001 — Current Role

**Claim:** Nikhil Sharma is Head of Product Design at Airtel Payments Bank.

**Category:** Career / Title

**Status:** User-confirmed / Public-approved (Decision 027). On resume and LinkedIn. Not externally verified — artifact link still recommended.

**Evidence Needed:**

- Resume
- LinkedIn
- Public profile or internal title confirmation

**Public Use:** Public-safe after verification.

**Interview Defense Notes:** This is a factual role/title claim and should be consistent across resume, LinkedIn, website, and speaking bio.

**Homepage Usage Note:** Approved for public homepage use (Decision 027). Evidence gate removed from this claim.

**Related Files:**

- FOUNDATION/03_POSITIONING.md
- CAREER_ASSETS/EXECUTIVE_RESUME.md
- CAREER_ASSETS/LINKEDIN_PROFILE.md

---

## CLAIM-002 — Built and Scaled Design Function

**Claim:** Nikhil built and scaled the product design function at Airtel Payments Bank.

**Category:** Organizational Design

**Status:** User-confirmed / Public-approved (Decisions 027, 031). 0→20 design capability; 20 designers hired directly (visual designers, researchers, UX designers, a UX copywriter); four pods with four design leads reporting to Nikhil; weekly rituals (Monday design reviews, Friday critiques, 14-day product reviews, design signoff); quarterly field-research practice. Supporting artifacts recommended; not externally verified.

**Evidence Needed:**

- Starting team size
- Current team size
- Timeline
- Hiring record
- Org structure
- Rituals / operating model introduced

**Public Use:** Public-safe after evidence framing.

**Interview Defense Notes:** Must explain what "built" and "scaled" mean specifically.

**Related Files:**

- FOUNDATION/03_POSITIONING.md
- TRANSFORMATION_STORIES/BUILDING_DESIGN_ORGANIZATION.md
- OPERATING_SYSTEM/ORGANIZATION_DESIGN.md
- EVIDENCE/CASE_EVIDENCE.md

---

## CLAIM-003 — Consumer and Merchant Banking Ecosystems

**Claim:** Nikhil led design across consumer and merchant banking ecosystems.

**Category:** Product Scope

**Status:** User-confirmed / Public-approved (Decision 027).

**Evidence Needed:**

- Product list
- Ownership scope
- Time period
- Public-safe naming
- Confidentiality review

**Public Use:** Public-safe after sanitization.

**Interview Defense Notes:** Should distinguish direct ownership, leadership oversight, and collaboration.

**Related Files:**

- FOUNDATION/03_POSITIONING.md
- TRANSFORMATION_STORIES/MERCHANT_BANKING.md
- EVIDENCE/CONFIDENTIALITY_RULES.md

---

## CLAIM-004 — AI-assisted Product Development Workflows

**Claim:** Nikhil introduced AI-assisted workflows that changed how design and engineering collaborate.

**Category:** AI-native Product Development

**Status:** User-confirmed / Public-approved (Decision 027; Story 2 Draft v1, Decision 036). Figma MCP + Claude Code generate frontend foundations from Vault/Figma components; "production-ready" is defined as componentized, token-aligned, responsive foundations that still require engineering review before production (AI does not ship without engineering review). Vault included; LANE separate (CLAIM-007). External verification pending; not externally verified.

**Evidence Needed:**

- Workflow description
- Tools used
- Before/after state
- Impact on implementation speed or quality
- Public-safe boundaries

**Public Use:** Public-safe after confidentiality review.

**Interview Defense Notes:** Must avoid sounding like AI buzzword usage. Explain operating model, not just tools.

**Related Files:**

- FOUNDATION/03_POSITIONING.md
- TRANSFORMATION_STORIES/AI_NATIVE_PRODUCT_DEVELOPMENT.md
- OPERATING_SYSTEM/AI_WORKFLOW.md
- BUILDING/LANE.md
- EVIDENCE/CONFIDENTIALITY_RULES.md

---

## CLAIM-005 — Vault / Product Infrastructure

**Claim:** Nikhil created or led product infrastructure such as Vault/design-system workflows that reduced product development friction.

**Category:** Product Infrastructure / Design Systems

**Status:** Needs Evidence

**Evidence Needed:**

- What Vault is
- Public-safe description
- Components / screens / workflow scope
- Before/after implementation process
- Measurable impact if used publicly

**Public Use:** Needs sanitization before public use.

**Interview Defense Notes:** Must frame as product infrastructure, not a component library showcase.

**Related Files:**

- TRANSFORMATION_STORIES/VAULT.md
- OPERATING_SYSTEM/DESIGN_SYSTEMS.md
- EVIDENCE/CASE_EVIDENCE.md

---

## CLAIM-006 — Trust and Fraud-prevention Work

**Claim:** Nikhil shaped trust and fraud-prevention experiences in regulated banking products.

**Category:** Customer Trust / Regulated Fintech

**Status:** Partially approved (Decision 027) — qualitative trust/fraud work is public-safe; the 62% fraud-reduction figure remains gated pending evidence.

**Evidence Needed:**

- Public-safe product descriptions
- Measurable outcomes
- Confidentiality review
- What can and cannot be disclosed

**Public Use:** Public-safe only after confidentiality review.

**Interview Defense Notes:** Avoid exposing fraud mechanics that could be misused.

**Related Files:**

- TRANSFORMATION_STORIES/CUSTOMER_TRUST.md
- TRANSFORMATION_STORIES/FRAUD_PREVENTION.md
- TRANSFORMATION_STORIES/SAFE_PAY.md
- FRAMEWORKS/TRUST_STACK.md
- EVIDENCE/CONFIDENTIALITY_RULES.md

---

## CLAIM-007 — LANE

**Claim:** Nikhil is building LANE, an AI-native product operating system for design and product teams.

**Category:** Builder / Founder / AI Product

**Status:** User-confirmed / Public-approved (Decision 027). Internal → beta → public; no traction claims.

**Evidence Needed:**

- Product description
- URL if public
- Current stage
- Screenshots or demo if public-safe
- What has been built
- What is planned

**Public Use:** Public-safe after product-stage framing.

**Interview Defense Notes:** Must avoid overstating traction if pre-launch or early beta.

**Related Files:**

- BUILDING/LANE.md
- TRANSFORMATION_STORIES/LANE.md
- CAREER_ASSETS/INTERVIEW_NARRATIVE.md

---

## CLAIM-008 — Svenklas

**Claim:** Nikhil is building Svenklas, a design-led travel accessories brand.

**Category:** Builder / Founder / Business

**Status:** User-confirmed / Public-approved (Decision 027). Nikhil is co-founder; brand is public; ₹70L monthly revenue and 300K+ units sold are public-safe but must not be over-amplified on the homepage.

**Evidence Needed:**

- Revenue claim evidence
- Units sold evidence
- Retail/distribution evidence
- Public website
- Founder role clarity

**Public Use:** Public-safe after evidence review.

**Interview Defense Notes:** Frame as founder/business-building credibility, not a distracting side project.

**Related Files:**

- BUILDING/SVENKLAS.md
- TRANSFORMATION_STORIES/SVENKLAS.md
- CAREER_ASSETS/INTERVIEW_NARRATIVE.md

---

## CLAIM-009 — Regulated Fintech, Payments, Healthcare, Entrepreneurship

**Claim:** Nikhil’s career spans regulated fintech, payments, healthcare, AI-native workflows, and entrepreneurship.

**Category:** Career Scope

**Status:** User-confirmed / Public-approved (Decision 027). Spans Airtel Payments Bank (regulated fintech), PayU (payments), GE Healthcare (healthcare), LANE (AI-native workflows), Svenklas (entrepreneurship). No names need to be avoided.

**Evidence Needed:**

- Resume
- Role history
- Company/project descriptions
- Public-safe career timeline

**Public Use:** Public-safe after resume alignment.

**Interview Defense Notes:** This is a broad positioning claim and must remain consistent across resume, LinkedIn, and website.

**Homepage Usage Note:** Approved for public homepage use (Decision 027). Evidence gate removed from this broad career-scope statement.

**Related Files:**

- FOUNDATION/03_POSITIONING.md
- CAREER_ASSETS/EXECUTIVE_RESUME.md
- CAREER_ASSETS/INTERVIEW_NARRATIVE.md

---

## CLAIM-010 — Design Organization Scale

**Claim:** Nikhil built or scaled the product design organization.

**Category:** Organizational Design

**Status:** User-confirmed / Public-approved (Decisions 027, 031). 0→20 design capability; 20 designers hired directly. Used publicly in the Building the Design Organization Draft v1 story and the homepage ledger. Supporting artifacts recommended; not externally verified.

**Evidence Needed:**

- Starting team size
- Current team size
- Timeline
- Hiring details
- Operating model introduced
- Public-safe phrasing

**Related Files:**

- TRANSFORMATION_STORIES/BUILDING_DESIGN_ORGANIZATION.md
- FOUNDATION/03_POSITIONING.md
- PAGES/HOME.md

---

## CLAIM-011 — AI-native Product Development Impact

**Claim:** Nikhil introduced AI-assisted product development workflows that changed design-to-engineering collaboration.

**Category:** AI-native Product Development

**Status:** User-confirmed / Public-approved (Decision 027; Story 2 Draft v1, Decision 036). 85% reduction in frontend QA/UAT time over two years via the AI-assisted / Vault (Figma MCP + Claude Code) workflow; for a single flow, QA/UAT moved from around 1 day to 1 hour or less. 20 designers used the workflow. Faster prototyping and handoff, better consistency, fewer QA defects, and reduced rework are confirmed/public-safe. "Zero developer dependency" is softened to reduced repetitive translation / lower routine-UI dependency. LANE is separate and was not part of this reduction. **External verification pending** — not externally verified; artifacts recommended.

**Evidence Needed:**

- Workflow description
- Tools used
- Before/after state
- Impact metrics
- Public-safe boundaries

**Related Files:**

- TRANSFORMATION_STORIES/AI_NATIVE_PRODUCT_DEVELOPMENT.md
- OPERATING_SYSTEM/AI_WORKFLOW.md
- BUILDING/LANE.md
- PAGES/HOME.md

---

## CLAIM-012 — Digital Gold Growth

**Claim:** Digital Gold adoption or growth increased significantly through behavioral product design changes.

**Category:** Behavioral Growth / Business Outcome

**Status:** Public-safe but evidence incomplete (Decision 027). KEEP GATED — the 28× figure stays hidden in public until baseline, final number, timeframe, exact metric type, and key product/design changes (attribution) are captured. ₹10/day SIP framing is accurate; the change was directly linked to product/design.

**Evidence Needed:**

- Exact metric
- Baseline
- Timeframe
- Product change
- Attribution
- Public-safe phrasing

**Related Files:**

- TRANSFORMATION_STORIES/DIGITAL_GOLD_GROWTH.md
- PAGES/HOME.md
- FRAMEWORKS/BEHAVIORAL_GROWTH_ENGINE.md

---

## CLAIM-013 — Product Scale

**Claim:** Worked across regulated financial products serving 12M+ monthly active users and 1B+ transactions since 2017.

**Category:** Product Scale

**Status:** User-confirmed / Public-approved (Decision 027). Public information; timeframe is since joining in 2017. Renders as verified numbers on the homepage ledger. Public/source artifact pending — recommended before final launch; not externally verified.

**Related Files:**

- FOUNDATION/03_POSITIONING.md
- PAGES/HOME.md
- lib/evidence-ledger.ts

---

# Metric Claims To Verify

Status reflects the homepage evidence intake (Decision 027). "Approved (public)" = user-confirmed and public-approved; artifacts still recommended and none are externally verified. Everything else stays gated.

| Claim | Confidence | Status |
|---|---|---|
| 0→20 design organization | User-confirmed | [x] Approved (public) |
| 20 designers hired directly | User-confirmed | [x] Approved (public) |
| 12M+ monthly active users | User-confirmed | [x] Approved (public) |
| 1B+ transactions | User-confirmed | [x] Approved (public) |
| 85% QA time reduction | User-confirmed | [x] Approved (public); external verification pending |
| Single-flow QA/UAT ~1 day → ~1 hour or less | User-confirmed | [x] Public-safe (Decision 036); external verification pending |
| 20 designers used AI-native workflow | User-confirmed | [x] Public-safe (Decision 036) |
| Svenklas ₹70L monthly revenue | User-confirmed | [x] Public-safe (not on homepage) |
| 300K+ units sold | User-confirmed | [x] Public-safe (not on homepage) |
| 28× digital gold growth | TBD | [ ] Gated — baseline/final/timeframe/metric-type/attribution pending |
| 62% fraud reduction | TBD | [ ] Needs Evidence |
| 39% fraud-related support handling | TBD | [ ] Needs Evidence |
| 32% higher average balance | TBD | [ ] Needs Evidence |
| 7× onboarding growth | TBD | [ ] Needs Evidence |
| 50+ field studies | User-confirmed | [x] Public-safe (Decision 031); used publicly in Story 1 §5 Research |
| 500+ user interviews | TBD | [ ] Gated — needs checking; use "field research and user conversations" |
| Awards and recognitions | TBD | [ ] Needs Evidence |

---

## Related Files

- QUALITY/CLAIMS_REVIEW.md
- EVIDENCE/METRICS_REGISTER.md
- EVIDENCE/AWARDS_VERIFICATION.md
- EVIDENCE/CASE_EVIDENCE.md
- EVIDENCE/INTERVIEW_DEFENSE.md
- EVIDENCE/CONFIDENTIALITY_RULES.md
- EVIDENCE/PUBLIC_PRIVATE_BOUNDARIES.md
- FOUNDATION/03_POSITIONING.md

## Notes

This file is part of the Nikhil Sharma Executive Knowledge System.
