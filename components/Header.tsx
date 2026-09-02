"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import CTAButton from "@/components/CTAButton";
import { SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <header className="relative z-50 h-16 border-b-[3px] border-ink bg-white lg:h-20">
        <div className="mx-auto grid h-full max-w-6xl grid-cols-[1fr_auto] items-center gap-4 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <Link
            href="/"
            className="justify-self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-14 max-w-[260px] items-center overflow-hidden lg:h-16 lg:max-w-[340px]">
              <Image
                src={SITE.logoDark}
                alt="Wyper Window Cleaning"
                width={1770}
                height={836}
                className="h-full w-auto max-h-full max-w-[260px] object-contain lg:max-w-[340px]"
                priority
              />
            </span>
          </Link>

          <nav
            className="hidden flex-nowrap items-center justify-center gap-3 lg:flex xl:gap-7"
            aria-label="Primary"
          >
            {SITE.nav.map((item) =>
              item.label === "Services" ? (
                <ServicesDropdown key={item.href} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap font-accent text-sm uppercase tracking-[0.14em] text-ink decoration-primary decoration-[3px] underline-offset-8 transition-colors hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                >
                  {item.label}
                </Link>
              ),
            )}
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
            {SITE.nav.map((item) =>
              item.label === "Services" ? (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block whitespace-nowrap rounded-2xl px-4 py-3 font-accent text-base uppercase tracking-[0.14em] text-ink hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                  <ul className="mt-1 flex flex-col gap-1 border-l-[3px] border-ink/20 pl-3">
                    {SITE.serviceLinks.map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          className="block rounded-2xl px-4 py-2.5 font-accent text-sm uppercase tracking-[0.14em] text-ink hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                          onClick={() => setOpen(false)}
                        >
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block whitespace-nowrap rounded-2xl px-4 py-3 font-accent text-base uppercase tracking-[0.14em] text-ink hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
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

function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLAnchorElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const closeTimer = useRef<number | null>(null);
  const menuId = useId();

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const openMenu = useCallback(() => {
    clearCloseTimer();
    setOpen(true);
  }, [clearCloseTimer]);

  const closeMenu = useCallback(() => {
    clearCloseTimer();
    setOpen(false);
  }, [clearCloseTimer]);

  const scheduleClose = useCallback(() => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => {
      setOpen(false);
    }, 120);
  }, [clearCloseTimer]);

  useEffect(() => {
    return () => clearCloseTimer();
  }, [clearCloseTimer]);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [open, closeMenu]);

  function focusItem(index: number) {
    const items = itemRefs.current.filter(Boolean);
    if (!items.length) return;
    const next = (index + items.length) % items.length;
    items[next]?.focus();
  }

  function handleTriggerKeyDown(event: KeyboardEvent<HTMLAnchorElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      openMenu();
      requestAnimationFrame(() => focusItem(0));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      openMenu();
      requestAnimationFrame(() => focusItem(SITE.serviceLinks.length - 1));
    } else if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
    }
  }

  function handleMenuKeyDown(event: KeyboardEvent<HTMLUListElement>) {
    const items = itemRefs.current.filter(Boolean);
    const currentIndex = items.findIndex(
      (item) => item === document.activeElement,
    );

    if (event.key === "ArrowDown") {
      event.preventDefault();
      focusItem(currentIndex + 1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      focusItem(currentIndex - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusItem(0);
    } else if (event.key === "End") {
      event.preventDefault();
      focusItem(items.length - 1);
    } else if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
      triggerRef.current?.focus();
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
      onFocus={openMenu}
      onBlur={(event) => {
        if (!containerRef.current?.contains(event.relatedTarget as Node)) {
          closeMenu();
        }
      }}
    >
      <Link
        ref={triggerRef}
        href="/services"
        id={`${menuId}-trigger`}
        className="inline-flex items-center gap-1.5 whitespace-nowrap font-accent text-sm uppercase tracking-[0.14em] text-ink decoration-primary decoration-[3px] underline-offset-8 transition-colors hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onKeyDown={handleTriggerKeyDown}
      >
        Services
        <ChevronIcon open={open} />
      </Link>

      {open && (
        <ul
          id={menuId}
          role="menu"
          aria-labelledby={`${menuId}-trigger`}
          className="absolute left-1/2 top-full z-50 mt-3 min-w-[17rem] -translate-x-1/2 rounded-2xl border-[3px] border-ink bg-white p-2 shadow-hard"
          onKeyDown={handleMenuKeyDown}
          onMouseEnter={openMenu}
        >
          {SITE.serviceLinks.map((service, index) => (
            <li key={service.href} role="none">
              <Link
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
                href={service.href}
                role="menuitem"
                className="block rounded-xl px-4 py-3 font-accent text-sm uppercase tracking-[0.14em] text-ink transition-colors hover:bg-primary focus:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                onClick={closeMenu}
              >
                {service.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`h-3.5 w-3.5 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.25a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
        clipRule="evenodd"
      />
    </svg>
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
