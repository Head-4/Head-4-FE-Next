import {MutationCache, QueryCache, QueryClient} from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 0,
    },
  },
  // queryCache: new QueryCache({
  //   onError: (error) => {
  //     console.log(error.message, "query");
  //   }
  // }),
  // mutationCache: new MutationCache({
  //   onError: (error) => {
  //     console.log(error.message, "mutation");
  //   }
  // })
});