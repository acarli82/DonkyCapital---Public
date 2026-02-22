import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { unlistedGuideSlugs } from '@/lib/pages/unlisted-guide-slugs'
import UnlistedGuideContent from '@/components/guides/UnlistedGuideContent'

const THIS_SLUG = 'seguimiento-activos-no-cotizados-cartera'
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
  Object.entries(unlistedGuideSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: 'Cómo Monitorizar Activos No Cotizados en tu Cartera: Inmuebles, PE, Arte en DonkyCapital',
    description: 'Guía completa para registrar y monitorizar activos no cotizados (inmuebles, private equity, arte, startups) en DonkyCapital. Registra compras, actualiza precios y contabiliza ingresos.',
    alternateLanguages,
  })
}

export default async function SeguimientoActivosNoCotizadosCarteraPage({
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
        name: '¿Puedo añadir inmuebles y participaciones no cotizadas a mi cartera en DonkyCapital?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. DonkyCapital permite registrar cualquier activo no cotizado (inmuebles, private equity, arte, objetos de colección, préstamos P2P) en la sección "My Unlisted Assets". Una vez creado, puedes registrar transacciones de compra, actualizar el precio manualmente a lo largo del tiempo y contabilizar los ingresos como dividendos.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo actualizo el precio de un activo no cotizado en DonkyCapital?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Desde la sección "My Unlisted Assets", haz clic en el icono del reloj junto al activo para abrir el panel "Price History". Desde allí puedes añadir un nuevo precio con su fecha de actualización. La cartera refleja automáticamente el nuevo valor.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo registro rentas de alquiler o dividendos de activos no cotizados?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'En el modal "Add Transaction" selecciona el tipo "Dividend" y elige el activo no cotizado. Introduce la cantidad, el ingreso por unidad y la fecha. El total se calcula automáticamente y aparece en el registro de transacciones de la cartera.',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Cómo monitorizar un activo no cotizado en DonkyCapital',
    description: 'Guía paso a paso para registrar y monitorizar activos no cotizados (inmuebles, startups, arte) en DonkyCapital.',
    step: [
      { '@type': 'HowToStep', name: 'Crea el activo en My Unlisted Assets', text: 'Ve a "My Unlisted Assets" y haz clic en "+ ADD NEW ASSET". Introduce nombre, símbolo y divisa.' },
      { '@type': 'HowToStep', name: 'Registra la transacción de compra', text: 'En "Add Transaction" selecciona el tipo "Buy Asset" y el tab "Unlisted". Elige el activo, introduce precio, cantidad y fecha.' },
      { '@type': 'HowToStep', name: 'Actualiza el precio a lo largo del tiempo', text: 'Desde el panel "Price History" haz clic en "ADD NEW PRICE" para introducir la nueva valoración.' },
      { '@type': 'HowToStep', name: 'Registra los ingresos', text: 'En "Add Transaction" selecciona el tipo "Dividend", elige el activo e introduce el ingreso por unidad y la fecha.' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <UnlistedGuideContent lang={lang} />
    </>
  )
}
