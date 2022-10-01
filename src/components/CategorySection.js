import { Carousel } from "flowbite-react";
import React from "react";

export default function CategorySection(props) {
  const { title, products } = props;
  return (
    <div>
      <h1 className="text-2xl  font-bold text-prim px-4">{title}</h1>
      <div className="my-10 h-72 w-full" >

        <Carousel indicators={false} slideInterval={20000} >
           <div className="flex flex-row gap-4 items-center justify-between" dir="rtl">
            {products?.slice(0,4).map((prod, index)=>{ 
                return(
                <div className=" flex h-full flex-col " key={index}>
                  <div className="relative w-44 h-44 " >
                    <img className="object-contain" src={prod.image_url}  objectFit="contain"
                    layout="fill" alt=""/>
                  </div>
                  <div>
                    <p className="font-bold text-lg ">{prod.product_name}</p>
                    <p className="font-bold text-prim">{prod.price} ر.س</p>
                  </div>
                </div>
                )
              })}  
          </div>
           <div className="flex flex-row gap-4 items-center justify-between" dir="rtl">
            {products?.slice(4,9).map((prod, index)=>{ 
                return(
                <div className=" flex h-full flex-col " key={index}>
                  <div className="relative w-44 h-44 " >
                    <img className="object-contain"  objectFit="contain"
                    layout="fill" alt=""/>
                  </div>
                  <div>
                    <p className="font-bold text-lg ">{prod.product_name}</p>
                    <p className="font-bold text-prim">{prod.price} ر.س</p>
                  </div>
                </div>
                )
              })}  
          </div>
          </Carousel>
        </div>
      <div className="flex items-center justify-center">
        <button className="rounded-xl border border-prim bg-white px-10 py-3 text-lg text-prim">
          جميع الاصناف
        </button>
      </div>
    </div>
  );
}
