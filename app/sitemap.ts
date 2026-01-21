import { MetadataRoute } from 'next'
import { i18n } from '@/lib/i18n/config'

const baseUrl = 'https://www.donkycapital.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/early-access', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/privacy-policy', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: '/terms-and-conditions', priority: 0.5, changeFrequency: 'yearly' as const },
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  for (const page of pages) {
    for (const locale of i18n.locales) {
      const url = `${baseUrl}/${locale}${page.path}`

      const alternates: Record<string, string> = {}
      for (const altLocale of i18n.locales) {
        alternates[altLocale] = `${baseUrl}/${altLocale}${page.path}`
      }
      // x-default points to English
      alternates['x-default'] = `${baseUrl}/en${page.path}`

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: alternates,
        },
      })
    }
  }

  return sitemapEntries
}
