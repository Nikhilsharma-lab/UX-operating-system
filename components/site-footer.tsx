import Link from "next/link";

const coreLinks = [
  { label: "Cases", href: "/cases" },
  { label: "Transformations", href: "/transformations" },
  { label: "Manual", href: "/operating-manual" },
  { label: "Thinking", href: "/#thinking" },
  { label: "Building", href: "/#building" },
];

const linkClass =
  "font-geometric-mono text-[13px] tracking-[-0.02em] text-moss transition-colors hover:text-paper";

export function SiteFooter() {
  return (
    <footer className="bg-carbon py-16 text-paper">
      <div className="page-shell">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[460px] t-dek text-paper">
            AI-native Product Executive building organizations, systems, and
            businesses.
          </p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {coreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-olive-char pt-6 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <li>
              <a href="mailto:hi.nikhilsharma@gmail.com" className={linkClass}>
                Contact
              </a>
            </li>
            {/* TODO: replace with the real LinkedIn profile URL once provided
                (none exists in the repo; do not invent one). */}
            <li>
              <span className="font-geometric-mono text-[13px] tracking-[-0.02em] text-sage">
                LinkedIn available on request
              </span>
            </li>
            {/* TODO: link a real CV PDF once one is added to public/ (no PDF
                exists in the repo; do not fabricate one). */}
            <li>
              <span className="font-geometric-mono text-[13px] tracking-[-0.02em] text-sage">
                CV available on request
              </span>
            </li>
          </ul>
          <p className="t-caption font-geometric-mono uppercase text-sage">
            Nikhil Sharma · Executive Knowledge System
          </p>
        </div>
      </div>
    </footer>
  );
}
