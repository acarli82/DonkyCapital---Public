import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { unlistedGuideSlugs } from '@/lib/pages/unlisted-guide-slugs'
import UnlistedGuideContent from '@/components/guides/UnlistedGuideContent'

const THIS_SLUG = 'monitorare-asset-non-quotati'
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
  Object.entries(unlistedGuideSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: 'Come Monitorare Asset Non Quotati nel Portafoglio: Immobili, PE, Arte su DonkyCapital',
    description: 'Guida completa per censire e monitorare asset non quotati (immobili, private equity, arte, startup) nel tuo portafoglio DonkyCapital. Registra acquisti, aggiorna prezzi e contabilizza i proventi.',
    alternateLanguages,
  })
}

export default async function MonitorareAssetNonQuotatiPage({
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
        name: 'Posso inserire immobili e partecipazioni non quotate nel portafoglio DonkyCapital?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sì. DonkyCapital permette di censire qualsiasi asset non quotato (immobili, private equity, arte, oggetti da collezione, crediti P2P) nella sezione "My Unlisted Assets". Una volta creato l\'asset, puoi registrare transazioni di acquisto, aggiornare il prezzo manualmente nel tempo e contabilizzare i proventi come dividendi.',
        },
      },
      {
        '@type': 'Question',
        name: 'Come si aggiorna il prezzo di un asset non quotato su DonkyCapital?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dalla sezione "My Unlisted Assets", clicca sull\'icona del cronometro accanto all\'asset per aprire il pannello "Price History". Da lì puoi aggiungere un nuovo prezzo con la data di aggiornamento. Il portafoglio riflette automaticamente il nuovo valore.',
        },
      },
      {
        '@type': 'Question',
        name: 'Come si registrano i canoni di affitto o i dividendi di asset non quotati?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nel modal "Add Transaction" seleziona il tipo "Dividend" e scegli l\'asset non quotato. Inserisci la quantità, il provento per unità e la data. Il totale viene calcolato automaticamente e appare nel registro delle transazioni del portafoglio.',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Come monitorare un asset non quotato su DonkyCapital',
    description: 'Guida passo dopo passo per censire e monitorare asset non quotati (immobili, startup, arte) su DonkyCapital.',
    step: [
      { '@type': 'HowToStep', name: 'Crea l\'asset nella sezione My Unlisted Assets', text: 'Vai su "My Unlisted Assets" e clicca "+ ADD NEW ASSET". Inserisci nome, simbolo e valuta.' },
      { '@type': 'HowToStep', name: 'Registra la transazione di acquisto', text: 'In "Add Transaction" seleziona tipo "Buy Asset" e il tab "Unlisted". Scegli l\'asset, inserisci prezzo, quantità e data.' },
      { '@type': 'HowToStep', name: 'Aggiorna il prezzo nel tempo', text: 'Dal pannello "Price History" clicca "ADD NEW PRICE" per inserire la nuova valutazione.' },
      { '@type': 'HowToStep', name: 'Registra i proventi', text: 'In "Add Transaction" seleziona tipo "Dividend", scegli l\'asset e inserisci il provento per unità e la data.' },
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
