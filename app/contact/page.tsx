import type { Metadata } from "next";
import IconRow from "@/components/IconRow";
import QuoteForm from "@/components/QuoteForm";
import Section from "@/components/Section";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free window cleaning quote in Guelph and Wellington County. Takes about 30 seconds. We reply the same day.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Get a Free Quote",
    description:
      "Free window cleaning quotes in Guelph, Fergus, Elora, Rockwood, and Wellington County.",
    url: `${SITE.url}/contact`,
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Get a Free Quote",
  description:
    "Request a free window cleaning quote in Guelph and Wellington County.",
  url: `${SITE.url}/contact`,
  mainEntity: {
    "@type": "LocalBusiness",
    name: SITE.name,
    telephone: SITE.phone,
    email: SITE.email,
    url: SITE.url,
    openingHours: SITE.openingHours,
    areaServed: SITE.areasServed.map((name) => ({
      "@type": "City",
      name,
    })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      email: SITE.email,
      contactType: "customer service",
      areaServed: SITE.country,
      availableLanguage: "English",
    },
  },
};

function Divider() {
  return <div className="h-px bg-ink/15" aria-hidden="true" />;
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      <section className="bg-primary">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
            Get a Free Quote
          </h1>
          <p className="mt-3 max-w-2xl font-body text-base text-ink sm:text-lg">
            Takes about 30 seconds. We reply the same day.
          </p>
        </div>
      </section>

      <Section tone="white">
        <div className="grid items-start gap-8 lg:grid-cols-5 lg:gap-10">
          <div className="lg:col-span-3">
            <QuoteForm />
            <p className="mt-5 font-body text-sm text-ink">
              Prefer to just call?{" "}
              <a
                href={SITE.phoneHref}
                className="font-medium underline decoration-2 underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                {SITE.phone}
              </a>
            </p>
          </div>

          <aside className="lg:col-span-2">
            <div className="space-y-6 rounded-3xl border-[3px] border-ink bg-white p-6 shadow-hard sm:p-8">
              <div>
                <p className="eyebrow">Get in touch</p>
                <a
                  href={SITE.phoneHref}
                  className="mt-4 block font-display text-4xl leading-tight text-ink transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:text-5xl"
                >
                  {SITE.phone}
                </a>
                <a
                  href={SITE.emailHref}
                  className="mt-3 inline-block font-body text-base text-ink underline decoration-2 underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                >
                  {SITE.email}
                </a>
              </div>

              <Divider />

              <div>
                <p className="eyebrow">Service area</p>
                <ul className="mt-4 space-y-2">
                  {SITE.areasServed.map((area) => (
                    <li key={area}>
                      <IconRow icon="pin">{area}</IconRow>
                    </li>
                  ))}
                </ul>
              </div>

              <Divider />

              <div>
                <p className="eyebrow">Hours</p>
                <div className="mt-4">
                  <IconRow
                    icon="clock"
                    detail="Call or text whenever, we pick up."
                  >
                    Available any time
                  </IconRow>
                </div>
              </div>

              <Divider />

              <ul className="space-y-2">
                <li>
                  <IconRow icon="message">
                    Texting is the fastest way to reach us
                  </IconRow>
                </li>
                <li>
                  <IconRow icon="shield">Fully insured on every job</IconRow>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
