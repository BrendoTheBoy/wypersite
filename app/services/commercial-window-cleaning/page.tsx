import type { Metadata } from "next";
import Card from "@/components/Card";
import CTAButton from "@/components/CTAButton";
import Photo from "@/components/Photo";
import Section from "@/components/Section";
import Sparkles from "@/components/Sparkles";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commercial & Storefront Window Cleaning in Guelph",
  description:
    "Commercial and storefront window cleaning for businesses in Guelph and Wellington County. Flexible recurring schedules so your glass always looks maintained.",
  alternates: {
    canonical: "/services/commercial-window-cleaning",
  },
  openGraph: {
    title: "Commercial & Storefront Window Cleaning in Guelph",
    description:
      "Commercial and storefront window cleaning for businesses in Guelph and Wellington County. Flexible recurring schedules so your glass always looks maintained.",
    url: `${SITE.url}/services/commercial-window-cleaning`,
  },
};

const whatWeClean = [
  {
    title: "Storefront glass and entry doors",
    body: "The glass customers walk up to first, cleaned so your shopfront looks open and cared for.",
  },
  {
    title: "Exterior windows",
    body: "Outside panes on the building washed and squeegeed for a streak-free finish.",
  },
  {
    title: "Interior glass",
    body: "Inside panes cleaned when you want the view from the floor to match the curb appeal.",
  },
  {
    title: "Display windows",
    body: "Large display fronts kept clear so product and signage stay easy to see from the street.",
  },
  {
    title: "Glass partitions and railings",
    body: "Interior glass walls, dividers, and railings wiped so fingerprints and haze do not build up.",
  },
  {
    title: "Frames and sills",
    body: "Frames and sills wiped down so the whole opening looks finished, not just the glass.",
  },
] as const;

const schedules = [
  {
    title: "Weekly",
    body: "Best for high traffic food and retail where fingerprints and street dirt show up fast.",
  },
  {
    title: "Biweekly",
    body: "The sweet spot for most storefronts that want glass looking maintained without a weekly visit.",
  },
  {
    title: "Monthly",
    body: "A solid fit for offices and lower traffic spaces that still want a regular reset.",
  },
] as const;

const whoWeWorkWith = [
  {
    title: "Retail storefronts",
    body: "Street-facing shops where clean glass is part of how you sell.",
  },
  {
    title: "Restaurants and cafes",
    body: "Dining rooms and takeout fronts that take a beating from traffic and weather.",
  },
  {
    title: "Offices and professional services",
    body: "Reception glass and exterior panes that set the tone before a meeting starts.",
  },
  {
    title: "Salons and studios",
    body: "Front glass and interior panes that need to look sharp for every walk-in.",
  },
  {
    title: "Medical and dental clinics",
    body: "Entry and waiting area glass kept clear for patients coming through the door.",
  },
  {
    title: "Real estate and property managers",
    body: "Storefronts and common glass kept presentable across units and listings.",
  },
] as const;

const reasons = [
  {
    title: "Work around your hours",
    body: "Early mornings before opening and other quiet windows so we stay out of your customers' way.",
  },
  {
    title: "Fully insured",
    body: "Commercial window cleaning covered on every visit so you can book with confidence.",
  },
  {
    title: "Consistent recurring schedule",
    body: "Set a rhythm and we show up on it. No calling and rebooking every time the glass looks dull.",
  },
  {
    title: "Same person every visit",
    body: "One operator who knows your property, your access, and how you like the job done.",
  },
] as const;

const faqs = [
  {
    question: "How often should storefront windows be cleaned?",
    answer:
      "It depends on foot traffic, weather, and how close you sit to a busy street. Many downtown Guelph storefronts look best on a weekly or biweekly schedule. Lower traffic offices often do well with a monthly visit. We can help you pick a rhythm that keeps the glass looking maintained without overdoing it.",
  },
  {
    question: "Can you clean before we open?",
    answer:
      "Yes. We schedule commercial window cleaning around your hours whenever we can, including early mornings before opening. Tell us when customers start arriving and we will aim for a slot that keeps the sidewalk and entry clear for your day.",
  },
  {
    question: "Do you clean interior glass for businesses?",
    answer:
      "Yes. Exterior storefront glass is the core of most commercial visits, and interior glass can be included when you need it. Partitions, display cases, and inside panes are easy to add once we know what you want covered.",
  },
  {
    question: "Do you offer recurring contracts?",
    answer:
      "Yes. Most commercial clients book a recurring schedule so the glass stays consistent week to week or month to month. You get a set day and cadence, and you do not have to chase a new booking every time.",
  },
  {
    question: "Are you insured?",
    answer:
      "Yes. Wyper is fully insured on every commercial job. You can put storefront window cleaning on the calendar knowing the work is covered from start to finish.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We are based in Guelph and serve downtown Guelph plus Fergus, Elora, Rockwood, Cambridge, and surrounding Wellington County. If your business is nearby and you are unsure, ask when you request a quote.",
  },
] as const;

