import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface FilterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected: boolean
}

export default function FilterButton({
  children,
  isSelected,
  className,
  ...props
}: FilterButtonProps) {
  return (
    <button
      className={cn(
        'typography-B2_semibold rounded-[20px] border px-4.5 py-1.75 transition-colors duration-100',
        isSelected
          ? 'border-blue-primary bg-blue-primary text-white'
          : 'border-gray-lightGray bg-white text-gray-600 hover:border-blue-primary hover:text-blue-primary active:border-blue-primary active:text-blue-primary',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
