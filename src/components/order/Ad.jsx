import { useNavigate } from 'react-router-dom';
import './order.css';


function Ad(props) {
    const history=useNavigate()
    return (
        <div className='con-order'>
             <div className="m-con ">
                   <div className="order">
                   <div className="list">
                          <div className="line"></div>
                          <ol>
                              <li>
                                  <div className='num num1'><span>1</span></div>
                                  <div className='s'>العنوان والتوصيل</div>
                              </li>
                              <li>
                                   <div className='num num-end num2'>2</div>
                                   <div className='s'>الدفع والتأكيد</div>
                              </li>
                          </ol>
                   </div>
                   <div className="titile-sec">
                       <p>العنوان و التوصيل</p>
                   </div>
                   <div>
                       <p>اختر عنوانك:</p>
                   </div>
                   <div className="address">
                         <div className="addres">
                            <div> <input type={"radio"} checked name="s"/></div>
                            <div className='p1'>
                                <p>الدولة : </p>
                                <p>المدينة :</p>
                                <p>الحي : </p>
                                <p>الشارع : </p>
                            </div>
                            <div className="p2">
                                 <p>السعودية</p>
                                 <p>جدة</p>
                                 <p>الاول</p>
                                 <p>الرثيسي</p>
                            </div>
                            <div className="option" onClick={e=>e.currentTarget.children[3].classList.toggle("show-menu")}>
                                  <div></div>
                                  <div></div>
                                  <div></div>
                                  <ul>
                                    <li>تعديل </li>
                                    <li> حذف</li>
                                  </ul>
                            </div>
                         </div>
                         <div className="addres plus">
                            <button onClick={e=>history("/address")}>  + اضافة عنوان جديد</button>
                         </div>
                   </div>
                   <div className='charge-titile'>
                       <p>اختر احدي شركات الشحن:</p>
                   </div>   
                   <div className="address">
                         <div className="addres charge">
                            <div> <input type={"radio"} checked name="charge"/></div>
                            <div className='txt'>
                                     <div className='p10'>
                                         <div className="img-sam">
                                             <img src="https://media.zid.store/static/default/icons/zid_smsa_3.png" />
                                         </div>
                                        <div>
                                          <p ><span>سمسا</span> سعر الشحن 35 SAR</p>
                                        </div>
                                     </div>
                                     <div>
                                         <p>عملائنا الكرام الرجاء ملاحظة أن التوصيل من 5 الي 7 ايام عمل  لعملائنا خارج المملكة العربية السعودية يرجي كتابه العنوان باللغة الانجليزية </p>
                                     </div>
                            </div>
                         </div>
                        
                   </div>
                   <div className='btn'>
                        <button>التالي</button>
                   </div>
                   </div>
             </div>
        </div>
    );
}

export default Ad;