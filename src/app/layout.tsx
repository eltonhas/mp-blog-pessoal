import './globals.css'

import type { Metadata } from 'next'
import { Inter, Livvic } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const livvic = Livvic({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '900'],
  variable: '--font-livvic',
})

export const metadata: Metadata = {
  title: 'TechBlog',
  description: 'Seu blog sobre tecnologia.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${livvic.variable}`}>{children}</body>
    </html>
  )
}
