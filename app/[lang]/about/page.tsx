import type { Metadata } from 'next'
import Image from 'next/image'
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
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">
              {dict.about.h1}
            </span>
          </h1>
        </div>

        {/* Section 1: Text Left, Image Right */}
        <section className="mb-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              {dict.about.section1Title}
            </h2>
            <p className="text-white/80 leading-relaxed text-lg">
              {dict.about.section1Text}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/aboutus/weare.webp"
              alt={dict.about.section1Title}
              width={400}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </section>

        {/* Section 2: Image Left, Text Right */}
        <section className="mb-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center justify-center order-2 md:order-1">
            <Image
              src="/assets/aboutus/security.webp"
              alt={dict.about.section2Title}
              width={400}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4">
              {dict.about.section2Title}
            </h2>
            <p className="text-white/80 leading-relaxed text-lg">
              {dict.about.section2Text}
            </p>
          </div>
        </section>

        {/* Section 3: Text Left, Image Right */}
        <section className="mb-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              {dict.about.section3Title}
            </h2>
            <p className="text-white/80 leading-relaxed text-lg">
              {dict.about.section3Text}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/aboutus/strategy.webp"
              alt={dict.about.section3Title}
              width={400}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </section>
      </div>
    </>
  )
}
