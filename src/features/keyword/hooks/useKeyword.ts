'use client'

import { Keyword } from '@/features/keyword/model/type'
import { useState } from 'react'

export function useKeyword() {
  const [keywordList, setKeywordList] = useState<Set<Keyword>>(new Set())

  return { keywordList }
}
