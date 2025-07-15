import Skeleton from '@/shared/ui/Skeleton'

export default function SkeletonKeywordList({ count }: { count: number }) {
  return (
    <div className="mt-2 mb-5 flex flex-wrap gap-2">
      {new Array(count).fill(0).map((_, idx) => (
        <Skeleton
          key={`skeleton-keyword-${idx}`}
          className="h-8 w-[80px] rounded-[20px]"
        />
      ))}
    </div>
  )
}
