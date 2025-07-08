import { httpMethod } from '@/shared/config/httpMethod'
import { END_POINT } from '@/shared/lib/constants/apis'
import { NotificationMutationResponse } from '@/features/notification/hooks/useNotificationPermissionMutation'

export const patchUserFcmToken = async (token: string) => {
  const response = await httpMethod<NotificationMutationResponse>(
    END_POINT.PATCH_USER_FCM_TOKEN(token),
    process.env.NEXT_PUBLIC_BEARER_TOKEN!,
    'PATCH',
  )

  if (!response?.success) {
    throw new Error(response?.error?.message)
  }

  return response
}
