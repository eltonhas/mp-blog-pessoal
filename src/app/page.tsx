import { PostCard } from '@/components/post-card'
import { getAllPostsMeta } from '@/lib/mdx'

export default async function Home() {
  const posts = await getAllPostsMeta()

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-8 pt-4 md:px-0">
      {posts.map((post) => (
        <PostCard
          slug={post.slug}
          createdAt={post.createdAt}
          description={post.description}
          title={post.title}
          key={post.title}
        />
      ))}
    </main>
  )
}
