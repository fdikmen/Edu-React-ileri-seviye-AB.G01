import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>Home Page
      <Link href="/product">Product</Link>
      <br/>
      <Link href="/product/123">Product 123</Link>
      <br/>
      <Link href="/product/category/food">Product Category Food</Link>
      <br/>
      <Link href="/product/category/food/fruit" replace>Product Category Food Fruit</Link>
      <br/>
      <Link href="/product/detail" prefetch>Product Detail</Link>
    </div>
  )
}
