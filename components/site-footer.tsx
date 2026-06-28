const footerLinks = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Transformations", href: "#transformations" },
  { label: "Operating Manual", href: "#operating-manual" },
  { label: "Thinking", href: "#thinking" },
  { label: "Building", href: "#building" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-ash py-16">
      <div className="page-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <p className="max-w-[460px] font-editorial-serif text-[clamp(1.25rem,2.4vw,1.6rem)] font-light leading-[1.2] tracking-[-0.01em] text-ink">
          AI-native Product Executive building organizations, systems, and
          businesses.
        </p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-geometric-mono text-[13px] tracking-[-0.02em] text-lichen transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
