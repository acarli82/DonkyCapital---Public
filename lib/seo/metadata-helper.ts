import type { Metadata } from 'next'
import type { Locale } from '@/lib/i18n/config'

// Map language codes to Open Graph locale format
export const ogLocaleMap: Record<Locale, string> = {
  en: 'en_US',
  it: 'it_IT',
  de: 'de_DE',
  fr: 'fr_FR',
  es: 'es_ES',
}

// Ensure URL ends with exactly one trailing slash
function withTrailingSlash(url: string): string {
  return url.endsWith('/') ? url : `${url}/`
}

interface PageMetadataOptions {
  lang: Locale
  path: string // e.g., '/about', '/contact', or '' for home
  title: string
  description: string
  alternateLanguages: Record<string, string>
}

export function generatePageMetadata({
  lang,
  path,
  title,
  description,
  alternateLanguages,
}: PageMetadataOptions): Metadata {
  const canonicalUrl = withTrailingSlash(`https://www.donkycapital.com/${lang}${path}`)

  // Normalize all alternate language URLs to have trailing slash
  const normalizedAlternates: Record<string, string> = {}
  for (const [locale, url] of Object.entries(alternateLanguages)) {
    normalizedAlternates[locale] = withTrailingSlash(url)
  }

  const xDefault =
    normalizedAlternates['en'] ||
    withTrailingSlash(`https://www.donkycapital.com/en${path}`)

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ...normalizedAlternates,
        'x-default': xDefault,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      locale: ogLocaleMap[lang],
      type: 'website',
      siteName: 'DonkyCapital',
      images: [
        {
          url: '/assets/og-image.png',
          width: 1200,
          height: 630,
          alt: 'DonkyCapital - Portfolio Tracker',
        },
      ],
    },
  }
}
