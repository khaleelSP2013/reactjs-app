import React from 'react'

const ProductDetailLayout = ({children}:{
    children:{
        children:React.ReactNode
    }
}) => {
  return (
    <>
      {children}
      <h2>Feature Product</h2>
    </>
  )
}

export default ProductDetailLayout
