export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'it', 'de', 'fr', 'es'],
} as const

export type Locale = (typeof i18n)['locales'][number]

export const localeNames: Record<Locale, string> = {
  en: 'English',
  it: 'Italiano',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
}
