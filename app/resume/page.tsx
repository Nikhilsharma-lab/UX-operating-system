import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { ArticleHead, Section, P, BulletList } from "@/components/article";
import { cv } from "@/lib/resume-cv";

/*
 * Résumé page (Decision 075; layout + polish pass 076), in the dark kamran
 * language: a single reading column inside <PageShell>, long-form content via
 * the shared article helpers. 100% of the content comes from lib/resume-cv.ts
 * (the owner's CV PDF); the PDF's visual design is NOT copied.
 *
 * Layout intent: the Executive snapshot is the evidence anchor (largest
 * non-heading type on the page); Experience is a hairline-separated record;
 * Signature work is a ruled ledger (title | outcome), not cards; ventures are
 * the only cards, so they read as distinct. Calm, uniform section cadence -
 * white space as a leadership signal.
 */

export const metadata: Metadata = {
  title: "Résumé · Nikhil Sharma",
  description: `${cv.name} · ${cv.title}`,
};

const subLabel = "text-[11px] font-medium uppercase tracking-wider text-sage";

export default function ResumePage() {
  return (
    <PageShell>
      <ArticleHead
        eyebrow="Résumé"
        title={cv.name}
        dek={cv.title}
        meta={[
          { label: "Email", value: cv.contact.email },
          { label: "Phone", value: cv.contact.phone },
          { label: "LinkedIn", value: cv.contact.linkedin },
        ]}
      />

      <a
        href="/nikhil-sharma-resume.pdf"
        download
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent-blue/40 bg-accent-blue/10 px-4 py-1.5 text-[13px] font-medium text-accent-blue transition-colors hover:bg-accent-blue/[0.16]"
      >
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-3.5 w-3.5">
          <path d="M8 2.5v7m0 0 3-3m-3 3-3-3M3 13h10" />
        </svg>
        Download résumé
      </a>

      {/* Summary */}
      <Section label="Summary">
        {cv.summary.map((t, i) => (
          <P key={i}>{t}</P>
        ))}
      </Section>

      {/* Executive snapshot - the evidence anchor */}
      <Section label="Executive snapshot">
        <div className="space-y-7">
          {cv.snapshot.map((g) => (
            <div key={g.label}>
              <p className={subLabel}>{g.label}</p>
              <div className="mt-3.5 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
                {g.stats.map((s) => (
                  <div key={s.note}>
                    <div className="text-[25px] font-medium leading-none tracking-tight tabular-nums text-ink">
                      {s.value}
                    </div>
                    <div className="mt-2 text-[12.5px] leading-snug text-lichen">
                      {s.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience - hairline-separated record */}
      <Section label="Experience">
        <div>
          {cv.experience.map((job, ji) => (
            <div
              key={`${job.company}-${job.role}`}
              className={ji > 0 ? "mt-8 border-t border-ash pt-8" : ""}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                <h3 className="text-[16px] font-medium text-ink">{job.company}</h3>
                <span className="text-[12.5px] tabular-nums text-sage">{job.dates}</span>
              </div>
              <p className="mt-0.5 text-[13.5px] text-lichen">{job.role}</p>
              {job.intro && <P>{job.intro}</P>}
              <div className="mt-5 space-y-4">
                {job.groups.map((grp, gi) => (
                  <div key={gi}>
                    {grp.label && <p className={`${subLabel} mb-2.5`}>{grp.label}</p>}
                    <BulletList items={grp.bullets} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Signature work - ruled ledger: title | outcome */}
      <Section label="Signature work">
        <div className="border-t border-ash">
          {cv.signatureWork.map((w) => (
            <div key={w.title} className="border-b border-ash py-4">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-[15px] font-medium text-ink">{w.title}</h3>
                <span className="text-[12.5px] font-medium text-accent-blue">
                  {w.result}
                </span>
              </div>
              <p className="mt-1.5 max-w-[64ch] text-[13.5px] leading-[1.55] text-carbon">
                {w.copy}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Entrepreneurial ventures - the only cards, so they read as distinct */}
      <Section label="Entrepreneurial ventures">
        <div className="grid gap-4 sm:grid-cols-2">
          {cv.ventures.map((v) => (
            <div key={v.name} className="flex flex-col rounded-xl border border-ash bg-paper p-5">
              <div className="flex items-baseline gap-x-2">
                <h3 className="text-[16px] font-medium text-ink">{v.name}</h3>
                <span className="text-[13px] text-lichen">· {v.role}</span>
              </div>
              <p className={`${subLabel} mt-1`}>{v.tag}</p>
              <p className="mt-3 text-[13.5px] leading-[1.6] text-carbon">{v.copy}</p>
              <p className={`${subLabel} mt-4`}>{v.groupLabel}</p>
              <BulletList items={v.bullets} />
            </div>
          ))}
        </div>
      </Section>

      {/* Leadership & expertise */}
      <Section label="Leadership & expertise">
        <div className="space-y-5">
          {cv.expertise.map((g) => (
            <div
              key={g.label}
              className="grid gap-x-6 gap-y-2 sm:grid-cols-[128px_1fr]"
            >
              <p className={`${subLabel} sm:pt-1.5`}>{g.label}</p>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-full border border-ash bg-paper px-2.5 py-1 text-[12.5px] text-lichen"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Credentials - education + awards paired, then a light coda */}
      <Section label="Education & awards">
        <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
          <div>
            <h3 className="text-[15px] font-medium text-ink">{cv.education.degree}</h3>
            <p className="mt-0.5 text-[13.5px] text-lichen">{cv.education.school}</p>
            <p className="mt-0.5 text-[12.5px] tabular-nums text-sage">{cv.education.dates}</p>
          </div>
          <ul className="space-y-2">
            {cv.awards.map((a) => (
              <li key={a} className="flex gap-2.5 text-[13.5px] leading-[1.5] text-carbon">
                <span aria-hidden="true" className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent-blue" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Beyond work */}
      <Section label="Beyond work">
        <P>{cv.beyondWork}</P>
      </Section>

      {/* Contact */}
      <Section label="Contact">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px] text-lichen">
          <a
            href={`mailto:${cv.contact.email}`}
            className="font-medium text-ink underline underline-offset-2 hover:text-lichen"
          >
            {cv.contact.email}
          </a>
          <span aria-hidden="true" className="text-sage">·</span>
          <a
            href={`tel:${cv.contact.phone.replace(/[^+\d]/g, "")}`}
            className="underline underline-offset-2 hover:text-ink"
          >
            {cv.contact.phone}
          </a>
          <span aria-hidden="true" className="text-sage">·</span>
          <a
            href={cv.contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-ink"
          >
            LinkedIn
          </a>
        </div>
        <p className="mt-5 text-[13px] leading-[1.6] text-sage">
          <Link href="/" className="underline underline-offset-2 hover:text-lichen">
            Back to home
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
