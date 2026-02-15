import type { Metadata } from 'next'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { finecoSlugs } from '@/lib/pages/fineco-slugs'
import FinecoContent from '@/components/broker/FinecoContent'

const THIS_SLUG = 'fineco-rastreador-cartera'
const CORRECT_LOCALE: Locale = 'es'

export async function generateStaticParams() {
  // Only generate for Spanish locale
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
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${finecoSlugs[locale]}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: dict.seo.fineco?.title || 'Fineco Rastreador Cartera | Importar Fineco a DonkyCapital',
    description: dict.seo.fineco?.description || 'Rastrea tu cartera Fineco con DonkyCapital. Exporta tus transacciones desde Fineco Reports e impórtalas en nuestro rastreador avanzado.',
    alternateLanguages,
  })
}

export default async function FinecoPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const fineco = dict.fineco

  // JSON-LD structured data for FAQ
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: fineco.faq.map((faq: { question: string; answer: string }) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  // JSON-LD for HowTo structured data
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: fineco.pageTitle,
    description: dict.seo.fineco?.description,
    step: [
      {
        '@type': 'HowToStep',
        name: fineco.step1Title,
        text: fineco.step1List.join(' '),
      },
      {
        '@type': 'HowToStep',
        name: fineco.step2Title,
        text: fineco.step2List.join(' '),
      },
      {
        '@type': 'HowToStep',
        name: fineco.step3Title,
        text: fineco.step3List.join(' '),
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <FinecoContent dict={dict} />
    </>
  )
}
