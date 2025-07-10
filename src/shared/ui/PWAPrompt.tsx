'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Modal from '@/shared/providers/ModalContext'
import Button from '@/shared/ui/Button'
import Logo from '@/assets/Logo.svg'
import PWAInstallGuide from '@/assets/PWAInstallGuide.png'
import { usePathname } from 'next/navigation'

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>

  prompt(): Promise<void>
}

interface NavigatorWithStandalone extends Navigator {
  standalone?: boolean
}

let deferredPromptEvent: BeforeInstallPromptEvent | null = null

if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    deferredPromptEvent = e as BeforeInstallPromptEvent
  })
}

export default function PWAPrompt() {
  const [showPrompt, setShowPrompt] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsIOS(/iPhone|iPad|iPod/.test(window.navigator.userAgent))

    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as NavigatorWithStandalone).standalone

    const shouldShow = !isStandalone && (deferredPromptEvent !== null || isIOS)
    setShowPrompt(shouldShow)

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      deferredPromptEvent = e as BeforeInstallPromptEvent
      if (pathname === '/' || pathname === '/login') {
        setShowPrompt(true)
      }
    }

    const handleAppInstalled = () => {
      setShowPrompt(false)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt,
      )
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [isIOS])

  const handleInstallClick = async () => {
    if (!deferredPromptEvent) return

    try {
      await deferredPromptEvent.prompt()
      const { outcome } = await deferredPromptEvent.userChoice
    } catch (err) {
      console.error('설치 중 오류:', err)
    } finally {
      deferredPromptEvent = null
      setShowPrompt(false)
    }
  }

  if (!showPrompt) return null

  return (
    <Modal initialIsOpen={true}>
      <Modal.Content>
        {isIOS ? (
          <>
            <h1 className="typography-T1 text-center">아이폰 설치 가이드</h1>
            <Image
              src={PWAInstallGuide}
              alt="설치 가이드"
              width={250}
              height={300}
              className="my-5"
            />
            <Button onClick={() => setShowPrompt(false)}>닫기</Button>
          </>
        ) : (
          <>
            <Logo />
            <h1 className="typography-T1 my-10 text-center">
              터치 한 번으로 <br /> 바로 시작해 보세요!
            </h1>
            <Button onClick={handleInstallClick}>앱 내려받기</Button>
          </>
        )}
      </Modal.Content>
    </Modal>
  )
}
