import type { Metadata } from 'next'
import './globals.css'
import LayoutWrapper from '@/widgets/RootLayoutWrapper'

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
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
        <div id="toast-root" />
      </body>
    </html>
  )
}
