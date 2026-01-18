import type { Metadata } from 'next'
import { getDictionary } from '@/lib/i18n/getDictionary'
import type { Locale } from '@/lib/i18n/config'
import ContactForm from '@/components/forms/ContactForm'
import JsonLd from '@/components/seo/JsonLd'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang)

  return {
    title: dict.seo.contact.title,
    description: dict.seo.contact.description,
    alternates: {
      canonical: `https://www.donkycapital.com/${params.lang}/contact`,
    },
  }
}

export default async function ContactPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <>
      <JsonLd dict={dict} page="contact" />

      <div className="py-8 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            {dict.contact.pageTitle}
          </h1>
          <p className="text-white/70">
            {dict.contact.pageSubtitle}
          </p>
        </div>

        <div className="card p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-6">{dict.contact.formTitle}</h2>
          <ContactForm dict={dict} />
        </div>
      </div>
    </>
  )
}
