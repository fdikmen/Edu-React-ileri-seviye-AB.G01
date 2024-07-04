"use client"
import React, { useEffect, useState } from 'react'

export default function Cart() {
    const [productCount, setProductCount] = useState(0)
    useEffect(() => {
        console.log('Product Cart Page from UseEffect')
        setProductCount(5)
    }
    , [])
  return (
    <div>
        <h1>Product Cart Page</h1>
        <p>
            Product Cart Page
        </p>
        <p>
            Product Count: {productCount}
        </p>
        <button onClick={() => setProductCount(productCount + 1)}>Add Product</button>
    </div>
  )
}
