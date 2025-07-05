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

export interface GetUserUniversityResponse {
  httpStatus: string
  success: boolean
  data: string
  error: ErrorResponse | null
}

const getUserUniversity = async () => {
  const response = await httpMethod<GetUserUniversityResponse>(
    END_POINT.USER_UNIVERSITY,
    process.env.NEXT_PUBLIC_BEARER_TOKEN!,
    'GET',
  )

  if (!response?.success) {
    throw new Error(
      response?.error?.message ?? '대학 정보를 불러오지 못했습니다',
    )
  }

  return response
}

export const userUniversityQueryOptions =
  (): UseSuspenseQueryOptions<GetUserUniversityResponse> => ({
    queryKey: [QUERY_KEY.USER_UNIVERSITY],
    queryFn: () => getUserUniversity(),
  })

export function useUserUniversityQuery() {
  return useSuspenseQuery(userUniversityQueryOptions())
}
