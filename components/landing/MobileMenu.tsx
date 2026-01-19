'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Dictionary } from '@/lib/i18n/getDictionary'
import type { Locale } from '@/lib/i18n/config'

interface MobileMenuProps {
  dict: Dictionary
  lang: Locale
}

export default function MobileMenu({ dict, lang }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center w-10 h-10 rounded-[10px] border border-white/5 hover:border-white/10 hover:bg-white/5 transition-colors"
        aria-label="Open menu"
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
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-background z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-white/10">
          <span className="text-lg font-bold">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="p-4">
          <Link
            href={`/${lang}#features`}
            onClick={() => setIsOpen(false)}
            className="block py-3 text-white/70 hover:text-white transition-colors"
          >
            {dict.landing.header.features}
          </Link>
          <Link
            href={`/${lang}#pricing`}
            onClick={() => setIsOpen(false)}
            className="block py-3 text-white/70 hover:text-white transition-colors"
          >
            {dict.landing.header.pricing}
          </Link>

          <div className="border-t border-white/10 my-2" />

          <a
            href={`https://app.donkycapital.com/${lang}/auth`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block py-3 text-white/70 hover:text-white transition-colors"
          >
            {dict.landing.header.login}
          </a>

          <Link
            href={`/${lang}/early-access`}
            onClick={() => setIsOpen(false)}
            className="block mt-4 py-3 px-4 text-center rounded-[10px] font-semibold btn-gradient text-white"
          >
            {dict.landing.header.startFree}
          </Link>
        </nav>
      </div>
    </>
  )
}
