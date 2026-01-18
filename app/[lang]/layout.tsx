import { i18n, type Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/getDictionary'
import Header from '@/components/landing/Header'
import Footer from '@/components/landing/Footer'
import FloatingContactButton from '@/components/contact/FloatingContactButton'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.lang)

  const alternateLanguages: Record<string, string> = {}
  i18n.locales.forEach((locale) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}`
  })

  return {
    title: dict.seo.home.title,
    description: dict.seo.home.description,
    alternates: {
      canonical: `https://www.donkycapital.com/${params.lang}`,
      languages: {
        ...alternateLanguages,
        'x-default': 'https://www.donkycapital.com/en',
      },
    },
    other: {
      'Content-Language': params.lang,
    },
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <>
      <div className="min-h-screen bg-background">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Header dict={dict} lang={params.lang} />
          <main>{children}</main>
          <Footer dict={dict} />
        </div>
        <FloatingContactButton dict={dict} />
      </div>
    </>
  )
}
