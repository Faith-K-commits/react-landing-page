import React, { useEffect, useState } from 'react'
import Product from './Product'
import { ArrowBackOutline, ArrowForwardOutline } from 'react-ionicons'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=8")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <div className='flex justify-between mt-8'>
                <h1 className='font-bold text-5xl'>Interiors by Prabott.</h1>
                <div className='flex gap-4 cursor-pointer text-gray-500'>
                    <ArrowBackOutline /> <ArrowForwardOutline />
                </div>
            </div>
            <Product products={products} />
        </div>
    )
}

export default Products