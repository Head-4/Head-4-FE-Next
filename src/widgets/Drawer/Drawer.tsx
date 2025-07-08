'use client'

import React, { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import CloseIcon from '@/assets/CloseIcon.svg'
import KakaoFillIcon from '@/assets/KakaoFillIcon.svg'
import BellIcon from '@/assets/BellIcon.svg'
import UniversityIcon from '@/assets/UniversityIcon.svg'
import PinIcon from '@/assets/PinIcon.svg'
import ArrowIcon from '@/assets/ArrowIcon.svg'
import ToggleButton from '@/shared/ui/ToggleButton'
import { cn } from '@/shared/lib/utils'
import { useUserEmailQuery } from '@/features/user/useUserEmailQuery'
import { useUserNotificationStatusQuery } from '@/features/notification/hooks/useUserNotificationStatusQuery'
import { useUserFcmTokenQuery } from '@/features/notification/hooks/useUserFcmTokenQuery'
import { useNotificationHandler } from '@/features/notification/hooks/useNotificationHandler'
import { useNotificationPermissionMutation } from '@/features/notification/hooks/useNotificationPermissionMutation'

interface DrawerContentProps {
  children: ReactNode
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

function DrawerContent({ children, isOpen, setIsOpen }: DrawerContentProps) {
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

interface DrawerProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

function Drawer({ isOpen, setIsOpen }: DrawerProps) {
  const { data: userEmail } = useUserEmailQuery()
  const { data: userFcmToken } = useUserFcmTokenQuery()
  const { data: userNotificationStatus } = useUserNotificationStatusQuery()
  const mutation = useNotificationPermissionMutation()
  const { handlePermission } = useNotificationHandler()

  const toggleClick = async () => {
    if (userNotificationStatus.data) {
      mutation.mutate({ action: 'updateUserNotificationSetting', setting: false } )
    } else {
      if (Notification.permission === 'granted' && userFcmToken.data) {
        mutation.mutate({ action: 'updateUserNotificationSetting', setting: true } )
      } else if (Notification.permission === 'denied') {
        alert('브라우저 알림 권한을 허용해주세요!')
      } else {
        await handlePermission()
      }
    }
  }

  return (
    <DrawerContent isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="typography-T4_semibold flex justify-between px-5">
        <div className="flex gap-2">
          <KakaoFillIcon />
          {userEmail.data}
        </div>
        <button onClick={() => setIsOpen(false)}>
          <CloseIcon />
        </button>
      </div>
      <ul className="typography-B1_semibold mt-6">
        <li className="flex gap-3 px-5 py-4">
          <BellIcon color="#DDDDDD" className="w-6" />
          키워드 알림
          <ToggleButton
            isOn={userNotificationStatus.data}
            toggleClick={toggleClick}
            className="ml-auto"
          />
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

export default Drawer
