'use client'
import { notFound } from 'next/navigation'
import React from 'react'

const getRamdNumber=(count:number)=>{
return Math.floor(Math.random() * count)
}
const ReviewDetails= ({params}:{
    params:{
        productid:string,
        reviewid:string
    }
}) => {
    const random=getRamdNumber(2);
  
    if(parseInt(params.reviewid) >1000){
        notFound();
    }
    if(random===1){
      throw  Error("Error loading in review")
    }

  return (
    <>
      <h1>Review {params.reviewid} for product {params.productid}</h1>
    </>
  )
}

export default ReviewDetails
