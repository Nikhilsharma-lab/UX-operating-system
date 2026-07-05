import { SectionShell } from "@/components/section-shell";
import { evidenceMode } from "@/lib/evidence";
import { resolveLedger } from "@/lib/evidence-ledger";

/*
 * Selected Outcomes (homepage IA cleanup, Decision 056): a compact metric
 * strip — fast proof before the reader enters Cases / Transformations /
 * Manual. Rendering stays fully evidence-gated via resolveLedger: only
 * public-approved or externally-verified numbers render publicly; anything
 * still under review shows its polished public-safe fallback label, and the
 * pending note renders in internal mode only.
 */
export function SelectedOutcomes() {
  const mode = evidenceMode();
  const { rows } = resolveLedger(mode);
  const hasPending = rows.some((r) => r.value === undefined);

  return (
    <SectionShell id="selected-outcomes" title="Selected Outcomes">
      <dl className="grid grid-cols-2 border-t border-ash sm:grid-cols-3 lg:grid-cols-4">
        {rows.map((row) => (
          <div
            key={row.key}
            className="flex flex-col gap-2 border-b border-ash py-6 pr-6"
          >
            {row.value ? (
              <dt className="font-editorial-serif text-[22px] leading-none tracking-[-0.01em] tabular-nums text-ink">
                {row.value}
              </dt>
            ) : (
              <dt aria-hidden="true" className="mt-2.5 h-px w-5 bg-olive-char" />
            )}
            <dd
              className={
                row.value
                  ? "t-body-sm text-olive-char"
                  : "text-[15px] font-medium tracking-[-0.01em] text-ink"
              }
            >
              {row.label}
            </dd>
          </div>
        ))}
      </dl>
      {mode === "internal" && hasPending && (
        <p className="mt-4 t-caption font-geometric-mono text-sage">
          Internal view · some figures pending Evidence Review · hidden in
          public mode.
        </p>
      )}
    </SectionShell>
  );
}
