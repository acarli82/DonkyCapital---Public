import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { cryptoGuideSlugs } from '@/lib/pages/crypto-guide-slugs'
import CryptoGuideContent from '@/components/guides/CryptoGuideContent'

const THIS_SLUG = 'monitorare-crypto-portafoglio'
const CORRECT_LOCALE: Locale = 'it'

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
    title: 'Come Monitorare le Crypto nel Portafoglio: Bitcoin, ETH e Altcoin su DonkyCapital',
    description: 'Guida completa per tracciare criptovalute nel portafoglio DonkyCapital insieme ad azioni, ETF e asset non quotati. Aggiungi transazioni, confronta performance e gestisci staking reward.',
    alternateLanguages,
  })
}

export default async function MonitorareCryptoPortafoglioPage({
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
        name: 'I prezzi delle crypto si aggiornano automaticamente su DonkyCapital?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sì. A differenza degli asset non quotati, le criptovalute presenti nel catalogo hanno prezzi aggiornati automaticamente. Non devi fare nulla per mantenere la valutazione corrente delle tue posizioni.',
        },
      },
      {
        '@type': 'Question',
        name: 'Come registro uno staking reward o un airdrop su DonkyCapital?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Usa il tipo di transazione "Dividend" per gli staking reward (equivale a un dividendo sulla crypto che stai tenendo). Per un airdrop, puoi usare "Buy Asset" con prezzo zero o un valore simbolico, oppure "Dividend" se preferisci trattarlo come reddito.',
        },
      },
      {
        '@type': 'Question',
        name: 'Cosa faccio se una crypto non è nel catalogo DonkyCapital?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Quando cerchi una crypto e non viene trovata, appare il banner "Cryptocurrency not found. You can request its addition." con il pulsante "REQUEST CRYPTOCURRENCY". In alternativa, puoi aggiungere la crypto come asset non quotato (Unlisted) con aggiornamento manuale del prezzo.',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Come aggiungere una criptovaluta al portafoglio su DonkyCapital',
    description: 'Guida passo dopo passo per tracciare Bitcoin, Ethereum e altcoin nel portafoglio DonkyCapital.',
    step: [
      { '@type': 'HowToStep', name: 'Apri Add Transaction', text: 'Vai nella sezione Transactions del portafoglio e clicca "Add Transaction".' },
      { '@type': 'HowToStep', name: 'Seleziona il tab Cryptocurrency', text: 'Nel modal, seleziona il tipo "Buy Asset" e poi il tab "Cryptocurrency".' },
      { '@type': 'HowToStep', name: 'Cerca e seleziona la crypto', text: 'Cerca per nome o ticker (es. BTC, ETH, BNB) e seleziona la crypto dall\'elenco.' },
      { '@type': 'HowToStep', name: 'Inserisci i dettagli', text: 'Inserisci quantità, prezzo di acquisto e data, poi clicca CREATE.' },
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
