import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { excelVsSoftwareSlugs } from '@/lib/pages/excel-vs-software-slugs'
import ExcelVsSoftwareContent from '@/components/guides/ExcelVsSoftwareContent'

const THIS_SLUG = 'excel-vs-logiciel-suivi-portefeuille'
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
  Object.entries(excelVsSoftwareSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: 'Excel vs Logiciel : le vrai coût du suivi de portefeuille maison | DonkyCapital',
    description: 'Calculez le coût réel d\'Excel pour gérer votre portefeuille : temps perdu, taux d\'erreur et analyse ROI. Découvrez pourquoi un logiciel dédié est rentable dès le premier mois.',
    alternateLanguages,
  })
}

export default async function ExcelVsSoftwareFrPage({
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
        name: 'Puis-je importer mon portefeuille Excel dans DonkyCapital ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui. DonkyCapital supporte l\'import de fichiers CSV depuis de nombreux courtiers (Degiro, Scalable, Fineco et autres). Tu peux aussi saisir les transactions manuellement ou importer depuis un tableau Excel structuré.',
        },
      },
      {
        '@type': 'Question',
        name: 'Excel est-il vraiment si sujet aux erreurs dans la gestion de portefeuille ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La recherche académique le confirme : 94% des feuilles Excel complexes contiennent au moins une erreur. Pour les portefeuilles financiers avec des formules de performance, le risque est réel surtout après des événements corporatifs comme les splits, spin-offs et dividendes exceptionnels.',
        },
      },
      {
        '@type': 'Question',
        name: 'Combien de temps économise-t-on avec DonkyCapital par rapport à Excel ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'En moyenne, un investisseur gérant 20 titres économise entre 85 et 175 minutes par mois : les mises à jour de cours, calculs de performance et génération de rapports sont automatiques. Sur l\'année, c\'est 10 à 20 heures récupérées.',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Comment migrer son portefeuille d\'Excel vers DonkyCapital',
    description: 'Guide pas à pas pour arrêter d\'utiliser Excel et commencer à suivre son portefeuille avec DonkyCapital.',
    step: [
      { '@type': 'HowToStep', name: 'Exporter le CSV depuis le courtier', text: 'La plupart des courtiers (Degiro, Scalable, Fineco) permettent d\'exporter l\'historique des transactions en CSV.' },
      { '@type': 'HowToStep', name: 'Importer dans DonkyCapital', text: 'Connecte-toi à DonkyCapital, crée un portefeuille et utilise la fonction d\'import CSV pour charger automatiquement toutes tes transactions.' },
      { '@type': 'HowToStep', name: 'Ajouter les actifs non standards', text: 'Pour les actifs non couverts par l\'import (cryptos non cotées, immobilier, private equity), ajoute-les manuellement comme actifs non cotés.' },
      { '@type': 'HowToStep', name: 'Vérifier la réconciliation', text: 'Compare le total du portefeuille dans DonkyCapital avec ton relevé courtier pour vérifier que tout a été importé correctement.' },
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
