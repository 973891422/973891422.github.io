import { useTranslations } from 'next-intl'
import Head from 'next/head'
import React, { useState } from 'react'

import BingGallery, { BingImageInfo } from './bing-gallery'
import LanguageMenu from './language-menu'
import ThemeMenu from './theme-menu'

interface Props {
  children: React.ReactNode
  images: BingImageInfo[]
}

export default function Layout({ children, images }: Props) {
  const t = useTranslations('site')
  const [imageIndex, setImageIndex] = useState(0)
  return (
    <div
      className="h-screen w-screen bg-zinc-500 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(' + images[imageIndex].url + ')',
      }}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{'test' + t('title')}</title>
        <meta charSet="utf-8" />
        <meta name="author" content={'test'} />
        <meta name="description" content={t('description')} />
      </Head>

      <header className="mr-4 flex justify-end">
        <BingGallery
          images={images}
          index={imageIndex}
          setIndex={setImageIndex}
        />
        <ThemeMenu />
        <LanguageMenu />
      </header>

      <main>{children}</main>
    </div>
  )
}
