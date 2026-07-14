import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import { collections, getCollection } from "@/lib/collections";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return {};
  return {
    title: `${collection.title} — Voohoo Photography`,
    description: collection.description,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
      <Link
        href="/#work"
        className="text-[13px] uppercase tracking-[0.14em] text-muted transition-colors duration-200 hover:text-accent"
      >
        &larr; All collections
      </Link>

      <div className="mt-6 flex flex-col gap-4 border-b border-border pb-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-3xl sm:text-4xl">{collection.title}</h1>
          <p className="mt-2 text-sm text-muted">
            {collection.location} &middot; {collection.year}
          </p>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-muted">
          {collection.description}
        </p>
      </div>

      <div className="mt-10">
        <Gallery
          slug={collection.slug}
          title={collection.title}
          images={collection.images}
        />
      </div>
    </div>
  );
}
