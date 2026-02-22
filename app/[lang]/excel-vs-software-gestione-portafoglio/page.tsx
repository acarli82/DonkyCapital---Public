import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { excelVsSoftwareSlugs } from '@/lib/pages/excel-vs-software-slugs'
import ExcelVsSoftwareContent from '@/components/guides/ExcelVsSoftwareContent'

const THIS_SLUG = 'excel-vs-software-gestione-portafoglio'
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
  Object.entries(excelVsSoftwareSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: 'Excel vs Software: Il Vero Costo del Portafoglio Fai-da-Te | DonkyCapital',
    description: 'Calcolo del costo reale di Excel per gestire il portafoglio: tempo sprecato, tasso di errore e ROI analysis. Scopri perché un software dedicato conviene già dal primo mese.',
    alternateLanguages,
  })
}

export default async function ExcelVsSoftwareItPage({
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
        name: 'Posso importare il mio portafoglio Excel in DonkyCapital?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sì. DonkyCapital supporta l\'importazione di file CSV da molti broker (Degiro, Scalable, Fineco e altri). Puoi anche inserire le transazioni manualmente o importare da un foglio Excel strutturato.',
        },
      },
      {
        '@type': 'Question',
        name: 'Excel è davvero così soggetto a errori nella gestione del portafoglio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La ricerca accademica conferma che il 94% dei fogli Excel complessi contiene almeno un errore. Per i portafogli finanziari con formule di performance, il rischio è reale soprattutto dopo eventi corporativi come split azionari, spin-off e dividendi straordinari.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quanto tempo si risparmia usando DonkyCapital rispetto a Excel?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In media, un investitore che gestisce 20 titoli risparmia tra 85 e 175 minuti al mese: l\'aggiornamento prezzi, il calcolo delle performance e la generazione dei report sono automatici. Su base annua, si tratta di 10-20 ore recuperate.',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Come migrare il portafoglio da Excel a DonkyCapital',
    description: 'Guida passo passo per smettere di usare Excel e iniziare a tracciare il portafoglio con DonkyCapital.',
    step: [
      { '@type': 'HowToStep', name: 'Esporta il tuo CSV dal broker', text: 'La maggior parte dei broker (Degiro, Scalable, Fineco) permette di esportare la storia delle transazioni in formato CSV.' },
      { '@type': 'HowToStep', name: 'Importa in DonkyCapital', text: 'Accedi a DonkyCapital, crea un portafoglio e usa la funzione di importazione CSV per caricare automaticamente tutte le tue transazioni.' },
      { '@type': 'HowToStep', name: 'Aggiungi asset non standard', text: 'Per asset non coperti dall\'import (crypto non quotate, immobili, asset non quotati), aggiungili manualmente come asset non quotati.' },
      { '@type': 'HowToStep', name: 'Verifica la riconciliazione', text: 'Confronta il totale del portafoglio in DonkyCapital con il tuo estratto conto per verificare che tutto sia importato correttamente.' },
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
