import type { Locale } from '@/lib/i18n/config'

// URL slugs for the Capital Management / Portfolio Rebalancing guide per language
// Content currently available only in Italian — other pages to be translated later
export const capitalManagementSlugs: Record<Locale, string> = {
  it: 'ribilanciamento-portafoglio',
  en: 'portfolio-rebalancing-guide',
  de: 'portfolio-rebalancing-strategie',
  fr: 'reequilibrage-portefeuille',
  es: 'rebalancear-cartera-inversiones',
}
