import KeywordChipList from '@/features/keyword/ui/KeywordChipList'
import KeywordInputForm from '@/features/keyword/ui/KeywordInputForm'
import NotificationModal from '@/features/notification/ui/NotificationModal'
import { Suspense } from 'react'
import { ServerFetchBoundary } from '@/shared/lib/ServerFetchBoundary'
import { userKeywordListQueryOptions } from '@/features/keyword/hooks/useUserKeywordListQuery'

export default function Page() {
  return (
    <>
      <div className="flex-1">
        <h2 className="typography-H3 mt-4.5 mb-8">
          보고 싶은 공지의 <br /> 키워드를 입력해 주세요
        </h2>
        <Suspense fallback={<div>잠시대기</div>}>
          <ServerFetchBoundary fetchOptions={userKeywordListQueryOptions()}>
            <KeywordInputForm />
            <KeywordChipList />
          </ServerFetchBoundary>
        </Suspense>
      </div>
      <NotificationModal triggerText="다음" />
    </>
  )
}
