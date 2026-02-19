import Link from 'next/link'
import ZoomableImage from '@/components/common/ZoomableImage'
import type { Locale } from '@/lib/i18n/config'
import { commonMistakesTranslations } from '@/lib/content/common-mistakes-content'
import { roiGuideSlugs } from '@/lib/pages/roi-guide-slugs'
import { degiroSlugs } from '@/lib/pages/degiro-slugs'
import { scalableCapitalSlugs } from '@/lib/pages/scalable-capital-slugs'
import { multiBrokerSlugs } from '@/lib/pages/multi-broker-slugs'
import { benchmarkGuideSlugs } from '@/lib/pages/benchmark-guide-slugs'

interface Props {
  lang: Locale
}

export default function CommonMistakesContent({ lang }: Props) {
  const t = commonMistakesTranslations[lang]

  return (
    <div className="py-8">

      {/* Page Header */}
      <div className="mb-10">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-red-500/20 text-red-400 mb-4">
          {t.badge}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          {t.h1}{' '}
          <span className="gradient-text">{t.h1Highlight}</span>
        </h1>
      </div>

      {/* Intro */}
      <div className="space-y-4 mb-10 text-white/80 leading-relaxed text-[15px]">
        <p>{t.intro1}</p>
        <p>{t.intro2}</p>
      </div>

      {/* Table of Contents */}
      <div className="card p-6 bg-red-500/5 border-red-500/20 mb-10">
        <h3 className="text-base font-semibold mb-4 text-red-400">{t.tocTitle}</h3>
        <ol className="space-y-2 list-decimal list-inside text-white/80 text-sm">
          {t.tocItems.map((item, i) => (
            <li key={i}>
              <a href={`#errore-${i + 1}`} className="text-red-400 hover:underline">{item}</a>
            </li>
          ))}
        </ol>
      </div>

      {/* Errore 1 */}
      <section id="errore-1" className="mb-14">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500/20 text-red-400 font-bold text-lg shrink-0">#1</span>
          <h2 className="text-2xl md:text-3xl font-bold">{t.e1Title}</h2>
        </div>

        <div className="space-y-4 text-white/80 leading-relaxed text-[15px]">
          <p>{t.e1Body1}</p>

          <div className="card p-5 border-red-500/20 bg-red-500/5 my-4">
            <p className="text-red-400 text-sm font-semibold mb-3">{t.e1ExTitle}</p>
            <ul className="space-y-2 text-[15px]">
              {t.e1ExItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <p>{t.e1Body2}</p>

          <div className="rounded-xl overflow-hidden border border-white/10 max-w-3xl mx-auto my-6">
            <ZoomableImage
              src="/assets/widgets/transactions-list.webp"
              alt={t.e1ImgAlt}
              width={700}
              height={350}
            />
          </div>
          <p className="text-white/50 text-sm text-center -mt-4 mb-4">
            {t.e1ImgCaption}
          </p>

          <div className="card p-4 border-primary/20 bg-primary/5">
            <p className="text-primary text-sm font-semibold mb-1">{t.fixTitle}</p>
            <p>{t.e1FixBody}</p>
          </div>
        </div>
      </section>

      {/* Errore 2 */}
      <section id="errore-2" className="mb-14">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500/20 text-red-400 font-bold text-lg shrink-0">#2</span>
          <h2 className="text-2xl md:text-3xl font-bold">{t.e2Title}</h2>
        </div>

        <div className="space-y-4 text-white/80 leading-relaxed text-[15px]">
          <p>
            {t.e2Body1}
          </p>
          <p>{t.e2Body2}</p>

          <div className="card p-5 border-red-500/20 bg-red-500/5 my-4">
            <p className="text-red-400 text-sm font-semibold mb-3">{t.e2ExTitle}</p>
            <ul className="space-y-2 text-[15px]">
              {t.e2ExItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl overflow-hidden border border-white/10 max-w-3xl mx-auto my-6">
            <ZoomableImage
              src="/assets/widgets/performance-metrics.webp"
              alt={t.e2ImgAlt}
              width={700}
              height={400}
            />
          </div>
          <p className="text-white/50 text-sm text-center -mt-4 mb-4">
            {t.e2ImgCaption}
          </p>

          <div className="card p-4 border-primary/20 bg-primary/5">
            <p className="text-primary text-sm font-semibold mb-1">{t.fixTitle}</p>
            <p>
              {t.e2FixBefore}<strong>TWRR</strong>{t.e2FixMiddle}<strong>MWRR/IRR</strong>
              {t.e2FixMiddle2}{' '}
              <Link href={`/${lang}/${roiGuideSlugs[lang]}`} className="text-primary hover:underline">
                {t.e2FixLinkText}
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Errore 3 */}
      <section id="errore-3" className="mb-14">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500/20 text-red-400 font-bold text-lg shrink-0">#3</span>
          <h2 className="text-2xl md:text-3xl font-bold">{t.e3Title}</h2>
        </div>

        <div className="space-y-4 text-white/80 leading-relaxed text-[15px]">
          <p>{t.e3Body1}</p>
          <p>
            {t.e3Body2}
          </p>

          <div className="card p-5 border-red-500/20 bg-red-500/5 my-4">
            <p className="text-red-400 text-sm font-semibold mb-3">{t.e3ExTitle}</p>
            <ul className="space-y-2 text-[15px]">
              {t.e3ExItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <p>{t.e3Body3}</p>

          <div className="card p-4 border-primary/20 bg-primary/5">
            <p className="text-primary text-sm font-semibold mb-1">{t.fixTitle}</p>
            <p>{t.e3FixBody}</p>
          </div>
        </div>
      </section>

      {/* Errore 4 */}
      <section id="errore-4" className="mb-14">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500/20 text-red-400 font-bold text-lg shrink-0">#4</span>
          <h2 className="text-2xl md:text-3xl font-bold">{t.e4Title}</h2>
        </div>

        <div className="space-y-4 text-white/80 leading-relaxed text-[15px]">
          <p>{t.e4Body1}</p>

          <div className="card p-5 border-red-500/20 bg-red-500/5 my-4">
            <p className="text-red-400 text-sm font-semibold mb-3">{t.e4ExTitle}</p>
            <ul className="space-y-2 text-[15px]">
              {t.e4ExItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <p>{t.e4Body2}</p>

          <div className="rounded-xl overflow-hidden border border-white/10 max-w-sm mx-auto my-6">
            <ZoomableImage
              src="/assets/widgets/pie-chart.webp"
              alt={t.e4ImgAlt}
              width={420}
              height={420}
            />
          </div>
          <p className="text-white/50 text-sm text-center -mt-4 mb-4">
            {t.e4ImgCaption}
          </p>

          <div className="card p-4 border-primary/20 bg-primary/5">
            <p className="text-primary text-sm font-semibold mb-1">{t.fixTitle}</p>
            <p>{t.e4FixBody}</p>
          </div>
        </div>
      </section>

      {/* Errore 5 */}
      <section id="errore-5" className="mb-14">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500/20 text-red-400 font-bold text-lg shrink-0">#5</span>
          <h2 className="text-2xl md:text-3xl font-bold">{t.e5Title}</h2>
        </div>

        <div className="space-y-4 text-white/80 leading-relaxed text-[15px]">
          <p>{t.e5Body1}</p>
          <p>{t.e5Body2}</p>

          <div className="card p-5 border-red-500/20 bg-red-500/5 my-4">
            <p className="text-red-400 text-sm font-semibold mb-3">{t.e5ExTitle}</p>
            <div className="font-mono text-primary text-center text-sm my-2">
              {t.e5Formula}
            </div>
            <ul className="space-y-2 text-[15px] mt-3">
              {t.e5ExItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl overflow-hidden border border-white/10 max-w-3xl mx-auto my-6">
            <ZoomableImage
              src="/assets/widgets/line-chart.webp"
              alt={t.e5ImgAlt}
              width={700}
              height={380}
            />
          </div>
          <p className="text-white/50 text-sm text-center -mt-4 mb-4">
            {t.e5ImgCaption}
          </p>

          <div className="card p-4 border-primary/20 bg-primary/5">
            <p className="text-primary text-sm font-semibold mb-1">{t.fixTitle}</p>
            <p>{t.e5FixBody}</p>
            <Link href={`/${lang}/${benchmarkGuideSlugs[lang]}`} className="mt-2 inline-block text-sm text-primary hover:underline">
              {t.e5FixLinkText}
            </Link>
          </div>
        </div>
      </section>

      {/* Bonus errori */}
      <section id="errore-6" className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {t.bonusTitle}
        </h2>
        <div className="space-y-4 text-white/80 leading-relaxed text-[15px]">
          <p>{t.bonusIntro}</p>
          <ul className="space-y-4">
            {t.bonusItems.map(([title, desc], i) => (
              <li key={i} className="flex gap-3">
                <span className="text-orange-400 mt-0.5 shrink-0 font-bold">⚠</span>
                <span>
                  <strong className="text-white">{title}</strong>: {desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Checklist */}
      <section id="errore-7" className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {t.checklistTitle}
        </h2>
        <p className="text-white/80 mb-6 text-[15px]">
          {t.checklistIntro}
        </p>
        <div className="card p-6 border-white/10">
          <ul className="space-y-3 text-[15px]">
            {t.checklistItems.map((text, i) => (
              <li key={i} className="flex gap-3 text-white/80">
                <span className="shrink-0 font-bold text-primary">✓</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-white/50 text-sm mt-4 text-center">
          {t.checklistFooter}
        </p>
      </section>

      {/* Tool section */}
      <section id="errore-8" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {t.toolsTitle}
        </h2>
        <div className="space-y-4 text-white/80 leading-relaxed text-[15px] mb-6">
          <p>{t.toolsIntro}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {t.toolsCards.map(([title, desc]) => (
            <div key={title} className="card p-4 border-primary/20 bg-primary/5">
              <p className="text-primary text-sm font-semibold mb-1">✓ {title}</p>
              <p className="text-white/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl overflow-hidden border border-white/10 max-w-3xl mx-auto mb-4">
          <ZoomableImage
            src="/assets/widgets/profit-loss.webp"
            alt={t.toolsImgAlt}
            width={700}
            height={350}
          />
        </div>
        <p className="text-white/50 text-sm text-center mb-8">
          {t.toolsImgCaption}
        </p>

        <div className="space-y-3 text-white/80 text-[15px]">
          <p>{t.toolsBody2}</p>
          <ul className="space-y-2">
            {([
              [`/${lang}/${degiroSlugs[lang]}`, t.toolsLinkLabels[0]],
              [`/${lang}/${scalableCapitalSlugs[lang]}`, t.toolsLinkLabels[1]],
              [`/${lang}/${multiBrokerSlugs[lang]}`, t.toolsLinkLabels[2]],
            ] as [string, string][]).map(([href, label]) => (
              <li key={href} className="flex gap-2">
                <span className="text-primary">→</span>
                <Link href={href} className="text-primary hover:underline">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {t.faqTitle}
        </h2>
        <div className="space-y-6">
          {t.faqItems.map(({ q, a }, i) => (
            <div key={i} className="card p-5 border-white/10">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-white/80 text-[15px]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="card p-8 bg-gradient-to-r from-red-500/10 to-primary/10 border-primary/20 text-center">
        <h3 className="text-2xl font-bold mb-4">{t.ctaTitle}</h3>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">
          {t.ctaBody}
        </p>
        <Link
          href="https://app.donkycapital.com"
          className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-colors text-lg"
        >
          {t.ctaButton}
        </Link>
        <p className="text-sm text-white/50 mt-4">
          <em>{t.ctaFooter}</em>
        </p>
      </section>

    </div>
  )
}
