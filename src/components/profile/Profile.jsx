import './profile.css';
import {RiProfileLine} from "react-icons/ri"
import {BsBookHalf} from "react-icons/bs"
import {VscLock} from "react-icons/vsc"
import {HiDownload} from "react-icons/hi"
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
function Profile(props) {
    const cards=useRef()
    const conCard=useRef()
    const history=useNavigate()

     const activeCrad=(e,index)=>{

        const Cards=cards.current.children
        const ConCards=conCard.current.children
        for (let index = 0; index < Cards.length; index++) {
            cards.current.children[index].classList.remove("active")
        }
        for (let index = 0; index < ConCards.length; index++) {
            conCard.current.children[index].style.display="none"
        }
        conCard.current.children[index].style.display="inline"
        e.currentTarget.classList.add("active")
     }

    return (
        <div className='con-profile' >
            <div className="m-con">
                  <div className="con-flex">
                        <div className="flex-right">
                              <div className="cs" ref={cards}>
                                    <div className="c active"  onClick={e=>activeCrad(e,0) }>
                                           <div className="div-icon">
                                                <RiProfileLine  className='icon'/>
                                           </div>
                                           <div className="detals">
                                                 <h2>المعلومات الشخصية</h2>
                                                 <p>معلومات التواصل الخاصه بك</p>
                                           </div>
                                    </div>
                                    <div className="c " onClick={e=>{activeCrad(e,1)}}>
                                           <div className="div-icon">
                                                <BsBookHalf  className='icon'/>
                                           </div>
                                           <div className="detals">
                                                 <h2> دليل العناوين</h2>
                                                 <p> من خلال دليل العنواين يمكنك اضافه وتعديل عناوينك المفضلة</p>
                                           </div>
                                    </div>
                                    <div className="c " onClick={e=>activeCrad(e,2)}>
                                           <div className="div-icon">
                                                <VscLock  className='icon'/>
                                           </div>
                                           <div className="detals">
                                                 <h2> الطلبات</h2>
                                                 <p> من خلال قائمة الطلبات يمكنك استعراض الطلبات السابقة والحالية</p>
                                           </div>
                                    </div>
                              </div>
                        </div>
                        <div className="flex-left" ref={conCard}>
                               <div className="info" >
                               <div className="left-top">
                                   <p>المعلومات الشخصية</p>
                                </div>
                                <div className="inputs"> 
                                     <div className="input">
                                          <label htmlFor="name">الاسم الكامل</label>
                                          <input type="text" name="" id="name" value={'احمد ياسر'}/>
                                     </div>
                                     <div className="input">
                                          <label htmlFor="phone">رقم الجوال</label>
                                          <input type="text" name="" id="phone" disabled style={{backgroundColor:"#ddd"}} value={"0109963810"}/>
                                     </div>
                                     <div className="input">
                                          <label htmlFor="email">البريد الالكتروني</label>
                                          <input type="text" name="" id="email" value={"ah01211293047@gmail.com"}/>
                                     </div>
                                </div>
                                <div className="save">
                                        <div className="check">
                                               <input type={"checkbox"}/>
                                               <label>الاشتراك في النشرةالاخبارية</label>
                                        </div>
                                        <div className="sub">
                                            <button>حفظ</button>
                                        </div>
                                </div>
                                <div className='delet'>
                                   <p>حذف الحساب </p>
                                   <hr />
                                   <button className='sub de'>احذف الحساب</button>
                                </div>
                                <div className="logout">
                                    <button>تسجيل الخروج</button>
                                </div>
                                <div className="app">
                                      <div className="app-txt">
                                           <p>بإمكانك متابعة حالة طلبك
                                             ومعرفة آخر التحديثات من خلال تطبيق مزيد
                                             </p>
                                      </div>
                                      <div className="app-btn">
                                            <button >
                                                   <HiDownload  style={{display:"inline"}}/>
                                                   حمل التطبيق
                                            </button>
                                      </div>
                                </div>
                               </div>
                               <div className="address" style={{display:"none"}}>
                                  <div className="left-top">
                                      <p> دليل العناوين</p>
                                   </div>
                                   <div className="add sub" >
                                      <button onClick={e=>history("/address")}>اضافه عنوان جديد + </button>
                                   </div>
                               </div>
                               <div className="con-orders" style={{display:"none"}}>
                                    <div className="left-top">
                                      <p> الطلبات</p>
                                   </div>
                                   <div className="orders">
                                       <div div className="left-top head-order">
                                          <p> رقم الطلب</p>
                                          <p> حاله الطلب</p>
                                          <p> تاريخ الطلب</p>
                                          <p> المجموع</p>
                                        </div>
                                   </div>
                               </div>

                        </div>
                  </div>
            </div>
        </div>
    );
}

export default Profile; 