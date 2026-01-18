import type { Metadata } from 'next'
import { getDictionary } from '@/lib/i18n/getDictionary'
import type { Locale } from '@/lib/i18n/config'
import PrivacyContent from '@/components/legal/PrivacyContent'
import JsonLd from '@/components/seo/JsonLd'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang)

  return {
    title: dict.seo.privacyPolicy.title,
    description: dict.seo.privacyPolicy.description,
    alternates: {
      canonical: `https://www.donkycapital.com/${params.lang}/privacy-policy`,
    },
  }
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <>
      <JsonLd dict={dict} page="privacyPolicy" />

      <div className="py-8 max-w-4xl mx-auto">
        <div className="card p-6 md:p-8">
          <PrivacyContent lang={params.lang} />
        </div>
      </div>
    </>
  )
}
