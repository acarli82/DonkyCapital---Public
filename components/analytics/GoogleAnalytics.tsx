'use client'

import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import ReactGA from 'react-ga4'
import { hasAnalyticsConsent } from '@/components/cookies/CookieConsent'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize GA when consent is given
  useEffect(() => {
    const initializeGA = () => {
      if (!GA_MEASUREMENT_ID) return
      if (!hasAnalyticsConsent()) return
      if (isInitialized) return

      ReactGA.initialize(GA_MEASUREMENT_ID)
      setIsInitialized(true)
    }

    // Check on mount
    initializeGA()

    // Listen for consent changes
    const handleConsentChange = () => {
      initializeGA()
    }

    window.addEventListener('cookieConsentChanged', handleConsentChange)
    return () => {
      window.removeEventListener('cookieConsentChanged', handleConsentChange)
    }
  }, [isInitialized])

  // Track page views
  useEffect(() => {
    if (!isInitialized) return
    if (!GA_MEASUREMENT_ID) return

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')

    ReactGA.send({
      hitType: 'pageview',
      page: url,
    })
  }, [pathname, searchParams, isInitialized])

  return null
}
