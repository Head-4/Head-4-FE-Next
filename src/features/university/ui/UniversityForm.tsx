'use client'

import Combobox from '@/shared/ui/ComboBox'
import { UNIVERSITY_LIST } from '@/shared/lib/constants/constants'
import Button from '@/shared/ui/Button'
import { useState } from 'react'
import { useUserUniversityMutation } from '@/features/university/hooks/useUserUniversityMutation'

export const UniversityForm = () => {
  const [selectedUniversity, setSelectedUniversity] = useState<string | null>(
    null,
  )
  const mutation = useUserUniversityMutation()

  const handleSave = () => {
    if (selectedUniversity) {
      mutation.mutate(selectedUniversity)
    }
  }

  return (
    <>
      <Combobox
        items={Array.from(UNIVERSITY_LIST)}
        placeholder="학교명 검색"
        selectedItem={selectedUniversity}
        onItemSelectAction={setSelectedUniversity}
      />
      <Button
        onClick={handleSave}
        disabled={!selectedUniversity}
        className="mt-auto"
      >
        저장
      </Button>
    </>
  )
}
