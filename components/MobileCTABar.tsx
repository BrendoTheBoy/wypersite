import CTAButton from "@/components/CTAButton";
import { SITE } from "@/lib/site";

export default function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t-[3px] border-ink bg-white p-3 md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-3">
        <CTAButton href={SITE.phoneHref} variant="secondary" className="w-full">
          Call
        </CTAButton>
        <CTAButton href="/contact" variant="primary" className="w-full">
          Get a Quote
        </CTAButton>
      </div>
    </div>
  );
}
