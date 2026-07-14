"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { collections } from "@/lib/collections";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-sm">
      <div className="relative mx-auto flex max-w-6xl items-center px-6 py-4 sm:px-8">
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

        <button
          type="button"
          className="absolute right-6 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center sm:right-8 sm:hidden"
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
            <li className="py-2">
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
