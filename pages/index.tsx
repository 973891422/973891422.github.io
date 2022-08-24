import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Date from '../components/date'
import Layout from '../components/layout'
import { getSortedPostsData } from '../utils/posts'
import { useAuthor } from './../context/author-context'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getStaticProps: GetStaticProps = async ({
  locale,
  defaultLocale,
}) => {
  // 获取文章列表
  const allPostsData = getSortedPostsData()
  return {
    props: {
      ...(await serverSideTranslations(locale ?? defaultLocale ?? 'zh', [
        'common',
        'footer',
      ])),
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
  const { author, theme, setTheme } = useAuthor()
  const onThemeIconClicked = () => {
    if (
      theme === 'dark' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.documentElement.classList.remove('dark')
      setTheme('normal')
    } else {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    }
  }
  return (
    <Layout isHome>
      <div>
        <Head>
          <title>{author + "' Blog"}</title>
        </Head>

        <section className="text-center text-xl leading-normal">
          <p>你好，我是 Furia</p>
          <button onClick={onThemeIconClicked}>
            {theme === 'normal' ? (
              <MoonIcon className="h-6 w-6 text-blue-500"></MoonIcon>
            ) : (
              <SunIcon className="h-6 w-6 text-blue-500"></SunIcon>
            )}
          </button>
          <p>一个又菜又爱玩的前端小白，欢迎来到我的博客！</p>
        </section>

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
