'use client'

import { useState, useEffect, useCallback } from 'react'
import OptimizedImage from '@/components/common/OptimizedImage'
import type { Dictionary } from '@/lib/i18n/getDictionary'

interface WidgetsCarouselProps {
  dict: Dictionary
}

interface Widget {
  nameKey: string
  badgeKey: string
  descriptionKey: string
  tagKeys: string[]
  image: string
}

export default function WidgetsCarousel({ dict }: WidgetsCarouselProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const itemsVisible = isMobile ? 1 : 2
  const widgetWidthPercentage = 100 / itemsVisible

  const widgetAltTexts: Record<string, string> = {
    'portfolio-trends': 'Widget performance portafoglio con grafico area rendimenti mensili',
    'heatmap': 'Widget heatmap settoriale con allocazione asset class e performance',
    'line-chart': 'Widget grafico lineare storico con raggruppamenti multipli',
    'stack-chart': 'Widget grafico stacked 100% per evoluzione composizione portafoglio',
    'pie-chart': 'Widget grafico torta con percentuali allocazione',
    'allocation-breakdown': 'Widget breakdown allocazione dettagliato',
    'performance-table': 'Widget tabella performance multi-periodo',
    'profit-loss': 'Widget profit & loss completo con filtri flessibili',
    'transactions-list': 'Widget storico operazioni cronologico',
    'portfolio-table': 'Widget tabella portafogli con analisi multi-portfolio',
    'holdings-summary': 'Widget riepilogo holdings con posizioni live',
    'performance-metrics': 'Widget metriche performance essenziali'
  }

  const widgets: Widget[] = [
    { nameKey: 'portfolio-trends', badgeKey: 'trending', descriptionKey: 'portfolio-trends', tagKeys: ['areaChart', 'timeSeries', 'comparison'], image: '/assets/widgets/portfolio-trends.png' },
    { nameKey: 'heatmap', badgeKey: 'visual', descriptionKey: 'heatmap', tagKeys: ['heatmap', 'performanceColors', 'bubbles'], image: '/assets/widgets/heatmap.png' },
    { nameKey: 'line-chart', badgeKey: 'versatile', descriptionKey: 'line-chart', tagKeys: ['lineChart', 'multiGrouping', 'historical'], image: '/assets/widgets/line-chart.png' },
    { nameKey: 'stack-chart', badgeKey: 'stacked', descriptionKey: 'stack-chart', tagKeys: ['100stacked', 'evolution', 'multiCategory'], image: '/assets/widgets/stack-chart.png' },
    { nameKey: 'pie-chart', badgeKey: 'visual', descriptionKey: 'pie-chart', tagKeys: ['pieChart', 'percentages', 'multiCategory'], image: '/assets/widgets/pie-chart.png' },
    { nameKey: 'allocation-breakdown', badgeKey: 'analytical', descriptionKey: 'allocation-breakdown', tagKeys: ['detail', 'weightValue', 'performance'], image: '/assets/widgets/allocation-breakdown.png' },
    { nameKey: 'performance-table', badgeKey: 'multiPeriod', descriptionKey: 'performance-table', tagKeys: ['tableView', '6periods', 'trendIcons'], image: '/assets/widgets/performance-table.png' },
    { nameKey: 'profit-loss', badgeKey: 'complete', descriptionKey: 'profit-loss', tagKeys: ['totalPL', 'flexibleFilters', 'detail'], image: '/assets/widgets/profit-loss.png' },
    { nameKey: 'transactions-list', badgeKey: 'history', descriptionKey: 'transactions-list', tagKeys: ['chronologicalList', 'period', 'detail'], image: '/assets/widgets/transactions-list.png' },
    { nameKey: 'portfolio-table', badgeKey: 'detailed', descriptionKey: 'portfolio-table', tagKeys: ['tableView', 'multiPortfolio', 'analysis'], image: '/assets/widgets/portfolio-table.png' },
    { nameKey: 'holdings-summary', badgeKey: 'holdings', descriptionKey: 'holdings-summary', tagKeys: ['livePositions', 'pmcValues', 'pl'], image: '/assets/widgets/holdings-summary.png' },
    { nameKey: 'performance-metrics', badgeKey: 'essential', descriptionKey: 'performance-metrics', tagKeys: ['keyMetrics', 'aggregateValues', 'performance'], image: '/assets/widgets/performance-metrics.png' },
  ]

  const totalWidgets = widgets.length
  const extendedWidgets = [...widgets, ...widgets, ...widgets]

  const [currentIndex, setCurrentIndex] = useState(totalWidgets)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(true)

  const translateX = -(currentIndex * widgetWidthPercentage)

  const handleNext = useCallback(() => {
    setIsPaused(true)
    setCurrentIndex((prev) => prev + 1)
    setTimeout(() => setIsPaused(false), 3000)
  }, [])

  const handlePrev = useCallback(() => {
    setIsPaused(true)
    setCurrentIndex((prev) => prev - 1)
    setTimeout(() => setIsPaused(false), 3000)
  }, [])

  // Auto-scroll
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext()
      }, 3500)
      return () => clearInterval(interval)
    }
  }, [isPaused, handleNext])

  // Loop reset
  useEffect(() => {
    if (currentIndex >= totalWidgets * 2 || currentIndex <= totalWidgets - totalWidgets) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false)
        const resetIndex = currentIndex >= totalWidgets * 2
          ? currentIndex - totalWidgets
          : currentIndex + totalWidgets
        setCurrentIndex(resetIndex)
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, totalWidgets])

  // Re-enable transition after reset
  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => setIsTransitioning(true), 50)
      return () => clearTimeout(timeout)
    }
  }, [isTransitioning])

  return (
    <section className="mt-8 animate-fade-up">
      <h2 className="text-lg font-semibold mb-4">
        {dict.landing.widgetsCarousel.title}
      </h2>

      <div
        className="card p-4 md:p-6 relative overflow-hidden bg-gradient-to-br from-primary/[0.03] to-green-600/[0.03]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden -mx-2">
          <div
            className="flex"
            style={{
              transform: `translateX(${translateX}%)`,
              transition: isTransitioning ? 'transform 2s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
            }}
          >
            {extendedWidgets.map((widget, index) => (
              <div
                key={`${widget.nameKey}-${index}`}
                className="flex-none px-2"
                style={{ width: isMobile ? '100%' : '50%' }}
              >
                <div className="flex flex-col h-full">
                  <div className="h-60 md:h-[400px] rounded-[10px] overflow-hidden mb-4 bg-[#292929] border border-white/5">
                    <OptimizedImage
                      src={widget.image}
                      alt={widgetAltTexts[widget.nameKey] || dict.widgets.names[widget.nameKey as keyof typeof dict.widgets.names]}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold">
                      {dict.widgets.names[widget.nameKey as keyof typeof dict.widgets.names]}
                    </span>
                    <span className="px-2 py-0.5 text-[11px] rounded bg-primary/20 text-primary">
                      {dict.widgets.badges[widget.badgeKey as keyof typeof dict.widgets.badges]}
                    </span>
                  </div>

                  <p className="text-white/60 text-sm mb-4 h-10 overflow-hidden">
                    {dict.widgets.descriptions[widget.descriptionKey as keyof typeof dict.widgets.descriptions]}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {widget.tagKeys.map(tagKey => (
                      <span
                        key={tagKey}
                        className="px-2 py-0.5 text-[10px] rounded bg-white/5"
                      >
                        {dict.widgets.tags[tagKey as keyof typeof dict.widgets.tags]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-[40%] p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-[40%] p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {widgets.map((_, idx) => {
            const normalizedIndex = currentIndex % totalWidgets
            const isActive = normalizedIndex === idx
            return (
              <button
                key={idx}
                onClick={() => setCurrentIndex(totalWidgets + idx)}
                className={`h-2 rounded transition-all ${
                  isActive ? 'w-5 bg-primary' : 'w-2 bg-white/20'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
