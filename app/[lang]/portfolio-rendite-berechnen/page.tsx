import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { roiGuideSlugs } from '@/lib/pages/roi-guide-slugs'
import RoiGuideContent from '@/components/guides/RoiGuideContent'

const THIS_SLUG = 'portfolio-rendite-berechnen'
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
  Object.entries(roiGuideSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: 'Tatsächliche Portfolio-Rendite: ROI vs TWR vs IRR erklärt [Mit Beispielen] | DonkyCapital',
    description: 'Verstehe den Unterschied zwischen einfachem ROI, TWR und IRR/MWRR, um die tatsächliche Rendite deines Portfolios zu berechnen. Formeln, Praxisbeispiele und Fallstudie.',
    alternateLanguages,
  })
}

export default async function PortfolioRenditeBerechnePage({
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
        name: 'Ergeben TWRR und MWRR immer unterschiedliche Ergebnisse?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nein. Wenn du das gesamte Kapital in einer einzigen Einmalanlage ohne nachfolgende Einzahlungen oder Entnahmen investiert hast, sind TWRR und MWRR identisch. Unterschiede entstehen nur bei mehreren Cashflows über die Zeit.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zwischen MWRR und XIRR in Excel?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Es ist dasselbe, nur anders ausgedrückt. Die XIRR-Funktion von Excel berechnet den internen Zinsfuß unter Berücksichtigung der genauen Daten jedes Cashflows — das ist genau die MWRR. DonkyCapital verwendet denselben Algorithmus automatisch.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welche Kennzahl sollte ich verwenden, um mich mit einem ETF oder dem MSCI World zu vergleichen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Verwende immer den TWRR (oder annualisierten TWRR). Benchmarks wie der MSCI World werden nach der zeitgewichteten Methode berechnet. Nur der TWRR garantiert einen objektiven Vergleich.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wenn mein TWRR viel höher ist als mein MWRR, ist das ein Problem?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nicht unbedingt. Es bedeutet, dass du Kapital zu ungünstigen Zeitpunkten eingezahlt hast. Es sind wertvolle Informationen, aber zeigt keinen Fehler im Asset-Management.',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Wie man die tatsächliche Rendite eines Anlageportfolios berechnet',
    description: 'Leitfaden zur Berechnung von ROI, TWRR und MWRR für eine genaue Messung der Portfolio-Performance.',
    step: [
      { '@type': 'HowToStep', name: 'Einfachen ROI berechnen', text: 'ROI = (Aktueller Wert − Investiertes Kapital) / Investiertes Kapital × 100.' },
      { '@type': 'HowToStep', name: 'TWRR berechnen', text: 'Teile den Zeitraum bei jedem Cashflow in Teilperioden auf und multipliziere die Renditen: TWRR = [(1+R1)×(1+R2)×...×(1+Rn)]−1.' },
      { '@type': 'HowToStep', name: 'MWRR/IRR berechnen', text: 'Verwende die XIRR-Funktion in Excel oder DonkyCapital, das es automatisch berechnet.' },
      { '@type': 'HowToStep', name: 'TWRR und MWRR vergleichen', text: 'TWRR > MWRR: schlechtes Timing. MWRR > TWRR: gutes Timing der Einzahlungen.' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <RoiGuideContent lang="de" />
    </>
  )
}
