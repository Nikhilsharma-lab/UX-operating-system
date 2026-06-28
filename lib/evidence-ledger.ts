import type { ClaimStatus } from "./evidence";

export type LedgerMetric = {
  value: string;
  label: string;
  status: ClaimStatus;
  source: string;
  /** Polished, public-safe phrasing used when the numeric claim cannot publish. */
  publicSafeFallback: string;
  claimId?: string;
};

/**
 * Executive Snapshot ledger.
 *
 * `verified` metrics (user-confirmed + public-approved during intake) render
 * their numbers publicly. Everything still under review renders its
 * `publicSafeFallback` (no numbers) in public mode. Flip a metric to
 * `verified` once it is approved in EVIDENCE/CLAIMS_REGISTER.md.
 */
export const executiveLedger: LedgerMetric[] = [
  {
    value: "0→20",
    label: "Design organization built",
    status: "verified",
    source: "EVIDENCE/CLAIMS_REGISTER.md",
    publicSafeFallback: "Design organization built",
    claimId: "CLAIM-010",
  },
  {
    value: "12M+",
    label: "Monthly active users",
    status: "verified",
    source: "EVIDENCE/CLAIMS_REGISTER.md",
    publicSafeFallback: "Consumer banking scale",
    claimId: "CLAIM-SCALE",
  },
  {
    value: "1B+",
    label: "Transactions served",
    status: "verified",
    source: "EVIDENCE/CLAIMS_REGISTER.md",
    publicSafeFallback: "Transaction scale",
    claimId: "CLAIM-SCALE",
  },
  {
    value: "85%",
    label: "QA time reduction",
    status: "verified",
    source: "EVIDENCE/CLAIMS_REGISTER.md",
    publicSafeFallback: "AI-native product development",
    claimId: "CLAIM-011",
  },
  {
    // GATED — public-safe but evidence incomplete (baseline/final/timeframe/attribution pending)
    value: "28×",
    label: "Digital gold growth",
    status: "needs_evidence",
    source: "EVIDENCE/CLAIMS_REGISTER.md",
    publicSafeFallback: "Behavioral growth",
    claimId: "CLAIM-012",
  },
  {
    // not part of this intake — remains gated
    value: "62%",
    label: "Fraud reduction",
    status: "needs_evidence",
    source: "EVIDENCE/CLAIMS_REGISTER.md",
    publicSafeFallback: "Customer trust systems",
    claimId: "CLAIM-006",
  },
  {
    // not part of this intake — remains gated
    value: "500+",
    label: "User interviews",
    status: "needs_evidence",
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
 * - public: verified metrics as numeric rows; everything else as its
 *   deduped public-safe fallback label; `do_not_publish` omitted.
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
      if (m.status === "verified") {
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
