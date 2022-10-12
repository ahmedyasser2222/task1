import './profile.css';
import {RiProfileLine} from "react-icons/ri"
import {BsBookHalf} from "react-icons/bs"
import {VscLock} from "react-icons/vsc"
import {HiDownload} from "react-icons/hi"
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {RiDeleteBin6Line} from "react-icons/ri"
import Skeleton from "react-loading-skeleton"
import {TbLoader} from "react-icons/tb"

function Profile(props) {
    const cards=useRef()
    const conCard=useRef()
    const deletCon=useRef()
    const history=useNavigate()
    const [save , setSave]=useState(true)
    const [userConst , setUserConst]=useState({
        name:"احمد ياسر",
        email:"ahmed" ,
        news:true
         })
    const [user , setUser]=useState({
         name:"احمد ياسر",
          email:"ah012@gmail.com",
          phone:"012",
          news:true
         })
    const handelChange=(e)=>{
             setUser({...user , [e.target.name]:e.target.value})
            if(userConst[e.target.name] === e.target.value.trim()){
                console.log("ok")
                setSave(true)
            }else{
                console.log("not - ok")
                setSave(false)
            }
         }
    const confirmDeleteAccount=()=>{
        deletCon.current.children[3].classList.toggle("show")
        deletCon.current.children[4].classList.toggle("show")
    }    

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
     const logout=()=>{
        history('')
     }
     const checkedIcon=(e)=>{
        console.log(e.target.checked)
        setUser({...user , news:e.target.checked})
        if(userConst.news === e.target.checked){
            setSave(true)
        }else{
            setSave(false)
        }
     }
    return (
        <div className='con-profile' >
            <div className="body-hide"></div>
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
                                <div className="notifiaction show">
                                      <p>تمت العملية بنجاح</p>
                                      <p className='cancel' onClick={e=>{e.currentTarget.parentElement.classList.remove("show")}}>×</p>
                                </div>
                                <div className="inputs"> 
                                     <div className="input">
                                          <label htmlFor="name">الاسم الكامل</label>
                                          {user.name ?
                                          <input type="text" name="name" id="name" value={user.name} onChange={e=>handelChange(e)}/>
                                          :
                                          <Skeleton height={41} />
                                        }
                                     </div>
                                     <div className="input">
                                          <label htmlFor="phone">رقم الجوال</label>
                                          {user.phone ?
                                          <input type="text" name="" id="phone" disabled style={{backgroundColor:"#ddd"}} value={"0109963810"}/>
                                          :
                                          <Skeleton height={41} />
                                        }
                                     </div>
                                     <div className="input">
                                          <label htmlFor="email">البريد الالكتروني</label>
                                          {user.email ?
                                          <input type="text" name="email" id="email" value={user.email} onChange={e=>handelChange(e)} />
                                         :
                                         <Skeleton height={41} />
                                        }
                                     </div>
                                </div>
                                <div className="save">
                                        <div className="check">
                                               <input type={"checkbox"} onClick={e=>checkedIcon(e)} checked={user.news}/>
                                               <label>الاشتراك في النشرةالاخبارية</label>
                                        </div>
                                        <div className="sub " style={{backgroundColor:`${save ? "#ddd" : ""}` }}>
                                            <button disabled={save} style={{cursor :`${save ? "" : "pointer"}`}} >حفظ 
                                            <TbLoader   className='loading'/> </button>
                                        </div>
                                </div>
                                <div className='delet' ref={deletCon}>
                                   <p>حذف الحساب </p>
                                   <hr />
                                   <button className='sub de' onClick={e=>confirmDeleteAccount()}>احذف الحساب</button>
                                   <div className="hof " onClick={e=>confirmDeleteAccount()}></div>
                                   <div className='con-delet'>
                                        <div className='div1'>
                                              <p>حذف الحساب</p>
                                              <button  className='cancel' onClick={e=>confirmDeleteAccount()}>×</button>
                                        </div>
                                        <div className='div2'>
                                              <p>هل أنت متأكد ؟</p>
                                        </div>
                                        <div className='div3'>
                                             <button>نعم</button>
                                             <button>لا</button>
                                        </div>
                                   </div>
                                </div>
                                <div className="logout">
                                    <button onClick={e=>logout()}>تسجيل الخروج</button>
                                </div>
                                <div className="app">
                                      <div className="app-txt">
                                           <p>بإمكانك متابعة حالة طلبك
                                             ومعرفة آخر التحديثات من خلال تطبيق مزيد
                                             </p>
                                      </div>
                                      <div className="app-btn">
                                            <a href='https://onelink.to/customer_profile' rel='external nofollow' target={"_blank"}>
                                                   <HiDownload  style={{display:"inline"}}/>
                                                   حمل التطبيق
                                            </a>
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
                                   <div className="cards-address">
                                         { 1 ? 
                                            <div className="card-addres">
                                                <div>
                                                <p>الرئسي</p>
                                                <p>السعودية , جدة , الاول</p>
                                                </div>
                                                <p className='trash'><RiDeleteBin6Line /></p>
                                            </div>
                                            :
                                            <div className="card-addres">
                                                <div>
                                                   <p> <Skeleton height={15} width={80} /> </p>
                                                   <p><Skeleton height={15} width={120}/> </p>
                                                </div>
                                            </div>

                                         }
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