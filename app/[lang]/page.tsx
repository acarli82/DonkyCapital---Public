import dynamic from 'next/dynamic'
import { getDictionary } from '@/lib/i18n/getDictionary'
import type { Locale } from '@/lib/i18n/config'
import HeroSection from '@/components/landing/HeroSection'
import FeaturesSection from '@/components/landing/FeaturesSection'
import UseCasesSection from '@/components/landing/UseCasesSection'
import PricingSection from '@/components/landing/PricingSection'
import FAQSection from '@/components/landing/FAQSection'
import CTASection from '@/components/landing/CTASection'
import JsonLd from '@/components/seo/JsonLd'

// Lazy load below-the-fold interactive component
const WidgetsCarousel = dynamic(
  () => import('@/components/landing/WidgetsCarousel'),
  { ssr: true }
)

export default async function HomePage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <>
      <JsonLd dict={dict} page="home" />
      <HeroSection dict={dict} lang={params.lang} />
      <FeaturesSection dict={dict} />
      <WidgetsCarousel dict={dict} />
      <UseCasesSection dict={dict} />
      <PricingSection dict={dict} lang={params.lang} />
      <FAQSection dict={dict} />
      <CTASection dict={dict} lang={params.lang} />
    </>
  )
}
