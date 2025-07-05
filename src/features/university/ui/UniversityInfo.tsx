"use client"

import { useUserUniversityQuery } from '@/features/university/hooks/useUserUniversityQuery'

export default function UniversityInfo() {
  const { data } = useUserUniversityQuery()

  return (
    <div className="mt-6 mb-5 flex gap-3">
      <span className="typography-B2_medium text-[#8F8F8F]">현재 학교</span>
      <h2 className="typography-B2_semibold text-blue-primary">
        {data.data}
      </h2>
    </div>
  )
}
