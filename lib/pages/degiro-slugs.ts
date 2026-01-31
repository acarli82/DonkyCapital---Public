import type { Locale } from '@/lib/i18n/config'

// URL slugs for the Degiro page per language
export const degiroSlugs: Record<Locale, string> = {
  en: 'import-from-degiro',
  it: 'importare-da-degiro',
  de: 'degiro-daten-importieren',
  fr: 'importer-les-donnees-degiro',
  es: 'importar-datos-degiro',
}

// Get the slug for a specific locale
export function getDegiroSlug(locale: Locale): string {
  return degiroSlugs[locale]
}

// Get the locale for a given slug (reverse lookup)
export function getLocaleFromDegiroSlug(slug: string): Locale | null {
  for (const [locale, s] of Object.entries(degiroSlugs)) {
    if (s === slug) {
      return locale as Locale
    }
  }
  return null
}

// Check if a slug is a Degiro page slug
export function isDegiroSlug(slug: string): boolean {
  return Object.values(degiroSlugs).includes(slug)
}

// Get all slugs for static generation
export function getAllDegiroSlugs(): { lang: Locale; slug: string }[] {
  return Object.entries(degiroSlugs).map(([lang, slug]) => ({
    lang: lang as Locale,
    slug,
  }))
}
