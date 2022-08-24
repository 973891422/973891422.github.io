import { createContext, ReactNode, useContext, useState } from 'react'

type theme = 'normal' | 'dark'
type AuthorContextType = {
  author: 'Furia'
  theme: theme
  setTheme: (theme: theme) => void
}

const initialContextValue = {
  author: 'Furia',
  theme: 'normal',
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
  const [theme, setTheme] = useState<theme>(initialContextValue.theme)
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
