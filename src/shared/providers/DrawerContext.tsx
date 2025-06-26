'use client'

import React, { createContext, ReactNode, useContext, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

interface DrawerContextType {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const DrawerContext = createContext<DrawerContextType | null>(null)

export function DrawerProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== '/' && isOpen) {
      setIsOpen(false)
    }
  }, [pathname, isOpen])

  return (
    <DrawerContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DrawerContext.Provider>
  )
}

export function useDrawer() {
  const context = useContext(DrawerContext)
  if (!context) {
    throw new Error('useDrawer는 DrawerProvider 안에서 사용되어야 합니다.')
  }
  return context
} 