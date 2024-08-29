import Link from 'next/link'

export function Header() {
  return (
    <header className="font-alt flex w-full items-center justify-center bg-slate-100 py-10">
      <Link href={'/'}>
        <h1 className="text-3xl font-semibold md:text-5xl">
          <span className="text-blue-500">Tech</span>Blog
        </h1>
      </Link>
    </header>
  )
}
