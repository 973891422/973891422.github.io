import MyPopover from '@/components/popover'
import BingTooltip from './BingTooltip'

export default async function Page() {
  return (
    <>
      <main className="h-1/4 w-1/4 bg-gradient-to-tr from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        test
      </main>
      <MyPopover content={<p>This Content Will be render in Popover.</p>}>
        <button className="rounded border bg-indigo-500 px-4 py-1.5 text-white">
          Click me
        </button>
      </MyPopover>
      <BingTooltip></BingTooltip>
    </>
  )
}
