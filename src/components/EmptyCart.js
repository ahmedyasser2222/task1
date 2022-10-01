import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"

export default function EmptyCart() {
  return (
    <div className="h-[80vh] w-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <AiOutlineShoppingCart className="text-prim text-7xl"/>
          <p className="text-2xl font-semibold">السلة فارغة</p>
          <button className="px-6 py-2 text-lg border border-prim text-prim rounded-lg"> العودة للتسوق</button>
        </div>
    </div>
  )
}
