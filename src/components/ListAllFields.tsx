import React from 'react';

function ListAllFields(props:any) {
    const {product}=props
    return (
      <>
          <p>Brand: {product?.brand}</p>
          <p>Title: {product?.title}</p>
          <p>Category: {product?.category}</p>
          <p>Price: {product?.price}</p>
          <p>Rating: {product?.rating}</p>
          <p>Stock: {product?.stock}</p>
          <p>Description: <br/>
              {product?.description}</p>
          <p>Images:</p>
          <div className="flex flex-wrap gap-3 h-50">
              {product?.images?.map((image) => (
                  <img
                      key={image}
                      src={image} alt="" />
              ))}
          </div>
      </>
    );
}

export default ListAllFields;
