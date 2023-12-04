
import { useQuery } from '@tanstack/react-query'
export const useGetProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: () => fetch('https://dummyjson.com/products').then(res => res.json())
    })
}
