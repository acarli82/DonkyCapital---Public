import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { benchmarkGuideSlugs } from '@/lib/pages/benchmark-guide-slugs'
import BenchmarkGuideContent from '@/components/guides/BenchmarkGuideContent'

const THIS_SLUG = 'battere-inflazione-portafoglio'
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
  Object.entries(benchmarkGuideSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: 'Come Battere l\'Inflazione con il Portafoglio: Benchmark HICP in DonkyCapital',
    description: 'Scopri come usare i benchmark HICP di Eurostat in DonkyCapital per monitorare il rendimento reale del tuo portafoglio anno per anno. Guide passo-passo con screenshot.',
    alternateLanguages,
  })
}

export default async function BattereInflazionePortafoglioPage({
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
        name: 'Come si monitora l\'inflazione nel portafoglio con DonkyCapital?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'DonkyCapital permette di aggiungere l\'HICP (Indice dei Prezzi al Consumo Armonizzato) come benchmark nel widget Performance Timeline. Una volta configurato, il grafico mostra la linea dell\'inflazione sovrapposta alle barre del rendimento annuale, rendendo immediatamente visibile il rendimento reale.',
        },
      },
      {
        '@type': 'Question',
        name: 'Cos\'è l\'HICP e perché usarlo come benchmark?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'L\'HICP (Harmonised Index of Consumer Prices) è il principale indicatore dell\'inflazione nell\'Unione Europea, calcolato da Eurostat. Usarlo come benchmark permette di confrontare il rendimento nominale del portafoglio con l\'erosione del potere d\'acquisto, ottenendo il rendimento reale.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quali benchmark sono disponibili in DonkyCapital?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'DonkyCapital offre benchmark di tipo Index (S&P 500, EURO STOXX 50, DAX, FTSE 100, FTSE MIB, CAC 40, IBEX 35, Dow Jones, Russell 2000) e di tipo Macro (HICP EU, HICP Italia, HICP Germania, HICP Francia, HICP Spagna).',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Come configurare il benchmark HICP in DonkyCapital',
    description: 'Guida passo-passo per impostare l\'HICP come benchmark nel widget Performance Timeline di DonkyCapital.',
    step: [
      { '@type': 'HowToStep', name: 'Apri il widget Performance Timeline', text: 'Accedi alla tua dashboard DonkyCapital e individua il widget Performance Timeline.' },
      { '@type': 'HowToStep', name: 'Apri le impostazioni del widget', text: 'Clicca sull\'icona ingranaggio in alto a destra del widget.' },
      { '@type': 'HowToStep', name: 'Seleziona il benchmark HICP', text: 'Nella sezione Benchmark, seleziona "HICP European Union" dal menu a tendina.' },
      { '@type': 'HowToStep', name: 'Salva le modifiche', text: 'Clicca "Save Changes". Il grafico mostrerà immediatamente la linea dell\'inflazione sovrapposta al rendimento.' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <BenchmarkGuideContent lang={lang} />
    </>
  )
}
