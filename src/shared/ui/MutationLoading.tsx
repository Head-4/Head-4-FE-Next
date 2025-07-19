'use client'

import { useIsMutating } from '@tanstack/react-query'
import Image from 'next/image'
import Loading from '@/assets/Loading.gif'
import { useEffect, useState } from 'react'

export default function MutationLoading() {
  const isMutating = useIsMutating()
  const [showLoading, setShowLoading] = useState(false)

  useEffect(() => {
    if (isMutating > 0) {
      const timeoutId = setTimeout(() => {
        setShowLoading(true)
      }, 300)
      return () => clearTimeout(timeoutId)
    } else {
      setShowLoading(false)
    }
  }, [isMutating])

  if (!showLoading) return null

  return (
    <div className="fixed inset-0 z-90 mx-auto max-w-[500px]">
      <Image
        src={Loading}
        alt="로딩 중"
        width={160}
        height={160}
        className="absolute top-1/2 left-1/2 z-100 -translate-x-1/2 -translate-y-1/2"
        priority
      />
    </div>
  )
}
