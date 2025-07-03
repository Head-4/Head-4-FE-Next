'use client'

import Combobox from '@/shared/ui/ComboBox'
import { UNIVERSITY_LIST } from '@/shared/lib/constants/constants'
import { useState } from 'react'
import Button from '@/shared/ui/Button'
import { useToast } from '@/shared/providers/ToastContext'

export default function Page() {
  const toast = useToast()
  const [selectedUniversity, setSelectedUniversity] = useState<string | null>(
    null,
  )

  return (
    <>
      <div className="flex-1">
        <div className="mt-6 mb-5 flex gap-3">
          <span className="typography-B2_medium text-[#8F8F8F]">현재 학교</span>
          <h2 className="typography-B2_semibold text-blue-primary">
            상명대학교 천안캠퍼스
          </h2>
        </div>
        <Combobox
          items={Array.from(UNIVERSITY_LIST)}
          placeholder="학교명 검색"
          selectedItem={selectedUniversity}
          onItemSelectAction={setSelectedUniversity}
        />
      </div>
      <Button>저장</Button>
    </>
  )
}
