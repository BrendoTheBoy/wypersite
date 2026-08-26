const faqs = [
  {
    question: "How much does window cleaning cost in Guelph?",
    answer:
      "Every home and storefront is different, so pricing depends on the number of windows, access, and whether you need interior, exterior, or both. Reach out with a few details and we will send a free, no-obligation quote tailored to your property.",
  },
  {
    question: "How often should windows be cleaned?",
    answer:
      "Most Guelph homes look their best with a clean two to four times a year, especially after winter salt and spring pollen. Storefronts often benefit from a more regular schedule so the glass always greets customers looking sharp.",
  },
  {
    question: "Do you clean inside and outside?",
    answer:
      "Yes. Wyper cleans interior and exterior glass for residential and commercial jobs. For homes, a standard quote covers the exterior, and interior glass can be added on request. Let us know which sides you need when you request a quote so the visit is planned correctly.",
  },
  {
    question: "Are you insured?",
    answer:
      "Yes. Wyper Window Cleaning is fully insured on every job. You can book with confidence knowing the work is covered from start to finish.",
  },
  {
    question: "Do you clean eavestroughs?",
    answer:
      "Yes. Eavestrough cleaning is one of the core services alongside window cleaning. We clear debris so water flows properly and your home stays protected through wet weather.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Wyper is based in Guelph and serves Fergus, Elora, Rockwood, Cambridge, and the surrounding Wellington County area. If you are nearby and unsure, just ask when you get in touch.",
  },
] as const;

export const faqJsonLd = {
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

export default function FAQ() {
  return (
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
  );
}
