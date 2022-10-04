import { createContext, ReactNode, useContext } from 'react'

type AuthorContextType = {
  author: 'furia'
}

const initialContextValue = {
  author: 'furia',
} as const

const AuthorContext = createContext<AuthorContextType>(initialContextValue)

export function useAuthorContext() {
  return useContext(AuthorContext)
}

type Props = {
  children: ReactNode
}

export function AuthorProvider({ children }: Props) {
  const value = {
    author: initialContextValue.author,
  }
  return (
    <>
      <AuthorContext.Provider value={value}>{children}</AuthorContext.Provider>
    </>
  )
}
