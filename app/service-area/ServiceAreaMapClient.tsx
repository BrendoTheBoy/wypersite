"use client";

import dynamic from "next/dynamic";

const ServiceAreaMap = dynamic(() => import("@/components/ServiceAreaMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-white font-body text-sm text-ink">
      Loading map...
    </div>
  ),
});

export default ServiceAreaMap;
