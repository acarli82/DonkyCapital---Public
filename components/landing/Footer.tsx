import Link from 'next/link'
import type { Dictionary } from '@/lib/i18n/getDictionary'
import type { Locale } from '@/lib/i18n/config'
import { scalableCapitalSlugs } from '@/lib/pages/scalable-capital-slugs'
import { degiroSlugs } from '@/lib/pages/degiro-slugs'
import { finecoSlugs } from '@/lib/pages/fineco-slugs'
import { multiBrokerSlugs } from '@/lib/pages/multi-broker-slugs'
import { vsGetquinSlugs } from '@/lib/pages/vs-getquin-slugs'
import { capitalManagementSlugs } from '@/lib/pages/capital-management-slugs'
import { roiGuideSlugs } from '@/lib/pages/roi-guide-slugs'
import { commonMistakesSlugs } from '@/lib/pages/common-mistakes-slugs'
import { benchmarkGuideSlugs } from '@/lib/pages/benchmark-guide-slugs'
import { unlistedGuideSlugs } from '@/lib/pages/unlisted-guide-slugs'
import { cryptoGuideSlugs } from '@/lib/pages/crypto-guide-slugs'

interface FooterProps {
  dict: Dictionary
  lang: Locale
}

const socialLinks = [
  {
    name: 'X',
    url: 'https://x.com/donkycapital',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/donkycapital/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    )
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61585902694693',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/donkycapital',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
]

export default function Footer({ dict, lang }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-24 pt-16 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">{dict.appName}</h3>
          <p className="text-sm text-white/80 mb-4">{dict.tagline}</p>
          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white/80 hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Company Section */}
        <div>
          <h4 className="font-semibold mb-4">{dict.landing.footer.company}</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link href={`/${lang}/about`} className="hover:text-white transition-colors">
                {dict.landing.footer.aboutUs}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/contact`} className="hover:text-white transition-colors">
                {dict.landing.footer.contact}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/early-access`} className="hover:text-white transition-colors">
                Early Access
              </Link>
            </li>
          </ul>
        </div>

        {/* Guides Section */}
        <div>
          <h4 className="font-semibold mb-4">{dict.landing.footer.platforms}</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link href={`/${lang}/${multiBrokerSlugs[lang]}`} className="hover:text-white transition-colors">
                Portfolio Tracking
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/${scalableCapitalSlugs[lang]}`} className="hover:text-white transition-colors">
                Scalable Capital
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/${degiroSlugs[lang]}`} className="hover:text-white transition-colors">
                Degiro
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/${finecoSlugs[lang]}`} className="hover:text-white transition-colors">
                Fineco
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/${vsGetquinSlugs[lang]}`} className="hover:text-white transition-colors">
                DonkyCapital vs Getquin
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/${capitalManagementSlugs[lang]}`} className="hover:text-white transition-colors">
                {lang === 'it' ? 'Ribilanciamento Portafoglio' :
                 lang === 'de' ? 'Portfolio Rebalancing' :
                 lang === 'fr' ? 'Rééquilibrage Portefeuille' :
                 lang === 'es' ? 'Rebalancear Cartera' :
                 'Portfolio Rebalancing'}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/${roiGuideSlugs[lang]}`} className="hover:text-white transition-colors">
                {lang === 'it' ? 'ROI, TWR e IRR' :
                 lang === 'de' ? 'ROI, TWR und IRR' :
                 lang === 'fr' ? 'ROI, TWR et IRR' :
                 lang === 'es' ? 'ROI, TWR e IRR' :
                 'ROI, TWR & IRR'}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/${commonMistakesSlugs[lang]}`} className="hover:text-white transition-colors">
                {lang === 'it' ? '5 Errori Portfolio Tracking' :
                 lang === 'de' ? '5 Fehler Portfolio-Tracking' :
                 lang === 'fr' ? '5 Erreurs Suivi Portefeuille' :
                 lang === 'es' ? '5 Errores Seguimiento Cartera' :
                 '5 Portfolio Tracking Mistakes'}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/${benchmarkGuideSlugs[lang]}`} className="hover:text-white transition-colors">
                {lang === 'it' ? 'Battere l\'Inflazione con Benchmarks' :
                 lang === 'de' ? 'Inflation mit Benchmarks schlagen' :
                 lang === 'fr' ? 'Battre l\'Inflation avec Benchmarks' :
                 lang === 'es' ? 'Batir la Inflación con Benchmarks' :
                 'Beat Inflation with Benchmarks'}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/${unlistedGuideSlugs[lang]}`} className="hover:text-white transition-colors">
                {lang === 'it' ? 'Asset Non Quotati' :
                 lang === 'de' ? 'Nicht börsennotierte Assets' :
                 lang === 'fr' ? 'Actifs Non Cotés' :
                 lang === 'es' ? 'Activos No Cotizados' :
                 'Unlisted Assets'}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/${cryptoGuideSlugs[lang]}`} className="hover:text-white transition-colors">
                {lang === 'it' ? 'Monitorare Crypto' :
                 lang === 'de' ? 'Krypto verfolgen' :
                 lang === 'fr' ? 'Suivre les Cryptos' :
                 lang === 'es' ? 'Monitorizar Crypto' :
                 'Track Crypto'}
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h4 className="font-semibold mb-4">{dict.landing.footer.legal}</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link href={`/${lang}/privacy-policy`} className="hover:text-white transition-colors">
                {dict.landing.footer.privacyPolicy}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/terms-and-conditions`} className="hover:text-white transition-colors">
                {dict.landing.footer.termsAndConditions}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Security Badges */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 text-xs text-white/80">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          <span>{dict.landing.footer.secureConnection}</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <span>{dict.landing.footer.protectedData}</span>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-8 border-t border-white/5 text-center">
        <p className="text-xs text-white/60">
          {dict.landing.footer.copyright.replace('{{year}}', currentYear.toString())}
        </p>
      </div>
    </footer>
  )
}
