import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleLeft,
  faAngleRight,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  images: BingImageInfo[]
  currentIndex: number
  setCurrentIndex: Dispatch<SetStateAction<number>>
}

export interface BingImageInfo {
  url: string
  title: string
  copyright: [string, string]
  copyrightlink: string
}
export default function Gallery({
  images,
  currentIndex,
  setCurrentIndex,
}: Props) {
  return (
    <div className="group relative">
      <div className="flex items-center justify-end">
        <a
          href={images[currentIndex].copyrightlink}
          target="_blank"
          className="btn mr-2"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="h-6 w-6 text-blue-500"
            icon={faLocationDot}
          />
          <span className="ml-4">{images[currentIndex].title}</span>
        </a>
        <button
          className="btn mr-2"
          disabled={currentIndex === 0}
          onClick={() => {
            setCurrentIndex((currentIndex - 1) % images.length)
          }}
        >
          <FontAwesomeIcon
            className="h-6 w-6 text-blue-500"
            icon={faAngleLeft}
          />
        </button>
        <button
          className="btn"
          disabled={currentIndex === images.length - 1}
          onClick={() => {
            setCurrentIndex((currentIndex + 1) % images.length)
          }}
        >
          <FontAwesomeIcon
            className="h-6 w-6 text-blue-500"
            icon={faAngleRight}
          />
        </button>
      </div>

      <span className="invisible absolute group-hover:visible">Tooltip</span>
    </div>
  )
}
