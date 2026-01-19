'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { i18n, localeNames, type Locale } from '@/lib/i18n/config'

interface LanguageSelectorProps {
  currentLang: Locale
}

export default function LanguageSelector({ currentLang }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const getNewPath = (newLang: Locale) => {
    // Replace the current language in the path
    return pathname.replace(`/${currentLang}`, `/${newLang}`)
  }

  const handleLanguageChange = (newLang: Locale) => {
    // Set cookie for language preference
    document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000`

    // Use window.location for static export compatibility
    window.location.href = getNewPath(newLang)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-[10px] border border-white/5 hover:border-white/10 hover:bg-white/5 transition-colors"
        aria-label="Select language"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 py-2 bg-card rounded-lg border border-white/10 shadow-lg z-50">
          {i18n.locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-white/5 transition-colors ${
                locale === currentLang ? 'text-primary font-medium' : 'text-white/70'
              }`}
            >
              {localeNames[locale]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
