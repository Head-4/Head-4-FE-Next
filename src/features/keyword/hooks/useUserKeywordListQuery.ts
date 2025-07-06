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

interface Keyword {
  notifyId: number
  keyword: string
}

export interface GetUserKeywordListResponse {
  httpStatus: string
  success: boolean
  data: Keyword[]
  error: ErrorResponse | null
}

const getUserKeywordList = async () => {
  const response = await httpMethod<GetUserKeywordListResponse>(
    END_POINT.GET_USER_KEYWORD_LIST,
    process.env.NEXT_PUBLIC_BEARER_TOKEN!,
    'GET',
  )

  if (!response?.success) {
    throw new Error(
      response?.error?.message ?? '유저 키워드 정보를 못 불러옴',
    )
  }

  return response
}

export const userKeywordListQueryOptions =
  (): UseSuspenseQueryOptions<GetUserKeywordListResponse> => ({
    queryKey: [QUERY_KEY.USER_KEYWORD_LIST],
    queryFn: () => getUserKeywordList(),
  })

export function useUserKeywordListQuery() {
  return useSuspenseQuery(userKeywordListQueryOptions())
}