const pageUrl = `${SITE.url}/services/commercial-window-cleaning`;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial & Storefront Window Cleaning",
  serviceType: "Commercial Window Cleaning",
  description:
    "Commercial and storefront window cleaning for businesses in Guelph and Wellington County, with flexible recurring schedules.",
  url: pageUrl,
  areaServed: SITE.areasServed.map((name) => ({
    "@type": "City",
    name,
  })),
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
  },
};

export default function CommercialWindowCleaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <section className="relative overflow-hidden bg-primary">
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8 lg:pb-24 lg:pt-14">
          <Sparkles />
          <div className="relative z-10 max-w-3xl">
            <p className="eyebrow">Commercial</p>
            <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
              Commercial &amp; Storefront Window Cleaning in Guelph
            </h1>
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ink sm:text-lg">
              Keep storefront glass sharp for customers walking by. Commercial
              window cleaning in Guelph with scheduling that works around your
              business hours, including early visits before you open.
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
        <p className="eyebrow">What we clean</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          Storefront glass and the details around it
        </h2>
        <p className="mt-4 max-w-2xl font-body text-base text-muted sm:text-lg">
          From entry doors to display windows, we clean the glass that shapes
          how your business looks from the street.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeClean.map((item) => (
            <Card key={item.title} title={item.title}>
              <p>{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="cyan">
        <p className="eyebrow">Recurring schedules</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          Set a schedule once. Stop chasing bookings.
        </h2>
        <p className="mt-4 max-w-2xl font-body text-base text-ink/80 sm:text-lg">
          Most storefronts book weekly, biweekly, or monthly so their glass
          always looks maintained. A set schedule means no calling and rebooking
          each time. We show up on the rhythm you choose and keep storefront
          window cleaning off your to-do list.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {schedules.map((item) => (
            <Card key={item.title} title={item.title}>
              <p>{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <p className="eyebrow">Who we work with</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          Built for businesses that care how the front looks
        </h2>
        <p className="mt-4 max-w-2xl font-body text-base text-muted sm:text-lg">
          Retail, food, offices, and clinics across Guelph and Wellington
          County. If customers see your glass, we can keep it clear.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whoWeWorkWith.map((item) => (
            <Card key={item.title} title={item.title}>
              <p>{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <p className="eyebrow">On site</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          Clean glass is the first thing a customer sees
        </h2>
        <div className="mt-10 rounded-3xl border-[3px] border-ink bg-white p-4 shadow-hard sm:p-6">
          <Photo
            src="/photos/commercial.jpg"
            alt="Commercial storefront window cleaning in downtown Guelph Ontario"
            width={1200}
            height={800}
            placeholderLabel="commercial.jpg"
            className="aspect-[21/9] w-full rounded-2xl object-cover sm:aspect-[2.4/1]"
          />
          <p className="mt-5 max-w-3xl font-body text-base leading-relaxed text-muted sm:text-lg">
            Storefront window cleaning in downtown Guelph and nearby towns keeps
            your front looking open, cared for, and ready for the day.
          </p>
        </div>
      </Section>

      <Section tone="cyan">
        <p className="eyebrow">Why Wyper</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          Why businesses choose Wyper
        </h2>
        <p className="mt-4 max-w-2xl font-body text-base text-ink/80 sm:text-lg">
          Straightforward commercial window cleaning with a schedule you can
          rely on and one person who knows your site.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <Card key={reason.title} title={reason.title}>
              <p>{reason.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          Commercial window cleaning questions
        </h2>
        <p className="mt-4 max-w-2xl font-body text-base text-muted sm:text-lg">
          Straight answers for business owners booking storefront window
          cleaning in Guelph and nearby towns.
        </p>
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-3xl border-[3px] border-ink bg-white shadow-hard open:shadow-hard-lg"
            >
              <summary className="cursor-pointer list-none px-6 py-5 font-display text-xl text-ink marker:content-none sm:px-8 sm:text-2xl [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  <span>{faq.question}</span>
                  <span
                    className="mt-1 shrink-0 font-accent text-lg text-ink transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </span>
              </summary>
              <div className="border-t-[3px] border-ink px-6 py-5 font-body text-base leading-relaxed text-muted sm:px-8">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </Section>

      <section className="bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-center gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-16">
          <div className="max-w-2xl">
            <p className="font-accent text-sm uppercase tracking-[0.18em] text-primary">
              Ready when you are
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-white sm:text-5xl">
              Book commercial window cleaning with Wyper
            </h2>
            <p className="mt-4 font-body text-base text-white/80 sm:text-lg">
              Request a free quote for your storefront or office in Guelph,
              Fergus, Elora, Rockwood, Cambridge, or surrounding Wellington
              County.
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
