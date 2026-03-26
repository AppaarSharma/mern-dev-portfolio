import { useEffect, useState } from 'react'
import { type ThemeMode } from '../utils/portfolioData'

const STORAGE_KEY = 'devgrid-theme'

export function useThemeMode() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') {
      return 'light'
    }

    const storedTheme = window.localStorage.getItem(STORAGE_KEY)
    return storedTheme === 'night' ? 'night' : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  return {
    theme,
    toggleTheme: () =>
      setTheme((currentTheme) => (currentTheme === 'light' ? 'night' : 'light')),
  }
}
