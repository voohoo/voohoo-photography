import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Voohoo Photography",
  description:
    "Get in touch with Voohoo Photography for prints, licensing, or shoots.",
};

const EMAIL = "hello@voohoophotography.com";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
      <div className="max-w-xl">
        <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-muted">
          Contact
        </p>
        <h1 className="font-display mt-3 text-3xl leading-tight sm:text-4xl">
          Prints, licensing, or a shoot in mind — let&rsquo;s talk.
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-foreground/85">
          The fastest way to reach me is email. I try to reply within a
          couple of days.
        </p>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:gap-8">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 border border-foreground px-6 py-3 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors duration-200 hover:bg-foreground hover:text-background"
          >
            {EMAIL}
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer noopener"
            className="text-[13px] uppercase tracking-[0.14em] text-muted transition-colors duration-200 hover:text-accent"
          >
            Instagram &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
