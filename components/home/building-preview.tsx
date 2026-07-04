import { ImageSlot } from "@/components/image-slot";
import { SectionShell } from "@/components/section-shell";

const ventures = [
  {
    name: "LANE",
    tag: "AI product operating system",
    copy: "LANE is an AI-native product operating system for product and design teams, built from the belief that product work should begin with clearer problems, better decisions, and stronger validation before execution.",
  },
  {
    name: "Svenklas",
    tag: "Design-led consumer brand",
    copy: "Svenklas is a design-led travel accessories brand that brings founder-level ownership into product, brand, manufacturing, distribution, and commercial execution.",
  },
];

export function BuildingPreview() {
  return (
    <SectionShell
      id="building"
      index="08"
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
      <div className="grid border-t border-ash md:grid-cols-2">
        {ventures.map((venture, index) => (
          <div
            key={venture.name}
            className={`flex flex-col gap-4 border-b border-ash py-8 md:border-b-0 md:py-2 ${
              index === 0 ? "md:pr-10" : "md:border-l md:border-ash md:pl-10"
            }`}
          >
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-rubric text-[11px] font-medium uppercase tracking-[0.1em] text-lichen">
                Venture {String(index + 1).padStart(2, "0")}
              </p>
              <p className="font-rubric text-[11px] uppercase tracking-[0.1em] text-sage">
                {venture.tag}
              </p>
            </div>
            <h3 className="font-headline-serif text-[26px] font-normal leading-[1.12] tracking-[0] text-ink">
              {venture.name}
            </h3>
            <p className="max-w-[460px] t-body-sm text-olive-char">
              {venture.copy}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <ImageSlot
          label="Image slot 02 · LANE"
          note="Public-safe product image pending (interface crop or brand mark)."
          ratio="3/2"
        />
        <ImageSlot
          label="Image slot 03 · Svenklas"
          note="Product photography pending. Real assets only."
          ratio="3/2"
        />
      </div>
      <div className="mt-10 flex items-center gap-3">
        <p className="font-geometric-mono text-[12px] font-medium uppercase tracking-[0.06em] text-lichen">
          Building archive in development
        </p>
      </div>
    </SectionShell>
  );
}
