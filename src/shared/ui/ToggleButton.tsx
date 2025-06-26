import { cn } from '@/shared/lib/utils'
import { ButtonHTMLAttributes } from 'react'

interface ToggleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOn: boolean
  toggleClick: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ToggleButton({
  isOn,
  toggleClick,
  className,
  ...props
}: ToggleButtonProps) {
  return (
    <button
      onClick={() => toggleClick((prev) => !prev)}
      className={cn(
        'typography-B3_semibold relative flex h-[32px] w-[64px] items-center justify-between rounded-3xl border px-2 py-1.5 transition-colors duration-200',
        isOn
          ? 'border-[#BFCFE9] bg-[#E4EBF5] text-blue-primary'
          : 'border-gray-200 bg-gray-50 text-gray-400',
        className,
      )}
      {...props}
    >
      <div className={cn(isOn ? 'opacity-100' : 'opacity-0')}>ON</div>
      <div
        className={cn(
          'absolute h-[20px] w-[20px] transform rounded-full transition-all duration-200',
          isOn ? 'bg-blue-primary' : 'bg-gray-400',
        )}
        style={{ left: isOn ? '36px' : '8px' }}
      />
      <div className={cn(isOn ? 'opacity-0' : 'opacity-100')}>OFF</div>
    </button>
  )
}
