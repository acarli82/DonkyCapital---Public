import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { excelVsSoftwareSlugs } from '@/lib/pages/excel-vs-software-slugs'
import ExcelVsSoftwareContent from '@/components/guides/ExcelVsSoftwareContent'

const THIS_SLUG = 'excel-vs-software-seguimiento-cartera'
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
  Object.entries(excelVsSoftwareSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: 'Excel vs Software: El verdadero coste del seguimiento manual de cartera | DonkyCapital',
    description: 'Calcula el coste real de usar Excel para gestionar tu cartera: tiempo perdido, tasa de errores y análisis ROI. Descubre por qué el software dedicado es rentable desde el primer mes.',
    alternateLanguages,
  })
}

export default async function ExcelVsSoftwareEsPage({
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
        name: '¿Puedo importar mi cartera de Excel en DonkyCapital?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. DonkyCapital soporta la importación de archivos CSV de muchos brókers (Degiro, Scalable, Fineco y otros). También puedes introducir las transacciones manualmente o importar desde una hoja Excel estructurada.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Es Excel realmente tan propenso a errores en la gestión de cartera?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La investigación académica lo confirma: el 94% de las hojas Excel complejas contienen al menos un error. Para carteras financieras con fórmulas de rendimiento, el riesgo es real especialmente después de eventos corporativos como splits, spin-offs y dividendos especiales.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuánto tiempo se ahorra usando DonkyCapital frente a Excel?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'De media, un inversor que gestiona 20 valores ahorra entre 85 y 175 minutos al mes: la actualización de precios, el cálculo de rendimientos y la generación de informes son automáticos. Anualmente, son 10-20 horas recuperadas.',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Cómo migrar tu cartera de Excel a DonkyCapital',
    description: 'Guía paso a paso para dejar de usar Excel y empezar a rastrear tu cartera con DonkyCapital.',
    step: [
      { '@type': 'HowToStep', name: 'Exportar el CSV desde el bróker', text: 'La mayoría de los brókers (Degiro, Scalable, Fineco) permiten exportar el historial de transacciones en formato CSV.' },
      { '@type': 'HowToStep', name: 'Importar en DonkyCapital', text: 'Accede a DonkyCapital, crea una cartera y usa la función de importación CSV para cargar automáticamente todas tus transacciones.' },
      { '@type': 'HowToStep', name: 'Añadir activos no estándar', text: 'Para activos no cubiertos por la importación (cryptos no cotizadas, inmuebles, private equity), añádelos manualmente como activos no cotizados.' },
      { '@type': 'HowToStep', name: 'Verificar la conciliación', text: 'Compara el total de la cartera en DonkyCapital con tu extracto del bróker para verificar que todo ha sido importado correctamente.' },
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
