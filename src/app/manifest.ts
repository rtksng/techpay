import type { MetadataRoute } from "next";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const publicAsset = (path: string) => `${publicBasePath}${path}`;

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TechPay.ai | You Deserve a Computer",
    short_name: "TechPay.ai",
    description:
      "Flexible payments, local store discovery, and guided laptop recommendations with a polished 3D landing experience.",
    start_url: publicAsset("/"),
    scope: publicAsset("/"),
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: publicAsset("/android-chrome-192x192.png"),
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: publicAsset("/android-chrome-512x512.png"),
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: publicAsset("/maskable-icon-192x192.png"),
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: publicAsset("/maskable-icon-512x512.png"),
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
