import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-8 pt-4 md:px-0">
      <div className="prose prose-img:w-2/3 prose-img:mx-auto prose-h1:text-blue-500 prose-h1:text-center prose-headings:text-gray-800 prose-p:text-gray-600">
        {children}
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
