import { ContactForm, InlineContactForm } from "@/components/contact-form";
import { PROFILE } from "@/data";

const LINKS = [
  { label: "GitHub", href: PROFILE.socials.github },
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
];

/** Fixed di belakang blok charcoal (z-0); tersingkap saat blok itu naik di akhir halaman. */
export function Contact() {
  return (
    <section
      id="contact"
      className="relative z-0 flex min-h-svh flex-col justify-between bg-paper px-6 pb-8 pt-20 text-ink sm:px-10 md:fixed md:inset-x-0 md:bottom-0 md:h-svh md:pt-24 lg:px-20"
    >
      <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-ink/50">05 — Contact</p>
          <h2 className="font-display text-[clamp(2.75rem,min(8vw,13vh),7rem)] font-semibold leading-[0.92] tracking-tight">
            Let&apos;s build
            <br />
            something<span className="text-accent [-webkit-text-stroke:2px_var(--ink)]">.</span>
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="lg:hidden">
              <ContactForm />
            </div>
            <a
              href={`mailto:${PROFILE.socials.email}`}
              className="break-all border-b-2 border-ink pb-1 font-mono text-sm font-medium transition hover:border-accent hover:bg-accent/30 sm:text-base"
            >
              {PROFILE.socials.email}
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
          <InlineContactForm />
        </div>
      </div>

      <footer className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-6 font-mono text-xs uppercase tracking-wider text-ink/55">
        <span>© {new Date().getFullYear()} {PROFILE.name}</span>
        <div className="flex gap-5">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>
      </footer>
    </section>
  );
}
