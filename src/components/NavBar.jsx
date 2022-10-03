import { useRef } from "react";
import {  useState } from "react";
import {AiOutlineShoppingCart , AiFillCaretDown} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import { Link, useNavigate } from "react-router-dom";
import { Products } from "../data/products";

export default function NavBar({scrollY , scroll}) {
  const itemSearch=useRef()
  const navigate=useNavigate()
  const [showMenu , setShowMenu]=useState(false)
  const [searchText , setSearchText]=useState("")
  const [items , setItems]=useState([])
  const [width , setWidth]=useState(0)  
  const handelChange=(e)=>{
     setSearchText(e.target.value)
     let Items=[]
     for (let index = 0; index < Products.length; index++) {
        if(Products[index].product_name.includes(e.target.value)) {
          Items.push(Products[index])
        }     
     }
     setItems(Items)
  }
   window.addEventListener("resize" , ()=>{
    setWidth(window.innerWidth)
   })
   const focus=(e)=>{
    itemSearch.current.style.display="block"
    e.target.style.borderBottomLeftRadius ="0"
    e.target.style.borderBottomRightRadius ="0"
   }
   const blur=(e)=>{
    itemSearch.current.style.display="none"
    e.target.style.borderBottomLeftRadius ="10px"
    e.target.style.borderBottomRightRadius ="10px"
   }
  return (
    <header className="fixed top-0 left-0 z-20 flex w-full flex-col" >
      <nav className={`nav-top-con py-0 justify-center  flex-row hidden sm:flex bg-prim border-b-2 border-white px-5 login ${scrollY > 100 ? "hide" :""}`}>
         <div className="nav-top">
         <div className=" flex flex-row items-center justify-between w-full xL:w-8/12  2xl:w-7/12" >
          <button onClick={e=>navigate("/register")} className="px-4 py-1 border text-sm text-white border-white rounded-lg flex flex-row  items-center gap-2">
          <CgProfile className=" text-white text-xl"/>
            <span>  
                تسجيل الدخول 
            </span>
          </button>
          <button className="px-4 py-1 border text-sm text-white border-white rounded-lg flex flex-row  items-center gap-2">
            <span>  
                السعودية
            </span>
          </button>
        </div>
         </div>
      </nav> 
         {/* /////////// */}
      <nav  
        className="border-gray-200  px-2 py-2.5 dark:bg-gray-900  sm:px-4 nav-center"
        style={{ backgroundColor: "#977aba" }}
      >
        <div className="w-full xL:w-8/12  2xl:w-7/12 container mx-auto flex flex-wrap items-center justify-between">
          <button  className="flex items-center" onClick={e=>navigate("/")}>
            <img
              src="https://media.zid.store/cdn-cgi/image/h=175,q=85/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/8a9125e0-a000-4c37-a9ed-344d3f47954a.png"
              className="me-3 h-20 w-20"
              alt="Logo"
            />
          </button>
          <div className="flex md:order-1 ">
            <button
              type="button"
              dataCollapseToggle="navbar-search"
              ariaControls="navbar-search"
              ariaExpanded="false"
              className="mr-1 rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700 md:hidden"
            >
              <svg   // search icon 
                className="h-5 w-5"
                ariaHidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block div-search" style={{width:"40rem"}}>
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 " >
                <svg
                  className="h-5 w-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className=" block w-full input-search"
                style={{borderRadius :"10px"}}
                placeholder="ابحث ..."
                onFocus={e=>focus(e)}
                onBlur={e=>blur(e)}
                onChange={e=>handelChange(e)}
              />
              <div className="items-search" ref={itemSearch}>
                  <ul>
                    {items ?
                    items.map((product , index) =>{
                      if(index < 5)
                      {return (
                        <li>{product.product_name}</li>
                      )}
                    }) :<></>
                  }           
                  </ul>
              </div>
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                onClick={e=>setShowMenu(!showMenu)}
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>            
          </div>
          <div
            className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="cursor-pointer order-2 icon" >
          <a onClick={e=>navigate("/cart")} className="cursor-pointer order-2">
           <AiOutlineShoppingCart className=" text-white" style={{fontSize:"2rem"}}/>
          </a>
          <a onClick={e=>navigate("/register")} className={`cursor-pointer order-3 mm  ${width < 767 ? "m" :""} ${scrollY < 100 ? "m" :""} `}>
             <CgProfile className=" text-white text-xl" style={{fontSize:"2rem"}} />         
              </a>
          </div>
        </div>
      </nav>
         {/* /////////// */}
      <nav
        className={`links ${showMenu ? "show-menu" : ""}  ${scroll ? "" : scrollY > 100 ? "hide" : ""}`}
        style={{ backgroundColor: "#796295" }}
      >
          <div className="flex  justify-center div-links" style={{width:"100%"}}>
            <ul className="">
              <li className="text-white ">
                <a
                  className="text-white"
                  href="/"
                  aria-current="page"
                >
                  الصفحة الرئيسية
                </a>
                
              </li>
              <li className="text-white">
                <a href="/AllProds" className="text-white">
                  جميع المنتجات
                </a>
              </li>
              <li>
                <a href="#" className="text-white ">
                  اسعار مميزة
                </a>
              </li>
              <li className="text-white">
                <a className="text-white" >
                   العناية بالبشرة
                <AiFillCaretDown  style={{display:"inline"}} />
                </a>
                <div className="links-menu s"  >
                    <ul>
                      <li>الغسول التونر والمقشرات</li>
                      <li>كريمات البشره</li>
                      <li>السيريوم</li>
                      <li>واقيات الشمس</li>
                      <li>العناية بمحيط العين</li>
                      <li>العنايه بالشفاء</li>
                      <li>ماسكات البشرة</li>
                    </ul>
                </div>
              </li>
              
              <li>
                <a href="#" className="text-white">
                  الادوية
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                   منتجات حصرية
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                   العدسات
                </a>
                <AiFillCaretDown  style={{display:"inline" , color:"white"}}/>
                <div className="links-menu s" style={{width:"100%"}}>
                    <ul>
                      <li>ليندا</li>
                      <li>نيولنس</li>
                      <li>السيريوم</li>
                      <li> AFLE</li>
                      <li>ديفا</li>
                      <li> لنس مي</li>
                    </ul>
                </div>
              </li>
              <li>
                <a href="#" className="text-white">
                   عروض لي مور
                </a>
              </li>
            </ul>
        </div>
      </nav>

    </header>
  );
}
