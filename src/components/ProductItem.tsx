import React from 'react';
import Link from "next/link";

function ProductItem(props) {
    const {product} = props
    return (
        <div className='border-solid bg-gray-50 flex flex-col border gap-5 w-full cursor-pointer'>
            <div className="p-4">
                <img
                    style={{width: 500, height: 200}}
                    className='object-contain h-50 mb-auto'
                    src={product?.thumbnail} alt={""}/>
                <p className="text-4xl">{product?.title}</p>
                <p className="bg-pink-400 w-fit px-2 my-3  text-white rounded-xl">{product?.category}</p>

                <p className=' h-12 overflow-hidden'>{product?.description}</p>
            </div>
            <Link
                className="mt-auto"
                href={`/product/${product?.id}`}>
                <p className="text-2xl flex justify-center p-4 bg-green-500 text-white">{product?.price}$</p>
            </Link>
        </div>
    );
}

export default ProductItem;
