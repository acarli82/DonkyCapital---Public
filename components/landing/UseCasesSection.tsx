import type { Dictionary } from '@/lib/i18n/getDictionary'

interface UseCasesSectionProps {
  dict: Dictionary
}

export default function UseCasesSection({ dict }: UseCasesSectionProps) {
  const useCases = [
    {
      title: dict.landing.useCases.retailInvestor.title,
      quote: dict.landing.useCases.retailInvestor.quote
    },
    {
      title: dict.landing.useCases.partTimeTrader.title,
      quote: dict.landing.useCases.partTimeTrader.quote
    },
    {
      title: dict.landing.useCases.financialAdvisor.title,
      quote: dict.landing.useCases.financialAdvisor.quote
    }
  ]

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
      {useCases.map((useCase, index) => (
        <div
          key={index}
          className="p-4 rounded-lg bg-gradient-to-b from-primary/[0.04] to-transparent border border-primary/[0.06] hover:border-primary/20 transition-colors animate-fade-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <p className="font-semibold mb-1.5">
            {useCase.title}
          </p>
          <p className="text-white/80 text-sm italic">
            &ldquo;{useCase.quote}&rdquo;
          </p>
        </div>
      ))}
    </section>
  )
}
