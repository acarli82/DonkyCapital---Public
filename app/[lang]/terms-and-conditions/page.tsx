import type { Metadata } from 'next'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import TermsContent from '@/components/legal/TermsContent'
import JsonLd from '@/components/seo/JsonLd'

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
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/terms-and-conditions`
  })

  return generatePageMetadata({
    lang,
    path: '/terms-and-conditions',
    title: dict.seo.termsAndConditions.title,
    description: dict.seo.termsAndConditions.description,
    alternateLanguages,
  })
}

export default async function TermsAndConditionsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <>
      <JsonLd dict={dict} page="termsAndConditions" />

      <div className="py-8 max-w-4xl mx-auto">
        <div className="card p-6 md:p-8">
          <TermsContent lang={lang} />
        </div>
      </div>
    </>
  )
}
