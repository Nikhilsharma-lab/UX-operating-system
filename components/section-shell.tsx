import type { ReactNode } from "react";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[12px] font-medium uppercase leading-[17px] tracking-[0.1em] font-rubric text-lichen">
      {children}
    </p>
  );
}

export function SectionShell({
  id,
  index,
  eyebrow,
  title,
  intro,
  children,
  bordered = true,
}: {
  id?: string;
  index?: string;
  eyebrow?: string;
  title?: string;
  intro?: ReactNode;
  children?: ReactNode;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-20 md:py-24 ${bordered ? "border-t border-ash" : ""}`}
    >
      <div className="page-shell">
        {(eyebrow || title || intro) && (
          <header className="mb-12 max-w-[700px]">
            {eyebrow && (
              <div className="mb-5 flex items-center gap-3">
                {index && (
                  <span className="font-geometric-mono text-[12px] font-medium tabular-nums text-ink">
                    {index}
                  </span>
                )}
                {index && (
                  <span aria-hidden="true" className="h-px w-6 bg-olive-char" />
                )}
                <SectionEyebrow>{eyebrow}</SectionEyebrow>
              </div>
            )}
            {title && (
              <h2 className="font-heading-serif font-normal text-[clamp(1.7rem,3.4vw,2.25rem)] leading-[1.1] tracking-[0] text-ink">
                {title}
              </h2>
            )}
            {intro && (
              <div className="mt-5 space-y-3 font-editorial-serif text-[16px] leading-[1.55] tracking-[0] text-olive-char">
                {intro}
              </div>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
