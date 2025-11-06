/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    // Allow local images from public folder
    unoptimized: false,
  },
};

module.exports = nextConfig;

