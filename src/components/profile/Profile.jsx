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
import { useEffect } from 'react';

function Profile(props) {
    document.title="الملف الشخصي | صيدلية لي مور | LEMURE PHARMACIE"
    const cards=useRef()
    const conCard=useRef()
    const deletCon=useRef()
    const notify=useRef()
    const history=useNavigate()
    const [userConst , setUserConst]=useState({
        name:"احمد ياسر",
        email:"ah012@gmail.com" ,
        phone:"012",
        news:true
         })
    const [user , setUser]=useState({
        name:"احمد ياسر",
        email:"ah012@gmail.com" ,
        phone:"012",
        news:true
         })         
    const objectEqual=(obj1,obj2)=>{
        const entries1 = Object.entries(obj1);
        const entries2 = Object.entries(obj2);
        if (entries1.length !== entries2.length) {
          return false;
        }
        for (let i = 0; i < entries1.length; ++i) {
          if (entries1[i][0] !== entries2[i][0]) {
            return false;
          }
          if (entries1[i][1].toString() !== entries2[i][1].toString().trim()) {
            return false;
          }
        }
        return true;
    }    
    const handelChange=(e)=>{
            setUser({...user , [e.target.name]:e.target.value})
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
        setUser({...user , news:e.target.checked})
     }
     const update=async (e)=>{
        setUserConst({...user})
        e.target.classList.add("btn-loading")
        document.querySelectorAll('.con-profile input')[0].disabled=true
        document.querySelectorAll('.con-profile input')[2].disabled=true
        document.querySelectorAll('.con-profile input')[3].disabled=true 
        
        
        notify.current.classList.add("show")
     }
     
     useEffect(()=>{
        document.title="الملف الشخصي | صيدلية لي مور | LEMURE PHARMACIE"

    },[])

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
                                <div className="notifiaction" ref={notify}>
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
                                          <input type="text" name="" id="phone" disabled  style={{backgroundColor:"#ddd"}} value={"0109963810"}/>
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
                                        <div className="sub  " style={{backgroundColor:`${objectEqual(userConst , user) ? "#ddd" : ""}` }}>
                                            <button onClick={e=>update(e)} disabled={objectEqual(userConst , user)} style={{cursor :`${objectEqual(userConst , user) ? "" : "pointer"}`}} >
                                                حفظ 
                                               <TbLoader   className='loading'/>
                                             </button>
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
                                             <button >نعم</button>
                                             <button onClick={e=>confirmDeleteAccount()}>لا</button>
                                        </div>
                                   </div>
                                </div>
                                <div className="logout">
                                    <button onClick={e=>logout()}>تسجيل الخروج</button>
                                </div>
                                <div className='mazed'>
                                     <div className='logo'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="90" viewBox="0 0 459 187"><defs><clipPath id="a"><path d="M27.7730357,66.9356439 C31.7355694,64.27949 37.0225393,64.7920929 40.4010048,68.16 C42.3150497,70.009709 43.3791047,72.568508 43.3410048,75.23 C43.3467892,80.0004081 39.9822057,84.1106867 35.3046706,85.0474327 C30.6271356,85.9841786 25.939217,83.4865332 24.1075404,79.0817872 C22.2758639,74.6770411 23.810502,69.5917979 27.7730357,66.9356439 Z M4.39144718,66.9793468 C8.32438556,64.3296051 13.5807777,64.8237289 16.9510048,68.16 C18.8697377,70.0073045 19.9376955,72.5667832 19.9010048,75.23 C19.901598,79.9722711 16.5553074,84.055916 11.9054198,84.98741 C7.25553224,85.918904 2.59445994,83.4393432 0.768311983,79.0627785 C-1.05783597,74.6862137 0.458508794,69.6290885 4.39144718,66.9793468 Z"></path></clipPath><clipPath id="b"><path d="M4.42426192,1.6995674 C8.38288107,-0.960031908 13.6687383,-0.454120496 17.0510089,2.90807816 C18.9722994,4.75776989 20.0404797,7.32140256 20.0010089,9.98807816 C20.0067701,14.7571557 16.644003,18.8666606 11.9681,19.8047789 C7.2921971,20.7428971 2.60450889,18.248541 0.770246949,13.8463123 C-1.06401499,9.44408364 0.465642772,4.3591667 4.42426192,1.6995674 Z"></path></clipPath><clipPath id="c"><path d="M52.4343858,0.00865097554 C58.1817598,-0.0598157428 63.8305678,1.50409613 68.7243858,4.51865098 C73.548646,7.49565887 77.4936666,11.7029906 80.1543858,16.708651 C82.9579142,21.9325765 84.395765,27.7802953 84.3343858,33.708651 C84.4901213,39.5384274 83.0665465,45.3018321 80.2143858,50.388651 C77.622622,54.9053139 73.81017,58.5999265 69.2143858,61.048651 C64.5995338,63.5048993 59.4419112,64.7633592 54.2143858,64.708651 C49.9324648,64.699223 45.6851708,63.9411402 41.6643858,62.468651 C37.4642068,60.9319479 33.572885,58.6560835 30.1743858,55.748651 C27.8052326,58.6716407 24.7469543,60.9601951 21.2743858,62.408651 C17.5259959,63.9751583 13.4966447,64.757887 9.43438582,64.708651 C6.93698811,64.7745614 4.51707818,63.8382867 2.71438582,62.108651 C0.947606261,60.4705741 -0.0379553984,58.1575954 0.0043858183,55.748651 C-0.0728823097,53.4243947 0.87397908,51.1833676 2.59438582,49.618651 C4.48935211,47.987371 6.9366687,47.1429752 9.43438582,47.258651 C11.4514841,47.3820186 13.4606245,46.9127557 15.2143858,45.908651 C16.5434411,45.0085979 17.5519989,43.7093793 18.0943858,42.198651 C18.922094,39.8030983 19.6132048,37.3625089 20.1643858,34.888651 C20.9443858,31.508651 21.4910525,29.308651 21.8043858,28.288651 C24.2443858,19.328651 28.0777192,12.3753176 33.3043858,7.42865098 C38.4339554,2.499354 45.3225916,-0.172558214 52.4343858,0.00865097554 Z M44.5943858,21.068651 C42.5943858,23.2419843 40.8077192,26.678651 39.2343858,31.378651 C38.4302938,33.7174861 37.8379136,36.1238216 37.4643858,38.568651 C37.2883687,39.2097514 37.15145,39.8609502 37.0543858,40.518651 C36.9045523,41.3777576 36.6872121,42.2237125 36.4043858,43.048651 C40.7292695,46.4918997 46.0766663,48.3986688 51.6043858,48.468651 C55.5290695,48.6038823 59.3569899,47.2337015 62.3043858,44.638651 C65.1377192,42.0853176 66.5510525,38.4519843 66.5443858,33.738651 C66.6873049,29.5996483 65.3027239,25.5526853 62.6543858,22.368651 C60.119363,19.3745742 56.3554744,17.7025533 52.4343858,17.828651 C49.4745925,17.719161 46.6133665,18.9016065 44.5943858,21.068651 Z"></path></clipPath><clipPath id="d"><path d="M36.66,0 L36.66,39.13 L64.82,39.13 L64.82,56.57 L36.66,56.57 C36.66,64.97 34.7733333,71.33 31,75.65 C27.2266667,79.97 21.8433333,82.1333333 14.85,82.14 C9.79448505,82.0641678 4.7826971,81.190058 0,79.55 L3.42,64.23 C6.19433406,64.9690654 9.04135212,65.4016512 11.91,65.52 C14.34,65.52 16.11,64.85 17.2,63.52 C18.29,62.19 18.86,59.87 18.86,56.57 L18.86,0 L36.66,0 Z"></path></clipPath><clipPath id="e"><path d="M77.7542422,0 L77.7542422,56.57 L9.42424218,56.57 C6.92989013,56.6354609 4.51325144,55.6990584 2.71424218,53.97 C0.947462626,52.3319231 -0.0380990336,50.0189444 0.00424218318,47.61 C-0.0718565281,45.2839039 0.879002781,43.0420702 2.60424218,41.48 C4.49354752,39.8535865 6.934077,39.0126416 9.42424218,39.13 L59.9442422,39.13 L59.9442422,0 L77.7542422,0 Z"></path></clipPath><clipPath id="f"><path d="M41.65,4.11925129 C47.2259665,6.76737097 51.8696306,11.0414942 54.97,16.3792513 C58.187922,22.184472 59.7967093,28.7439052 59.63,35.3792513 L59.63,47.3792513 L71.53,47.4092513 L71.53,64.8492513 L0,64.8492513 L0,47.4092513 L41.83,47.4092513 L41.83,35.4092513 C41.83,29.4092513 39.4733333,24.8492513 34.76,21.7292513 C30.9974966,19.3197206 26.7237592,17.8232276 22.28,17.3592513 C20.5422438,17.1356037 18.7920865,17.0220438 17.04,17.0192513 L6.58,17.0192513 L6.58,0.019251291 L21.33,0.019251291 C28.3275433,-0.183601327 35.2785907,1.218923 41.65,4.11925129 Z"></path></clipPath><clipPath id="g"><path></path></clipPath><clipPath id="h"><path d="M78.53,0 C92.98,-0.0299362431 102.43,10.5300638 102.43,25.5300638 L102.43,64.9500638 L85.2,64.9500638 L85.2,29.9500638 C85.2,21.1900638 80.61,15.6400638 73.11,15.6400638 C65.32,15.6400638 59.76,21.6400638 59.76,30.6400638 L59.76,64.9200638 L42.53,64.9200638 L42.53,29.9200638 C42.53,21.1600638 37.95,15.6100638 30.53,15.6100638 C22.75,15.6100638 17.19,21.6100638 17.19,30.6100638 L17.19,64.8900638 L0,64.8900638 L0,1.64006376 L16.54,1.64006376 L16.54,9.00006376 C20.3,3.86006376 27.24,0 36,0 C44.76,0 52.12,4.00006376 56.29,10.7000638 C61.01,3.61006376 69.63,0 78.53,0 Z"></path></clipPath><clipPath id="i"><path d="M47.35,8.36761457 L47.35,1.62761457 L63.53,1.62761457 L63.53,63.2676146 L47.35,63.2676146 L47.35,55.0476146 C42.7314369,60.4163145 35.9500285,63.4327201 28.87,63.2676146 C12.14,63.2676146 0,49.3776146 0,31.7076146 C0,14.0376146 12.14,0.00761457417 28.73,0.00761457417 C35.8833698,-0.173997583 42.7325116,2.90112727 47.35,8.36761457 Z M31.84,14.8376146 C23.61,14.8376146 17.27,21.5776146 17.27,31.6976146 C17.27,41.8176146 23.61,48.5676146 31.84,48.5676146 C40.47,48.5676146 46.94,41.8276146 46.94,31.7076146 C46.94,21.5876146 40.47,14.8376146 31.84,14.8376146 Z"></path></clipPath><clipPath id="j"><path d="M55.69,0 L55.69,7.61 C55.6870219,10.3110131 54.6903806,12.916518 52.89,14.93 L24.44,46.67 L55.83,46.67 L55.83,61.94 L0,61.94 L0,52.87 C0,51.1134785 0.64847914,49.4187807 1.82,48.11 L31.25,15.11 L9.2,15.11 C4.8866561,15.11 1.39,11.6133439 1.39,7.3 L1.39,0 L55.69,0 Z"></path></clipPath><clipPath id="k"><path d="M62.2986746,30.9644629 C62.3315871,33.0982987 62.1978474,35.2314474 61.8986746,37.3444629 L17.2486746,37.3444629 C19.0186746,45.0844629 24.7186746,49.8344629 32.3186746,49.8344629 C38.8386746,49.8344629 43.3186746,47.2544629 44.8186746,42.7744629 L60.9786746,42.7744629 C58.5286746,54.3144629 48.4786746,63.6844629 31.3686746,63.6844629 C8.75867465,63.6844629 -7.05132535,41.3144629 3.17867465,16.6344629 C5.61967975,10.7376505 10.2193727,5.99488779 16.0386746,3.37446286 C40.2186746,-7.38553714 62.2986746,9.14446286 62.2986746,30.9644629 Z M31.9186746,14.0344629 C24.3086746,13.9844629 19.0386746,18.8744629 17.2486746,26.2544629 L45.4886746,26.2544629 C44.1386746,18.5144629 38.4286746,14.0344629 31.9186746,14.0344629 Z"></path></clipPath><clipPath id="l"><path d="M62.3286746,30.9644629 C62.3640928,33.0987018 62.2269799,35.2323127 61.9186746,37.3444629 L17.2486746,37.3444629 C19.0086746,45.0844629 24.7086746,49.8344629 32.3186746,49.8344629 C38.8386746,49.8344629 43.3186746,47.2544629 44.8086746,42.7744629 L60.9686746,42.7744629 C58.5286746,54.3144629 48.4786746,63.6844629 31.3686746,63.6844629 C8.75867465,63.6844629 -7.05132535,41.3144629 3.17867465,16.6344629 C5.62687631,10.7322232 10.2380638,5.98867426 16.0686746,3.37446286 C40.2386746,-7.38553714 62.3286746,9.14446286 62.3286746,30.9644629 Z M31.9086746,14.0344629 C24.3086746,13.9844629 19.0086746,18.8744629 17.2486746,26.2544629 L45.4886746,26.2544629 C44.1286746,18.5144629 38.4286746,14.0344629 31.9086746,14.0344629 Z"></path></clipPath><clipPath id="m"><path d="M64.49,0 L64.49,95.82 L48.04,95.82 L48.04,88.97 C43.3554617,94.4203015 36.4749601,97.4844182 29.29,97.32 C12.29,97.32 0,83.23 0,65.32 C0,47.41 12.31,33.13 29.15,33.13 C36.1049182,32.9488403 42.7961969,35.7946404 47.49,40.93 L47.49,0 L64.49,0 Z M32.3,48.18 C23.95,48.18 17.52,54.89 17.52,65.29 C17.52,75.69 23.95,82.4 32.3,82.4 C41.06,82.4 47.63,75.7 47.63,65.29 C47.63,54.88 41.06,48.18 32.3,48.18 Z"></path></clipPath><clipPath id="n"><path d="M25.14,0 C39.0244386,0 50.28,11.2555614 50.28,25.14 C50.28,39.0244386 39.0244386,50.28 25.14,50.28 C11.2555614,50.28 0,39.0244386 0,25.14 C0,11.2555614 11.2555614,0 25.14,0 Z"></path></clipPath></defs><g clip-path="url(#a)" transform="translate(269.179 27.648)"><polygon points="0 .5 43.342 .5 43.342 85.243 0 85.243 0 .5"></polygon></g><g clip-path="url(#b)" transform="translate(337.999)"><polygon points="0 0 20.002 0 20.002 20.001 0 20.001 0 0"></polygon></g><g clip-path="url(#c)" transform="translate(373.766 19.98)"><polygon points="0 0 84.346 0 84.346 64.712 0 64.712 0 0"></polygon></g><g clip-path="url(#d)" transform="translate(320.54 28.148)"><polygon points="0 0 64.82 0 64.82 82.14 0 82.14 0 0"></polygon></g><g clip-path="url(#e)" transform="translate(234.256 28.148)"><polygon points="0 0 77.754 0 77.754 56.573 0 56.573 0 0"></polygon></g><g clip-path="url(#f)" transform="translate(184.74 19.869)"><polygon points="0 0 71.53 0 71.53 64.849 0 64.849 0 0"></polygon></g><g clip-path="url(#g)" transform="translate(191.32 36.358)"><polygon points="0 .49 10.46 .49 10.46 .51 0 .51 0 .49" opacity="41%"></polygon></g><g clip-path="url(#h)" transform="translate(0 121.458)"><polygon points="0 0 102.43 0 102.43 64.95 0 64.95 0 0"></polygon></g><g clip-path="url(#i)" transform="translate(111.2 123.15)"><polygon points="0 0 63.53 0 63.53 63.274 0 63.274 0 0"></polygon></g><g clip-path="url(#j)" transform="translate(184 124.478)"><polygon points="0 0 55.83 0 55.83 61.94 0 61.94 0 0"></polygon></g><g clip-path="url(#k)" transform="translate(249.161 122.734)"><polygon points="0 0 62.304 0 62.304 63.684 0 63.684 0 0"></polygon></g><g clip-path="url(#l)" transform="translate(320.761 122.734)"><polygon points="0 0 62.334 0 62.334 63.684 0 63.684 0 0"></polygon></g><g clip-path="url(#m)" transform="translate(393.8 89.098)"><polygon points="0 0 64.49 0 64.49 97.326 0 97.326 0 0"></polygon></g><g clip-path="url(#n)" transform="translate(122.98 33.998)"><polygon fill="#1E9AD6" points="0 0 50.28 0 50.28 50.28 0 50.28 0 0"></polygon></g><g clip-path="url(#n)" transform="translate(61.1 33.998)"><polygon fill="#E91C48" points="0 0 50.28 0 50.28 50.28 0 50.28 0 0"></polygon></g><g clip-path="url(#n)" transform="translate(.64 33.998)"><polygon fill="#FFC908" points="0 0 50.28 0 50.28 50.28 0 50.28 0 0"></polygon></g></svg>
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
                               </div>
                               <div className="address-user" style={{display:"none"}}>
                                  <div className="left-top">
                                      <p> دليل العناوين</p>
                                   </div>
                                   <div className="add sub" >
                                      <button onClick={e=>history("/address")}>اضافه عنوان جديد + </button>
                                   </div>
                                   <div className="cards-address">
                                         { 1 ? 
                                            <>
                                              <div className="card-addres">
                                                <div>
                                                <p>الرئسي</p>
                                                <p>السعودية , جدة , الاول</p>
                                                </div>
                                                <p className='trash'><RiDeleteBin6Line /></p>
                                            </div>
                                            <div className="card-addres">
                                                <div>
                                                <p>الرئسي</p>
                                                <p>السعودية , جدة , الاول</p>
                                                </div>
                                                <p className='trash'><RiDeleteBin6Line /></p>
                                            </div>
                                            <div className="card-addres">
                                                <div>
                                                <p>الرئسي</p>
                                                <p>السعودية , جدة , الاول</p>
                                                </div>
                                                <p className='trash'><RiDeleteBin6Line /></p>
                                            </div>
                                            <div className="card-addres">
                                                <div>
                                                <p>الرئسي</p>
                                                <p>السعودية , جدة , الاول</p>
                                                </div>
                                                <p className='trash'><RiDeleteBin6Line /></p>
                                            </div>
                                            </>
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
                                        { 1 ? 
                                        <div div className="  order">
                                        <p>158642</p>
                                        <p>   قيد التوصيل </p>
                                        <p> 10/25/2022 | 14:25 </p>
                                        <p> 456 SAR</p>
                                      </div>
                                      : 
                                      <>
                                      <div div className="  order">
                                          <p><Skeleton  width={50}/></p>
                                          <p><Skeleton  width={50}/></p>                                          
                                          <p><Skeleton  width={50}/></p>
                                          <p><Skeleton  width={50}/></p>                                       
                                      </div>
                                      <div div className="  order">
                                          <p><Skeleton  width={50}/></p>
                                          <p><Skeleton  width={50}/></p>                                          
                                          <p><Skeleton  width={50}/></p>
                                          <p><Skeleton  width={50}/></p>                                       
                                      </div>
                                      </>
                                      
                                    }
                                   </div>
                               </div>

                        </div>
                  </div>
            </div>
        </div>
    );
}

export default Profile; 