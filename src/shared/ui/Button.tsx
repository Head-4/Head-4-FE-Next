import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/shared/lib/utils'
import { cva } from 'class-variance-authority'

type ButtonVariant = 'primary' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  variant?: ButtonVariant
}

const buttonVariants = cva(
  'typography-T3_bold w-full justify-center rounded-xl py-4.5 transition-colors duration-100 disabled:bg-gray-50 disabled:text-gray-400',
  {
    variants: {
      variant: {
        primary: 'bg-blue-primary text-white',
        outline: 'bg-white text-[#686868] border border-[#DDDDDD]',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)

export default function Button({
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props}>
      {children}
    </button>
  )
}
