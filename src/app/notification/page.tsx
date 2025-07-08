import { Suspense } from 'react'
import { notificationsQueryOptions } from '@/features/notification/hooks/useNotificationsListQuery'
import { ServerFetchBoundary } from '@/shared/lib/ServerFetchBoundary'
import NotificationList from '@/features/notification/ui/NotificationList'

export default function Page() {
  return <NotificationList />
}
