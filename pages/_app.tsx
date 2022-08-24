import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthorProvider } from '../context/author-context'
import { NextIntlProvider } from 'next-intl'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextIntlProvider messages={pageProps.messages}>
        <AuthorProvider>
          <Component {...pageProps} />
        </AuthorProvider>
      </NextIntlProvider>
    </>
  )
}

export default MyApp
