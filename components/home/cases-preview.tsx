import Link from "next/link";
import { SectionShell } from "@/components/section-shell";
import { caseSlots } from "@/lib/cases";

const metaLabel =
  "font-geometric-mono text-[11px] font-medium uppercase tracking-[0.07em]";

export function CasesPreview() {
  return (
    <SectionShell
      id="cases"
      index="05"
      eyebrow="Cases"
      title="Director-level product and UX cases, in preparation."
      intro={
        <>
          <p>
            A future home for Director-level product and UX cases showing how
            business problems, journey diagnosis, design decisions, and shipped
            experience moved measurable outcomes.
          </p>
          <p className="text-lichen">
            Cases are added only after the underlying evidence, artifacts, and
            public-safe product context are in place.
          </p>
        </>
      }
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {caseSlots.map((slot) => (
          <li
            key={slot.number}
            className="flex flex-col rounded-lg border border-ash bg-paper"
          >
            <div className="flex items-center justify-between border-b border-ash px-4 py-2.5">
              <span className={`${metaLabel} text-lichen`}>
                Case {slot.number}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-4">
              <span className={`${metaLabel} text-sage`}>{slot.status}</span>
              <p className="t-body-sm text-olive-char">
                Reserved for a full case report after evidence intake.
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Link
          href="/cases"
          className="inline-flex items-center gap-2 font-geometric-mono text-[13px] font-medium tracking-[-0.01em] text-ink transition-colors hover:text-lichen"
        >
          See the case structure
          <span aria-hidden="true" className="text-lichen">
            →
          </span>
        </Link>
      </div>
    </SectionShell>
  );
}
