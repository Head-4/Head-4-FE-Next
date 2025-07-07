import { httpMethod } from '@/shared/config/httpMethod'
import { END_POINT } from '@/shared/lib/constants/apis'
import { KeywordMutationResponse } from '@/features/keyword/hooks/useUserKeywordMutation'

export const postUserKeywordList = async (keyword: string) => {
  const response = await httpMethod<KeywordMutationResponse>(
    END_POINT.POST_USER_KEYWORD_LIST(keyword),
    process.env.NEXT_PUBLIC_BEARER_TOKEN!,
    'POST',
  )

  if (!response?.success) {
    throw new Error(response?.error?.message)
  }

  return response
}
