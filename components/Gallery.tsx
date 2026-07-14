"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { CollectionImage } from "@/lib/collections";

export default function Gallery({
  slug,
  title,
  images,
}: {
  slug: string;
  title: string;
  images: CollectionImage[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length],
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeIndex, close, showPrev, showNext]);

  const active = activeIndex === null ? null : images[activeIndex];

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((img, i) => (
          <button
            key={img.file}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="group mb-4 block w-full cursor-pointer break-inside-avoid overflow-hidden bg-border"
            aria-label={`Open photo ${i + 1} of ${images.length} from ${title}`}
          >
            <Image
              src={`/images/${slug}/${img.file}`}
              alt={`${title} — photo ${i + 1}`}
              width={img.width}
              height={img.height}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} photo viewer`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 px-4 py-10 sm:px-10"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close photo viewer"
            className="fixed right-4 top-4 flex h-11 w-11 cursor-pointer items-center justify-center text-2xl text-white/80 hover:text-white sm:right-8 sm:top-8"
          >
            &times;
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous photo"
            className="fixed left-1 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center text-3xl text-white/70 hover:text-white sm:left-4"
          >
            &#8249;
          </button>

          <div
            className="relative max-h-full max-w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/images/${slug}/${active.file}`}
              alt={`${title} — enlarged photo ${activeIndex! + 1}`}
              width={active.width}
              height={active.height}
              sizes="90vw"
              className="max-h-[85vh] w-auto object-contain"
              priority
            />
            <p className="mt-3 text-center text-[13px] uppercase tracking-[0.1em] text-white/60">
              {activeIndex! + 1} / {images.length}
            </p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
            className="fixed right-1 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center text-3xl text-white/70 hover:text-white sm:right-4"
          >
            &#8250;
          </button>
        </div>
      )}
    </>
  );
}
