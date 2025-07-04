'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useKakaoLoginMutation } from '@/features/login/useKakaoLoginMutation'

export default function KakaoCallback() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const code = searchParams.get('code') ?? ''
  const mutation = useKakaoLoginMutation()

  useEffect(() => {
    if (!code) {
      alert('로그인 코드가 없습니다.')
      router.replace('/login')
      return
    }

    mutation.mutate(code, {
      onSuccess: () => {
        // router.replace('/')
      },
      onError: () => {
        alert('로그인 중 오류가 발생했습니다.')
        router.replace('/login')
      },
    })
  }, [code, router])

  return null
}
