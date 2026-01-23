'use client'

import { useState } from 'react'

interface FAQ {
  question: string
  answer: string
}

interface ScalableCapitalFAQProps {
  faqs: FAQ[]
}

export default function ScalableCapitalFAQ({ faqs }: ScalableCapitalFAQProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="card p-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={index < faqs.length - 1 ? 'border-b border-white/10' : ''}
        >
          <button
            onClick={() => handleToggle(index)}
            className="w-full flex items-center justify-between py-4 text-left hover:text-primary transition-colors group"
          >
            <span className="text-sm font-semibold group-hover:underline">
              {faq.question}
            </span>
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
              className={`flex-shrink-0 ml-2 transition-transform duration-200 ${
                expandedIndex === index ? 'rotate-180' : ''
              }`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          <div
            className={`overflow-hidden transition-all duration-200 ${
              expandedIndex === index ? 'max-h-[500px] pb-4' : 'max-h-0'
            }`}
          >
            <p className="text-white/80 text-sm">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
