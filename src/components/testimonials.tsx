import { testimonials } from "@/lib/content";
import { mapsHref } from "@/lib/site";

function Stars({ value }: { value: number }) {
  return (
    <p className="text-sm tracking-wide" aria-label={`${value} yıldız, 5 üzerinden`}>
      <span className="text-coral">{"★".repeat(value)}</span>
      <span className="text-line">{"★".repeat(5 - value)}</span>
    </p>
  );
}

export function Testimonials() {
  return (
    <div>
      <ul className="grid gap-4 md:grid-cols-2">
        {testimonials.map((item) => (
          <li key={item.name} className="rounded-2xl border border-line bg-white p-5">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-surface text-sm font-bold text-ink" aria-hidden="true">
                {item.initial}
              </span>
              <div>
                <p className="font-bold text-ink">{item.name}</p>
                <Stars value={item.stars} />
              </div>
            </div>
            <blockquote className="mt-4">
              <p className="text-base leading-7 text-ink">“{item.text}”</p>
              <footer className="mt-3 text-sm text-muted">{item.stay}</footer>
            </blockquote>
          </li>
        ))}
      </ul>
      <a
        href={mapsHref()}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex text-sm font-bold text-coral-text underline underline-offset-4"
      >
        Google’da tüm yorumları gör
      </a>
    </div>
  );
}
