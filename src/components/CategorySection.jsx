import React, { useEffect, useState } from "react";
import Card from "./card/Card"
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


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",  backgroundColor:"#977ABA" , color:"white" ,borderRadius:"6pc" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ display: "block", backgroundColor:"#977ABA" , color:"#222" ,borderRadius:"6pc"  }}
        onClick={onClick}
      />
    );
  }
  
  /* var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false
        }
      },
      
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,

        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          
        }
      }
    ]
  } */
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false
        }
      },
      
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,

        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          
        }
      }
    ]
  }; 

  return (
    <div className="category">
        <h1 className="text-2xl  font-bold text-prim px-4">{title}</h1>
        <div className="my-10 xl:h-96 h-96 h-slide slide-show" style={{cursor:"grab"}}>

       {1?
        <Slider {...settings} className={"slide-hh"} >
          {products.map(product =>{
            return(
              <Card product={product} key={product.id} />
            )
          }) }
          </Slider>
          : 
          <Slider {...settings} className={"slide-hh"} >
          <div><CardSkeleton /></div>
          <div><CardSkeleton /></div>
          <div><CardSkeleton /></div>
          <div><CardSkeleton /></div>
          <div><CardSkeleton /></div>
          <div><CardSkeleton /></div>
          <div><CardSkeleton /></div>
          <div><CardSkeleton /></div>
          </Slider>
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
