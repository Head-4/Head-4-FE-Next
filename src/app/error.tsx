'use client'

import { startTransition, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  const router = useRouter()

  useEffect(() => {
    console.log(error.message)
  }, [error])

  return (
    <div>
      <h3>오류가 발생</h3>
      <button
        onClick={() => {
          startTransition(() => {
            router.refresh()
            reset()
          })
        }}
      >
        다시 시도
      </button>
    </div>
  )
}
