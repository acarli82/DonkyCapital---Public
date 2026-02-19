import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { benchmarkGuideSlugs } from '@/lib/pages/benchmark-guide-slugs'
import BenchmarkGuideContent from '@/components/guides/BenchmarkGuideContent'

const THIS_SLUG = 'batir-inflacion-cartera'
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
  Object.entries(benchmarkGuideSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: 'Cómo Batir la Inflación con tu Cartera: Benchmarks HICP en DonkyCapital',
    description: 'Aprende a usar los benchmarks HICP de Eurostat en DonkyCapital para monitorizar la rentabilidad real de tu cartera año a año. Guía paso a paso con capturas de pantalla.',
    alternateLanguages,
  })
}

export default async function BatirInflacionCarteraPage({
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
        name: '¿Cómo se monitoriza la inflación en una cartera con DonkyCapital?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'DonkyCapital permite añadir el IPCA (Índice de Precios al Consumo Armonizado) como benchmark en el widget Performance Timeline. Una vez configurado, el gráfico muestra la línea de inflación superpuesta a las barras de rentabilidad anual.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué es el IPCA y por qué usarlo como benchmark?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El IPCA (Índice de Precios al Consumo Armonizado) es el principal indicador de inflación de la UE, calculado por Eurostat. Usarlo como benchmark permite comparar la rentabilidad nominal de la cartera con la erosión del poder adquisitivo, obteniendo la rentabilidad real.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué benchmarks están disponibles en DonkyCapital?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'DonkyCapital ofrece benchmarks Index (S&P 500, EURO STOXX 50, DAX, FTSE 100, FTSE MIB, CAC 40, IBEX 35, Dow Jones, Russell 2000) y Macro (IPCA EU, IPCA Italia, IPCA Alemania, IPCA Francia, IPCA España).',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Cómo configurar el benchmark IPCA en DonkyCapital',
    description: 'Guía paso a paso para configurar el IPCA como benchmark en el widget Performance Timeline de DonkyCapital.',
    step: [
      { '@type': 'HowToStep', name: 'Abre el widget Performance Timeline', text: 'Accede a tu dashboard de DonkyCapital y localiza el widget Performance Timeline.' },
      { '@type': 'HowToStep', name: 'Abre la configuración del widget', text: 'Haz clic en el icono de engranaje en la parte superior derecha del widget.' },
      { '@type': 'HowToStep', name: 'Selecciona el benchmark IPCA', text: 'En la sección Benchmark, selecciona "HICP European Union" del menú desplegable.' },
      { '@type': 'HowToStep', name: 'Guarda los cambios', text: 'Haz clic en "Save Changes". El gráfico mostrará inmediatamente la línea de inflación superpuesta a la rentabilidad.' },
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
