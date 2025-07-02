'use client'

import { useState } from 'react'
import Combobox from '@/shared/ui/ComboBox'
import Button from '@/shared/ui/Button'
import { UNIVERSITY_LIST } from '@/shared/lib/constants'

export default function Page() {
  const [selectedUniversity, setSelectedUniversity] = useState<string | null>(
    null,
  )

  const handleSubmit = async () => {
    if (!selectedUniversity) return
  }

  return (
    <>
      <h2 className="typography-H3 mt-4.5 mb-8">
        공지를 받아 볼 <br /> 학교를 선택해 주세요
      </h2>
      <Combobox
        items={Array.from(UNIVERSITY_LIST)}
        placeholder="학교명 검색"
        selectedItem={selectedUniversity}
        onItemSelectAction={setSelectedUniversity}
      />
      <Button
        className="mt-auto"
        onClick={handleSubmit}
        disabled={!selectedUniversity}
      >
        다음
      </Button>
    </>
  )
}
