# Migration Plan — Dark "Dead‑Simple / kamran.fyi" Redesign + Flat Case IA

> Status: **PLAN ONLY** (no code written yet). Prepared for owner review.
> Reference prototype: [`sample-director-portfolio.html`](./sample-director-portfolio.html) (the approved fork).

## Decisions locked by the owner

1. **Direction: full kamran‑minimal.** Drop the painterly `EditorialArt` engine, the tile‑grid‑face hero, and the sticker‑album. Collapse the magazine "lead story / photo gallery" layouts into a single‑column, text‑first flow with simple cards. **Keep real owner photos**; drop decorative illustration.
2. **Fonts: system sans only.** `system-ui` stack + monospace utility layer (exactly like the prototype). No serif. Archive — do not delete — the proprietary New Yorker faces.
3. **Scope of this document:** the plan. Implementation happens later, on a branch, after this is approved.

### Assumed defaults (override anytime)
- **Dark is the default theme**, with a working light/dark **toggle** (persisted to `localStorage`, set pre‑paint to avoid flash) — the prototype's pattern.
- **Single accent = warm amber** (`oklch(0.82 0.105 76)`), replacing the current accent blue `#0879bf`.
- **Case #7 canonical slug = `ai-led-support-automation`** (matches the data slug; the folder `ai-and-automation` is renamed to match).
- **Add 301 redirects** from old nested case URLs to the flat ones (hygiene, regardless of current indexing).

---

## 1. Target design (what "done" looks like)

The whole site adopts the prototype's system:

- **One warm near‑black ground** (dark) / warm‑paper (light), single centered column (~640–680px), generous top space.
- **System sans throughout**, small and understated; hierarchy carried by **weight + color + uppercase letter‑spaced labels**, not big size jumps or serif display.
- **Undecorated, hover‑only links**; subtle bordered cards; one amber accent used sparingly (metrics, badges).
- **Calm motion only** (the existing `reveal` / entrance system, reduced‑motion honored). No scroll‑jacking, no full‑viewport illustrated sections.

Promote the prototype into a **new design authority**: extract its dark+light **oklch tokens**, the **system‑sans type scale**, spacing, and toggle behavior into a rewritten `DESIGN.md` (v2) and, optionally, `design-audit/dark-system.json`. Every future visual value traces here (the same discipline as the old New Yorker system, new source).

---

## 2. Preservation contract ("without losing anything")

| Preserved | How |
|---|---|
| All copy / written content | Untouched; only containers restyle |
| All 8 case studies + their bespoke page layouts | Pages move, content and structure stay |
| Real owner photos (executive snapshot etc.) | Kept; only surrounding layout simplifies |
| Evidence gating + ledger (`lib/evidence*.ts`) | **Not touched** — decoupled from cases and from the visual layer |
| Program grouping (Safe Second Account → Safety/Trust/…) | Demoted from URL nesting to **metadata tags** (still shown as badges) |
| Routes & external links | Flat routes + **301 redirects** from old nested URLs |
| Motion system | `reveal` / `hero-enter` are design‑agnostic; kept |
| `check:type` regression guard | **Retargeted** to the new scale, not removed |
| Full decision history | New decision **supersedes** old ones (they stay in the log); old authority files **archived**, not deleted |
| Token *names* | Kept stable, so future reskins remain one‑file cheap |

**Intentionally dropped (the one real "loss," and the point of the redesign):** the painterly `EditorialArt` plates, the tile‑grid hero illustration, and the sticker‑album — editorial *decoration*, not content.

---

## 3. Track A — Visual system migration

Single highest‑leverage fact: almost every text surface flows through the shared `t-*` classes + `SectionShell` in [`app/globals.css`](./app/globals.css). Redefining those reskins ~13 of 18 components at once.

### A0 — New design authority
- Rewrite [`DESIGN.md`](./DESIGN.md) to the dark system (tokens, type scale, spacing, motion, toggle). Optional: `design-audit/dark-system.json` as the machine source.

