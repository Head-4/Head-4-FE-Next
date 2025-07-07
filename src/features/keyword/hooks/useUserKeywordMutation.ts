import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/lib/constants/queryKey'
import { queryClientSingleton } from '@/shared/config/queryClient'
import { postUserKeywordList } from '@/features/keyword/api/postUserKeywordList'
import { deleteUserKeyword } from '@/features/keyword/api/deleteUserKeyword'

interface ErrorResponse {
  code: number
  message: string
}

export interface KeywordMutationResponse {
  httpStatus: string
  success: boolean
  data: string
  error: ErrorResponse | null
}

type KeywordMutationParams =
  | { method: 'POST'; keyword: string }
  | { method: 'DELETE'; notifyId: string }

const userKeywordListMutationOptions = (): UseMutationOptions<
  KeywordMutationResponse,
  Error,
  KeywordMutationParams
> => {
  const queryClient = queryClientSingleton.getInstance()

  return {
    mutationFn: (params: KeywordMutationParams) => {
      switch (params.method) {
        case 'POST':
          return postUserKeywordList(params.keyword)
        case 'DELETE':
          return deleteUserKeyword(params.notifyId)
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.USER_KEYWORD_LIST] })
      console.log('keyword mutation success: ', data)
    },
    onError: (error) => {
      console.error('keyword mutation error: ', error)
    },
  }
}

export const useUserKeywordMutation = () => {
  return useMutation(userKeywordListMutationOptions())
}
