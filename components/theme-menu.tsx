import React from 'react'
import { useTranslations } from 'next-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleHalfStroke,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons'
import { ThemeType, useTheme } from '../hooks/use-theme'

export default function Theme() {
  const t = useTranslations('theme')

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
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-circle btn-sm m-2">
        <FontAwesomeIcon className="h-6 w-6" icon={getIconFromTheme(theme)} />
      </label>

      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box w-40 gap-1 bg-base-100 p-2 shadow"
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
                className="h-6 w-6"
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
