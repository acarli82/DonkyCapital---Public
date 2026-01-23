import type { Locale } from '@/lib/i18n/config'

// URL slugs for the Scalable Capital page per language
export const scalableCapitalSlugs: Record<Locale, string> = {
  en: 'export-scalable-capital-transactions',
  it: 'esportare-transazioni-scalable-capital',
  de: 'scalable-capital-transaktionen-exportieren',
  fr: 'exporter-transactions-scalable-capital',
  es: 'exportar-transacciones-scalable-capital',
}

// Get the slug for a specific locale
export function getScalableCapitalSlug(locale: Locale): string {
  return scalableCapitalSlugs[locale]
}

// Get the locale for a given slug (reverse lookup)
export function getLocaleFromSlug(slug: string): Locale | null {
  for (const [locale, s] of Object.entries(scalableCapitalSlugs)) {
    if (s === slug) {
      return locale as Locale
    }
  }
  return null
}

// Check if a slug is a Scalable Capital page slug
export function isScalableCapitalSlug(slug: string): boolean {
  return Object.values(scalableCapitalSlugs).includes(slug)
}

// Get all slugs for static generation
export function getAllScalableCapitalSlugs(): { lang: Locale; slug: string }[] {
  return Object.entries(scalableCapitalSlugs).map(([lang, slug]) => ({
    lang: lang as Locale,
    slug,
  }))
}
