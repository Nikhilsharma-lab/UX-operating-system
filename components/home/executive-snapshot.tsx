import Image from "next/image";
import { SectionShell } from "@/components/section-shell";

type SnapshotItem = {
  label: string;
  /** 3-4 word heading above the plate, extracted from the approved copy. */
  heading: string;
  lines: string[];
  imageSrc: string;
  imageAlt: string;
  /** Fixed aspect box keeps the row's flush-bottom stagger. */
  aspectClass: string;
  /** Crop focus inside the fixed aspect box. */
  objectClass: string;
  /** Static per-column class so Tailwind can see it. */
  colClass: string;
};

/*
 * Executive Snapshot as a staggered editorial gallery (owner reference).
 * Anatomy per column: rubric + short heading riding on top of the plate,
 * plate bottoms flush across the row (two-row grid, row 1 bottom-aligned),
 * descriptions starting together beneath. The stagger comes from varied
 * plate heights against the shared baseline. Plates are the owner-supplied
 * photographs (Decision 058 amendment); copy is the Decision 056 approved
 * set, unchanged.
 */
const items: SnapshotItem[] = [
  {
    label: "Leadership",
    heading: "Built the design function",
    lines: [
      "Head of Product Design at Airtel Payments Bank.",
      "Built and scaled product design capability from 0→20 across consumer, merchant, and internal product ecosystems.",
    ],
    imageSrc: "/art/home-snapshot-leadership.jpg",
    imageAlt:
      "Pastel apartment blocks assembling in a clear sky like puzzle pieces above a finished tower.",
    aspectClass: "aspect-[2/3]",
    objectClass: "object-cover object-bottom",
    colClass: "lg:col-start-1",
  },
  {
    label: "Organization",
    heading: "Rituals, reviews, hiring systems",
    lines: [
      "Built the rituals, research practices, design reviews, hiring systems, and cross-functional operating rhythms behind a maturing product design organization.",
    ],
    imageSrc: "/art/home-snapshot-organization.jpg",
    imageAlt:
      "A figure standing in profile with a single butterfly wing rising above, on a pale pink field.",
    aspectClass: "aspect-square",
    objectClass: "object-cover object-top",
    colClass: "lg:col-start-2",
  },
  {
    label: "Scale",
    heading: "Regulated financial products",
    lines: [
      "Worked across regulated financial products serving 12M+ monthly active users and 1B+ transactions since 2017.",
    ],
    imageSrc: "/art/home-snapshot-scale.jpg",
    imageAlt:
      "A crane lowering a building block onto a growing stack of office floors against a blue sky.",
    aspectClass: "aspect-[3/4]",
    objectClass: "object-cover object-center",
    colClass: "lg:col-start-3",
  },
  {
    label: "Building",
    heading: "LANE and Svenklas",
    lines: [
      "Building LANE, an AI-native product operating system for product and design teams.",
      "Co-founder of Svenklas, a design-led travel accessories brand.",
    ],
    imageSrc: "/art/home-snapshot-building.jpg",
    imageAlt:
      "Concrete housing blocks lifting off from a skyline into a pale sky.",
    aspectClass: "aspect-[3/4]",
    objectClass: "object-cover object-center",
    colClass: "lg:col-start-4",
  },
];

export function ExecutiveSnapshot() {
  return (
    <SectionShell
      id="executive-snapshot"
      bordered={false}
      align="center"
      title="Executive Snapshot"
      intro={
        <p>
          A quick view of the leadership scope, organizational systems, scale,
          and builder work behind the site.
        </p>
      }
    >
      <ul className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[auto_auto] lg:gap-y-6">
        {items.map((item) => (
          <li key={item.label} className="flex flex-col gap-5 lg:contents">
            {/* Rubric + plate: row 1, bottom-aligned so plate bottoms are
                flush and the rubrics stagger with the varied plate heights. */}
            <div
              className={`flex flex-col justify-end ${item.colClass} lg:row-start-1`}
            >
              <span className="t-caption font-geometric-mono font-medium uppercase tracking-[0.04em] text-lichen">
                {item.label}
              </span>
              <div className={`relative mt-3 ${item.aspectClass}`}>
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                  className={item.objectClass}
                />
              </div>
            </div>

            {/* Heading + subheading: row 2, New Yorker "Today's Mix"
                hierarchy (measured 1:1). The heading reserves two lines at
                lg so every subheading starts on the same line across the row. */}
            <div className={`${item.colClass} lg:row-start-2`}>
              <h3 className="t-mix-hed text-balance text-ink lg:min-h-[56px]">
                {item.heading}
              </h3>
              <div className="mt-2 space-y-2">
                {item.lines.map((line, i) => (
                  <p key={i} className="t-mix-dek">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
