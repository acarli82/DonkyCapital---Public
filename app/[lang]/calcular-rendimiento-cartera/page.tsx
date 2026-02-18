import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { roiGuideSlugs } from '@/lib/pages/roi-guide-slugs'
import RoiGuideContent from '@/components/guides/RoiGuideContent'

const THIS_SLUG = 'calcular-rendimiento-cartera'
const CORRECT_LOCALE: Locale = 'es'

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
    title: 'Rendimiento Real del Portfolio: ROI vs TWR vs IRR [Con Ejemplos] | DonkyCapital',
    description: 'Aprende la diferencia entre ROI simple, TWR e IRR/MWRR para calcular con precisión el rendimiento real de tu cartera. Fórmulas, ejemplos prácticos y caso de estudio real.',
    alternateLanguages,
  })
}

export default async function CalcularRendimientoCarteraPage({
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
        name: '¿TWRR y MWRR siempre dan resultados diferentes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Si invertiste todo el capital en una única aportación sin contribuciones ni retiradas posteriores, TWRR y MWRR son idénticos. Las diferencias solo aparecen cuando hay múltiples flujos de caja a lo largo del tiempo.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuál es la diferencia entre MWRR y XIRR de Excel?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Son lo mismo expresado de manera diferente. La función XIRR de Excel calcula la tasa interna de rendimiento teniendo en cuenta las fechas exactas de cada flujo de caja — eso es exactamente el MWRR. DonkyCapital utiliza el mismo algoritmo automáticamente.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué métrica usar para compararme con un ETF o el MSCI World?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Usa siempre el TWRR (o TWRR anualizado). Los benchmarks como el MSCI World se calculan con el método time-weighted. Solo el TWRR garantiza una comparación objetiva.',
        },
      },
      {
        '@type': 'Question',
        name: 'Si mi TWRR es mucho mayor que mi MWRR, ¿es un problema?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No necesariamente. Significa que añadiste capital en momentos desfavorables. Es información valiosa para reflexionar sobre tu enfoque de las aportaciones periódicas, pero no indica un error en la gestión de activos.',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Cómo calcular el rendimiento real de una cartera de inversión',
    description: 'Guía para calcular ROI, TWRR y MWRR y medir con precisión el rendimiento de la cartera.',
    step: [
      { '@type': 'HowToStep', name: 'Calcular el ROI simple', text: 'ROI = (Valor actual − Capital invertido) / Capital invertido × 100.' },
      { '@type': 'HowToStep', name: 'Calcular el TWRR', text: 'Dividir el período en subperíodos en cada flujo y multiplicar los rendimientos: TWRR = [(1+R1)×(1+R2)×...×(1+Rn)]−1.' },
      { '@type': 'HowToStep', name: 'Calcular el MWRR/IRR', text: 'Usa la función XIRR de Excel o DonkyCapital que lo calcula automáticamente.' },
      { '@type': 'HowToStep', name: 'Comparar TWRR y MWRR', text: 'TWRR > MWRR: mal timing. MWRR > TWRR: buen timing de las aportaciones.' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <RoiGuideContent lang="es" />
    </>
  )
}
