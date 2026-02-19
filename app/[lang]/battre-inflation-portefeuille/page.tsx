import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { benchmarkGuideSlugs } from '@/lib/pages/benchmark-guide-slugs'
import BenchmarkGuideContent from '@/components/guides/BenchmarkGuideContent'

const THIS_SLUG = 'battre-inflation-portefeuille'
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
  Object.entries(benchmarkGuideSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: "Battre l'Inflation avec son Portefeuille : Benchmarks HICP dans DonkyCapital",
    description: "Découvrez comment utiliser les benchmarks HICP d'Eurostat dans DonkyCapital pour surveiller le rendement réel de votre portefeuille année par année. Guide étape par étape avec captures d'écran.",
    alternateLanguages,
  })
}

export default async function BattreInflationPortefeuillePage({
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
        name: "Comment surveiller l'inflation dans un portefeuille avec DonkyCapital ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "DonkyCapital permet d'ajouter l'IPCH (Indice des Prix à la Consommation Harmonisé) comme benchmark dans le widget Performance Timeline. Une fois configuré, le graphique affiche la ligne d'inflation superposée aux barres de rendement annuel.",
        },
      },
      {
        '@type': 'Question',
        name: "Qu'est-ce que l'IPCH et pourquoi l'utiliser comme benchmark ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "L'IPCH (Indice des Prix à la Consommation Harmonisé) est le principal indicateur d'inflation de l'UE, calculé par Eurostat. L'utiliser comme benchmark permet de comparer le rendement nominal du portefeuille avec l'érosion du pouvoir d'achat.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quels benchmarks sont disponibles dans DonkyCapital ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "DonkyCapital propose des benchmarks Index (S&P 500, EURO STOXX 50, DAX, FTSE 100, FTSE MIB, CAC 40, IBEX 35, Dow Jones, Russell 2000) et Macro (IPCH EU, IPCH Italie, IPCH Allemagne, IPCH France, IPCH Espagne).",
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: "Comment configurer le benchmark IPCH dans DonkyCapital",
    description: "Guide étape par étape pour configurer l'IPCH comme benchmark dans le widget Performance Timeline de DonkyCapital.",
    step: [
      { '@type': 'HowToStep', name: 'Ouvrez le widget Performance Timeline', text: 'Accédez à votre tableau de bord DonkyCapital et localisez le widget Performance Timeline.' },
      { '@type': 'HowToStep', name: 'Ouvrez les paramètres du widget', text: "Cliquez sur l'icône d'engrenage en haut à droite du widget." },
      { '@type': 'HowToStep', name: "Sélectionnez le benchmark IPCH", text: 'Dans la section Benchmark, sélectionnez "HICP European Union" dans le menu déroulant.' },
      { '@type': 'HowToStep', name: 'Enregistrez les modifications', text: 'Cliquez sur "Save Changes". Le graphique affichera immédiatement la ligne d\'inflation superposée au rendement.' },
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
