import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { commonMistakesSlugs } from '@/lib/pages/common-mistakes-slugs'
import CommonMistakesContent from '@/components/guides/CommonMistakesContent'

const THIS_SLUG = 'errores-seguimiento-cartera'
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
  Object.entries(commonMistakesSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: '5 Errores Fatales al Rastrear tu Cartera (Que Cuestan Miles de Euros) | DonkyCapital',
    description: 'Análisis de 500+ carteras reales: descubre los 5 errores más comunes en el seguimiento de cartera que cuestan miles de euros. Comisiones ocultas, rentabilidades distorsionadas, dividendos ignorados y cómo evitarlos.',
    alternateLanguages,
  })
}

export default async function ErroresSeguimientoCarteraPage({
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
        name: '¿Cuál es el error más común al rastrear una cartera?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El error más común es no incluir las comisiones de transacción en el cálculo de la rentabilidad. En una cartera activa, las comisiones pueden restar entre el 1-3% anual de la rentabilidad real — un impacto enorme a largo plazo gracias al efecto del interés compuesto.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo se calcula correctamente la rentabilidad de una cartera?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Para una comparación precisa con los benchmarks, hay que usar el TWRR (Time-Weighted Rate of Return), no el simple porcentaje de ganancia. El TWRR elimina el efecto de tus depósitos y retiradas, aislando solo el rendimiento de los activos. DonkyCapital calcula automáticamente TWRR y MWRR.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Deben incluirse los dividendos en el cálculo de la rentabilidad?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutamente sí. Ignorar los dividendos puede subestimar la rentabilidad real entre un 2-4% anual para una cartera orientada a ingresos. Muchos trackers solo muestran la rentabilidad por precio (price return) en lugar del rendimiento total que incluye los dividendos reinvertidos.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo gestionar el riesgo de cambio de divisa en la cartera?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Es esencial monitorizar por separado la rentabilidad en divisa local y la rentabilidad convertida a tu divisa de referencia. Una acción estadounidense que sube un 10% puede dar una rentabilidad negativa en euros si el dólar se deprecia un 15%. Un buen tracker siempre muestra ambas vistas.',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Cómo evitar los errores más comunes en el seguimiento de cartera',
    description: 'Guía práctica para rastrear correctamente una cartera de inversiones y evitar los 5 errores que cuestan miles de euros.',
    step: [
      { '@type': 'HowToStep', name: 'Incluir siempre las comisiones', text: 'Registra cada comisión de transacción, tasa de custodia y spread bid-ask en tu tracker para ver la rentabilidad neta real.' },
      { '@type': 'HowToStep', name: 'Usar el TWRR para medir la rentabilidad', text: 'Sustituye el simple porcentaje de ganancia por el TWRR para comparar tu cartera con los benchmarks correctamente.' },
      { '@type': 'HowToStep', name: 'Registrar todos los dividendos', text: 'Añade cada dividendo recibido como transacción en el tracker para tener el rendimiento total completo.' },
      { '@type': 'HowToStep', name: 'Monitorizar la exposición a divisas', text: 'Verifica el porcentaje de activos en divisa extranjera y monitoriza la rentabilidad por separado en divisa local y de referencia.' },
      { '@type': 'HowToStep', name: 'Establecer un benchmark', text: 'Compara siempre tu cartera con un benchmark apropiado (ej. MSCI World para una cartera global) para evaluar si realmente estás creando valor.' },
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
