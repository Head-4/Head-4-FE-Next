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
        'mx-auto flex min-h-screen max-w-[500px] flex-col px-5 pb-21.5 shadow-2xl pt-[52px]',
        {
          'bg-gradient-univon': pathname === '/login',
          'bg-[#FAFAFA]': pathname === '/' || pathname === '/search',
        },
      )}
    >
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
    </div>
  )
}
