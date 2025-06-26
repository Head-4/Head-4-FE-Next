'use client'

import React, { createContext, ReactNode, useContext, useState } from 'react'
import { createPortal } from 'react-dom'

interface ModalContextType {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const ModalContext = createContext<ModalContextType | null>(null)

function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
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

function ModalHeader({ children }: { children: ReactNode }) {
  return <div className="mb-4 text-lg font-semibold">{children}</div>
}

function ModalTitle({ children }: { children: ReactNode }) {
  return <h2 className="mb-2 text-xl font-bold">{children}</h2>
}

function ModalDescription({ children }: { children: ReactNode }) {
  return <p className="text-gray-600">{children}</p>
}

function ModalFooter({ children }: { children: ReactNode }) {
  return <div className="mt-6 flex justify-end gap-2">{children}</div>
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

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={handleBackgroundClick}
    >
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement,
  )
}

const Modal = Object.assign(ModalProvider, {
  Trigger: ModalTrigger,
  CloseButton: ModalCloseButton,
  Header: ModalHeader,
  Content: ModalContent,
  Title: ModalTitle,
  Description: ModalDescription,
  Footer: ModalFooter,
})

export default Modal
