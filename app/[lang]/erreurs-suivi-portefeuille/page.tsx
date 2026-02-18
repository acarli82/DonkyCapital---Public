import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { commonMistakesSlugs } from '@/lib/pages/common-mistakes-slugs'
import CommonMistakesContent from '@/components/guides/CommonMistakesContent'

const THIS_SLUG = 'erreurs-suivi-portefeuille'
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
  Object.entries(commonMistakesSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: "5 Erreurs Fatales de Suivi de Portefeuille (Qui Coûtent des Milliers) | DonkyCapital",
    description: "Analyse de 500+ portefeuilles réels : découvrez les 5 erreurs les plus courantes dans le suivi de portefeuille qui font perdre des milliers d'euros. Frais cachés, rendements faussés, dividendes ignorés et comment les éviter.",
    alternateLanguages,
  })
}

export default async function ErreursSuiviPortefeuillePage({
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
        name: "Quelle est l'erreur la plus courante dans le suivi d'un portefeuille ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "L'erreur la plus courante est de ne pas inclure les frais de transaction dans le calcul du rendement. Sur un portefeuille actif, les frais peuvent soustraire 1 à 3% par an du rendement réel — un impact énorme sur le long terme grâce à l'effet des intérêts composés.",
        },
      },
      {
        '@type': 'Question',
        name: "Comment calculer correctement le rendement d'un portefeuille ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pour une comparaison précise avec les benchmarks, il faut utiliser le TWRR (Time-Weighted Rate of Return), pas le simple pourcentage de gain. Le TWRR élimine l'effet de vos dépôts et retraits, isolant uniquement la performance des actifs. DonkyCapital calcule automatiquement TWRR et MWRR.",
        },
      },
      {
        '@type': 'Question',
        name: "Les dividendes doivent-ils être inclus dans le calcul du rendement ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Absolument oui. Ignorer les dividendes peut sous-estimer le rendement réel de 2 à 4% par an pour un portefeuille orienté revenus. De nombreux trackers affichent uniquement la performance du prix (price return) au lieu du rendement total qui inclut les dividendes réinvestis.",
        },
      },
      {
        '@type': 'Question',
        name: "Comment gérer le risque de change dans un portefeuille ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Il est essentiel de surveiller séparément le rendement en devise locale et le rendement converti dans votre devise de référence. Une action américaine qui monte de 10% peut donner un rendement négatif en euros si le dollar se déprécie de 15%. Un bon tracker montre toujours les deux vues.",
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: "Comment éviter les erreurs les plus courantes dans le suivi de portefeuille",
    description: "Guide pratique pour suivre correctement un portefeuille d'investissement et éviter les 5 erreurs qui coûtent des milliers d'euros.",
    step: [
      { '@type': 'HowToStep', name: 'Toujours inclure les frais', text: "Enregistrez chaque frais de transaction, taxe de garde et spread bid-ask dans votre tracker pour voir le rendement net réel." },
      { '@type': 'HowToStep', name: 'Utiliser le TWRR pour mesurer la performance', text: "Remplacez le simple gain% par le TWRR pour comparer votre portefeuille avec les benchmarks correctement." },
      { '@type': 'HowToStep', name: 'Enregistrer tous les dividendes', text: "Ajoutez chaque dividende reçu comme transaction dans le tracker pour avoir le rendement total complet." },
      { '@type': 'HowToStep', name: "Surveiller l'exposition aux devises", text: "Vérifiez le pourcentage d'actifs en devise étrangère et surveillez le rendement séparément en devise locale et de référence." },
      { '@type': 'HowToStep', name: 'Définir un benchmark', text: "Comparez toujours votre portefeuille avec un benchmark approprié (ex. MSCI World pour un portefeuille mondial) pour évaluer si vous créez vraiment de la valeur." },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <CommonMistakesContent lang={lang} />
    </>
  )
}
