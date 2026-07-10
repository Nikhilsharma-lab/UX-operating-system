import Link from "next/link";
import Image from "next/image";
import { CommandButton } from "@/components/command-button";

/*
 * Homepage in the dark kamran single-column system. The page is an executive
 * proof path first: thesis, evidence, builder proof, then deeper archive.
 */

const EMAIL = "hi.nikhilsharma@gmail.com";
const RESUME = "/resume"; // dedicated résumé page (app/resume)

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`h-3.5 w-3.5 ${className}`}>
      <path d="M5 11L11 5M6 5h5v5" />
    </svg>
  );
}

function Dot() {
  return <span aria-hidden="true" className="text-sage">·</span>;
}

/* ------------------------------- content -------------------------------- */

const nowPills = [
  { label: "Leadership proof", href: "/transformations/building-design-organization" },
  { label: "Builder proof", href: "/#building" },
  { label: "Operating manual", href: "/operating-manual" },
];

const readerPath: { label: string; title: string; href: string; description: string }[] = [
  {
    label: "Start",
    title: "Leadership proof",
    href: "/transformations/building-design-organization",
    description: "How I built a 0→20 product design function inside a regulated bank.",
  },
  {
    label: "Thesis",
    title: "How I think",
    href: "/#thesis",
    description: "The operating principle behind the work: design creates systems that create products.",
  },
  {
    label: "Verify",
    title: "Resume and contact",
    href: RESUME,
    description: "Role history, credentials, and the fastest way to reach me.",
  },
];

const LINKEDIN = "https://www.linkedin.com/in/nikhilsharma09/";
const X_PROFILE = "https://x.com/thesharmaxp";

const social: { label: string; href: string; external?: boolean }[] = [
  { label: "Email", href: `mailto:${EMAIL}` },
  { label: "LinkedIn", href: LINKEDIN, external: true },
  { label: "X", href: X_PROFILE, external: true },
];

const outcomes: { value: string; label: string; proof: string; href: string }[] = [
  {
    value: "0→20",
    label: "Product design capability built and scaled",
    proof: "Organization proof",
    href: "/transformations/building-design-organization",
  },
  {
    value: "12M+",
    label: "Monthly active users in regulated finance",
    proof: "Scale proof",
    href: "/cases/airtel-payments-bank-app",
  },
  {
    value: "62%",
    label: "Fraud-related reduction",
    proof: "Trust proof",
    href: "/cases/fraud-alarm",
  },
  {
    value: "28×",
    label: "Digital Gold purchase growth",
    proof: "Growth proof",
    href: "/cases/digital-gold-growth",
  },
];

const systems: [string, string][] = [
  ["Hiring", "creates the team."],
  ["Research", "changes decisions."],
  ["Reviews", "protect quality."],
  ["Design systems", "reduce drift."],
  ["AI workflows", "compress translation."],
  ["Trust", "compounds execution."],
  ["Culture", "is what repeats."],
];

const careerLogic: { label: string; line: string }[] = [
  {
    label: "Systems training",
    line: "Architecture and healthcare trained the same muscle: make complex environments understandable, usable, and safe.",
  },
  {
    label: "Regulated scale",
    line: "Payments and banking added trust, compliance, and everyday behavior at national product scale.",
  },
  {
    label: "Organization building",
    line: "At Airtel Payments Bank, the work became institutional: hiring, rituals, reviews, research, and AI-assisted delivery systems.",
  },
  {
    label: "Ownership",
    line: "LANE and Svenklas keep the loop honest: product judgment tested through things I own, ship, price, and operate.",
  },
];

const ventures: { name: string; tag: string; proof: string; copy: string; href?: string }[] = [
  {
    name: "LANE",
    tag: "AI product operating system",
    proof: "Builder proof: product thesis → working system",
    copy: "An AI-native operating system for product and design teams. It tests the same belief this site argues for: better products start with sharper problems, cleaner decisions, and a system teams can actually use.",
    href: "/cases/lane",
  },
  {
    name: "Svenklas",
    tag: "Design-led consumer brand",
    proof: "Builder proof: brand → manufacturing → distribution",
    copy: "A travel accessories business where the design problem does not end at interface polish. I own product, brand, manufacturing, distribution, and the commercial tradeoffs.",
    href: "https://www.svenklas.com",
  },
];

