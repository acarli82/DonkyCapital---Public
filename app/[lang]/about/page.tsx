import type { Metadata } from 'next'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { i18n, type Locale } from '@/lib/i18n/config'
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
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}/about`
  })

  return {
    title: dict.seo.about.title,
    description: dict.seo.about.description,
    alternates: {
      canonical: `https://www.donkycapital.com/${lang}/about`,
      languages: {
        ...alternateLanguages,
        'x-default': 'https://www.donkycapital.com/en/about',
      },
    },
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <>
      <JsonLd dict={dict} page="about" />

      <div className="py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {dict.about.h1}
          </h1>
          <p className="text-lg text-white/80">
            {dict.about.pageSubtitle}
          </p>
        </div>

        {/* Origin Story Section */}
        <section className="mb-12">
          <div className="card p-6">
            <p className="text-white/80 leading-relaxed">
              {dict.about.h1Text}
            </p>
          </div>
        </section>

        {/* Security Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{dict.about.h2Security}</h2>
          <div className="card p-6">
            <p className="text-white/80 leading-relaxed">
              {dict.about.h2SecurityText}
            </p>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-4">{dict.about.h3Dashboard}</h3>
          <div className="card p-6">
            <p className="text-white/80 leading-relaxed">
              {dict.about.h3DashboardText}
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
