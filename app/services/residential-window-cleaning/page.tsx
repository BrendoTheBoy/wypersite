import type { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/Card";
import CTAButton from "@/components/CTAButton";
import Photo from "@/components/Photo";
import Section from "@/components/Section";
import Sparkles from "@/components/Sparkles";
import StarRating from "@/components/StarRating";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Residential Window Cleaning in Guelph",
  description:
    "Streak-free exterior window cleaning for homes in Guelph, Fergus, Elora, and Rockwood. Glass, frames, sills, and tracks as standard. Interior glass and screens available as add-ons.",
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
    title: "Exterior tracks cleared",
    body: "Debris and grit cleared from the outside tracks so windows slide properly.",
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
    body: "Call or send the form with a few details about your home. We reply with a clear, no-obligation quote.",
  },
  {
    number: "02",
    title: "Schedule a visit",
    body: "Pick a day and time that works for your household. Flexible booking across Guelph and Wellington County.",
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

// PLACEHOLDER: Replace with real Google reviews when available.
const testimonials = [
  {
    quote:
      "Every exterior pane came out spotless, and they cleared the tracks so the sliders actually move again. Easy to book and careful around the garden beds.",
    name: "Sarah",
    neighbourhood: "Kortright Hills",
  },
  {
    quote:
      "Two-storey house with awkward side windows. They handled the height without fuss and the glass looks brand new. We will book them every spring.",
    name: "James",
    neighbourhood: "Exhibition Park",
  },
  {
    quote:
      "Had the exterior done plus screens as an add-on. Honest quote, showed up on time, and walked us through everything before leaving.",
    name: "Laura",
    neighbourhood: "St. George's Park",
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
  {
    question: "Do you repair or replace windows?",
    answer:
      "No. We clean glass, frames, sills, and tracks. We do not repair windows or replace broken panes. If something looks damaged during a visit, we will point it out so you can call a glazier or contractor.",
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

const linkClass =
  "font-medium underline decoration-2 underline-offset-4 transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="#5CE1E6"
        stroke="#003057"
        strokeWidth="1.5"
      />
      <path
        d="M8.5 12.2 11 14.7 15.5 9.5"
        stroke="#003057"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
            <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row">
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
          Every quote starts with a thorough exterior clean covering the glass,
          frames, sills, and tracks. Interior glass and screens are priced
          separately, so you only pay for what you actually want done.
        </p>

        <div className="mt-14">
          <p className="eyebrow">Standard exterior clean</p>
          <p className="mt-3 max-w-2xl font-body text-base text-ink/80 sm:text-lg">
            This is what a standard quote covers.
          </p>
          <div className="mt-8 rounded-3xl border-[3px] border-ink bg-white p-6 shadow-hard sm:p-8">
            <ul className="divide-y divide-ink/15">
              {standardIncluded.map((item) => (
                <li
                  key={item.title}
                  className="flex gap-4 py-5 first:pt-0 last:pb-0"
                >
                  <CheckIcon />
                  <div className="min-w-0">
                    <h3 className="font-display text-xl leading-tight text-ink sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-body text-base leading-relaxed text-ink/80">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t-[3px] border-ink pt-16">
          <p className="eyebrow">Popular add-ons</p>
          <p className="mt-3 max-w-2xl font-body text-base text-ink/80 sm:text-lg">
            Interior work and screens take considerably more time, so they are
            quoted as add-ons and can be included on request.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((item) => (
              <Card key={item.title} title={item.title} tone="cyan">
                <p>{item.body}</p>
              </Card>
            ))}
          </div>
          <p className="mt-8 max-w-2xl font-body text-base text-ink/80 sm:text-lg">
            Mention any add-ons when you{" "}
            <Link href="/contact" className={linkClass}>
              request a quote
            </Link>{" "}
            so we can price them in from the start.
          </p>
        </div>
      </Section>

      <Section tone="cyan">
        <p className="eyebrow">How it works</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          A simple residential visit from quote to walkthrough
        </h2>
        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step) => (
            <li key={step.number} className="relative">
              <p className="font-accent text-5xl tracking-wider text-ink sm:text-6xl">
                {step.number}
              </p>
              <h3 className="mt-4 font-display text-2xl text-ink sm:text-3xl">
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
          What actually happens on a residential visit
        </h2>
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="rounded-3xl border-[3px] border-ink bg-white p-4 shadow-hard sm:p-6">
            <Photo
              src="/photos/residential.jpg"
              alt="Clean residential windows on a home in Guelph"
              width={1200}
              height={800}
              placeholderLabel="residential.jpg"
              className="aspect-[3/2] w-full rounded-2xl object-cover"
            />
          </div>
          <div className="space-y-5 font-body text-base leading-relaxed text-ink sm:text-lg">
            <p>
              When we arrive, we walk the property first. That means checking
              access, noting which panes need extra attention, and confirming
              anything you asked for in the quote. We bring our own water and
              gear, so you do not need to clear a hose or find an outdoor outlet.
            </p>
            <p>
              The exterior clean covers the glass, frames, sills, and tracks. We
              wipe as we go and check panes in the light so hard water marks and
              fingerprints do not get left behind. If you asked for interior
              glass or screens, those get done as a separate pass so nothing is
              rushed. Before we leave, we walk the job with you and handle any
              second looks on the spot.
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-3xl space-y-5 font-body text-base leading-relaxed text-ink sm:text-lg">
          <h3 className="font-display text-2xl leading-tight text-ink sm:text-3xl">
            Two-storey homes and hard to reach glass
          </h3>
          <p>
            Plenty of Guelph homes are two storeys with tall living room windows,
            over-garage panes, or side elevations that are awkward to reach from
            the ground. We plan for that when we quote. Extension poles and the
            right setup keep us off your landscaping where we can, and we flag
            anything unsafe or blocked before the visit starts rather than
            surprising you on the day.
          </p>
        </div>

        <div className="mt-16 max-w-3xl space-y-5 font-body text-base leading-relaxed text-ink sm:text-lg">
          <h3 className="font-display text-2xl leading-tight text-ink sm:text-3xl">
            Screens, storm windows, and weather
          </h3>
          <p>
            Screens sit in front of the glass and hold a surprising amount of
            dust and pollen. When you add screen cleaning, we remove them, clean
            them, and put them back so they do not dull the view you just paid
            for. Storm windows and seasonal inserts work the same way: tell us
            what is in place when you book so the quote matches the house we will
            actually see.
          </p>
          <p>
            Weather matters. We do not force a full exterior clean through a
            downpour or high wind. If the forecast turns bad, we reach out and
            reschedule. Light rain after the glass has dried is usually fine.
            Winter salt and spring pollen are two of the biggest reasons local
            homeowners book regularly, so timing a clean after the worst of
            either season often makes the biggest difference.
          </p>
          <p>
            Running a shop or office as well as a house? We also handle{" "}
            <Link
              href="/services/commercial-window-cleaning"
              className={linkClass}
            >
              commercial and storefront window cleaning
            </Link>{" "}
            on a separate schedule, so both sides of your glass stay covered.
          </p>
        </div>

        <div className="mt-16 max-w-3xl rounded-3xl border-[3px] border-ink bg-white p-6 shadow-hard sm:p-8">
          <p className="eyebrow">What we do not do</p>
          <h3 className="mt-3 font-display text-2xl leading-tight text-ink sm:text-3xl">
            Cleaning only, not repairs
          </h3>
          <p className="mt-4 font-body text-base leading-relaxed text-ink/80 sm:text-lg">
            We clean windows. We do not repair frames, replace seals, or install
            new glass. If a pane is cracked, a latch is broken, or something looks
            off during the visit, we will point it out so you can call the right
            trade. That keeps the quote honest and saves everyone a wasted trip.
          </p>
        </div>
      </Section>

      <Section tone="cyan">
        <p className="eyebrow">Where we work</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          Homes across Guelph and nearby towns
        </h2>
        <div className="mt-8 max-w-3xl space-y-5 font-body text-base leading-relaxed text-ink sm:text-lg">
          <p>
            Most of our residential work is right here in Guelph. That includes
            established neighbourhoods like Kortright Hills, Exhibition Park, and
            St. George&apos;s Park, newer streets in the south end, and older
            homes closer to downtown where the glass takes more of a beating from
            road salt and foot traffic. If you are nearby and unsure whether we
            cover your street, just ask when you get in touch.
          </p>
          <p>
            Outside the city we regularly clean homes in Fergus, Elora, Rockwood,
            and Cambridge, plus the surrounding Wellington County area between
            them. A full breakdown of towns and how booking works is on our{" "}
            <Link href="/service-area" className={linkClass}>
              service area page
            </Link>
            . Wherever you are on that map, the process is the same: a clear
            quote, a booked visit, and a walkthrough before we leave.
          </p>
        </div>
      </Section>

      <Section tone="white">
        <p className="eyebrow">Why Wyper</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          Why homeowners choose Wyper
        </h2>
        <p className="mt-4 max-w-2xl font-body text-base text-ink/80 sm:text-lg">
          Solo owner-operator work is the point. One person quotes the job, shows
          up, and stands behind the result.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <Card key={reason.title} title={reason.title}>
              <p>{reason.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="cyan">
        <p className="eyebrow">Kind words</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          What homeowners are saying
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="flex h-full flex-col rounded-3xl border-[3px] border-ink bg-white p-6 shadow-hard sm:p-8"
            >
              <StarRating />
              <blockquote className="mt-4 flex-1 font-body text-base leading-relaxed text-ink/80">
                <p>&ldquo;{item.quote}&rdquo;</p>
              </blockquote>
              <p className="mt-5 font-accent text-sm uppercase tracking-[0.14em] text-ink">
                {item.name}
                <span className="text-ink/70"> · {item.neighbourhood}</span>
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          Common questions before you book
        </h2>
        <p className="mt-4 max-w-2xl font-body text-base text-ink/80 sm:text-lg">
          Straight answers about what is included, how long a visit takes, and
          what happens if the weather turns.
        </p>
        <div className="mt-12 space-y-4">
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
              Ready for clearer glass at home?
            </h2>
            <p className="mt-4 font-body text-base text-white/80 sm:text-lg">
              Tell us about your home and we will send a free quote. Serving
              Guelph, Fergus, Elora, Rockwood, Cambridge, and surrounding
              Wellington County.
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
