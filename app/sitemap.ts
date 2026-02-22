import { MetadataRoute } from 'next'
import { i18n, type Locale } from '@/lib/i18n/config'
import { scalableCapitalSlugs } from '@/lib/pages/scalable-capital-slugs'
import { degiroSlugs } from '@/lib/pages/degiro-slugs'
import { finecoSlugs } from '@/lib/pages/fineco-slugs'
import { multiBrokerSlugs } from '@/lib/pages/multi-broker-slugs'
import { vsGetquinSlugs } from '@/lib/pages/vs-getquin-slugs'
import { capitalManagementSlugs } from '@/lib/pages/capital-management-slugs'
import { roiGuideSlugs } from '@/lib/pages/roi-guide-slugs'
import { commonMistakesSlugs } from '@/lib/pages/common-mistakes-slugs'
import { benchmarkGuideSlugs } from '@/lib/pages/benchmark-guide-slugs'
import { unlistedGuideSlugs } from '@/lib/pages/unlisted-guide-slugs'
import { cryptoGuideSlugs } from '@/lib/pages/crypto-guide-slugs'

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

  // Add Fineco pages with language-specific slugs
  for (const locale of i18n.locales) {
    const slug = finecoSlugs[locale as Locale]
    const url = `${baseUrl}/${locale}/${slug}`

    const alternates: Record<string, string> = {}
    for (const altLocale of i18n.locales) {
      alternates[altLocale] = `${baseUrl}/${altLocale}/${finecoSlugs[altLocale as Locale]}`
    }
    alternates['x-default'] = `${baseUrl}/en/${finecoSlugs.en}`

    sitemapEntries.push({
      url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9, // Higher priority for Fineco as it's a major Italian broker
      alternates: {
        languages: alternates,
      },
    })
  }

  // Add Multi-Broker Portfolio Tracking guide with language-specific slugs
  for (const locale of i18n.locales) {
    const slug = multiBrokerSlugs[locale as Locale]
    const url = `${baseUrl}/${locale}/${slug}`

    const alternates: Record<string, string> = {}
    for (const altLocale of i18n.locales) {
      alternates[altLocale] = `${baseUrl}/${altLocale}/${multiBrokerSlugs[altLocale as Locale]}`
    }
    alternates['x-default'] = `${baseUrl}/en/${multiBrokerSlugs.en}`

    sitemapEntries.push({
      url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95, // High priority as it's a comprehensive guide
      alternates: {
        languages: alternates,
      },
    })
  }

  // Add DonkyCapital vs Getquin comparison page with language-specific slugs
  for (const locale of i18n.locales) {
    const slug = vsGetquinSlugs[locale as Locale]
    const url = `${baseUrl}/${locale}/${slug}`

    const alternates: Record<string, string> = {}
    for (const altLocale of i18n.locales) {
      alternates[altLocale] = `${baseUrl}/${altLocale}/${vsGetquinSlugs[altLocale as Locale]}`
    }
    alternates['x-default'] = `${baseUrl}/en/${vsGetquinSlugs.en}`

    sitemapEntries.push({
      url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: alternates,
      },
    })
  }

  // Add Capital Management / Portfolio Rebalancing guide with language-specific slugs
  for (const locale of i18n.locales) {
    const slug = capitalManagementSlugs[locale as Locale]
    const url = `${baseUrl}/${locale}/${slug}`

    const alternates: Record<string, string> = {}
    for (const altLocale of i18n.locales) {
      alternates[altLocale] = `${baseUrl}/${altLocale}/${capitalManagementSlugs[altLocale as Locale]}`
    }
    alternates['x-default'] = `${baseUrl}/en/${capitalManagementSlugs.en}`

    sitemapEntries.push({
      url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
      alternates: {
        languages: alternates,
      },
    })
  }

  // Add ROI / Performance Metrics guide with language-specific slugs
  for (const locale of i18n.locales) {
    const slug = roiGuideSlugs[locale as Locale]
    const url = `${baseUrl}/${locale}/${slug}`

    const alternates: Record<string, string> = {}
    for (const altLocale of i18n.locales) {
      alternates[altLocale] = `${baseUrl}/${altLocale}/${roiGuideSlugs[altLocale as Locale]}`
    }
    alternates['x-default'] = `${baseUrl}/en/${roiGuideSlugs.en}`

    sitemapEntries.push({
      url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
      alternates: { languages: alternates },
    })
  }

  // Add Common Mistakes / Portfolio Tracking Errors guide with language-specific slugs
  for (const locale of i18n.locales) {
    const slug = commonMistakesSlugs[locale as Locale]
    const url = `${baseUrl}/${locale}/${slug}`

    const alternates: Record<string, string> = {}
    for (const altLocale of i18n.locales) {
      alternates[altLocale] = `${baseUrl}/${altLocale}/${commonMistakesSlugs[altLocale as Locale]}`
    }
    alternates['x-default'] = `${baseUrl}/en/${commonMistakesSlugs.en}`

    sitemapEntries.push({
      url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
      alternates: { languages: alternates },
    })
  }

  // Add Benchmark / Inflation guide with language-specific slugs
  for (const locale of i18n.locales) {
    const slug = benchmarkGuideSlugs[locale as Locale]
    const url = `${baseUrl}/${locale}/${slug}`

    const alternates: Record<string, string> = {}
    for (const altLocale of i18n.locales) {
      alternates[altLocale] = `${baseUrl}/${altLocale}/${benchmarkGuideSlugs[altLocale as Locale]}`
    }
    alternates['x-default'] = `${baseUrl}/en/${benchmarkGuideSlugs.en}`

    sitemapEntries.push({
      url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: { languages: alternates },
    })
  }

  // Add Unlisted Assets guide with language-specific slugs
  for (const locale of i18n.locales) {
    const slug = unlistedGuideSlugs[locale as Locale]
    const url = `${baseUrl}/${locale}/${slug}`

    const alternates: Record<string, string> = {}
    for (const altLocale of i18n.locales) {
      alternates[altLocale] = `${baseUrl}/${altLocale}/${unlistedGuideSlugs[altLocale as Locale]}`
    }
    alternates['x-default'] = `${baseUrl}/en/${unlistedGuideSlugs.en}`

    sitemapEntries.push({
      url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
      alternates: { languages: alternates },
    })
  }

  // Add Crypto Portfolio guide with language-specific slugs
  for (const locale of i18n.locales) {
    const slug = cryptoGuideSlugs[locale as Locale]
    const url = `${baseUrl}/${locale}/${slug}`

    const alternates: Record<string, string> = {}
    for (const altLocale of i18n.locales) {
      alternates[altLocale] = `${baseUrl}/${altLocale}/${cryptoGuideSlugs[altLocale as Locale]}`
    }
    alternates['x-default'] = `${baseUrl}/en/${cryptoGuideSlugs.en}`

    sitemapEntries.push({
      url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
      alternates: { languages: alternates },
    })
  }

  return sitemapEntries
}
