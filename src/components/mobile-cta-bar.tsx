"use client";

import { PhoneLink, WhatsAppLink } from "@/components/cta-buttons";
import { usePageName } from "@/components/use-page-name";

export function MobileCtaBar() {
  const pageName = usePageName();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <PhoneLink size="lg" className="w-full px-2 text-sm" />
        <WhatsAppLink pageName={pageName} size="lg" className="w-full px-2 text-sm" />
      </div>
    </div>
  );
}

export function MobileCtaFallback() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white md:hidden">
      <div className="grid grid-cols-2 gap-2 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <PhoneLink size="lg" className="w-full px-2 text-sm" />
        <WhatsAppLink pageName="Bursa Apart" size="lg" className="w-full px-2 text-sm" />
      </div>
    </div>
  );
}
