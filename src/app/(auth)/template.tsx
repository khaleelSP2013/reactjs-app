'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import './styles.css'


const navLinks=[
    {name:"Register", href:"/register"},
    {name:"Login", href:"/login"},
    {name:"Forget Password", href:"/forget-password"}
]
const AuthLayout = ({children} :{
    children:{
        children:React.ReactNode
    }
}) => {
    const pathname=usePathname();
    const [input,setInput]=useState("");
  return (
    <>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
    {navLinks.map((link)=>{
        const isActive=pathname.startsWith(link.href)
    return(
    <Link href={link.href} key={link.name} className={isActive?"font-bold mr-4":"text-teal-500 mr-4"}>
        {link.name}
    </Link>
    
  )  
      }
      
      )}
    </div>
    </div>
      <br />
       <input value={input} onChange={(e)=> setInput(e.target.value)}/>
      {children}
    </>
  )
}

export default AuthLayout
