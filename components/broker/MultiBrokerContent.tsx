import Link from 'next/link'
import type { Dictionary } from '@/lib/i18n/getDictionary'

interface MultiBrokerContentProps {
  dict: Dictionary
}

export default function MultiBrokerContent({ dict }: MultiBrokerContentProps) {
  const mb = (dict as any).multiBroker || {}

  return (
    <div className="py-8">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          {(mb.pageTitle || '').split('Portfolio Tracking').map((part: string, i: number, arr: string[]) => (
            <span key={i}>
              {i > 0 && <span className="gradient-text">Portfolio Tracking</span>}
              {part}
            </span>
          ))}
        </h1>
      </div>

      {/* Intro Paragraphs */}
      <div className="space-y-4 mb-8 text-white/80 leading-relaxed">
        {(mb.introParagraphs || []).map((p: string, i: number) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
      </div>

      {/* Table of Contents */}
      <div className="card p-6 bg-primary/5 border-primary/20 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-primary">{mb.tocTitle}</h3>
        <ol className="space-y-2 list-decimal list-inside text-white/80">
          {(mb.tocItems || []).map((item: string, i: number) => (
            <li key={i}>
              <a href={`#section-${i + 1}`} className="text-primary hover:underline">{item}</a>
            </li>
          ))}
        </ol>
      </div>

      {/* Section 1: Mental Accounting */}
      <section id="section-1" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {mb.section1Title}
        </h2>
        <div className="space-y-4 text-white/80 leading-relaxed">
          {(mb.section1Content || []).map((p: string, i: number) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
          <ul className="list-disc list-inside space-y-2 ml-4">
            {(mb.section1Risks || []).map((r: string, i: number) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: r }} />
            ))}
          </ul>
        </div>
      </section>

      {/* Section 2: Tracking Methods (Table) */}
      <section id="section-2" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {mb.section2Title}
        </h2>
        <p className="text-white/80 mb-6">{mb.section2Intro}</p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-3 px-4 font-semibold text-white">{mb.section2TableHeaderMethod}</th>
                <th className="text-left py-3 px-4 font-semibold text-green-400">{mb.section2TableHeaderPro}</th>
                <th className="text-left py-3 px-4 font-semibold text-red-400">{mb.section2TableHeaderCon}</th>
              </tr>
            </thead>
            <tbody className="text-white/80">
              <tr className="border-b border-white/10">
                <td className="py-4 px-4 font-semibold text-white align-top">
                  <strong>{mb.section2MethodAName}</strong>
                  <br />
                  <span className="text-white/60 text-sm">{mb.section2MethodASub}</span>
                </td>
                <td className="py-4 px-4 align-top">{mb.section2MethodAPro}</td>
                <td className="py-4 px-4 align-top">{mb.section2MethodACon}</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-4 px-4 font-semibold text-white align-top">
                  <strong>{mb.section2MethodBName}</strong>
                  <br />
                  <span className="text-white/60 text-sm">{mb.section2MethodBSub}</span>
                </td>
                <td className="py-4 px-4 align-top">{mb.section2MethodBPro}</td>
                <td className="py-4 px-4 align-top" dangerouslySetInnerHTML={{ __html: mb.section2MethodBCon }} />
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-4 px-4 font-semibold text-white align-top">
                  <strong>{mb.section2MethodCName}</strong>
                  <br />
                  <span className="text-white/60 text-sm">{mb.section2MethodCSub}</span>
                </td>
                <td className="py-4 px-4 align-top" dangerouslySetInnerHTML={{ __html: mb.section2MethodCPro }} />
                <td className="py-4 px-4 align-top">{mb.section2MethodCCon}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <blockquote
          className="border-l-4 border-primary pl-4 py-3 my-6 bg-primary/5 rounded-r italic text-white/90"
          dangerouslySetInnerHTML={{ __html: mb.section2Verdict }}
        />
      </section>

      {/* Section 3: What to Track */}
      <section id="section-3" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {mb.section3Title}
        </h2>
        <p className="text-white/80 mb-4">{mb.section3Intro}</p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-white/80">
          {(mb.section3Items || []).map((item: string, i: number) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </section>

      {/* Section 4: Metrics */}
      <section id="section-4" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {mb.section4Title}
        </h2>
        <p className="text-white/80 mb-6" dangerouslySetInnerHTML={{ __html: mb.section4Intro }} />

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{mb.section4TWRTitle}</h3>
          <p className="text-white/80">{mb.section4TWRContent}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">{mb.section4MWRTitle}</h3>
          <p className="text-white/80" dangerouslySetInnerHTML={{ __html: mb.section4MWRContent }} />
        </div>

        <blockquote className="border-l-4 border-primary pl-4 py-3 my-6 bg-primary/5 rounded-r italic text-white/90">
          {mb.section4Tip}
        </blockquote>
      </section>

      {/* Section 5: Common Mistakes */}
      <section id="section-5" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {mb.section5Title}
        </h2>
        <ol className="list-decimal list-inside space-y-4 ml-4 text-white/80">
          <li dangerouslySetInnerHTML={{ __html: mb.section5Error1 }} />
          <li dangerouslySetInnerHTML={{ __html: mb.section5Error2 }} />
          <li dangerouslySetInnerHTML={{ __html: mb.section5Error3 }} />
        </ol>
      </section>

      {/* Section 6: Tools */}
      <section id="section-6" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {mb.section6Title}
        </h2>
        <p className="text-white/80 mb-6">{mb.section6Intro}</p>

        <h3 className="text-xl font-semibold mb-3">{mb.section6EditorTitle}</h3>
        <p className="text-white/80 mb-4" dangerouslySetInnerHTML={{ __html: mb.section6EditorContent }} />

        <p className="text-white/80 mb-3"><strong>{mb.section6WhyTitle}</strong></p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-white/80 mb-6">
          <li dangerouslySetInnerHTML={{ __html: mb.section6Feature1 }} />
          <li dangerouslySetInnerHTML={{ __html: mb.section6Feature2 }} />
          <li dangerouslySetInnerHTML={{ __html: mb.section6Feature3 }} />
        </ul>
      </section>

      {/* Section 7: Tutorial */}
      <section id="section-7" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {mb.section7Title}
        </h2>
        <p className="text-white/80 mb-6" dangerouslySetInnerHTML={{ __html: mb.section7Intro }} />

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">{mb.section7Step1Title}</h3>
            <p className="text-white/80">
              {mb.section7Step1Content?.split('DonkyCapital.com').map((part: string, i: number, arr: string[]) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <a href="https://www.donkycapital.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">DonkyCapital.com</a>
                  )}
                </span>
              ))}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">{mb.section7Step2Title}</h3>
            <ul className="list-disc list-inside space-y-2 ml-4 text-white/80">
              {(mb.section7Step2Items || []).map((item: string, i: number) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">{mb.section7Step3Title}</h3>
            <p className="text-white/80" dangerouslySetInnerHTML={{ __html: mb.section7Step3Content }} />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">{mb.section7Step4Title}</h3>
            <p className="text-white/80" dangerouslySetInnerHTML={{ __html: mb.section7Step4Content }} />
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section id="section-8" className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {mb.section8Title}
        </h2>
        <div className="space-y-6">
          <div>
            <p className="font-semibold text-white mb-2">{mb.section8FAQ1Q}</p>
            <p className="text-white/80">{mb.section8FAQ1A}</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-2">{mb.section8FAQ2Q}</p>
            <p className="text-white/80">{mb.section8FAQ2A}</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-2">{mb.section8FAQ3Q}</p>
            <p className="text-white/80">{mb.section8FAQ3A}</p>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="card p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 text-center">
        <h3 className="text-2xl font-bold mb-4">{mb.ctaTitle}</h3>
        <p className="text-white/80 mb-6">{mb.ctaDescription}</p>
        <Link
          href="https://app.donkycapital.com"
          className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-colors text-lg"
        >
          {mb.ctaButton}
        </Link>
        <p className="text-sm text-white/60 mt-4">
          <em>{mb.ctaNote}</em>
        </p>
      </section>
    </div>
  )
}
