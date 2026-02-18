import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { capitalManagementSlugs } from '@/lib/pages/capital-management-slugs'
import CapitalManagementContent from '@/components/guides/CapitalManagementContent'

const THIS_SLUG = 'portfolio-rebalancing-guide'
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
  Object.entries(capitalManagementSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: 'How to Rebalance Your Investment Portfolio | 2026 Guide | DonkyCapital',
    description: 'Learn why portfolio rebalancing is essential and how to automate it with DonkyCapital. A practical guide with strategies for ETFs and stocks, with a free integrated tool.',
    alternateLanguages,
  })
}

export default async function PortfolioRebalancingPage({
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
        name: 'How often should I rebalance my portfolio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For most investors, a quarterly review is sufficient. The important thing is to define a drift threshold (e.g. ±5%) beyond which to act. Rebalancing too often increases transaction costs and can generate taxable capital gains unnecessarily.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is it better to rebalance only by buying or also by selling?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It depends on your investment phase. If you are in accumulation and have new liquidity available, buy-only rebalancing is often preferable because it avoids taxation on capital gains. If the drift is very wide or you are in decumulation, full rebalancing with both buys and sells is more appropriate.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does portfolio rebalancing generate taxation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes: any sale of financial instruments at a profit is subject to capital gains tax. This is why buy-only rebalancing is often recommended during the accumulation phase.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Capital Management work with all brokers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. DonkyCapital\'s Capital Management works with all portfolios loaded on the platform, regardless of the broker: Fineco, DeGiro, Scalable Capital, Directa and others.',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to rebalance your portfolio with DonkyCapital',
    description: 'Step-by-step guide to using DonkyCapital\'s Capital Management to rebalance your investment portfolio.',
    step: [
      { '@type': 'HowToStep', name: 'Open Capital Management', text: 'From your DonkyCapital portfolio, open the Capital Management feature.' },
      { '@type': 'HowToStep', name: 'Choose the mode', text: 'Select Increase Capital (add funds), Reduce Capital (withdraw), or Rebalance (align to target composition).' },
      { '@type': 'HowToStep', name: 'Enter the parameters', text: 'For Increase/Reduce: enter the amount. For Rebalance: select the reference portfolio and target date.' },
      { '@type': 'HowToStep', name: 'Calculate and download orders', text: 'Press Calculate to get the optimal order plan. Download the CSV and place orders with your broker.' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <CapitalManagementContent lang="en" />
    </>
  )
}
