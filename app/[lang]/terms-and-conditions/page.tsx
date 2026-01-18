import type { Metadata } from 'next'
import { getDictionary } from '@/lib/i18n/getDictionary'
import type { Locale } from '@/lib/i18n/config'
import TermsContent from '@/components/legal/TermsContent'
import JsonLd from '@/components/seo/JsonLd'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang)

  return {
    title: dict.seo.termsAndConditions.title,
    description: dict.seo.termsAndConditions.description,
    alternates: {
      canonical: `https://www.donkycapital.com/${params.lang}/terms-and-conditions`,
    },
  }
}

export default async function TermsAndConditionsPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <>
      <JsonLd dict={dict} page="termsAndConditions" />

      <div className="py-8 max-w-4xl mx-auto">
        <div className="card p-6 md:p-8">
          <TermsContent lang={params.lang} />
        </div>
      </div>
    </>
  )
}
