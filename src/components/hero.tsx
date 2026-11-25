import { Breadcrumb } from "@/components/breadcrumb";
import { PhoneLink, WhatsAppLink } from "@/components/cta-buttons";
import { Gallery } from "@/components/gallery";
import type { Photo } from "@/lib/apartments";
import { phoneHref, site } from "@/lib/site";

export function Hero({
  h1,
  subtitle,
  pageName,
  images,
  breadcrumb,
}: {
  h1: string;
  subtitle: string;
  pageName: string;
  images: Photo[];
  breadcrumb?: { name: string; path?: string }[];
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-6 px-4 py-6 md:grid-cols-2 md:gap-10 md:py-10">
        <div>
          <p className="text-xs font-semibold tracking-wide text-muted">{site.host}</p>
          {breadcrumb ? <div className="mt-3"><Breadcrumb items={breadcrumb} /></div> : null}
          <h1 className="mt-3 text-[1.65rem] leading-[1.15] font-extrabold tracking-tight text-ink md:text-4xl">
            {h1}
          </h1>
          <p className="mt-4 text-base leading-7 text-muted md:text-lg">{subtitle}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <PhoneLink className="w-full sm:w-auto" />
            <WhatsAppLink pageName={pageName} className="w-full sm:w-auto" />
          </div>
          <p className="mt-4 text-sm leading-6 text-muted">
            <a className="font-bold text-ink underline underline-offset-4" href={phoneHref()}>
              {site.phoneDisplay}
            </a>
            {" · 7/24 hizmet · Temiz daire · Merkezi konum · Güncel fotoğraf"}
          </p>
        </div>
        <Gallery
          images={images}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="rounded-2xl"
        />
      </div>
    </section>
  );
}