### A1 — Token + type + font swap (mostly one file)
**In [`app/globals.css`](./app/globals.css) `@theme`:**
- Reassign every `--color-*` value to the warm **oklch** dark palette; add a `:root[data-theme="light"]` override block (values from the prototype). **Keep the names.**
- Repoint `--font-*` tokens to system stacks (`--font-sans` = `system-ui, -apple-system, …`; add a mono token for the data layer). Serif tokens (`--font-editorial-serif`, `--font-heading-serif`, …) collapse to the sans stack.
- Rewrite the `t-*` type classes from Caslon/Irvin serif → the system‑sans scale (small, understated; weights 500–700; tight tracking). Keep `measure-article` ≈ 600–640px.

**In [`app/layout.tsx`](./app/layout.tsx):**
- Remove the `next/font/local` serif imports (Caslon/Irvin/Neutraface/Graphik) and the `Inter` google import; the `--font-*` tokens now resolve to system fonts. (Keep the font files in `app/fonts/` but unwired — archived.)
- Add `data-theme` on `<html>`, the **pre‑paint theme script**, and mount the **theme toggle** button (top‑right, sun/moon) — port from the prototype.

**Token remap reference (names stay, values change):**

| Semantic name(s) | New role (dark) |
|---|---|
| `vellum`, `paper` | page bg / card surface (`--bg`, `--surface`) |
| `carbon` | raised surface (`--surface-2`) |
| `ink` | primary text (`--text`) |
| `olive-char`, `lichen`, `moss` | body / muted text |
| `sage`, `footer-muted` | muted / faint |
| `ash`, `khaki-olive`, `rule-dark` | hairlines (`--line`, `--line-2`, translucent) |
| `on-dark`, `on-dark-muted` | fold into text/muted (whole site is dark now) |
| `bone` | warm tint bands → subtle `surface` panels (or just whitespace) |
| `accent-blue`, `highlighter-yellow` | amber accent |

**Type‑role remap (serif → sans), high level:** `t-body-serif` (Caslon 21px) → sans ~16–17/1.6 reading text · `t-display-feature`/`t-hed-1/2/3` → sans headings (600–700, modest sizes) · `t-dek` → sans lead/intro · `t-rubric`/`t-caption`/`t-meta`/`t-nav` → uppercase letter‑spaced sans/mono labels · `t-mix-hed/dek` → sans.

### A2 — Simple‑remap components (reskin for free with A1)
`cta-link`, `reveal`, `evidence-gate-label`, `image-slot`, `contact-section`, `evolution-preview`, `manual-section`, `cases-section`, `site-footer`. Cleanup only: shrink `rounded-lg`, replace `bg-bone` hovers with `surface`.

### A3 — Moderate components
- `section-shell` — rubric voice → uppercase sans label.
- `site-header` — Irvin serif wordmark → sans wordmark (already dark; sticky + mobile menu kept).
- `selected-outcomes` — Caslon metric numbers → sans/mono tabular; grid + evidence gating stay.
- `executive-snapshot` — **keep the real photos**; simplify the "Today's Mix" stagger to a plain grid/list.

### A4 — Heavy items → per "full kamran‑minimal" they mostly get *simplified or removed*, not re‑illustrated
- `hero-section` — replace the near‑black tile‑grid feature hero with the prototype's text‑first hero (name + role + thesis line). Drop `hero-face-grid.jpeg`.
- `belief-section` / `thinking-section` — remove drop‑caps and the full‑viewport fiction‑page composition; render as plain single‑column sections (content preserved).
- `featured-transformations` / `building-preview` — drop `EditorialArt` plates; render as **simple card lists** (kamran project‑card style). Content (transformations, Ventures LANE/Svenklas) preserved as cards/links.
- `editorial/editorial-art.tsx` — **remove** (hardcoded hex, tied to the retired art system). Delete its imports.
- **Homepage IA** ([`app/page.tsx`](./app/page.tsx)): reflow the 11 sections into the kamran single‑column order — Hero → Thesis → Selected Work (case cards) → Outcomes → Transformations/Ventures/Manual/Thinking as compact card‑lists or links → Contact. **No section's content is deleted** — heavy illustrated sections become lightweight lists. (Confirm the exact reduced order during A4.)

