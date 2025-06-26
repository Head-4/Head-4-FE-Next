'use client'

import React, { ReactNode, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { useDrawer } from '@/shared/providers/DrawerContext'
import CloseIcon from '@/assets/CloseIcon.svg'
import KakaoFillIcon from '@/assets/KakaoFillIcon.svg'
import BellIcon from '@/assets/BellIcon.svg'
import UniversityIcon from '@/assets/UniversityIcon.svg'
import PinIcon from '@/assets/PinIcon.svg'
import ArrowIcon from '@/assets/ArrowIcon.svg'
import ToggleButton from '@/shared/ui/ToggleButton'
import { cn } from '@/shared/lib/utils'

interface DrawerContentProps {
  children: ReactNode
}

function DrawerContent({ children }: DrawerContentProps) {
  const { isOpen, setIsOpen } = useDrawer()

  const handleOverlayClick = () => {
    setIsOpen(false)
  }

  if (!isOpen) return null

  return createPortal(
    <div className="fixed top-0 right-0 z-50 flex h-screen w-full sm:right-[calc(50vw-250px)] sm:w-[500px]">
      <div className={cn('flex-1 bg-black/50')} onClick={handleOverlayClick} />

      <div
        className={cn('h-full bg-white py-3', isOpen ? 'w-4/5' : 'w-0')}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.getElementById('drawer-root') as HTMLElement,
  )
}

function DrawerTrigger({ children }: { children: ReactNode }) {
  const { setIsOpen } = useDrawer()

  return (
    <button onClick={() => setIsOpen(true)} className="cursor-pointer">
      {children}
    </button>
  )
}

function DrawerMenu() {
  const { setIsOpen } = useDrawer()
  const [isOn, setIsOn] = useState(false)

  return (
    <DrawerContent>
      <div className="typography-T4_semibold flex justify-between px-5">
        <div className="flex gap-2">
          <KakaoFillIcon />
          qazyhn@naver.com
        </div>
        <button onClick={() => setIsOpen(false)}>
          <CloseIcon />
        </button>
      </div>
      <ul className="typography-B1_semibold mt-6">
        <li className="flex gap-3 px-5 py-4">
          <BellIcon color="#DDDDDD" />
          키워드 알림
          <ToggleButton isOn={isOn} toggleClick={setIsOn} className="ml-auto" />
        </li>
        <li className="hover:bg-[#E9E9E940] active:bg-[#E9E9E940]">
          <Link href="/setting/university" className="flex gap-3 px-5 py-4">
            <UniversityIcon />
            학교 설정
            <ArrowIcon
              className="ml-auto h-[20px] w-[20px] scale-x-[-1] transform"
              color="#DDDDDD"
            />
          </Link>
        </li>
        <li className="hover:bg-[#E9E9E940] active:bg-[#E9E9E940]">
          <Link href="/setting/keyword" className="flex gap-3 px-5 py-4">
            <PinIcon />
            키워드 설정
            <ArrowIcon
              className="ml-auto h-[20px] w-[20px] scale-x-[-1] transform"
              color="#DDDDDD"
            />
          </Link>
        </li>
      </ul>
    </DrawerContent>
  )
}

const Drawer = Object.assign(DrawerContent, {
  Trigger: DrawerTrigger,
  Menu: DrawerMenu,
})

export default Drawer
