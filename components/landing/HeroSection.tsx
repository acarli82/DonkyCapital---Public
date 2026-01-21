import Link from 'next/link'
import OptimizedImage from '@/components/common/OptimizedImage'
import type { Dictionary } from '@/lib/i18n/getDictionary'
import type { Locale } from '@/lib/i18n/config'

interface HeroSectionProps {
  dict: Dictionary
  lang: Locale
}

export default function HeroSection({ dict, lang }: HeroSectionProps) {
  return (
    <section className="mb-8">
      <div className="bg-gradient-to-br from-primary/5 to-green-600/5 rounded-[10px] p-6 md:p-9 shadow-lg border border-white/[0.03] animate-fade-up">
        {/* Badge */}
        <div className="inline-block bg-card px-3 py-1.5 rounded-full text-white/60 text-[13px] mb-3">
          {dict.landing.hero.badge}
        </div>

        {/* Title - H1 for SEO */}
        <h1 className="text-2xl md:text-[28px] leading-tight font-bold mb-3">
          <span className="gradient-text">
            {dict.landing.hero.title}
          </span>
          {' '}{dict.landing.hero.titleSuffix}
        </h1>

        {/* Description */}
        <p className="text-white/70 mb-5 max-w-[720px]">
          {dict.landing.hero.description}
        </p>

        {/* CTA Button */}
        <div className="flex flex-wrap gap-2.5 mt-1.5">
          <Link
            href={`/${lang}/early-access`}
            className="px-6 py-2.5 rounded-[10px] font-semibold btn-gradient animate-pulse-glow text-white"
          >
            {dict.landing.hero.ctaButton}
          </Link>
        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap gap-3 items-center mt-4 text-white/60 text-[13px]">
          <div className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>{dict.landing.hero.gdprCompliant}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <span>{dict.landing.hero.encryptedData}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <span>{dict.landing.hero.multiLanguage}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
            <span>{dict.landing.hero.multiCurrency}</span>
          </div>
        </div>

        {/* Preview Image */}
        <div className="mt-5 rounded-lg overflow-visible">
          <div className="relative flex items-center justify-center min-h-[200px] md:min-h-[400px] rounded-lg">
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] bg-[radial-gradient(circle,rgba(16,185,129,0.3)_0%,transparent_70%)] blur-[40px] animate-pulse-glow" />
            <OptimizedImage
              src="/assets/dashboard/dashboard.png"
              alt="Dashboard DonkyCapital con analisi performance portafoglio, heatmap settori e grafici investimenti personalizzabili"
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-lg relative z-10 drop-shadow-[0_20px_60px_rgba(16,185,129,0.2)]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
