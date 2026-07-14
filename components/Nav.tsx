"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { collections } from "@/lib/collections";

const links = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link
          href="/"
          className="shrink-0"
          onClick={() => setOpen(false)}
          aria-label="Voohoo Photography home"
        >
          <Image
            src="/logo-voohoo.png"
            alt="Voohoo"
            width={140}
            height={52}
            priority
            className="h-7 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 sm:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium uppercase tracking-[0.14em] text-foreground/80 transition-colors duration-200 hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 cursor-pointer items-center justify-center sm:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 block h-[1.5px] w-6 bg-foreground transition-transform duration-200 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 block h-[1.5px] w-6 bg-foreground transition-transform duration-200 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-background sm:hidden"
        >
          <ul className="flex flex-col px-6 py-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium uppercase tracking-[0.14em] text-foreground/80"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="border-t border-border py-2">
              <span className="block px-0 pb-1 pt-2 text-[11px] uppercase tracking-[0.14em] text-muted">
                Collections
              </span>
              {collections.map((c) => (
                <Link
                  key={c.slug}
                  href={`/collections/${c.slug}`}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-foreground/80"
                >
                  {c.title}
                </Link>
              ))}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
