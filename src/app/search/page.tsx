import Searchbar from '@/features/search/ui/Searchbar'
import ArticleList from '@/features/article/ui/ArticleList'

export default function Page() {
  return (
    <>
      <h2 className="typography-H3 mt-5 mb-3">
        무엇을 <br />
        찾고 계신가요?
      </h2>
      <p className="typography-B2_medium mb-7 text-gray-600">
        내가 설정한 키워드가 포함된 공지만 검색돼요
      </p>
      <Searchbar />
      <ArticleList />
    </>
  )
}
