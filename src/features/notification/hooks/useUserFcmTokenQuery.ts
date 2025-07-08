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

export interface GetUserFcmTokenResponse {
  httpStatus: string
  success: boolean
  data: boolean
  error: ErrorResponse | null
}

const getUserFcmToken = async () => {
  const response = await httpMethod<GetUserFcmTokenResponse>(
    END_POINT.GET_USER_FCM_TOKEN,
    process.env.NEXT_PUBLIC_BEARER_TOKEN!,
    'GET',
  )

  if (!response?.success) {
    throw new Error(
      response?.error?.message ?? '유저 토큰 보유 여부를 가져오지 못함',
    )
  }

  return response
}

export const userFcmTokenQueryOptions =
  (): UseSuspenseQueryOptions<GetUserFcmTokenResponse> => ({
    queryKey: [QUERY_KEY.USER_FCM_TOKEN],
    queryFn: () => getUserFcmToken(),
  })

export function useUserFcmTokenQuery() {
  return useSuspenseQuery(userFcmTokenQueryOptions())
}
