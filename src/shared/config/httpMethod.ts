import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export function createConfig<Body extends object>(
  token?: string,
  body?: Body,
): AxiosRequestConfig {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : undefined,
    },
    data: body,
  }
}

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
})

async function refreshAuth(tokens: string): Promise<string> {
  return tokens
}

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      const currentToken = originalRequest.headers.Authorization.split(' ')[1]

      const newTokens = await refreshAuth(currentToken)

      originalRequest.headers.Authorization = `Bearer ${newTokens}`

      return axiosInstance(originalRequest)
    }

    return Promise.reject(error)
  },
)

export async function httpMethod<Data>(
  url: string,
  tokens: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
  config?: AxiosRequestConfig,
): Promise<Data | undefined> {
  try {
    const response = await axiosInstance({
      url,
      method,
      ...createConfig(tokens, config?.data),
      ...config,
    })

    return response.data as Data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.statusText || 'Request failed')
    }
    return undefined
  }
}
