import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.donkycapital.com'),
  title: {
    default: 'DonkyCapital - Monitor, Analyze, Optimize Your Investments',
    template: '%s | DonkyCapital'
  },
  description: 'Take complete control of your investments with DonkyCapital, the most flexible and powerful portfolio tracker on the market.',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.donkycapital.com',
    siteName: 'DonkyCapital',
    title: 'DonkyCapital - Monitor, Analyze, Optimize Your Investments',
    description: 'Take complete control of your investments with DonkyCapital, the most flexible and powerful portfolio tracker on the market.',
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
    title: 'DonkyCapital - Monitor, Analyze, Optimize Your Investments',
    description: 'Take complete control of your investments with DonkyCapital, the most flexible and powerful portfolio tracker on the market.',
    images: ['/assets/twitter-card.png'],
    creator: '@donkycapital',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
