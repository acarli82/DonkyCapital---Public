'use client'

import Link from 'next/link'
import type { Locale } from '@/lib/i18n/config'
import { excelVsSoftwareTranslations } from '@/lib/content/excel-vs-software-content'

interface Props {
  lang: Locale
}

export default function ExcelVsSoftwareContent({ lang }: Props) {
  const t = excelVsSoftwareTranslations[lang]

  return (
    <article className="py-8">
      {/* Badge */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/30">
          {t.badge}
        </span>
      </div>

      {/* H1 */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
        {t.h1}{' '}
        <span className="text-primary">{t.h1Highlight}</span>
      </h1>

      {/* Intro */}
      <p className="text-white/80 text-lg mb-3">{t.intro1}</p>
      <p className="text-white/60 mb-10">{t.intro2}</p>

      {/* Section 1 — Time cost */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-3">{t.s1Title}</h2>
        <p className="text-white/80 mb-5">{t.s1Body}</p>

        {/* Comparison table */}
        <div className="overflow-x-auto rounded-xl border border-white/10 mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-white/60">
                {t.s1TableHeaders.map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.s1TableRows.map(([task, excel, donky], i) => (
                <tr key={i} className="border-t border-white/10 hover:bg-white/3">
                  <td className="px-4 py-3 text-white/80">{task}</td>
                  <td className="px-4 py-3 text-orange-400 font-mono">{excel}</td>
                  <td className="px-4 py-3 text-primary font-mono font-semibold">{donky}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total row */}
        <div className="bg-white/5 rounded-xl px-4 py-3 mb-4 border border-white/10">
          <p className="text-sm font-semibold text-white">{t.s1Total}</p>
        </div>

        {/* Note */}
        <div className="bg-primary/10 border border-primary/20 rounded-xl px-4 py-3">
          <p className="text-sm text-primary/90">{t.s1Note}</p>
        </div>
      </section>

      {/* Section 2 — Error rate */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-3">{t.s2Title}</h2>
        <p className="text-white/80 mb-5">{t.s2Body}</p>

        <div className="space-y-4 mb-5">
          {t.s2Errors.map((err, i) => (
            <div key={i} className="card p-4 border-l-2 border-orange-400/60">
              <h3 className="font-semibold mb-1 text-white">{err.title}</h3>
              <p className="text-white/70 text-sm mb-2">{err.desc}</p>
              <p className="text-xs text-orange-400/80 font-medium">{err.impact}</p>
            </div>
          ))}
        </div>

        {/* Tip */}
        <div className="bg-primary/10 border border-primary/20 rounded-xl px-4 py-3 flex gap-2">
          <span className="text-primary text-lg">✓</span>
          <p className="text-sm text-primary/90">{t.s2Tip}</p>
        </div>
      </section>

      {/* Section 3 — ROI analysis */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-3">{t.s3Title}</h2>
        <p className="text-white/80 mb-5">{t.s3Body}</p>

        <div className="space-y-4 mb-5">
          {t.s3Scenarios.map((sc, i) => (
            <div key={i} className="card p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-white">{sc.label}</h3>
                <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-white/60">{sc.portfolio}</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Costo orario</p>
                  <p className="text-white/80 font-mono">{sc.hourly}</p>
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Ore/anno su Excel</p>
                  <p className="text-white/80 font-mono">{sc.yearlyHours}</p>
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Costo opportunità/anno</p>
                  <p className="text-orange-400 font-mono font-semibold">{sc.yearlyCost}</p>
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Rischio aggiuntivo</p>
                  <p className="text-white/60 text-xs">{sc.missedReturn}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 rounded-xl px-4 py-3 mb-3 border border-white/10">
          <p className="text-sm text-white/70">{t.s3Note}</p>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-xl px-4 py-3">
          <p className="text-sm font-semibold text-primary">{t.s3Conclusion}</p>
        </div>
      </section>

      {/* Section 4 — What you gain */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-3">{t.s4Title}</h2>
        <p className="text-white/80 mb-5">{t.s4Body}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {t.s4Points.map(([feature, desc], i) => (
            <div key={i} className="card p-4">
              <div className="flex items-start gap-2">
                <span className="text-primary mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-sm text-white mb-1">{feature}</p>
                  <p className="text-white/60 text-xs">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 — When Excel still makes sense */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-3">{t.s5Title}</h2>
        <p className="text-white/80 mb-4">{t.s5Body}</p>

        <ul className="space-y-2 mb-5">
          {t.s5Cases.map((c, i) => (
            <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
              <span className="text-white/30 mt-1">•</span>
              {c}
            </li>
          ))}
        </ul>

        <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
          <p className="text-sm text-white/80">{t.s5Switch}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-5">{t.faqTitle}</h2>
        <div className="space-y-3">
          {t.faqItems.map((item, i) => (
            <details key={i} className="card group">
              <summary className="p-4 cursor-pointer font-semibold text-white/90 flex items-center justify-between list-none">
                <span>{item.q}</span>
                <span className="text-primary ml-2 flex-shrink-0 group-open:rotate-180 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </span>
              </summary>
              <p className="px-4 pb-4 text-white/70 text-sm">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="card p-6 text-center bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
        <h2 className="text-xl font-bold mb-2">{t.ctaTitle}</h2>
        <p className="text-white/70 text-sm mb-5">{t.ctaBody}</p>
        <Link
          href="https://app.donkycapital.com/register"
          className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:opacity-90 transition-opacity"
        >
          {t.ctaButton}
        </Link>
      </section>
    </article>
  )
}
