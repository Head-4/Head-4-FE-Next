import { httpMethod } from '@/shared/config/httpMethod'
import { END_POINT } from '@/shared/lib/constants/apis'
import {
  useSuspenseQuery,
  UseSuspenseQueryOptions,
} from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/lib/constants/queryKey'

interface ErrorResponse {
  code: number
  message: string
}

export interface GetUserNotificationStatusResponse {
  httpStatus: string
  success: boolean
  data: boolean
  error: ErrorResponse | null
}

const getUserNotificationStatus = async () => {
  const response = await httpMethod<GetUserNotificationStatusResponse>(
    END_POINT.GET_USER_NOTIFICATION_STATUS,
    process.env.NEXT_PUBLIC_BEARER_TOKEN!,
    'GET',
  )

  if (!response?.success) {
    throw new Error(
      response?.error?.message ?? '유저 알림 허용 여부를 불러오지 못함',
    )
  }

  return response
}

export const userNotificationStatusQueryOptions =
  (): UseSuspenseQueryOptions<GetUserNotificationStatusResponse> => ({
    queryKey: [QUERY_KEY.USER_NOTIFICATION_STATUS],
    queryFn: () => getUserNotificationStatus(),
  })

export function useUserNotificationStatusQuery() {
  return useSuspenseQuery(userNotificationStatusQueryOptions())
}
