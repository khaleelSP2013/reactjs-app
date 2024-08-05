import Link from 'next/link'

const Blog = () => {
  return (
    <>
    <h2 className="text-lg font-poppins font-bold text-top-color">Built-in React Hooks</h2>
      <div className="border-4 w-100 border-top-color my-4">
        <li><Link href="/blog/first"> React Hooks</Link></li>
        <li><Link href="/blog/second"> React formik</Link></li>
        <li>
        <a href='https://stackblitz.com/edit/vitejs-vite-calkmg?file=src%2Fcontact.tsx' target='_blank'>Sample Code - Stackblitz</a>
        </li>
      </div>
    </>
  )
}

export default Blog
