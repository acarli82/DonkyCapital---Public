import type { Locale } from '@/lib/i18n/config'

// URL slugs for the Multi-Broker Portfolio Tracking guide per language
// Optimized for SEO with focus on "portfolio tracking" and "multiple brokers" keywords
export const multiBrokerSlugs: Record<Locale, string> = {
  en: 'track-portfolio-multiple-brokers',
  it: 'tracciare-portafoglio-piu-broker',
  de: 'portfolio-tracking-mehrere-broker',
  fr: 'suivre-portefeuille-plusieurs-courtiers',
  es: 'rastrear-cartera-multiples-brokers',
}

// Get the slug for a specific locale
export function getMultiBrokerSlug(locale: Locale): string {
  return multiBrokerSlugs[locale]
}

// Get the locale for a given slug (reverse lookup)
export function getLocaleFromMultiBrokerSlug(slug: string): Locale | null {
  for (const [locale, s] of Object.entries(multiBrokerSlugs)) {
    if (s === slug) {
      return locale as Locale
    }
  }
  return null
}

// Check if a slug is a multi-broker page slug
export function isMultiBrokerSlug(slug: string): boolean {
  return Object.values(multiBrokerSlugs).includes(slug)
}

// Get all slugs for static generation
export function getAllMultiBrokerSlugs(): { lang: Locale; slug: string }[] {
  return Object.entries(multiBrokerSlugs).map(([lang, slug]) => ({
    lang: lang as Locale,
    slug,
  }))
}
