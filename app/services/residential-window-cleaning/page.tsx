import type { Metadata } from "next";
import Card from "@/components/Card";
import CTAButton from "@/components/CTAButton";
import Photo from "@/components/Photo";
import Section from "@/components/Section";
import Sparkles from "@/components/Sparkles";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Residential Window Cleaning in Guelph",
  description:
    "Streak-free exterior window cleaning for homes in Guelph, Fergus, Elora, and Rockwood. Interior glass and screens available as add-ons. Owner-operated residential window cleaning from Wyper.",
  alternates: {
    canonical: "/services/residential-window-cleaning",
  },
  openGraph: {
    title: "Residential Window Cleaning in Guelph",
    description:
      "Streak-free exterior window cleaning for homes in Guelph, Fergus, Elora, and Rockwood. Interior glass and screens available as add-ons.",
    url: `${SITE.url}/services/residential-window-cleaning`,
  },
};

const standardIncluded = [
  {
    title: "Exterior glass",
    body: "Outside glass washed and squeegeed for a streak-free finish on every pane.",
  },
  {
    title: "Exterior frames wiped down",
    body: "Frames wiped so the whole window looks finished, not just the glass.",
  },
  {
    title: "Exterior sills wiped",
    body: "Outside sills wiped so dirt and grit are not left sitting on the ledge.",
  },
  {
    title: "Hard water and mineral spots",
    body: "Spot treatment where mineral buildup needs extra attention to come clean.",
  },
] as const;

const addOns = [
  {
    title: "Interior glass",
    body: "Reachable interior panes cleaned so the view from inside looks clear again.",
  },
  {
    title: "Window screens cleaned",
    body: "Screens removed, cleaned, and put back so they do not dull the glass.",
  },
  {
    title: "Interior sills and tracks",
    body: "Inside sills and tracks wiped so dirt and grit are not left behind.",
  },
] as const;

const steps = [
  {
    number: "01",
    title: "Get a free quote",
    body: "Call or send the form with a few details about your home. We reply with a clear, no-obligation quote for residential window cleaning.",
  },
  {
    number: "02",
    title: "Schedule a visit",
    body: "Pick a day and time that works for your household. Flexible booking for homes across Guelph and Wellington County.",
  },
  {
    number: "03",
    title: "We show up ready",
    body: "We arrive with our own water and equipment. No hunting for a hose or outlet on your property.",
  },
  {
    number: "04",
    title: "Walkthrough together",
    body: "Before we leave, you walk the job with us so you can approve the work and flag anything you want double-checked.",
  },
] as const;

const reasons = [
  {
    title: "Owner-operated",
    body: "You deal with the owner directly from the first quote to the last wipe. No call centre, no rotating crew.",
  },
  {
    title: "Fully insured",
    body: "Wyper carries full insurance on every residential job so you can book with confidence.",
  },
  {
    title: "Streak-free guarantee",
    body: "If anything is missed, we come back and make it right. Clean glass is the point.",
  },
  {
    title: "Respectful of your home",
    body: "Shoes off inside, careful around furniture and floors, and no mess left behind when the job is done.",
  },
] as const;

const faqs = [
  {
    question: "How often should I get my home windows cleaned?",
    answer:
      "Most homes in Guelph look their best with a clean two to four times a year. Winter salt, spring pollen, and summer dust all build up on the glass. We can help you pick a schedule that fits how your house sits and how much you notice the dirt.",
  },
  {
    question: "Are interior windows included?",
    answer:
      "A standard quote covers the exterior. Interior glass can be added on request. Because inside work takes considerably more time, we quote it as an add-on so you only pay for what you need.",
  },
  {
    question: "Are window screens included?",
    answer:
      "Screens are an add-on, not part of the standard exterior clean. They take extra time to remove, clean, and put back, so we quote them separately and can include them on request.",
  },
  {
    question: "How long does a typical house take?",
    answer:
      "It depends on the size of the home, how many panes you have, and whether add-ons like interior glass or screens are included. A typical exterior clean is often finished in a few hours. We will give you a better sense of timing when we quote your property.",
  },
  {
    question: "Do you need access to water or power?",
    answer:
      "No. We bring our own water and equipment to residential jobs. You do not need to set up a hose or clear space around an outdoor outlet.",
  },
  {
    question: "What happens if it rains?",
    answer:
      "Light rain after a clean is usually fine once the glass has dried. If weather looks bad on the day of your visit, we will reach out to reschedule so the job is not rushed or half done in a storm.",
  },
] as const;

