import {  useState } from "react";
import {AiOutlineShoppingCart} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import { useNavigate } from "react-router-dom";
export default function NavBar({scrollY , scroll}) {
  const [showMenu , setShowMenu]=useState(false)
   const focus=(e)=>{
    e.target.style.backgroundColor="white"
    e.target.style.color="black"
   }
   const blur=(e)=>{
    e.target.style.backgroundColor="#374151"
    e.target.style.color="white"
   }
  return (
    <header className="fixed top-0 left-0 z-20 flex w-full flex-col">
      <nav className={`w-full py-2 justify-center  flex-row hidden sm:flex bg-prim border-b-2 border-white px-5 login ${scrollY > 100 ? "hide" :""}`}>
        <div className="flex flex-row items-center justify-between w-full xL:w-8/12  2xl:w-7/12" >
          <button className="px-4 py-1 border text-sm text-white border-white rounded-lg flex flex-row  items-center gap-2">
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
      </nav>  
      <nav
        className="border-gray-200  px-2 py-2.5 dark:bg-gray-900  sm:px-4"
        style={{ backgroundColor: "#977aba" }}
      >
        <div className="w-full xL:w-8/12  2xl:w-7/12 container mx-auto flex flex-wrap items-center justify-between">
          <button  className="flex items-center">
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
                className="input-search block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="ابحث ..."
                onFocus={e=>focus(e)}
                onBlur={e=>blur(e)}
              />
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
          <a href="/Cart" className="cursor-pointer order-2">
           <AiOutlineShoppingCart className=" text-white" style={{fontSize:"2rem"}}/>
          </a>
        </div>
      </nav>
      <nav
        className={`bg-gray-50 dark:bg-gray-700 links ${showMenu ? "show-menu" : ""}  ${scroll ? "" : scrollY > 100 ? "hide" : ""}`}
        style={{ backgroundColor: "#796295" }}
      >
        <div className="mx-auto max-w-screen-xl py-3 px-4 md:px-6 ">
          <div className="flex items-center justify-center ">
            <ul className="mt-0 mr-6 flex flex-row gap-4 space-x-8 text-sm font-medium">
              <li className="text-white hover:underline">
                <a
                  className="text-white hover:underline"
                  href="/"
                  aria-current="page"
                >
                  الصفحة الرئيسية
                </a>
              </li>
              <li className="text-white hover:underline">
                <a href="/AllProds" className="text-white hover:underline">
                  جميع المنتجات
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  اسعار مميزة
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  الادوية
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
