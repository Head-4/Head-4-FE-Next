'use client'

import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useNotificationsQuery } from '@/features/notification/hooks/useNotificationsQuery'
import NotificationItem from '@/features/notification/ui/NotificationItem'

export default function Page() {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useNotificationsQuery()
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
