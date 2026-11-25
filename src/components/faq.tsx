import type { FaqItem } from "@/lib/content";

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
      {items.map((item) => (
        <details key={item.question} className="group px-4 py-1 md:px-5">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 text-base font-bold text-ink [&::-webkit-details-marker]:hidden">
            {item.question}
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-surface text-lg leading-none text-ink group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="pb-4 text-base leading-7 text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
