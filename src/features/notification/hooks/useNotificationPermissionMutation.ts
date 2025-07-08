import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { queryClientSingleton } from '@/shared/config/queryClient'
import { patchUserFcmToken } from '@/features/notification/api/patchUserFcmToken'
import { patchUserNotificationSetting } from '@/features/notification/api/patchUserNotificationSetting'

interface ErrorResponse {
  code: number
  message: string
}

export interface NotificationMutationResponse {
  httpStatus: string
  success: boolean
  data: string
  error: ErrorResponse | null
}

type NotificationPermissionMutationParams =
  | { action: 'updateUserFcmToken'; fcmToken: string }
  | { action: 'updateUserNotificationSetting'; setting: boolean }

const notificationPermissionMutationOptions = (): UseMutationOptions<
  NotificationMutationResponse,
  Error,
  NotificationPermissionMutationParams
> => {
  const queryClient = queryClientSingleton.getInstance()

  return {
    mutationFn: (params: NotificationPermissionMutationParams) => {
      switch (params.action) {
        case 'updateUserFcmToken':
          return patchUserFcmToken(params.fcmToken)
        case 'updateUserNotificationSetting':
          return patchUserNotificationSetting(params.setting)
      }
    },
    onSuccess: (data) => {
      console.log('notification permission mutation success: ', data)
    },
    onError: (error) => {
      console.error('notification permission mutation error: ', error)
    },
  }
}

export const useNotificationPermissionMutation = () => {
  return useMutation(notificationPermissionMutationOptions())
}
