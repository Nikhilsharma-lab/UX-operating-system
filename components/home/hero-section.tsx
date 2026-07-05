import { SectionEyebrow } from "@/components/section-shell";

export function HeroSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="page-shell flex flex-col items-center text-center">
        <SectionEyebrow>AI-native Product Executive</SectionEyebrow>

        <h1 className="mt-6 max-w-[980px] t-display text-ink">
          From ambiguity to shipped outcomes.
        </h1>

        <p className="mt-8 max-w-[640px] t-dek text-olive-char">
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
