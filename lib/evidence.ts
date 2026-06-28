/**
 * Evidence governance for public rendering.
 *
 * Decision 007 (the Evidence Rule) forbids exposing unverified metrics as
 * final public claims. This module decides, per environment, whether internal
 * evidence status may surface and whether unverified numeric claims render.
 *
 * Internal governance must protect the product — it must not leak into the
 * public experience. So the public homepage never shows numeric claims that
 * are not `verified`, and never shows internal status language.
 */

export type ClaimStatus =
  | "verified"
  | "needs_evidence"
  | "private"
  | "do_not_publish";

export type EvidenceMode = "internal" | "public";

/**
 * Resolve the rendering mode.
 *
 * - Explicit override via `NEXT_PUBLIC_EVIDENCE_MODE` / `EVIDENCE_MODE`
 *   ("internal" | "public") wins — use this to preview either mode on a
 *   staging deploy.
 * - Otherwise: production builds render `public`; dev renders `internal`.
 */
export function evidenceMode(): EvidenceMode {
  const explicit =
    process.env.NEXT_PUBLIC_EVIDENCE_MODE ?? process.env.EVIDENCE_MODE;
  if (explicit === "internal" || explicit === "public") return explicit;
  return process.env.NODE_ENV === "production" ? "public" : "internal";
}

/** A claim's numeric value may render publicly only when verified. */
export function canPublishNumeric(status: ClaimStatus): boolean {
  return status === "verified";
}
