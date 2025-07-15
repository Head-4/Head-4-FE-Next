import KeywordInputForm from '@/features/keyword/ui/KeywordInputForm'
import KeywordChipList from '@/features/keyword/ui/KeywordChipList'
import { ServerFetchBoundary } from '@/shared/lib/ServerFetchBoundary'
import { Suspense } from 'react'
import { userKeywordListQueryOptions } from '@/features/keyword/hooks/useUserKeywordListQuery'
import SkeletonKeywordList from '@/features/keyword/ui/SkeletonKeywordList'

export default function Page() {
  return (
    <div className="mt-6">
      <KeywordInputForm />
      <Suspense fallback={<SkeletonKeywordList count={3} />}>
        <ServerFetchBoundary fetchOptions={userKeywordListQueryOptions()}>
          <KeywordChipList />
        </ServerFetchBoundary>
      </Suspense>
    </div>
  )
}
