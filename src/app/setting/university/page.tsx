import { Suspense } from 'react'
import { ServerFetchBoundary } from '@/shared/lib/ServerFetchBoundary'
import { userUniversityQueryOptions } from '@/features/university/hooks/useUserUniversityQuery'
import UniversityInfo from '@/features/university/ui/UniversityInfo'
import { UniversityForm } from '@/features/university/ui/UniversityForm'
import SkeletonUniversity from '@/features/university/ui/SkeletonUniversity'

export default function Page() {
  return (
    <>
      <Suspense
        fallback={
          <div className="mt-6 mb-5 flex gap-3">
            <span className="typography-B2_medium text-[#8F8F8F]">
              현재 학교
            </span>
            <SkeletonUniversity />
          </div>
        }
      >
        <ServerFetchBoundary fetchOptions={userUniversityQueryOptions()}>
          <UniversityInfo />
        </ServerFetchBoundary>
      </Suspense>
      <UniversityForm />
    </>
  )
}
