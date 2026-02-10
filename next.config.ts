import type { NextConfig } from "next";

const repo = "valentines"; // <-- CHANGE THIS

const nextConfig: NextConfig = {
    output: "export", // REQUIRED for GitHub Pages
    basePath: `/${repo}`,
    assetPrefix: `/${repo}/`,
    images: {
        unoptimized: true, // REQUIRED
    },
};

export default nextConfig;
