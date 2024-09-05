import React from 'react'

const Product = ({ products }) => {
    return (
        <div className='mt-8'>
            <h1 className='font-bold text-3xl'>Interiors by Prabott.</h1>
            <div className='grid grid-cols-4 gap-4 border-black rounded-lg'>
                {products.map(product => (
                    <div key={product.id} >
                        <h1>{product.title}</h1>
                        <img src={product.image} alt="product image" className='h-72 w-64' />
                        <div className='flex justify-between'>
                            <p className='text-gray-300'>{product.category}</p>
                            <p>€{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product