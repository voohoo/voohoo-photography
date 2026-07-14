import Image from "next/image";
import Link from "next/link";
import { collections } from "@/lib/collections";
import { getFolderImages } from "@/lib/cloudinary";

export default async function Home() {
  const collectionImages = await Promise.all(
    collections.map((c) => getFolderImages(c.title)),
  );

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="mb-12 flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl sm:text-3xl">Collections</h2>
          <p className="hidden text-sm text-muted sm:block">
            {collections.length} collections
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((c, i) => {
            const images = collectionImages[i];
            const cover = images[c.cover] ?? images[0];
            if (!cover) return null;
            return (
              <Link
                key={c.slug}
                href={`/collections/${c.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-border">
                  <Image
                    src={cover.publicId}
                    alt={`Cover photo for the ${c.title} collection`}
                    fill
                    priority={i === 0}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-lg transition-colors duration-200 group-hover:text-accent">
                    {c.title}
                  </h3>
                  <span className="whitespace-nowrap text-[13px] text-muted">
                    {images.length} photos
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">{c.location}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-20 sm:px-8 sm:py-24">
          <h2 className="font-display max-w-lg text-2xl leading-snug sm:text-3xl">
            Prints, licensing, or a shoot in mind?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-foreground px-6 py-3 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors duration-200 hover:bg-foreground hover:text-background"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
