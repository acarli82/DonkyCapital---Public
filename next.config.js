/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.donkycapital.com',
      },
      {
        protocol: 'https',
        hostname: 'donkycapital.com',
      },
    ],
  },

  // Target modern browsers only - removes unnecessary polyfills (~43KB savings)
  experimental: {
    optimizePackageImports: ['react-ga4'],
  },
};

module.exports = nextConfig;

