import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink pb-24 text-white md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="space-y-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={SITE.logo}
            alt="Wyper Window Cleaning"
            className="h-16 w-auto"
          />
          <p className="font-body text-sm text-white/80">{SITE.tagline}</p>
          <div className="space-y-2 font-body text-sm">
            <p>
              <a
                href={SITE.phoneHref}
                className="text-white transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {SITE.phone}
              </a>
            </p>
            <p>
              <a
                href={SITE.emailHref}
                className="text-white transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {SITE.email}
              </a>
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-accent text-sm uppercase tracking-[0.16em] text-primary">
            Service Area
          </h2>
          <ul className="mt-4 space-y-2 font-body text-sm text-white/80">
            {SITE.areasServed.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-accent text-sm uppercase tracking-[0.16em] text-primary">
            Navigate
          </h2>
          <nav aria-label="Footer">
            <ul className="mt-4 space-y-2 font-body text-sm">
              {SITE.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 transition-opacity hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 font-body text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p>{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
