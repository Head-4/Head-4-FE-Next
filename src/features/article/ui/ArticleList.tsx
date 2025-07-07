'use client'

import { useEffect } from 'react'
import { useArticlesQuery } from '@/features/article/hooks/useArticlesQuery'
import { useInView } from 'react-intersection-observer'
import { useSearchParams } from 'next/navigation'
import ArticleItem from '@/features/article/ui/ArticleItem'

export default function ArticleList() {
  const searchParams = useSearchParams()
  const selectedKeyword = searchParams.get('keyword') || 'null'
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useArticlesQuery(selectedKeyword)
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  if (!data) return null

  return (
    <>
      {data.pages[0].data.articles.length === 0 ? (
        <h2 className="typography-T1 my-auto text-center text-[#b2b2b2]">
          곧 새로운 공지를 <br /> 가져올게요!
        </h2>
      ) : (
        <>
          <ul className="mt-5 space-y-3">
            {data.pages.map((page) =>
              page.data.articles.map((article) => (
                <ArticleItem key={article.id} article={article} />
              )),
            )}
          </ul>
          <div ref={ref} />
        </>
      )}
    </>
  )
} 