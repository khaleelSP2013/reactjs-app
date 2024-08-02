import Link from 'next/link'
import React from 'react'

const SecondBlog = () => {
  return (
    <div>
      <h1>Second Blog Post</h1>
      <Link href="/blog">Back Blog</Link>
    </div>
  )
}

export default SecondBlog
