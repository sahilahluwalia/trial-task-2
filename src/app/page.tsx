'use client'
//  use client because we are using react-query
import { useGetProducts } from "@/hooks/getProducts";
import ProductItem from "@/components/ProductItem";
import Loader from "@/components/Loader";

export default function Home() {
    const { data: products, isLoading } = useGetProducts()
    return (
        <main className="flex h-screen flex-col items-center justify-between p-24">
            {
                isLoading ? <Loader /> : <div className="grid gap-2 grid-cols-3">
                    {products?.products?.map((product: any) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </div>
            }
        </main>
    )
}
