import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { unlistedGuideSlugs } from '@/lib/pages/unlisted-guide-slugs'
import UnlistedGuideContent from '@/components/guides/UnlistedGuideContent'

const THIS_SLUG = 'track-unlisted-assets-portfolio'
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
  Object.entries(unlistedGuideSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: 'How to Track Unlisted Assets in Your Portfolio: Real Estate, PE, Art on DonkyCapital',
    description: 'Complete guide to registering and monitoring unlisted assets (real estate, private equity, art, startups) in your DonkyCapital portfolio. Record purchases, update prices and track income.',
    alternateLanguages,
  })
}

export default async function TrackUnlistedAssetsPortfolioPage({
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
        name: 'Can I add real estate and unlisted holdings to my DonkyCapital portfolio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. DonkyCapital lets you register any unlisted asset (real estate, private equity, art, collectibles, P2P loans) in the "My Unlisted Assets" section. Once created, you can record buy transactions, manually update the price over time, and log income as dividends.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I update the price of an unlisted asset in DonkyCapital?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'From the "My Unlisted Assets" section, click the clock icon next to the asset to open the "Price History" panel. From there you can add a new price with its update date. The portfolio automatically reflects the new value.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I record rental income or dividends from unlisted assets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In the "Add Transaction" modal, select type "Dividend" and choose the unlisted asset. Enter the quantity, the income per unit and the date. The total is auto-calculated and appears in the portfolio transaction ledger.',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to track an unlisted asset in DonkyCapital',
    description: 'Step-by-step guide to registering and monitoring unlisted assets (real estate, startups, art) in DonkyCapital.',
    step: [
      { '@type': 'HowToStep', name: 'Create the asset in My Unlisted Assets', text: 'Go to "My Unlisted Assets" and click "+ ADD NEW ASSET". Enter name, symbol and currency.' },
      { '@type': 'HowToStep', name: 'Record the buy transaction', text: 'In "Add Transaction" select type "Buy Asset" and the "Unlisted" tab. Choose the asset, enter price, quantity and date.' },
      { '@type': 'HowToStep', name: 'Update the price over time', text: 'From the "Price History" panel click "ADD NEW PRICE" to enter the new valuation.' },
      { '@type': 'HowToStep', name: 'Record income', text: 'In "Add Transaction" select type "Dividend", choose the asset and enter the income per unit and date.' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <UnlistedGuideContent lang={lang} />
    </>
  )
}
