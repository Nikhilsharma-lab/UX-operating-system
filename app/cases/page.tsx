import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { caseProjects } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Cases · Nikhil Sharma",
  description:
    "A structured library of larger product systems, the subprojects inside them, and the individual UX and product cases. IA prototype; names and content are placeholders.",
};

const metaLabel =
  "font-geometric-mono text-[11px] font-medium uppercase tracking-[0.07em]";
const cardCta =
  "inline-flex items-center gap-2 font-geometric-mono text-[13px] font-medium tracking-[-0.01em] text-ink transition-colors group-hover:text-lichen";

/*
 * Nested Cases IA prototype (Decision 062): a case-archive library organized
 * as Big Project → Subproject → Case Study. Subprojects sit in an indented
 * band under each big project so the nesting is unmistakable. Every name and
 * line of copy is a generic placeholder; the structure is public, the content
 * is not real.
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
              Product systems, subprojects, and UX cases currently being
              prepared.
            </h1>
            <p className="mt-5 t-dek text-olive-char">
              This page will organize larger product systems, the subprojects
              inside them, and the individual UX and product cases that document
              strategy, journey diagnosis, design decisions, shipped experience,
              and measurable outcomes.
            </p>
            <p className="mt-6 rounded-lg border border-ash bg-bone px-5 py-4 t-body-sm text-lichen">
              <span className={`${metaLabel} mb-1 block text-sage`}>
                Editorial note
              </span>
              This is an IA prototype. Project names, subproject names, case
              names, metrics, artifacts, and narratives are placeholders until
              Nikhil provides the final case material.
            </p>
          </header>

          {/* Big projects */}
          <div className="mt-16 space-y-20 md:mt-20 md:space-y-28">
            {caseProjects.map((project) => (
              <section
                key={project.slug}
                aria-labelledby={`${project.slug}-title`}
              >
                {/* Big project header */}
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

                {/* Subproject bands, indented under the big project */}
                <div className="mt-10 space-y-12 md:border-l md:border-ash md:pl-8 lg:pl-10">
                  {project.subprojects.map((sub) => (
                    <section
                      key={sub.slug}
                      aria-labelledby={`${project.slug}-${sub.slug}-title`}
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                        <div className="flex items-baseline gap-4">
                          <span className="font-geometric-mono text-[12px] font-medium tabular-nums text-lichen">
                            {project.number}.{sub.number}
                          </span>
                          <h3
                            id={`${project.slug}-${sub.slug}-title`}
                            className="t-hed-3 text-ink"
                          >
                            {sub.title}
                          </h3>
                        </div>
                        <span className={`${metaLabel} text-sage`}>
                          {sub.status}
                        </span>
                      </div>

                      <p className="mt-3 max-w-[620px] t-body-serif text-olive-char">
                        {sub.description}
                      </p>

                      {/* Case cards */}
                      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {sub.cases.map((study) => (
                          <li key={study.slug} className="flex">
                            <Link
                              href={`/cases/${project.slug}/${sub.slug}/${study.slug}`}
                              className="group flex w-full flex-col rounded-lg border border-ash bg-paper p-5 transition-colors hover:border-olive-char"
                            >
                              <div className="flex items-center justify-between gap-3">
                                <span className={`${metaLabel} text-lichen`}>
                                  {study.category}
                                </span>
                                <span className="font-geometric-mono text-[12px] tabular-nums text-sage">
                                  {study.number}
                                </span>
                              </div>

                              <h4 className="mt-4 t-hed-card text-ink">
                                {study.title}
                              </h4>
                              <p className="mt-2 t-body-sm text-olive-char">
                                {study.summary}
                              </p>

                              <div className="mt-6 flex items-center justify-between gap-3 border-t border-ash pt-4">
                                <span className={`${metaLabel} text-sage`}>
                                  {study.status}
                                </span>
                                <span className={cardCta}>
                                  {study.ctaLabel}
                                  <span
                                    aria-hidden="true"
                                    className="text-lichen"
                                  >
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
              </section>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
