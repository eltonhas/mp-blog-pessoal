import fs from 'node:fs'
import path from 'node:path'

import { PostCard } from '@/components/post-card'

export default async function Home() {
  // const postsPath = '@/app/posts'
  const postsPath = path.resolve(process.cwd(), 'src/app/posts')
  const allFiles = fs.readdirSync(postsPath)
  console.log(allFiles)
  const folders = allFiles.filter((file) =>
    fs.statSync(path.join(postsPath, file)).isDirectory(),
  )

  console.log(folders)

  const postsPromises = folders.map(async (folder) => {
    const { meta } = await import(`${postsPath}/${folder}/page.mdx`)
    return {
      meta,
      folder,
    }
  })

  const posts = await Promise.all(postsPromises)

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-8 pt-4 md:px-0">
      {posts.map((post) => (
        <PostCard
          slug={post.folder}
          createdAt={post.meta.createdAt}
          description={post.meta.description}
          title={post.meta.title}
          key={post.meta.title}
        />
      ))}
    </main>
  )
}
