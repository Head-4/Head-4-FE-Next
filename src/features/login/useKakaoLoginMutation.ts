import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { axiosInstance } from '@/shared/config/httpMethod'
import { END_POINT } from '@/shared/lib/constants/apis'

interface ErrorResponse {
  code: number
  message: string
}

export interface GetUserAccessTokenResponse {
  httpStatus: string
  success: boolean
  data: boolean
  error: ErrorResponse | null
}

const kakaoLoginMutationOptions = (): UseMutationOptions<
  GetUserAccessTokenResponse & { accessToken: string },
  Error,
  string
> => ({
  mutationFn: async (code: string) => {
    const response = await axiosInstance.post(
      END_POINT.USER_ACCESS_TOKEN(code),
      '',
    )

    const data = response.data

    if (!data.success) {
      throw new Error(data.error?.message ?? '로그인 시도 실패')
    }

    const accessToken = response.headers['authorization']

    return {
      ...data,
      accessToken,
    }
  },
  onSuccess: (data) => {
    console.log('get accessToken success: ', data)
    // 테스트
    localStorage.setItem('accessToken', data.accessToken)
    localStorage.setItem('isFirstLogin', String(data.data))
  },
  onError: (error) => {
    console.error('get accessToken error: ', error)
  },
})

export const useKakaoLoginMutation = () => {
  return useMutation(kakaoLoginMutationOptions())
}
