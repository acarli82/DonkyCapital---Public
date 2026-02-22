import Link from 'next/link'
import ZoomableImage from '@/components/common/ZoomableImage'
import type { Locale } from '@/lib/i18n/config'
import { unlistedGuideTranslations } from '@/lib/content/unlisted-guide-content'

interface Props {
  lang: Locale
}

export default function UnlistedGuideContent({ lang }: Props) {
  const t = unlistedGuideTranslations[lang]

  return (
    <div className="py-8">

      {/* Page Header */}
      <div className="mb-12">
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-4">
          {t.badge}
        </span>
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          {t.h1}{' '}
          <span className="text-primary">{t.h1Highlight}</span>
        </h1>
        <p className="text-lg text-white/70 leading-relaxed mb-4">{t.intro1}</p>
        <p className="text-base text-white/60 leading-relaxed">{t.intro2}</p>
      </div>

      {/* Section 1 — What are unlisted assets */}
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.s1Title}</h2>
        <p className="text-white/70 leading-relaxed mb-6">{t.s1Body}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {t.s1Examples.map(([label, description]) => (
            <div key={label} className="card p-4 border border-white/10 bg-white/3 rounded-xl">
              <p className="font-semibold text-primary mb-1">{label}</p>
              <p className="text-sm text-white/60">{description}</p>
            </div>
          ))}
        </div>

        <div className="card p-4 border border-primary/30 bg-primary/5 rounded-xl">
          <p className="text-sm text-primary/90 leading-relaxed">{t.s1Note}</p>
        </div>
      </section>

      {/* Section 2 — Create the unlisted asset */}
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.s2Title}</h2>
        <p className="text-white/70 leading-relaxed mb-6">{t.s2Intro}</p>

        <ol className="space-y-3 mb-8">
          {t.s2Steps.map((step, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/20 text-primary font-bold text-sm shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-white/80">{step}</span>
            </li>
          ))}
        </ol>

        <div className="rounded-xl overflow-hidden border border-white/10 my-6">
          <ZoomableImage
            src="/assets/guides/unlisted/myunlistedasset.webp"
            alt={t.s2ImgAlt}
            width={1540}
            height={160}
          />
        </div>
        <p className="text-white/50 text-sm text-center -mt-4 mb-6">{t.s2ImgCaption}</p>

        <div className="card p-4 border border-yellow-500/30 bg-yellow-500/5 rounded-xl">
          <p className="text-yellow-400 text-sm font-semibold mb-1">💡 Tip</p>
          <p className="text-sm text-white/70">{t.s2Tip}</p>
        </div>
      </section>

      {/* Section 3 — Record the buy */}
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.s3Title}</h2>
        <p className="text-white/70 leading-relaxed mb-6">{t.s3Body}</p>

        <ol className="space-y-3 mb-8">
          {t.s3Steps.map((step, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/20 text-primary font-bold text-sm shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-white/80">{step}</span>
            </li>
          ))}
        </ol>

        <div className="rounded-xl overflow-hidden border border-white/10 my-6 max-w-lg mx-auto">
          <ZoomableImage
            src="/assets/guides/unlisted/buy_asset_unlisted.webp"
            alt={t.s3ImgAlt}
            width={574}
            height={490}
          />
        </div>
        <p className="text-white/50 text-sm text-center -mt-4 mb-6">{t.s3ImgCaption}</p>
      </section>

      {/* Section 4 — Update price over time */}
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.s4Title}</h2>
        <p className="text-white/70 leading-relaxed mb-6">{t.s4Body}</p>

        <ol className="space-y-3 mb-8">
          {t.s4Steps.map((step, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/20 text-primary font-bold text-sm shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-white/80">{step}</span>
            </li>
          ))}
        </ol>

        <div className="rounded-xl overflow-hidden border border-white/10 my-6">
          <ZoomableImage
            src="/assets/guides/unlisted/pricehistory.webp"
            alt={t.s4ImgAlt}
            width={1143}
            height={347}
          />
        </div>
        <p className="text-white/50 text-sm text-center -mt-4 mb-6">{t.s4ImgCaption}</p>

        <div className="card p-4 border border-yellow-500/30 bg-yellow-500/5 rounded-xl">
          <p className="text-yellow-400 text-sm font-semibold mb-1">💡 Tip</p>
          <p className="text-sm text-white/70">{t.s4Tip}</p>
        </div>
      </section>

      {/* Section 5 — Record income */}
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.s5Title}</h2>
        <p className="text-white/70 leading-relaxed mb-6">{t.s5Body}</p>

        <ol className="space-y-3 mb-8">
          {t.s5Steps.map((step, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/20 text-primary font-bold text-sm shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-white/80">{step}</span>
            </li>
          ))}
        </ol>

        <div className="rounded-xl overflow-hidden border border-white/10 my-6 max-w-lg mx-auto">
          <ZoomableImage
            src="/assets/guides/unlisted/add_for_example_also_dividend.webp"
            alt={t.s5ImgAlt}
            width={574}
            height={490}
          />
        </div>
        <p className="text-white/50 text-sm text-center -mt-4 mb-6">{t.s5ImgCaption}</p>

        <ul className="space-y-2">
          {t.s5Examples.map((ex, i) => (
            <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
              <span className="text-primary mt-0.5 shrink-0">→</span>
              <span>{ex}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 6 — Full picture */}
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.s6Title}</h2>
        <p className="text-white/70 leading-relaxed mb-8">{t.s6Body}</p>

        <div className="rounded-xl overflow-hidden border border-white/10 my-6">
          <ZoomableImage
            src="/assets/guides/unlisted/track_all_your_contability.webp"
            alt={t.s6ImgTxAlt}
            width={1540}
            height={560}
          />
        </div>
        <p className="text-white/50 text-sm text-center -mt-4 mb-8">{t.s6ImgTxCaption}</p>

        <div className="rounded-xl overflow-hidden border border-white/10 my-6">
          <ZoomableImage
            src="/assets/guides/unlisted/portfolio-trends.webp"
            alt={t.s6ImgTrendAlt}
            width={1540}
            height={730}
          />
        </div>
        <p className="text-white/50 text-sm text-center -mt-4 mb-6">{t.s6ImgTrendCaption}</p>

        <div className="card p-5 border border-primary/20 bg-primary/5 rounded-xl">
          <p className="text-primary/90 leading-relaxed">{t.s6Summary}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">{t.faqTitle}</h2>
        <div className="space-y-4">
          {t.faqItems.map((item, i) => (
            <details key={i} className="group card border border-white/10 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-4 font-semibold text-white/90 hover:text-white transition-colors list-none">
                <span>{item.q}</span>
                <span className="text-primary text-xl group-open:rotate-45 transition-transform shrink-0 ml-4">+</span>
              </summary>
              <div className="px-4 pb-4 text-white/70 text-sm leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/20 p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.ctaTitle}</h2>
        <p className="text-white/70 mb-6 max-w-xl mx-auto">{t.ctaBody}</p>
        <Link
          href={`/${lang}/early-access`}
          className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors"
        >
          {t.ctaButton}
        </Link>
      </section>

    </div>
  )
}
