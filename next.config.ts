import type { NextConfig } from 'next'
import withPWA from 'next-pwa'

const pwaConfig = withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'offlineCache',
        expiration: {
          maxEntries: 200,
        },
      },
    },
    {
      urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/npm\/pretendard@.*\.css$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'font-cdn-cache',
        expiration: {
          maxAgeSeconds: 60 * 60 * 24 * 30,
          maxEntries: 5,
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
  ],
})

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

export default pwaConfig(nextConfig)