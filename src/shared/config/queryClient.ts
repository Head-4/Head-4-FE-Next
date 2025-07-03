import {
  isServer,
  QueryClient,
  defaultShouldDehydrateQuery,
} from '@tanstack/react-query'

const DEFAULT_STALE_TIME = 60 * 1000

export const queryClientSingleton = (function () {
  let instance: QueryClient | undefined = undefined

  function createQueryClientInstance() {
    return new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: DEFAULT_STALE_TIME,
          refetchOnWindowFocus: false,
          refetchOnReconnect: false,
          retry: 0,
        },
        dehydrate: {
          shouldDehydrateQuery: (query) =>
            defaultShouldDehydrateQuery(query) ||
            query.state.status === 'pending',
        },
      },
    })
  }

  return {
    getInstance: function (): QueryClient {
      if (isServer) {
        return createQueryClientInstance()
      }

      if (!instance) {
        instance = createQueryClientInstance()
      }

      return instance
    },
  }
})()
