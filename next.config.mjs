/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,  // Ensure the app directory is enabled
  },
  output: 'export',
  reactStrictMode: true,
};

export default nextConfig;
