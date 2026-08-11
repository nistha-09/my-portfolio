"use client";

import Link from "next/link";
import { useState } from "react";
import { profile } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          {profile.name}
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-ink sm:flex">
          <Link href="/#work" className="transition-opacity hover:opacity-60">
            Work
          </Link>
          <Link href="/#about" className="transition-opacity hover:opacity-60">
            About
          </Link>
          <a
            href={profile.resumeUrl}
            className="transition-opacity hover:opacity-60"
            download
          >
            Resume
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-ink px-4 py-2 text-bg transition-opacity hover:opacity-85"
          >
            Get in touch
          </a>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 sm:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-6 py-4 text-sm sm:hidden">
          <Link href="/#work" className="py-2" onClick={() => setOpen(false)}>
            Work
          </Link>
          <Link href="/#about" className="py-2" onClick={() => setOpen(false)}>
            About
          </Link>
          <a href={profile.resumeUrl} className="py-2" download>
            Resume
          </a>
          <a href={`mailto:${profile.email}`} className="py-2">
            Get in touch
          </a>
        </nav>
      )}
    </header>
  );
}
