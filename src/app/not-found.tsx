import type { Metadata } from "next";
import Link from "next/link";
import { PhoneLink, WhatsAppLink } from "@/components/cta-buttons";

export const metadata: Metadata = {
  title: { absolute: "Sayfa bulunamadı | bursaapartbulus.com" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col px-4 py-16">
      <p className="text-sm font-bold text-coral-text">404</p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink">Bu sayfa yok</h1>
      <p className="mt-3 text-base leading-7 text-muted">
        Adres değişmiş olabilir. Günlük, saatlik, haftalık ve aylık daireler ana sayfada.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="inline-flex h-14 items-center justify-center rounded-xl bg-ink px-5 font-bold text-white">
          Ana sayfaya dön
        </Link>
        <PhoneLink className="w-full sm:w-auto" />
        <WhatsAppLink pageName="Bursa Apart" className="w-full sm:w-auto" />
      </div>
    </section>
  );
}