const pageUrl = `${SITE.url}/services/residential-window-cleaning`;

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
  name: "Residential Window Cleaning",
  serviceType: "Residential Window Cleaning",
  description:
    "Streak-free exterior window cleaning for homes in Guelph, Fergus, Elora, Rockwood, and surrounding Wellington County. Interior glass and screens available as add-ons.",
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

export default function ResidentialWindowCleaningPage() {
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
            <p className="eyebrow">Residential</p>
            <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
              Residential Window Cleaning in Guelph
            </h1>
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ink sm:text-lg">
              Our standard service is a full exterior clean for homes across
              Guelph and Wellington County. Interior glass and screens are
              available as add-ons when you want them included.
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
        <p className="eyebrow">What&apos;s included</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          Exterior as standard. Add-ons when you need them.
        </h2>
        <p className="mt-4 max-w-2xl font-body text-base text-ink/80 sm:text-lg">
          Window cleaning Guelph homeowners book with Wyper starts with a thorough
          exterior clean. Interior work and screens are quoted separately so you
          only pay for what you ask for.
        </p>

        <div className="mt-12">
          <p className="eyebrow">Standard exterior clean</p>
          <p className="mt-3 max-w-2xl font-body text-base text-ink/80 sm:text-lg">
            This is what a standard quote covers.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {standardIncluded.map((item) => (
              <Card key={item.title} title={item.title}>
                <p>{item.body}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <p className="eyebrow">Popular add-ons</p>
          <p className="mt-3 max-w-2xl font-body text-base text-ink/80 sm:text-lg">
            Interior work and screens take considerably more time, so they are
            quoted as add-ons and can be included on request.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((item) => (
              <Card key={item.title} title={item.title} tone="cyan">
                <p>{item.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="cyan">
        <p className="eyebrow">How it works</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          A simple residential visit from quote to walkthrough
        </h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step) => (
            <li key={step.number} className="relative">
              <p className="font-accent text-5xl tracking-wider text-ink sm:text-6xl">
                {step.number}
              </p>
              <h3 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
                {step.title}
              </h3>
              <p className="mt-3 font-body text-base leading-relaxed text-ink/80">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="white">
        <p className="eyebrow">On the job</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          Careful work on real homes
        </h2>
        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="rounded-3xl border-[3px] border-ink bg-white p-4 shadow-hard sm:p-6">
            <Photo
              src="/photos/residential.jpg"
              alt="Streak free residential window cleaning in Guelph Ontario"
              width={1200}
              height={800}
              placeholderLabel="residential.jpg"
              className="aspect-[3/2] w-full rounded-2xl object-cover"
            />
          </div>
          <div className="space-y-4 font-body text-base leading-relaxed text-ink sm:text-lg">
            <p>
              Residential window cleaning is detail work. We take the time to wipe
              sills, clear tracks when included, and check panes in the light so
              hard water marks and fingerprints do not get left behind.
            </p>
            <p>
              Whether you are in Guelph, Fergus, Elora, or Rockwood, the goal is
              the same: clear glass that looks like someone actually cared about
              your home.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="cyan">
        <p className="eyebrow">Why Wyper</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          Why homeowners choose Wyper
        </h2>
        <p className="mt-4 max-w-2xl font-body text-base text-ink/80 sm:text-lg">
          Solo owner-operator work is the point. One person quotes the job, shows
          up, and stands behind the result.
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
          Residential window cleaning questions
        </h2>
        <p className="mt-4 max-w-2xl font-body text-base text-ink/80 sm:text-lg">
          Straight answers for homeowners booking window cleaning in Guelph and
          nearby towns.
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
              <div className="border-t-[3px] border-ink px-6 py-5 font-body text-base leading-relaxed text-ink/80 sm:px-8">
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
              Book residential window cleaning with Wyper
            </h2>
            <p className="mt-4 font-body text-base text-white/80 sm:text-lg">
              Request a free quote for your home in Guelph, Fergus, Elora,
              Rockwood, Cambridge, or surrounding Wellington County.
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
