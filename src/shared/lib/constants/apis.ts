export const END_POINT = {
  USER_ACCESS_TOKEN: (code: string) => `/api/v1/login/kakao/${code}`,
  GET_USER_UNIVERSITY: `/api/v1/user/university`,
  PATCH_USER_UNIVERSITY: (univ: string) => `/api/v1/user/univ/${univ}`,
}
