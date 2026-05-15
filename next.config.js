/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Add CDN domain here when photography is commissioned:
      // { protocol: 'https', hostname: 'cdn.valantai.com' }
    ],
  },
};

module.exports = nextConfig;
