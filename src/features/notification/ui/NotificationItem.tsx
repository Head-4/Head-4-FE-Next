import { getRelativeTime } from '@/shared/lib/utils'
import { type Notification } from '@/features/notification/model/types'

interface NotificationItemProps {
  notification: Notification
}

export default function NotificationItem({
  notification,
}: NotificationItemProps) {
  return (
    <li>
      <a
        href={notification.url}
        className="block space-y-1 rounded-xl border border-white bg-white py-5"
      >
        <div className="flex justify-between">
          <p className="typography-B1_semibold text-blue-primary">
            {notification.keyword}
          </p>
          <p className="typography-B3_medium text-[#C0C0C0]">
            {getRelativeTime(notification.createdDate)}
          </p>
        </div>
        <p className="typography-B1_medium text-gray-600">
          {notification.title}
        </p>
      </a>
    </li>
  )
}
