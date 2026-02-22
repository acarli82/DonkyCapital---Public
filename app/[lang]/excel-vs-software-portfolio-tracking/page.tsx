import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { excelVsSoftwareSlugs } from '@/lib/pages/excel-vs-software-slugs'
import ExcelVsSoftwareContent from '@/components/guides/ExcelVsSoftwareContent'

const THIS_SLUG = 'excel-vs-software-portfolio-tracking'
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
  Object.entries(excelVsSoftwareSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: 'Excel vs Software: The True Cost of DIY Portfolio Tracking | DonkyCapital',
    description: 'Calculate the real cost of using Excel for portfolio management: wasted time, error rates and ROI analysis. Discover why dedicated software pays off from the first month.',
    alternateLanguages,
  })
}

export default async function ExcelVsSoftwareEnPage({
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
        name: 'Can I import my Excel portfolio into DonkyCapital?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. DonkyCapital supports CSV file import from many brokers (Degiro, Scalable, Fineco and others). You can also enter transactions manually or import from a structured Excel spreadsheet.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Excel really that prone to errors in portfolio management?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Academic research confirms that 94% of complex Excel spreadsheets contain at least one error. For financial portfolios with performance formulas, the risk is real especially after corporate events like stock splits, spin-offs and special dividends.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much time do you save using DonkyCapital vs Excel?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'On average, an investor managing 20 securities saves between 85 and 175 minutes per month: price updates, performance calculations and report generation are all automatic. Annually, that\'s 10-20 hours recovered.',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to migrate your portfolio from Excel to DonkyCapital',
    description: 'Step-by-step guide to stop using Excel and start tracking your portfolio with DonkyCapital.',
    step: [
      { '@type': 'HowToStep', name: 'Export your CSV from the broker', text: 'Most brokers (Degiro, Scalable, Fineco) allow you to export transaction history in CSV format.' },
      { '@type': 'HowToStep', name: 'Import into DonkyCapital', text: 'Log into DonkyCapital, create a portfolio and use the CSV import feature to automatically upload all your transactions.' },
      { '@type': 'HowToStep', name: 'Add non-standard assets', text: 'For assets not covered by the import (unlisted crypto, real estate, private equity), add them manually as unlisted assets.' },
      { '@type': 'HowToStep', name: 'Verify reconciliation', text: 'Compare the portfolio total in DonkyCapital with your broker statement to verify everything has been imported correctly.' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <ExcelVsSoftwareContent lang={lang} />
    </>
  )
}
