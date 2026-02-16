import type { Metadata } from 'next'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { multiBrokerSlugs } from '@/lib/pages/multi-broker-slugs'
import MultiBrokerContent from '@/components/broker/MultiBrokerContent'

const THIS_SLUG = 'portfolio-tracking-mehrere-broker'
const CORRECT_LOCALE: Locale = 'de'

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
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${multiBrokerSlugs[locale]}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: dict.seo.multiBroker?.title || 'Multi-Broker Portfolio Tracking | DonkyCapital',
    description: dict.seo.multiBroker?.description || 'Verfolgen Sie Ihre Investitionen über mehrere Broker in einem Dashboard',
    alternateLanguages,
  })
}

export default async function MultiBrokerPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return <MultiBrokerContent dict={dict} />
}
