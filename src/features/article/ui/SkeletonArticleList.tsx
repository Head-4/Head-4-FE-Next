import Skeleton from '@/shared/ui/Skeleton'

function SkeletonArticleItem() {
  return (
    <div className="mb-3 space-y-1 rounded-xl border border-white bg-white px-5 py-3.75">
      <Skeleton className="h-6 w-full" />
      <Skeleton className="h-6 w-[80px]" />
    </div>
  )
}

export default function SkeletonArticleList({ count }: { count: number }) {
  return new Array(count)
    .fill(0)
    .map((_, idx) => (
      <SkeletonArticleItem key={`skeleton-article-item-${idx}`} />
    ))
}
