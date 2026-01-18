const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://www.donkycapital.com/api'

export interface EarlyAccessRequest {
  email: string
  notes?: string
}

export interface ContactRequest {
  name: string
  email: string
  subject: string
  message: string
  honeypot?: string
}

export interface ApiResponse {
  success: boolean
  message?: string
}

export async function submitEarlyAccessRequest(data: EarlyAccessRequest): Promise<ApiResponse> {
  const response = await fetch(`${API_BASE}/early-access/request`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.message || 'Failed to submit request')
  }

  return response.json()
}

export async function submitContactForm(data: ContactRequest): Promise<ApiResponse> {
  const response = await fetch(`${API_BASE}/contact/submit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...data,
      honeypot: '', // Anti-spam
    }),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.message || 'Failed to submit message')
  }

  return response.json()
}
