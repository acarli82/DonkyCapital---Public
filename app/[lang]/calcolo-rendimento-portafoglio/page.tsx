import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { roiGuideSlugs } from '@/lib/pages/roi-guide-slugs'
import RoiGuideContent from '@/components/guides/RoiGuideContent'

const THIS_SLUG = 'calcolo-rendimento-portafoglio'
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
  Object.entries(roiGuideSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: 'Rendimento Reale Portfolio: Differenza tra ROI, TWR e IRR [Con Esempi] | DonkyCapital',
    description: 'Scopri la differenza tra ROI semplice, TWR (TWRR) e IRR (MWRR) per calcolare il rendimento reale del tuo portafoglio. Formule, esempi pratici e confronto con dati reali.',
    alternateLanguages,
  })
}

export default async function CalcoloRendimentoPage({
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
        name: 'TWRR e MWRR danno sempre risultati diversi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "No. Se hai investito tutto il capitale in un'unica soluzione senza versamenti o prelievi successivi, TWRR e MWRR coincidono. Le differenze emergono solo in presenza di flussi di cassa multipli nel tempo.",
        },
      },
      {
        '@type': 'Question',
        name: "Qual è la differenza tra MWRR e XIRR di Excel?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Sono la stessa cosa espressa in modo diverso. L'XIRR di Excel calcola il tasso interno di rendimento tenendo conto delle date esatte di ogni flusso di cassa — è esattamente il MWRR.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quale metrica usare per confrontarmi con un ETF o con il MSCI World?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Usa sempre il TWRR (o TWRR annualizzato). I benchmark come l'MSCI World sono calcolati con metodo time-weighted. Solo il TWRR garantisce un confronto oggettivo.",
        },
      },
      {
        '@type': 'Question',
        name: "Se il mio TWRR è molto più alto del MWRR, è un problema?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non necessariamente. Significa che hai aggiunto capitale in momenti in cui il mercato era già salito o stava per scendere. È un'informazione preziosa per riflettere sul proprio approccio ai versamenti periodici.",
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Come calcolare il rendimento reale del portafoglio',
    description: 'Guida al calcolo di ROI, TWRR e MWRR per misurare con precisione la performance del portafoglio investimenti.',
    step: [
      { '@type': 'HowToStep', name: 'Calcola il ROI semplice', text: 'ROI = (Valore Attuale − Capitale Investito) / Capitale Investito × 100. Utile per investimenti senza flussi di cassa multipli.' },
      { '@type': 'HowToStep', name: 'Calcola il TWRR', text: 'Dividi il periodo in sotto-periodi a ogni flusso di cassa, calcola il rendimento di ciascuno e moltiplicali: TWRR = [(1+R1)×(1+R2)×...×(1+Rn)]−1.' },
      { '@type': 'HowToStep', name: 'Calcola il MWRR/IRR', text: "Usa la funzione XIRR di Excel oppure uno strumento come DonkyCapital che lo calcola automaticamente tenendo conto delle date esatte di ogni transazione." },
      { '@type': 'HowToStep', name: 'Confronta TWRR e MWRR', text: 'Se TWRR > MWRR hai investito nei momenti meno favorevoli. Se MWRR > TWRR hai ottimizzato bene la tempistica dei versamenti.' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <RoiGuideContent lang="it" />
    </>
  )
}
