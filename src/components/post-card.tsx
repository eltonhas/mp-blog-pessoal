import Link from 'next/link'

interface PostCardProps {
  title: string
  description: string
  createdAt: string
  slug: string
}

export function PostCard({
  slug,
  createdAt,
  description,
  title,
}: PostCardProps) {
  return (
    <Link
      href={`/posts/${slug}`}
      className="flex flex-col gap-2 border-b-2 border-slate-300 pb-2"
    >
      <h2 className="text-2xl font-medium text-gray-800">{title}</h2>
      <p className="text-xl font-medium italic text-gray-600">{description}</p>
      <p className="text-right text-lg font-medium italic text-blue-500">
        {createdAt}
      </p>
    </Link>
  )
}
