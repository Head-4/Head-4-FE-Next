'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import SearchIcon from '@/assets/SearchIcon.svg'

export default function Searchbar() {
  const router = useRouter()
  const [search, setSearch] = useState<string>('')
  
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (search.trim()) {
        router.push(`/search?keyword=${encodeURIComponent(search.trim())}`)
      }
    }, 300)

    return () => clearTimeout(debounceTimer)
  }, [search, router])

  return (
    <div className="group flex gap-2 rounded-xl border border-[#E9E9E9] px-5 py-4">
      <SearchIcon className="text-[#ADADAD] transition-colors duration-100 group-focus-within:text-gray-500" />
      <input
        type="text"
        className="typography-T3_semibold w-full text-black placeholder-[#ADADAD] focus:outline-none"
        placeholder="검색 키워드를 입력하세요"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}
