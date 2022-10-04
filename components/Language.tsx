import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Language() {
  const router = useRouter()

  const getTextFromLocale = (locale: string) => {
    switch (locale) {
      case 'en':
        return 'English'
      default:
        return '中文'
    }
  }

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-circle btn-sm m-2">
        <FontAwesomeIcon className="h-6 w-6" icon={faLanguage} />
      </label>

      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box w-32 gap-1 bg-base-100 p-2 shadow"
      >
        {router.locales?.map((locale) => (
          <li key={locale}>
            <Link href={router.asPath} locale={locale}>
              <a
                className={
                  router.locale === locale ? 'bg-violet-600 text-slate-200' : ''
                }
              >
                {getTextFromLocale(locale)}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
