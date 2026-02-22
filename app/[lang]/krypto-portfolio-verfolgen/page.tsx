import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { cryptoGuideSlugs } from '@/lib/pages/crypto-guide-slugs'
import CryptoGuideContent from '@/components/guides/CryptoGuideContent'

const THIS_SLUG = 'krypto-portfolio-verfolgen'
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

  const alternateLanguages: Record<string, string> = {}
  Object.entries(cryptoGuideSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: 'Kryptowährungen im Portfolio verfolgen: Bitcoin, ETH und Altcoins in DonkyCapital',
    description: 'Vollständiger Leitfaden zum Verfolgen von Kryptowährungen in DonkyCapital neben Aktien, ETFs und nicht börsennotierten Assets. Transaktionen erfassen, Performance vergleichen und Staking-Rewards verwalten.',
    alternateLanguages,
  })
}

export default async function KryptoPortfolioVerfolgenPage({
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
        name: 'Werden Krypto-Preise in DonkyCapital automatisch aktualisiert?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja. Im Gegensatz zu nicht börsennotierten Assets haben Kryptowährungen im Katalog automatisch aktualisierte Preise. Du musst nichts tun, um eine aktuelle Bewertung deiner Positionen zu erhalten.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie erfasse ich einen Staking-Reward oder Airdrop in DonkyCapital?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Verwende den Transaktionstyp „Dividend" für Staking-Rewards (entspricht einer Dividende auf die gehaltene Krypto). Für einen Airdrop kannst du „Buy Asset" mit null oder einem symbolischen Preis verwenden, oder „Dividend", wenn du ihn als Einkommen behandeln möchtest.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was tue ich, wenn eine Krypto nicht im DonkyCapital-Katalog ist?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wenn du eine Krypto suchst und sie nicht gefunden wird, erscheint das Banner „Cryptocurrency not found. You can request its addition." mit der Schaltfläche „REQUEST CRYPTOCURRENCY". Alternativ kannst du die Krypto als Unlisted Asset mit manueller Preisaktualisierung hinzufügen.',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'So fügst du eine Kryptowährung zu deinem Portfolio in DonkyCapital hinzu',
    description: 'Schritt-für-Schritt-Anleitung zum Verfolgen von Bitcoin, Ethereum und Altcoins in DonkyCapital.',
    step: [
      { '@type': 'HowToStep', name: 'Add Transaction öffnen', text: 'Gehe zum Bereich Transaktionen deines Portfolios und klicke „Add Transaction".' },
      { '@type': 'HowToStep', name: 'Tab Cryptocurrency wählen', text: 'Im Modal Typ „Buy Asset" und dann den Tab „Cryptocurrency" wählen.' },
      { '@type': 'HowToStep', name: 'Krypto suchen und auswählen', text: 'Nach Name oder Ticker suchen (z.B. BTC, ETH, BNB) und Krypto aus der Liste wählen.' },
      { '@type': 'HowToStep', name: 'Details eingeben', text: 'Menge, Kaufpreis und Datum eingeben, dann CREATE klicken.' },
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
