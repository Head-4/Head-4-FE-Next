'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClientSingleton } from '@/shared/config/queryClient'

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const queryClient = queryClientSingleton.getInstance()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
