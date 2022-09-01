import React from 'react'
import { ThemeType, useAuthorContext } from './../context/author-context'
import { useTranslations } from 'next-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleHalfStroke,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons'

export default function Theme() {
  const { theme, setTheme } = useAuthorContext()
  const t = useTranslations('Site.theme')
  const themes = [
    {
      name: 'os',
      icon: faCircleHalfStroke,
    },
    {
      name: 'normal',
      icon: faSun,
    },
    {
      name: 'dark',
      icon: faMoon,
    },
  ] as const
  const onThemeClicked = (theme: ThemeType) => {
    if (
      theme === 'dark' ||
      (theme === 'os' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    setTheme(theme)
  }

  return (
    <div className="root dropdown">
      <label tabIndex={0} className="btn m-1">
        <FontAwesomeIcon
          className="h-6 w-6 text-blue-500"
          icon={
            theme === 'os'
              ? faCircleHalfStroke
              : theme === 'normal'
              ? faSun
              : faMoon
          }
        />
        <span className="ml-4">{t('title')}</span>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
      >
        {themes.map((item) => (
          <li key={item.name}>
            <button onClick={() => onThemeClicked(item.name)}>
              <FontAwesomeIcon
                className="h-6 w-6 text-blue-500"
                icon={item.icon}
              />
              {t(item.name)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
