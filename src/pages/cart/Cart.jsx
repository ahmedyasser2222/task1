import './cart.css'
import EmptyCart from '../../components/cart/EmptyCart';
import {GiCancel} from "react-icons/gi"
import { useNavigate } from 'react-router-dom';
import {Products} from "../../data/products"
import { useState , useEffect } from 'react';
import Skeleton from "react-loading-skeleton"
import { Spinner } from 'flowbite-react';

export default function Cart(props) {
  const history=useNavigate()
  
   const [productsCart , setProductsCart]=useState([])

   useEffect(()=>{
       setProductsCart([Products[0] , Products[1] ,Products[2] ])
   },[])
   
   const deletProduct=(e)=>{
        const cloneProducts=[...productsCart]
        const index=cloneProducts.indexOf(e)
        cloneProducts.splice( index , 1)
        setProductsCart(cloneProducts)
   }
    
   
  return (
    <div className='con-cart'>
      { productsCart ? 
            productsCart.length ? 
            <>
            <div className="top-cart">
              <div className="m-con">
              <p>سلة الشراء</p>
              </div>
      </div>
        <div className="m-con">
              <div className="cart-flex">
                     <div className="c-right">
                           <div className="title">
                                 المنتجات
                           </div>
                           <div className='head-cart'>
                                  <p className="p">المنتج</p>
                                  <p className="q">الكمية</p>
                                  <p className="pr">السعر</p>
                           </div>
                           <div className="prods">
                                  { productsCart ? 
                                    productsCart.map(product =>{
                                      return (
                                         <div className="prod">
                                                 <div className="delet" >
                                                  <GiCancel className="hide-icon"  onClick={e=>deletProduct(product)}/>
                                                  </div>
                                    <div className="name">
                                       <div className="img">
                                           <img src={product.image_url}/>
                                       </div>
                                       <div className="n" onClick={e=>history(`/product/${product.id}`)}>
                                          <p>{product.product_name.length < 40 ? product.product_name : product.product_name.substring(0,40)+"..." }</p>
                                       </div>
                                    </div>
                                    <div className="count">
                                         <span className='b'>+</span>
                                         <span >10</span>
                                         <span className='b'>-</span>
                                    </div>
                                    <div className="price">
                                          SAR {product.price}
                                        <span>SAR {product.old_price}</span>
                                    </div>
                                         </div>
                                      )
                                    } ) 
                                : <></>
                                  }
                           </div>
                     </div>
                     <div className="c-left">
                           <div className="title">
                          تفاصيل الفاتورة 
                           </div>
                           <div className='detels'>
                                  <p className="s1">الوصف</p>
                                  <p className="s2">القمية</p>
                           </div> 
                           <div className='recet'>
                                  <p className="s1">المجموع غير شامل الضريبة</p>
                                  <p className="s2">1040.00 SAR</p>
                           </div>
                           <div className='recet'>
                                  <p className="s1">المبلغ الخاضع للضريبة</p>
                                  <p className="s2">1040.00 SAR</p>
                           </div>
                           <div className='recet'>
                                  <p className="s1">ضريبة القيمة المضافة (15%)</p>
                                  <p className="s2">156.00 SAR</p>
                           </div>
                           <div className='recet'>
                                  <p className="s1">مجموع المنتجات شامل ضريبة القيمة المضافة</p>
                                  <p className="s2">1196.00 SAR</p>
                           </div>
                           <div className='recet'>
                                  <p className="s1">المجموع الكلي</p>
                                  <p className="s2 total-price">1196.00 SAR</p>
                           </div>
                           <div className='recet'>
                                  <p className="s1">أو قسمها على 4 دفعات شهرية بقيمة 299.00 
                                  SAR <span>لمعرفة المزيد</span></p>
                                  <p className="tabby">
                                     <img src="https://media.zid.store/static/tabby2.svg"/>
                                  </p>
                           </div>
                           <div className="copon">
                               <p>كوبون الخصم</p>
                               <div className="input">
                                 <input type="text" />
                                 <button>ارسال</button>
                               </div>
                           </div>
                           <div className="continu">
                               <button onClick={e=>history("/order")}>متابعه الشراء</button>
                           </div>
                           <div className="continu">
                               <button onClick={e=>history("/")} style={{backgroundColor:"white" ,color:"#977ABA"}}> العوده الي التسوق </button>
                           </div>
                     </div>
              </div>
        </div>
        </>
            :  <EmptyCart />
         : <div className="speiner">
               <Spinner
                  aria-label="Extra large spinner example"
                 size="xl"
                />
           </div>

                                 }
    </div>
  )
}

  