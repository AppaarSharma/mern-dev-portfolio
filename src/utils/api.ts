export type ContactFormPayload = {
  name: string
  email: string
  company: string
  message: string
  website?: string
}

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') ?? ''

export async function submitContactForm(payload: ContactFormPayload) {
  const response = await fetch(`${apiBaseUrl}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const data = (await response.json().catch(() => ({}))) as { message?: string }

  if (!response.ok) {
    throw new Error(data.message ?? 'Unable to send your message right now.')
  }

  return data
}
