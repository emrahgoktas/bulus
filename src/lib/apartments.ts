export type Photo = {
  src: string;
  alt: string;
};

export type StayKey = "gunluk" | "saatlik" | "haftalik" | "aylik";

export type Apartment = {
  id: string;
  name: string;
  neighborhood: string;
  rooms: string;
  guests: number;
  size: number;
  summary: string;
  stays: StayKey[];
  images: Photo[];
};

export const stayLabels: Record<StayKey, string> = {
  gunluk: "Günlük",
  saatlik: "Saatlik",
  haftalik: "Haftalık",
  aylik: "Aylık",
};

const photo = {
  livingBright: {
    src: "/images/living-bright.jpg",
    alt: "Aydınlık eşyalı apart salonu, koltuk ve geniş pencere",
  },
  livingModern: {
    src: "/images/living-modern.jpg",
    alt: "Modern apart oturma alanı ve yemek masası",
  },
  livingCozy: {
    src: "/images/living-cozy.jpg",
    alt: "Sıcak tonlarda eşyalı apart oturma odası",
  },
  livingScandi: {
    src: "/images/living-scandi.jpg",
    alt: "Sade ve ferah apart salonu",
  },
  bedroomWhite: {
    src: "/images/bedroom-white.jpg",
    alt: "Beyaz nevresimli düzenli apart yatak odası",
  },
  bedroomSoft: {
    src: "/images/bedroom-soft.jpg",
    alt: "Yumuşak ışık alan apart yatak odası",
  },
  bedroomHotel: {
    src: "/images/bedroom-hotel.jpg",
    alt: "Temiz çarşaflı apart yatak odası",
  },
  kitchen: {
    src: "/images/kitchen.jpg",
    alt: "Küçük mutfak tezgahı ve temel pişirme alanı",
  },
} as const;

export const apartments: Apartment[] = [
  {
    id: "altiparmak-suit",
    name: "Altıparmak Suit",
    neighborhood: "Altıparmak",
    rooms: "1+1",
    guests: 2,
    size: 48,
    summary:
      "Merkez aksa yakın, çiftler ve kısa iş seyahati için kompakt 1+1. Oturma alanı ve ayrı yatak odası var.",
    stays: ["gunluk", "saatlik", "haftalik"],
    images: [photo.livingBright, photo.bedroomWhite, photo.kitchen],
  },
  {
    id: "heykel-studio",
    name: "Heykel Studio",
    neighborhood: "Heykel",
    rooms: "Stüdyo",
    guests: 2,
    size: 28,
    summary:
      "Kısa giriş ve çıkışlarda pratik, tek alandan oluşan stüdyo. Saatlik ve günlük planlara uygundur.",
    stays: ["gunluk", "saatlik"],
    images: [photo.bedroomSoft, photo.livingCozy],
  },
  {
    id: "setbasi-daire",
    name: "Setbaşı Daire",
    neighborhood: "Setbaşı",
    rooms: "1+1",
    guests: 3,
    size: 55,
    summary:
      "Biraz daha geniş oturma alanı. Üç kişiye kadar günlük, haftalık ve aylık kalışlarda sorulabilir.",
    stays: ["gunluk", "haftalik", "aylik"],
    images: [photo.livingModern, photo.bedroomHotel, photo.kitchen],
  },
  {
    id: "osmangazi-aile",
    name: "Osmangazi Aile Evi",
    neighborhood: "Osmangazi",
    rooms: "2+1",
    guests: 4,
    size: 85,
    summary:
      "Aile ve uzun kalış için iki yatak odalı eşyalı düzen. Haftalık ve aylık planlarda öne çıkar.",
    stays: ["haftalik", "aylik"],
    images: [photo.livingScandi, photo.bedroomWhite, photo.kitchen],
  },
  {
    id: "carsi-loft",
    name: "Çarşı Loft",
    neighborhood: "Çarşı",
    rooms: "1+1",
    guests: 2,
    size: 42,
    summary:
      "Çarşı çevresinde, yeme içme ve ulaşımın yakın olduğu 1+1. Günlük ve haftalık iş planlarına uygundur.",
    stays: ["gunluk", "saatlik", "haftalik"],
    images: [photo.livingCozy, photo.bedroomSoft],
  },
  {
    id: "panorama-oda",
    name: "Panorama Oda",
    neighborhood: "Altıparmak",
    rooms: "Stüdyo",
    guests: 2,
    size: 32,
    summary:
      "Kısa süreli dinlenme için sade stüdyo. Saatlik ve günlük müsaitlik için bizi arayın.",
    stays: ["saatlik", "gunluk"],
    images: [photo.bedroomHotel, photo.livingBright],
  },
];

export function apartmentsByIds(ids: string[]) {
  return ids
    .map((id) => apartments.find((apartment) => apartment.id === id))
    .filter((apartment): apartment is Apartment => Boolean(apartment));
}
