import { SectionShell } from "@/components/section-shell";
import { EvidenceGateLabel } from "@/components/evidence-gate-label";

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

export function ExecutiveSnapshot() {
  return (
    <SectionShell
      id="executive-snapshot"
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
      <ul className="grid gap-px overflow-hidden rounded-lg border border-ash bg-ash sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.label} className="flex flex-col gap-3 bg-paper p-6">
            <div className="flex items-center justify-between gap-3">
              <span className="t-caption font-geometric-mono font-medium uppercase text-lichen">
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
