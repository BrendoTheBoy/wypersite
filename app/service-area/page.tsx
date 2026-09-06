import type { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/Card";
import CTAButton from "@/components/CTAButton";
import Section from "@/components/Section";
import Sparkles from "@/components/Sparkles";
import { SITE } from "@/lib/site";
import ServiceAreaMap from "./ServiceAreaMapClient";

export const metadata: Metadata = {
  title: {
    absolute: "Service Area | Window Cleaning in Guelph and Wellington County",
  },
  description:
    "Window cleaning in Guelph, Fergus, Elora, Rockwood, and Cambridge. Serving homes and businesses across Wellington County. Ask if you are nearby.",
  alternates: {
    canonical: "/service-area",
  },
  openGraph: {
    title: "Service Area | Window Cleaning in Guelph and Wellington County",
    description:
      "Window cleaning in Guelph, Fergus, Elora, Rockwood, and Cambridge. Serving homes and businesses across Wellington County.",
    url: `${SITE.url}/service-area`,
  },
};

const towns = [
  {
    name: "Guelph",
    body: "Guelph is where most of our weeks are spent. Downtown stone houses and brick walk-ups pick up road salt and foot traffic, while two-storey homes in the south end collect pollen, sprinkler spots, and construction dust. We clean neighbourhood glass and the storefronts along Wyndham and the side streets that need a clear front for people walking into town.",
  },
  {
    name: "Fergus",
    body: "Fergus sits in Centre Wellington along the Grand River, with limestone storefronts on St. Andrew Street and a mix of century homes and newer subdivisions around them. Festival weekends and winter salt both leave a film on downtown glass. We clean village houses off the main road as well as the shops that want the front looking open when people come through town.",
  },
  {
    name: "Elora",
    body: "Elora's mill village core is built for people looking in from the sidewalk: limestone shops, restaurants, and guest houses packed along Mill Street above the gorge. Homes on the quieter streets nearby catch spray, tree pollen, and the extra dust of a busy visitor season. We handle the village houses and the storefronts that live on a clear first impression.",
  },
  {
    name: "Rockwood",
    body: "Rockwood is a smaller stop east of Guelph, with village lots near the conservation area and rural properties on the concession roads toward Acton. Tree cover, well water spots, and longer elevations are the usual mix, not dense downtown glass. If you are on a sideroad and unsure we cover it, ask. We are out this way often enough that a little extra drive is usually fine.",
  },
  {
    name: "Cambridge",
    body: "Cambridge is the larger neighbour to the south. Downtown Galt has heritage storefronts along the Grand that take fingerprints and street dust all week, while Preston and Hespeler mix older streets with suburban two-storeys and patio doors. We quote both shopfronts and homes, so one visit can cover the glass customers see and the glass you live with.",
  },
] as const;

const pageUrl = `${SITE.url}/service-area`;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Window Cleaning in Guelph and Wellington County",
  serviceType: "Window Cleaning",
  description:
    "Residential and commercial window cleaning in Guelph, Fergus, Elora, Rockwood, and Cambridge, plus surrounding Wellington County.",
  url: pageUrl,
  areaServed: [
    ...SITE.areasServed.map((name) => ({
      "@type": "City",
      name,
    })),
    {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 43.5448,
        longitude: -80.2482,
      },
      geoRadius: 25000,
    },
  ],
  provider: {
    "@type": "LocalBusiness",
    name: SITE.name,
    telephone: SITE.phone,
    email: SITE.email,
    url: SITE.url,
    priceRange: SITE.priceRange,
    openingHours: SITE.openingHours,
    address: {
      "@type": "PostalAddress",
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    areaServed: SITE.areasServed.map((name) => ({
      "@type": "City",
      name,
    })),
  },
};