---

## 4. Track B — Flat case IA (independent of Track A; can ship first)

### B1 — Move routes up to `app/cases/<slug>/`

| Case | From | To (flat) |
|---|---|---|
| Fraud Alarm | `app/cases/safe-second-account/safety/fraud-alarm/` | `app/cases/fraud-alarm/` |
| Transparent Banking | `…/safe-second-account/trust/transparent-banking/` | `app/cases/transparent-banking/` |
| CKYC Onboarding | `…/safe-second-account/digital-onboarding/ckyc-onboarding/` | `app/cases/ckyc-onboarding/` |
| Welcome Kit | `…/safe-second-account/activation/welcome-kit/` | `app/cases/welcome-kit/` |
| Airtel Payments Bank App | `app/cases/big-project/airtel-payments-bank-app/` | `app/cases/airtel-payments-bank-app/` |
| Airtel Payments Bank for Business | `…/big-project/airtel-payments-bank-for-business/` | `app/cases/airtel-payments-bank-for-business/` |
| AI‑led Support Automation | `…/big-project/ai-and-automation/` | `app/cases/ai-led-support-automation/` *(slug fix)* |
| Digital Gold Growth | `app/cases/[slug]` (dynamic) | unchanged — already flat |

### B2 — Delete
- Empty parents: `app/cases/safe-second-account/`, `app/cases/big-project/`.
- The placeholder‑only nested dynamic route `app/cases/[slug]/[subSlug]/[caseSlug]/` (it only ever rendered fake "Big Project 02–05" scaffold).
- **Keep** `app/cases/[slug]/page.tsx` (serves `digital-gold-growth`) and `app/cases/page.tsx` (index). Static segments take precedence over the sibling `[slug]` — already how the repo works today.

### B3 — Data model + link fixes ([`lib/cases.ts`](./lib/cases.ts))
- Remove nesting: delete `CaseSubproject`, the `subprojects` container on `CaseBigProject`, and the resolvers `getCaseStudyRef`, `allCaseParams`, `caseCount`. Delete the placeholder `project-01…04` scaffold.
- Add a flat `realCases[]` registry: `{ slug, title, category, status, summary, href: '/cases/<slug>', project?, subproject? }`. `project`/`subproject` become **display‑only tags** (e.g. badge "Safe Second Account · Safety").
- Rewrite nested `href`s → `/cases/<slug>` (lines ~227/251/275).
- Fix the index card links in [`app/cases/page.tsx`](./app/cases/page.tsx) (was building `/cases/${project}/${sub}/${study}`) and restructure the project→subproject band into a flat, optionally tag‑grouped list.
- Fix the homepage [`components/home/cases-section.tsx`](./components/home/cases-section.tsx) (reads `subprojects.length` / `caseCount`).
- Rewrite the **18 `related[]` cross‑links** to flat URLs:
  - `lib/ai-support-automation-case.ts` — lines 316, 320, 324
  - `lib/airtel-payments-bank-app-case.ts` — 350, 354, 358, 362
  - `lib/airtel-payments-bank-for-business-case.ts` — 294, 298, 302, 306, 310
  - `lib/ckyc-onboarding-case.ts` — 236, 238
  - `lib/transparent-banking-case.ts` — 223
  - `lib/welcome-kit-case.ts` — 271, 275, 279
- Update in‑page breadcrumb/hierarchy chips + `<title>` metadata in each moved page (drop the literal "Big Project" crumb; keep "Safe Second Account · Safety" as a tag if desired).
- Add 301 redirects (old nested → flat) in `next.config`.

### Evidence gating — no changes
`lib/evidence.ts` / `lib/evidence-ledger.ts` and their consumers (`selected-outcomes`, `evidence-gate-label`, transformations route) never import the case system. Flattening cannot break gating.

---

