import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { commonMistakesSlugs } from '@/lib/pages/common-mistakes-slugs'
import CommonMistakesContent from '@/components/guides/CommonMistakesContent'

const THIS_SLUG = 'portfolio-tracking-fehler'
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
  Object.entries(commonMistakesSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: '5 Fatale Fehler beim Portfolio-Tracking (Die Tausende Kosten) | DonkyCapital',
    description: 'Analyse von 500+ realen Portfolios: Entdecke die 5 häufigsten Portfolio-Tracking-Fehler, die tausende Euro kosten. Versteckte Gebühren, verfälschte Renditen, ignorierte Dividenden und wie du sie vermeidest.',
    alternateLanguages,
  })
}

export default async function PortfolioTrackingFehlerPage({
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
        name: 'Was ist der häufigste Fehler beim Portfolio-Tracking?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Der häufigste Fehler ist, Transaktionsgebühren nicht in die Renditenberechnung einzubeziehen. Bei einem aktiven Portfolio können Gebühren jährlich 1-3% der realen Rendite ausmachen — ein enormer Einfluss auf lange Sicht durch den Zinseszinseffekt.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie berechnet man die Portfoliorendite korrekt?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Für einen genauen Vergleich mit Benchmarks muss der TWRR (Time-Weighted Rate of Return) verwendet werden, nicht der einfache Prozentgewinn. TWRR eliminiert den Einfluss deiner Ein- und Auszahlungen und isoliert nur die Vermögensperformance. DonkyCapital berechnet automatisch sowohl TWRR als auch MWRR.',
        },
      },
      {
        '@type': 'Question',
        name: 'Sollten Dividenden in die Renditenberechnung einbezogen werden?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolut ja. Das Ignorieren von Dividenden kann die reale Rendite bei einem einkommensorientierten Portfolio jährlich um 2-4% unterschätzen. Viele Tracker zeigen nur die Preisrendite (Price Return) statt der Gesamtrendite (Total Return), die reinvestierte Dividenden einbezieht.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie geht man mit dem Währungsrisiko im Portfolio um?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Es ist entscheidend, die Rendite in lokaler Währung und die in deine Referenzwährung umgerechnete Rendite separat zu überwachen. Eine US-Aktie, die 10% steigt, kann in Euro eine negative Rendite ergeben, wenn der Dollar 15% fällt. Ein guter Tracker zeigt immer beide Ansichten.',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Wie man die häufigsten Portfolio-Tracking-Fehler vermeidet',
    description: 'Praktischer Leitfaden für das korrekte Tracking eines Anlageportfolios und zur Vermeidung der 5 Fehler, die tausende Euro kosten.',
    step: [
      { '@type': 'HowToStep', name: 'Immer Gebühren einbeziehen', text: 'Erfasse jede Transaktionsgebühr, Depotgebühr und Bid-Ask-Spread in deinem Tracker, um die echte Nettorendite zu sehen.' },
      { '@type': 'HowToStep', name: 'TWRR zur Performancemessung verwenden', text: 'Ersetze den einfachen Gewinn% durch TWRR, um dein Portfolio korrekt mit Benchmarks zu vergleichen.' },
      { '@type': 'HowToStep', name: 'Alle Dividenden erfassen', text: 'Füge jede erhaltene Dividende als Transaktion in den Tracker ein, um die vollständige Gesamtrendite zu haben.' },
      { '@type': 'HowToStep', name: 'Währungsexposition überwachen', text: 'Überprüfe den Anteil der Anlagen in Fremdwährung und überwache die Rendite separat in lokaler Währung und Referenzwährung.' },
      { '@type': 'HowToStep', name: 'Einen Benchmark festlegen', text: 'Vergleiche dein Portfolio immer mit einem geeigneten Benchmark (z.B. MSCI World für ein globales Portfolio), um zu beurteilen, ob du wirklich Wert schaffst.' },
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
