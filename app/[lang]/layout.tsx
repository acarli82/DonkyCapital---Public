import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'
import { i18n, type Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/getDictionary'
import Header from '@/components/landing/Header'
import Footer from '@/components/landing/Footer'
import type { Metadata } from 'next'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

// Lazy load non-critical components (equivalent to defer/async for their JS)
const FloatingContactButton = dynamic(
  () => import('@/components/contact/FloatingContactButton'),
  { ssr: false }
)
const CookieConsent = dynamic(
  () => import('@/components/cookies/CookieConsent'),
  { ssr: false }
)
const GoogleAnalytics = dynamic(
  () => import('@/components/analytics/GoogleAnalytics'),
  { ssr: false }
)

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const alternateLanguages: Record<string, string> = {}
  i18n.locales.forEach((locale) => {
    alternateLanguages[locale] = `https://www.donkycapital.com/${locale}`
  })

  // Map language codes to Open Graph locale format
  const ogLocaleMap: Record<Locale, string> = {
    en: 'en_US',
    it: 'it_IT',
    de: 'de_DE',
    fr: 'fr_FR',
    es: 'es_ES',
  }

  return {
    metadataBase: new URL('https://www.donkycapital.com'),
    title: {
      default: dict.seo.home.title,
      template: '%s | DonkyCapital'
    },
    description: dict.seo.home.description,
    keywords: ['portfolio tracker', 'investment management', 'ETF tracker', 'stock portfolio', 'crypto portfolio', 'P&L analysis', 'fintech'],
    authors: [{ name: 'DonkyCapital' }],
    creator: 'DonkyCapital',
    publisher: 'DonkyCapital',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `https://www.donkycapital.com/${lang}`,
      languages: {
        ...alternateLanguages,
        'x-default': 'https://www.donkycapital.com/en',
      },
    },
    openGraph: {
      type: 'website',
      siteName: 'DonkyCapital',
      images: [
        {
          url: '/assets/og-image.png',
          width: 1200,
          height: 630,
          alt: 'DonkyCapital - Portfolio Tracker',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.seo.home.title,
      description: dict.seo.home.description,
      images: ['/assets/twitter-card.png'],
      creator: '@donkycapital',
    },
    other: {
      'Content-Language': lang,
    },
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <html lang={lang} className="dark">
      <head>
        {/* Preconnect to external origins for faster resource loading */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-96x96.png" sizes="96x96" type="image/png" />
        {/* Preload hero image for LCP optimization */}
        <link
          rel="preload"
          as="image"
          href="/assets/dashboard/dashboard.webp"
          type="image/webp"
        />
        {/* Critical CSS inline for faster FCP/LCP - renders above-the-fold immediately */}
        <style dangerouslySetInnerHTML={{ __html: `
          :root{--background:#0f151d;--foreground:#fff;--primary:#10b981;--card:#1c2128;--border:rgba(255,255,255,.03)}
          *{box-sizing:border-box;margin:0;padding:0}
          html,body{max-width:100vw;overflow-x:hidden}
          body{color:var(--foreground);background:var(--background);-webkit-font-smoothing:antialiased}
          .min-h-screen{min-height:100vh}
          .bg-background{background-color:var(--background)}
          .max-w-\\[1200px\\]{max-width:1200px}
          .mx-auto{margin-left:auto;margin-right:auto}
          .px-4{padding-left:1rem;padding-right:1rem}
          .pt-24{padding-top:6rem}
          header{position:fixed;top:0;left:0;right:0;z-index:50;padding:1rem}
          .gradient-text{background:linear-gradient(135deg,#10ad7a 0%,#2464ea 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        `}} />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <div className="min-h-screen bg-background">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <Header dict={dict} lang={lang} />
            <main className="pt-24">{children}</main>
            <Footer dict={dict} lang={lang} />
          </div>
          <FloatingContactButton dict={dict} />
        </div>
        <CookieConsent dict={dict} privacyPolicyUrl={`/${lang}/privacy-policy`} />
      </body>
    </html>
  )
}
