'use client'

import { useRouter } from "next/navigation";
const OrderProduct = () => {
    const router=useRouter();
    const handlerClick=()=>{
        console.log('Place Order')
        router.push("/");
    }
  return (
    <>
      <h3>Order Product</h3>
      <button onClick={handlerClick}>Place Order</button>
    </>
  )
}
export default OrderProduct
