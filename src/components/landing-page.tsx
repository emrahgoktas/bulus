import Link from "next/link";
import { ApartmentGrid } from "@/components/apartment-card";
import { Advantages } from "@/components/advantages";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { MapSection } from "@/components/map-section";
import { Section } from "@/components/section";
import { Testimonials } from "@/components/testimonials";
import { apartmentsByIds } from "@/lib/apartments";
import type { LandingPage } from "@/lib/content";
import { landingJsonLd } from "@/lib/seo";

export function LandingView({ page }: { page: LandingPage }) {
  const apartments = apartmentsByIds(page.apartmentIds);

  return (
    <>
      <JsonLd data={landingJsonLd(page)} />
      <Hero
        h1={page.h1}
        subtitle={page.subtitle}
        pageName={page.whatsappLabel}
        images={page.gallery}
        breadcrumb={[
          { name: "Ana Sayfa", path: "/" },
          { name: page.navLabel },
        ]}
      />
      <Section tone="surface" title="Neden Bursa Apart?" intro="Kısa konaklamada da, aylık planda da aynı söz: temiz daire, net bilgi, ulaşılabilir ekip.">
        <Advantages />
      </Section>
      <Section title={page.introTitle}>
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-4 text-base leading-7 text-ink">
            {page.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="space-y-3">
            {page.highlights.map((item) => (
              <li key={item.title} className="rounded-2xl border border-line p-4">
                <h3 className="font-bold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <Section
        id="daireler"
        tone="surface"
        title="Daire tipleri"
        intro="Aradığınızda boş dairenin güncel fotoğrafını ve net fiyatını WhatsApp üzerinden göndeririz."
      >
        <ApartmentGrid apartments={apartments} />
      </Section>
      <Section title="Diğer seçenekler">
        <ul className="grid gap-3 md:grid-cols-3">
          {page.related.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block h-full rounded-2xl border border-line p-5 transition-colors hover:border-coral"
              >
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <Section id="konum" tone="surface" title="Konum" intro="Demirtaşpaşa, 2. Sabunevi Sk. No:6, 16220 Osmangazi/Bursa.">
        <MapSection />
      </Section>
      <Section title="Misafir yorumları" intro="Konaklama sonrası paylaşılan kısa deneyimler.">
        <Testimonials />
      </Section>
      <Section id="sss" tone="surface" title="Sık sorulan sorular">
        <Faq items={page.faqs} />
      </Section>
      <FinalCta title={page.finalTitle} text={page.finalText} pageName={page.whatsappLabel} />
    </>
  );
}
