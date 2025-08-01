'use client'

import CrossFillIcon from '@/assets/CrossFillIcon.svg'
import { cn } from '@/shared/lib/utils'
import { useKeywordInput } from '@/features/keyword/hooks/useKeywordInput'

export default function KeywordInputForm() {
  const { keyword, setKeyword, error, handleSubmit } = useKeywordInput()

  return (
    <div className="group">
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className={cn(
            'typography-T3_semibold w-full rounded-xl border border-gray-lightGray px-5 py-4.75 text-black placeholder-[#ADADAD] focus:border-blue-primary focus:outline-none',
            error && 'border-[#BD0000]',
          )}
          placeholder="키워드 입력"
        />
        <button
          type="submit"
          className="flex shrink-0 flex-col items-center justify-center text-[#DBDBDB] group-focus-within:text-blue-primary"
        >
          <CrossFillIcon className="h-8 w-8 rotate-45" />
          <div className="typography-B3_medium mt-0.5">추가하기</div>
        </button>
      </form>
      <p
        className={cn(
          'typography-B2_medium mt-3 text-[#ADADAD]',
          error && 'text-[#BD0000]',
        )}
      >
        {error ? error : '최대 5개까지 추가할 수 있어요'}
      </p>
    </div>
  )
}
