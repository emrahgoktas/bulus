import Link from "next/link";

export function Breadcrumb({ items }: { items: { name: string; path?: string }[] }) {
  return (
    <nav aria-label="Sayfa yolu">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.name} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {last || !item.path ? (
                <span className="font-medium text-ink" aria-current={last ? "page" : undefined}>
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="underline decoration-line underline-offset-4 hover:text-coral-text">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
