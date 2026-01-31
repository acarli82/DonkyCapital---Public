import { MetadataRoute } from 'next'
import { i18n, type Locale } from '@/lib/i18n/config'
import { scalableCapitalSlugs } from '@/lib/pages/scalable-capital-slugs'
import { degiroSlugs } from '@/lib/pages/degiro-slugs'

const baseUrl = 'https://www.donkycapital.com'

export default function sitemap(): MetadataRoute.Sitemap {
  // Standard pages with the same path across all languages
  const standardPages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/early-access', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/privacy-policy', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: '/terms-and-conditions', priority: 0.5, changeFrequency: 'yearly' as const },
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  // Add standard pages
  for (const page of standardPages) {
    for (const locale of i18n.locales) {
      const url = `${baseUrl}/${locale}${page.path}`

      const alternates: Record<string, string> = {}
      for (const altLocale of i18n.locales) {
        alternates[altLocale] = `${baseUrl}/${altLocale}${page.path}`
      }
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

  // Add Scalable Capital pages with language-specific slugs
  for (const locale of i18n.locales) {
    const slug = scalableCapitalSlugs[locale as Locale]
    const url = `${baseUrl}/${locale}/${slug}`

    const alternates: Record<string, string> = {}
    for (const altLocale of i18n.locales) {
      alternates[altLocale] = `${baseUrl}/${altLocale}/${scalableCapitalSlugs[altLocale as Locale]}`
    }
    alternates['x-default'] = `${baseUrl}/en/${scalableCapitalSlugs.en}`

    sitemapEntries.push({
      url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: alternates,
      },
    })
  }

  // Add Degiro pages with language-specific slugs
  for (const locale of i18n.locales) {
    const slug = degiroSlugs[locale as Locale]
    const url = `${baseUrl}/${locale}/${slug}`

    const alternates: Record<string, string> = {}
    for (const altLocale of i18n.locales) {
      alternates[altLocale] = `${baseUrl}/${altLocale}/${degiroSlugs[altLocale as Locale]}`
    }
    alternates['x-default'] = `${baseUrl}/en/${degiroSlugs.en}`

    sitemapEntries.push({
      url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: alternates,
      },
    })
  }

  return sitemapEntries
}
