import path from "node:path";
import type { NextConfig } from "next";

const defaultBasePath =
  process.env.NODE_ENV === "development" ? "/staging" : "";
const configuredBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH === undefined
    ? defaultBasePath
    : process.env.NEXT_PUBLIC_BASE_PATH.trim();
const basePath = configuredBasePath
  ? `/${configuredBasePath.replace(/^\/+|\/+$/g, "")}`
  : "";

const nextConfig: NextConfig = {
  reactCompiler: true,
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/photos/**",
      },
    ],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
