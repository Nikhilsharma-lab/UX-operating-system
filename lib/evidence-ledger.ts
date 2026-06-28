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
 * Every numeric value here is currently unverified, so in public mode the
 * ledger renders the `publicSafeFallback` (no numbers). Flip a metric to
 * `status: "verified"` once it passes Evidence Review in
 * EVIDENCE/CLAIMS_REGISTER.md and its number will render publicly.
 */
export const executiveLedger: LedgerMetric[] = [
  {
    value: "0→12",
    label: "Design organization built",
    status: "needs_evidence",
    source: "EVIDENCE/CLAIMS_REGISTER.md",
    publicSafeFallback: "Design organization built",
    claimId: "CLAIM-010",
  },
  {
    value: "12M+",
    label: "Monthly active users served",
    status: "needs_evidence",
    source: "EVIDENCE/CLAIMS_REGISTER.md",
    publicSafeFallback: "Consumer banking scale",
  },
  {
    value: "85%",
    label: "QA/UAT reduction",
    status: "needs_evidence",
    source: "EVIDENCE/CLAIMS_REGISTER.md",
    publicSafeFallback: "AI-native product development",
    claimId: "CLAIM-011",
  },
  {
    value: "62%",
    label: "Fraud reduction",
    status: "needs_evidence",
    source: "EVIDENCE/CLAIMS_REGISTER.md",
    publicSafeFallback: "Customer trust systems",
    claimId: "CLAIM-006",
  },
  {
    value: "28×",
    label: "Digital gold growth",
    status: "needs_evidence",
    source: "EVIDENCE/CLAIMS_REGISTER.md",
    publicSafeFallback: "Behavioral growth",
    claimId: "CLAIM-012",
  },
  {
    value: "500+",
    label: "User interviews",
    status: "needs_evidence",
    source: "EVIDENCE/CLAIMS_REGISTER.md",
    publicSafeFallback: "Field research depth",
  },
  {
    value: "50",
    label: "Field studies",
    status: "needs_evidence",
    source: "EVIDENCE/CLAIMS_REGISTER.md",
    // dedupes against "Field research depth" in public mode
    publicSafeFallback: "Field research depth",
  },
  {
    value: "20+",
    label: "Design hires",
    status: "needs_evidence",
    source: "EVIDENCE/CLAIMS_REGISTER.md",
    // dedupes against "Design organization built" in public mode
    publicSafeFallback: "Design organization built",
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
