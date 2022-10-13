import { useEffect, useRef } from "react";
import { useState } from "react";
import {
  AiOutlineShoppingCart,
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineSearch,
  AiFillCaretLeft,
  AiFillCaretRight,
} from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { GrLinkNext } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { MdOutlineMenuOpen } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { Products } from "../../data/products";
import "./header.css";
import { useSelector } from "react-redux";

export default function NavBar({ scrollY, scroll }) {
  const itemSearch = useRef();
  const itemSearch0 = useRef();
  const links = useRef();
  const { countProdust, price } = useSelector((state) => state.cartCount);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showInerMenu, setShowhInerMenu] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [items, setItems] = useState([]);
  const [widthScrean, setWidthScrean] = useState(0);
  const showLeftMenu = (e) => {
    links.current.classList.add("show");
    links.current.classList.remove("back");
    e.currentTarget.classList.add("show");
    document.querySelector("#back").style.display = "block";
  };
  useEffect(() => {
    function set() {
      setWidthScrean(window.innerWidth);
    }
    set();
  }, []);
  window.addEventListener("resize", () => {
    setWidthScrean(window.innerWidth);
    if (window.innerWidth > 770) {
      document.querySelector(".hide-menu").style.display = "none";
    }
  });
  const handelChange = (e) => {
    setSearchText(e.target.value);
    let Items = [];
    for (let index = 0; index < Products.length; index++) {
      if (Products[index].product_name.includes(e.target.value)) {
        Items.push(Products[index]);
      }
    }
    setItems(Items);
  };
  const focus = (e) => {
    itemSearch.current.style.display = "block";
    itemSearch0.current.style.display = "block";
    e.target.style.border = "";
    setHidden(false);
  };
  const blur = (e) => {
    if(e.target.value === ""){
       itemSearch.current.style.display = "none";
       itemSearch0.current.style.display = "none";
       setHidden(true);
      }
  };
  window.addEventListener("resize", () => {
    if (window.innerWidth === 770) {
      document.querySelector(".icon-left").style.display = "none";
    }
  });
  const showCountry = () => {
    document.querySelector(".body-country").classList.toggle("show");
    document.querySelector(".country").classList.toggle("show");
  };
  return (
    <header className="fixed top-0 left-0 z-20 flex w-full flex-col">
      <nav
        className={` flex-row sm:flex bg-prim border-b  login ${
          scrollY > 100 ? "hide" : ""
        }`}
      >
        <div className="nav-top m-con">
          <button
            onClick={(e) => navigate("/account-profile")}
            className="px-4 py-1 border text-sm text-white border-white rounded-lg flex flex-row  items-center gap-2"
          >
            <CgProfile className=" text-white text-xl" />
            <span>
              اهلا احمد ياسر
              {/*  تسجيل الدخول  */}
            </span>
          </button>
          <button
            onClick={(e) => showCountry()}
            className="px-4 py-1 border text-sm text-white border-white rounded-lg flex flex-row  items-center gap-2"
          >
            <span>السعودية</span>
          </button>
        </div>
      </nav>

      <nav
        className={`py-2.5  nav-center-con m-con ${
          showSearch ? "show-search" : ""
        } `}
        style={{ overflow: `${hidden && widthScrean < 770 ? "hidden" : ""}` }}
      >
        <div className="w-full  nav-center ">
          <div className="logo ">
            <a
              onClick={(e) => {
                setShowMenu(!showMenu);
              }}
              className={`bars show   `}
            >
              <MdOutlineMenuOpen className=" text-white  bars-icon" />
            </a>
            <button className="btn-logo " onClick={(e) => navigate("/")}>
              <img
                src="https://media.zid.store/cdn-cgi/image/h=175,q=85/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/8a9125e0-a000-4c37-a9ed-344d3f47954a.png"
                className=""
                alt="Logo"
              />
            </button>
          </div>

          <div className="flex">
            <div className="relative  div-search" >
              <div className="icon-search">
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
                className="w-full input-search"
                placeholder="ابحث ..."
                onFocus={(e) => focus(e)}
                onBlur={(e) => blur(e)}
                onChange={(e) => handelChange(e)}
                style={{ border: "none" }}
                autoComplete="off"
              />
              <div className="items-search" ref={itemSearch0}>
                <ul>
                  {items ? (
                    items.map((product, index) => {
                      if (index < 5) {
                        return <li onClick={e=>navigate(`/product/5`)}>{product.product_name}</li>;
                      }
                    })
                  ) : (
                    <></>
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="icon">
            <a
              onClick={(e) => setShowSearch(!showSearch)}
              className={`show  s`}
            >
              <AiOutlineSearch className=" text-white i text-xl" />
            </a>
            <a className={`price-cart`}>{price ? "SAR " + price : ""}</a>
            <a onClick={(e) => navigate("/cart")} className="cart">
              <p
                className="sup"
                style={{ backgroundColor: `${countProdust ? "#AB0000" : ""}` }}
              >
                {countProdust ? countProdust : ""}
              </p>
              <AiOutlineShoppingCart
                className="i text-white"
                style={{ display: "inline" }}
              />
            </a>
            <a onClick={(e) => navigate("/register ")} className="show s">
              <CgProfile className=" text-white i text-xl" />
            </a>
      
          </div>
        </div>
        <div className="relative  div-search-2 ">
          <div className="pointer-events-none  inset-y-0 left-0 flex items-center pl-3 ">
            <div className="icon-search">
              {/* <svg
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
              </svg> */}
              <span className="sr-only">Search icon</span>
            </div>
          </div>
          <input
            type="text"
            id="search-navbar"
            className=" block w-full input-search"
            style={{ paddingRight: "38px" }}
            placeholder="ابحث ..."
            onFocus={(e) => focus(e)}
            onBlur={(e) => blur(e)}
            onChange={(e) => handelChange(e)}
            autoComplete="off"
          />
          <div className="items-search" ref={itemSearch}>
            <ul>
              {items ? (
                items.map((product, index) => {
                  if (index < 5) {
                    return <li onClick={e=>navigate(`/product/5`)}>{product.product_name}</li>;
                  }
                })
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <nav
        ref={links}
        className={`links   ${showMenu ? "show-menu" : ""} ${
          widthScrean > 770 ? (scrollY > 100 ? "hide" : "") : ""
        }`}
      >
        <div className={`m-con`}>
          <div className="div-links" style={{ width: "100%" }}>
            {/* <div className="hide-menu"  onClick={e=>setShowMenu(!showMenu)} >
                         <GiCancel className="hide-icon" />
                        </div> */}
            <div
              className="back-icon"
              id="back"
              onClick={(e) => {
                links.current.classList.add("back");
                e.currentTarget.style.display = "none";
                setTimeout(() => {
                  let li = document.querySelector(".links ul");
                  for (let index = 0; index < li.children.length; index++) {
                    li.children[index].classList.remove("show");
                  }
                }, 700);
              }}
            >
              <GrLinkNext
                className="hide-icon"
                style={{ color: "white !important" }}
              />
            </div>
            <div
              className="back-icon"
              style={{ display: "none" }}
              onClick={(e) => {
                links.current.classList.add("back");
                let li = document.querySelector(".links ul");
                for (let index = 0; index < li.children.length; index++) {
                  li.children[index].classList.remove("show");
                }
              }}
            >
              <GrLinkNext className="hide-icon" />
            </div>

            <ul className="main m-con " style={{ width: "100%" }}>
              <li>
                <a onClick={(e) => navigate("/")} aria-current="page">
                  الصفحة الرئيسية
                </a>
              </li>
              <li>
                <a onClick={(e) => navigate("/products")}>جميع المنتجات</a>
              </li>
              <li>
                <a onClick={(e) => navigate("/categories/5")}>اسعار مميزة</a>
              </li>
              <li onClick={(e) => showLeftMenu(e)}>
                <a onClick={(e) => navigate("/categories/5")}>
                  العناية بالبشرة
                  <AiFillCaretDown className="down-icon" />
                  <AiFillCaretUp className="up-icon" />
                </a>
                <div className="icon-left">
                  {" "}
                  <AiFillCaretLeft />
                </div>
                <div className="links-menu q" onClick={""}>
                  <ul>
                    <li onClick={(e) => navigate("/categories/5")}>الغسول التونر والمقشرات</li>
                    <li onClick={(e) => navigate("/categories/5")}>السيريوم</li>
                    <li onClick={(e) => navigate("/categories/5")}>واقيات الشمس</li>
                    <li onClick={(e) => navigate("/categories/5")}>العناية بمحيط العين</li>
                    <li onClick={(e) => navigate("/categories/5")}>العنايه بالشفاء</li>
                    <li onClick={(e) => navigate("/categories/5")}>ماسكات البشرة</li>
                    <li oonClick={(e) => navigate("/categories")}>كريمات البشره</li>
                  </ul>
                </div>
              </li>
              <li onClick={(e) => showLeftMenu(e)}>
                <a href="#">
                  العناية بالشعر
                  <AiFillCaretDown className="down-icon" />
                  <AiFillCaretUp className="up-icon" />
                </a>
                <div className="icon-left">
                  {" "}
                  <AiFillCaretLeft />
                </div>
                <div className="links-menu ">
                  <ul>
                    <li onClick={(e) => navigate("/categories/5")}>الشامبو</li>
                    <li onClick={(e) => navigate("/categories/5")}> البلسم</li>
                    <li onClick={(e) => navigate("/categories/5")}>ماسكات الشعر</li>
                    <li onClick={(e) => navigate("/categories/5")}> معالجات الشعر</li>
                    <li onClick={(e) => navigate("/categories/5")}> صبغات الشعر</li>
                    <li onClick={(e) => navigate("/categories/5")}> اجهزة واستشوار</li>
                  </ul>
                </div>
              </li>
              <li className="h" onClick={(e) => showLeftMenu(e)}>
                <a href="#">
                  منتجات العناية اليومية
                  <AiFillCaretDown className="down-icon" />
                  <AiFillCaretUp className="up-icon" />
                </a>
                <div className="icon-left">
                  {" "}
                  <AiFillCaretLeft />
                </div>
                <div className="links-menu ">
                  <ul>
                    <li onClick={(e) => navigate("/categories/5")}>العناية بالاطفال</li>
                    <li onClick={(e) => navigate("/categories/5")}> العناية بالفم</li>
                    <li onClick={(e) => navigate("/categories/5")}> العناية بالجسم</li>
                    <li onClick={(e) => navigate("/categories/5")}> العناية باليدين</li>
                    <li onClick={(e) => navigate("/categories/5")}> العناية بالقدمين</li>
                    <li onClick={(e) => navigate("/categories/5")}> العناية بالمنطقة الحساسة </li>
                    <li onClick={(e) => navigate("/categories/5")}>العناية بالرموش</li>
                    <li onClick={(e) => navigate("/categories/5")}>العناية بالحواجب</li>
                    <li>العطور</li>
                  </ul>
                </div>
              </li>
              <li className="h">
                <a  onClick={(e) => navigate("/categories/5")}>الأدوية</a>
              </li>
              <li className="h">
                <a  onClick={(e) => navigate("/categories/5")}>الفيتامينات</a>
              </li>
              <li className="h" onClick={(e) => showLeftMenu(e)}>
                <a href="#">
                  المكياج والاكسسوارات
                  <AiFillCaretDown className="down-icon" />
                  <AiFillCaretUp className="up-icon" />
                </a>
                <div className="icon-left">
                  {" "}
                  <AiFillCaretLeft />
                </div>
                <div className="links-menu ">
                  <ul>
                    <li>الوجه</li>
                    <li>العيون</li>
                    <li>الحواجب</li>
                    <li>الشفاه</li>
                    <li>الباليت</li>
                    <li>مثبت المكياج</li>
                    <li>مزيل المكياج</li>
                    <li>فرش المكياج</li>
                    <li>الرموش</li>
                    <li>الاظافر</li>
                  </ul>
                </div>
              </li>
              <li className="h">
                <a href="#">منتجات حصريه</a>
              </li>
              <li className="h" onClick={(e) => showLeftMenu(e)}>
                <a href="#">
                  العدسات
                  <AiFillCaretDown className="down-icon" />
                  <AiFillCaretUp className="up-icon" />
                </a>
                <div className="icon-left">
                  {" "}
                  <AiFillCaretLeft />
                </div>
                <div className="links-menu ">
                  <ul>
                    <li>ليندا</li>
                    <li>نيولنس</li>
                    <li>AFLE</li>
                    <li>ديفا</li>
                    <li>لنس مي</li>
                  </ul>
                </div>
              </li>
              <li>
                <a onClick={(e) => navigate("/categories")}>جميع التصنيفات</a>
              </li>
              <div className="btn">
                <button
                  onClick={(e) => navigate("/account-profile")}
                  className="px-4 py-1 border text-sm text-white border-white rounded-lg flex flex-row  items-center gap-2"
                >
                  <CgProfile className=" text-white text-xl" />
                  <span>اهلا احمد ياسر</span>
                </button>
                <button
                  onClick={(e) => showCountry()}
                  className="px-4 py-1 border text-sm text-white border-white rounded-lg flex flex-row  items-center gap-2"
                >
                  <span>السعودية</span>
                </button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    {/* ========================================*/}
      <div
        className={`${showMenu ? "body" : ""}`}
        onClick={(e) => setShowMenu(!showMenu)}
      ></div>

      <div className="body-country" onClick={(e) => showCountry()}>
        {" "}
      </div>

      <div className="country">
        <div className="top-country">
          <p>الدولة</p>
          <p onClick={(e) => showCountry()}>
            {" "}
            <GiCancel />{" "}
          </p>
        </div>
        <div className="menu">
          <select name="" id="">
            <option value="">السعوديه</option>
            <option value="">مصر</option>
            <option value="">الولايات المتحدة</option>
          </select>
        </div>
        <div className="btns">
          <button onClick={(e) => showCountry()}>الغاء</button>
          <button className="save">حفظ</button>
        </div>
      </div>
    </header>
  );
}
