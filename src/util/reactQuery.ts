import { QueryClient } from '@tanstack/react-query'

// Create a client
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // gc time is increased so that it uses old cache data for longer time, so that edited data is not lost when user goes back to the page
            gcTime: 10 * 60 * 60,
            staleTime: 10 * 60 * 60,
            // not to refetch on window focus and going back to the page
            refetchOnWindowFocus: false,
        }
    }
})
