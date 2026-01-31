import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { i18n, type Locale } from '@/lib/i18n/config'
import HeroSection from '@/components/landing/HeroSection'
import FeaturesSection from '@/components/landing/FeaturesSection'
import UseCasesSection from '@/components/landing/UseCasesSection'
import PricingSection from '@/components/landing/PricingSection'
import FAQSection from '@/components/landing/FAQSection'
import CTASection from '@/components/landing/CTASection'
import JsonLd from '@/components/seo/JsonLd'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'

// Lazy load below-the-fold interactive component
const WidgetsCarousel = dynamic(
  () => import('@/components/landing/WidgetsCarousel'),
  { ssr: true }
)

export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }))
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
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}`
  })

  return generatePageMetadata({
    lang,
    path: '',
    title: dict.seo.home.title,
    description: dict.seo.home.description,
    alternateLanguages,
  })
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <>
      <JsonLd dict={dict} page="home" />
      <HeroSection dict={dict} lang={lang} />
      <FeaturesSection dict={dict} lang={lang} />
      <WidgetsCarousel dict={dict} />
      <UseCasesSection dict={dict} />
      <PricingSection dict={dict} lang={lang} />
      <FAQSection dict={dict} />
      <CTASection dict={dict} lang={lang} />
    </>
  )
}
