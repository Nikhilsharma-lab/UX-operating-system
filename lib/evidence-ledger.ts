import type { ClaimStatus, ExternalVerification } from "./evidence";
import { canPublishNumeric } from "./evidence";

export type LedgerMetric = {
  value: string;
  label: string;
  status: ClaimStatus;
  /** Whether an independent artifact exists. Public-approved claims are "pending". */
  externalVerification: ExternalVerification;
  source: string;
  /** Polished, public-safe phrasing used when the numeric claim cannot publish. */
  publicSafeFallback: string;
  claimId?: string;
};

/**
 * Executive Snapshot ledger.
 *
 * `public_approved` metrics (user-confirmed during intake) render their
 * numbers publicly even though `externalVerification` is still "pending";
 * approval is enough to render; an artifact is only needed to claim external
 * verification. Everything still under review (`needs_evidence`) renders its
 * `publicSafeFallback` (no numbers) in public mode.
 */
export const executiveLedger: LedgerMetric[] = [
  {
    value: "0→20",
    label: "Product design capability built and scaled",
    status: "public_approved",
    externalVerification: "pending",
    source: "EVIDENCE/CLAIMS_REGISTER.md",
    publicSafeFallback: "Design organization built",
    claimId: "CLAIM-010",
  },
  {
    value: "12M+",
    label: "Monthly active users across regulated financial products",
    status: "public_approved",
    externalVerification: "pending",
    source: "EVIDENCE/CLAIMS_REGISTER.md",
    publicSafeFallback: "Consumer banking scale",
    claimId: "CLAIM-013",
  },
  {
    value: "1B+",
    label: "Transactions since 2017",
    status: "public_approved",
    externalVerification: "pending",
    source: "EVIDENCE/CLAIMS_REGISTER.md",
    publicSafeFallback: "Transaction scale",
    claimId: "CLAIM-013",
  },
  {
    value: "85%",
    label: "QA/UAT reduction through AI-assisted workflow",
    status: "public_approved",
    externalVerification: "pending",
    source: "EVIDENCE/CLAIMS_REGISTER.md",
    publicSafeFallback: "AI-native product development",
    claimId: "CLAIM-011",
  },
  {
    // Public-approved by Nikhil as a selected headline outcome (Decision 046).
    // External verification pending; the full Digital Gold story adds
    // baseline/timeframe/metric definition/attribution before publication.
    value: "28×",
    label: "Digital Gold purchase growth",
    status: "public_approved",
    externalVerification: "pending",
    source: "EVIDENCE/CLAIMS_REGISTER.md",
    publicSafeFallback: "Behavioral growth",
    claimId: "CLAIM-012",
  },
  {
    // Public-approved by Nikhil (Decision 046); external verification pending.
    // Label kept deliberately narrow ("fraud-related") until the exact metric
    // definition is documented.
    value: "62%",
    label: "Fraud-related reduction",
    status: "public_approved",
    externalVerification: "pending",
    source: "EVIDENCE/CLAIMS_REGISTER.md",
    publicSafeFallback: "Customer trust systems",
    claimId: "CLAIM-006",
  },
  {
    // Public-approved by Nikhil (Decision 046); external verification pending.
    // Framed as interviews + research conversations, not a hard interview count.
    value: "500+",
    label: "User interviews / research conversations",
    status: "public_approved",
    externalVerification: "pending",
    source: "EVIDENCE/CLAIMS_REGISTER.md",
    publicSafeFallback: "Field research depth",
  },
];

export type LedgerRow = {
  key: string;
  /** Present only when a number is allowed to render. */
  value?: string;
  label: string;
};

/**
 * Resolve the ledger to renderable rows for the given mode.
 * - internal: every metric as a numeric row (value + label).
 * - public: public-approved / externally-verified metrics as numeric rows;
 *   everything else as its deduped public-safe fallback label;
 *   `do_not_publish` omitted.
 */
export function resolveLedger(
  mode: EvidenceModeLike,
  metrics: LedgerMetric[] = executiveLedger,
): { rows: LedgerRow[]; hasNumbers: boolean } {
  const rows: LedgerRow[] = [];

  if (mode === "internal") {
    for (const m of metrics) {
      if (m.status === "do_not_publish") continue;
      rows.push({ key: m.label, value: m.value, label: m.label });
    }
  } else {
    const seen = new Set<string>();
    for (const m of metrics) {
      if (m.status === "do_not_publish") continue;
      if (canPublishNumeric(m.status)) {
        rows.push({ key: m.label, value: m.value, label: m.label });
      } else {
        if (seen.has(m.publicSafeFallback)) continue;
        seen.add(m.publicSafeFallback);
        rows.push({ key: m.publicSafeFallback, label: m.publicSafeFallback });
      }
    }
  }

  return { rows, hasNumbers: rows.some((r) => r.value !== undefined) };
}

type EvidenceModeLike = "internal" | "public";
