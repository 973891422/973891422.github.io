import React from 'react'
import { useTranslations } from 'next-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleHalfStroke,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons'
import { ThemeType, useTheme } from '../utils/useTheme'

export default function Theme() {
  const t = useTranslations('Site.theme')

  const { THEMES, theme, setTheme } = useTheme()

  const getIconFromTheme = (theme: ThemeType) => {
    switch (theme) {
      case ThemeType.Light:
        return faSun
      case ThemeType.Dark:
        return faMoon
      default:
        return faCircleHalfStroke
    }
  }

  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn m-1">
        <FontAwesomeIcon
          className="h-6 w-6 text-blue-500"
          icon={getIconFromTheme(theme)}
        />
        <span className="ml-4">{t('title')}</span>
      </label>

      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
      >
        {THEMES.map((item) => (
          <li key={item}>
            <button
              onClick={() => setTheme(item)}
              className={
                '' + (theme === item ? 'bg-violet-600 text-slate-200' : '')
              }
            >
              <FontAwesomeIcon
                className="h-6 w-6 text-blue-500"
                icon={getIconFromTheme(item)}
              />
              {t(item)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
