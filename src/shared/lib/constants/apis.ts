export const END_POINT = {
  // USER
  USER_ACCESS_TOKEN: (code: string) => `/api/v1/login/kakao/${code}`,
  GET_USER_EMAIL: `/api/v1/user/email`,
  // UNIVERSITY
  GET_USER_UNIVERSITY: `/api/v1/user/university`,
  PATCH_USER_UNIVERSITY: (univ: string) => `/api/v1/user/univ/${univ}`,
  // KEYWORD
  GET_USER_KEYWORD_LIST: `/api/v1/user/keywords`,
  POST_USER_KEYWORD_LIST: (keyword: string) =>
    `/api/v1/user/add/keyword/${keyword}`,
  DELETE_USER_KEYWORD: (notifyId: string) =>
    `/api/v1/user/delete/keyword/${notifyId}`,
  // ARTICLES
  GET_ARTICLES: (cursor: number, keyword: string) =>
    `/api/v1/article/page/${cursor}/${keyword}`,
  // NOTIFICATION
  GET_NOTIFICATIONS: (cursor: number) => `/api/v1/user/notify/page/${cursor}`,
  PATCH_USER_FCM_TOKEN: (token: string) => `/api/v1/user/fcm/${token}`,
  PATCH_USER_NOTIFICATION_SETTING: (setting: boolean) =>
    `/api/v1/user/notify/${setting}`,
  GET_USER_NOTIFICATION_STATUS: `api/v1/user/allow`,
  GET_USER_FCM_TOKEN: `api/v1/user/check/fcm/token`,
}
