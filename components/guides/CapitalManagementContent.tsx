import Link from 'next/link'
import ZoomableImage from '@/components/common/ZoomableImage'
import { capitalManagementContent } from '@/lib/content/capital-management-content'
import type { Locale } from '@/lib/i18n/config'

interface CapitalManagementContentProps {
  lang: Locale
}

export default function CapitalManagementContent({ lang }: CapitalManagementContentProps) {
  const t = capitalManagementContent[lang] ?? capitalManagementContent.en

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
          <p dangerouslySetInnerHTML={{ __html: t.s1p2 }} />
          <blockquote className="border-l-4 border-primary pl-4 py-3 bg-primary/5 rounded-r italic text-white/90">
            {t.s1quote}
          </blockquote>
        </div>
      </section>

      {/* Section 2 */}
      <section id="section-2" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {t.s2Title}
        </h2>
        <p className="text-white/80 mb-4 text-[15px]">{t.s2intro}</p>
        <ul className="space-y-3 text-white/80 text-[15px]">
          {t.s2items.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-primary mt-1 shrink-0">▸</span>
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      </section>

      {/* Section 3 */}
      <section id="section-3" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {t.s3Title}
        </h2>
        <p className="text-white/80 mb-6 text-[15px]" dangerouslySetInnerHTML={{ __html: t.s3intro }} />

        <div className="space-y-6">
          <div className="card p-5 border-white/10">
            <h3 className="text-lg font-semibold mb-2">{t.s3card1Title}</h3>
            <p className="text-white/80 text-[15px]">{t.s3card1Text}</p>
          </div>
          <div className="card p-5 border-white/10">
            <h3 className="text-lg font-semibold mb-2">{t.s3card2Title}</h3>
            <p className="text-white/80 text-[15px]">{t.s3card2Text}</p>
          </div>
          <div className="card p-5 border-primary/20 bg-primary/5">
            <h3 className="text-lg font-semibold mb-2 text-primary">{t.s3card3Title}</h3>
            <p className="text-white/80 text-[15px]" dangerouslySetInnerHTML={{ __html: t.s3card3Text }} />
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section id="section-4" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {t.s4Title}
        </h2>
        <div className="space-y-4 text-white/80 leading-relaxed text-[15px]">
          <p>{t.s4intro}</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-3 px-4 font-semibold text-white">{t.tableHeaders[0]}</th>
                  <th className="text-left py-3 px-4 font-semibold text-green-400">{t.tableHeaders[1]}</th>
                  <th className="text-left py-3 px-4 font-semibold text-red-400">{t.tableHeaders[2]}</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                {t.tableRows.map(([name, pro, con], i) => (
                  <tr key={i} className="border-b border-white/10">
                    <td className="py-3 px-4 font-medium text-white align-top">{name}</td>
                    <td className="py-3 px-4 align-top">{pro}</td>
                    <td className="py-3 px-4 align-top">{con}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p dangerouslySetInnerHTML={{ __html: t.s4conclusion }} />
        </div>
      </section>

      {/* Section 5 */}
      <section id="section-5" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {t.s5Title}
        </h2>
        <div className="space-y-4 text-white/80 leading-relaxed text-[15px] mb-6">
          <p dangerouslySetInnerHTML={{ __html: t.s5p1 }} />
          <p>{t.s5p2}</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-white/10 mb-6 max-w-sm mx-auto">
          <ZoomableImage
            src="/assets/guides/capital_management/capital_management.webp"
            alt="Capital Management DonkyCapital — Increase Capital, Reduce Capital, Rebalance"
            width={380}
            height={220}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="card p-5 border-white/10 text-center">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="font-semibold mb-2">{t.card1Title}</h3>
            <p className="text-white/70 text-sm">{t.card1Desc}</p>
          </div>
          <div className="card p-5 border-white/10 text-center">
            <div className="text-3xl mb-3">📉</div>
            <h3 className="font-semibold mb-2">{t.card2Title}</h3>
            <p className="text-white/70 text-sm">{t.card2Desc}</p>
          </div>
          <div className="card p-5 border-primary/20 bg-primary/5 text-center">
            <div className="text-3xl mb-3">⚖️</div>
            <h3 className="font-semibold mb-2">{t.card3Title}</h3>
            <p className="text-white/70 text-sm">{t.card3Desc}</p>
          </div>
        </div>
      </section>

      {/* Section 6: Tutorial */}
      <section id="section-6" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {t.s6Title}
        </h2>

        {/* Increase Capital */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-3">
            <span className="text-primary mr-2">{t.step1Title.split('.')[0]}.</span>
            {t.step1Title.split('. ').slice(1).join('. ')}
          </h3>
          <div className="space-y-4 text-white/80 text-[15px] mb-5">
            <p dangerouslySetInnerHTML={{ __html: t.step1p1 }} />
          </div>
          <div className="rounded-xl overflow-hidden border border-white/10 mb-5 max-w-sm mx-auto">
            <ZoomableImage
              src="/assets/guides/capital_management/increase_1.webp"
              alt="Capital Management — Increase Capital input"
              width={380}
              height={184}
            />
          </div>
          <div className="space-y-4 text-white/80 text-[15px] mb-5">
            <p>{t.step1p2}</p>
          </div>
          <div className="rounded-xl overflow-hidden border border-white/10 max-w-2xl mx-auto">
            <ZoomableImage
              src="/assets/guides/capital_management/increase_2.webp"
              alt="Capital Management — Increase Capital results"
              width={672}
              height={218}
            />
          </div>
          <p className="text-white/60 text-sm mt-3 text-center">{t.step1note}</p>
        </div>

        {/* Reduce Capital */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-3">
            <span className="text-primary mr-2">{t.step2Title.split('.')[0]}.</span>
            {t.step2Title.split('. ').slice(1).join('. ')}
          </h3>
          <div className="space-y-4 text-white/80 text-[15px] mb-5">
            <p dangerouslySetInnerHTML={{ __html: t.step2p1 }} />
          </div>
          <div className="rounded-xl overflow-hidden border border-white/10 mb-5 max-w-sm mx-auto">
            <ZoomableImage
              src="/assets/guides/capital_management/reduce_1.webp"
              alt="Capital Management — Reduce Capital input"
              width={380}
              height={184}
            />
          </div>
          <div className="space-y-4 text-white/80 text-[15px] mb-5">
            <p>{t.step2p2}</p>
          </div>
          <div className="rounded-xl overflow-hidden border border-white/10 max-w-2xl mx-auto">
            <ZoomableImage
              src="/assets/guides/capital_management/reduce_2.webp"
              alt="Capital Management — Reduce Capital results"
              width={672}
              height={218}
            />
          </div>
        </div>

        {/* Rebalance */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">
            <span className="text-primary mr-2">{t.step3Title.split('.')[0]}.</span>
            {t.step3Title.split('. ').slice(1).join('. ')}
          </h3>
          <div className="space-y-4 text-white/80 text-[15px] mb-5">
            <p dangerouslySetInnerHTML={{ __html: t.step3p1 }} />
            <p>{t.step3p2}</p>
          </div>
          <div className="rounded-xl overflow-hidden border border-white/10 mb-5 max-w-sm mx-auto">
            <ZoomableImage
              src="/assets/guides/capital_management/rebalance_1.webp"
              alt="Capital Management — Rebalance input"
              width={380}
              height={197}
            />
          </div>
          <div className="space-y-4 text-white/80 text-[15px] mb-5">
            <p dangerouslySetInnerHTML={{ __html: t.step3p3 }} />
          </div>
          <div className="rounded-xl overflow-hidden border border-white/10 max-w-2xl mx-auto">
            <ZoomableImage
              src="/assets/guides/capital_management/rebalance_2.webp"
              alt="Capital Management — Rebalance results HOLD"
              width={672}
              height={218}
            />
          </div>
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section id="section-7" className="mb-12">
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
