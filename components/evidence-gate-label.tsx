import { evidenceMode } from "@/lib/evidence";

/**
 * Internal-only claim indicator.
 *
 * Renders nothing in public mode — internal governance language must never
 * leak into the public experience. In internal/staging mode it shows a quiet,
 * restrained marker (never the words "evidence-gated").
 */
export function EvidenceGateLabel() {
  if (evidenceMode() === "public") return null;

  return (
    <span
      title="Internal: claim pending Evidence Review. Not shown publicly."
      className="inline-flex items-center whitespace-nowrap rounded-sm border border-khaki-olive px-1.5 py-0.5 align-middle font-geometric-mono text-[10px] font-medium uppercase tracking-[0.06em] text-lichen"
    >
      Evidence review pending
    </span>
  );
}
