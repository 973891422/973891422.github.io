import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ThemeType, useAuthor } from './../context/author-context'
import { useTranslations } from 'next-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleHalfStroke,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons'

export default function Theme() {
  const { theme, setTheme } = useAuthor()
  const t = useTranslations('Site.theme')
  const themes = [
    {
      name: 'os',
      description: t('os'),
      icon: faCircleHalfStroke,
    },
    {
      name: 'normal',
      description: t('normal'),
      icon: faSun,
    },
    {
      name: 'dark',
      description: t('dark'),
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
    <Popover className="relative">
      <Popover.Button className="group inline-flex items-center rounded-md px-3 py-2 text-base font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
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
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
          {({ close }) => (
            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                {themes.map((item) => (
                  <button
                    key={item.name}
                    className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50"
                    onClick={() => {
                      onThemeClicked(item.name)
                      close()
                    }}
                  >
                    <FontAwesomeIcon
                      className="h-6 w-6 text-blue-500"
                      icon={item.icon}
                    />
                    <span className="ml-4">{item.description}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
