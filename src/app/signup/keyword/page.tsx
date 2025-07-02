import KeywordList from '@/features/keyword/ui/keywordList'
import InputForm from '@/features/keyword/ui/InputForm'
import Button from '@/shared/ui/Button'

export default function Page() {
  return (
    <>
      <h2 className="typography-H3 mt-4.5 mb-8">
        보고 싶은 공지의 <br /> 키워드를 입력해 주세요
      </h2>
      <InputForm />
      <KeywordList />
      <Button className="mt-auto">다음</Button>
    </>
  )
}
