'use client'

import { useEffect, useState } from 'react'
import { useArticlesQuery } from '@/features/article/hooks/useArticlesQuery'
import { useInView } from 'react-intersection-observer'
import Article from '@/features/article/ui/Article'

export default function Home() {
  const [selectedKeyword, setSelectedKeyword] = useState<string>('null')
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useArticlesQuery(selectedKeyword)
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  if (data.pages[0].data.articles.length === 0) {
    return (
      <h2 className="typography-T1 my-auto text-center text-[#b2b2b2]">
        곧 새로운 공지를 <br /> 가져올게요!
      </h2>
    )
  }

  return (
    <ul>
      {data.pages.map((page) =>
        page.data.articles.map((article) => (
          <li key={article.id}>
            <Article article={article} />
          </li>
        )),
      )}
      <div ref={ref} />
    </ul>
  )
}
