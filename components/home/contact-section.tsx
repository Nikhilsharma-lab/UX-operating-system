import { SectionShell } from "@/components/section-shell";
import { CtaLink } from "@/components/cta-link";

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      index="10"
      eyebrow="Contact"
      title="For serious product, design, AI, and operating-model conversations."
      intro={
        <p>
          Reach out for senior product design leadership, AI-native product
          organization conversations, advisory work, speaking, writing, or
          product-building discussions.
        </p>
      }
    >
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <CtaLink href="mailto:hi.nikhilsharma@gmail.com" variant="primary">
          Contact
        </CtaLink>
        {/* TODO: swap these for a real LinkedIn URL and CV PDF link once they
            exist in the repo — do not invent either. */}
        <p className="font-geometric-mono text-[13px] tracking-[-0.02em] text-lichen">
          LinkedIn and CV available on request.
        </p>
      </div>
    </SectionShell>
  );
}
