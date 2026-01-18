import Link from 'next/link'
import type { Dictionary } from '@/lib/i18n/getDictionary'
import type { Locale } from '@/lib/i18n/config'

interface PricingSectionProps {
  dict: Dictionary
  lang: Locale
}

interface PricingPlan {
  name: string
  originalPrice: string
  currentPrice: string
  popular?: boolean
  features: Array<{
    text: string
    highlighted?: boolean
  }>
}

export default function PricingSection({ dict, lang }: PricingSectionProps) {
  const plans: PricingPlan[] = [
    {
      name: dict.landing.pricing.plans.free.name,
      originalPrice: '€0',
      currentPrice: '€0',
      features: [
        { text: dict.landing.pricing.plans.free.features.portfolios },
        { text: dict.landing.pricing.plans.free.features.transactions },
        { text: dict.landing.pricing.plans.free.features.dashboards },
        { text: dict.landing.pricing.plans.free.features.brokerImport },
        { text: dict.landing.pricing.plans.free.features.portfolioValue },
        { text: dict.landing.pricing.plans.free.features.performanceAnalysis },
        { text: dict.landing.pricing.plans.free.features.allocationAnalysis },
        { text: dict.landing.pricing.plans.free.features.profitLoss }
      ]
    },
    {
      name: dict.landing.pricing.plans.standard.name,
      originalPrice: '€5.99',
      currentPrice: '€0',
      popular: true,
      features: [
        { text: dict.landing.pricing.plans.standard.features.portfolios, highlighted: true },
        { text: dict.landing.pricing.plans.standard.features.transactions, highlighted: true },
        { text: dict.landing.pricing.plans.standard.features.dashboards, highlighted: true },
        { text: dict.landing.pricing.plans.free.features.brokerImport },
        { text: dict.landing.pricing.plans.free.features.portfolioValue },
        { text: dict.landing.pricing.plans.free.features.performanceAnalysis },
        { text: dict.landing.pricing.plans.free.features.allocationAnalysis },
        { text: dict.landing.pricing.plans.free.features.profitLoss }
      ]
    },
    {
      name: dict.landing.pricing.plans.premium.name,
      originalPrice: '€9.99',
      currentPrice: '€0',
      features: [
        { text: dict.landing.pricing.plans.premium.features.portfolios, highlighted: true },
        { text: dict.landing.pricing.plans.premium.features.transactions, highlighted: true },
        { text: dict.landing.pricing.plans.premium.features.dashboards, highlighted: true },
        { text: dict.landing.pricing.plans.free.features.brokerImport },
        { text: dict.landing.pricing.plans.free.features.portfolioValue },
        { text: dict.landing.pricing.plans.free.features.performanceAnalysis },
        { text: dict.landing.pricing.plans.free.features.allocationAnalysis },
        { text: dict.landing.pricing.plans.free.features.profitLoss }
      ]
    }
  ]

  return (
    <section id="pricing" className="mt-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">
          {dict.landing.pricing.title}
        </h2>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping-slow" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-xs font-medium text-primary">
            {dict.landing.pricing.earlyProgramActive}
          </span>
        </div>
      </div>

      {/* Early Program Banner */}
      <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 mb-4">
        <p className="text-white/60 text-sm">
          <span className="font-semibold">{dict.landing.pricing.limitedAccess}</span>
          {' '}{dict.landing.pricing.earlyProgramDesc}
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`card p-4 hover:scale-[1.02] transition-transform animate-fade-up ${
              plan.popular ? 'border-primary/30 outline outline-1 outline-primary/20' : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Popular Badge */}
            {plan.popular ? (
              <span className="text-[11px] font-semibold text-primary uppercase tracking-wider mb-2 block">
                {dict.landing.pricing.mostPopular}
              </span>
            ) : (
              <div className="mb-2 h-[14px]" />
            )}

            {/* Plan Name */}
            <p className="font-semibold mb-1.5">{plan.name}</p>

            {/* Pricing */}
            <div className="mb-3">
              <p className="text-white/60 text-sm line-through decoration-2">
                {plan.originalPrice}
                <span className="text-sm font-normal">{dict.landing.pricing.perMonth}</span>
              </p>
              <div>
                <span className="text-xl font-bold text-primary">{plan.currentPrice}</span>
                <span className="text-sm font-normal text-primary/70 ml-1">
                  {dict.landing.pricing.perEarlyAccess}
                </span>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-1.5 mb-4">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className={`flex items-center gap-2 text-sm ${
                    feature.highlighted ? 'text-primary font-medium' : 'text-white/60'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`flex-shrink-0 ${
                      feature.highlighted ? 'text-primary' : 'text-white/40'
                    }`}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {feature.text}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link
              href={`/${lang}/early-access`}
              className="w-full py-2.5 text-center rounded-[10px] font-semibold btn-gradient text-white block"
            >
              {dict.landing.pricing.requestEarlyAccess}
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
