export const END_POINT = {
  USER_ACCESS_TOKEN: (code: string) => `/api/v1/login/kakao/${code}`,
  USER_UNIVERSITY: `api/v1/user/university`
}