import KeywordInputForm from '@/features/keyword/ui/KeywordInputForm'
import KeywordChipList from '@/features/keyword/ui/KeywordChipList'
import { ServerFetchBoundary } from '@/shared/lib/ServerFetchBoundary'
import { Suspense } from 'react'
import { userKeywordListQueryOptions } from '@/features/keyword/hooks/useUserKeywordListQuery'
import SkeletonKeywordList from '@/features/keyword/ui/SkeletonKeywordList'

export default function Page() {
  return (
    <div className="mt-6">
      <Suspense fallback={<SkeletonKeywordList count={2} />}>
        <ServerFetchBoundary fetchOptions={userKeywordListQueryOptions()}>
          <KeywordInputForm />
          <KeywordChipList />
        </ServerFetchBoundary>
      </Suspense>
    </div>
  )
}
