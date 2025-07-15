import { Suspense } from 'react'
import ArticleList from '@/features/article/ui/ArticleList'
import KeywordList from '@/features/keyword/ui/KeywordList'
import { ServerFetchBoundary } from '@/shared/lib/ServerFetchBoundary'
import { userKeywordListQueryOptions } from '@/features/keyword/hooks/useUserKeywordListQuery'
import SkeletonArticleList from '@/features/article/ui/SkeletonArticleList'
import SkeletonKeywordList from '@/features/keyword/ui/SkeletonKeywordList'

export default function Home() {
  return (
    <Suspense
      fallback={
        <>
          <SkeletonKeywordList count={3} />
          <SkeletonArticleList count={5} />
        </>
      }
    >
      <ServerFetchBoundary fetchOptions={userKeywordListQueryOptions()}>
        <KeywordList />
        <ArticleList />
      </ServerFetchBoundary>
    </Suspense>
  )
}
