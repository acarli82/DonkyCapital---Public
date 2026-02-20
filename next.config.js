/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,

  // SWC minification (faster than Terser, default in Next 14 but explicit is better)
  swcMinify: true,

  images: {
    unoptimized: true, // Required for static export
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

  // Compiler optimizations for modern browsers
  compiler: {
    // Remove console.log in production for smaller bundles and better performance
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Target modern browsers only - removes unnecessary polyfills (~43KB savings)
  experimental: {
    optimizePackageImports: ['react-ga4'],
  },
};

// Bundle analyzer integration (run with: npm run analyze)
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);

