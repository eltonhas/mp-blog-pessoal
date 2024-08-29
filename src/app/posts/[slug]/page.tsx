import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { getPostBySlug } from '@/lib/mdx'

const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostBySlug(slug)
  return { meta, content }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const { meta } = await getPageContent(params.slug)
  return { title: meta.title }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { content } = await getPageContent(params.slug)
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-8 pt-4 md:px-0">
      <div className="prose prose-img:w-2/3 prose-img:mx-auto prose-h1:text-blue-500 prose-h1:text-center prose-headings:text-gray-800 prose-p:text-gray-600">
        {content}
      </div>
      <Link
        href={'/'}
        className="flex w-min items-center font-sans text-xl text-blue-500 transition-colors hover:text-blue-300"
      >
        <ArrowLeft />
        Voltar
      </Link>
    </div>
  )
}
