export interface Notification {
  createdDate: string
  keyword: string
  pushId: number
  title: string
  url: string
}

export interface NotificationsPagination {
  pushLogs: Notification[]
  hasNext: boolean
  cursor: number
}
