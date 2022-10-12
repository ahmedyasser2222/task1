import React, { useEffect, useState ,Suspense} from "react";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setId } from "./features/cart/orderSlice";
import NavBar from "./components/navbar/NavBar.jsx";
import FooterComp from "./components/Footer/Footer.jsx";
import { flowbiteTheme as theme } from "./theme";
import { Flowbite, Spinner } from "flowbite-react";
import Cart from "./pages/cart/Cart";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login.jsx"
import Profile from "./components/profile/Profile";
import Ad from "./components/order/Ad";
import Address from "./components/address/Address";
import Pay from "./components/pay/Pay";
import Product from "./components/product/Product";
import CheckNumber from "./components/auth/CheckNumber";
import AllPages from "./pages/AllPages/AllPages";
import AllCatrgory from "./pages/AllCategory/AllCatrgory";

function App() {
  const dispatch = useDispatch();
  const orderId = useSelector((state) => state.order.id);
  const [scroll , setScroll]=useState(false)
  const [scrollY , setScrollY]=useState(0)
  const [ currentPath ] = useState(window.location.pathname);
  
  window.addEventListener("scroll" , (e)=>{
    setScrollY(window.scrollY)
    if(scrollY > window.scrollY ) {
      setScroll(true)
    }else{
      setScroll(false)
    }
    
   })

  useEffect(
    () => {
      if (!orderId && currentPath !== "/") {
        dispatch(setId(currentPath.split("/")[1]));
      }
        setScrollY(window.scrollY)
        if(scrollY > window.scrollY ) {
          setScroll(true)
        }else{
          setScroll(false)
        }
        
    },
    [ orderId, currentPath, dispatch ]
  );
  return (
    <>
    <NavBar  scrollY={scrollY} scroll={scroll}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/check" element={<CheckNumber   />} />
        <Route path="/account-profile" element={<Profile />} />
        <Route path="/order" element={<Ad />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment" element={<Pay   />} />
        <Route path="/product/:id" element={<Product   />} />
        <Route path="/check" element={<CheckNumber   />} />
        <Route path="/products" element={<AllPages   />} />
        <Route path="/categories" element={<AllCatrgory   />} />



       
      </Routes>
    <FooterComp />
    </>
  );
}

export default App;
