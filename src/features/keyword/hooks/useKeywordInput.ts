import { useState } from 'react'
import { ValidatorBuilder } from '@/shared/lib/ValidatorBuilder'
import { useUserKeywordListMutation } from '@/features/keyword/hooks/useUserKeywordListMutation'

export function useKeywordInput() {
  const [keyword, setKeyword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const mutation = useUserKeywordListMutation()

  const validator = new ValidatorBuilder()
    .minLength('keyword', 1, '최소 1글자 이상 입력해주세요')
    .build()

  const handleAddClick = async () => {
    const errors = validator.validate({ keyword })
    if (errors.keyword) {
      setError(errors.keyword[0])
    } else {
      mutation.mutate(keyword)
      setKeyword('')
      setError(null)
    }
  }

  return { keyword, setKeyword, error, handleAddClick }
}
