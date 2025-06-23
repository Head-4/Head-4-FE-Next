import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'univon',
  description: '성지훈 화이팅',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'univon',
    description: '성지훈 화이팅',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className="mx-auto flex min-h-screen max-w-[500px] flex-col px-5 shadow-2xl">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <div id="toast-root" />
      </body>
    </html>
  )
}
