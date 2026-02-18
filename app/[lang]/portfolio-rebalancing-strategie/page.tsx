import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { capitalManagementSlugs } from '@/lib/pages/capital-management-slugs'
import CapitalManagementContent from '@/components/guides/CapitalManagementContent'

const THIS_SLUG = 'portfolio-rebalancing-strategie'
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
  Object.entries(capitalManagementSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: 'Portfolio Rebalancing: Strategien & Automatisches Tool 2026 | DonkyCapital',
    description: 'Erfahre, warum das Rebalancing deines Depots wichtig ist und wie du es automatisch mit DonkyCapital durchführst. Praxisleitfaden mit Strategien für ETFs und Aktien.',
    alternateLanguages,
  })
}

export default async function PortfolioRebalancingDePage({
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
        name: 'Wie oft sollte ich mein Portfolio rebalancieren?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Für die meisten Investoren reicht eine vierteljährliche Überprüfung aus. Wichtig ist, einen Drift-Schwellenwert (z.B. ±5%) festzulegen, ab dem eingegriffen wird. Zu häufiges Rebalancing erhöht Transaktionskosten und kann unnötigerweise steuerpflichtige Gewinne auslösen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Ist es besser, nur durch Käufe oder auch durch Verkäufe zu rebalancieren?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Das hängt von deiner Investitionsphase ab. In der Ansparphase mit verfügbarer neuer Liquidität ist Buy-only Rebalancing oft vorzuziehen. Bei sehr großer Drift oder in der Entnahmephase ist vollständiges Rebalancing angemessener.',
        },
      },
      {
        '@type': 'Question',
        name: 'Löst Portfolio-Rebalancing Steuern aus?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja: Jeder Verkauf von Finanzinstrumenten mit Gewinn unterliegt der Kapitalertragsteuer. Deshalb wird Buy-only Rebalancing in der Ansparphase oft empfohlen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Funktioniert Capital Management mit allen Brokern?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja. DonkyCapitals Capital Management funktioniert mit allen auf der Plattform geladenen Portfolios, unabhängig vom Broker: Fineco, DeGiro, Scalable Capital, Directa und andere.',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Portfolio rebalancieren mit DonkyCapital',
    description: 'Schritt-für-Schritt-Anleitung zur Nutzung des Capital Managements von DonkyCapital für das Portfolio-Rebalancing.',
    step: [
      { '@type': 'HowToStep', name: 'Capital Management öffnen', text: 'Öffne die Capital Management-Funktion in deinem DonkyCapital-Portfolio.' },
      { '@type': 'HowToStep', name: 'Modus wählen', text: 'Wähle Increase Capital, Reduce Capital oder Rebalance.' },
      { '@type': 'HowToStep', name: 'Parameter eingeben', text: 'Für Increase/Reduce: Betrag eingeben. Für Rebalance: Referenzportfolio und Datum wählen.' },
      { '@type': 'HowToStep', name: 'Berechnen und Orders herunterladen', text: 'Berechnen drücken, CSV herunterladen und Orders beim Broker aufgeben.' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <CapitalManagementContent lang="de" />
    </>
  )
}
