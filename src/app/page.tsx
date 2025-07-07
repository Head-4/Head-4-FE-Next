import { Suspense } from 'react'
import ArticleList from '@/features/article/ui/ArticleList'
import KeywordList from '@/features/keyword/ui/KeywordList'
import { ServerFetchBoundary } from '@/shared/lib/ServerFetchBoundary'
import { userKeywordListQueryOptions } from '@/features/keyword/hooks/useUserKeywordListQuery'

export default function Home() {
  return (
    <Suspense fallback={<div>잠시대기</div>}>
      <ServerFetchBoundary fetchOptions={userKeywordListQueryOptions()}>
        <KeywordList />
        <ArticleList />
      </ServerFetchBoundary>
    </Suspense>
  )
}
