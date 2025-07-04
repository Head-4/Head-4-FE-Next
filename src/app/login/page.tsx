import Link from 'next/link'
import Logo from '@/assets/Logo.svg'
import KakaoIcon from '@/assets/KakaoIcon.svg'

export default function Page() {
  const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`

  return (
    <>
      <div className="mt-[200px] mb-[164px] flex flex-col items-center gap-7">
        <Logo />
        <h2 className="typography-T3_semibold text-center">
          나에게 필요한 공지만 <br />
          빠르게 받아볼 수 있어요
        </h2>
      </div>
      <div className="space-y-4">
        <p className="typography-T4_medium text-center text-[#6F6F6F]">
          카카오로 바로 시작해 보세요
        </p>
        <Link
          href={KAKAO_LOGIN_URL}
          className="flex w-full items-center justify-center gap-4 rounded-xl bg-[#FEE500] px-7.5 py-4.5 text-xl font-semibold"
        >
          <KakaoIcon />
          카카오 로그인
        </Link>
      </div>
    </>
  )
}
