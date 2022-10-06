import { Carousel } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Card from "./Card"
import "../style/card.css"
import CardSkeleton from '../Skeleton/CardSkeleton'
import Slider from "react-slick";

export default function CategorySection(props) {
  const { title, products } = props;
  const [width ,setWidth] =useState(2000)
  useEffect(()=>{
    setWidth(window.innerWidth)
    window.addEventListener("resize" , ()=>{
      setWidth(window.innerWidth)
    })
  },[])
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 4,
    rtl:true ,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide:4,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="category">
      <h1 className="text-2xl  font-bold text-prim px-4">{title}</h1>
      <div className="my-10 xl:h-96 h-96 " >

       {products ?
   <Slider {...settings}  arrows={true} nextArrow={<p style={{color:'black'}}>next</p>} prevArrow={<p>next</p>} >
          {products.map(product =>{
            return(
              <Card data={product} />
            )
          }) }
          </Slider>
          : 
          <div className="cd">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton /> 
          </div>  
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
