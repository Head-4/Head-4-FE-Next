'use client'

import { usePathname } from 'next/navigation'
import Header from '@/widgets/Header/Header'
import { ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <div
      className={cn(
        'mx-auto flex min-h-screen max-w-[500px] flex-col px-5 pt-[52px] pb-21.5 shadow-2xl',
        {
          'bg-[#FAFAFA]': pathname === '/' || pathname === '/search',
          'bg-gradient-univon': pathname === '/login',
          'bg-gradient-complete': pathname === '/signup/complete',
        },
      )}
    >
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
    </div>
  )
}
