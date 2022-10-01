import React, { useEffect, useState ,Suspense} from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setId } from "./features/cart/orderSlice";
import NavBar from "./components/NavBar";
import FooterComp from "./components/Footer";
import { flowbiteTheme as theme } from "./theme";
import { Flowbite, Spinner } from "flowbite-react";
import Cart from "./pages/Cart";
import Register from "./components/Register";
import Login from "./components/Login.jsx"

function App() {
  const dispatch = useDispatch();
  const orderId = useSelector((state) => state.order.id);
  const [scroll , setScroll]=useState(false)
  const [scrollY , setScrollY]=useState(0)
  const [ currentPath ] = useState(window.location.pathname);
  //console.log("🚀 ~ file: App.js ~ line 14 ~ App ~ currentPath", currentPath);
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
    //  console.log("orderId is:", orderId);
    },
    [ orderId, currentPath, dispatch ]
  );
  return (
    <Suspense
    fallback={
      <div className="flex items-center justify-center">
        <Spinner size="lg" /> Loading..
      </div>
    }
  >
    <Flowbite theme={{ theme }}>
    <NavBar  scrollY={scrollY} scroll={scroll}/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
    <FooterComp />
      </Flowbite>
    </Suspense>
  );
}

export default App;
