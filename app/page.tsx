// 副作用：请求Bing背景图片API
interface BingImage {
  url: string
  title: string
  copyright: string
  copyrightlink: string
}

async function getBingBackgroundImage() {
  // bing官方接口： idx=-1 截至明天， n=8 8张，ensearch=1 英文
  //   const enSearsh = (locale ?? defaultLocale) === 'en' ? '1' : '0'
  const res = await fetch(
    `https://cn.bing.com/HPImageArchive.aspx?format=js&idx=-1&n=8&mkt=zh-CN&ensearch=1`
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

  return images
}

export default async function Page() {
  const images = await getBingBackgroundImage()
  console.log(images)
  return <main></main>
}
