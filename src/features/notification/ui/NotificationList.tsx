'use client'

import NotificationItem from '@/features/notification/ui/NotificationItem'
import { useNotificationsListQuery } from '@/features/notification/hooks/useNotificationsListQuery'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

export default function NotificationList() {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useNotificationsListQuery()
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView])

  return (
    <>
      <ul className="mt-4">
        {data.pages.map((page) =>
          page.data.pushLogs.map((notification) => (
            <NotificationItem
              key={notification.pushId}
              notification={notification}
            />
          )),
        )}
      </ul>
      <h2
        ref={ref}
        className="typography-B2_medium my-12 text-center text-gray-400"
      >
        모든 알림은 90일간 보관돼요.
      </h2>
    </>
  )
}
