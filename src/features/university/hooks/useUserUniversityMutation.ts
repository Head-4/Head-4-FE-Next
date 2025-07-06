import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { httpMethod } from '@/shared/config/httpMethod'
import { END_POINT } from '@/shared/lib/constants/apis'

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

const userUniversityMutationOptions = (): UseMutationOptions<
  PatchUserUniversityResponse,
  Error,
  string
> => ({
  mutationFn: (univ: string) => patchUserUniversity(univ),
  onSuccess: (data) => {
    console.log('patch user university success: ', data)
  },
  onError: (error) => {
    console.error('patch user university error: ', error)
  },
})

export const useUserUniversityMutation = () => {
  return useMutation(userUniversityMutationOptions())
}
