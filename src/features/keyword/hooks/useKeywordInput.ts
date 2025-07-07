import { useState } from 'react'
import { ValidatorBuilder } from '@/shared/lib/ValidatorBuilder'
import { useUserKeywordMutation } from '@/features/keyword/hooks/useUserKeywordMutation'
import { useUserKeywordListQuery } from '@/features/keyword/hooks/useUserKeywordListQuery'

export function useKeywordInput() {
  const [keyword, setKeyword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const { data } = useUserKeywordListQuery()
  const mutation = useUserKeywordMutation()

  const validator = new ValidatorBuilder()
    .minLength('keyword', 1)
    .maxCount('keyword', data?.data?.length ?? 0, 5)
    .noDuplicate('keyword', data?.data ?? [])
    .build()

  const handleAddClick = async () => {
    const errors = validator.validate({ keyword })

    if (errors.keyword) {
      setError(errors.keyword[0])
    } else {
      mutation.mutate({ method: 'POST', keyword: keyword })
      setKeyword('')
      setError(null)
    }
  }

  return { keyword, setKeyword, error, handleAddClick }
}
