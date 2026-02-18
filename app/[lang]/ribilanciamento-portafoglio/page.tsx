import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { capitalManagementSlugs } from '@/lib/pages/capital-management-slugs'
import CapitalManagementContent from '@/components/guides/CapitalManagementContent'

const THIS_SLUG = 'ribilanciamento-portafoglio'
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

  // Alternate languages all point to the Italian page until translations are available
  const alternateLanguages: Record<string, string> = {}
  Object.keys(capitalManagementSlugs).forEach((locale) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/it/${THIS_SLUG}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: 'Come Ribilanciare il Portafoglio di Investimenti | Guida 2026 | DonkyCapital',
    description: 'Scopri perché ribilanciare il portafoglio è essenziale e come farlo automaticamente con DonkyCapital. Guida pratica con strategie per ETF e azioni e tool gratuito integrato.',
    alternateLanguages,
  })
}

export default async function CapitalManagementPage({
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
        name: 'Con quale frequenza devo ribilanciare il portafoglio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Per la maggior parte degli investitori una verifica trimestrale è sufficiente. L\'importante è definire una soglia di drift (es. ±5%) oltre la quale intervenire. Ribilanciare troppo spesso aumenta i costi di transazione e può generare plusvalenze tassabili senza reale necessità.',
        },
      },
      {
        '@type': 'Question',
        name: 'È meglio ribilanciare solo comprando o anche vendendo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dipende dalla fase di investimento. Se si è in accumulo e si dispone di nuova liquidità, il buy-only rebalancing è spesso preferibile perché evita la tassazione sulle plusvalenze. Se il drift è molto ampio o si è in decumulazione, il rebalancing completo con acquisti e vendite è più appropriato.',
        },
      },
      {
        '@type': 'Question',
        name: 'Il ribilanciamento del portafoglio genera tassazione?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sì: ogni vendita di strumenti finanziari in guadagno è soggetta a tassazione sulle plusvalenze. Per questo il buy-only rebalancing è spesso consigliato durante la fase di accumulo.',
        },
      },
      {
        '@type': 'Question',
        name: 'Il Capital Management di DonkyCapital funziona con tutti i broker?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sì. Il Capital Management funziona con tutti i portafogli caricati su DonkyCapital, indipendentemente dal broker: Fineco, DeGiro, Scalable Capital, Directa e altri. Il sistema calcola gli ordini in base ai prezzi correnti di mercato.',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Come ribilanciare il portafoglio con DonkyCapital',
    description: 'Guida passo per passo per usare il Capital Management di DonkyCapital e ribilanciare il portafoglio di investimenti.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Apri Capital Management',
        text: 'Dal tuo portafoglio su DonkyCapital, apri la funzione Capital Management.',
      },
      {
        '@type': 'HowToStep',
        name: 'Scegli la modalità',
        text: 'Seleziona tra Increase Capital (aggiungere liquidità), Reduce Capital (prelevare) o Rebalance (ribilanciare sulla composizione target).',
      },
      {
        '@type': 'HowToStep',
        name: 'Inserisci i parametri',
        text: 'Per Increase e Reduce: inserisci l\'importo. Per Rebalance: seleziona il portafoglio di riferimento e la data target.',
      },
      {
        '@type': 'HowToStep',
        name: 'Calcola e scarica gli ordini',
        text: 'Premi Calcola per ottenere il piano degli ordini ottimale. Scarica il CSV e inserisci gli ordini nel tuo broker.',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <CapitalManagementContent lang="it" />
    </>
  )
}
