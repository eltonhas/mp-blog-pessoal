import fs from 'node:fs'

import { compileMDX } from 'next-mdx-remote/rsc'
import path from 'path'

const rootDirectory = path.join(process.cwd(), 'src', 'app', 'content')

export const getPostBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`)

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

  const { frontmatter, content } = await compileMDX<{
    title: string
    description: string
    createdAt: string
  }>({
    source: fileContent,
    options: { parseFrontmatter: true },
  })

  return { meta: { ...frontmatter, slug: realSlug }, content }
}

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory)

  const posts = []

  for (const file of files) {
    const { meta } = await getPostBySlug(file)
    posts.push(meta)
  }

  return posts
}
