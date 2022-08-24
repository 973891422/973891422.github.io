import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthorProvider } from '../context/author-context'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthorProvider>
        <Component {...pageProps} />
      </AuthorProvider>
    </>
  )
}

export default appWithTranslation(MyApp)