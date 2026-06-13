import { useEffect, useMemo, useState } from 'react'
import { AppPreferencesContext, translations } from './AppPreferencesCore'

export function AppPreferencesProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('wd-theme') || 'light')
  const [language, setLanguage] = useState(() => localStorage.getItem('wd-language') || 'id')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('wd-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = language === 'id' ? 'id' : 'en'
    localStorage.setItem('wd-language', language)
  }, [language])

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      language,
      setLanguage,
      t: translations[language],
    }),
    [language, theme],
  )

  return <AppPreferencesContext.Provider value={value}>{children}</AppPreferencesContext.Provider>
}
