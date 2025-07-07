import { type Article } from '@/features/article/model/types'
import { formatToDateString } from '@/shared/lib/utils'

interface ArticleItemProps {
  article: Article
}

export default function ArticleItem({ article }: ArticleItemProps) {
  return (
    <li className="mb-3">
      <a
        href={article.url}
        className="block space-y-1 rounded-xl border border-white bg-white px-5 py-3.75 hover:border-blue-primary active:border-blue-primary"
      >
        <p className="typography-B1_semibold">{article.title}</p>
        <p className="typography-B2_medium text-gray-400">
          {formatToDateString(article.date)}
        </p>
      </a>
    </li>
  )
}
