import { createContext, ReactNode, useContext, useState } from 'react'

export type ThemeType = 'normal' | 'dark' | 'os'
type AuthorContextType = {
  author: 'Furia'
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
}

const initialContextValue = {
  author: 'Furia',
  theme: 'os',
  setTheme: () => {
    // do nothing
  },
} as const

const AuthorContext = createContext<AuthorContextType>(initialContextValue)

export function useAuthor() {
  return useContext(AuthorContext)
}

type Props = {
  children: ReactNode
}

export function AuthorProvider({ children }: Props) {
  const [theme, setTheme] = useState<ThemeType>(initialContextValue.theme)
  const value = {
    author: initialContextValue.author,
    theme,
    setTheme,
  }

  return (
    <>
      <AuthorContext.Provider value={value}>{children}</AuthorContext.Provider>
    </>
  )
}
