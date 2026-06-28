import { SectionShell } from "@/components/section-shell";
import { EvidenceGateLabel } from "@/components/evidence-gate-label";
import { evidenceMode } from "@/lib/evidence";
import { resolveLedger } from "@/lib/evidence-ledger";

type SnapshotItem = {
  label: string;
  lines: string[];
  gated: boolean;
};

const items: SnapshotItem[] = [
  {
    label: "Leadership",
    lines: [
      "Head of Product Design at Airtel Payments Bank.",
      "Built and scaled product design capability across consumer banking, merchant, and internal product ecosystems.",
    ],
    gated: true,
  },
  {
    label: "Organization",
    lines: [
      "Built design rituals, critique systems, research practices, design reviews, operating rhythms, hiring systems, and cross-functional product collaboration models.",
    ],
    gated: true,
  },
  {
    label: "Scale",
    lines: [
      "Worked across products serving millions of users in regulated financial environments.",
    ],
    gated: true,
  },
  {
    label: "Outcomes",
    lines: [
      "Contributed to measurable outcomes across growth, trust, onboarding, fraud prevention, implementation speed, and design-system maturity.",
    ],
    gated: true,
  },
  {
    label: "Building",
    lines: [
      "Building LANE, an AI-native product operating system for product and design teams.",
      "Building Svenklas, a design-led travel accessories brand.",
    ],
    gated: true,
  },
];

function ProofLedger() {
  const mode = evidenceMode();
  const { rows, hasNumbers } = resolveLedger(mode);

  return (
    <div className="mb-14">
      <p className="mb-4 t-caption font-geometric-mono uppercase tracking-[0.06em] text-lichen">
        {hasNumbers ? "Selected outcomes" : "Scope"}
      </p>
      <div className="grid border-t border-ash sm:grid-cols-2 sm:gap-x-12">
        {rows.map((row, index) => (
          <div
            key={row.key}
            className="flex items-baseline gap-5 border-b border-ash py-3.5"
          >
            {row.value ? (
              <span className="w-20 shrink-0 font-editorial-serif text-[22px] leading-none tracking-[-0.01em] tabular-nums text-ink">
                {row.value}
              </span>
            ) : (
              <span className="w-20 shrink-0 font-geometric-mono text-[12px] tabular-nums text-sage">
                {String(index + 1).padStart(2, "0")}
              </span>
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
      {mode === "internal" && (
        <p className="mt-4 t-caption font-geometric-mono text-sage">
          Internal view · evidence review pending · numbers hidden in public
          mode.
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
            design systems, research, and entrepreneurship.
          </p>
          <p className="text-lichen">
            This is not a collection of projects. It is a record of systems
            built, decisions made, and outcomes created.
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
            <div className="flex items-center justify-between gap-3">
              <span className="t-caption font-geometric-mono font-medium uppercase tracking-[0.04em] text-lichen">
                {item.label}
              </span>
              {item.gated && <EvidenceGateLabel />}
            </div>
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
