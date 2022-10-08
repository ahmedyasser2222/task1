import './cart.css'
import EmptyCart from '../../components/cart/EmptyCart';
import {GiCancel} from "react-icons/gi"
import { useNavigate } from 'react-router-dom';
export default function Cart(props) {
   const history=useNavigate()
  const {products} = props; 
  if(products){
    return <EmptyCart />
  }
  return (
    <div className='con-cart'>
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
                                   <div className="prod">
                                       <div className="delet" >
                                          <GiCancel className="hide-icon" />
                                       </div>
                                       <div className="name">
                                          <div className="img">
                                              <img src="https://media.zid.store/thumbs/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/73924cf0-cc4a-4799-9299-7b3c6baa51af-thumbnail-370x370-70.jpg"/>
                                          </div>
                                          <div className="n">
                                             <p>بيوتي سانيه ماسك الشعر الحريري 140 مل</p>
                                          </div>
                                       </div>
                                       <div className="count">
                                            <span className='b'>+</span>
                                            <span >10</span>
                                            <span className='b'>-</span>
                                       </div>
                                       <div className="price">
                                             SAR 92
                                           <span>SAR 120</span>
                                       </div>
                                   </div>
                                   <div className="prod">
                                       <div className="delet" >
                                          <GiCancel className="hide-icon" />
                                       </div>
                                       <div className="name">
                                          <div className="img">
                                              <img src="https://media.zid.store/thumbs/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/73924cf0-cc4a-4799-9299-7b3c6baa51af-thumbnail-370x370-70.jpg"/>
                                          </div>
                                          <div className="n">
                                             <p>بيوتي سانيه ماسك الشعر الحريري 140 مل</p>
                                          </div>
                                       </div>
                                       <div className="count">
                                            <span className='b'>+</span>
                                            <span >10</span>
                                            <span className='b'>-</span>
                                       </div>
                                       <div className="price">
                                             SAR 92
                                           <span>SAR 120</span>
                                       </div>
                                   </div>
                                   <div className="prod">
                                       <div className="delet" >
                                          <GiCancel className="hide-icon" />
                                       </div>
                                       <div className="name">
                                          <div className="img">
                                              <img src="https://media.zid.store/thumbs/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/73924cf0-cc4a-4799-9299-7b3c6baa51af-thumbnail-370x370-70.jpg"/>
                                          </div>
                                          <div className="n">
                                             <p>بيوتي سانيه ماسك الشعر الحريري 140 مل</p>
                                          </div>
                                       </div>
                                       <div className="count">
                                            <span className='b'>+</span>
                                            <span >10</span>
                                            <span className='b'>-</span>
                                       </div>
                                       <div className="price">
                                             SAR 12500
                                           <span>SAR 120</span>
                                       </div>
                                   </div>
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
    </div>
  )
}
