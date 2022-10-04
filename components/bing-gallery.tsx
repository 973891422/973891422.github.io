import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleLeft,
  faAngleRight,
  faDownload,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'

interface Props {
  images: BingImageInfo[]
  index: number
  setIndex: React.Dispatch<React.SetStateAction<number>>
}

export interface BingImageInfo {
  url: string
  title: string
  copyright: [string, string]
  copyrightlink: string
}

export default function BingGallery({ images, index, setIndex }: Props) {
  return (
    <div className="dropdown-end dropdown dropdown-hover">
      <div className="m-2 flex items-center justify-end">
        <a
          href={images[index].copyrightlink}
          target="_blank"
          className="btn btn-sm mr-2"
          rel="noreferrer"
        >
          <FontAwesomeIcon className="h-4 w-4" icon={faLocationDot} />
          <span className="ml-4">{images[index].title}</span>
        </a>
        <button
          title="Previous picture"
          className="btn btn-sm mr-2"
          disabled={index === 0}
          onClick={() => {
            setIndex((index - 1) % images.length)
          }}
        >
          <FontAwesomeIcon className="h-4 w-4" icon={faAngleLeft} />
        </button>
        <button
          title="Next picture"
          className="btn btn-sm"
          disabled={index === images.length - 1}
          onClick={() => {
            setIndex((index + 1) % images.length)
          }}
        >
          <FontAwesomeIcon className="h-4 w-4" icon={faAngleRight} />
        </button>
      </div>
      <div className="dropdown-content flex w-56 flex-col gap-1 rounded-md bg-zinc-700 px-4 py-2">
        <a
          href={images[index].copyrightlink}
          target="_blank"
          rel="noreferrer"
          className="col-span-2 text-lg text-gray-100 hover:underline"
        >
          {images[index].copyright[0]}
        </a>
        <div className="flex flex-row justify-between text-xs text-gray-300">
          <div>{images[index].copyright[1]}</div>
          <a href={images[index].url} target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="h-6 w-6" icon={faDownload} />
          </a>
        </div>
      </div>
    </div>
  )
}
