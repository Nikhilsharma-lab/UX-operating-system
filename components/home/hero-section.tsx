import { CtaLink } from "@/components/cta-link";
import { SectionEyebrow } from "@/components/section-shell";

const systemMaps = [
  "Organizations",
  "Workflows",
  "Decisions",
  "Evidence",
  "Outcomes",
];

export function HeroSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="page-shell grid gap-12 md:grid-cols-[minmax(0,1fr)_260px] md:gap-16">
        <div className="max-w-[820px]">
          <SectionEyebrow>AI-native Product Executive</SectionEyebrow>

          <h1 className="mt-6 font-editorial-serif font-light text-[clamp(2.1rem,6vw,5.5rem)] leading-[1.04] tracking-[-0.03em] text-ink">
            I build AI-native product organizations that turn ambiguity into
            measurable outcomes.
          </h1>

          <p className="mt-8 max-w-[640px] font-editorial-serif text-[18px] leading-[1.5] tracking-[0] text-olive-char">
            I lead product design across regulated fintech, design systems,
            customer trust, behavioral growth, and AI-native product
            development, building the teams, rituals, infrastructure, and
            decision systems that help organizations ship with clarity.
          </p>

          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
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

        <aside>
          <div className="border-t border-ash pt-6 md:border-l md:border-t-0 md:pl-6 md:pt-1">
            <p className="text-[12px] font-medium uppercase tracking-[0.1em] font-rubric text-lichen">
              The belief
            </p>
            <p className="mt-3 font-editorial-serif text-[19px] font-light leading-[1.3] tracking-[-0.01em] text-carbon">
              Design creates systems that create products.
            </p>

            <hr className="my-6 border-0 border-t border-ash" />

            <p className="text-[12px] font-medium uppercase tracking-[0.1em] font-rubric text-lichen">
              This system maps
            </p>
            <ul className="mt-3 border-t border-ash">
              {systemMaps.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-3 border-b border-ash py-2"
                >
                  <span className="font-geometric-mono text-[11px] tabular-nums text-sage">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-geometric-mono text-[13px] tracking-[-0.02em] text-carbon">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
