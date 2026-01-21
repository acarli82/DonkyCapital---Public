import type { Metadata } from 'next'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { i18n, type Locale } from '@/lib/i18n/config'
import ContactForm from '@/components/forms/ContactForm'
import JsonLd from '@/components/seo/JsonLd'

export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>
}): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const alternateLanguages: Record<string, string> = {}
  i18n.locales.forEach((locale) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/contact`
  })

  return {
    title: dict.seo.contact.title,
    description: dict.seo.contact.description,
    alternates: {
      canonical: `https://www.donkycapital.com/${lang}/contact`,
      languages: {
        ...alternateLanguages,
        'x-default': 'https://www.donkycapital.com/en/contact',
      },
    },
  }
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <>
      <JsonLd dict={dict} page="contact" />

      <div className="py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {dict.contact.pageTitle}
          </h1>
          <p className="text-lg text-white/70">
            {dict.contact.pageSubtitle}
          </p>
        </div>

        <div className="card p-8 md:p-12">
          <h2 className="text-2xl font-semibold mb-8">{dict.contact.formTitle}</h2>
          <ContactForm dict={dict} />
        </div>
      </div>
    </>
  )
}
