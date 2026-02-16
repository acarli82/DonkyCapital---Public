import Link from 'next/link'
import Image from 'next/image'
import type { Dictionary } from '@/lib/i18n/getDictionary'
import type { Locale } from '@/lib/i18n/config'
import { scalableCapitalSlugs } from '@/lib/pages/scalable-capital-slugs'
import ZoomableImage from '@/components/common/ZoomableImage'

interface VsGetquinContentProps {
  dict: Dictionary
  lang: Locale
}

const DONKY_LINK = '<a href="https://www.donkycapital.com" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">DonkyCapital</a>'
const GETQUIN_LINK = '<a href="https://www.getquin.com/" target="_blank" rel="noopener noreferrer nofollow" class="text-primary hover:underline">Getquin</a>'

const linkifyBrands = (text: string): string => {
  return text.replace(/DonkyCapital/g, DONKY_LINK).replace(/Getquin/g, GETQUIN_LINK)
}

export default function VsGetquinContent({ dict, lang }: VsGetquinContentProps) {
  const vg = (dict as any).vsGetquin || {}

  // Split title around brand names for gradient styling
  const titleParts = (vg.pageTitle || '').split(/(DonkyCapital|Getquin)/)

  return (
    <div className="py-8">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          {titleParts.map((part: string, i: number) =>
            part === 'DonkyCapital' || part === 'Getquin' ? (
              <span key={i} className="gradient-text">{part}</span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </h1>
      </div>

      {/* Intro */}
      <div className="space-y-4 mb-8 text-white/80 leading-relaxed">
        <p dangerouslySetInnerHTML={{ __html: linkifyBrands(vg.intro1 || '') }} />
        <p dangerouslySetInnerHTML={{ __html: linkifyBrands(vg.intro2 || '') }} />
      </div>

      {/* Section: Multi-Broker Problem */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {vg.multiBrokerTitle}
        </h2>
        <div className="space-y-4 text-white/80 leading-relaxed">
          <p>{vg.multiBrokerP1}</p>
          <p dangerouslySetInnerHTML={{ __html: linkifyBrands(vg.multiBrokerP2 || '') }} />
        </div>
      </section>

      {/* Section: Overview */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {vg.overviewTitle}
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3" dangerouslySetInnerHTML={{ __html: linkifyBrands(vg.getquinSubtitle || '') }} />
          <p className="text-white/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: linkifyBrands(vg.getquinDesc || '') }} />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3" dangerouslySetInnerHTML={{ __html: linkifyBrands(vg.donkySubtitle || '') }} />
          <p className="text-white/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: linkifyBrands(vg.donkyDesc || '') }} />
        </div>
      </section>

      {/* Section: Feature Comparison Table */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {vg.featureTitle}
        </h2>
        <p className="text-white/80 mb-6">{vg.featureIntro}</p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-3 px-4 font-semibold text-white">{vg.tableHeaderFeature}</th>
                <th className="text-left py-3 px-4 font-semibold text-primary">DonkyCapital</th>
                <th className="text-left py-3 px-4 font-semibold text-white/60">Getquin</th>
              </tr>
            </thead>
            <tbody className="text-white/80">
              <tr className="border-b border-white/10">
                <td className="py-4 px-4 font-semibold text-white align-top">{vg.tableRowImportLabel}</td>
                <td className="py-4 px-4 align-top">{vg.tableRowImportDonky}</td>
                <td className="py-4 px-4 align-top">{vg.tableRowImportGetquin}</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-4 px-4 font-semibold text-white align-top">{vg.tableRowPrivacyLabel}</td>
                <td className="py-4 px-4 align-top">{vg.tableRowPrivacyDonky}</td>
                <td className="py-4 px-4 align-top">{vg.tableRowPrivacyGetquin}</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-4 px-4 font-semibold text-white align-top">{vg.tableRowPlatformLabel}</td>
                <td className="py-4 px-4 align-top">{vg.tableRowPlatformDonky}</td>
                <td className="py-4 px-4 align-top">{vg.tableRowPlatformGetquin}</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-4 px-4 font-semibold text-white align-top">{vg.tableRowCustomLabel}</td>
                <td className="py-4 px-4 align-top">{vg.tableRowCustomDonky}</td>
                <td className="py-4 px-4 align-top">{vg.tableRowCustomGetquin}</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-4 px-4 font-semibold text-white align-top">{vg.tableRowKillerLabel}</td>
                <td className="py-4 px-4 align-top">{vg.tableRowKillerDonky}</td>
                <td className="py-4 px-4 align-top">{vg.tableRowKillerGetquin}</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-4 px-4 font-semibold text-white align-top">{vg.tableRowPriceLabel}</td>
                <td className="py-4 px-4 align-top">{vg.tableRowPriceDonky}</td>
                <td className="py-4 px-4 align-top">{vg.tableRowPriceGetquin}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section: Privacy Deep Dive */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {vg.privacyTitle}
        </h2>
        <p className="text-white/80 mb-4">{vg.privacyIntro}</p>
        <ul className="list-disc list-inside space-y-3 ml-4 text-white/80 mb-6">
          <li dangerouslySetInnerHTML={{ __html: linkifyBrands(vg.chooseGetquin || '') }} />
          <li dangerouslySetInnerHTML={{ __html: linkifyBrands(vg.chooseDonky || '') }} />
        </ul>

        <blockquote className="border-l-4 border-primary pl-4 py-3 my-6 bg-primary/5 rounded-r text-white/90" dangerouslySetInnerHTML={{ __html: linkifyBrands(vg.scalableBonus || '') }} />

        <p className="text-white/80">
          <Link href={`/${lang}/${scalableCapitalSlugs[lang]}`} className="text-primary hover:underline font-semibold">
            {vg.scalableGuideLink} &rarr;
          </Link>
        </p>
      </section>

      {/* Section: Dashboard vs Feed */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {vg.dashboardTitle}
        </h2>
        <p className="text-white/80 mb-4" dangerouslySetInnerHTML={{ __html: linkifyBrands(vg.dashboardIntro || '') }} />

        {/* Screenshot comparison */}
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="rounded-xl border-2 border-primary/40 bg-primary/5 p-4">
            <div className="mb-3">
              <Image src="/assets/logos/Logo_dark.svg" alt="DonkyCapital" width={140} height={32} />
            </div>
            <ZoomableImage
              src="/assets/guides/donky.webp"
              alt="DonkyCapital Dashboard"
              width={700}
              height={400}
            />
            <p className="text-xs text-white/50 mt-2">{vg.donkyScreenCaption}</p>
          </div>
          <div className="rounded-xl border-2 border-white/10 bg-white/5 p-4">
            <div className="mb-3">
              <Image src="/assets/guides/getquin_logo.png" alt="Getquin" width={100} height={28} />
            </div>
            <ZoomableImage
              src="/assets/guides/getquin.webp"
              alt="Getquin Dashboard"
              width={700}
              height={400}
            />
            <p className="text-xs text-white/50 mt-2">{vg.getquinScreenCaption}</p>
          </div>
        </div>

        <ul className="list-disc list-inside space-y-2 ml-4 text-white/80">
          <li dangerouslySetInnerHTML={{ __html: vg.dashboardFeature1 || '' }} />
          <li dangerouslySetInnerHTML={{ __html: vg.dashboardFeature2 || '' }} />
          <li dangerouslySetInnerHTML={{ __html: vg.dashboardFeature3 || '' }} />
        </ul>
      </section>

      {/* Section: Pricing */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {vg.pricingTitle}
        </h2>
        <div className="space-y-4 text-white/80 leading-relaxed">
          <p dangerouslySetInnerHTML={{ __html: linkifyBrands(vg.pricingGetquin || '') }} />
          <p dangerouslySetInnerHTML={{ __html: linkifyBrands(vg.pricingDonky || '') }} />
        </div>
      </section>

      {/* Section: Verdict */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary/20">
          {vg.verdictTitle}
        </h2>
        <div className="space-y-4 text-white/80 leading-relaxed">
          <p dangerouslySetInnerHTML={{ __html: linkifyBrands(vg.verdictGetquin || '') }} />
          <p dangerouslySetInnerHTML={{ __html: linkifyBrands(vg.verdictDonky || '') }} />
        </div>
      </section>

      {/* CTA Box */}
      <section className="card p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 text-center">
        <h3 className="text-2xl font-bold mb-4">{vg.ctaTitle}</h3>
        <p className="text-white/80 mb-6" dangerouslySetInnerHTML={{ __html: linkifyBrands(vg.ctaDesc || '') }} />
        <Link
          href="https://app.donkycapital.com"
          className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-colors text-lg"
        >
          {vg.ctaButton}
        </Link>
        <p className="text-sm text-white/60 mt-4">
          <em>{vg.ctaNote}</em>
        </p>
      </section>
    </div>
  )
}
