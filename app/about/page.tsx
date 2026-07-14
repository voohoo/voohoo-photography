import Image from "next/image";
import type { Metadata } from "next";
import { findImageByFilename } from "@/lib/cloudinary";

export const metadata: Metadata = {
  title: "About — Voohoo Photography",
  description:
    "Voohoo Photography is a landscape practice built around patience — long exposures, fog, and the hours before sunrise.",
};

export default async function AboutPage() {
  const photo = await findImageByFilename("Pacific Northwest", "DSCF2408.jpg");

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-border lg:order-2">
          {photo && (
            <Image
              src={photo.publicId}
              alt="Two figures walking along a fog-bound Pacific Northwest beach"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          )}
        </div>

        <div className="lg:order-1">
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-muted">
            About
          </p>
          <h1 className="font-display mt-3 text-3xl leading-tight sm:text-4xl">
            Photography as a practice of paying attention.
          </h1>

          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-foreground/85">
            <p>
              Voohoo Photography is a landscape practice built around
              patience — arriving before sunrise, waiting out the fog, and
              staying long enough for a place to stop performing for the
              camera.
            </p>
            <p>
              The work here moves between the sea caves and star fields of
              Big Sur, the fog line above Mt Tamalpais, and the mountain
              passes and shorelines of the Pacific Northwest. Most images are
              long exposures, made with a tripod and a lot of standing
              around in the dark.
            </p>
            <p>
              There&rsquo;s no studio and no set list — just a recurring
              interest in weather, elevation, and the low light at either
              end of the day. Prints, licensing, and collaborations are
              welcome.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:max-w-sm">
            <div>
              <dt className="text-[12px] uppercase tracking-[0.14em] text-muted">
                Based in
              </dt>
              <dd className="mt-1 text-sm">Northern California</dd>
            </div>
            <div>
              <dt className="text-[12px] uppercase tracking-[0.14em] text-muted">
                Focus
              </dt>
              <dd className="mt-1 text-sm">Landscape &amp; long exposure</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
