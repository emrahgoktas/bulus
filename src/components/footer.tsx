import Link from "next/link";
import { Logo } from "@/components/logo";
import { MapEmbed } from "@/components/map-section";
import { districtLinks, formattedAddress, navItems, phoneHref, site, whatsappHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo variant="footer" />
          <p className="mt-3 text-sm font-bold text-ink">Buluş Apart · Bursa Apart</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            Demirtaşpaşa, Osmangazi’de günlük, saatlik, haftalık ve aylık eşyalı daire.
          </p>
          <a className="mt-3 inline-block text-sm font-semibold text-ink" href={site.url}>
            {site.host}
          </a>
        </div>
        <div>
          <p className="text-sm font-bold text-ink">Konaklama</p>
          <ul className="mt-3 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold text-ink">Bölgeler</p>
          <ul className="mt-3 space-y-2">
            {districtLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold text-ink">İletişim</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <a className="font-semibold text-ink" href={phoneHref()}>
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="font-semibold text-ink" href={whatsappHref("iletişim")} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li>{formattedAddress()}</li>
            <li>7/24</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto w-full max-w-6xl px-4 pb-10">
        <MapEmbed />
      </div>
      <div className="border-t border-line">
        <p className="mx-auto w-full max-w-6xl px-4 py-4 text-xs text-muted">© 2026 {site.host}. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
