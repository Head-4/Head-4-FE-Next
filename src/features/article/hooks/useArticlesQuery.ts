import {
  InfiniteData,
  useSuspenseInfiniteQuery,
  UseSuspenseInfiniteQueryOptions,
} from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/lib/constants/queryKey'
import { httpMethod } from '@/shared/config/httpMethod'
import { END_POINT } from '@/shared/lib/constants/apis'
import { ArticlesPagination } from '@/features/article/model/types'

interface ErrorResponse {
  code: number
  message: string
}

export interface GetArticlesResponse {
  httpStatus: string
  success: boolean
  data: ArticlesPagination
  error: ErrorResponse | null
}

const getArticles = async (cursor: number, keyword: string) => {
  const response = await httpMethod<GetArticlesResponse>(
    END_POINT.GET_ARTICLES(cursor, keyword),
    process.env.NEXT_PUBLIC_BEARER_TOKEN!,
    'GET',
  )

  if (!response?.success) {
    throw new Error(response?.error?.message ?? '유저 키워드 정보를 못 불러옴')
  }

  return response
}

export const articlesQueryOptions = (
  keyword: string,
): UseSuspenseInfiniteQueryOptions<
  GetArticlesResponse,
  Error,
  InfiniteData<GetArticlesResponse>,
  [string, string],
  number
> => ({
  queryKey: [QUERY_KEY.ARTICLES, keyword],
  queryFn: ({ pageParam = 0 }) => getArticles(pageParam, keyword),
  getNextPageParam: (lastPage) =>
    lastPage.data.hasNext ? lastPage.data.cursor : undefined,
  initialPageParam: 0,
})

export function useArticlesQuery(keyword: string) {
  return useSuspenseInfiniteQuery(articlesQueryOptions(keyword))
}
