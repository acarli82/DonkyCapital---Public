import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/en/',
          '/it/',
          '/de/',
          '/fr/',
          '/es/',
        ],
        disallow: [
          '/api/',
          '/dashboard/',
          '/portfolios/',
          '/auth/',
          '/settings/',
          '/admin/',
          '/_next/',
        ],
      },
    ],
    sitemap: 'https://www.donkycapital.com/sitemap.xml',
    host: 'https://www.donkycapital.com',
  }
}
