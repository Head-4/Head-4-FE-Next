'use client'

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
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
  const toastRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let toastRoot = document.getElementById('toast-root')
    if (!toastRoot) {
      toastRoot = document.createElement('div')
      toastRoot.setAttribute('id', 'toast-root')
      document.body.appendChild(toastRoot)
    }
    toastRef.current = toastRoot

    return () => {
      if (toastRoot && toastRoot.parentNode) {
        toastRoot.parentNode.removeChild(toastRoot)
      }
    }
  }, [])

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
      {toastRef.current &&
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
          toastRef.current,
        )}
    </ToastContext.Provider>
  )
}

export function useToast(): ToastContextType {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}
