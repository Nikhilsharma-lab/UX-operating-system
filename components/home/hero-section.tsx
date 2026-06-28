import { CtaLink } from "@/components/cta-link";
import { SectionEyebrow } from "@/components/section-shell";

export function HeroSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="page-shell grid gap-12 md:grid-cols-[minmax(0,1fr)_240px] md:gap-16">
        <div className="max-w-[820px]">
          <SectionEyebrow>AI-native Product Executive</SectionEyebrow>

          <h1 className="mt-6 font-editorial-serif font-light text-[clamp(2.4rem,6vw,5.5rem)] leading-[1.02] tracking-[-0.03em] text-ink">
            I build AI-native product organizations that turn ambiguity into
            measurable outcomes.
          </h1>

          <p className="mt-8 max-w-[620px] t-body text-olive-char">
            I lead product design across regulated fintech, design systems,
            customer trust, behavioral growth, and AI-assisted product
            development — building the teams, rituals, infrastructure, and
            decision systems that help organizations ship with clarity.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <CtaLink href="#transformations" variant="primary">
              Read Transformations
            </CtaLink>
            <CtaLink href="#operating-manual" variant="secondary">
              Explore Operating Manual
            </CtaLink>
            <CtaLink href="#contact" variant="ghost">
              Contact
            </CtaLink>
          </div>
        </div>

        <aside className="md:pt-3">
          <div className="border-t border-ash pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-1">
            <p className="t-caption font-geometric-mono uppercase text-sage">
              The belief
            </p>
            <p className="mt-3 font-editorial-serif text-[18px] font-light leading-[1.35] tracking-[-0.01em] text-carbon">
              Design creates systems that create products.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
