import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'

export default function EmptyCart() {
  const history=useNavigate()
  return (
    <div className="h-[80vh] w-full flex justify-center items-center" style={{marginTop :"50px"}}>
        <div className="flex flex-col justify-center items-center gap-4">
          <AiOutlineShoppingCart className="text-prim text-7xl"/>
          <p className="text-2xl font-semibold" >السلة فارغة</p>
          <button className="px-6 py-2 text-lg border border-prim text-prim rounded-lg"onClick={e=>history('/')}> العودة للتسوق</button>
        </div>
    </div>
  )
}
