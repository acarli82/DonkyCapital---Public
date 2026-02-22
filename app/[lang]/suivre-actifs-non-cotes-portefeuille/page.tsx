import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { unlistedGuideSlugs } from '@/lib/pages/unlisted-guide-slugs'
import UnlistedGuideContent from '@/components/guides/UnlistedGuideContent'

const THIS_SLUG = 'suivre-actifs-non-cotes-portefeuille'
const CORRECT_LOCALE: Locale = 'fr'

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
    title: 'Suivre les Actifs Non Cotés dans son Portefeuille : Immobilier, PE, Art dans DonkyCapital',
    description: "Guide complet pour enregistrer et suivre les actifs non cotés (immobilier, private equity, art, startups) dans DonkyCapital. Enregistrez les achats, mettez à jour les prix et comptabilisez les revenus.",
    alternateLanguages,
  })
}

export default async function SuivreActifsNonCotesPortefeuillePage({
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
        name: "Puis-je ajouter de l'immobilier et des participations non cotées à mon portefeuille DonkyCapital ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui. DonkyCapital permet d'enregistrer n'importe quel actif non coté (immobilier, private equity, art, objets de collection, prêts P2P) dans la section « My Unlisted Assets ». Une fois créé, vous pouvez enregistrer des transactions d'achat, mettre à jour le prix manuellement dans le temps et comptabiliser les revenus comme des dividendes.",
        },
      },
      {
        '@type': 'Question',
        name: "Comment mettre à jour le prix d'un actif non coté dans DonkyCapital ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Depuis la section « My Unlisted Assets », cliquez sur l'icône d'horloge à côté de l'actif pour ouvrir le panneau « Price History ». Vous pouvez y ajouter un nouveau prix avec sa date de mise à jour. Le portefeuille reflète automatiquement la nouvelle valeur.",
        },
      },
      {
        '@type': 'Question',
        name: 'Comment enregistrer des loyers ou des dividendes provenant d\'actifs non cotés ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Dans le modal « Add Transaction », sélectionnez le type « Dividend » et choisissez l'actif non coté. Entrez la quantité, le revenu par unité et la date. Le total est calculé automatiquement et apparaît dans le registre des transactions du portefeuille.",
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: "Comment suivre un actif non coté dans DonkyCapital",
    description: "Guide étape par étape pour enregistrer et suivre des actifs non cotés (immobilier, startups, art) dans DonkyCapital.",
    step: [
      { '@type': 'HowToStep', name: "Créer l'actif dans My Unlisted Assets", text: "Aller dans « My Unlisted Assets » et cliquer « + ADD NEW ASSET ». Entrer nom, symbole et devise." },
      { '@type': 'HowToStep', name: "Enregistrer la transaction d'achat", text: "Dans « Add Transaction » sélectionner type « Buy Asset » et l'onglet « Unlisted ». Choisir l'actif, entrer prix, quantité et date." },
      { '@type': 'HowToStep', name: "Mettre à jour le prix dans le temps", text: "Dans le panneau « Price History » cliquer « ADD NEW PRICE » pour entrer la nouvelle valorisation." },
      { '@type': 'HowToStep', name: "Enregistrer les revenus", text: "Dans « Add Transaction » sélectionner type « Dividend », choisir l'actif et entrer le revenu par unité et la date." },
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
