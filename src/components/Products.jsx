import React, { useEffect, useState } from 'react'
import Product from './Product'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <Product products={products} />
        </div>
    )
}

export default Products