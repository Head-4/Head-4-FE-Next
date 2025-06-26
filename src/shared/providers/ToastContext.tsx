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
  console.log('gg')
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
          <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
            {toasts.map((toast) => (
              <div
                key={toast.id}
                className={`rounded-md px-4 py-2 text-white shadow-lg ${toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
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
