import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { httpMethod } from '@/shared/config/httpMethod'
import { END_POINT } from '@/shared/lib/constants/apis'
import { queryClientSingleton } from '@/shared/config/queryClient'
import { QUERY_KEY } from '@/shared/lib/constants/queryKey'
import { useToast } from '@/shared/providers/ToastContext'

interface ErrorResponse {
  code: number
  message: string
}

export interface PatchUserUniversityResponse {
  httpStatus: string
  success: boolean
  data: string
  error: ErrorResponse | null
}

const patchUserUniversity = async (univ: string) => {
  const response = await httpMethod<PatchUserUniversityResponse>(
    END_POINT.PATCH_USER_UNIVERSITY(univ),
    process.env.NEXT_PUBLIC_BEARER_TOKEN!,
    'PATCH',
  )

  if (!response?.success) {
    throw new Error(response?.error?.message ?? '')
  }

  return response
}

const userUniversityMutationOptions = (
  toast: ReturnType<typeof useToast>,
): UseMutationOptions<PatchUserUniversityResponse, Error, string> => {
  const queryClient = queryClientSingleton.getInstance()

  return {
    mutationFn: (univ: string) => patchUserUniversity(univ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.USER_UNIVERSITY] })
      toast.success('성공적으로 변경되었어요!')
      console.log('patch user university success: ', data)
    },
    onError: (error) => {
      toast.error('잠시 후에 다시 시도해 주세요')
      console.error('patch user university error: ', error)
    },
  }
}

export const useUserUniversityMutation = () => {
  const toast = useToast()
  return useMutation(userUniversityMutationOptions(toast))
}
