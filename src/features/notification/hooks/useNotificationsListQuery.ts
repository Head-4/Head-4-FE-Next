import {
  InfiniteData,
  useSuspenseInfiniteQuery,
  UseSuspenseInfiniteQueryOptions,
} from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/lib/constants/queryKey'
import { httpMethod } from '@/shared/config/httpMethod'
import { END_POINT } from '@/shared/lib/constants/apis'
import { NotificationsPagination } from '@/features/notification/model/types'

interface ErrorResponse {
  code: number
  message: string
}

export interface GetNotificationsResponse {
  httpStatus: string
  success: boolean
  data: NotificationsPagination
  error: ErrorResponse | null
}

const getNotifications = async (cursor: number) => {
  const response = await httpMethod<GetNotificationsResponse>(
    END_POINT.GET_NOTIFICATIONS(cursor),
    process.env.NEXT_PUBLIC_BEARER_TOKEN!,
    'GET',
  )

  if (!response?.success) {
    throw new Error(response?.error?.message ?? '')
  }

  return response
}

export const notificationsQueryOptions = (): UseSuspenseInfiniteQueryOptions<
  GetNotificationsResponse,
  Error,
  InfiniteData<GetNotificationsResponse>,
  [string],
  number
> => ({
  queryKey: [QUERY_KEY.NOTIFICATIONS],
  queryFn: ({ pageParam = 0 }) => getNotifications(pageParam),
  getNextPageParam: (lastPage) =>
    lastPage.data.hasNext ? lastPage.data.cursor : undefined,
  initialPageParam: 0,
})

export function useNotificationsListQuery() {
  return useSuspenseInfiniteQuery(notificationsQueryOptions())
}
