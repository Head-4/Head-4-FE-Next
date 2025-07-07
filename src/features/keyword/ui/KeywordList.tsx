'use client'

import { useUserKeywordListQuery } from '@/features/keyword/hooks/useUserKeywordListQuery'
import FilterButton from '@/shared/ui/FilterButton'

interface KeywordListProps {
  selectedKeyword: string
  onKeywordClickAction: (keyword: string) => void
}

export default function KeywordList({
  selectedKeyword,
  onKeywordClickAction,
}: KeywordListProps) {
  const { data } = useUserKeywordListQuery()

  return (
    <section className="mt-2 flex flex-wrap gap-2">
      <FilterButton
        key={'all'}
        isSelected={'null' === selectedKeyword}
        onClick={() => onKeywordClickAction('null')}
      >
        전체
      </FilterButton>
      {data.data.map((keyword) => (
        <FilterButton
          key={keyword.notifyId}
          isSelected={selectedKeyword === keyword.keyword}
          onClick={() => onKeywordClickAction(keyword.keyword)}
        >
          {keyword.keyword}
        </FilterButton>
      ))}
    </section>
  )
}
