import React from 'react'

const Product = ({ products }) => {
    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <img src={product.image} alt="product image" />
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Product