import type { Metadata } from "next";
import type { FaqItem, LandingPage } from "@/lib/content";
import { mapsHref, site } from "@/lib/site";

export function absoluteUrl(path: string) {
  return new URL(path, site.url).href;
}

export function buildMetadata(page: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(page.path);
  const image = {
    url: absoluteUrl("/opengraph-image"),
    width: 1200,
    height: 630,
    alt: `${site.name} — ${site.host}`,
  };

  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url,
      siteName: site.host,
      title: page.title,
      description: page.description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [image.url],
    },
  };
}

export function lodgingJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "LocalBusiness"],
    "@id": `${site.url}/#business`,
    name: site.name,
    alternateName: site.alternateName,
    description: site.description,
    url: site.url,
    telephone: site.phoneE164,
    hasMap: mapsHref(),
    email: site.email,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phoneE164,
        contactType: "reservations",
        areaServed: "TR",
        availableLanguage: "Turkish",
      },
      {
        "@type": "ContactPoint",
        telephone: site.phoneE164,
        contactType: "customer support",
        url: `https://wa.me/${site.whatsapp}`,
        areaServed: "TR",
        availableLanguage: "Turkish",
      },
    ],
    image: [absoluteUrl("/logo.png"), absoluteUrl("/images/living-bright.jpg")],
    priceRange: site.priceRange,
    currenciesAccepted: "TRY",
    paymentAccepted: "Telefon ile netleştirilir",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.neighborhood}, ${site.address.street}`,
      addressLocality: site.address.district,
      addressRegion: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Bursa" },
      { "@type": "AdministrativeArea", name: "Osmangazi" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Ücretsiz Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Eşyalı daire", value: true },
      { "@type": "LocationFeatureSpecification", name: "7/24 iletişim", value: true },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Konaklama süreleri",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Günlük apart", url: absoluteUrl("/bursa-apart-gunluk") } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Saatlik apart", url: absoluteUrl("/bursa-apart-saatlik") } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Haftalık apart", url: absoluteUrl("/bursa-apart-haftalik") } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aylık apart", url: absoluteUrl("/bursa-apart-aylik") } },
      ],
    },
  };
}

export function faqJsonLd(faqs: FaqItem[]) {
  return {
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
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function landingJsonLd(page: LandingPage) {
  return [
    breadcrumbJsonLd([
      { name: "Ana Sayfa", path: "/" },
      { name: page.navLabel, path: page.path },
    ]),
    faqJsonLd(page.faqs),
  ];
}
