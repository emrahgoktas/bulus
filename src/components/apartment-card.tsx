import { PhoneLink, WhatsAppLink } from "@/components/cta-buttons";
import { Gallery } from "@/components/gallery";
import { stayLabels, type Apartment } from "@/lib/apartments";

export function ApartmentCard({ apartment }: { apartment: Apartment }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white">
      <Gallery images={apartment.images} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
      <div className="flex flex-1 flex-col p-4">
        <ul className="flex flex-wrap gap-1.5">
          {apartment.stays.map((stay) => (
            <li key={stay} className="rounded-full bg-surface px-2.5 py-1 text-xs font-semibold text-ink">
              {stayLabels[stay]}
            </li>
          ))}
        </ul>
        <h3 className="mt-3 text-lg font-bold tracking-tight text-ink">{apartment.name}</h3>
        <p className="mt-1 text-sm text-muted">
          {apartment.neighborhood} · {apartment.rooms} · {apartment.size} m² · {apartment.guests} kişi
        </p>
        <p className="mt-3 flex-1 text-sm leading-6 text-ink">{apartment.summary}</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <PhoneLink size="md" label="Ara" className="w-full" />
          <WhatsAppLink pageName={apartment.name} size="md" className="w-full" />
        </div>
      </div>
    </article>
  );
}

export function ApartmentGrid({ apartments }: { apartments: Apartment[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {apartments.map((apartment) => (
        <ApartmentCard key={apartment.id} apartment={apartment} />
      ))}
    </div>
  );
}
