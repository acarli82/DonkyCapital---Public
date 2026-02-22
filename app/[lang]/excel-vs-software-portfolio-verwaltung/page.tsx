import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { excelVsSoftwareSlugs } from '@/lib/pages/excel-vs-software-slugs'
import ExcelVsSoftwareContent from '@/components/guides/ExcelVsSoftwareContent'

const THIS_SLUG = 'excel-vs-software-portfolio-verwaltung'
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
  Object.entries(excelVsSoftwareSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: 'Excel vs. Software: Die wahren Kosten der manuellen Depot-Verwaltung | DonkyCapital',
    description: 'Berechne die echten Kosten von Excel für die Depot-Verwaltung: verschwendete Zeit, Fehlerquote und ROI-Analyse. Entdecke, warum dedizierte Software sich bereits ab dem ersten Monat lohnt.',
    alternateLanguages,
  })
}

export default async function ExcelVsSoftwareDePage({
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
        name: 'Kann ich mein Excel-Portfolio in DonkyCapital importieren?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja. DonkyCapital unterstützt den CSV-Import von vielen Brokern (Degiro, Scalable, Fineco und andere). Du kannst Transaktionen auch manuell eingeben oder aus einer strukturierten Excel-Tabelle importieren.',
        },
      },
      {
        '@type': 'Question',
        name: 'Ist Excel wirklich so fehleranfällig bei der Depot-Verwaltung?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Die akademische Forschung bestätigt es: 94% komplexer Excel-Tabellen enthalten mindestens einen Fehler. Bei Finanzportfolios mit Performance-Formeln ist das Risiko real, besonders nach Unternehmensaktionen wie Aktien-Splits, Spin-offs und Sonderdividenden.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie viel Zeit spart man mit DonkyCapital im Vergleich zu Excel?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Im Durchschnitt spart ein Investor, der 20 Wertpapiere verwaltet, zwischen 85 und 175 Minuten pro Monat: Kurs-Updates, Performance-Berechnungen und Berichtserstellung erfolgen automatisch. Aufs Jahr gerechnet sind das 10-20 Stunden zurückgewonnen.',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'So migrierst du dein Depot von Excel zu DonkyCapital',
    description: 'Schritt-für-Schritt-Anleitung, um Excel hinter sich zu lassen und das Depot mit DonkyCapital zu verwalten.',
    step: [
      { '@type': 'HowToStep', name: 'CSV vom Broker exportieren', text: 'Die meisten Broker (Degiro, Scalable, Fineco) erlauben den Export der Transaktionshistorie als CSV.' },
      { '@type': 'HowToStep', name: 'In DonkyCapital importieren', text: 'Melde dich bei DonkyCapital an, erstelle ein Depot und nutze die CSV-Import-Funktion, um alle Transaktionen automatisch hochzuladen.' },
      { '@type': 'HowToStep', name: 'Nicht-Standard-Assets hinzufügen', text: 'Für Assets, die nicht vom Import abgedeckt werden (nicht börsennotierte Kryptos, Immobilien, Private Equity), füge sie manuell als nicht börsennotierte Assets hinzu.' },
      { '@type': 'HowToStep', name: 'Abstimmung prüfen', text: 'Vergleiche den Depot-Gesamtwert in DonkyCapital mit deinem Brokerauszug, um sicherzustellen, dass alles korrekt importiert wurde.' },
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
