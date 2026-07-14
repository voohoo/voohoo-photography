import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-display text-sm text-muted">
          Voohoo Photography &mdash; est. {year}
        </p>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          <Link
            href="/about"
            className="text-[13px] uppercase tracking-[0.1em] text-muted transition-colors duration-200 hover:text-accent"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-[13px] uppercase tracking-[0.1em] text-muted transition-colors duration-200 hover:text-accent"
          >
            Contact
          </Link>
          <a
            href="https://www.instagram.com/voo.hoo/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-[13px] uppercase tracking-[0.1em] text-muted transition-colors duration-200 hover:text-accent"
          >
            Instagram
          </a>
        </nav>

        <p className="text-[13px] text-muted">&copy; {year} Voohoo Photography</p>
      </div>
    </footer>
  );
}
