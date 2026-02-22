import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { cryptoGuideSlugs } from '@/lib/pages/crypto-guide-slugs'
import CryptoGuideContent from '@/components/guides/CryptoGuideContent'

const THIS_SLUG = 'suivre-crypto-portefeuille'
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
  Object.entries(cryptoGuideSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: 'Suivre les Cryptos dans son Portefeuille : Bitcoin, ETH et Altcoins dans DonkyCapital',
    description: "Guide complet pour suivre les cryptomonnaies dans DonkyCapital aux côtés d'actions, ETF et actifs non cotés. Ajoutez des transactions, comparez les performances et gérez les récompenses de staking.",
    alternateLanguages,
  })
}

export default async function SuivreCryptoPorefeuillePage({
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
        name: 'Les prix des cryptos sont-ils mis à jour automatiquement dans DonkyCapital ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui. Contrairement aux actifs non cotés, les cryptomonnaies du catalogue ont des prix mis à jour automatiquement. Vous n'avez rien à faire pour maintenir une valorisation actuelle de vos positions.",
        },
      },
      {
        '@type': 'Question',
        name: 'Comment enregistrer une récompense de staking ou un airdrop dans DonkyCapital ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Utilisez le type de transaction « Dividend » pour les récompenses de staking (équivalent à un dividende sur la crypto détenue). Pour un airdrop, utilisez « Buy Asset » avec un prix nul ou symbolique, ou « Dividend » si vous préférez le traiter comme un revenu.",
        },
      },
      {
        '@type': 'Question',
        name: "Que faire si une crypto n'est pas dans le catalogue DonkyCapital ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Quand vous cherchez une crypto et qu'elle n'est pas trouvée, la bannière « Cryptocurrency not found. You can request its addition. » apparaît avec le bouton « REQUEST CRYPTOCURRENCY ». Vous pouvez aussi ajouter la crypto comme actif non coté (Unlisted) avec mise à jour manuelle du prix.",
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Comment ajouter une cryptomonnaie à son portefeuille dans DonkyCapital',
    description: 'Guide étape par étape pour suivre Bitcoin, Ethereum et altcoins dans DonkyCapital.',
    step: [
      { '@type': 'HowToStep', name: "Ouvrir Add Transaction", text: "Aller dans la section Transactions du portefeuille et cliquer « Add Transaction »." },
      { '@type': 'HowToStep', name: "Sélectionner l'onglet Cryptocurrency", text: "Dans le modal, sélectionner le type « Buy Asset » puis l'onglet « Cryptocurrency »." },
      { '@type': 'HowToStep', name: "Rechercher et sélectionner la crypto", text: "Rechercher par nom ou ticker (ex. BTC, ETH, BNB) et sélectionner la crypto dans la liste." },
      { '@type': 'HowToStep', name: "Entrer les détails", text: "Entrer la quantité, le prix d'achat et la date, puis cliquer CREATE." },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <CryptoGuideContent lang={lang} />
    </>
  )
}
