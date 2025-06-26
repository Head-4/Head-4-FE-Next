import type { Metadata } from 'next'
import './globals.css'
import LayoutWrapper from '@/widgets/RootLayoutWrapper'
import { ToastProvider } from '@/shared/providers/ToastContext'

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
        <ToastProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ToastProvider>
        <div id="toast-root" />
        <div id="modal-root" />
        <div id="drawer-root" />
      </body>
    </html>
  )
}
