import Link from 'next/link'
import type { Dictionary } from '@/lib/i18n/getDictionary'
import type { Locale } from '@/lib/i18n/config'

interface CTASectionProps {
  dict: Dictionary
  lang: Locale
}

export default function CTASection({ dict, lang }: CTASectionProps) {
  return (
    <section id="cta" className="mt-7">
      <div className="card p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold mb-1.5">
            {dict.landing.cta.title}
          </h2>
          <p className="text-white/60 text-sm">
            {dict.landing.cta.subtitle}
          </p>
        </div>

        <Link
          href={`/${lang}/early-access`}
          className="px-6 py-2.5 rounded-[10px] font-semibold btn-gradient animate-pulse-glow text-white whitespace-nowrap"
        >
          {dict.landing.cta.button}
        </Link>
      </div>
    </section>
  )
}
