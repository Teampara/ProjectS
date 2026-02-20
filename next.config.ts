import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This makes every route available under /storybook.
  // Example: /about becomes /storybook/about.
  basePath: "/storybook",
};

export default nextConfig;
