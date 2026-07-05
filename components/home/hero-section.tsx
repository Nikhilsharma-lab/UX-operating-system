import { SectionEyebrow } from "@/components/section-shell";

export function HeroSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="page-shell flex flex-col items-center text-center">
        <SectionEyebrow>AI-native Product Executive</SectionEyebrow>

        <h1 className="mt-6 max-w-[980px] font-editorial-serif font-light text-[clamp(2.1rem,6vw,5.5rem)] leading-[1.04] tracking-[-0.03em] text-ink">
          From ambiguity to shipped outcomes.
        </h1>

        <p className="mt-8 max-w-[640px] font-editorial-serif text-[18px] leading-[1.5] tracking-[0] text-olive-char">
          I build AI-native product design organizations that turn unclear
          problems into trusted systems, faster decisions, and measurable
          product impact.
        </p>

        {/* editorial accent mark (1 of 2 on the page) */}
        <span
          aria-hidden="true"
          className="mt-9 block h-[4px] w-12 bg-highlighter-yellow"
        />
      </div>
    </section>
  );
}
