import type { Metadata } from 'next'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { i18n, type Locale } from '@/lib/i18n/config'
import PrivacyContent from '@/components/legal/PrivacyContent'
import JsonLd from '@/components/seo/JsonLd'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'

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
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/privacy-policy`
  })

  return generatePageMetadata({
    lang,
    path: '/privacy-policy',
    title: dict.seo.privacyPolicy.title,
    description: dict.seo.privacyPolicy.description,
    alternateLanguages,
  })
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <>
      <JsonLd dict={dict} page="privacyPolicy" />

      <div className="py-8 max-w-4xl mx-auto">
        <div className="card p-6 md:p-8">
          <PrivacyContent lang={lang} />
        </div>
      </div>
    </>
  )
}
