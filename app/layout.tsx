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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
