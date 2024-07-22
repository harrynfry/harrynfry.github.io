// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true, // or configure as needed
  },
  experimental: {
    appDir: true, // Only if you need experimental features
  },
};

export default nextConfig;
