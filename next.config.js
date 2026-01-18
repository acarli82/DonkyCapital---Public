/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
}

module.exports = nextConfig
