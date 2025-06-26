'use client'

import { useKeyword } from '@/features/keyword/hooks/useKeyword'
import Chip from '@/shared/ui/Chip'

export default function KeywordList() {
  const { keywordList } = useKeyword()

  return (
    <section className="mt-9 flex flex-wrap gap-3">
      {Array.from(keywordList).map((keyword) => (
        <Chip key={keyword.id} onClick={() => {}}>
          {keyword.value}
        </Chip>
      ))}
    </section>
  )
}
