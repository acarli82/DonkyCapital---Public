import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { cryptoGuideSlugs } from '@/lib/pages/crypto-guide-slugs'
import CryptoGuideContent from '@/components/guides/CryptoGuideContent'

const THIS_SLUG = 'seguimiento-crypto-cartera'
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
  Object.entries(cryptoGuideSlugs).forEach(([locale, slug]) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/${slug}`
  })

  return generatePageMetadata({
    lang,
    path: `/${THIS_SLUG}`,
    title: 'Cómo Monitorizar las Crypto en tu Cartera: Bitcoin, ETH y Altcoins en DonkyCapital',
    description: 'Guía completa para monitorizar criptomonedas en DonkyCapital junto a acciones, ETFs y activos no cotizados. Añade transacciones, compara rendimientos y gestiona staking rewards.',
    alternateLanguages,
  })
}

export default async function SeguimientoCryptoCarteraPage({
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
        name: '¿Los precios de las criptos se actualizan automáticamente en DonkyCapital?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. A diferencia de los activos no cotizados, las criptomonedas del catálogo tienen precios actualizados automáticamente. No tienes que hacer nada para mantener una valoración actual de tus posiciones.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo registro un staking reward o un airdrop en DonkyCapital?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Usa el tipo de transacción "Dividend" para los staking rewards (equivalente a un dividendo sobre la cripto que tienes). Para un airdrop, usa "Buy Asset" con precio cero o simbólico, o "Dividend" si prefieres tratarlo como ingreso.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué hago si una cripto no está en el catálogo de DonkyCapital?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cuando buscas una cripto y no se encuentra, aparece el banner "Cryptocurrency not found. You can request its addition." con el botón "REQUEST CRYPTOCURRENCY". También puedes añadir la cripto como Unlisted Asset con actualización manual del precio.',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Cómo añadir una criptomoneda a tu cartera en DonkyCapital',
    description: 'Guía paso a paso para monitorizar Bitcoin, Ethereum y altcoins en DonkyCapital.',
    step: [
      { '@type': 'HowToStep', name: 'Abre Add Transaction', text: 'Ve a la sección Transactions de tu cartera y haz clic en "Add Transaction".' },
      { '@type': 'HowToStep', name: 'Selecciona el tab Cryptocurrency', text: 'En el modal, selecciona el tipo "Buy Asset" y luego el tab "Cryptocurrency".' },
      { '@type': 'HowToStep', name: 'Busca y selecciona la cripto', text: 'Busca por nombre o ticker (ej. BTC, ETH, BNB) y selecciona la cripto de la lista.' },
      { '@type': 'HowToStep', name: 'Introduce los detalles', text: 'Introduce cantidad, precio de compra y fecha, luego haz clic en CREATE.' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <CryptoGuideContent lang={lang} />
    </>
  )
}
