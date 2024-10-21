import React from 'react'

const Product = ({ products }) => {
    return (
        <div className='mt-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {products.map(product => (
                    <div key={product.id} className='border border-gray-300 rounded-lg p-4 cursor-pointer'>
                        <h2 className='font-semibold text-lg mb-2'>{product.title}</h2>
                        <img src={product.image} alt="product image" className='h-72 w-full object-cover rounded-md mb-4' />
                        <div className='flex justify-between items-center'>
                            <p className='text-gray-500'>{product.category}</p>
                            <p className='font-bold'>€{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex gap-4 mt-12'>
                <img src="./images/bed.jpg" alt="A bed" className='rounded-lg w-1/2 ' />
                <div className='flex flex-col gap-4'>
                    <img src="./images/couch.jpg" alt="A couch" className='rounded-lg' />
                    <div className='flex gap-9'>
                        <img src="./images/stool.jpg" alt="A stool" className='rounded-lg w-72' />
                        <img src="./images/dining.jpg" alt="Dinning table" className='rounded-lg w-72' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
