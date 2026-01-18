'use client'

import { useState, useEffect } from 'react'
import { submitContactForm } from '@/lib/api/public-api'
import type { Dictionary } from '@/lib/i18n/getDictionary'

interface FloatingContactButtonProps {
  dict: Dictionary
}

export default function FloatingContactButton({ dict }: FloatingContactButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    honeypot: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [canSubmit, setCanSubmit] = useState(false)
  const [submitTimer, setSubmitTimer] = useState(3)

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({ email: '', message: '', honeypot: '' })
      setError(null)
      setSuccess(false)
      setSubmitTimer(3)
      setCanSubmit(false)
    }
  }, [isOpen])

  // Submit delay timer (anti-spam: 3 seconds)
  useEffect(() => {
    if (isOpen && submitTimer > 0) {
      const timer = setTimeout(() => setSubmitTimer(submitTimer - 1), 1000)
      return () => clearTimeout(timer)
    } else if (isOpen) {
      setCanSubmit(true)
    }
  }, [isOpen, submitTimer])

  const handleChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [field]: e.target.value })
  }

  const validateForm = (): string | null => {
    if (!formData.email.trim()) {
      return dict.contact.emailRequired
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return dict.contact.emailInvalid
    }
    if (!formData.message.trim()) {
      return dict.contact.messageRequired
    }
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setSubmitting(true)
    setError(null)

    try {
      await submitContactForm({
        name: 'Quick Contact',
        email: formData.email,
        subject: 'Quick Contact Form',
        message: formData.message,
        honeypot: formData.honeypot,
      })
      setSuccess(true)
    } catch (err: unknown) {
      console.error('Error submitting quick contact:', err)
      setError(dict.contact.submitError)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full btn-gradient text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        aria-label={dict.contact.floatingButton}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
          />
        </svg>
        <span className="hidden sm:inline">{dict.contact.floatingButton}</span>
      </button>

      {/* Modal Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Modal / Drawer */}
      <div
        className={`fixed z-50 bg-card border border-border rounded-t-2xl sm:rounded-2xl shadow-2xl transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-full pointer-events-none'
        } bottom-0 left-0 right-0 sm:bottom-24 sm:right-6 sm:left-auto sm:w-[400px]`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="text-lg font-semibold">{dict.contact.formTitle}</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label={dict.common.cancel}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-sm text-gray-400 mb-4">{dict.contact.pageSubtitle}</p>

          {success ? (
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 text-primary">
              {dict.contact.successMessage}
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {error && (
                <div className="p-3 mb-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center justify-between">
                  <span>{error}</span>
                  <button
                    type="button"
                    onClick={() => setError(null)}
                    className="p-1 hover:bg-red-500/20 rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}

              {/* Honeypot field */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange('honeypot')}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="mb-4">
                <label htmlFor="floating-email" className="block text-sm font-medium mb-2">
                  {dict.contact.emailLabel}
                </label>
                <input
                  type="email"
                  id="floating-email"
                  value={formData.email}
                  onChange={handleChange('email')}
                  placeholder={dict.contact.emailPlaceholder}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="floating-message" className="block text-sm font-medium mb-2">
                  {dict.contact.messageLabel}
                </label>
                <textarea
                  id="floating-message"
                  value={formData.message}
                  onChange={handleChange('message')}
                  placeholder={dict.contact.messagePlaceholder}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  disabled={submitting}
                  className="flex-1 px-4 py-3 rounded-lg border border-border hover:bg-white/5 transition-colors disabled:opacity-50"
                >
                  {dict.common.cancel}
                </button>
                <button
                  type="submit"
                  disabled={submitting || !canSubmit}
                  className="flex-1 px-4 py-3 rounded-lg btn-gradient text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      {dict.contact.submitting}
                    </>
                  ) : !canSubmit ? (
                    `${dict.contact.submitButton} (${submitTimer}s)`
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                        />
                      </svg>
                      {dict.contact.submitButton}
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  )
}
