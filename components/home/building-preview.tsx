import { SectionShell } from "@/components/section-shell";
import { CtaLink } from "@/components/cta-link";

const ventures = [
  {
    name: "LANE",
    copy: "LANE is an AI-native product operating system for product and design teams — built from the belief that product work should begin with clearer problems, better decisions, and stronger validation before execution.",
  },
  {
    name: "Svenklas",
    copy: "Svenklas is a design-led travel accessories brand that brings founder-level ownership into product, brand, manufacturing, distribution, and commercial execution.",
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
          LANE and Svenklas are not side projects. They are builder proof — that
          the operating philosophy extends beyond advisory language into product
          and business creation.
        </p>
      }
    >
      <ul className="grid gap-6 md:grid-cols-2">
        {ventures.map((venture) => (
          <li
            key={venture.name}
            className="flex flex-col gap-4 rounded-lg border border-ash bg-paper p-6"
          >
            <h3 className="font-editorial-serif text-[24px] font-normal leading-[1.15] tracking-[-0.01em] text-ink">
              {venture.name}
            </h3>
            <p className="t-body-sm text-olive-char">{venture.copy}</p>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <CtaLink href="#building" variant="secondary">
          Explore Building
        </CtaLink>
      </div>
    </SectionShell>
  );
}
