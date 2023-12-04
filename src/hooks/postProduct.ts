import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/util/reactQuery";

const postProduct = async (product: any) => {
    const productId = product.id
    // removing the id from the product object so that dummyjson.com will not complain about it
    const productWithoutId = { ...product, id: undefined }
    // as dummyjson.com only accept edited fields, we can use react-from-hook to get the edited fields in production
    fetch(`https://dummyjson.com/products/${productId}`, {
        method: 'PUT',
        body: JSON.stringify(productWithoutId),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => res.json())
}

export const usePostProduct = (id: string) => {
    return useMutation({
        mutationKey: ['product', id],
        mutationFn: (product: any) => postProduct(product),
        onSuccess: (_, data) => {
            // setting the data in the cache so that when user goes back to the page, it will be with the updated data as well
            queryClient.setQueryData(['products'], (oldData: any) => {
                return {
                    ...oldData,
                    products: oldData.products.map((product: any) => {
                        if (product.id === data.id) {
                            return data
                        }
                        return product
                    })
                }
            })
            queryClient.setQueryData(['product', String(data.id)], data)
        }
    })
}