## 5. Track C — Governance & guards (preserve the trail)

1. **Log Decision 072** in [`DECISION_LOG.md`](./DECISION_LOG.md): "Adopt dark system‑sans visual system (kamran.fyi direction) + flat case IA; supersedes 065/032/033/034/051/052/054/055/057/058." (WORKING‑RULES requires recorded owner approval before overwriting design‑authority docs — this is it.)
2. Rewrite the **Design‑authority** section of [`CLAUDE.md`](./CLAUDE.md) and replace [`DESIGN.md`](./DESIGN.md) to name the new authority (drop "must trace to `nyer-observed.json`").
3. Amend [`WORKING-RULES.md`](./WORKING-RULES.md) rules 1–5; supersede [`ART-DIRECTION.md`](./ART-DIRECTION.md) (retire the warm‑paper art system).
4. **Retarget** [`scripts/check-type.mjs`](./scripts/check-type.mjs): replace the `/caslon/i`, 21px, weight‑400, ≤640px assertions with the new system‑sans scale (family ≠ serif, new sizes, weights 500–700, measure ~600). Keep it as the guard.
5. Mirror Decision 072 into [`PROGRAM_INDEX.md`](./PROGRAM_INDEX.md) §7 (and refresh Decision 008's "DESIGN.md contract" note); append an `[Unreleased]` entry to [`CHANGELOG.md`](./CHANGELOG.md).
6. **Archive, don't delete:** `design-audit/nyer-observed.*` and `app/fonts/` (proprietary faces) → mark historical.

---

## 6. Sequencing & checkpoints (on a branch)

1. **C1** — Decision 072 + new `DESIGN.md` (authorize first).
2. **A1 → A2/A3** — tokens/type/fonts + toggle. **Checkpoint:** build + eyeball every route, light & dark.
3. **A4** — hero, drop‑caps, art removal, homepage reflow. **Checkpoint:** visual QA.
4. **C4** — retarget `check:type`; get `lint` + `NEXT_DIST_DIR=.next-prod npm run build` + `check:type` green.
5. **Track B** — case de‑nesting (parallelizable with A, or ship first as a quick win). Verify links + redirects.
6. **C (rest)** — finish governance docs; archive old authority.
7. **Full QA** — every route, both themes, link integrity, redirects, guards green.

---

## 7. Risks & mitigations

| Risk | Mitigation |
|---|---|
| `check:type` fails the build the moment types change | Retarget it in the same step as A1 (step 4 above) |
| `editorial-art.tsx` uses hardcoded hex (won't auto‑reskin) | Remove it deliberately in A4; delete importers |
| Broken internal links after de‑nesting | Fix the 18 `related[]` links + index + homepage (listed in B3); 301s cover external |
| Governance contradiction (docs still say "measure New Yorker") | Decision 072 + doc rewrites must land (Track C) |
| "Full kamran‑minimal" accidentally deletes content | Rule: illustrated sections become *lightweight lists/cards*, never removed content |

---

## 8. Definition of done

- Every route renders in **light and dark**, single‑column, system‑sans, no serif, no illustration plates.
- Theme toggle works, persists, no flash on load, reduced‑motion honored.
- All 8 cases live at flat `/cases/<slug>`; old nested URLs 301 → flat; no broken internal links.
- `npm run lint`, `NEXT_DIST_DIR=.next-prod npm run build`, and `npm run check:type` (retargeted) all pass.
- Decision 072 logged; `CLAUDE.md`/`DESIGN.md`/`WORKING-RULES.md`/`ART-DIRECTION.md` updated; `PROGRAM_INDEX.md` + `CHANGELOG.md` reflect the pivot; old authority + fonts archived.
- Evidence gating, ledger, and all copy verified unchanged.

---

## 9. Still open (small, non‑blocking)

- Exact reduced **homepage section order** for the kamran flow (decide during A4; content all preserved).
- Whether program grouping shows as **badges on the index** or is dropped from view entirely (kept in data either way).
- Confirm the **amber accent** vs. another single accent.
