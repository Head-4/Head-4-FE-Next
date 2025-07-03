import type { ReactNode } from 'react'

import {
  type FetchQueryOptions,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query'
import { queryClientSingleton } from '@/shared/config/queryClient'

export type FetchOptions = Pick<FetchQueryOptions, 'queryKey' | 'queryFn'>

type Props = {
  fetchOptions: FetchOptions[] | FetchOptions
  children: ReactNode | ReactNode[]
}

export async function ServerFetchBoundary({ fetchOptions, children }: Props) {
  const queryClient = queryClientSingleton.getInstance()

  if (Array.isArray(fetchOptions)) {
    await Promise.all(
      fetchOptions.map((option) => queryClient.fetchQuery(option)),
    )
  } else {
    await queryClient.fetchQuery(fetchOptions)
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  )
}
