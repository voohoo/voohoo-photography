import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const CLOUDINARY_FOLDER = "voohoo-photography";

export type CloudinaryImage = {
  publicId: string;
  width: number;
  height: number;
};

export async function getFolderImages(
  folderTitle: string,
): Promise<CloudinaryImage[]> {
  const result = await cloudinary.search
    .expression(`asset_folder:"${CLOUDINARY_FOLDER}/${folderTitle}"`)
    .sort_by("public_id", "asc")
    .max_results(200)
    .execute();

  return (
    result.resources as { public_id: string; width: number; height: number }[]
  ).map((resource) => ({
    publicId: resource.public_id,
    width: resource.width,
    height: resource.height,
  }));
}

// Cloudinary appends a random suffix to public_ids on upload (e.g.
// "DSCF2408_b84gkh"), so a specific known photo can't be addressed by a
// predictable URL — look it up by matching the original filename prefix.
export async function findImageByFilename(
  folderTitle: string,
  file: string,
): Promise<CloudinaryImage | undefined> {
  const prefix = file.replace(/\.[^/.]+$/, "");
  const images = await getFolderImages(folderTitle);
  return images.find((img) => img.publicId.startsWith(prefix));
}
