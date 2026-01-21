import dynamic from 'next/dynamic'
import { i18n, type Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/getDictionary'
import Header from '@/components/landing/Header'
import Footer from '@/components/landing/Footer'
import type { Metadata } from 'next'

// Lazy load non-critical components (equivalent to defer/async for their JS)
const FloatingContactButton = dynamic(
  () => import('@/components/contact/FloatingContactButton'),
  { ssr: false }
)
const CookieConsent = dynamic(
  () => import('@/components/cookies/CookieConsent'),
  { ssr: false }
)
const GoogleAnalytics = dynamic(
  () => import('@/components/analytics/GoogleAnalytics'),
  { ssr: false }
)

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const alternateLanguages: Record<string, string> = {}
  i18n.locales.forEach((locale) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}`
  })

  return {
    title: dict.seo.home.title,
    description: dict.seo.home.description,
    alternates: {
      canonical: `https://www.donkycapital.com/${lang}`,
      languages: {
        ...alternateLanguages,
        'x-default': 'https://www.donkycapital.com/en',
      },
    },
    other: {
      'Content-Language': lang,
    },
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <>
      <GoogleAnalytics />
      <div className="min-h-screen bg-background">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Header dict={dict} lang={lang} />
          <main className="pt-24">{children}</main>
          <Footer dict={dict} lang={lang} />
        </div>
        <FloatingContactButton dict={dict} />
      </div>
      <CookieConsent dict={dict} privacyPolicyUrl={`/${lang}/privacy-policy`} />
    </>
  )
}
