import { SectionShell } from "@/components/section-shell";
import { evidenceMode } from "@/lib/evidence";
import { resolveLedger } from "@/lib/evidence-ledger";

type SnapshotItem = {
  label: string;
  lines: string[];
};

const items: SnapshotItem[] = [
  {
    label: "Leadership",
    lines: [
      "Head of Product Design at Airtel Payments Bank.",
      "Built and scaled product design capability from 0→20 across consumer banking, merchant, and internal product ecosystems.",
    ],
  },
  {
    label: "Organization",
    lines: [
      "Built design rituals, critique systems, research practices, design reviews, operating rhythms, hiring systems, and cross-functional product collaboration models.",
    ],
  },
  {
    label: "Scale",
    lines: [
      "Worked across regulated financial products serving 12M+ monthly active users and 1B+ transactions since 2017.",
    ],
  },
  {
    label: "Outcomes",
    lines: [
      "Contributed to measurable outcomes across growth, trust, onboarding, fraud prevention, AI-assisted implementation speed, and design-system maturity.",
    ],
  },
  {
    label: "Building",
    lines: [
      "Building LANE, an AI-native product operating system for product and design teams.",
      "Co-founder of Svenklas, a design-led travel accessories brand.",
    ],
  },
];

function ProofLedger() {
  const mode = evidenceMode();
  const { rows, hasNumbers } = resolveLedger(mode);
  const hasPending = rows.some((r) => r.value === undefined);

  return (
    <div className="mb-14">
      <p className="mb-4 t-caption font-geometric-mono uppercase tracking-[0.06em] text-lichen">
        {hasNumbers ? "Selected outcomes from transformation work" : "Scope"}
      </p>
      <div className="grid border-t border-ash sm:grid-cols-2 sm:gap-x-12">
        {rows.map((row) => (
          <div
            key={row.key}
            className="flex items-baseline gap-5 border-b border-ash py-3.5"
          >
            {row.value ? (
              <span className="w-20 shrink-0 font-editorial-serif text-[22px] leading-none tracking-[-0.01em] tabular-nums text-ink">
                {row.value}
              </span>
            ) : (
              <span
                aria-hidden="true"
                className="mt-2.5 h-px w-5 shrink-0 bg-olive-char"
              />
            )}
            <span
              className={
                row.value
                  ? "t-body-sm text-olive-char"
                  : "text-[15px] font-medium tracking-[-0.01em] text-ink"
              }
            >
              {row.label}
            </span>
          </div>
        ))}
      </div>
      {mode === "internal" && hasPending && (
        <p className="mt-4 t-caption font-geometric-mono text-sage">
          Internal view · some figures pending Evidence Review · hidden in
          public mode.
        </p>
      )}
    </div>
  );
}

export function ExecutiveSnapshot() {
  return (
    <SectionShell
      id="executive-snapshot"
      index="01"
      eyebrow="Executive Snapshot"
      title="Design leadership at the intersection of product, AI, trust, and business outcomes."
      intro={
        <>
          <p>
            My work spans product design leadership, AI-native product
            development, regulated fintech, customer trust, behavioral growth,
            design systems, research, healthcare, payments, and
            entrepreneurship.
          </p>
        </>
      }
    >
      <ProofLedger />

      <ul className="grid gap-px overflow-hidden rounded-lg border border-ash bg-ash sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <li
            key={item.label}
            className={`flex flex-col gap-3 bg-paper p-6 ${
              index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
            }`}
          >
            <span className="t-caption font-geometric-mono font-medium uppercase tracking-[0.04em] text-lichen">
              {item.label}
            </span>
            <div className="space-y-2">
              {item.lines.map((line, i) => (
                <p key={i} className="t-body-sm text-carbon">
                  {line}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
