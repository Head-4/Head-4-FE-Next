'use client'

import { useEffect, useState } from 'react'
import { useArticlesQuery } from '@/features/article/hooks/useArticlesQuery'
import { useInView } from 'react-intersection-observer'
import ArticleItem from '@/features/article/ui/ArticleItem'
import KeywordList from '@/features/keyword/ui/KeywordList'

export default function Home() {
  const [selectedKeyword, setSelectedKeyword] = useState<string>('null')
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useArticlesQuery(selectedKeyword)
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView])

  return (
    <>
      <KeywordList
        selectedKeyword={selectedKeyword}
        onKeywordClickAction={setSelectedKeyword}
      />
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
