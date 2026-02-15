import type { Locale } from '@/lib/i18n/config'

// URL slugs for the Fineco page per language
// Optimized for SEO with focus on "portfolio tracker" keyword
export const finecoSlugs: Record<Locale, string> = {
  en: 'fineco-portfolio-tracker',
  it: 'fineco-portfolio-tracker',
  de: 'fineco-portfolio-tracker',
  fr: 'fineco-tracker-portefeuille',
  es: 'fineco-rastreador-cartera',
}

// Get the slug for a specific locale
export function getFinecoSlug(locale: Locale): string {
  return finecoSlugs[locale]
}

// Get the locale for a given slug (reverse lookup)
export function getLocaleFromFinecoSlug(slug: string): Locale | null {
  for (const [locale, s] of Object.entries(finecoSlugs)) {
    if (s === slug) {
      return locale as Locale
    }
  }
  return null
}

// Check if a slug is a Fineco page slug
export function isFinecoSlug(slug: string): boolean {
  return Object.values(finecoSlugs).includes(slug)
}

// Get all slugs for static generation
export function getAllFinecoSlugs(): { lang: Locale; slug: string }[] {
  return Object.entries(finecoSlugs).map(([lang, slug]) => ({
    lang: lang as Locale,
    slug,
  }))
}
