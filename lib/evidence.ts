/**
 * Evidence governance for public rendering.
 *
 * Decision 007 (the Evidence Rule) forbids exposing unsupported metrics as
 * final public claims. Decision 028 sharpens the vocabulary:
 *
 * - "public_approved": Nikhil has confirmed the claim is accurate and safe
 *   to use publicly. It MAY render publicly, but it is NOT independently
 *   supported by an artifact.
 * - "externally_verified": a supporting artifact exists (public source,
 *   resume, report, analytics record, screenshot, document). Stronger than
 *   public_approved; also renders publicly. Use ONLY when an artifact exists.
 * - "needs_evidence": gated; must not render publicly as a hard claim yet.
 *
 * The public renderer keys off public-approval (`canPublishNumeric`), never
 * off an "externally verified" flag, and we never label a public_approved
 * claim "externally verified".
 */

export type ClaimStatus =
  | "public_approved"
  | "externally_verified"
  | "needs_evidence"
  | "private"
  | "do_not_publish";

/** Independent-artifact state, tracked separately from public approval. */
export type ExternalVerification = "pending" | "confirmed";

export type EvidenceMode = "internal" | "public";

/**
 * Resolve the rendering mode.
 *
 * - Explicit override via `NEXT_PUBLIC_EVIDENCE_MODE` / `EVIDENCE_MODE`
 *   ("internal" | "public") wins; use this to preview either mode on a
 *   staging deploy.
 * - Otherwise: production builds render `public`; dev renders `internal`.
 */
export function evidenceMode(): EvidenceMode {
  const explicit =
    process.env.NEXT_PUBLIC_EVIDENCE_MODE ?? process.env.EVIDENCE_MODE;
  if (explicit === "internal" || explicit === "public") return explicit;
  return process.env.NODE_ENV === "production" ? "public" : "internal";
}

/**
 * A claim's numeric value may render publicly once it is public-approved
 * (user-confirmed) or externally verified. Public approval is sufficient;
 * an artifact is not required to render, only to claim external verification.
 */
export function canPublishNumeric(status: ClaimStatus): boolean {
  return status === "public_approved" || status === "externally_verified";
}
