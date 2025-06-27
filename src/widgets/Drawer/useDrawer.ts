'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function useDrawer() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== '/' && isOpen) {
      setIsOpen(false)
    }
  }, [pathname, isOpen])

  return {
    isOpen,
    setIsOpen,
  }
} 