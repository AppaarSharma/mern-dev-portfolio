import { useState } from 'react'

export function useCopyToClipboard() {
  const [copiedText, setCopiedText] = useState('')

  const copy = async (value: string) => {
    await navigator.clipboard.writeText(value)
    setCopiedText(value)
    window.setTimeout(() => setCopiedText(''), 1800)
  }

  return {
    copiedText,
    copy,
  }
}
