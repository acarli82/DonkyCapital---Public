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
};

module.exports = nextConfig;

