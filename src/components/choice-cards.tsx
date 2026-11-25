import Image from "next/image";
import Link from "next/link";
import {
  altiparmakPage,
  aylikPage,
  gunlukPage,
  haftalikPage,
  osmangaziPage,
  saatlikPage,
} from "@/lib/content";

const stays = [gunlukPage, saatlikPage, haftalikPage, aylikPage];
const districts = [osmangaziPage, altiparmakPage];

export function StayCards() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {stays.map((page) => (
        <li key={page.path}>
          <Link href={page.path} className="block overflow-hidden rounded-2xl border border-line bg-white hover:border-coral">
            <div className="relative aspect-[16/10] bg-surface">
              <Image src={page.hero.src} alt={page.hero.alt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-ink">{page.navLabel} apart</h3>
              <p className="mt-1 line-clamp-2 text-sm leading-6 text-muted">{page.subtitle}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function DistrictCards() {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {districts.map((page) => (
        <li key={page.path}>
          <Link href={page.path} className="block rounded-2xl border border-line bg-white p-5 hover:border-coral">
            <h3 className="text-xl font-bold text-ink">{page.navLabel}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{page.subtitle}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
