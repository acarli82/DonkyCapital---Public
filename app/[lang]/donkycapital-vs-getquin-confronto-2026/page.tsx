import type { Metadata } from 'next'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { vsGetquinSlugs } from '@/lib/pages/vs-getquin-slugs'
import VsGetquinContent from '@/components/broker/VsGetquinContent'

const THIS_SLUG = 'donkycapital-vs-getquin-confronto-2026'
const CORRECT_LOCALE: Locale = 'it'

export async function generateStaticParams() {
  return [{ lang: CORRECT_LOCALE }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>
}): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const alternateLanguages: Record<string, string> = {}
  i18n.locales.forEach((locale) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${vsGetquinSlugs[locale]}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: dict.seo.vsGetquin?.title || 'DonkyCapital vs Getquin: Quale Portfolio Tracker Scegliere nel 2026?',
    description: dict.seo.vsGetquin?.description || 'Cerchi il miglior portfolio tracker? Confrontiamo DonkyCapital e Getquin: privacy, importazione dati e costi. Scopri quale strumento fa per te nel 2026.',
    alternateLanguages,
  })
}

export default async function VsGetquinPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return <VsGetquinContent dict={dict} lang={lang} />
}
