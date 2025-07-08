'use client'

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/shared/lib/utils'

interface Toast {
  id: string
  message: string
  type: 'success' | 'error'
}

interface ToastContextType {
  success: (message: string) => void
  error: (message: string) => void
}

interface ToastProviderProps {
  children: ReactNode
}

const ToastContext = createContext<ToastContextType | null>(null)

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((message: string, type: 'success' | 'error') => {
    const id = Math.random().toString(36).slice(2)
    setToasts((prev) => [...prev, { id, message, type }])

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, 2000)
  }, [])

  const actions = useMemo(
    () => ({
      success(message: string) {
        return addToast(message, 'success')
      },
      error(message: string) {
        return addToast(message, 'error')
      },
    }),
    [addToast],
  )

  return (
    <ToastContext.Provider value={actions}>
      {children}
      {toasts.length > 0 &&
        createPortal(
          <div className="typography-T4_semibold fixed bottom-[162px] left-0 z-50 flex w-full flex-col gap-2 sm:left-[calc(50vw-250px)] sm:w-[500px]">
            {toasts.map((toast) => (
              <div
                key={toast.id}
                className={cn(
                  `mx-5 rounded-xl py-4.5 text-center`,
                  toast.type === 'success'
                    ? 'bg-[#F0FAF2] text-[#528B5D]'
                    : 'bg-[#FFEFF0] text-[#BD0000]',
                )}
              >
                {toast.message}
              </div>
            ))}
          </div>,
          document.getElementById('toast-root') as HTMLElement,
        )}
    </ToastContext.Provider>
  )
}

export function useToast(): ToastContextType {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast는 ToastProvider 안에서 사용할 수 있습니다')
  }
  return context
}
