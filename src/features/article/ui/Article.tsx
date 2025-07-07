import { type Article as ArticleType } from '@/features/article/model/types'

interface ArticleProps {
  article: ArticleType
}

export default function Article({ article }: ArticleProps) {
  return (
    <li>
      <a
        href={article.url}
        className="block space-y-1 rounded-xl border border-white bg-white px-5 py-3.75 hover:border-blue-primary active:border-blue-primary"
      >
        <p className="typography-B1_semibold">{article.title}</p>
        <p className="typography-B2_medium text-gray-400">{article.date}</p>
      </a>
    </li>
  )
}
