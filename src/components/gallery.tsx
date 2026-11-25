"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@/components/icons";
import type { Photo } from "@/lib/apartments";

export function Gallery({
  images,
  sizes,
  priority = false,
  className = "",
}: {
  images: Photo[];
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const cover = images[0];
  const current = images[index] ?? cover;

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "ArrowRight") {
        setIndex((value) => (value + 1) % images.length);
      }
      if (event.key === "ArrowLeft") {
        setIndex((value) => (value - 1 + images.length) % images.length);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, images.length]);

  if (!cover || !current) return null;

  return (
    <>
      <button
        type="button"
        className={`group relative block aspect-[3/2] w-full overflow-hidden bg-surface text-left ${className}`}
        onClick={() => {
          setIndex(0);
          setOpen(true);
        }}
      >
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes={sizes}
          preload={priority}
          className="object-cover motion-safe:transition motion-safe:duration-300 motion-safe:group-hover:scale-[1.03]"
        />
        <span className="absolute right-3 bottom-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-ink shadow-sm">
          {images.length} fotoğraf
        </span>
      </button>
      {open
        ? createPortal(
            <div
              className="fixed inset-0 z-[70] flex flex-col bg-ink/95 text-white"
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
            >
              <div className="flex items-center justify-between gap-3 px-4 py-3">
                <p id={titleId} className="text-sm font-semibold">
                  {index + 1} / {images.length}
                </p>
                <button
                  ref={closeRef}
                  type="button"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
                  onClick={() => setOpen(false)}
                  aria-label="Galeriyi kapat"
                >
                  <CloseIcon />
                </button>
              </div>
              <div className="relative flex flex-1 items-center justify-center px-4">
                <button type="button" className="absolute inset-0" aria-label="Galeriyi kapat" onClick={() => setOpen(false)} />
                <div className="relative z-10 aspect-[3/2] w-full max-w-4xl">
                  <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
                </div>
                {images.length > 1 ? (
                  <>
                    <button
                      type="button"
                      className="absolute top-1/2 left-3 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-lg font-bold text-ink"
                      aria-label="Önceki fotoğraf"
                      onClick={() => setIndex((value) => (value - 1 + images.length) % images.length)}
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      className="absolute top-1/2 right-3 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-lg font-bold text-ink"
                      aria-label="Sonraki fotoğraf"
                      onClick={() => setIndex((value) => (value + 1) % images.length)}
                    >
                      ›
                    </button>
                  </>
                ) : null}
              </div>
              <div className="flex gap-2 overflow-x-auto px-4 py-4">
                {images.map((image, imageIndex) => (
                  <button
                    key={image.src}
                    type="button"
                    className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg ${imageIndex === index ? "ring-2 ring-white" : "opacity-70"}`}
                    onClick={() => setIndex(imageIndex)}
                    aria-label={`${imageIndex + 1}. fotoğrafı göster`}
                  >
                    <Image src={image.src} alt="" fill sizes="96px" className="object-cover" />
                  </button>
                ))}
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
