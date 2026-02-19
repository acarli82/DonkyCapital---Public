import Link from 'next/link'
import ZoomableImage from '@/components/common/ZoomableImage'
import type { Locale } from '@/lib/i18n/config'
import { benchmarkGuideTranslations } from '@/lib/content/benchmark-guide-content'
import { commonMistakesSlugs } from '@/lib/pages/common-mistakes-slugs'

interface Props {
  lang: Locale
}

export default function BenchmarkGuideContent({ lang }: Props) {
  const t = benchmarkGuideTranslations[lang]

  return (
    <div className="py-8">

      {/* Page Header */}
      <div className="mb-10">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary mb-4">
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

      {/* Section 1: Why compare with inflation */}
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {t.s1Title}
        </h2>
        <div className="space-y-4 text-white/80 leading-relaxed text-[15px]">
          <p>{t.s1Body1}</p>
          <p>{t.s1Body2}</p>

          <div className="card p-5 border-primary/20 bg-primary/5 my-4">
            <p className="text-primary text-sm font-semibold mb-3">{t.s1CalloutTitle}</p>
            <ul className="space-y-2 text-[15px]">
              {t.s1CalloutItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <p className="text-white/60 text-sm">
            {lang === 'it' && <>Per approfondire l&apos;impatto dell&apos;inflazione sul rendimento e gli altri errori comuni, leggi la nostra{' '}
              <Link href={`/${lang}/${commonMistakesSlugs[lang]}`} className="text-primary hover:underline">
                guida ai 5 errori nel portfolio tracking
              </Link>.
            </>}
            {lang === 'en' && <>To learn more about the impact of inflation on returns and other common mistakes, read our{' '}
              <Link href={`/${lang}/${commonMistakesSlugs[lang]}`} className="text-primary hover:underline">
                guide to 5 portfolio tracking mistakes
              </Link>.
            </>}
            {lang === 'de' && <>Um mehr über den Einfluss der Inflation auf die Rendite und andere häufige Fehler zu erfahren, lies unseren{' '}
              <Link href={`/${lang}/${commonMistakesSlugs[lang]}`} className="text-primary hover:underline">
                Leitfaden zu den 5 Portfolio-Tracking-Fehlern
              </Link>.
            </>}
            {lang === 'fr' && <>Pour en savoir plus sur l&apos;impact de l&apos;inflation sur le rendement et les autres erreurs courantes, lisez notre{' '}
              <Link href={`/${lang}/${commonMistakesSlugs[lang]}`} className="text-primary hover:underline">
                guide sur les 5 erreurs de suivi de portefeuille
              </Link>.
            </>}
            {lang === 'es' && <>Para profundizar en el impacto de la inflación en la rentabilidad y otros errores comunes, lee nuestra{' '}
              <Link href={`/${lang}/${commonMistakesSlugs[lang]}`} className="text-primary hover:underline">
                guía de los 5 errores en el seguimiento de cartera
              </Link>.
            </>}
          </p>
        </div>
      </section>

      {/* Section 2: How to configure */}
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {t.s2Title}
        </h2>
        <div className="space-y-4 text-white/80 leading-relaxed text-[15px]">
          <p>{t.s2Intro}</p>

          <ol className="space-y-3 list-none">
            {t.s2Steps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/20 text-primary font-bold text-sm shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <div className="rounded-xl overflow-hidden border border-white/10 max-w-xl mx-auto my-6">
            <ZoomableImage
              src="/assets/guides/benchmark/widget_configuration.webp"
              alt={t.s2ImgAlt}
              width={760}
              height={570}
            />
          </div>
          <p className="text-white/50 text-sm text-center -mt-4 mb-4">
            {t.s2ImgCaption}
          </p>

          <div className="card p-4 border-white/10 bg-white/5 text-sm text-white/70">
            <span className="text-primary font-semibold">💡 </span>
            {t.s2Note}
          </div>
        </div>
      </section>

      {/* Section 3: How to read the chart */}
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {t.s3Title}
        </h2>
        <div className="space-y-4 text-white/80 leading-relaxed text-[15px]">
          <p>{t.s3Intro}</p>

          {/* View modes */}
          <div className="card p-5 border-white/10 my-4">
            <p className="text-white font-semibold mb-3 text-sm">{t.s3ViewModesTitle}</p>
            <div className="space-y-3">
              {t.s3ViewModesItems.map(([mode, desc], i) => (
                <div key={i} className="flex gap-3">
                  <span className="inline-flex items-center px-2 py-0.5 rounded bg-white/10 text-white text-xs font-mono font-bold shrink-0 h-fit mt-0.5">
                    {mode.split(' ')[0]}
                  </span>
                  <span className="text-[14px] text-white/70">{mode.includes('(') ? mode.replace(/^[A-Z]+\s/, '') : ''} {desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-white/10 max-w-3xl mx-auto my-6">
            <ZoomableImage
              src="/assets/guides/benchmark/widget_benchmark.webp"
              alt={t.s3ImgAlt}
              width={900}
              height={660}
            />
          </div>

          {/* Rules */}
          <div className="space-y-3 my-4">
            {t.s3Rules.map(([condition, result], i) => (
              <div key={i} className={`card p-4 border-l-4 ${i === 0 ? 'border-l-primary bg-primary/5' : i === 1 ? 'border-l-orange-400 bg-orange-500/5' : 'border-l-red-500 bg-red-500/5'}`}>
                <p className={`text-sm font-semibold mb-1 ${i === 0 ? 'text-primary' : i === 1 ? 'text-orange-400' : 'text-red-400'}`}>
                  {condition}
                </p>
                <p className="text-white/80 text-[14px]">{result}</p>
              </div>
            ))}
          </div>

          {/* Analysis */}
          <div className="card p-5 border-white/10 bg-white/5 my-4">
            <p className="text-white font-semibold mb-3 text-sm">{t.s3AnalysisTitle}</p>
            <ul className="space-y-2 text-[14px] text-white/80">
              {t.s3AnalysisItems.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-primary shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-4 border-red-500/20 bg-red-500/5">
            <p className="text-red-400 text-[14px]">
              <strong>⚠ </strong>{t.s3AnalysisNote}
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Available benchmarks */}
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {t.s4Title}
        </h2>
        <div className="space-y-4 text-white/80 leading-relaxed text-[15px]">
          <p>{t.s4Intro}</p>

          <div className="rounded-xl overflow-hidden border border-white/10 max-w-xl mx-auto my-6">
            <ZoomableImage
              src="/assets/guides/benchmark/benchmark_lists.webp"
              alt={t.s4ImgAlt}
              width={760}
              height={660}
            />
          </div>
          <p className="text-white/50 text-sm text-center -mt-4 mb-6">
            {t.s4ImgCaption}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Index benchmarks */}
            <div className="card p-5 border-white/10">
              <p className="text-white font-semibold mb-3 flex items-center gap-2">
                <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-blue-500/20 text-blue-400">Index</span>
                {t.s4IndexTitle}
              </p>
              <ul className="space-y-2 text-[14px] text-white/70">
                {t.s4IndexItems.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-white/30 shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Macro benchmarks */}
            <div className="card p-5 border-primary/20 bg-primary/5">
              <p className="text-white font-semibold mb-3 flex items-center gap-2">
                <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-primary/30 text-primary">Macro</span>
                {t.s4MacroTitle}
              </p>
              <ul className="space-y-2 text-[14px] text-white/80">
                {t.s4MacroItems.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/50 text-[13px] mt-4 pt-3 border-t border-white/10">
                {t.s4MacroNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Which to choose */}
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-3 border-b-2 border-primary/20">
          {t.s5Title}
        </h2>
        <div className="space-y-4">
          {t.s5Items.map(([profile, main, extra], i) => (
            <div key={i} className="card p-5 border-white/10">
              <p className="text-white font-semibold mb-2 text-[15px]">{profile}</p>
              <p className="text-primary text-sm mb-1">→ {main}</p>
              <p className="text-white/60 text-[13px]">{extra}</p>
            </div>
          ))}
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
      <section className="card p-8 bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/20 text-center">
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
