import { PiTriangleFill } from 'react-icons/pi'

export default function BingTooltip() {
  return (
    <div className="group relative flex" aria-haspopup>
      <div className="absolute bottom-full z-10 scale-0 bg-gradient-to-tr from-indigo-500 group-focus-within:transform-none group-hover:transform-none">
        <div className="grid grid-cols-2">
          <a href="/analytics">Analytics</a>
          <a href="/engagement">Engagement</a>
          <a href="/security">Security</a>
          <a href="/integrations">Integrations</a>
          <button className="foc">text</button>
        </div>
      </div>
      <button className="">
        <PiTriangleFill className="h-6 w-6 text-neutral-900 opacity-90" />
      </button>
    </div>
  )
}
