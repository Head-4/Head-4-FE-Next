import KeywordInputForm from '@/features/keyword/ui/KeywordInputForm'
import KeywordList from '@/features/keyword/ui/keywordList'
import { ServerFetchBoundary } from '@/shared/lib/ServerFetchBoundary'
import { Suspense } from 'react'
import { userKeywordListQueryOptions } from '@/features/keyword/hooks/useUserKeywordListQuery'

export default function Page() {
  return (
    <div className="mt-6">
      <Suspense fallback={<div>잠시대기</div>}>
        <ServerFetchBoundary fetchOptions={userKeywordListQueryOptions()}>
          <KeywordInputForm />
          <KeywordList />
        </ServerFetchBoundary>
      </Suspense>
    </div>
  )
}
