import type { Metadata } from 'next'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { i18n, type Locale } from '@/lib/i18n/config'
import { degiroSlugs } from '@/lib/pages/degiro-slugs'
import DegiroContent from '@/components/broker/DegiroContent'

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
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${degiroSlugs[locale]}`
  })

  return {
    title: dict.seo.degiro?.title || 'Importar datos de Degiro | DonkyCapital',
    description: dict.seo.degiro?.description || 'Importa tu cartera de Degiro a DonkyCapital',
    alternates: {
      canonical: `https://www.donkycapital.com/${lang}/${degiroSlugs[lang]}`,
      languages: {
        ...alternateLanguages,
        'x-default': `https://www.donkycapital.com/en/${degiroSlugs.en}`,
      },
    },
  }
}

export default async function DegiroPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const degiro = dict.degiro

  // JSON-LD structured data for FAQ
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: degiro.faq.map((faq: { question: string; answer: string }) => ({
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
    name: degiro.pageTitle,
    description: dict.seo.degiro?.description,
    step: [
      {
        '@type': 'HowToStep',
        name: degiro.step1Title,
        text: degiro.step1List.join(' '),
      },
      {
        '@type': 'HowToStep',
        name: degiro.step2Title,
        text: degiro.step2List.join(' '),
      },
      {
        '@type': 'HowToStep',
        name: degiro.step3Title,
        text: degiro.step3List.join(' '),
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
      <DegiroContent dict={dict} />
    </>
  )
}
