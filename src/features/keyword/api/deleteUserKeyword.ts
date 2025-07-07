import { httpMethod } from '@/shared/config/httpMethod'
import { END_POINT } from '@/shared/lib/constants/apis'
import { KeywordMutationResponse } from '@/features/keyword/hooks/useUserKeywordMutation'

export const deleteUserKeyword = async (notifyId: string) => {
  const response = await httpMethod<KeywordMutationResponse>(
    END_POINT.DELETE_USER_KEYWORD(notifyId),
    process.env.NEXT_PUBLIC_BEARER_TOKEN!,
    'DELETE',
  )

  if (!response?.success) {
    throw new Error(response?.error?.message)
  }

  return response
}
