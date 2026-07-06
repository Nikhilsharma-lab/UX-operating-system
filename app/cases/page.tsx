import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { caseProjects } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Cases · Nikhil Sharma",
  description:
    "A structured library of larger product systems and the individual UX and product cases inside them. IA prototype; names and content are placeholders.",
};

const metaLabel =
  "font-geometric-mono text-[11px] font-medium uppercase tracking-[0.07em]";
const cardCta =
  "inline-flex items-center gap-2 font-geometric-mono text-[13px] font-medium tracking-[-0.01em] text-ink transition-colors group-hover:text-lichen";

/*
 * Cases IA prototype (Decision 061): a case-archive library organized as
 * big product systems, each holding nested placeholder case cards that link
 * to placeholder case landing pages. Every name and line of copy is a
 * generic placeholder; the structure is public but the content is not real.
 */
export default function CasesIndex() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="page-shell py-20 md:py-24">
          {/* Hero */}
          <header className="max-w-[760px]">
            <p className="text-[12px] font-medium uppercase leading-[17px] tracking-[0.1em] font-rubric text-lichen">
              Cases
            </p>
            <h1 className="mt-5 t-hed-1 text-balance text-ink">
              Product systems and UX cases currently being prepared.
            </h1>
            <p className="mt-5 t-dek text-olive-char">
              This page will organize larger product systems and the individual
              UX and product cases inside them. Real project names, evidence,
              artifacts, metrics, and narratives will be added after the case
              material is finalized.
            </p>
            <p className="mt-6 rounded-lg border border-ash bg-bone px-5 py-4 t-body-sm text-lichen">
              <span className={`${metaLabel} mb-1 block text-sage`}>
                Editorial note
              </span>
              This is an IA prototype. The structure is public-facing, but the
              case names and content are placeholders.
            </p>
          </header>

          {/* Big project sections */}
          <div className="mt-16 space-y-16 md:mt-20 md:space-y-24">
            {caseProjects.map((project) => (
              <section
                key={project.slug}
                aria-labelledby={`${project.slug}-title`}
              >
                {/* Project header */}
                <div className="border-t border-ink pt-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <div className="flex items-baseline gap-4">
                      <span className="font-geometric-mono text-[13px] font-medium tabular-nums text-ink">
                        {project.number}
                      </span>
                      <h2
                        id={`${project.slug}-title`}
                        className="t-hed-2 text-ink"
                      >
                        {project.title}
                      </h2>
                    </div>
                    <span className={`${metaLabel} text-sage`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="mt-4 max-w-[680px] t-dek text-olive-char">
                    {project.overview}
                  </p>

                  {/* Scope */}
                  <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1">
                    {project.scope.map((item, i) => (
                      <span
                        key={item}
                        className={`${metaLabel} flex items-center text-lichen`}
                      >
                        {i > 0 && (
                          <span aria-hidden="true" className="mr-2 text-ash">
                            ·
                          </span>
                        )}
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Nested case cards */}
                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {project.cases.map((card) => (
                    <li key={card.slug} className="flex">
                      <Link
                        href={`/cases/${project.slug}/${card.slug}`}
                        className="group flex w-full flex-col rounded-lg border border-ash bg-paper p-5 transition-colors hover:border-olive-char"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className={`${metaLabel} text-lichen`}>
                            {card.category}
                          </span>
                          <span className="font-geometric-mono text-[12px] tabular-nums text-sage">
                            {card.number}
                          </span>
                        </div>

                        <h3 className="mt-4 t-hed-card text-ink">
                          {card.title}
                        </h3>
                        <p className="mt-2 t-body-sm text-olive-char">
                          {card.summary}
                        </p>

                        <div className="mt-6 flex items-center justify-between gap-3 border-t border-ash pt-4">
                          <span className={`${metaLabel} text-sage`}>
                            {card.status}
                          </span>
                          <span className={cardCta}>
                            {card.ctaLabel}
                            <span aria-hidden="true" className="text-lichen">
                              →
                            </span>
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
