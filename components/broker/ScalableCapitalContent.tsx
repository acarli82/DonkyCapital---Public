import Link from 'next/link'
import Image from 'next/image'
import type { Dictionary } from '@/lib/i18n/getDictionary'
import ScalableCapitalFAQ from './ScalableCapitalFAQ'
import ZoomableImage from '@/components/common/ZoomableImage'

interface ScalableCapitalContentProps {
  dict: Dictionary
}

export default function ScalableCapitalContent({ dict }: ScalableCapitalContentProps) {
  const sc = dict.scalableCapital

  return (
    <div className="py-8">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          {sc.pageTitle.split('Scalable Capital').map((part: string, index: number, array: string[]) => (
            <span key={index}>
              {index > 0 && <span className="gradient-text">Scalable Capital</span>}
              {part.split('DonkyCapital').map((subPart: string, subIndex: number, subArray: string[]) => (
                <span key={subIndex}>
                  {subIndex > 0 && <span className="gradient-text">DonkyCapital</span>}
                  {subPart}
                </span>
              ))}
            </span>
          ))}
        </h1>
        <p
          className="text-lg text-white/80 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: sc.intro }}
        />
      </div>

      {/* Image Section */}
      <section className="mb-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-white/80 leading-relaxed text-lg">{sc.whyExportText1}</p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/assets/import-providers/scalable-to-donkycapital.webp"
            alt="Export Scalable Capital to DonkyCapital"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Why Export Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{sc.whyExportTitle}</h2>
        <div className="card p-6 space-y-4">
          <p
            className="text-white/80"
            dangerouslySetInnerHTML={{ __html: sc.whyExportText2 }}
          />
          <ul className="list-disc list-inside space-y-2 text-white/80">
            {sc.whyExportList.map((item: string, index: number) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
          <blockquote className="border-l-4 border-primary pl-4 py-2 text-white/90 italic bg-primary/5 rounded-r">
            {sc.whyExportQuote}
          </blockquote>
        </div>
      </section>

      {/* Why DonkyCapital Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{sc.whyDonkyTitle}</h2>
        <div className="card p-6 space-y-4">
          <p
            className="text-white/80"
            dangerouslySetInnerHTML={{ __html: sc.whyDonkyText1 }}
          />
          <ul className="list-disc list-inside space-y-2 text-white/80">
            {sc.whyDonkyList.map((item: string, index: number) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
          <p
            className="text-white/80"
            dangerouslySetInnerHTML={{ __html: sc.whyDonkyText2 }}
          />
          <blockquote className="border-l-4 border-primary pl-4 py-2 text-white/90 italic bg-primary/5 rounded-r">
            {sc.whyDonkyQuote}
          </blockquote>
        </div>
      </section>

      {/* Step 1 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{sc.step1Title}</h2>
        <div className="card p-6 space-y-4">
          <ol className="list-decimal list-inside space-y-2 text-white/80">
            {sc.step1List.map((item: string, index: number) => (
              <li key={index}>
                {index === 1 ? (
                  <>
                    {item.split(':')[0]}:{' '}
                    <Link
                      href={sc.extensionLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {sc.extensionLinkText}
                    </Link>
                  </>
                ) : (
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                )}
              </li>
            ))}
          </ol>
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <p className="text-primary text-sm">{sc.step1Tip}</p>
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{sc.step2Title}</h2>
        <div className="card p-6">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <ol className="list-decimal list-inside space-y-2 text-white/80">
                {sc.step2List.map((item: string, index: number) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ol>
              <p className="text-white/80">{sc.step2Text}</p>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <p className="text-primary text-sm">{sc.step2Highlight}</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <ZoomableImage
                src="/assets/import-providers/scalable-extension.webp"
                alt={sc.step2Title}
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Step 3 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{sc.step3Title}</h2>
        <div className="card p-6">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <ol className="list-decimal list-inside space-y-2 text-white/80">
                {sc.step3List.map((item: string, index: number) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ol>
              <p className="text-white/80">{sc.step3Text}</p>
              <ul className="list-disc list-inside space-y-2 text-white/80">
                {sc.step3ReportList.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <p
                  className="text-primary text-sm"
                  dangerouslySetInnerHTML={{ __html: sc.step3Highlight }}
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <ZoomableImage
                src="/assets/import-providers/Import-donkycapital.webp"
                alt={sc.step3Title}
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{sc.privacyTitle}</h2>
        <div className="card p-6">
          <ul className="list-disc list-inside space-y-2 text-white/80">
            {sc.privacyList.map((item: string, index: number) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>
      </section>

      {/* Tips Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{sc.tipsTitle}</h2>
        <div className="card p-6">
          <ul className="list-disc list-inside space-y-2 text-white/80">
            {sc.tipsList.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{sc.faqTitle}</h2>
        <ScalableCapitalFAQ faqs={sc.faq} />
      </section>

      {/* Conclusion Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{sc.conclusionTitle}</h2>
        <div className="card p-6 space-y-4">
          <p className="text-white/80">{sc.conclusionText}</p>
          <ul className="list-disc list-inside space-y-2 text-white/80">
            {sc.conclusionList.map((item: string, index: number) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
          <blockquote className="border-l-4 border-primary pl-4 py-2 text-white/90 italic bg-primary/5 rounded-r">
            {sc.conclusionQuote}
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <div className="card p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <h3 className="text-xl font-bold mb-4">{dict.landing.cta.title}</h3>
          <p className="text-white/80 mb-6">{dict.landing.cta.subtitle}</p>
          <Link
            href="https://app.donkycapital.com"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors"
          >
            {dict.landing.cta.button}
          </Link>
        </div>
      </section>
    </div>
  )
}
