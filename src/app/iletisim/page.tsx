import { Breadcrumb } from "@/components/breadcrumb";
import { PhoneLink, WhatsAppLink } from "@/components/cta-buttons";
import { JsonLd } from "@/components/json-ld";
import { MapSection } from "@/components/map-section";
import { Section } from "@/components/section";
import { contactPage } from "@/lib/content";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { formattedAddress, phoneHref, site, whatsappHref } from "@/lib/site";

export const metadata = buildMetadata(contactPage);

const checklist = [
  "Giriş tarihi ve tahmini süre",
  "Saatlik, günlük, haftalık veya aylık",
  "Kişi sayısı",
  "Varsa semt tercihi: Altıparmak, Heykel, Setbaşı",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "İletişim", path: "/iletisim" },
        ])}
      />
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
          <Breadcrumb items={[{ name: "Ana Sayfa", path: "/" }, { name: "İletişim" }]} />
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-ink md:text-5xl">{contactPage.h1}</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted md:text-lg">{contactPage.subtitle}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <PhoneLink className="w-full sm:w-auto" />
            <WhatsAppLink pageName="iletişim" className="w-full sm:w-auto" />
          </div>
          <dl className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-line p-4">
              <dt className="text-sm font-bold text-muted">İşletme</dt>
              <dd className="mt-1 text-lg font-bold text-ink">
                {site.name} · {site.alternateName}
              </dd>
            </div>
            <div className="rounded-2xl border border-line p-4">
              <dt className="text-sm font-bold text-muted">Çalışma</dt>
              <dd className="mt-1 text-lg font-bold text-ink">7/24 telefon ve WhatsApp</dd>
            </div>
            <div className="rounded-2xl border border-line p-4">
              <dt className="text-sm font-bold text-muted">Telefon</dt>
              <dd className="mt-1 text-lg font-bold text-ink">
                <a href={phoneHref()}>{site.phoneDisplay}</a>
              </dd>
            </div>
            <div className="rounded-2xl border border-line p-4">
              <dt className="text-sm font-bold text-muted">WhatsApp</dt>
              <dd className="mt-1 text-lg font-bold text-ink">
                <a href={whatsappHref("iletişim")} target="_blank" rel="noopener noreferrer">
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="rounded-2xl border border-line p-4 sm:col-span-2">
              <dt className="text-sm font-bold text-muted">Adres</dt>
              <dd className="mt-1 text-lg font-bold text-ink">{formattedAddress()}</dd>
            </div>
            <div className="rounded-2xl border border-line p-4">
              <dt className="text-sm font-bold text-muted">Site</dt>
              <dd className="mt-1 text-lg font-bold text-ink">
                <a href={site.url}>{site.host}</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <Section tone="surface" title="Yazarken şunları ekleyin" intro="Mesaj ne kadar net olursa, müsait daire ve fiyat o kadar hızlı döner.">
        <ul className="grid gap-3 sm:grid-cols-2">
          {checklist.map((item) => (
            <li key={item} className="rounded-2xl border border-line bg-white px-4 py-4 text-base font-semibold text-ink">
              {item}
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Adres ve harita" intro="Demirtaşpaşa, 2. Sabunevi Sk. No:6, 16220 Osmangazi/Bursa. Hat 7/24 açıktır.">
        <MapSection />
      </Section>
    </>
  );
}
