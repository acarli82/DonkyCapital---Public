import Link from 'next/link'
import ZoomableImage from '@/components/common/ZoomableImage'
import { roiGuideContent } from '@/lib/content/roi-guide-content'
import type { Locale } from '@/lib/i18n/config'

interface RoiGuideContentProps {
  lang: Locale
}

export default function RoiGuideContent({ lang }: RoiGuideContentProps) {
  const t = roiGuideContent[lang] ?? roiGuideContent.en

  return (
    <div className="py-8">

      {/* Page Header */}
      <div className="mb-10">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary mb-4">
          {t.badge}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          {t.h1prefix}
          <span className="gradient-text">{t.h1gradient}</span>
        </h1>
      </div>

      {/* Intro */}
      <div className="space-y-4 mb-10 text-white/80 leading-relaxed text-[15px]">
        <p dangerouslySetInnerHTML={{ __html: t.intro1 }} />
        <p dangerouslySetInnerHTML={{ __html: t.intro2 }} />
      </div>

      {/* Table of Contents */}
      <div className="card p-6 bg-primary/5 border-primary/20 mb-10">
        <h3 className="text-base font-semibold mb-4 text-primary">{t.tocTitle}</h3>
        <ol className="space-y-2 list-decimal list-inside text-white/80 text-sm">
          {t.tocItems.map((item, i) => (
            <li key={i}>
              <a href={`#section-${i + 1}`} className="text-primary hover:underline">{item}</a>
            </li>
          ))}
        </ol>
      </div>

      {/* Section 1 */}
      <section id="section-1" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {t.s1Title}
        </h2>
        <div className="space-y-4 text-white/80 leading-relaxed text-[15px]">
          <p dangerouslySetInnerHTML={{ __html: t.s1p1 }} />
          <ul className="space-y-3">
            {t.s1bullets.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-primary mt-1 shrink-0">▸</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <blockquote className="border-l-4 border-primary pl-4 py-3 bg-primary/5 rounded-r italic text-white/90">
            {t.s1quote}
          </blockquote>
        </div>
      </section>

      {/* Section 2: ROI */}
      <section id="section-2" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {t.s2Title}
        </h2>
        <div className="space-y-4 text-white/80 leading-relaxed text-[15px]">
          <p dangerouslySetInnerHTML={{ __html: t.s2p1 }} />

          <div className="card p-5 bg-black/30 border-white/10 text-center my-2">
            <p className="text-white/50 text-xs mb-2 uppercase tracking-wider">{t.s2formulaLabel}</p>
            <p className="font-mono text-primary text-sm md:text-base">
              ROI = (Valore Attuale − Capitale Investito) / Capitale Investito × 100
            </p>
          </div>

          <div className="card p-4 border-white/10">
            <p className="text-white/60 text-xs uppercase tracking-wider mb-2">{t.s2exampleLabel}</p>
            <p dangerouslySetInnerHTML={{ __html: t.s2exampleP }} />
            <p className="font-mono text-primary mt-2 text-sm">
              ROI = (10.998 − 6.000) / 6.000 × 100 = <strong>+83,3%</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="card p-4 border-green-500/20 bg-green-500/5">
              <p className="text-green-400 text-sm font-semibold mb-2">{t.s2proTitle}</p>
              <ul className="text-[15px] space-y-1">
                {t.s2proItems.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-400">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-4 border-red-500/20 bg-red-500/5">
              <p className="text-red-400 text-sm font-semibold mb-2">{t.s2conTitle}</p>
              <ul className="text-[15px] space-y-1">
                {t.s2conItems.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-red-400">✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: TWR */}
      <section id="section-3" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {t.s3Title}
        </h2>
        <div className="space-y-4 text-white/80 leading-relaxed text-[15px]">
          <p dangerouslySetInnerHTML={{ __html: t.s3p1 }} />
          <p>{t.s3p2}</p>

          <div className="card p-5 bg-black/30 border-white/10 text-center my-2">
            <p className="text-white/50 text-xs mb-2 uppercase tracking-wider">{t.s3formulaLabel}</p>
            <p className="font-mono text-primary text-sm md:text-base">
              TWRR = [(1 + R₁) × (1 + R₂) × ... × (1 + Rₙ)] − 1
            </p>
            <p className="text-white/40 text-xs mt-2">{t.s3formulaNote}</p>
          </div>

          <div className="card p-4 border-white/10">
            <p className="text-white/60 text-xs uppercase tracking-wider mb-3">{t.s3exampleLabel}</p>
            <p className="mb-2">{t.s3exampleP}</p>
            <ul className="space-y-1 text-sm">
              {t.s3exampleItems.map((item, i) => (
                <li key={i} className={item.startsWith('→ TWRR') ? 'text-primary font-mono mt-2' : ''}>{item}</li>
              ))}
            </ul>
            <p className="text-white/60 text-sm mt-2">{t.s3exampleNote}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="card p-4 border-green-500/20 bg-green-500/5">
              <p className="text-green-400 text-sm font-semibold mb-2">{t.s3proTitle}</p>
              <ul className="text-[15px] space-y-1">
                {t.s3proItems.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-400">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-4 border-red-500/20 bg-red-500/5">
              <p className="text-red-400 text-sm font-semibold mb-2">{t.s3conTitle}</p>
              <ul className="text-[15px] space-y-1">
                {t.s3conItems.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-red-400">✗</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: IRR/MWRR */}
      <section id="section-4" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {t.s4Title}
        </h2>
        <div className="space-y-4 text-white/80 leading-relaxed text-[15px]">
          <p dangerouslySetInnerHTML={{ __html: t.s4p1 }} />
          <p dangerouslySetInnerHTML={{ __html: t.s4p2 }} />

          <div className="card p-5 bg-black/30 border-white/10 text-center my-2">
            <p className="text-white/50 text-xs mb-2 uppercase tracking-wider">{t.s4formulaLabel}</p>
            <p className="font-mono text-primary text-sm">
              MWRR = tasso r tale che: ΣCFₜ / (1+r)ᵗ = Valore Finale
            </p>
            <p className="text-white/40 text-xs mt-2">{t.s4formulaNote1}</p>
            <p className="text-white/40 text-xs mt-1">{t.s4formulaNote2}</p>
          </div>

          <div className="card p-4 border-white/10 mt-4">
            <p className="text-white/60 text-xs uppercase tracking-wider mb-3">{t.s4exampleLabel}</p>
            <p className="mb-2">{t.s4exampleP}</p>
            <ul className="space-y-1 text-sm">
              {t.s4exampleItems.filter(Boolean).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-white/60 text-sm mt-2" dangerouslySetInnerHTML={{ __html: t.s4exampleNote }} />
          </div>

          <div className="card p-5 border-primary/20 bg-primary/5 mt-4">
            <h3 className="font-semibold text-primary mb-2">{t.s4cardTitle}</h3>
            <p dangerouslySetInnerHTML={{ __html: t.s4cardGt }} />
            <p className="mt-2" dangerouslySetInnerHTML={{ __html: t.s4cardLt }} />
          </div>
        </div>
      </section>

      {/* Section 5: Comparison table */}
      <section id="section-5" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {t.s5Title}
        </h2>
        <p className="text-white/80 mb-4 text-[15px]">{t.s5p1}</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-3 px-4 font-semibold text-white">{t.s5col1}</th>
                <th className="text-left py-3 px-4 font-semibold text-primary">{t.s5col2}</th>
              </tr>
            </thead>
            <tbody className="text-white/80">
              {t.s5rows.map(([question, metric], i) => (
                <tr key={i} className="border-b border-white/10">
                  <td className="py-3 px-4 align-top">{question}</td>
                  <td className="py-3 px-4 font-semibold text-primary align-top">{metric}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 6: DonkyCapital */}
      <section id="section-6" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {t.s6Title}
        </h2>
        <div className="space-y-4 text-white/80 leading-relaxed text-[15px] mb-6">
          <p dangerouslySetInnerHTML={{ __html: t.s6p1 }} />
        </div>
        <ul className="space-y-3 text-white/80 text-[15px]">
          {t.s6bullets.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-primary mt-1 shrink-0">▸</span>
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      </section>

      {/* Section 7: Case study */}
      <section id="section-7" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {t.s7Title}
        </h2>
        <div className="space-y-4 text-white/80 leading-relaxed text-[15px] mb-6">
          <p>{t.s7p1}</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-white/10 mb-8 max-w-4xl mx-auto">
          <ZoomableImage
            src="/assets/guides/roi/portfolios.webp"
            alt="DonkyCapital — widget Portfolios con TWRR e MWRR a confronto"
            width={800}
            height={200}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Portfolio 1 */}
          <div className="card p-5 border-green-500/20 bg-green-500/5">
            <h3 className="font-semibold text-green-400 mb-3">{t.s7port1Title}</h3>
            <ul className="space-y-2 text-[15px]">
              {[
                [t.s7labelInvested, '€6.000'],
                [t.s7labelValue, '€10.998,54'],
                [t.s7labelPerformance, '+83,31%'],
                ['TWRR', '+83,31%'],
                [t.s7labelTwrrY, '+33,53%'],
                ['MWRR', '+56,16%'],
              ].map(([label, value]) => (
                <li key={label} className="flex justify-between">
                  <span className="text-white/60">{label}</span>
                  <span className="font-mono font-semibold text-white">{value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 bg-black/20 rounded-lg text-sm text-white/70">
              {t.s7port1Note}
            </div>
          </div>

          {/* Portfolio 2 */}
          <div className="card p-5 border-red-500/20 bg-red-500/5">
            <h3 className="font-semibold text-red-400 mb-3">{t.s7port2Title}</h3>
            <ul className="space-y-2 text-[15px]">
              {[
                [t.s7labelInvested, '€6.000'],
                [t.s7labelDivested, '€500'],
                [t.s7labelValue, '€5.453,02'],
                [t.s7labelPerformance, '−0,78%'],
                ['TWRR', '−0,78%'],
                [t.s7labelTwrrY, '−0,37%'],
                ['MWRR', '−0,68%'],
              ].map(([label, value]) => (
                <li key={label} className="flex justify-between">
                  <span className="text-white/60">{label}</span>
                  <span className="font-mono font-semibold text-white">{value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 bg-black/20 rounded-lg text-sm text-white/70">
              {t.s7port2Note}
            </div>
          </div>
        </div>

        <div className="card p-5 border-primary/20 bg-primary/5 text-[15px] text-white/80">
          <strong className="text-primary">Sintesi: </strong>
          {t.s7summary}
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section id="section-8" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {t.faqTitle}
        </h2>
        <div className="space-y-6">
          {[
            { q: t.faq1q, a: t.faq1a },
            { q: t.faq2q, a: t.faq2a },
            { q: t.faq3q, a: t.faq3a },
            { q: t.faq4q, a: t.faq4a },
          ].map(({ q, a }, i) => (
            <div key={i} className="card p-5 border-white/10">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-white/80 text-[15px]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="card p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 text-center">
        <h3 className="text-2xl font-bold mb-4">{t.ctaTitle}</h3>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">{t.ctaDesc}</p>
        <Link
          href="https://app.donkycapital.com"
          className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-colors text-lg"
        >
          {t.ctaButton}
        </Link>
        <p className="text-sm text-white/50 mt-4">
          <em>{t.ctaNote}</em>
        </p>
      </section>

    </div>
  )
}
