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

export interface GetUserEmailResponse {
  httpStatus: string
  success: boolean
  data: string
  error: ErrorResponse | null
}

const getUserEmail = async () => {
  const response = await httpMethod<GetUserEmailResponse>(
    END_POINT.GET_USER_EMAIL,
    process.env.NEXT_PUBLIC_BEARER_TOKEN!,
    'GET',
  )

  if (!response?.success) {
    throw new Error(
      response?.error?.message ?? '유저 이메일 정보를 불러오지 못했음',
    )
  }

  return response
}

export const userEmailQueryOptions =
  (): UseSuspenseQueryOptions<GetUserEmailResponse> => ({
    queryKey: [QUERY_KEY.USER_EMAIL],
    queryFn: () => getUserEmail(),
  })

export function useUserEmailQuery() {
  return useSuspenseQuery(userEmailQueryOptions())
}
