'use client'

import Combobox from '@/shared/ui/ComboBox'
import { UNIVERSITY_LIST } from '@/shared/lib/constants/constants'
import Button from '@/shared/ui/Button'
import React, { useState } from 'react'
import { useUserUniversityMutation } from '@/features/university/hooks/useUserUniversityMutation'
import { useRouter } from 'next/navigation'

interface UniversityFormProps {
  buttonText?: string
  redirectPath?: string
}

export const UniversityForm = ({
  buttonText = '저장',
  redirectPath,
}: UniversityFormProps) => {
  const [selectedUniversity, setSelectedUniversity] = useState<string>('')
  const mutation = useUserUniversityMutation()
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (selectedUniversity) {
      mutation.mutate(selectedUniversity, {
        onSuccess: () => {
          setSelectedUniversity('')
          if (redirectPath) router.push(redirectPath)
        },
      })
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-1 flex-col justify-between"
    >
      <Combobox
        items={Array.from(UNIVERSITY_LIST)}
        placeholder="학교명 검색"
        selectedItem={selectedUniversity}
        onItemSelectAction={setSelectedUniversity}
      />
      <Button type="submit" disabled={!selectedUniversity}>
        {buttonText}
      </Button>
    </form>
  )
}
