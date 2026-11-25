import { mapsEmbedSrc, mapsHref, site, formattedAddress, phoneHref } from "@/lib/site";

export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <iframe
      title="Buluş Apart haritası, Demirtaşpaşa Osmangazi Bursa"
      src={mapsEmbedSrc()}
      className={`h-[340px] w-full rounded-2xl border border-line md:h-[380px] ${className}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}

export function MapSection() {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
      <div className="rounded-2xl border border-line bg-white p-5">
        <h3 className="text-lg font-bold text-ink">Adres</h3>
        <p className="mt-3 text-base leading-7 text-ink">{formattedAddress()}</p>
        <p className="mt-2 text-sm leading-6 text-muted">
          Buluş Apart, Demirtaşpaşa’da. Giriş saatini telefon veya WhatsApp ile netleştiririz.
        </p>
        <dl className="mt-5 space-y-3 text-sm">
          <div>
            <dt className="font-bold text-ink">Çalışma</dt>
            <dd className="text-muted">7/24 telefon ve WhatsApp</dd>
          </div>
          <div>
            <dt className="font-bold text-ink">Site</dt>
            <dd>
              <a className="font-semibold text-ink" href={site.url}>
                {site.host}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-bold text-ink">Telefon</dt>
            <dd>
              <a className="font-semibold text-coral-text underline underline-offset-4" href={phoneHref()}>
                {site.phoneDisplay}
              </a>
            </dd>
          </div>
        </dl>
        <a
          href={mapsHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex h-12 items-center justify-center rounded-xl bg-ink px-4 text-sm font-bold text-white"
        >
          Yol tarifi al
        </a>
      </div>
      <MapEmbed />
    </div>
  );
}
