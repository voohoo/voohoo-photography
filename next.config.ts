import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    loader: "custom",
    loaderFile: "./lib/cloudinary-loader.ts",
  },
};

export default nextConfig;
