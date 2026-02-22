import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { unlistedGuideSlugs } from '@/lib/pages/unlisted-guide-slugs'
import UnlistedGuideContent from '@/components/guides/UnlistedGuideContent'

const THIS_SLUG = 'unlisted-assets-portfolio-verfolgen'
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
  Object.entries(unlistedGuideSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: 'Nicht börsennotierte Assets im Portfolio verfolgen: Immobilien, PE, Kunst in DonkyCapital',
    description: 'Vollständiger Leitfaden zum Erfassen und Überwachen nicht börsennotierter Assets (Immobilien, Private Equity, Kunst, Startups) in DonkyCapital. Käufe erfassen, Preise aktualisieren und Erträge buchen.',
    alternateLanguages,
  })
}

export default async function UnlistedAssetsPortfolioVerfolgenPage({
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
        name: 'Kann ich Immobilien und nicht börsennotierte Beteiligungen in mein DonkyCapital-Portfolio aufnehmen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja. DonkyCapital ermöglicht die Erfassung beliebiger nicht börsennotierter Assets (Immobilien, Private Equity, Kunst, Sammlerstücke, P2P-Kredite) im Bereich „My Unlisted Assets". Nach der Anlage können Kauftransaktionen erfasst, Preise manuell aktualisiert und Erträge als Dividenden gebucht werden.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie aktualisiere ich den Preis eines nicht börsennotierten Assets in DonkyCapital?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Im Bereich „My Unlisted Assets" auf das Uhr-Symbol neben dem Asset klicken, um das Panel „Price History" zu öffnen. Dort kann ein neuer Preis mit Aktualisierungsdatum hinzugefügt werden. Das Portfolio übernimmt den neuen Wert automatisch.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie erfasse ich Mieteinnahmen oder Dividenden nicht börsennotierter Assets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Im Modal „Add Transaction" den Typ „Dividend" wählen und das nicht börsennotierte Asset auswählen. Menge, Ertrag pro Einheit und Datum eingeben. Der Gesamtbetrag wird automatisch berechnet und erscheint im Transaktionsregister des Portfolios.',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'So verfolgst du ein nicht börsennotiertes Asset in DonkyCapital',
    description: 'Schritt-für-Schritt-Anleitung zum Erfassen und Überwachen nicht börsennotierter Assets (Immobilien, Startups, Kunst) in DonkyCapital.',
    step: [
      { '@type': 'HowToStep', name: 'Asset in My Unlisted Assets anlegen', text: 'Zu „My Unlisted Assets" gehen und „+ ADD NEW ASSET" klicken. Name, Symbol und Währung eingeben.' },
      { '@type': 'HowToStep', name: 'Kauftransaktion erfassen', text: 'In „Add Transaction" Typ „Buy Asset" und Tab „Unlisted" wählen. Asset auswählen, Preis, Menge und Datum eingeben.' },
      { '@type': 'HowToStep', name: 'Preis im Zeitverlauf aktualisieren', text: 'Im Panel „Price History" auf „ADD NEW PRICE" klicken und neue Bewertung eingeben.' },
      { '@type': 'HowToStep', name: 'Erträge buchen', text: 'In „Add Transaction" Typ „Dividend" wählen, Asset auswählen und Ertrag pro Einheit sowie Datum eingeben.' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <UnlistedGuideContent lang={lang} />
    </>
  )
}
