import { getBingBackgroundImage } from '../api/bing'
import '../styles/globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}

export default async function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  const bing = await getBingBackgroundImage()
  const imgURLs = bing.images.map((img) => {
    return '' + bing.baseurl + img.url
  })

  return (
    <html lang="en">
      <body
        className="h-screen w-screen bg-zinc-500 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imgURLs[0]})` }}
      >
        {children}
      </body>
    </html>
  )
}
