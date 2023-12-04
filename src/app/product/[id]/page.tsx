'use client'
import React from 'react';
import { useGetProduct } from "@/hooks/getProduct";
import { usePostProduct } from "@/hooks/postProduct";
import AlertComponent from "../../../components/AlertComponent";
import EditInputFields from "@/components/EditInputFields";
import ListAllFields from "@/components/ListAllFields";
import Loader from "@/components/Loader";
import Link from "next/link";

const initialProduct = {
    id: 0,
    title: "",
    description: "",
    price: 0,
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
    thumbnail: "",
    images: [],
}
function Page({ params: { id } }: { params: { id: string } }) {
    const [product, setProduct] = React.useState(initialProduct)
    // for edit mode
    const [edit, setEdit] = React.useState(false)
    // for alerts
    const [status, setStatus] = React.useState({ success: false, error: false, })
    const { data, isLoading: isProductLoading } = useGetProduct(id)
    React.useEffect(() => {
        // set product if data is available
        if (data) setProduct(data)
    }, [data])

    const { mutate, isSuccess, isError, data: successData, isPending } = usePostProduct(id)


    const handleSubmit = async () => mutate(product)

    React.useEffect(() => {
        // for alert, if success or error which resets after 4 seconds
        if (isSuccess) {
            setStatus({ success: true, error: false })
            setTimeout(() => {
                setStatus({ success: false, error: false })
            }, 4000)
        } else if (isError) {
            setStatus({ success: false, error: true })
            setTimeout(() => {
                setStatus({ success: false, error: false })
            }, 4000)
        }
    }, [isSuccess, isError])
    React.useEffect(() => {
        if (successData) {
            setProduct(successData)
        }
    }, [successData])
    return (
        <div className={`p-5 flex flex-col gap-4 p-5 border-2 m-10 shadow`}>
            {isProductLoading && <Loader />}
            {!isProductLoading &&
                <>
                    <div className="flex justify-between ">
                        <Link href="/">
                            <button className="bg-gray-100 w-fit px-4 hover:bg-gray-300 border border-gray-500">
                                Back
                            </button>
                        </Link>

                        <button
                            type={edit ? 'submit' : 'button'}
                            className="bg-gray-100 w-fit px-4 hover:bg-gray-300 border border-gray-500"
                            onClick={async () => {
                                if (edit) await handleSubmit()
                                setEdit((prev) => !prev)
                            }}
                            disabled={isPending}
                        >
                            {edit ? 'Save' : 'Edit'}
                        </button>

                    </div>
                    <p>Product Details:</p>
                </>

            }
            {!isProductLoading && edit ? <EditInputFields {...{ product, setProduct, edit }} /> : <ListAllFields {...{ product }} />}


            <AlertComponent status={status} />
        </div>
    )
}


export default Page;
