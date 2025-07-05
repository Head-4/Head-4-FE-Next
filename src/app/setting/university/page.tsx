// "use client"

import Combobox from '@/shared/ui/ComboBox'
import { UNIVERSITY_LIST } from '@/shared/lib/constants/constants'
import { Suspense } from 'react'
import Button from '@/shared/ui/Button'
import { ServerFetchBoundary } from '@/shared/lib/ServerFetchBoundary'
import { userUniversityQueryOptions } from '@/features/university/hooks/useUserUniversityQuery'
import UniversityInfo from '@/features/university/ui/UniversityInfo'

export default function Page() {
  // const [selectedUniversity, setSelectedUniversity] = useState<string | null>(
  //   null,
  // )

  return (
    <>
      <div className="flex-1">
        <Suspense fallback={<div>잠시대기</div>}>
          <ServerFetchBoundary fetchOptions={userUniversityQueryOptions()}>
            <UniversityInfo />
          </ServerFetchBoundary>
        </Suspense>

        {/*<Combobox*/}
        {/*  items={Array.from(UNIVERSITY_LIST)}*/}
        {/*  placeholder="학교명 검색"*/}
        {/*  selectedItem={selectedUniversity}*/}
        {/*  onItemSelectAction={setSelectedUniversity}*/}
        {/*/>*/}
      </div>
      <Button>저장</Button>
    </>
  )
}
