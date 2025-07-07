'use client'

import Chip from '@/shared/ui/Chip'
import { useUserKeywordListQuery } from '@/features/keyword/hooks/useUserKeywordListQuery'
import { useUserKeywordMutation } from '@/features/keyword/hooks/useUserKeywordMutation'

export default function KeywordChipList() {
  const { data } = useUserKeywordListQuery()
  const mutation = useUserKeywordMutation()

  return (
    <section className="mt-9 flex flex-wrap gap-3">
      {data.data.map((keyword) => (
        <Chip
          key={keyword.notifyId}
          onClick={() =>
            mutation.mutate({
              method: 'DELETE',
              notifyId: String(keyword.notifyId),
            })
          }
        >
          {keyword.keyword}
        </Chip>
      ))}
    </section>
  )
}
