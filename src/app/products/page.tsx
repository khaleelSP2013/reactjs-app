import Link from 'next/link'
import React from 'react'

const ProdcutList = () => {
  const productid=100;
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      <h5>
      <Link href="/products/1">Product 1</Link>
      </h5>
      <h5>
      <Link href="/products/2">Product 2</Link>
      </h5>
      <h5>
      <Link href="/products/3" replace>Product 3</Link>
      </h5>
      <h5>
      <Link href={`products/${productid}`}>Product {productid}</Link>
      </h5>
     
    </>
  )
}

export default ProdcutList
