import Link from 'next/link'
import React from 'react'


const home = () => {
  return (
    <div>
      <h1>Welcome Home !</h1>
      <Link href="/blog">Blog</Link> || 
      <Link href="/products">Product</Link> ||  
      <Link href="/complex-dashboard">Dashboard</Link>
    </div>
  )
}

export default home
