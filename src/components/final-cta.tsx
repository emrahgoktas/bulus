import { PhoneLink, WhatsAppLink } from "@/components/cta-buttons";

export function FinalCta({
  title,
  text,
  pageName,
}: {
  title: string;
  text: string;
  pageName: string;
}) {
  return (
    <section className="bg-ink py-14 text-white md:py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
          <p className="mt-3 text-base leading-7 text-white/80">{text}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <PhoneLink className="w-full sm:w-auto" />
          <WhatsAppLink pageName={pageName} className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
}
