import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { capitalManagementSlugs } from '@/lib/pages/capital-management-slugs'
import CapitalManagementContent from '@/components/guides/CapitalManagementContent'

const THIS_SLUG = 'rebalancear-cartera-inversiones'
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
  Object.entries(capitalManagementSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: 'Cómo Rebalancear tu Cartera de Inversiones | Guía 2026 | DonkyCapital',
    description: 'Descubre por qué el rebalanceo de cartera es esencial y cómo hacerlo automáticamente con DonkyCapital. Guía práctica con estrategias para ETFs y acciones.',
    alternateLanguages,
  })
}

export default async function RebalancearCarteraPage({
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
        name: '¿Con qué frecuencia debo rebalancear mi cartera?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Para la mayoría de los inversores, una revisión trimestral es suficiente. Lo importante es definir un umbral de deriva (ej. ±5%) a partir del cual actuar. Rebalancear con demasiada frecuencia aumenta los costes de transacción y puede generar plusvalías imponibles innecesarias.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Es mejor rebalancear solo comprando o también vendiendo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Depende de tu fase de inversión. En acumulación con nueva liquidez disponible, el buy-only rebalancing es a menudo preferible porque evita la tributación sobre las plusvalías. Si la deriva es muy amplia o estás en decumulación, el rebalanceo completo es más apropiado.',
        },
      },
      {
        '@type': 'Question',
        name: '¿El rebalanceo de cartera genera impuestos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí: cualquier venta de instrumentos financieros con beneficio está sujeta al impuesto sobre las plusvalías. Por eso el buy-only rebalancing se recomienda a menudo en la fase de acumulación.',
        },
      },
      {
        '@type': 'Question',
        name: '¿El Capital Management funciona con todos los brókers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. El Capital Management de DonkyCapital funciona con todas las carteras cargadas en la plataforma, independientemente del bróker: Fineco, DeGiro, Scalable Capital, Directa y otros.',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Cómo rebalancear tu cartera con DonkyCapital',
    description: 'Guía paso a paso para usar el Capital Management de DonkyCapital y rebalancear tu cartera de inversiones.',
    step: [
      { '@type': 'HowToStep', name: 'Abrir Capital Management', text: 'Desde tu cartera en DonkyCapital, abre la función Capital Management.' },
      { '@type': 'HowToStep', name: 'Elegir el modo', text: 'Selecciona Increase Capital, Reduce Capital o Rebalance.' },
      { '@type': 'HowToStep', name: 'Introducir los parámetros', text: 'Para Increase/Reduce: introduce el importe. Para Rebalance: selecciona la cartera de referencia y la fecha.' },
      { '@type': 'HowToStep', name: 'Calcular y descargar las órdenes', text: 'Pulsa Calcular, descarga el CSV y ejecuta las órdenes en tu bróker.' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <CapitalManagementContent lang="es" />
    </>
  )
}
