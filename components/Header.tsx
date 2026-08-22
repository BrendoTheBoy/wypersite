"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CTAButton from "@/components/CTAButton";
import { SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <header className="relative z-50 h-16 overflow-hidden border-b-[3px] border-ink bg-white lg:h-20">
        <div className="mx-auto grid h-full max-w-6xl grid-cols-[1fr_auto] items-center gap-4 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <Link
            href="/"
            className="justify-self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-14 max-w-[160px] items-center overflow-hidden lg:h-16 lg:max-w-[220px]">
              <Image
                src={SITE.logoDark}
                alt="Wyper Window Cleaning"
                width={220}
                height={132}
                className="h-full w-auto max-h-full max-w-[160px] object-contain lg:max-w-[220px]"
                priority
              />
            </span>
          </Link>

        <nav
          className="hidden flex-nowrap items-center justify-center gap-3 lg:flex xl:gap-7"
          aria-label="Primary"
        >
          {SITE.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap font-accent text-sm uppercase tracking-[0.14em] text-ink decoration-primary decoration-[3px] underline-offset-8 transition-colors hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden justify-self-end lg:block">
          <CTAButton href="/contact" variant="primary">
            Get a Free Quote
          </CTAButton>
        </div>

        <div className="flex items-center justify-end gap-2 lg:hidden">
          <a
            href={SITE.phoneHref}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-primary text-ink transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            aria-label={`Call ${SITE.name} at ${SITE.phone}`}
          >
            <PhoneIcon />
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t-[3px] border-ink bg-white px-4 py-4 lg:hidden sm:px-6"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {SITE.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block whitespace-nowrap rounded-2xl px-4 py-3 font-accent text-base uppercase tracking-[0.14em] text-ink hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <CTAButton href="/contact" variant="primary" className="w-full">
                Get a Free Quote
              </CTAButton>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M6.62 10.79a15.15 15.15 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.02l-2.2 2.19z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 7h16M4 12h16M4 17h16"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}
