export function Section({
  id,
  title,
  intro,
  children,
  tone = "white",
}: {
  id?: string;
  title?: string;
  intro?: string;
  children: React.ReactNode;
  tone?: "white" | "surface";
}) {
  return (
    <section id={id} className={tone === "surface" ? "bg-surface py-12 md:py-16" : "bg-white py-12 md:py-16"}>
      <div className="mx-auto w-full max-w-6xl px-4">
        {title ? <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">{title}</h2> : null}
        {intro ? <p className="mt-3 max-w-3xl text-base leading-7 text-muted">{intro}</p> : null}
        <div className={title || intro ? "mt-8" : undefined}>{children}</div>
      </div>
    </section>
  );
}
