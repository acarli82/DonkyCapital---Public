import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { capitalManagementSlugs } from '@/lib/pages/capital-management-slugs'
import CapitalManagementContent from '@/components/guides/CapitalManagementContent'

const THIS_SLUG = 'reequilibrage-portefeuille'
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
  Object.entries(capitalManagementSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: 'Comment Rééquilibrer son Portefeuille d\'Investissement | Guide 2026 | DonkyCapital',
    description: 'Découvrez pourquoi le rééquilibrage de portefeuille est essentiel et comment le faire automatiquement avec DonkyCapital. Guide pratique avec stratégies pour ETF et actions.',
    alternateLanguages,
  })
}

export default async function ReequilibragePage({
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
        name: 'À quelle fréquence dois-je rééquilibrer mon portefeuille ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pour la plupart des investisseurs, une révision trimestrielle est suffisante. L\'essentiel est de définir un seuil de dérive (ex. ±5 %) au-delà duquel agir. Rééquilibrer trop souvent augmente les frais de transaction et peut générer des plus-values imposables inutiles.',
        },
      },
      {
        '@type': 'Question',
        name: 'Vaut-il mieux rééquilibrer uniquement par achats ou aussi par ventes ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cela dépend de votre phase d\'investissement. En phase d\'accumulation, le buy-only rebalancing est souvent préférable car il évite l\'imposition des plus-values. Si la dérive est très importante ou en phase de décumulation, le rééquilibrage complet est plus approprié.',
        },
      },
      {
        '@type': 'Question',
        name: 'Le rééquilibrage de portefeuille génère-t-il des impôts ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui : toute vente d\'instruments financiers avec une plus-value est soumise à l\'impôt sur les gains en capital. C\'est pourquoi le buy-only rebalancing est souvent recommandé en phase d\'accumulation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Le Capital Management fonctionne-t-il avec tous les courtiers ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui. Le Capital Management de DonkyCapital fonctionne avec tous les portefeuilles chargés sur la plateforme, quel que soit le courtier : Fineco, DeGiro, Scalable Capital, Directa et autres.',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Rééquilibrer son portefeuille avec DonkyCapital',
    description: 'Guide pas à pas pour utiliser le Capital Management de DonkyCapital afin de rééquilibrer votre portefeuille d\'investissement.',
    step: [
      { '@type': 'HowToStep', name: 'Ouvrir Capital Management', text: 'Depuis votre portefeuille DonkyCapital, ouvrez la fonctionnalité Capital Management.' },
      { '@type': 'HowToStep', name: 'Choisir le mode', text: 'Sélectionnez Increase Capital, Reduce Capital ou Rebalance.' },
      { '@type': 'HowToStep', name: 'Saisir les paramètres', text: 'Pour Increase/Reduce : saisir le montant. Pour Rebalance : sélectionner le portefeuille de référence et la date.' },
      { '@type': 'HowToStep', name: 'Calculer et télécharger les ordres', text: 'Appuyez sur Calculer, téléchargez le CSV et passez les ordres chez votre courtier.' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <CapitalManagementContent lang="fr" />
    </>
  )
}
