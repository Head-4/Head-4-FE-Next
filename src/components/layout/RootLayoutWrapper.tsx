'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/layout/Header'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <div
      className={cn(
        'mx-auto flex min-h-screen max-w-[500px] flex-col px-5 shadow-2xl',
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
