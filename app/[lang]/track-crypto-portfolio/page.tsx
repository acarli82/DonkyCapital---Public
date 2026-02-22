import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { cryptoGuideSlugs } from '@/lib/pages/crypto-guide-slugs'
import CryptoGuideContent from '@/components/guides/CryptoGuideContent'

const THIS_SLUG = 'track-crypto-portfolio'
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
  Object.entries(cryptoGuideSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: 'How to Track Crypto in Your Portfolio: Bitcoin, ETH and Altcoins on DonkyCapital',
    description: 'Complete guide to tracking cryptocurrencies in DonkyCapital alongside stocks, ETFs and unlisted assets. Add transactions, compare performance and manage staking rewards.',
    alternateLanguages,
  })
}

export default async function TrackCryptoPortfolioPage({
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
        name: 'Are crypto prices updated automatically in DonkyCapital?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Unlike unlisted assets, cryptocurrencies in the catalogue have automatically updated prices. You don\'t need to do anything to maintain a current valuation of your positions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I record a staking reward or airdrop in DonkyCapital?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use the "Dividend" transaction type for staking rewards (equivalent to a dividend on the crypto you\'re holding). For an airdrop, use "Buy Asset" with zero or a symbolic price, or "Dividend" if you prefer to treat it as income.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do I do if a crypto isn\'t in the DonkyCapital catalogue?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'When you search for a crypto and it isn\'t found, the banner "Cryptocurrency not found. You can request its addition." appears with the "REQUEST CRYPTOCURRENCY" button. Alternatively, you can add the crypto as an Unlisted Asset with manual price updates.',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to add a cryptocurrency to your portfolio in DonkyCapital',
    description: 'Step-by-step guide to tracking Bitcoin, Ethereum and altcoins in DonkyCapital.',
    step: [
      { '@type': 'HowToStep', name: 'Open Add Transaction', text: 'Go to the Transactions section of your portfolio and click "Add Transaction".' },
      { '@type': 'HowToStep', name: 'Select the Cryptocurrency tab', text: 'In the modal, select type "Buy Asset" then the "Cryptocurrency" tab.' },
      { '@type': 'HowToStep', name: 'Search and select the crypto', text: 'Search by name or ticker (e.g. BTC, ETH, BNB) and select the crypto from the list.' },
      { '@type': 'HowToStep', name: 'Enter the details', text: 'Enter quantity, purchase price and date, then click CREATE.' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <CryptoGuideContent lang={lang} />
    </>
  )
}
