'use client'

import { useState } from 'react'
import type { Dictionary } from '@/lib/i18n/getDictionary'
import { submitContactForm } from '@/lib/api/public-api'

interface ContactFormProps {
  dict: Dictionary
}

export default function ContactForm({ dict }: ContactFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Validation
    if (!name.trim()) {
      setError(dict.contact.nameRequired)
      return
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(dict.contact.emailInvalid)
      return
    }
    if (!subject.trim()) {
      setError(dict.contact.subjectRequired)
      return
    }
    if (!message.trim()) {
      setError(dict.contact.messageRequired)
      return
    }

    setSubmitting(true)

    try {
      await submitContactForm({
        name,
        email,
        subject,
        message,
      })

      setSuccess(true)
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    } catch (err: any) {
      console.error('Error submitting message:', err)
      setError(err.message || dict.contact.submitError)
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

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">{dict.contact.nameLabel}</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
          placeholder={dict.contact.namePlaceholder}
        />
      </div>

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
        <label htmlFor="subject" className="block text-sm font-medium mb-2">{dict.contact.subjectLabel}</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
          placeholder={dict.contact.subjectPlaceholder}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">{dict.contact.messageLabel}</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
          placeholder={dict.contact.messagePlaceholder}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
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
        ) : (
          dict.contact.submitButton
        )}
      </button>
    </form>
  )
}
