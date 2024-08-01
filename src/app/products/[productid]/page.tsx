import Link from 'next/link'
import React from 'react'

const ProductDetails = ({params}:{
    params: {productid:string}
}) => {
  return (
    <>
     <Link href="/">Home</Link>
      <h1>Details about product {params.productid}</h1>
     
    </>
  )
}

export default ProductDetails
