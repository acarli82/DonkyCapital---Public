import Link from 'next/link'
import Image from 'next/image'
import type { Dictionary } from '@/lib/i18n/getDictionary'
import type { Locale } from '@/lib/i18n/config'
import LanguageSelector from './LanguageSelector'
import MobileMenu from './MobileMenu'

interface HeaderProps {
  dict: Dictionary
  lang: Locale
}

export default function Header({ dict, lang }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f151d]/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 py-6">
      {/* Logo */}
      <Link
        href={`/${lang}`}
        className="flex items-center gap-3"
        aria-label="DonkyCapital home"
      >
        <Image
          src="/assets/logos/Logo_dark.svg"
          alt="DonkyCapital"
          width={176}
          height={44}
          className="h-11 w-auto object-contain"
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-3">
        <LanguageSelector currentLang={lang} />

        <Link
          href={`/${lang}#features`}
          className="px-4 py-2 rounded-[10px] text-sm font-semibold border border-white/5 hover:border-white/10 hover:bg-white/5 transition-colors"
        >
          {dict.landing.header.features}
        </Link>

        <Link
          href={`/${lang}#pricing`}
          className="px-4 py-2 rounded-[10px] text-sm font-semibold border border-white/5 hover:border-white/10 hover:bg-white/5 transition-colors"
        >
          {dict.landing.header.pricing}
        </Link>

        <a
          href={`https://app.donkycapital.com/${lang}/auth`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-[10px] text-sm font-semibold border border-white/5 hover:border-white/10 hover:bg-white/5 transition-colors"
        >
          {dict.landing.header.login}
        </a>

        <Link
          href={`/${lang}/early-access`}
          className="px-4 py-2 rounded-[10px] text-sm font-semibold btn-gradient text-white"
        >
          {dict.landing.header.startFree}
        </Link>
      </nav>

      {/* Mobile Navigation */}
      <div className="flex md:hidden items-center gap-3">
        <LanguageSelector currentLang={lang} />
        <MobileMenu dict={dict} lang={lang} />
      </div>
      </div>
    </header>
  )
}
