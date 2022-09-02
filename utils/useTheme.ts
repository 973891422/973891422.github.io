import { useState, useEffect } from 'react'

export const enum ThemeType {
  OsDefault = 'os',
  Light = 'light',
  Dark = 'dark',
}
const THEMES = [ThemeType.OsDefault, ThemeType.Light, ThemeType.Dark]

export function useTheme() {
  const getTheme = () => {
    if (!('theme' in localStorage)) {
      return ThemeType.OsDefault
    } else if (localStorage.theme === 'dark') {
      return ThemeType.Dark
    } else {
      return ThemeType.Light
    }
  }
  const [theme, setThemeState] = useState(ThemeType.OsDefault)
  const setTheme = (theme: ThemeType) => {
    if (
      theme === ThemeType.Dark ||
      (theme === ThemeType.OsDefault &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.removeAttribute('data-theme')
    }

    switch (theme) {
      case ThemeType.Light:
        localStorage.theme = 'light'
        break
      case ThemeType.Dark:
        localStorage.theme = 'dark'
        break
      default:
        localStorage.removeItem('theme')
    }
    setThemeState(theme)
  }
  useEffect(() => {
    setTheme(getTheme())
  })
  return {
    THEMES,
    theme,
    setTheme,
  }
}
