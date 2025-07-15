import { cn } from '@/shared/lib/utils'

export default function Skeleton({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('bg-[#F3F3F3] animate-pulse rounded-md', className)}
      {...props}
    />
  )
}
