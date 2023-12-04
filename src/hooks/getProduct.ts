import { useQuery } from '@tanstack/react-query'
export const useGetProduct = (id: string) => {
    return useQuery({
        queryKey: ['product', id],
        queryFn: () => fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json()),
        // fetch only when id is present
        enabled: !!id,
    })
}