const linkClass =
  "font-medium underline decoration-2 underline-offset-4 transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export default function ServiceAreaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <section className="relative overflow-hidden bg-primary">
        <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-8 sm:px-6 sm:pb-16 sm:pt-10 lg:px-8 lg:pb-20 lg:pt-12">
          <Sparkles />
          <div className="relative z-10 max-w-3xl">
            <p className="eyebrow">Service area</p>
            <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
              Window Cleaning in Guelph and Wellington County
            </h1>
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ink sm:text-lg">
              We clean homes and businesses across Guelph and Wellington County,
              including Fergus, Elora, Rockwood, and Cambridge. The map and town
              notes below show where we work most often. If you are close but
              not listed, ask. We will tell you whether we can get there.
            </p>
            <div className="mt-6 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row">
              <CTAButton href="/contact" variant="primary">
                Get a Free Quote
              </CTAButton>
              <CTAButton href={SITE.phoneHref} variant="secondary">
                Call {SITE.phone}
              </CTAButton>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 leading-[0]" aria-hidden="true">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-full sm:h-12 md:h-14"
            preserveAspectRatio="none"
          >
            <path
              d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      </section>

      <Section tone="white">
        <p className="eyebrow">On the map</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          Guelph at the centre, nearby towns on the pins
        </h2>
        <p className="mt-4 max-w-3xl font-body text-base leading-relaxed text-ink/80 sm:text-lg">
          The map is centred on Guelph, with a circle showing our usual range
          and pins for the towns we visit most. Most visits are{" "}
          <Link href="/services/residential-window-cleaning" className={linkClass}>
            residential window cleaning
          </Link>{" "}
          for houses, with{" "}
          <Link href="/services/commercial-window-cleaning" className={linkClass}>
            commercial and storefront
          </Link>{" "}
          work mixed in for shops that want a regular clear front. It is a guide
          for planning, not a hard line on the ground.
        </p>

        <div className="mt-10 overflow-hidden rounded-3xl border-[3px] border-ink bg-white shadow-hard">
          <div className="h-[360px] lg:h-[500px]">
            <ServiceAreaMap />
          </div>
        </div>
        <p className="mt-4 font-body text-sm leading-relaxed text-ink/80 sm:text-base">
          The circle is approximate. If you are nearby and not listed, just ask.
          We will let you know whether we can take the job.
        </p>
      </Section>

      <Section tone="cyan">
        <p className="eyebrow">Towns we serve</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          Five towns we know well
        </h2>
        <p className="mt-4 max-w-2xl font-body text-base text-ink/80 sm:text-lg">
          Each place has a different mix of housing and downtown glass. That is
          why a quote still starts with your address, not a one-size visit.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {towns.map((town) => (
            <Card key={town.name} title={town.name}>
              <p>{town.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <p className="eyebrow">Inside Guelph</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          Neighbourhoods across the city
        </h2>
        <div className="mt-6 max-w-3xl space-y-5 font-body text-base leading-relaxed text-ink sm:text-lg">
          <p>
            Guelph is not one kind of house. Kortright Hills and Westminster
            Woods in the south end are full of two-storey homes, garage panes,
            and patio glass that collect pollen and hard water spots. Exhibition
            Park and St. George&apos;s Park sit on older, tree-lined streets
            where taller original windows and wood frames need a careful hand.
            The Ward and Old University mix brick walk-ups, student houses, and
            tighter downtown lots that pick up more road film. Pine Ridge and
            Grange Hill East add newer east-end streets with a different mix of
            vinyl and larger rear glass.
          </p>
          <p>
            If you are nearby and not sure your block is covered, just ask when
            you{" "}
            <Link href="/contact" className={linkClass}>
              get in touch
            </Link>
            . We would rather confirm the street than have you guess from a
            list.
          </p>
        </div>
      </Section>

      <Section tone="cyan">
        <div className="mx-auto max-w-3xl rounded-3xl border-[3px] border-ink bg-white p-6 shadow-hard sm:p-8">
          <p className="eyebrow">A little further</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">
            Not on the list?
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-ink/80 sm:text-lg">
            We often travel a little further for the right job, especially when
            a home or shop sits just past the towns on this page. Send us the
            address and we will tell you straight whether we can take it.
          </p>
          <div className="mt-6">
            <CTAButton href="/contact" variant="primary">
              Get a Free Quote
            </CTAButton>
          </div>
        </div>
      </Section>

      <section className="bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-center gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-16">
          <div className="max-w-2xl">
            <p className="font-accent text-sm uppercase tracking-[0.18em] text-primary">
              Ready when you are
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-white sm:text-5xl">
              Book window cleaning in our service area
            </h2>
            <p className="mt-4 font-body text-base text-white/80 sm:text-lg">
              Tell us your address in Guelph, Fergus, Elora, Rockwood,
              Cambridge, or nearby, and we will send a free quote.
            </p>
          </div>
          <CTAButton href="/contact" variant="cyan">
            Get a Free Quote
          </CTAButton>
        </div>
      </section>
    </>
  );
}
