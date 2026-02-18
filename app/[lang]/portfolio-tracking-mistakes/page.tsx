import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { commonMistakesSlugs } from '@/lib/pages/common-mistakes-slugs'
import CommonMistakesContent from '@/components/guides/CommonMistakesContent'

const THIS_SLUG = 'portfolio-tracking-mistakes'
const CORRECT_LOCALE: Locale = 'en'

export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>
}): Promise<Metadata> {
  const { lang } = await params

  const alternateLanguages: Record<string, string> = {}
  Object.entries(commonMistakesSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: '5 Fatal Portfolio Tracking Mistakes (That Cost Thousands) | DonkyCapital',
    description: 'Analyzing 500+ real portfolios: discover the 5 most common portfolio tracking mistakes that cost thousands of euros. Hidden fees, distorted returns, ignored dividends, and how to avoid them.',
    alternateLanguages,
  })
}

export default async function PortfolioTrackingMistakesPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  if (lang !== CORRECT_LOCALE) notFound()

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the most common mistake when tracking a portfolio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The most common mistake is not including transaction fees in the return calculation. On an active portfolio, fees can subtract 1-3% annually from the real return — a huge impact over the long run due to the effect of compound interest.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you correctly calculate portfolio return?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For accurate comparison with benchmarks, you must use the TWRR (Time-Weighted Rate of Return), not the simple percentage gain. TWRR eliminates the effect of your deposits and withdrawals, isolating only the asset performance. DonkyCapital automatically calculates both TWRR and MWRR.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should dividends be included in the return calculation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely yes. Ignoring dividends can underestimate the real return by 2-4% annually for an income-oriented portfolio. Many trackers only show price return instead of total return which includes reinvested dividends.',
        },
      },
      {
        '@type': 'Question',
        name: 'How to manage currency exchange risk in a portfolio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It is essential to monitor separately the return in local currency and the return converted to your reference currency. A US stock rising 10% can give a negative return in euros if the dollar depreciates 15%. A good tracker always shows both views.',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to avoid the most common portfolio tracking mistakes',
    description: 'Practical guide to correctly track an investment portfolio and avoid the 5 mistakes that cost thousands of euros.',
    step: [
      { '@type': 'HowToStep', name: 'Always include fees', text: 'Record every transaction fee, custody tax, and bid-ask spread in your tracker to see the real net return.' },
      { '@type': 'HowToStep', name: 'Use TWRR to measure performance', text: 'Replace the simple gain% with TWRR to compare your portfolio with benchmarks correctly.' },
      { '@type': 'HowToStep', name: 'Record all dividends', text: 'Add every received dividend as a transaction in the tracker to have the complete total return.' },
      { '@type': 'HowToStep', name: 'Monitor currency exposure', text: 'Check the percentage of assets in foreign currency and monitor return separately in local and reference currency.' },
      { '@type': 'HowToStep', name: 'Set a benchmark', text: 'Always compare your portfolio with an appropriate benchmark (e.g. MSCI World for a global portfolio) to assess whether you are truly creating value.' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <CommonMistakesContent lang={lang} />
    </>
  )
}
