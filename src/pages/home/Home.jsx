import { Card, Carousel } from "flowbite-react";
import { useRef } from "react";
import CategoryInicator from "../../components/categoryInicator/CategoryInicator";
import CategorySection from "../../components/CategorySection";
import Separator from "../../components/Separator";
import { Products } from "../../data/products";
import Slider from "react-slick";
import "./home.css"
import '../AllProducts/allProducts.css'
import Skeleton from "react-loading-skeleton";
import { useEffect } from "react";
import axios from "axios"
import {API} from '../../API'
export default function Home() {
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1 ,
    rtl:true
  };
 /*  useEffect(()=>{
    async function getData(){
       try {
        const res= await axios.get(`${API}/api/OnlineStore/GetNavigationalCategories`)
        console.log(res.data)
       } catch (error) {
        console.log(error.response.data)
       }
    }
    getData()
  },[]) */

  
  return (
    <div className="xl:mt-56 md:mt-40 mt-30 home">
      <div className="mt-20  m-con">
        
        <div  className="flex flex-row flex-nowrap items-center justify-between  overflow-y-hidden con-cat">
          <CategoryInicator
            imgSRC="https://media.zid.store/cdn-cgi/image/w=235,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/e0b92311-6bc6-4ea1-8f3b-713a0fe15706-260x260.jpg"
            title="العناية بالبشرة"
                /* title=""
                imgSRC="" */
          />
          <CategoryInicator
          /* imgSRC=""
          title="" */
            imgSRC="https://media.zid.store/cdn-cgi/image/w=235,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/050701ef-7713-458d-9617-7c348d99843e-260x260.jpg"
            title="العناية بالشعر"
          />
          <CategoryInicator
          /* imgSRC=""
          title="" */
            imgSRC="https://media.zid.store/cdn-cgi/image/w=235,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/16e64762-53b0-4abb-98e3-4ec7efdf59f1-260x260.jpg"
            title="العناية اليومية"
          />
          <CategoryInicator
         /*  imgSRC=""
          title="" */
            imgSRC="https://media.zid.store/cdn-cgi/image/w=235,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/0e2a605c-c6da-4500-b375-ebdaea179074-260x260.jpg"
            title="العناية بالجسم"
          />
          <CategoryInicator
          /* imgSRC=""
          title="" */
            imgSRC="https://media.zid.store/cdn-cgi/image/w=235,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/8838476b-b7a5-4cec-8f4e-61e43541304d-260x260.jpg"
            title="المكياج و الاكسسوارات"
          />
        </div>

        <div className="slider" >
          {
            1 ?
            <Slider {...settings}  nextArrow={false} prevArrow={false}>
          <button className="h-full " >
              <img
                className="object-contain"
                objectFit="contain"
                layout="fill"
                src="https://media.zid.store/cdn-cgi/image/w=1010,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/8b950504-46e4-4069-8181-e9abc63c7576.jpg"
                alt="..."
                width={"100%"}
                height={"100%"}
              />
            </button>
            <button className="h-full ">
              <img
                className="object-contain"
                objectFit="contain"
                layout="fill"
                src="https://media.zid.store/cdn-cgi/image/w=1300,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/ab2131fa-faaa-4aab-aa2e-a0546b23f955.jpg"
                alt="..."
                width={"100%"}
              />
            </button>
            <button className="h-full ">
              <img
                className="object-contain"
                objectFit="contain"
                layout="fill"
                src="https://media.zid.store/cdn-cgi/image/w=1300,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/51061311-a803-4a8e-b282-e36f4771da38.jpg"
                alt="..."
                width={"100%"}
              />
            </button>
            <button className="h-full ">
              <img
                className="object-contain"
                objectFit="contain"
                layout="fill"
                src="https://media.zid.store/cdn-cgi/image/w=1300,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/3b636eb7-1721-4d82-94c7-73b676d64a8a.jpg"
                alt="..."
                width={"100%"}
              />
            </button>
          </Slider> 
          :  <Skeleton  height={"50vh"}  />
          }
         
        </div>
            
        <div className="mt-10 flex flex-row  justify-between box">
          <div
            className="h-96 sm:h-48 md:h-64 lg:h-96  xl:h-128"
            style={{ width: "50%" }}
          >
           { 1 ? 
              <button className="relative h-full w-full div-photo">
              <img
                className="object-contain"
                objectFit="contain"
                layout="fill"
                src="https://media.zid.store/cdn-cgi/image/w=850,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/fffe482a-f541-4889-8e1c-3e57f55bd768.jpg"
                alt="..."
              />
            </button>
              : 
              <Skeleton  className="relative h-full w-full div-photo" />

           }
          </div>
          <div
            className="h-44 sm:h-48 md:h-64 lg:h-96  xl:h-128"
            style={{ width: "50%" }}
          >
            { 1 ? 
               <button className="relative h-full w-full div-photo">
               <img
                 className="object-contain"
                 objectFit="contain"
                 layout="fill"
                 src="https://media.zid.store/cdn-cgi/image/w=850,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/d8e650a9-c822-4e79-83ff-c5b45c287cb6.jpg"
                 alt="..."
               />
             </button>
              : <Skeleton className="relative h-full w-full div-photo" />
               }
          </div>
        </div>

        <div className="slider" >
          { 1 ? 
          <Slider {...settings} >
            <button className=" ">
              <img
                className="object-contain"
                objectFit="contain"
                layout="fill"
                src="https://media.zid.store/cdn-cgi/image/w=1300,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/d9990ce3-335c-4d06-afa6-fd3dd42fe61e.jpg"
                alt="..."
                width={"100%"}
              />
            </button>
            <button className=" ">
              <img
                className="object-contain"
                objectFit="contain"
                layout="fill"
                src="https://media.zid.store/cdn-cgi/image/w=1300,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/d9990ce3-335c-4d06-afa6-fd3dd42fe61e.jpg"
                alt="..."
                width={"100%"}
                height={"100%"}
              />
            </button>
            {/* <button className="">
              <img
                className="object-contain"
                objectFit="contain"
                layout="fill"
                src="https://media.zid.store/cdn-cgi/image/w=1300,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/93384f65-6742-49b0-afc7-1133e92a01d8.png"
                alt="..."
                width={"100%"}
                height={"100%"}

              />
            </button> */}
            <button className="h-full ">
              <img
                className="object-contain"
                objectFit="contain"
                layout="fill"
                src="https://media.zid.store/cdn-cgi/image/w=1300,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/4cc30905-d5cb-4467-8283-0ecfde2bb3b2.jpg"
                alt="..."
                width={"100%"}
                height={"100%"}

              />
            </button>
          </Slider>
           :  <Skeleton  height={"50vh"}  />

          
        }
        </div>
      </div>
      <Separator />
      <div className="mt-20 m-con ">
        <CategorySection title="أسعار مميزة" products={Products.slice(0, 10)} />
      </div>
      <div className=" mt-20 m-con ">
        <CategorySection
          title="عروض لي مور"
          products={Products.slice(0, 10)}
        />
      </div>
      <div className=" mt-20 m-con ">
        <CategorySection
          title="الأفضل مبيعاً"
          products={Products.slice(0, 10)}
        />
      </div>
     
    </div>
  );
}
