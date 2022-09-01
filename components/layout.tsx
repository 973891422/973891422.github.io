import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const name = 'Furia' // 名称，根据需要修改
export const siteTitle = "Furia's Blog" // 网站标题，根据需要修改

interface Props {
  children: React.ReactNode
  isHome?: boolean
}

export default function Layout({ children, isHome }: Props) {
  return (
    <div className="mx-auto mt-12 mb-24 max-w-2xl px-4">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="AiljxBlog——Ailjx的博客" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex flex-col items-center">
        {isHome ? (
          <>
            {/* <Image
              priority
              src="/images/profile.jfif"
              className="rounded-full"
              height={144}
              width={144}
              alt={name}
            /> */}
            {/* <h1 className="my-4 text-5xl font-extrabold tracking-tighter">
              {name}
            </h1> */}
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jfif"
                  className="rounded-full"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className="my-4 text-2xl">
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!isHome && (
        <div className="mt-12">
          <Link href="/">
            <a>← Home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