const featured = [
  {
    title: "CKYC Onboarding",
    href: "/cases/ckyc-onboarding",
    desc: "Turned account opening into a 24/7 digital scale engine with CKYC-based verification.",
    outcome: "10x+ daily digital onboardings",
  },
  {
    title: "Fraud Alarm",
    href: "/cases/fraud-alarm",
    desc: "Moved fraud reporting from helpline dependency to an in-app emergency-control workflow.",
    outcome: "62% fraud-related reduction",
  },
  {
    title: "Airtel Payments Bank App",
    href: "/cases/airtel-payments-bank-app",
    desc: "Consumer payments and banking experience at regulated national scale.",
    outcome: "12M+ monthly active users",
  },
];

const writing = [
  { title: "Design creates systems that create products", meta: "Thesis", href: "/#thesis" },
  { title: "Building a design organization", meta: "Transformation", href: "/transformations/building-design-organization" },
  { title: "An AI workflow for product design", meta: "Guide", href: "/operating-manual/ai-workflow" },
];

/* -------------------------------- pieces -------------------------------- */

function Pill({ label, href }: { label: string; href: string }) {
  const internal = href.startsWith("/");
  const cls =
    "inline-flex items-center gap-1.5 rounded-full border border-ash bg-paper px-2.5 py-1 text-[13px] font-medium text-lichen transition-colors hover:border-rule-dark hover:text-ink";
  const inner = (
    <>
      {label}
      <Arrow className="h-3 w-3 text-sage" />
    </>
  );
  return internal ? (
    <Link href={href} className={cls}>{inner}</Link>
  ) : (
    <a href={href} className={cls}>{inner}</a>
  );
}

