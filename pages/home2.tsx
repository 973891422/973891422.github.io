import type { GetStaticProps, NextPage } from 'next'
import { useState } from 'react'
import Gallery, { BingImageInfo } from '../components/Gallery'
import Language from '../components/Language'
import Theme from '../components/Theme'

interface BingImage {
  url: string
  title: string
  copyright: string
  copyrightlink: string
}
export const getStaticProps: GetStaticProps = async ({
  locale,
  defaultLocale,
}) => {
  // bing官方接口： idx=-1 截至明天， n=8 8张，ensearch=1 英文
  const enSearsh = (locale ?? defaultLocale) === 'en' ? '1' : '0'
  const res = await fetch(
    `https://cn.bing.com/HPImageArchive.aspx?format=js&idx=-1&n=8&mkt=zh-CN&ensearch=${enSearsh}`
  )
  const result = await res.json()
  if (!res.ok) {
    throw new Error(
      `Failed to fetch bing API pictures, received status ${res.status}`
    )
  }
  const images = result.images.map((image: BingImage) => {
    const url = 'https://cn.bing.com' + image.url
    const title = image.title
    const copyrightlink = image.copyrightlink
    const regex = /([^]+) \(([^]+)\)/
    const arr = regex.exec(image.copyright) ?? ['', '', '']
    return { url, title, copyrightlink, copyright: [arr[1], arr[2]] }
  })

  return {
    props: {
      messages: (await import(`../messages/${locale ?? defaultLocale}.json`))
        .default,
      images,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60 * 60, // In seconds
  }
}

interface Props {
  images: BingImageInfo[]
}
const Home2: NextPage<Props> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div
      style={{
        backgroundImage: 'url(' + images[currentIndex].url + ')',
      }}
      className="h-screen w-screen bg-gray-500 bg-cover bg-center bg-no-repeat"
    >
      <div className="flex justify-end">
        <Gallery
          images={images}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        ></Gallery>
        <Theme></Theme>
        <Language></Language>
      </div>
    </div>
  )
}

export default Home2
