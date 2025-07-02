import { cn } from '@/shared/lib/utils'

export default function Separator({ className }: { className?: string }) {
  return <div className={cn('bg-gray-lightGray h-[1px] w-full shrink-0', className)} />
}
