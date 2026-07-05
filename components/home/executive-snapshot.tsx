import { SectionShell } from "@/components/section-shell";

type SnapshotItem = {
  label: string;
  lines: string[];
};

/*
 * Executive Snapshot (homepage IA cleanup, Decision 056): the identity grid,
 * correctly named. The metric ledger moved out to the Selected Outcomes
 * strip; this section answers who Nikhil is, the level and scale he operates
 * at, the organizational systems he has built, and what he is building now.
 */
const items: SnapshotItem[] = [
  {
    label: "Leadership",
    lines: [
      "Head of Product Design at Airtel Payments Bank.",
      "Built and scaled product design capability from 0→20 across consumer, merchant, and internal product ecosystems.",
    ],
  },
  {
    label: "Organization",
    lines: [
      "Built the rituals, research practices, design reviews, hiring systems, and cross-functional operating rhythms behind a maturing product design organization.",
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
      "Contributed to measurable outcomes across growth, trust, onboarding, fraud prevention, design-system maturity, and AI-assisted implementation speed.",
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

export function ExecutiveSnapshot() {
  return (
    <SectionShell
      id="executive-snapshot"
      bordered={false}
      title="Executive Snapshot"
      intro={
        <p>
          A quick view of the leadership scope, organizational systems, scale,
          outcomes, and builder work behind the site.
        </p>
      }
    >
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
