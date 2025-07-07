export interface Article {
  id: number
  title: string
  date: string
  url: string
}

export interface ArticlesPagination {
  articles: Article[]
  hasNext: boolean
  cursor: number
}