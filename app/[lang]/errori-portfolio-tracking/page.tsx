import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { commonMistakesSlugs } from '@/lib/pages/common-mistakes-slugs'
import CommonMistakesContent from '@/components/guides/CommonMistakesContent'

const THIS_SLUG = 'errori-portfolio-tracking'
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
  Object.entries(commonMistakesSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: '5 Errori nel Tracciare il Portafoglio (Che Costano Migliaia di Euro) | DonkyCapital',
    description: 'Analisi di 500+ portafogli reali: scopri i 5 errori più comuni nel portfolio tracking che fanno perdere migliaia di euro. Commissioni nascoste, rendimenti falsati, dividendi ignorati e come evitarli.',
    alternateLanguages,
  })
}

export default async function ErroriPortfolioTrackingPage({
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
        name: 'Qual è l\'errore più comune nel tracciare un portafoglio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'L\'errore più comune è non includere le commissioni di transazione nel calcolo del rendimento. Su un portafoglio attivo, le commissioni possono sottrarre 1-3% annuo dal rendimento reale, un impatto enorme nel lungo periodo grazie all\'effetto dell\'interesse composto.',
        },
      },
      {
        '@type': 'Question',
        name: 'Come si calcola correttamente il rendimento di un portafoglio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Per un confronto accurato con i benchmark, bisogna usare il TWRR (Time-Weighted Rate of Return), non il semplice guadagno percentuale. Il TWRR elimina l\'effetto dei tuoi depositi e prelievi, isolando solo la performance degli asset. DonkyCapital calcola automaticamente sia TWRR che MWRR.',
        },
      },
      {
        '@type': 'Question',
        name: 'I dividendi vanno inclusi nel calcolo del rendimento?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Assolutamente sì. Ignorare i dividendi può sottostimare il rendimento reale del 2-4% annuo per un portafoglio orientato al reddito. Molti tracker mostrano solo la performance del prezzo (price return) invece del total return che include i dividendi reinvestiti.',
        },
      },
      {
        '@type': 'Question',
        name: 'Come gestire il rischio di cambio valuta nel portafoglio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'È essenziale monitorare separatamente il rendimento in valuta locale e il rendimento convertito nella tua valuta di riferimento. Un titolo USA che sale del 10% può dare un rendimento negativo in euro se il dollaro si deprezza del 15%. Un buon tracker mostra sempre entrambe le viste.',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Come evitare gli errori più comuni nel portfolio tracking',
    description: 'Guida pratica per tracciare correttamente un portafoglio di investimenti ed evitare i 5 errori che costano migliaia di euro.',
    step: [
      { '@type': 'HowToStep', name: 'Includere sempre le commissioni', text: 'Registra ogni commissione di transazione, tassa di custodia e spread bid-ask nel tuo tracker per vedere il rendimento netto reale.' },
      { '@type': 'HowToStep', name: 'Usare il TWRR per misurare le performance', text: 'Sostituisci il semplice guadagno% con il TWRR per confrontare il tuo portafoglio con i benchmark in modo corretto.' },
      { '@type': 'HowToStep', name: 'Registrare tutti i dividendi', text: 'Aggiungi ogni dividendo ricevuto come transazione nel tracker per avere il total return completo.' },
      { '@type': 'HowToStep', name: 'Monitorare l\'esposizione valutaria', text: 'Verifica la percentuale di asset in valuta estera e monitora il rendimento separatamente in valuta locale e di riferimento.' },
      { '@type': 'HowToStep', name: 'Impostare un benchmark', text: 'Confronta sempre il tuo portafoglio con un benchmark appropriato (es. MSCI World per un portafoglio globale) per valutare se stai davvero creando valore.' },
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
