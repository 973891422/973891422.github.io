// export interface BingImages {
//   baseurl: string
//   toolTips: {
//     loading: string
//     previous: string
//     next: string
//     walle: string
//     walls: string
//   }
//   images: {
//     startdate: string
//     fullstartdate: string
//     enddate: string
//     url: string
//     urlbase: string
//     copyright: string
//     copyrightlink: string
//     title: string
//     quiz: string
//     wp: boolean
//     hsh: string
//     drk: number
//     top: number
//     bot: number
//     hs: []
//   }[]
// }

// export interface Image {
//   startdate: string;
//   fullstartdate: string;
//   enddate: string;
//   url: string;
//   urlbase: string;
//   copyright: string;
//   copyrightlink: string;
//   title: string;
//   quiz: string;
//   wp: boolean;
//   hsh: string;
//   drk: number;
//   top: number;
//   bot: number;
//   hs: [];
// }

// export interface Tooltips {
//   loading: string;
//   previous: string;
//   next: string;
//   walle: string;
//   walls: string;
// }

// export interface BingImages {
//   images: Image[];
//   tooltips: Tooltips;
//   baseurl: string;
// }
// Effective：请求Bing背景图片API
export const getBingBackgroundImage = async () => {
  // bing官方接口： idx=-1 截至明天， n=8 8张，ensearch=1 英文
  //   const enSearsh = (locale ?? defaultLocale) === 'en' ? '1' : '0'
  return await fetch(
    `https://cn.bing.com/HPImageArchive.aspx?format=js&idx=-1&n=8&mkt=zh-CN&ensearch=1`
  )
    .then((res) => res.json())
    .then((res) => {
      res.baseurl = 'https://cn.bing.com'
      return res
    })
}
