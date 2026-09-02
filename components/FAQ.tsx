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
      "A standard quote covers exterior windows. Interior glass is available as an add-on for homes and commercial jobs. Let us know which sides you need when you request a quote so the visit is planned correctly.",
  },
  {
    question: "Are you insured?",
    answer:
      "Yes. Wyper Window Cleaning is fully insured on every job. You can book with confidence knowing the work is covered from start to finish.",
  },
  {
    question: "How long does a typical job take?",
    answer:
      "Most homes take a couple of hours, depending on the number of windows and how easy they are to access. Larger homes or jobs that include interior glass can take longer. We will give you a clearer time estimate with your quote.",
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
