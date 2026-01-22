import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { getDictionary } from '@/lib/i18n/getDictionary'
import type { Locale } from '@/lib/i18n/config'
import EarlyAccessForm from '@/components/forms/EarlyAccessForm'
import JsonLd from '@/components/seo/JsonLd'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang)

  return {
    title: dict.seo.earlyAccess.title,
    description: dict.seo.earlyAccess.description,
    alternates: {
      canonical: `https://www.donkycapital.com/${params.lang}/early-access`,
    },
  }
}

export default async function EarlyAccessPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <>
      <JsonLd dict={dict} page="earlyAccess" />

      <div className="py-8">
        {/* Main Hero Box */}
        <div className="bg-gradient-to-br from-primary/5 to-green-600/5 rounded-[10px] p-6 md:p-9 shadow-lg border border-white/[0.03] mb-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card px-3 py-1.5 rounded-full text-white/80 text-[13px] mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            Early Access Program
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-[32px] leading-tight font-bold mb-4">
            <span className="gradient-text">
              {dict.earlyAccess.title}
            </span>
          </h1>

          {/* Description */}
          <p className="text-white/80 mb-3 max-w-[800px] leading-relaxed">
            {dict.earlyAccess.intro}
          </p>

          <p className="font-semibold text-primary">
            {dict.earlyAccess.freeForever}
          </p>
        </div>

        {/* Benefits Section */}
        <div className="rounded-[10px] p-6 md:p-8 mb-8 bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
          <h2 className="text-xl font-bold mb-6">{dict.earlyAccess.whyJoin}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-1">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <div>
                <p className="font-semibold">{dict.earlyAccess.benefit1Title}</p>
                <p className="text-white/80 text-sm mt-1">{dict.earlyAccess.benefit1Desc}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-1">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <div>
                <p className="font-semibold">{dict.earlyAccess.benefit2Title}</p>
                <p className="text-white/80 text-sm mt-1">{dict.earlyAccess.benefit2Desc}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-1">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
              <div>
                <p className="font-semibold">{dict.earlyAccess.benefit3Title}</p>
                <p className="text-white/80 text-sm mt-1">{dict.earlyAccess.benefit3Desc}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-1">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              <div>
                <p className="font-semibold">{dict.earlyAccess.benefit4Title}</p>
                <p className="text-white/80 text-sm mt-1">{dict.earlyAccess.benefit4Desc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Request Form */}
        <div className="card p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-6">{dict.earlyAccess.formTitle}</h2>
          <EarlyAccessForm dict={dict} />
        </div>
      </div>
    </>
  )
}
