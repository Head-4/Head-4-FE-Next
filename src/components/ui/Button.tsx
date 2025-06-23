import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'typography-T3_bold w-full justify-center rounded-xl bg-blue-primary py-4.5 text-white transition-colors duration-100 disabled:bg-gray-50 disabled:text-gray-400',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
