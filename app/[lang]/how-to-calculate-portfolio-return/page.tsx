import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { roiGuideSlugs } from '@/lib/pages/roi-guide-slugs'
import RoiGuideContent from '@/components/guides/RoiGuideContent'

const THIS_SLUG = 'how-to-calculate-portfolio-return'
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
  Object.entries(roiGuideSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: 'Real Portfolio Return: ROI vs TWR vs IRR Explained [With Examples] | DonkyCapital',
    description: 'Learn the difference between Simple ROI, TWR and IRR/MWRR to accurately calculate your real portfolio return. Formulas, practical examples and a real data case study.',
    alternateLanguages,
  })
}

export default async function HowToCalculatePortfolioReturnPage({
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
        name: 'Do TWRR and MWRR always give different results?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. If you invested all the capital in a single lump sum with no subsequent contributions or withdrawals, TWRR and MWRR are identical. Differences only arise when there are multiple cash flows over time.',
        },
      },
      {
        '@type': 'Question',
        name: "What is the difference between MWRR and Excel's XIRR?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "They are the same thing expressed differently. Excel's XIRR calculates the internal rate of return accounting for the exact dates of each cash flow — that is exactly the MWRR. DonkyCapital uses the same algorithm automatically.",
        },
      },
      {
        '@type': 'Question',
        name: 'Which metric should I use to compare myself with an ETF or the MSCI World?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Always use TWRR (or annualised TWRR). Benchmarks like the MSCI World are calculated using the time-weighted method. Only TWRR guarantees an objective comparison.',
        },
      },
      {
        '@type': 'Question',
        name: 'If my TWRR is much higher than my MWRR, is that a problem?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not necessarily. It means you added capital at unfavourable times. It is valuable information to reflect on your approach to periodic contributions, but it does not indicate an error in asset management.',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to calculate the real return of your investment portfolio',
    description: 'Guide to calculating ROI, TWRR and MWRR to accurately measure portfolio performance.',
    step: [
      { '@type': 'HowToStep', name: 'Calculate Simple ROI', text: 'ROI = (Current Value − Invested Capital) / Invested Capital × 100. Useful for single lump-sum investments.' },
      { '@type': 'HowToStep', name: 'Calculate TWRR', text: 'Divide the period into sub-periods at each cash flow, calculate each return, then multiply: TWRR = [(1+R1)×(1+R2)×...×(1+Rn)]−1.' },
      { '@type': 'HowToStep', name: 'Calculate MWRR/IRR', text: 'Use the XIRR function in Excel or a tool like DonkyCapital which calculates it automatically based on the exact dates of each transaction.' },
      { '@type': 'HowToStep', name: 'Compare TWRR and MWRR', text: 'If TWRR > MWRR you invested at less favourable moments. If MWRR > TWRR you timed your contributions well.' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <RoiGuideContent lang="en" />
    </>
  )
}
