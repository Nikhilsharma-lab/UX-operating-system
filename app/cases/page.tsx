import type { Metadata } from "next";
import Link from "next/link";
import { ImageSlot } from "@/components/image-slot";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CASE_STRUCTURE, caseSlots } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Cases · Nikhil Sharma",
  description:
    "Product and UX cases built around business problems, journey diagnosis, strategic design decisions, shipped experience, and measurable outcomes.",
};

const metaLabel =
  "font-geometric-mono text-[11px] font-medium uppercase tracking-[0.07em]";

export default function CasesIndex() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="py-20 md:py-24">
          <div className="page-shell">
            <header className="mb-12 max-w-[760px]">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="font-geometric-mono text-[12px] font-medium tabular-nums text-ink">
                    00
                  </span>
                  <span className="text-[12px] font-medium uppercase leading-[17px] tracking-[0.06em] font-geometric-mono text-lichen">
                    Cases
                  </span>
                </div>
                <span className={`${metaLabel} text-sage`}>
                  Case archive · In preparation
                </span>
              </div>
              <h1 className="font-editorial-serif font-light text-[clamp(2rem,4.4vw,3rem)] leading-[1.06] tracking-[-0.02em] text-ink">
                Product and UX cases built around business problems, design decisions, and measurable outcomes.
              </h1>
              <div className="mt-5 space-y-3 t-body text-olive-char">
                <p>
                  This section will hold polished product and UX cases showing
                  how business problems, user journeys, strategic design
                  decisions, shipped experience, and measurable outcomes came
                  together.
                </p>
                <p className="border-l border-khaki-olive pl-4 t-body-sm text-lichen">
                  The structure is public, but full cases will be added only
                  after Nikhil provides the underlying evidence, artifacts,
                  metrics, role details, and public-safe product context.
                </p>
              </div>
            </header>

            <ul className="grid gap-5 sm:grid-cols-2">
              {caseSlots.map((slot) => {
                const inner = (
                  <>
                    <div className="flex items-center justify-between border-b border-ash px-5 py-2.5">
                      <span className={`${metaLabel} text-lichen`}>
                        Case {slot.number}
                      </span>
                      <span className={`${metaLabel} text-sage`}>
                        {slot.status}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-4 p-5">
                      <ImageSlot
                        label={`Image slot · Case ${slot.number} artifact`}
                        note="Lead artifact pending: before/after journey frame or annotated flow."
                        ratio="3/2"
                      />
                      {slot.slug && (
                        <h2 className="font-headline-serif text-[22px] font-normal leading-[1.16] tracking-[0] text-ink">
                          {slot.title}
                        </h2>
                      )}
                      <p className="max-w-[520px] t-body-sm text-olive-char">
                        {slot.description}
                      </p>
                      {slot.metricSignal && (
                        <p className={`${metaLabel} text-lichen`}>
                          {slot.metricSignal}
                        </p>
                      )}
                      {slot.slug && (
                        <span className="mt-auto inline-flex items-center gap-2 font-geometric-mono text-[13px] font-medium tracking-[-0.01em] text-ink">
                          Read case
                          <span aria-hidden="true" className="text-lichen">
                            →
                          </span>
                        </span>
                      )}
                    </div>
                  </>
                );
                return (
                  <li key={slot.number}>
                    {slot.slug ? (
                      <Link
                        href={`/cases/${slot.slug}`}
                        className="group flex h-full flex-col rounded-lg border border-ash bg-paper transition-colors hover:border-olive-char"
                      >
                        {inner}
                      </Link>
                    ) : (
                      <div className="flex h-full flex-col rounded-lg border border-ash bg-paper">
                        {inner}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <section className="mt-16 border-t border-ash pt-8">
              <div className="mb-6 max-w-[720px]">
                <p className={`${metaLabel} mb-4 text-lichen`}>
                  Future case structure
                </p>
                <h2 className="font-heading-serif text-[24px] font-normal leading-[1.18] tracking-[0] text-ink">
                  Built for senior product case reports.
                </h2>
                <div className="mt-4 space-y-3 t-body-sm text-olive-char">
                  <p>
                    These cases will not follow a generic portfolio format. Each
                    case will start with the business problem, then show the
                    user journey, the strategic design bet, the key decisions,
                    the shipped experience, and the measurable outcome.
                  </p>
                  <p className="text-lichen">
                    The goal is to show how product design changed behavior,
                    not just how screens were produced.
                  </p>
                </div>
              </div>

              <ol className="grid gap-x-10 gap-y-2.5 border-t border-ash pt-6 sm:grid-cols-2">
                {CASE_STRUCTURE.map((title, i) => (
                  <li key={title} className="flex items-baseline gap-4">
                    <span className="w-6 shrink-0 font-geometric-mono text-[12px] tabular-nums text-sage">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-editorial-serif text-[17px] leading-[1.4] text-carbon">
                      {title}
                    </span>
                  </li>
                ))}
              </ol>

              <p className="mt-8 max-w-[660px] border-l border-khaki-olive pl-4 t-body-sm text-lichen">
                Full case content will be written after evidence intake. This
                structure is designed for senior product case reports: business
                problem first, user journey second, strategic bet third,
                experience and outcome evidence after that.
              </p>
            </section>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
