export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12" aria-live="polite" aria-busy="true">
      <p className="text-xs font-semibold tracking-wide text-muted">bursaapartbulus.com</p>
      <div className="mt-4 h-10 w-2/3 max-w-md animate-pulse rounded-2xl bg-surface" />
      <div className="mt-4 h-20 w-full max-w-xl animate-pulse rounded-2xl bg-surface" />
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <div className="h-14 w-full animate-pulse rounded-xl bg-coral/20 sm:w-48" />
        <div className="h-14 w-full animate-pulse rounded-xl bg-whatsapp/40 sm:w-48" />
      </div>
    </div>
  );
}
