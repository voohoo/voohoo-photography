"use client";

const CLOUD_NAME =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "dodgkp3p8";

export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  // Local files in /public (e.g. the logo) aren't on Cloudinary — serve as-is.
  if (src.startsWith("/")) return src;

  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality ?? "auto"}`];
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${params.join(",")}/${src}`;
}
