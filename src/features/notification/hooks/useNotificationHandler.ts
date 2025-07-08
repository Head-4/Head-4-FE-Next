import { handleNotificationPermission } from '@/shared/config/firebase'
import {
  useNotificationPermissionMutation,
} from '@/features/notification/hooks/useNotificationPermissionMutation'
import { useCallback } from 'react'

export const useNotificationHandler = () => {
  const mutation = useNotificationPermissionMutation()

  const handlePermission = useCallback(async () => {
    const { result, userFcmToken } = await handleNotificationPermission()

    if (result && userFcmToken) {
      const patchResult = await mutation.mutateAsync({
        action: 'updateUserFcmToken',
        fcmToken: userFcmToken,
      })

      if (patchResult.success) {
        mutation.mutate({
          action: 'updateUserNotificationSetting',
          setting: true,
        })
      }
    }
  }, [mutation])

  return {
    handlePermission,
  }
}
