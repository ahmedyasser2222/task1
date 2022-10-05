import { Carousel } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Card from "./Card"
import "../style/card.css"
import CardSkeleton from '../Skeleton/CardSkeleton'
export default function CategorySection(props) {
  const { title, products } = props;
  const [width ,setWidth] =useState(2000)
  useEffect(()=>{
    setWidth(window.innerWidth)
    window.addEventListener("resize" , ()=>{
      setWidth(window.innerWidth)
    })
  },[])
  return (
    <div className="category">
      <h1 className="text-2xl  font-bold text-prim px-4">{title}</h1>
      <div className="my-10 xl:h-96 h-96 " >
        {width > 2200 ?
        <Carousel indicators={false} slideInterval={2000}  >
        <div className="flex flex-row gap-4 items-center justify-around " dir="rtl">
         {products?products.slice(0,5).map((prod, index)=>{ 
             return(
               <Card data={prod} />
             )
           }) :
              <CardSkeleton count={4}/>
           }  
       </div>
        <div className="flex flex-row gap-4 items-center justify-around" dir="rtl">
         {products ?products.slice(5,10).map((prod, index)=>{ 
             return(
               <Card data={prod} />
             )
           }) : 
           <CardSkeleton count={4}/>
           }  
       </div>
       </Carousel> 
        : width > 767  ? 
        <Carousel indicators={false} slideInterval={20000}  >
        <div className="flex flex-row gap-4 items-center justify-around " dir="rtl">
         {products?products.slice(0,4).map((prod, index)=>{ 
             return(
               <Card data={prod} />
             )
           }) :
              <CardSkeleton count={4}/>
           }  
       </div>
        <div className="flex flex-row gap-4 items-center justify-around" dir="rtl">
         {products ?products.slice(4,8).map((prod, index)=>{ 
             return(
               <Card data={prod} />
             )
           }) : 
           <CardSkeleton count={4}/>
           }  
       </div>
       </Carousel> 
       :<Carousel indicators={false} slideInterval={20000} >
       <div className="flex flex-row gap-4 items-center justify-around " dir="rtl">
        {products?products.slice(0,2).map((prod, index)=>{ 
            return(
              <Card data={prod} />
            )
          }) :
             <CardSkeleton count={2}/>
          }  
      </div>
       <div className="flex flex-row gap-4 items-center justify-around" dir="rtl">
        {products ?products.slice(2,4).map((prod, index)=>{ 
            return(
              <Card data={prod} />
            )
          }) : 
          <CardSkeleton count={2}/>
          }  
      </div>
      <div className="flex flex-row gap-4 items-center justify-around" dir="rtl">
        {products ?products.slice(4,6).map((prod, index)=>{ 
            return(
              <Card data={prod} />
            )
          }) : 
          <CardSkeleton count={2}/>
          }  
      </div>
      <div className="flex flex-row gap-4 items-center justify-around" dir="rtl">
        {products ?products.slice(6,8).map((prod, index)=>{ 
            return(
              <Card data={prod} />
            )
          }) : 
          <CardSkeleton count={2}/>
          }  
      </div>
      <div className="flex flex-row gap-4 items-center justify-around" dir="rtl">
        {products ?products.slice(8,10).map((prod, index)=>{ 
            return(
              <Card data={prod} />
            )
          }) : 
          <CardSkeleton count={2}/>
          }  
      </div>
      </Carousel>
      }
        </div>
      <div className="flex items-center justify-center">
        <button className="rounded-xl border border-prim bg-white px-10 py-3 text-lg text-prim">
          جميع الاصناف
        </button>
      </div>
    </div>
  );
}
