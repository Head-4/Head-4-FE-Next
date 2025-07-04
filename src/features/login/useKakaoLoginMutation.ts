import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { httpMethod } from '@/shared/config/httpMethod'
import { END_POINT } from '@/shared/lib/constants/apis'

// 반환값 확인해야함
interface GetUserAccessTokenResponse {
  accessToken: string
  refreshToken: string
}

const kakaoLoginMutationOptions = (): UseMutationOptions<
  GetUserAccessTokenResponse,
  Error,
  string
> => ({
  mutationFn: async (code: string) => {
    const response = await httpMethod<GetUserAccessTokenResponse>(
      END_POINT.USER_ACCESS_TOKEN(code),
      '',
      'POST',
    )
    if (!response) {
      throw new Error('AccessToken을 받아오는데 실패')
    }
    return response
  },
  onSuccess: (data) => {
    console.log('get accessToken success: ', data)
  },
  onError: (error) => {
    console.error('get accessToken error: ', error)
  },
})

export const useKakaoLoginMutation = () => {
  return useMutation(kakaoLoginMutationOptions())
}
