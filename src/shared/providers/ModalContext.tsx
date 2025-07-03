'use client'

import React, { createContext, ReactNode, useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/shared/lib/utils'

type ModalVariant = 'modal' | 'bottomSheet'

interface ModalContextType {
  isOpen: boolean
  variant: ModalVariant
  setIsOpen: (isOpen: boolean) => void
}

const ModalContext = createContext<ModalContextType | null>(null)

interface ModalProviderProps {
  children: ReactNode
  variant?: ModalVariant
  initialIsOpen?: boolean
}

function ModalProvider({ children, variant = 'modal', initialIsOpen = false }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(initialIsOpen)

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen, variant }}>
      {children}
    </ModalContext.Provider>
  )
}

function ModalTrigger({ children }: { children: ReactNode }) {
  const context = useContext(ModalContext)
  if (!context) throw new Error('ModalTrigger은 Modal안에 들어가야합니다.')

  return (
    <div onClick={() => context?.setIsOpen(true)} className="cursor-pointer">
      {children}
    </div>
  )
}

function ModalCloseButton({ children }: { children: ReactNode }) {
  const context = useContext(ModalContext)
  if (!context) throw new Error('ModalCloseButton은 Modal안에 들어가야합니다.')

  return (
    <button
      onClick={() => context.setIsOpen(false)}
      className="rounded bg-gray-300 px-4 py-2"
    >
      {children}
    </button>
  )
}

function ModalContent({ children }: { children: ReactNode }) {
  const context = useContext(ModalContext)
  if (!context) throw new Error('ModalContent은 Modal안에 들어가야합니다.')
  if (!context.isOpen) return null

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      context.setIsOpen(false)
    }
  }

  const modalStyles = {
    modal: 'flex items-center justify-center',
    bottomSheet: 'flex items-end justify-center',
  }

  const contentStyles = {
    modal:
      'relative mx-8 flex w-full flex-col items-center rounded-[20px] bg-white p-6 px-6 pt-10 pb-7',
    bottomSheet:
      'relative flex w-full flex-col items-center rounded-t-3xl bg-white p-5 pt-6 pb-21.5',
  }

  return createPortal(
    <div
      className={cn(
        'fixed inset-0 z-50 mx-auto max-w-[500px] bg-black/50',
        modalStyles[context.variant],
      )}
      onClick={handleBackgroundClick}
    >
      <div className={contentStyles[context.variant]}>{children}</div>
    </div>,
    document.getElementById('modal-root') as HTMLElement,
  )
}

const Modal = Object.assign(ModalProvider, {
  Trigger: ModalTrigger,
  CloseButton: ModalCloseButton,
  Content: ModalContent,
})

export default Modal
