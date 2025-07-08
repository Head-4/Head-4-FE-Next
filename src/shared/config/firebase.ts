import { initializeApp } from 'firebase/app'
import { getMessaging, getToken } from 'firebase/messaging'

interface NotificationResponse {
  result: boolean
  userFcmToken?: string
}

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FCM_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FCM_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FCM_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FCM_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FCM_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FCM_APP_ID,
}

export const app = initializeApp(firebaseConfig)
export const messaging =
  typeof window !== 'undefined' ? getMessaging(app) : null

export async function handleNotificationPermission(): Promise<NotificationResponse> {
  try {
    if (!messaging) {
      console.warn('서버 환경에서는 FCM을 사용할 수 없습니다.')
      return { result: false }
    }

    const permission: 'granted' | 'denied' | 'default' =
      await Notification.requestPermission()

    if (permission !== 'granted') {
      console.warn('알림 권한이 거부되었거나 보류 상태입니다.')
      return { result: false }
    }

    const userFcmToken: string = await getToken(messaging, {
      vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY,
    })

    if (!userFcmToken) {
      console.warn('권한은 허용됐지만 FCM 토큰을 가져오지 못했습니다.')
      return { result: false }
    }

    console.log('FCM 토큰 발급 완료:', userFcmToken)
    return { result: true, userFcmToken }
  } catch (error) {
    console.error('FCM 토큰 요청 중 에러 발생:', error)
    return { result: false }
  }
}
