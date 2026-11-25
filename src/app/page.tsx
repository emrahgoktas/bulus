import { ApartmentGrid } from "@/components/apartment-card";
import { Advantages } from "@/components/advantages";
import { DistrictCards, StayCards } from "@/components/choice-cards";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { MapSection } from "@/components/map-section";
import { Section } from "@/components/section";
import { Testimonials } from "@/components/testimonials";
import { apartments } from "@/lib/apartments";
import { homePage } from "@/lib/content";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = buildMetadata(homePage);

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(homePage.faqs)} />
      <Hero
        h1={homePage.h1}
        subtitle={homePage.subtitle}
        pageName="Bursa Apart"
        images={homePage.gallery}
      />
      <Section
        tone="surface"
        title="Konaklamada net olanlar"
        intro="Temizlik, konum ve ulaşılabilirlik. Fiyatı ve müsaitliği telefonda söylüyoruz."
      >
        <Advantages />
      </Section>
      <Section
        title="Süreyi siz seçin"
        intro="Saatlik dinlenmeden aylık yaşama kadar aynı hat. İhtiyacınıza göre daire tipi değişir."
      >
        <StayCards />
      </Section>
      <Section title="Osmangazi ve Altıparmak'ta eşyalı daire">
        <div className="max-w-3xl space-y-4 text-base leading-7 text-ink">
          <p>
            bursaapartbulus.com, Bursa apart günlük, saatlik, haftalık ve aylık arayanlar için Osmangazi ve Altıparmak
            çevresinde temiz, eşyalı daire sunar. Heykel, Setbaşı ve çarşı hattında 7/24 telefon ve WhatsApp açıktır.
          </p>
          <p>
            Online ödeme yok. Tarihi, süreyi ve kişi sayısını yazmanız yeterli. Boş daireyi, net fiyatı ve güncel
            fotoğrafları size iletiriz. Sitedeki görseller daire tiplerini gösterir.
          </p>
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
      <Section title="İlçe ve semt sayfaları" intro="Aradığınız bölgeye göre daire tiplerini inceleyin.">
        <DistrictCards />
      </Section>
      <Section id="konum" tone="surface" title="Konum" intro="Demirtaşpaşa, 2. Sabunevi Sk. No:6, 16220 Osmangazi/Bursa.">
        <MapSection />
      </Section>
      <Section title="Misafir yorumları">
        <Testimonials />
      </Section>
      <Section id="sss" tone="surface" title="Sık sorulan sorular">
        <Faq items={homePage.faqs} />
      </Section>
      <FinalCta
        title="Müsaitlik ve fiyat için hemen ulaşın"
        text="Tarihinizi yazın. Size uygun daireyi ve net fiyatı telefon veya WhatsApp üzerinden söyleyelim."
        pageName="Bursa Apart"
      />
    </>
  );
}
