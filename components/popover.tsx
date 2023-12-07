'use client'
import { useEffect, useRef, useState } from 'react'

export interface PopoverOption {
  trigger: 'hover' | 'click'
  direction: 'top' | 'bottom'
  placement: 'start' | 'end' | 'center'
}

function Popover({
  children,
  content,
  option = { trigger: 'click', direction: 'top', placement: 'center' },
}: {
  children: React.ReactNode
  content: React.ReactNode
  option?: PopoverOption
}) {
  const wrapperRef = useRef<HTMLElement>(null)
  const [show, setShow] = useState(false)

  // 事件监听回调：外部点击时关闭显示
  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.current) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShow(false)
      }
    }
  }

  useEffect(() => {
    if (show) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [show, wrapperRef])

  const handleMouseEnter = () => {
    if (option.trigger === 'hover') {
      setShow(true)
    }
  }

  const handleMouseLeave = () => {
    if (option.trigger === 'hover') {
      setShow(false)
    }
  }

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex h-fit w-fit justify-center"
    >
      <div onClick={() => setShow(!show)}>{children}</div>

      <div
        className={`${
          show ? '' : 'hidden'
        }  absolute bottom-[100%] z-50 h-fit w-[200px] min-w-fit transition-all`}
      >
        {content}
      </div>
    </div>
  )
}

export default Popover
