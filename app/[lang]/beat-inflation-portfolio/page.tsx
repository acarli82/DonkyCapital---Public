import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { i18n, type Locale } from '@/lib/i18n/config'
import { generatePageMetadata } from '@/lib/seo/metadata-helper'
import { benchmarkGuideSlugs } from '@/lib/pages/benchmark-guide-slugs'
import BenchmarkGuideContent from '@/components/guides/BenchmarkGuideContent'

const THIS_SLUG = 'beat-inflation-portfolio'
const CORRECT_LOCALE: Locale = 'en'

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
    title: 'How to Beat Inflation with Your Portfolio: HICP Benchmarks in DonkyCapital',
    description: 'Learn how to use Eurostat HICP benchmarks in DonkyCapital to monitor your portfolio\'s real return year by year. Step-by-step guide with screenshots.',
    alternateLanguages,
  })
}

export default async function BeatInflationPortfolioPage({
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
        name: 'How do you monitor inflation in a portfolio with DonkyCapital?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'DonkyCapital allows you to add the HICP (Harmonised Index of Consumer Prices) as a benchmark in the Performance Timeline widget. Once configured, the chart shows the inflation line overlaid on the annual return bars, making real return immediately visible.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is HICP and why use it as a benchmark?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The HICP (Harmonised Index of Consumer Prices) is the main inflation indicator in the European Union, calculated by Eurostat. Using it as a benchmark allows you to compare the nominal return of your portfolio with the erosion of purchasing power, obtaining the real return.',
        },
      },
      {
        '@type': 'Question',
        name: 'What benchmarks are available in DonkyCapital?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'DonkyCapital offers Index benchmarks (S&P 500, EURO STOXX 50, DAX, FTSE 100, FTSE MIB, CAC 40, IBEX 35, Dow Jones, Russell 2000) and Macro benchmarks (HICP EU, HICP Italy, HICP Germany, HICP France, HICP Spain).',
        },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to configure the HICP benchmark in DonkyCapital',
    description: 'Step-by-step guide to setting up HICP as a benchmark in DonkyCapital\'s Performance Timeline widget.',
    step: [
      { '@type': 'HowToStep', name: 'Open the Performance Timeline widget', text: 'Access your DonkyCapital dashboard and locate the Performance Timeline widget.' },
      { '@type': 'HowToStep', name: 'Open widget settings', text: 'Click the gear icon in the top right of the widget.' },
      { '@type': 'HowToStep', name: 'Select the HICP benchmark', text: 'In the Benchmark section, select "HICP European Union" from the dropdown menu.' },
      { '@type': 'HowToStep', name: 'Save changes', text: 'Click "Save Changes". The chart will immediately show the inflation line overlaid on the return.' },
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
