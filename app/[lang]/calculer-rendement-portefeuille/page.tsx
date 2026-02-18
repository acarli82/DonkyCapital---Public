import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { roiGuideSlugs } from '@/lib/pages/roi-guide-slugs'
import RoiGuideContent from '@/components/guides/RoiGuideContent'

const THIS_SLUG = 'calculer-rendement-portefeuille'
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
  Object.entries(roiGuideSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: 'Rendement Réel du Portefeuille : ROI vs TWR vs IRR [Avec Exemples] | DonkyCapital',
    description: 'Comprends la différence entre ROI simple, TWR et IRR/MWRR pour calculer avec précision le rendement réel de ton portefeuille. Formules, exemples pratiques et étude de cas.',
    alternateLanguages,
  })
}

export default async function CalculerRendementPortefeuillePage({
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
        name: 'TWRR et MWRR donnent-ils toujours des résultats différents ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non. Si vous avez investi tout le capital en une seule fois sans versements ni retraits ultérieurs, TWRR et MWRR sont identiques. Les différences n'apparaissent qu'en présence de flux de trésorerie multiples dans le temps.",
        },
      },
      {
        '@type': 'Question',
        name: "Quelle est la différence entre MWRR et XIRR d'Excel ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "C'est la même chose exprimée différemment. La fonction XIRR d'Excel calcule le taux de rendement interne en tenant compte des dates exactes de chaque flux — c'est exactement le MWRR. DonkyCapital utilise le même algorithme automatiquement.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quelle métrique utiliser pour me comparer à un ETF ou au MSCI World ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Utilisez toujours le TWRR (ou TWRR annualisé). Les benchmarks comme le MSCI World sont calculés selon la méthode time-weighted. Seul le TWRR garantit une comparaison objective.',
        },
      },
      {
        '@type': 'Question',
        name: 'Si mon TWRR est bien supérieur à mon MWRR, est-ce un problème ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pas nécessairement. Cela signifie que vous avez ajouté du capital à des moments défavorables. C'est une information précieuse, mais ne signifie pas une erreur dans la gestion des actifs.",
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: "Comment calculer le rendement réel d'un portefeuille d'investissement",
    description: 'Guide pour calculer ROI, TWRR et MWRR afin de mesurer précisément la performance du portefeuille.',
    step: [
      { '@type': 'HowToStep', name: 'Calculer le ROI simple', text: 'ROI = (Valeur actuelle − Capital investi) / Capital investi × 100.' },
      { '@type': 'HowToStep', name: 'Calculer le TWRR', text: 'Diviser la période en sous-périodes à chaque flux et multiplier les rendements: TWRR = [(1+R1)×(1+R2)×...×(1+Rn)]−1.' },
      { '@type': 'HowToStep', name: 'Calculer le MWRR/IRR', text: "Utiliser la fonction XIRR d'Excel ou DonkyCapital qui le calcule automatiquement." },
      { '@type': 'HowToStep', name: 'Comparer TWRR et MWRR', text: 'TWRR > MWRR : mauvais timing. MWRR > TWRR : bon timing des versements.' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <RoiGuideContent lang="fr" />
    </>
  )
}
