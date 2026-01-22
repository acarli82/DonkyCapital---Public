'use client'

import { useState, useEffect } from 'react'

export interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

interface CookieConsentProps {
  dict: {
    cookieConsent: {
      title: string
      description: string
      acceptAll: string
      rejectAll: string
      customize: string
      savePreferences: string
      necessary: {
        title: string
        description: string
      }
      analytics: {
        title: string
        description: string
      }
      marketing: {
        title: string
        description: string
      }
      privacyPolicy: string
    }
  }
  privacyPolicyUrl: string
}

const COOKIE_CONSENT_KEY = 'donky-cookie-consent'

export function getCookiePreferences(): CookiePreferences | null {
  if (typeof window === 'undefined') return null

  const stored = localStorage.getItem(COOKIE_CONSENT_KEY)
  if (!stored) return null

  try {
    return JSON.parse(stored)
  } catch {
    return null
  }
}

export function hasAnalyticsConsent(): boolean {
  const prefs = getCookiePreferences()
  return prefs?.analytics ?? false
}

export default function CookieConsent({ dict, privacyPolicyUrl }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const stored = getCookiePreferences()
    if (!stored) {
      setIsVisible(true)
    }
  }, [])

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs))
    setIsVisible(false)

    // Dispatch custom event for other components to react
    window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: prefs }))
  }

  const handleAcceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    })
  }

  const handleRejectAll = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
    })
  }

  const handleSaveCustom = () => {
    savePreferences(preferences)
  }

  if (!isVisible) return null

  const t = dict.cookieConsent

  return (
    <div className="fixed bottom-4 left-4 z-[100] max-w-md">
      <div className="bg-[#1a2332] border-l-4 border-l-primary border border-[#2a3544] rounded-xl shadow-xl overflow-hidden animate-fade-up">
        {/* Main banner */}
        {!showCustomize ? (
          <div className="p-5">
            <h3 className="text-base font-semibold text-white mb-2">{t.title}</h3>
            <p className="text-gray-400 text-sm mb-4">
              {t.description}{' '}
              <a
                href={privacyPolicyUrl}
                className="text-primary hover:text-primary-light underline"
              >
                {t.privacyPolicy}
              </a>
            </p>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={handleAcceptAll}
                className="flex-1 min-w-[120px] px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                {t.acceptAll}
              </button>
              <button
                onClick={handleRejectAll}
                className="flex-1 min-w-[120px] px-3 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-colors"
              >
                {t.rejectAll}
              </button>
              <button
                onClick={() => setShowCustomize(true)}
                className="w-full px-3 py-2 border border-white/20 hover:border-white/40 text-white text-sm font-medium rounded-lg transition-colors"
              >
                {t.customize}
              </button>
            </div>
          </div>
        ) : (
          /* Customize panel */
          <div className="p-5 max-h-[80vh] overflow-y-auto">
            <h3 className="text-base font-semibold text-white mb-3">{t.customize}</h3>

            <div className="space-y-3 mb-4">
              {/* Necessary cookies - always enabled */}
              <div className="flex items-start justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex-1 mr-3">
                  <h4 className="text-white text-sm font-medium">{t.necessary.title}</h4>
                  <p className="text-gray-400 text-xs mt-1">{t.necessary.description}</p>
                </div>
                <div className="relative flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="sr-only peer"
                  />
                  <div className="w-10 h-5 bg-primary/50 rounded-full cursor-not-allowed">
                    <div className="absolute top-0.5 left-[18px] w-4 h-4 bg-white rounded-full shadow"></div>
                  </div>
                </div>
              </div>

              {/* Analytics cookies */}
              <div className="flex items-start justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex-1 mr-3">
                  <h4 className="text-white text-sm font-medium">{t.analytics.title}</h4>
                  <p className="text-gray-400 text-xs mt-1">{t.analytics.description}</p>
                </div>
                <label className="relative cursor-pointer flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences(p => ({ ...p, analytics: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-10 h-5 bg-white/20 peer-checked:bg-primary rounded-full transition-colors">
                    <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                      preferences.analytics ? 'translate-x-[18px]' : 'translate-x-0.5'
                    }`}></div>
                  </div>
                </label>
              </div>

              {/* Marketing cookies */}
              <div className="flex items-start justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex-1 mr-3">
                  <h4 className="text-white text-sm font-medium">{t.marketing.title}</h4>
                  <p className="text-gray-400 text-xs mt-1">{t.marketing.description}</p>
                </div>
                <label className="relative cursor-pointer flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences(p => ({ ...p, marketing: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-10 h-5 bg-white/20 peer-checked:bg-primary rounded-full transition-colors">
                    <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                      preferences.marketing ? 'translate-x-[18px]' : 'translate-x-0.5'
                    }`}></div>
                  </div>
                </label>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleSaveCustom}
                className="flex-1 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                {t.savePreferences}
              </button>
              <button
                onClick={() => setShowCustomize(false)}
                className="px-3 py-2 border border-white/20 hover:border-white/40 text-white text-sm font-medium rounded-lg transition-colors"
              >
                ←
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
