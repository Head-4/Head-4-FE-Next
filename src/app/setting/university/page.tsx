import { Suspense } from 'react'
import { ServerFetchBoundary } from '@/shared/lib/ServerFetchBoundary'
import { userUniversityQueryOptions } from '@/features/university/hooks/useUserUniversityQuery'
import UniversityInfo from '@/features/university/ui/UniversityInfo'
import { UniversityForm } from '@/features/university/ui/UniversityForm'

export default function Page() {
  return (
    <>
      <Suspense fallback={<div>잠시대기</div>}>
        <ServerFetchBoundary fetchOptions={userUniversityQueryOptions()}>
          <UniversityInfo />
          <UniversityForm />
        </ServerFetchBoundary>
      </Suspense>
    </>
  )
}
