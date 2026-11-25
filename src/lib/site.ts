const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bursaapartbulus.com";

export const site = {
  name: "Buluş Apart",
  alternateName: "Bursa Apart",
  shortName: "Bursa Apart",
  description:
    "Buluş Apart (Bursa Apart): Demirtaşpaşa, 2. Sabunevi Sk. No:6, Osmangazi/Bursa. Temiz, eşyalı günlük, saatlik, haftalık ve aylık daire. 7/24 telefon ve WhatsApp.",
  url: siteUrl,
  host: new URL(siteUrl).host,
  phoneDisplay: "0541 131 23 53",
  phoneTel: "05411312353",
  phoneE164: "+905411312353",
  whatsapp: "905411312353",
  email: "info@bursaapartbulus.com",
  address: {
    neighborhood: "Demirtaşpaşa",
    street: "2. Sabunevi Sk. No:6",
    district: "Osmangazi",
    city: "Bursa",
    postalCode: "16220",
    country: "TR",
  },
  geo: {
    latitude: 40.189694,
    longitude: 29.071831,
  },
  placeId: "0x14ca3ffb7a795dcb:0x90b9770084e402c2",
  mapQuery: "Buluş Apart, Demirtaşpaşa, 2. Sabunevi Sk. No:6, 16220 Osmangazi/Bursa",
  priceRange: "₺₺",
} as const;

export const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/bursa-apart-gunluk", label: "Günlük" },
  { href: "/bursa-apart-saatlik", label: "Saatlik" },
  { href: "/bursa-apart-haftalik", label: "Haftalık" },
  { href: "/bursa-apart-aylik", label: "Aylık" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const districtLinks = [
  { href: "/osmangazi", label: "Osmangazi" },
  { href: "/altiparmak", label: "Altıparmak" },
] as const;

const pageNames: Record<string, string> = {
  "/": "Bursa Apart",
  "/bursa-apart-gunluk": "Bursa Apart Günlük",
  "/bursa-apart-saatlik": "Bursa Apart Saatlik",
  "/bursa-apart-haftalik": "Bursa Apart Haftalık",
  "/bursa-apart-aylik": "Bursa Apart Aylık",
  "/iletisim": "iletişim",
  "/osmangazi": "Osmangazi apart",
  "/altiparmak": "Altıparmak apart",
};

export function pageNameFromPath(pathname: string) {
  return pageNames[pathname] ?? "Bursa Apart";
}

export function phoneHref() {
  return `tel:${site.phoneTel}`;
}

export function whatsappHref(pageName: string) {
  const text = `Merhaba, ${site.host} üzerinden ${pageName} için müsaitlik ve fiyat bilgisi almak istiyorum.`;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function mapsHref() {
  const place = encodeURIComponent(site.placeId);
  return `https://www.google.com/maps/place/Bulu%C5%9F+Apart/@${site.geo.latitude},${site.geo.longitude},17z/data=!4m6!3m5!1s${place}!8m2!3d${site.geo.latitude}!4d${site.geo.longitude}`;
}

export function mapsEmbedSrc() {
  const place = encodeURIComponent(site.placeId);
  const pb = `!1m18!1m12!1m3!1d3048!2d${site.geo.longitude}!3d${site.geo.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s${place}!2sBulu%C5%9F%20Apart!5e0!3m2!1str!2str!4v1732523400000!5m2!1str!2str`;
  return `https://www.google.com/maps/embed?pb=${pb}`;
}

export function formattedAddress() {
  return `${site.address.neighborhood}, ${site.address.street}, ${site.address.postalCode} ${site.address.district}/${site.address.city}`;
}
