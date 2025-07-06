import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { httpMethod } from '@/shared/config/httpMethod'
import { END_POINT } from '@/shared/lib/constants/apis'

interface ErrorResponse {
  code: number
  message: string
}

export interface PostUserKeywordListResponse {
  httpStatus: string
  success: boolean
  data: string
  error: ErrorResponse | null
}

const postUserKeywordList = async (keyword: string) => {
  const response = await httpMethod<PostUserKeywordListResponse>(
    END_POINT.POST_USER_KEYWORD_LIST(keyword),
    process.env.NEXT_PUBLIC_BEARER_TOKEN!,
    'POST',
  )

  if (!response?.success) {
    throw new Error(response?.error?.message ?? 'keyword 등록 실패')
  }

  return response
}

const userKeywordListMutationOptions = (): UseMutationOptions<
  PostUserKeywordListResponse,
  Error,
  string
> => ({
  mutationFn: (keyword: string) => postUserKeywordList(keyword),
  onSuccess: (data) => {
    console.log('post user keyword success: ', data)
  },
  onError: (error) => {
    console.error('post user keyword error: ', error)
  },
})

export const useUserKeywordListMutation = () => {
  return useMutation(userKeywordListMutationOptions())
}
