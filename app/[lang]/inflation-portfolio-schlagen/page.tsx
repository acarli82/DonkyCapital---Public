import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { benchmarkGuideSlugs } from '@/lib/pages/benchmark-guide-slugs'
import BenchmarkGuideContent from '@/components/guides/BenchmarkGuideContent'

const THIS_SLUG = 'inflation-portfolio-schlagen'
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
  Object.entries(benchmarkGuideSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: 'Inflation mit dem Portfolio schlagen: HICP-Benchmarks in DonkyCapital',
    description: 'Erfahre, wie du Eurostat-HICP-Benchmarks in DonkyCapital nutzt, um die reale Rendite deines Portfolios Jahr für Jahr zu überwachen. Schritt-für-Schritt-Anleitung mit Screenshots.',
    alternateLanguages,
  })
}

export default async function InflationPortfolioSchlagenPage({
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
        name: 'Wie überwacht man die Inflation im Portfolio mit DonkyCapital?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'DonkyCapital ermöglicht es, den HVPI (Harmonisierter Verbraucherpreisindex) als Benchmark im Performance-Timeline-Widget hinzuzufügen. Nach der Konfiguration zeigt der Chart die Inflationslinie über den jährlichen Renditebalken an, sodass die reale Rendite sofort sichtbar wird.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was ist der HVPI und warum sollte man ihn als Benchmark verwenden?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Der HVPI (Harmonisierter Verbraucherpreisindex) ist der wichtigste Inflationsindikator in der EU, berechnet von Eurostat. Seine Verwendung als Benchmark ermöglicht den Vergleich der Nominalrendite des Portfolios mit der Erosion der Kaufkraft.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welche Benchmarks sind in DonkyCapital verfügbar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'DonkyCapital bietet Index-Benchmarks (S&P 500, EURO STOXX 50, DAX, FTSE 100, FTSE MIB, CAC 40, IBEX 35, Dow Jones, Russell 2000) und Makro-Benchmarks (HVPI EU, HVPI Italien, HVPI Deutschland, HVPI Frankreich, HVPI Spanien).',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'So konfigurierst du den HVPI-Benchmark in DonkyCapital',
    description: 'Schritt-für-Schritt-Anleitung zum Einrichten von HVPI als Benchmark im Performance-Timeline-Widget von DonkyCapital.',
    step: [
      { '@type': 'HowToStep', name: 'Öffne das Performance-Timeline-Widget', text: 'Gehe zu deinem DonkyCapital-Dashboard und finde das Performance-Timeline-Widget.' },
      { '@type': 'HowToStep', name: 'Öffne die Widget-Einstellungen', text: 'Klicke auf das Zahnrad-Symbol oben rechts im Widget.' },
      { '@type': 'HowToStep', name: 'Wähle den HVPI-Benchmark', text: 'Wähle im Abschnitt Benchmark "HICP European Union" aus dem Dropdown-Menü.' },
      { '@type': 'HowToStep', name: 'Speichere die Änderungen', text: 'Klicke auf "Save Changes". Der Chart zeigt sofort die Inflationslinie über der Rendite.' },
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
