import Card from "@/components/Card";
import CTAButton from "@/components/CTAButton";
import FAQ, { faqJsonLd } from "@/components/FAQ";
import Hero from "@/components/Hero";
import Photo from "@/components/Photo";
import Section from "@/components/Section";
import StarRating from "@/components/StarRating";
import { SITE } from "@/lib/site";

const services = [
  {
    title: "Residential Window Cleaning",
    href: "/services/residential-window-cleaning",
    image: "/photos/residential.jpg",
    placeholderLabel: "residential.jpg",
    alt: "Residential window cleaning on a home in Guelph",
    description:
      "Crystal-clear exterior windows for homes across Guelph and Wellington County. Interior glass and screens available as add-ons. We show up on time, treat your place with care, and leave every pane streak-free.",
  },
  {
    title: "Commercial & Storefront",
    href: "/services",
    image: "/photos/commercial.jpg",
    placeholderLabel: "commercial.jpg",
    alt: "Commercial storefront window cleaning in Guelph",
    description:
      "Keep your storefront looking sharp for customers walking by. Regular commercial cleans that fit around your hours so your glass always makes a strong first impression.",
  },
  {
    title: "Eavestrough Cleaning",
    href: "/services",
    image: "/photos/eavestrough.jpg",
    placeholderLabel: "eavestrough.jpg",
    alt: "Eavestrough cleaning service on a Guelph home",
    description:
      "Clogged gutters lead to water damage and messy overflow. Wyper clears debris so water flows where it should, protecting your home and foundation through every season.",
  },
] as const;

const reasons = [
  {
    title: "Fully Insured",
    body: "Work with peace of mind. Wyper carries full insurance on every job, residential or commercial.",
  },
  {
    title: "Owner-Operated",
    body: "You deal with the owner directly, not a call centre. One local operator who knows the work and stands behind it.",
  },
  {
    title: "Streak-Free Guarantee",
    body: "If a window is not streak-free, we come back and make it right. Clean glass is the whole point.",
  },
  {
    title: "Local to Guelph",
    body: "Based in Guelph and serving Fergus, Elora, Rockwood, Cambridge, and the surrounding area.",
  },
] as const;

const steps = [
  {
    number: "01",
    title: "Get a free quote",
    body: "Reach out with your address and what you need cleaned. We reply quickly with a clear, no-obligation quote.",
  },
  {
    number: "02",
    title: "Book a time",
    body: "Pick a day that works for you. Flexible scheduling for homes and storefronts across Wellington County.",
  },
  {
    number: "03",
    title: "Enjoy the view",
    body: "Sit back while the glass gets done right. Streak-free windows and clear eavestroughs, guaranteed.",
  },
] as const;

// PLACEHOLDER: Replace with real Google reviews when available.
const testimonials = [
  {
    quote:
      "Wyper left every window spotless. Friendly, on time, and easy to book. Our Guelph home has never looked brighter.",
    name: "Sarah",
    neighbourhood: "Kortright Hills",
  },
  {
    quote:
      "Our storefront glass was cloudy for months. One visit from Wyper and the whole front of the shop looks sharp again.",
    name: "Mike",
    neighbourhood: "Downtown Guelph",
  },
  {
    quote:
      "Booked eavestrough and window cleaning together. Thorough, careful with the property, and the results speak for themselves.",
    name: "Laura",
    neighbourhood: "St. George's Park",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Hero />

      <Section tone="white">
        <p className="eyebrow">What we do</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          Services that leave every window sparkling
        </h2>
        <p className="mt-4 max-w-2xl font-body text-base text-muted sm:text-lg">
          From neighbourhood homes to busy storefronts, Wyper keeps glass clean
          and gutters clear across Guelph and beyond.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              href={service.href}
              linkLabel="Learn more"
              image={{
                src: service.image,
                alt: service.alt,
                placeholderLabel: service.placeholderLabel,
              }}
            >
              <p>{service.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="cyan">
        <p className="eyebrow">Why Wyper</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          Bold on brand. Serious about clean glass.
        </h2>
        <p className="mt-4 max-w-2xl font-body text-base text-ink/80 sm:text-lg">
          Local, insured, and owner-operated. The way a neighbourhood service
          should feel.
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
        <p className="eyebrow">The Wyper Difference</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          See the before and after
        </h2>
        <p className="mt-4 max-w-2xl font-body text-base text-muted sm:text-lg">
          Dirty glass hides the view. One thorough clean brings the light back
          in.
        </p>
        <div className="mt-10 rounded-3xl border-[3px] border-ink bg-white p-5 shadow-hard sm:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <figure>
              <p className="eyebrow mb-3">Before</p>
              <Photo
                src="/photos/before.jpg"
                alt="Dirty windows before professional window cleaning in Guelph"
                width={800}
                height={600}
                placeholderLabel="before.jpg"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
            </figure>
            <figure>
              <p className="eyebrow mb-3">After</p>
              <Photo
                src="/photos/after.jpg"
                alt="Streak-free windows after Wyper window cleaning in Guelph"
                width={800}
                height={600}
                placeholderLabel="after.jpg"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
            </figure>
          </div>
        </div>
      </Section>

      <Section tone="cyan">
        <p className="eyebrow">Meet the owner</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          The person behind the squeegee
        </h2>
        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="rounded-3xl border-[3px] border-ink bg-white p-4 shadow-hard sm:p-6">
            <Photo
              src="/photos/owner.jpg"
              alt="Owner of Wyper Window Cleaning in Guelph"
              width={800}
              height={600}
              placeholderLabel="owner.jpg"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </div>
          <div className="space-y-4 font-body text-base leading-relaxed text-ink sm:text-lg">
            <p>
              Wyper Window Cleaning is owner-operated and based in Guelph. We are
              fully insured, and we handle every job ourselves from the first
              quote to the final wipe.
            </p>
            <p>
              No call centres, no rotating crews. When you book Wyper, you get
              the owner on site with the tools, the care, and the streak-free
              finish your windows deserve.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <p className="eyebrow">How it works</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          Three easy steps to clearer windows
        </h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((step) => (
            <li key={step.number} className="relative">
              <p className="font-accent text-5xl tracking-wider text-ink sm:text-6xl">
                {step.number}
              </p>
              <h3 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
                {step.title}
              </h3>
              <p className="mt-3 font-body text-base leading-relaxed text-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="white" className="border-t-[3px] border-ink">
        <p className="eyebrow">Kind words</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          What neighbours are saying
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="flex h-full flex-col rounded-3xl border-[3px] border-ink bg-white p-6 shadow-hard sm:p-8"
            >
              <StarRating />
              <blockquote className="mt-4 flex-1 font-body text-base leading-relaxed text-muted">
                <p>&ldquo;{item.quote}&rdquo;</p>
              </blockquote>
              <p className="mt-5 font-accent text-sm uppercase tracking-[0.14em] text-ink">
                {item.name}
                <span className="text-muted"> · {item.neighbourhood}</span>
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="cyan">
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          Questions Guelph homeowners ask
        </h2>
        <p className="mt-4 max-w-2xl font-body text-base text-ink/80 sm:text-lg">
          Straight answers about window cleaning, insurance, and where Wyper
          works.
        </p>
        <FAQ />
      </Section>

      <section className="bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-center gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-16">
          <div className="max-w-2xl">
            <p className="font-accent text-sm uppercase tracking-[0.18em] text-primary">
              Ready when you are
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-white sm:text-5xl">
              Get streak-free windows without the hassle
            </h2>
            <p className="mt-4 font-body text-base text-white/80 sm:text-lg">
              Call {SITE.phone} or request a free quote online. We serve
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
