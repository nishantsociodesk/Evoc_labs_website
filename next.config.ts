import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")?.[1];
const prodBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (repoName ? `/${repoName}` : "/EvocLabs-Next.js");

const nextConfig: NextConfig = {
  // Use static export + custom dist folder only for production builds.
  // In dev, keeping defaults prevents Turbopack from persisting into /dist/dev.
  output: isProd ? "export" : undefined,
  distDir: isProd ? "dist" : ".next",
  // GitHub Pages serves your site from /<repo-name> by default.
  // This keeps local dev at / and makes Pages deploy load CSS/assets correctly.
  basePath: isProd ? prodBasePath : undefined,
  assetPrefix: isProd ? prodBasePath : undefined,
  trailingSlash: isProd ? true : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
