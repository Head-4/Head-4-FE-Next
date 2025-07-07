'use client'

import { useEffect, useRef } from 'react'
import { useArticlesQuery } from '@/features/article/hooks/useArticlesQuery'
import { useInView } from 'react-intersection-observer'
import { useSearchParams } from 'next/navigation'
import ArticleItem from '@/features/article/ui/ArticleItem'
import { useVirtualizer } from '@tanstack/react-virtual'

export default function ArticleList() {
  const searchParams = useSearchParams()
  const selectedKeyword = searchParams.get('keyword') || 'null'
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useArticlesQuery(selectedKeyword)
  const { ref, inView } = useInView()

  const parentRef = useRef<HTMLDivElement>(null)

  const allArticles = data.pages.flatMap((page) => page.data.articles)

  const virtualizer = useVirtualizer({
    count: allArticles.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 100,
    measureElement: (element) => element?.getBoundingClientRect().height ?? 100,
    overscan: 2,
  })

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  if (allArticles.length === 0) {
    return (
      <h2 className="typography-T1 my-auto text-center text-[#b2b2b2]">
        곧 새로운 공지를 <br /> 가져올게요!
      </h2>
    )
  }

  return (
    <div ref={parentRef} className="mt-5 h-[calc(100vh-200px)] overflow-auto">
      <ul
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={virtualItem.key}
            data-index={virtualItem.index}
            ref={virtualizer.measureElement}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            <ArticleItem article={allArticles[virtualItem.index]} />
          </div>
        ))}
      </ul>
      <div ref={ref} />
    </div>
  )
}
