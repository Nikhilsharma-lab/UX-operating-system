import type { ReactNode } from "react";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[12px] font-medium uppercase leading-[17px] tracking-[0.06em] font-geometric-mono text-lichen">
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
              <h2 className="font-editorial-serif font-light text-[clamp(1.7rem,3.4vw,2.25rem)] leading-[1.08] tracking-[-0.02em] text-ink">
                {title}
              </h2>
            )}
            {intro && (
              <div className="mt-5 space-y-3 t-body text-olive-char">
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
