"use client";

import { useEffect } from "react";
import { PhoneLink, WhatsAppLink } from "@/components/cta-buttons";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col px-4 py-16">
      <p className="text-xs font-semibold tracking-wide text-muted">bursaapartbulus.com</p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink">Sayfa şu an açılamadı</h1>
      <p className="mt-3 text-base leading-7 text-muted">
        Bağlantıyı yenileyin veya müsaitlik için bizi doğrudan arayın. Rezervasyon telefon ve WhatsApp ile devam eder.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex h-14 items-center justify-center rounded-xl bg-ink px-5 font-bold text-white"
        >
          Yeniden dene
        </button>
        <PhoneLink className="w-full sm:w-auto" />
        <WhatsAppLink pageName="Bursa Apart" className="w-full sm:w-auto" />
      </div>
    </section>
  );
}
