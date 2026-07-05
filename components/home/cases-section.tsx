import Link from "next/link";
import { SectionShell } from "@/components/section-shell";
import { caseSlots } from "@/lib/cases";

const readLink =
  "inline-flex items-center gap-2 font-geometric-mono text-[13px] font-medium tracking-[-0.01em] text-ink transition-colors hover:text-lichen";

const liveCases = caseSlots.filter((slot) => slot.slug);
const forthcomingCount = caseSlots.length - liveCases.length;
const countWords = ["no", "one", "two", "three", "four"] as const;

/*
 * Cases as a compact standalone section (homepage IA cleanup, Decision 056):
 * the case-archive rail content from the former library band, now placed
 * before Transformations per the target IA. Content unchanged; forthcoming
 * cases stay one intentional editorial note, never empty reservation cards.
 */
export function CasesSection() {
  return (
    <SectionShell
      id="cases"
      title="Case Reports"
      intro={
        <p>
          Senior product and UX cases, published only after the evidence,
          artifacts, and public-safe context clear review.
        </p>
      }
    >
      <div className="grid gap-10 border-t border-ash pt-8 md:grid-cols-2 md:gap-14">
        {liveCases.map((slot) => (
          <article key={slot.number}>
            <p className="font-rubric text-[11px] font-medium uppercase tracking-[0.1em] text-sage">
              Case {slot.number} · {slot.status}
            </p>
            <h3 className="mt-3 t-hed-card text-ink">
              <Link
                href={`/cases/${slot.slug}`}
                className="transition-colors hover:text-olive-char"
              >
                {slot.title}
              </Link>
            </h3>
            <p className="mt-2 max-w-[460px] t-body-sm text-olive-char">
              {slot.description}
            </p>
            <div className="mt-4">
              <Link href={`/cases/${slot.slug}`} className={readLink}>
                Read case
                <span aria-hidden="true" className="text-lichen">
                  →
                </span>
              </Link>
            </div>
          </article>
        ))}

        <div className="flex flex-col justify-between gap-6 md:border-l md:border-ash md:pl-14">
          {forthcomingCount > 0 && (
            <p className="max-w-[420px] t-body-sm text-olive-char">
              In evidence review:{" "}
              {countWords[forthcomingCount] ?? forthcomingCount} further case
              {forthcomingCount === 1 ? " report joins" : " reports join"} the
              archive as artifacts clear review.
            </p>
          )}
          <div>
            <Link href="/cases" className={readLink}>
              See the case structure
              <span aria-hidden="true" className="text-lichen">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
