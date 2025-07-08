import CompleteImage from '@/assets/CompleteImage.svg'
import Button from '@/shared/ui/Button'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <div className="mt-[66px] flex flex-1 flex-col items-center">
        <div className="mb-15 space-y-6">
          <h1 className="typography-H1">환영합니다!</h1>
          <p className="typography-T3_medium text-gray-600">
            이제 필요한 공지만
            <br />
            빠르게 받아볼 수 있어요
          </p>
        </div>
        <CompleteImage />
      </div>
      <Link href="/">
        <Button>확인</Button>
      </Link>
    </>
  )
}
