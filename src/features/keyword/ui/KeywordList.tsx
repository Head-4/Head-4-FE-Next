'use client'

import { useUserKeywordListQuery } from '@/features/keyword/hooks/useUserKeywordListQuery'
import { useRouter, useSearchParams } from 'next/navigation'
import FilterButton from '@/shared/ui/FilterButton'

export default function KeywordList() {
  const { data } = useUserKeywordListQuery()
  const router = useRouter()
  const searchParams = useSearchParams()
  const selectedKeyword = searchParams.get('keyword') || 'null'

  const handleKeywordClick = (keyword: string) => {
    const params = new URLSearchParams(searchParams)
    if (keyword === 'null') {
      params.delete('keyword')
    } else {
      params.set('keyword', keyword)
    }
    router.push(`?${params.toString()}`)
  }

  return (
    <section className="mt-2 flex flex-wrap gap-2">
      <FilterButton
        key={'all'}
        isSelected={'null' === selectedKeyword}
        onClick={() => handleKeywordClick('null')}
      >
        전체
      </FilterButton>
      {data.data.map((keyword) => (
        <FilterButton
          key={keyword.notifyId}
          isSelected={selectedKeyword === keyword.keyword}
          onClick={() => handleKeywordClick(keyword.keyword)}
        >
          {keyword.keyword}
        </FilterButton>
      ))}
    </section>
  )
}
