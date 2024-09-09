import React from 'react'

const Product = ({ products }) => {
    return (
        <div className='mt-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {products.map(product => (
                    <div key={product.id} className='border border-gray-300 rounded-lg p-4'>
                        <h2 className='font-semibold text-lg mb-2'>{product.title}</h2>
                        <img src={product.image} alt="product image" className='h-72 w-full object-cover rounded-md mb-4' />
                        <div className='flex justify-between items-center'>
                            <p className='text-gray-500'>{product.category}</p>
                            <p className='font-bold'>€{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product
