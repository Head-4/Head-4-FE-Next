import { UniversityForm } from '@/features/university/ui/UniversityForm'

export default function Page() {
  return (
    <>
      <h2 className="typography-H3 mt-4.5 mb-8">
        공지를 받아 볼 <br /> 학교를 선택해 주세요
      </h2>
      <UniversityForm buttonText="다음" redirectPath="/signup/keyword" />
    </>
  )
}
