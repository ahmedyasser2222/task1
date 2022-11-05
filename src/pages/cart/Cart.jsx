import './cart.css'
import EmptyCart from '../../components/cart/EmptyCart';
import {GiCancel} from "react-icons/gi"
import { useNavigate } from 'react-router-dom';
import {Products} from "../../data/products"
import { useState , useEffect } from 'react';
import { Spinner } from 'flowbite-react';
import {AiOutlineArrowLeft} from "react-icons/ai"

export default function Cart(props) {
  document.title="سلة المشتريات | صيدلية لي مور | LEMURE PHARMACIE"
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
                                  <p className="tabby" style={{cursor:"pointer"}} onClick={e=>{
                                   e.currentTarget.parentElement.children[2].classList.toggle("show")
                                   e.currentTarget.parentElement.children[3].classList.toggle("show")
                                  }}>
                                     <img src="https://media.zid.store/static/tabby2.svg"/>
                                  </p>
                                  <div className="body-cart " onClick={e=>{
                                   e.currentTarget.parentElement.children[2].classList.toggle("show")
                                   e.currentTarget.parentElement.children[3].classList.toggle("show")
                                  }}></div>
                                  <div className="tabby-pay " >
                                           <div className="top">
                                                <div className="img-tabby"> <img src="https://media.zid.store/static/tabby2.svg" alt="tabby" /> </div>
                                                 <div className="close" 
                                                 onClick={e=>{
                                                        e.currentTarget.parentElement.parentElement.parentElement.children[2].classList.toggle("show")
                                                        e.currentTarget.parentElement.parentElement.classList.toggle("show")
                                                    }}
                                                 ></div>
                                           </div>
                                           <h2>قسّمها على 4 دفعات بدون فوائد بقيمة <span>{23.00}</span> SAR. </h2>
                                           <p>اشترِ ما تحب، وقسّم المبلغ. بدون رسوم.</p>
                                           <div className="circal">
                                                 <div className="cir1 cir">
                                                        <div className="s1"></div>
                                                        <div className="s2"></div>
                                                        <div className="s3"></div>
                                                        <div className="s4"></div>
                                                 </div>
                                                 <div className="line">
                                                        <div></div>
                                                 </div>
                                                 <div className="cir2 cir">
                                                        <div className="s1"></div>
                                                        <div className="s2"></div>
                                                        <div className="s3"></div>
                                                        <div className="s4"></div>
                                                 </div>
                                                 <div className="line">
                                                        <div></div>
                                                 </div>
                                                 <div className="cir3 cir">
                                                        <div className="s1"></div>
                                                        <div className="s2"></div>
                                                        <div className="s3"></div>
                                                        <div className="s4"></div>
                                                 </div>
                                                 <div className="line">
                                                        <div></div>
                                                 </div>
                                                 <div className="cir4 cir">
                                                        <div className="s1"></div>
                                                        <div className="s2"></div>
                                                        <div className="s3"></div>
                                                        <div className="s4"></div>
                                                 </div>
                                           </div>
                                           <div className="price-cir">
                                                  <div>
                                                        <strong>23.30 SAR</strong>
                                                        <p>اليوم</p>
                                                  </div>
                                                  <div>
                                                         <strong>23.30 SAR</strong>
                                                         <p>بعد شهر</p>
                                                  </div>
                                                  <div>
                                                         <strong>23.30 SAR</strong>
                                                         <p>بعد شهرين</p>
                                                  </div>
                                                  <div>
                                                         <strong>23.30 SAR</strong>
                                                         <p>بعد ٣ أشهر</p>
                                                  </div>
                                           </div>
                                           <div className="delets-tabby">
                                                   <h3>طريقة الاستخدام</h3>
                                                   <ul>
                                                        <li> 
                                                               <div className='list-num'>1</div>
                                                               <div className="txt">اختر </div>
                                                               <div className='img'> <img src="https://media.zid.store/static/tabby2.svg" alt="tabby" /> </div>
                                                               <div className='txt'>قبل إتمام عملية الشراء.</div>
                                                        </li>
                                                        <li> 
                                                               <div className='list-num'>2</div>
                                                               <div className='txt'>أدخل بياناتك و بيانات البطاقة البنكية أو البطاقة الائتمانية.</div>
                                                        </li>
                                                        <li>
                                                               <div className="list-num">3</div>
                                                               <div className="txt">قسّم مشترياتك على 4 دفعات شهرية.</div>
                                                        </li>
                                                        <li>
                                                               <div className="list-num">4</div>
                                                               <div className="txt">سنقوم بإرسال رسالة SMS على هاتفك لتذكيرك بموعد الدفعة القادمة.</div>
                                                        </li>
                                                   </ul>
                                           </div>
                                           <div >
                                                  <p onClick={e=>history('/')} style={{color:"blue" , cursor:"pointer"}}> تابع التسوق <AiOutlineArrowLeft style={{display:"inline" , color:"blue"}} /> </p>
                                           </div>
                                           <hr style={{height:"1px" , backgroundColor:"#e6e5e9" , margin:"15px 0"}} />
                                           <div className="pay-way">
                                                 <div>
                                                        <p>طرق الدفع المدعومة</p>
                                                 </div>
                                                 <div className='img-pay'>
                                                         <div className="img">
                                                               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png" alt="master card" />
                                                         </div>
                                                         <div className="img">
                                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Former_Visa_%28company%29_logo.svg/1280px-Former_Visa_%28company%29_logo.svg.png" alt="visa" />
                                                         </div>
                                                         <div className="img">
                                                                <img src="https://files1.directapp.net/wp-content/uploads/2022/04/mada-39383jj883-1649631184.jpg" alt="made" />
                                                         </div>
                                                         <div className="img">
                                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/2560px-Apple_Pay_logo.svg.png" alt="apple pay" />
                                                         </div>
                                                 </div>
                                           </div>

                                  </div>
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

  