function ProjectRow({ p }: { p: (typeof featured)[number] }) {
  return (
    <Link href={p.href} className="group block border-b border-ash py-4">
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <span className="text-[15px] font-medium text-ink group-hover:underline group-hover:underline-offset-2">{p.title}</span>
          <p className="mt-1.5 max-w-[58ch] text-[13.5px] leading-[1.55] text-lichen">{p.desc}</p>
        </div>
        <Arrow className="mt-1 shrink-0 text-sage transition-colors group-hover:text-lichen" />
      </div>
      <p className="mt-2 text-[12.5px] font-medium text-carbon">{p.outcome}</p>
    </Link>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className="k-label block">{children}</span>;
}

/* --------------------------------- page --------------------------------- */

export default function HomePage() {
  return (
    <main id="main" className="mx-auto max-w-[560px] px-6 pb-28 pt-24">
      {/* Identity */}
      <header className="hero-enter">
        <div className="flex items-center justify-between">
          <Image
            src="/avatar.jpg"
            alt="Nikhil Sharma"
            width={44}
            height={44}
            priority
            className="h-11 w-11 rounded-full object-cover"
          />
          <CommandButton className="-mr-1.5" />
        </div>
        <div className="mt-8">
          <h1 className="text-[15px] font-medium leading-snug text-ink">Nikhil Sharma</h1>
          <p className="text-[15px] leading-snug text-lichen">Head of Product Design, Airtel Payments Bank</p>
        </div>
        <div className="mt-9 border-t border-ash" />
      </header>

      {/* Serif-italic tagline (Newsreader) - the editorial accent */}
      <p className="hero-enter hero-enter-1 mt-9 font-editorial-serif text-[21px] italic leading-[1.35] text-ink">
        From ambiguity to shipped outcomes.
      </p>

      {/* Intro */}
      <p className="hero-enter hero-enter-2 mt-5 text-[17px] leading-[1.7] text-carbon">
        I build AI-native product design organizations. Most of the work is upstream of the
        screens: turning unclear, half-formed problems into products people trust, and teams that
        can keep shipping them.
      </p>

      {/* Reader path */}
      <section id="start" className="hero-enter hero-enter-3 mt-8 border-y border-ash py-4 scroll-mt-20">
        <div className="mb-3 flex items-center justify-between gap-3">
          <Label>Start here</Label>
          <span className="text-[12.5px] text-sage">3 minute scan</span>
        </div>
        <div className="divide-y divide-ash">
          {readerPath.map((item) => (
            <Link key={item.title} href={item.href} className="group flex items-start gap-3 py-3 first:pt-0 last:pb-0">
              <span className="mt-0.5 w-14 shrink-0 font-geometric-mono text-[11px] uppercase tracking-[0.08em] text-sage">
                {item.label}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[15px] font-medium text-ink group-hover:underline group-hover:underline-offset-2">
                  {item.title}
                </span>
                <span className="mt-1 block text-[13.5px] leading-[1.5] text-lichen">{item.description}</span>
              </span>
              <Arrow className="mt-1 shrink-0 text-sage transition-colors group-hover:text-lichen" />
            </Link>
          ))}
        </div>
      </section>

      {/* Now */}
      <section className="mt-14">
        <Label>Now</Label>
        <p className="mt-4 text-[15px] leading-[1.6] text-carbon">
          Head of Product Design at <span className="font-medium text-ink">Airtel Payments Bank</span>. I
          run product design and build the operating systems the team works in, and take messy
          problems all the way to shipped, across fintech and consumer products.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {nowPills.map((p) => (
            <Pill key={p.label} {...p} />
          ))}
        </div>
        <p className="mt-4 text-[13.5px] leading-[1.55] text-sage">
          On the side, I build small products of my own and write an operating manual for
          AI-native product teams.
        </p>
      </section>

      {/* Social */}
      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px] text-lichen">
        {social.map((s, i) => (
          <span key={s.label} className="inline-flex items-center gap-4">
            {i > 0 && <Dot />}
            <a
              href={s.href}
              {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="underline underline-offset-2 hover:text-ink"
            >
              {s.label}
            </a>
          </span>
        ))}
      </div>

      {/* Operating thesis */}
      <section id="thesis" className="mt-16 border-t border-ash pt-7 scroll-mt-20">
        <Label>Operating thesis</Label>
        <p className="mt-4 font-editorial-serif text-[22px] italic leading-[1.35] text-ink">
          Design creates systems that create products.
        </p>
        <p className="mt-3 max-w-[62ch] text-[15px] leading-[1.7] text-carbon">
          Most portfolios show the visible layer: screens, flows, launches, and metrics. But products
          are shaped much earlier: by how teams frame problems, how research changes decisions, how
          product and engineering collaborate, how quality is reviewed, and how leaders create the
          conditions for repeatable execution.
        </p>
        <div className="mt-5 border-t border-ash">
          {systems.map(([k, rest]) => (
            <div key={k} className="border-b border-ash py-2.5 text-[14px] text-lichen">
              <b className="font-medium text-ink">{k}</b> {rest}
            </div>
          ))}
        </div>
      </section>

      {/* Selected outcomes */}
      <section className="mt-14">
        <Label>Selected outcomes</Label>
        <p className="mt-4 max-w-[58ch] text-[15px] leading-[1.6] text-carbon">
          Four numbers stay on the homepage because each points to a deeper proof route. The rest
          belongs in the archive, not the first read.
        </p>
        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
          {outcomes.map((o) => (
            <Link key={o.label} href={o.href} className="group border-t border-ash pt-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-[24px] font-medium leading-none tracking-tight tabular-nums text-ink">{o.value}</div>
                  <div className="mt-2 text-[13px] leading-snug text-lichen">{o.label}</div>
                  <div className="mt-2 font-geometric-mono text-[11px] uppercase tracking-[0.08em] text-sage">{o.proof}</div>
                </div>
                <Arrow className="mt-1 text-sage transition-colors group-hover:text-lichen" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Career logic */}
      <section className="mt-14">
        <Label>Career logic</Label>
        <div className="mt-4 border-t border-ash">
          {careerLogic.map((item) => (
            <div key={item.label} className="grid gap-1 border-b border-ash py-3 sm:grid-cols-[132px_1fr] sm:gap-5">
              <div className="text-[12.5px] font-medium text-ink">{item.label}</div>
              <p className="text-[13.5px] leading-[1.55] text-lichen">{item.line}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Builder proof */}
      <section id="building" className="mt-14 scroll-mt-20">
        <Label>Builder proof</Label>
        <p className="mt-4 max-w-[58ch] text-[15px] leading-[1.6] text-carbon">
          LANE and Svenklas are not side projects in the decorative sense. They are proof that I
          can carry product judgment into ownership: thesis, product, brand, operations, and
          commercial tradeoffs.
        </p>
        <div className="mt-5 border-y border-ash">
          {ventures.map((v) => {
            const external = v.href?.startsWith("http");
            const rowCls = "group -mx-2 block border-b border-ash px-2 py-4 transition-colors last:border-b-0 hover:bg-bone";
            const inner = (
              <>
                <div className="flex items-start gap-3">
                  <span className="min-w-0 flex-1 text-[15px] font-medium text-ink">{v.name}</span>
                  {v.href && (
                    <Arrow className="ml-auto text-sage transition-colors group-hover:text-lichen" />
                  )}
                </div>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-sage">{v.proof}</p>
                <p className="mt-2 text-[13px] font-medium text-carbon">{v.tag}</p>
                <p className="mt-2.5 text-[13.5px] leading-[1.55] text-lichen">{v.copy}</p>
              </>
            );
            if (!v.href) {
              return (
                <div key={v.name} className="-mx-2 border-b border-ash px-2 py-4 last:border-b-0">
                  {inner}
                </div>
              );
            }
            return external ? (
              <a
                key={v.name}
                href={v.href}
                target="_blank"
                rel="noopener noreferrer"
                className={rowCls}
              >
                {inner}
              </a>
            ) : (
              <Link key={v.name} href={v.href} className={rowCls}>
                {inner}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Leadership proof */}
      <section className="mt-14">
        <Label>Leadership proof</Label>
        <p className="mt-4 max-w-[58ch] text-[15px] leading-[1.6] text-carbon">
          If you only inspect one layer after this page, inspect the case evidence: how trust,
          onboarding, fraud response, and scale moved from product ambiguity to shipped systems.
        </p>
        <div className="mt-4 border-t border-ash">
          {featured.map((p) => (
            <ProjectRow key={p.title} p={p} />
          ))}
        </div>
        <Link href="/cases" className="mt-4 inline-flex items-center gap-1 text-[13px] text-lichen underline underline-offset-2 hover:text-ink">
          All case evidence <Arrow className="h-3 w-3" />
        </Link>
      </section>

      {/* Writing / Thinking */}
      <section id="writing" className="mt-14 scroll-mt-20">
        <Label>Writing</Label>
        <div className="mt-4 border-t border-ash">
          {writing.map((w) => (
            <Link key={w.title} href={w.href} className="group flex items-center justify-between gap-4 border-b border-ash py-3">
              <span className="text-[15px] text-ink group-hover:underline group-hover:underline-offset-2">{w.title}</span>
              <span className="shrink-0 text-[13px] text-lichen">{w.meta}</span>
            </Link>
          ))}
        </div>
        <Link href="/operating-manual" className="mt-4 inline-flex items-center gap-1 text-[13px] text-lichen underline underline-offset-2 hover:text-ink">
          All writing <Arrow className="h-3 w-3" />
        </Link>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-14 scroll-mt-20">
        <Label>Contact</Label>
        <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.6] text-carbon">
          Open to product and design leadership roles, advisory, speaking, or a serious
          conversation about building product organizations that can ship through ambiguity.
        </p>
        <p className="mt-3">
          <a href={`mailto:${EMAIL}`} className="text-[18px] font-medium text-ink underline underline-offset-2 hover:text-lichen">
            {EMAIL}
          </a>
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px] text-lichen">
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-ink">LinkedIn</a>
          <Dot />
          <a href={X_PROFILE} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-ink">X</a>
          <Dot />
          <a href={RESUME} className="underline underline-offset-2 hover:text-ink">Résumé</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-14 border-t border-ash pt-6 text-[13px] text-sage">
        © 2026 Nikhil Sharma · Head of Design, Airtel Payments Bank
      </footer>
    </main>
  );
}
