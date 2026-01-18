import type { Dictionary } from '@/lib/i18n/getDictionary'

interface FeaturesSectionProps {
  dict: Dictionary
}

export default function FeaturesSection({ dict }: FeaturesSectionProps) {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      ),
      title: dict.landing.features.customizableDashboard.title,
      description: dict.landing.features.customizableDashboard.description,
      brokers: null
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
          <polyline points="17 6 23 6 23 12"/>
        </svg>
      ),
      title: dict.landing.features.advancedAnalytics.title,
      description: dict.landing.features.advancedAnalytics.description,
      brokers: null
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      ),
      title: dict.landing.features.multiPortfolio.title,
      description: dict.landing.features.multiPortfolio.description,
      brokers: ['Moneyfarm', 'Degiro', 'Scalable', 'Directa']
    }
  ]

  return (
    <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="card card-hover p-4 animate-fade-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* Icon */}
          <div className="w-10 h-10 rounded-[10px] bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-3">
            {feature.icon}
          </div>

          {/* Title - H3 for SEO */}
          <h3 className="font-semibold mb-2">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-white/60 text-sm">
            {feature.description}
          </p>

          {/* Brokers (only for Multi-Portfolio) */}
          {feature.brokers && (
            <div className="mt-3 pt-3 border-t border-white/10">
              <div className="flex flex-wrap gap-1.5">
                {feature.brokers.map((broker) => (
                  <span
                    key={broker}
                    className="px-2 py-0.5 text-xs font-medium rounded bg-primary/10 text-primary"
                  >
                    {broker}
                  </span>
                ))}
              </div>
              <p className="text-white/50 text-xs italic mt-2">
                {dict.landing.features.multiPortfolio.manyMore}
              </p>
              <div className="flex items-start gap-1.5 mt-2 text-xs text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span>{dict.landing.features.multiPortfolio.securityNote}</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  )
}
