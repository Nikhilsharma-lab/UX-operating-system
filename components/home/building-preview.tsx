import { EditorialArt } from "@/components/editorial/editorial-art";
import { SectionShell } from "@/components/section-shell";

/*
 * Ventures as illustrated plates (homepage recomposition): each venture
 * pairs its copy with an editorial art plate and a caption that states,
 * in the system's voice, that real imagery is in public-safe review.
 * Replaces the bare "Image slot NN" reservation panels.
 */
const ventures = [
  {
    name: "LANE",
    tag: "AI product operating system",
    copy: "LANE is an AI-native product operating system for product and design teams, built from the belief that product work should begin with clearer problems, better decisions, and stronger validation before execution.",
    artSlot: "home.building.lane-plate",
    artVariant: "diagram-painting" as const,
    caption: "LANE · Interface imagery joins after public-safe review.",
  },
  {
    name: "Svenklas",
    tag: "Design-led consumer brand",
    copy: "Svenklas is a design-led travel accessories brand that brings founder-level ownership into product, brand, manufacturing, distribution, and commercial execution.",
    artSlot: "home.building.svenklas-plate",
    artVariant: "spot" as const,
    caption: "Svenklas · Product photography is in preparation. Real assets only.",
  },
];

export function BuildingPreview() {
  return (
    <SectionShell
      id="building"
      eyebrow="Building"
      title="The operating philosophy, productized."
      intro={
        <p className="text-lichen">
          LANE and Svenklas are not side projects. They are builder proof that
          the operating philosophy extends beyond advisory language into product
          and business creation.
        </p>
      }
    >
      <div className="grid gap-12 border-t border-ash pt-10 md:grid-cols-2 md:gap-14">
        {ventures.map((venture, index) => (
          <article key={venture.name} className="flex flex-col gap-4">
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-rubric text-[11px] font-medium uppercase tracking-[0.1em] text-lichen">
                Venture {String(index + 1).padStart(2, "0")}
              </p>
              <p className="font-rubric text-[11px] uppercase tracking-[0.1em] text-sage">
                {venture.tag}
              </p>
            </div>
            <h3 className="t-hed-card text-ink">{venture.name}</h3>
            <p className="max-w-[460px] t-body-sm text-olive-char">
              {venture.copy}
            </p>
            <figure className="mt-auto pt-5">
              <EditorialArt
                slotId={venture.artSlot}
                variant={venture.artVariant}
                aspect="plate"
              />
              <figcaption className="t-caption mt-3 text-sage">
                {venture.caption}
              </figcaption>
            </figure>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
