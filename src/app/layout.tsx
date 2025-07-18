import type { Metadata } from 'next'
import './globals.css'
import LayoutWrapper from '@/widgets/RootLayoutWrapper'
import { ToastProvider } from '@/shared/providers/ToastContext'
import { QueryProvider } from '@/shared/providers/QueryProvider'
import PWAPrompt from '../shared/ui/PWAPrompt'
import MutationLoading from '@/shared/ui/MutationLoading'

export const viewport = {
  themeColor: '#ffffff',
  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://server.univ-on.com'),
  title: 'univon',
  description: '대학교 공지사항 알림 서비스',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'univon',
    description: '대학교 공지사항 알림 서비스',
    images: ['/icons/icon-512x512.png'],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'univon',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
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
        <QueryProvider>
          <ToastProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
          </ToastProvider>
          <div id="toast-root" />
          <div id="modal-root" />
          <div id="drawer-root" />
          <PWAPrompt />
          <MutationLoading />
        </QueryProvider>
      </body>
    </html>
  )
}
