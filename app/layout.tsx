import { getBingBackgroundImage } from 'api/bing'
import 'styles/globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return getBingBackgroundImage()
    .then((bing) => {
      return {
        backgroundImage: `url(${'' + bing.baseurl + bing.images[0].url})`,
      }
    })
    .catch(() => {
      return {}
    })
    .then((styleObject) => {
      return (
        <html lang="en">
          <body
            className="h-screen w-screen bg-zinc-500 bg-cover bg-center bg-no-repeat"
            style={styleObject}
          >
            {children}
          </body>
        </html>
      )
    })
}

// export default async function RootLayout({
//   // Layouts must accept a children prop.
//   // This will be populated with nested layouts or pages
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   let styleObject = {}
//   try {
//     const bing = await getBingBackgroundImage()
//     styleObject = {
//       backgroundImage: `url(${'' + bing.baseurl + bing.images[0].url})`,
//     }
//   } catch () {

//   }

//   return (
//     <html lang="en">
//       <body
//         className="h-screen w-screen bg-zinc-500 bg-cover bg-center bg-no-repeat"
//         style={styleObject}
//       >
//         {children}
//       </body>
//     </html>
//   )
// }
