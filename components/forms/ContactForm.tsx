'use client'

import { useState, useEffect } from 'react'
import type { Dictionary } from '@/lib/i18n/getDictionary'
import { submitContactForm } from '@/lib/api/public-api'

interface ContactFormProps {
  dict: Dictionary
}

export default function ContactForm({ dict }: ContactFormProps) {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [canSubmit, setCanSubmit] = useState(false)
  const [submitTimer, setSubmitTimer] = useState(3)

  // Submit delay timer (anti-spam: 3 seconds)
  useEffect(() => {
    if (submitTimer > 0) {
      const timer = setTimeout(() => setSubmitTimer(submitTimer - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      setCanSubmit(true)
    }
  }, [submitTimer])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Anti-spam: reject if honeypot is filled
    if (honeypot) {
      return
    }

    // Validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(dict.contact.emailInvalid)
      return
    }
    if (!message.trim()) {
      setError(dict.contact.messageRequired)
      return
    }

    setSubmitting(true)

    try {
      await submitContactForm({
        name: 'Contact Form',
        email,
        subject: 'Contact Form Message',
        message,
        honeypot,
      })

      setSuccess(true)
      setEmail('')
      setMessage('')
      setHoneypot('')
    } catch (err: unknown) {
      console.error('Error submitting message:', err)
      const errorMessage = err instanceof Error ? err.message : dict.contact.submitError
      setError(errorMessage)
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-2">{dict.contact.successTitle}</h2>
        <p className="text-white/70 mb-6">{dict.contact.successMessage}</p>
        <button
          onClick={() => setSuccess(false)}
          className="px-6 py-2.5 rounded-[10px] font-semibold border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
        >
          {dict.contact.sendAnother}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <span>{error}</span>
          <button type="button" onClick={() => setError(null)} className="ml-auto hover:text-red-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      )}

      {/* Honeypot field - hidden from users, bots will fill it */}
      <input
        type="text"
        name="honeypot"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">{dict.contact.emailLabel}</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
          placeholder={dict.contact.emailPlaceholder}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">{dict.contact.messageLabel}</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
          placeholder={dict.contact.messagePlaceholder}
        />
      </div>

      <button
        type="submit"
        disabled={submitting || !canSubmit}
        className="w-full py-3 rounded-[10px] font-semibold btn-gradient text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? (
          <>
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
            </svg>
            {dict.contact.submitting}
          </>
        ) : !canSubmit ? (
          `${dict.contact.submitButton} (${submitTimer}s)`
        ) : (
          dict.contact.submitButton
        )}
      </button>
    </form>
  )
}
