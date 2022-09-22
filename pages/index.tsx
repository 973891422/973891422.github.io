import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Date from '../components/date'
import Layout from '../components/layout'
import { getSortedPostsData } from '../utils/posts'
import { useAuthorContext } from './../context/author-context'
import { useTranslations } from 'next-intl'
import Theme from '../components/Theme'
import Language from '../components/Language'
import Image from 'next/image'

export const getStaticProps: GetStaticProps = async ({
  locale,
  defaultLocale,
}) => {
  // 获取文章列表
  const allPostsData = getSortedPostsData()
  return {
    props: {
      messages: (await import(`../messages/${locale ?? defaultLocale}.json`))
        .default,
      allPostsData,
    },
  }
}
interface Props {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}

const Home: NextPage<Props> = ({ allPostsData }) => {
  const { author } = useAuthorContext()
  const t = useTranslations('Site')

  return (
    <Layout isHome>
      <div>
        <Head>
          <title>{author + "' Blog"}</title>
        </Head>

        <section className="text-center text-xl leading-normal">
          <p>{author}</p>

          <p>{t('title')}</p>
        </section>
        <Theme></Theme>
        <Language></Language>
        <Image
          priority
          src="https://cn.bing.com/sa/simg/hpb/LaDigue_EN-CA1115245085_1920x1080.jpg"
          className="rounded-full"
          height={108}
          width={108}
          alt={'s'}
        />

        <section className="pt-4 text-xl leading-normal">
          <h2 className=" my-4 text-2xl font-bold">Blog</h2>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id} className="mb-5">
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default Home
