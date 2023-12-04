import React from 'react';

function EditInputFields(props:any) {
    const { product, setProduct, edit } = props
    return (
        <div
            className="flex flex-col gap-3.5"
        >
            <p>Brand: <input
                className="border border-gray-500"
                value={product?.brand} onChange={
                (e) => setProduct((prev) => ({ ...prev, brand: e.target.value }))
            } disabled={!edit} /> </p>

            <p>Title: <input
                className="border border-gray-500"
                value={product?.title} onChange={
                (e) => setProduct((prev) => ({ ...prev, title: e.target.value }))
            } disabled={!edit} /> </p>
            <p>Category: <input
                className="border border-gray-500"
                value={product?.category} onChange={
                (e) => setProduct((prev) => ({ ...prev, category: e.target.value }))
            } disabled={!edit} /> </p>
            <p>Price: <input
                className="border border-gray-500"
                value={product?.price} onChange={
                (e) => setProduct((prev) => ({ ...prev, price: Number(e.target.value.replace(/\D/g, '') )}))
            } disabled={!edit} /> </p>
            <p>Rating: <input
                className="border border-gray-500"
                value={product?.rating} onChange={
                (e) =>
                    // allow only numbers
                    setProduct((prev) => ({ ...prev, rating: Number(e.target.value.replace(/\D/g, ''))
                    }))
            } disabled={!edit} />
            </p>
            <p>Stock: <input
                className="border border-gray-500"
                value={product?.stock} onChange={
                (e) => setProduct((prev) => ({ ...prev, stock: Number(e.target.value.replace(/\D/g, '')) }))
            } disabled={!edit} /> </p>
            <p>Description:
                <textarea
                    className="border border-gray-500 w-full"
                    rows={3}
                    value={product?.description} onChange={
                    (e) => setProduct((prev) => ({ ...prev, description: e.target.value }))
                } disabled={!edit} /> </p>
            <p>Images:</p>
            <div className="flex flex-wrap gap-3 h-50">
                {product?.images?.map((image) => (
                    <img
                        key={image}
                        src={image} alt="" />
                ))}
            </div>
        </div>

    );
}

export default EditInputFields;
