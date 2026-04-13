import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Use static export + custom dist folder only for production builds.
  // In dev, keeping defaults prevents Turbopack from persisting into /dist/dev.
  output: isProd ? "export" : undefined,
  distDir: isProd ? "dist" : ".next",
  basePath: isProd ? "/EvocLabs-Next.js" : undefined,
  assetPrefix: isProd ? "/EvocLabs-Next.js" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
