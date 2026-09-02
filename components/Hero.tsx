import CTAButton from "@/components/CTAButton";
import Sparkles from "@/components/Sparkles";
import { SITE } from "@/lib/site";

/** Header is ~76px mobile / ~90px desktop (logo + padding + border). */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="relative mx-auto flex min-h-[calc(100svh-4.75rem)] w-full max-w-6xl flex-col items-center justify-between px-4 pb-16 pt-6 text-center sm:px-6 sm:pb-20 sm:pt-8 lg:min-h-[calc(100svh-5.5rem)] lg:px-8">
        <Sparkles />

        <div className="relative z-10 flex w-full flex-col items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={SITE.logo}
            alt="Wyper Window Cleaning"
            className="mx-auto h-auto w-auto max-h-[min(340px,calc(100svh-26rem))] max-w-[min(100%,340px)] object-contain lg:max-h-[min(620px,calc(100svh-24rem))] lg:max-w-[620px]"
          />

          <h1 className="mt-3 max-w-2xl font-display text-3xl leading-[1.1] text-ink sm:mt-4 sm:text-4xl md:text-[2.75rem] lg:text-5xl">
            Streak-Free Windows in Guelph
          </h1>

          <p className="mt-2 max-w-lg font-body text-sm leading-relaxed text-ink/80 sm:mt-3 sm:text-base">
            Residential and commercial window cleaning across Guelph and
            Wellington County.
          </p>

          <div className="mt-2 flex w-full max-w-md flex-col gap-3 sm:mt-3 sm:max-w-none sm:flex-row sm:justify-center">
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
  );
}
