'use client'

import Chip from '@/shared/ui/Chip'
import { useUserKeywordListQuery } from '@/features/keyword/hooks/useUserKeywordListQuery'

export default function KeywordList() {
  const { data } = useUserKeywordListQuery()

  return (
    <section className="mt-9 flex flex-wrap gap-3">
      {data.data.map((keyword) => (
        <Chip key={keyword.notifyId} onClick={() => {}}>
          {keyword.keyword}
        </Chip>
      ))}
    </section>
  )
}
