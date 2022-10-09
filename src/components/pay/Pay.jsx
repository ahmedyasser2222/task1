import './pay.css';
import {GrCheckmark} from "react-icons/gr"
import { useState } from 'react';
import { useRef } from 'react';

function Pay(props) {
     const [num ,setNum]=useState(0)
     const pay1=useRef()
     const pay2=useRef()
 
      
     
    return (
        <div className='con-pay'>
               <div className="m-con">
                     <div className="pay">
                          <div className="list">
                                <div className="line"></div>
                                <ol>
                                    <li>
                                        <div className='num num1'><span style={{color:"white"}}><GrCheckmark /></span></div>
                                        <div className='s s1'>العنوان والتوصيل</div>
                                    </li>
                                    <li>
                                        <div className='num num-end num2'>2</div>
                                        <div className='s s2'>الدفع والتأكيد</div>
                                    </li>
                                </ol>
                          </div>
                          <div className="titile-sec">
                              <p>الدفع و التأكيد</p>
                          </div>
                          <div>
                              <p>طريقة الدفع  :</p>
                          </div>
                          <div className="pay-flex">
                                 <div className="pay-right">
                                           <div ref={pay1} className="pay1 pay ">
                                                  <div className="head-card">
                                                         <div className='radio'>
                                                              <input type={"radio"}  name="card" 
                                                              onClick={e=>{
                                                                 pay1.current.classList.add("show-card")
                                                                 pay2.current.classList.remove("show-card")
                                                              }}/>
                                                              <p>بطاقه مدي البنكية</p>
                                                         </div>
                                                         <div className="img-card">
                                                              <img src="https://media.zid.store/static/mada-circle.png" />
                                                         </div>
                                                  </div>
                                                  <div className='info-card'>
                                                          <div className="con-form">
                                                                <label htmlFor="name">الاسم على البطاقة</label>
                                                                <input type="text" id='name' />
                                                          </div>
                                                          <div className="con-form">
                                                                <label htmlFor="num">رقم البطاقة:</label>
                                                                <input type={"number"} id='num' className='count' />
                                                          </div>
                                                          <div className="end-form">
                                                                <div>
                                                                      <label htmlFor="cid">تاريخ انتهاء البطاقة:</label>
                                                                      <input type={"number"} id='cid' />
                                                                </div>
                                                                <div>
                                                                      <label htmlFor="cvv">الرمز الأمني (CVV):</label>
                                                                      <input type={"number"} id='cvv' />
                                                                </div>
                                                          </div>
                                                  </div>
                                           </div>
                                           <div ref={pay2} className="pay1 pay">
                                                  <div className="head-card">
                                                         <div className='radio' >
                                                              <input type={"radio"} name="card" 
                                                               onClick={e=>{
                                                                 pay2.current.classList.add("show-card")
                                                                 pay1.current.classList.remove("show-card")
                                                              } }/>
                                                              <p>بطاقه  ائتمانية</p>
                                                         </div>
                                                         <div className="img-card">
                                                              <img src="https://media.zid.store/static/visaMaster.png" />
                                                         </div>
                                                  </div>
                                                  <div className='info-card'>
                                                          <div className="con-form">
                                                                <label htmlFor="name">الاسم على البطاقة</label>
                                                                <input type="text" id='name' />
                                                          </div>
                                                          <div className="con-form">
                                                                <label htmlFor="num">رقم البطاقة:</label>
                                                                <input type={"number"} id='num' className='count' />
                                                          </div>
                                                          <div className="end-form">
                                                                <div>
                                                                      <label htmlFor="cid">تاريخ انتهاء البطاقة:</label>
                                                                      <input type={"number"} id='cid' />
                                                                </div>
                                                                <div>
                                                                      <label htmlFor="cvv">الرمز الأمني (CVV):</label>
                                                                      <input type={"number"} id='cvv' />
                                                                </div>
                                                          </div>
                                                  </div>
                                           </div>
                                            <div>
                                                 <p> المنتجات  :</p>
                                            </div>
                                           <div className="products">
                                               <div className="product">
                                                      <div className="name-prod">
                                                             <div className="img-prod">
                                                                     <img src="https://media.zid.store/thumbs/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/73924cf0-cc4a-4799-9299-7b3c6baa51af-thumbnail-370x370-70.jpg" alt="" />
                                                             </div>
                                                             <div className="name">
                                                                  <p>بيوتي سانيه ماسك الشعر الحريري 140 مل</p>
                                                             </div>
                                                      </div>
                                                      <div className="price-prod">
                                                           <p>90 SAR</p>
                                                      </div>
                                               </div>
                                               <div className="product">
                                                      <div className="name-prod">
                                                             <div className="img-prod">
                                                                     <img src="https://media.zid.store/thumbs/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/73924cf0-cc4a-4799-9299-7b3c6baa51af-thumbnail-370x370-70.jpg" alt="" />
                                                             </div>
                                                             <div className="name">
                                                                  <p>بيوتي سانيه ماسك الشعر الحريري 140 مل</p>
                                                             </div>
                                                      </div>
                                                      <div className="price-prod">
                                                           <p>90 SAR</p>
                                                      </div>
                                               </div>
                                           </div>
                                            <div>
                                                 <p> ملاحظاتك  :</p>
                                            </div>
                                            <div className="txt-arai">
                                                  <textarea placeholder='اذا عندك اي ملاحظة اكتبها هنا' />
                                            </div>
                                 </div>
                                 <div className="pay-left">
                                      <div>
                                         <p>تفاصيل الطلب:</p>
                                      </div>
                                      <div className="cards-left">
                                            <div className="card-left">
                                                  <p>المجموع غير شامل الضريبة</p>
                                                  <p>293.91 SAR</p>
                                            </div>
                                            <div className="card-left">
                                                  <p>المبلغ الخاضع للضريبة	</p>
                                                  <p>293.91 SAR</p>
                                            </div>
                                            <div className="card-left">
                                                  <p>ضريبة القيمة المضافة (15%)	</p>
                                                  <p>44.09 SAR</p>
                                            </div>
                                            <div className="card-left">
                                                  <p>مجموع المنتجات شامل ضريبة القيمة المضافة	</p>
                                                  <p>338.00 SAR</p>
                                            </div>
                                            <div className="card-left">
                                                  <p>التوصيل</p>
                                                  <p>35.00 SAR</p>
                                            </div>
                                            <div className="card-left">
                                                  <p>المجموع الكلي	</p>
                                                  <p>373.00 SAR</p>
                                            </div>
                                              <div className='tit'>
                                                 <p>تفاصيل الطلب:</p>
                                              </div>
                                              <div className="address-order">
                                                 السعودية , جدة , الاول , الرئيس
                                              </div>
                                              <div className='tit'>
                                                 <p> التوصيل بواسطة:</p>
                                              </div>
                                              <div className="address-order">
                                                     <div className="driver">
                                                          <div className="driver-img">
                                                               <img src="https://media.zid.store/static/default/icons/zid_smsa_3.png" alt="" />
                                                          </div>
                                                          <p>سمسا</p>
                                                    </div>  
                                              </div>
                                              <div className='send'>
                                                  <button>ارسال الطلب</button>
                                              </div>
                                      </div>
                                 </div>
                          </div>
                     </div>
               </div>
        </div>
    );
}

export default Pay;