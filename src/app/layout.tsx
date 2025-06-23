import type { Metadata } from 'next'
import './globals.css'

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
      <body className="mx-auto flex min-h-screen max-w-[500px] flex-col shadow-2xl">
        <>
          <header></header>
          <main className="flex-1">{children}</main>
        </>
      </body>
    </html>
  )
}
