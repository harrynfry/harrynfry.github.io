/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export', // For static export
  reactStrictMode: true,
  // Add any other configurations you need here
};

export default nextConfig;
