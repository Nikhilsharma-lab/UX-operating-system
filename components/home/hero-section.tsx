import { CtaLink } from "@/components/cta-link";
import { SectionEyebrow } from "@/components/section-shell";

export function HeroSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="page-shell flex flex-col items-center text-center">
        <SectionEyebrow>AI-native Product Executive</SectionEyebrow>

        <h1 className="mt-6 max-w-[980px] font-editorial-serif font-light text-[clamp(2.1rem,6vw,5.5rem)] leading-[1.04] tracking-[-0.03em] text-ink">
          I build AI-native product organizations that turn ambiguity into
          measurable outcomes.
        </h1>

        <p className="mt-8 max-w-[640px] font-editorial-serif text-[18px] leading-[1.5] tracking-[0] text-olive-char">
          I lead product design across regulated fintech, design systems,
          customer trust, behavioral growth, and AI-native product
          development, building the teams, rituals, infrastructure, and
          decision systems that help organizations ship with clarity.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <CtaLink href="/transformations" variant="primary">
            Read Transformations
          </CtaLink>
          <CtaLink href="/operating-manual" variant="secondary">
            Explore Operating Manual
          </CtaLink>
          <CtaLink href="#contact" variant="ghost">
            Contact
          </CtaLink>
        </div>

        {/* editorial accent mark (1 of 2 on the page) */}
        <span
          aria-hidden="true"
          className="mt-9 block h-[4px] w-12 bg-highlighter-yellow"
        />
      </div>
    </section>
  );
}
