import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img1 from '/src/images/useState.png'
import img2 from '/src/images/useEffect.png'
import img3 from '/src/images/useEffect_object.png'
import img4 from '/src/images/useContext.png'
import img5 from '/src/images/useContext_01.png'
import Card from '@/components/card'

const FirstBlog = () => {
  return (
    <>
     
     <Card>
      {/* <div className="py-3">
                    <h2 className="text-lg font-poppins font-bold text-top-color">Built-in React Hooks</h2>
                    <div className="border-2 w-20 border-top-color my-3"></div>
                    <p>Built-in React Hooks
      Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own. This page lists all built-in Hooks in React.</p>
      </div> */}
      <div className="py-3">
                    <h2 className="text-lg font-poppins font-bold text-top-color">useState hook</h2>
                    <div className="border-2 w-50 border-top-color my-3"></div>
                    <p>What is <b>useState</b>? UseState Hook is a function to add State in function component</p>
                    <p>What is <b>State?</b> State is nothing but just values or variables in your component</p>
                    <p>The useState hook allows you to add state to a functional component. It takes an initial value as an argument and returns an array with two elements: the current state value and a function to update it.</p>
                    <Image src={img1} width="400" height="100" alt=''/>
                    <p><b>useState with Object</b></p>
                    <Image src={img3} width="400" height="100" alt=''/>
                    <h2 className="text-lg font-poppins font-bold text-top-color">useEffect hook</h2>
                    <div className="border-2 w-20 border-top-color my-3"></div>
                    <p><b>useEffect hook </b>allows you to perform side effects in a functional component. Side effects include things like fetching data from an API, updating the DOM, or subscribing to an event.</p>
                    <p>
                    <b>Some Common Side Effects : </b><li>Fetching dat from API</li> <li>Updating the DOM docement</li> <li>Timer functions setTimeout and setInterval</li></p>
                    <p><b>useEffect</b> is combination of <li>componentDidMount</li> <li>componentDidUpdate</li> <li>componentWillUnmount</li></p>
                    <p><b>Variation of useEffect :</b><li>useEffect without dependencies - [it runs with first render and also run on any thing change]</li> <li>useEffect with empty array - [it runs only on first render] </li> <li>useEffect with variables-[it runs on first render and runs with that variable change]</li></p>
                    <Image src={img2} width="400" height="100" alt=''/>
                    <h2 className="text-lg font-poppins font-bold text-top-color">useContext hook</h2>
                    <div className="border-2 w-20 border-top-color my-3"></div>
                    <p>it used to manage global data in react application eg : Global State,Services,Themes</p>
                    <p><b>How to create useContext?</b>
                    <p>Three simple steps</p>
                    <li>Creating the Context </li>
                    <li>Providing the Context</li>
                    <li>Consuming the Context</li>
                    </p>
                    <Image src={img4} width="400" height="100" alt=''/>
                    <p>Access the Context</p>
                    <Image src={img5} width="400" height="100" alt=''/>
      </div>
      <Link href="/blog"> Back Blog</Link>
      </Card>
    </>
  )
}

export default FirstBlog
