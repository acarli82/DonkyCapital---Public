import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { i18n, type Locale } from '@/lib/i18n/config'
import { scalableCapitalSlugs } from '@/lib/pages/scalable-capital-slugs'
import ScalableCapitalContent from '@/components/broker/ScalableCapitalContent'

const CORRECT_LOCALE: Locale = 'de'

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
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${scalableCapitalSlugs[locale]}`
  })

  return {
    title: dict.seo.scalableCapital.title,
    description: dict.seo.scalableCapital.description,
    alternates: {
      canonical: `https://www.donkycapital.com/${lang}/${scalableCapitalSlugs[lang]}`,
      languages: {
        ...alternateLanguages,
        'x-default': `https://www.donkycapital.com/en/${scalableCapitalSlugs.en}`,
      },
    },
  }
}

export default async function ScalableCapitalPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params

  // Redirect to the correct slug for this language
  if (lang !== CORRECT_LOCALE) {
    redirect(`/${lang}/${scalableCapitalSlugs[lang]}`)
  }

  const dict = await getDictionary(lang)
  const sc = dict.scalableCapital

  // JSON-LD structured data for FAQ
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: sc.faq.map((faq: { question: string; answer: string }) => ({
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
    name: sc.pageTitle,
    description: dict.seo.scalableCapital.description,
    step: [
      {
        '@type': 'HowToStep',
        name: sc.step1Title,
        text: sc.step1List.join(' '),
      },
      {
        '@type': 'HowToStep',
        name: sc.step2Title,
        text: sc.step2List.join(' '),
      },
      {
        '@type': 'HowToStep',
        name: sc.step3Title,
        text: sc.step3List.join(' '),
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
      <ScalableCapitalContent dict={dict} />
    </>
  )
}
