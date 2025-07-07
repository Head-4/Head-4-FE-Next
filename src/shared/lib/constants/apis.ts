export const END_POINT = {
  USER_ACCESS_TOKEN: (code: string) => `/api/v1/login/kakao/${code}`,
  GET_USER_UNIVERSITY: `/api/v1/user/university`,
  PATCH_USER_UNIVERSITY: (univ: string) => `/api/v1/user/univ/${univ}`,
  GET_USER_KEYWORD_LIST: `/api/v1/user/keywords`,
  POST_USER_KEYWORD_LIST: (keyword: string) => `/api/v1/user/add/keyword/${keyword}`,
  DELETE_USER_KEYWORD: (notifyId: string) => `/api/v1/user/delete/keyword/${notifyId}`,
  GET_USER_EMAIL: `/api/v1/user/email`,
  GET_ARTICLES: (cursor: number, keyword: string) => `/api/v1/article/page/${cursor}/${keyword}`,
}
