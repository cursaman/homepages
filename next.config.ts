import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export",
        basePath: "/homepages",
        assetPrefix: "/homepages/",
        trailingSlash: true,
      }
    : {}),
  images: {
    unoptimized: isGitHubPages,
  },
};

export default nextConfig;
