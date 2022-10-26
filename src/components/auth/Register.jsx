import { useState } from "react"
import { useLocation,useNavigate } from "react-router-dom";
import "./register.css"
import {GiCancel} from 'react-icons/gi'
import { useEffect } from "react";

const Register = () => {
  const history = useNavigate(); 
  const {state}=useLocation()  
 
     const [user, setUser]=useState({
        username:"",
        email:"",
        password:""
     })
     const [num , setNum]=useState('')
     const [code , setCode]=useState('')

     const handelInput=(e)=>{
         let name =e.target.name 
         let value =e.target.value
         setUser({...user , [name]:value})
     }
     useEffect(()=>{
      setNum(state.mobile)
      setCode(state.code)
     },[])
    return (  
        <>
            <div className="con-register con-re">
               <div className="register">
               <div className="error" style={{display:"flex" , justifyContent:"space-between",alignItems:"center"}}>
                      <div> عفوا <br/> رقم الجوال غير صحيح</div>
                      <div  onClick={e=>e.currentTarget.parentElement.style.display="none"}  >
                           <GiCancel style={{color:"black", fontSize:"large",cursor:"pointer"}}/>
                       </div>
                  </div>
                   <div className="top-txt">
                        <h2>تسجيل حساب جديد</h2>
                        <p>لتسجيل الدخول أضف رقم جوالك ادناه،<br/> وسيتم ارسال رسالة نصية للتحقق من الرقم المضاف ..</p>
                   </div>
                   <form className="u" >
                   <input type="text" placeholder="الاسم بالكامل" required min={3} />
                   <input type="email" placeholder="البريد الالكتروني" required/>

                   <div className="input">
                      <input type="text" value={num} disabled style={{backgroundColor:"#F8D7DA"}} />
                      <select name="" id="" value={code}>
                        <option value="966">+966</option>
                        <option value="971">+971</option>
                        <option value="965">+965</option>
                        <option value="968">+968</option>
                        <option value="973">+973</option>
                        <option value="974">+974</option>
                        <option value="20">+20</option>
                      </select>
                   </div>
                   <input type="checkbox" id="c" className="chek-box" style={{fontSize:"0px" ,height:"0",width:"0",padding:"8px"}}/>
                   <label htmlFor="c">الاشتراك في النشره الاخبارية</label>
                   <div className="sub" >   
                      <input type={"submit"} className="btn-sub" value="سجل" />
                   </div>
                </form>

               </div>
           </div>
        </>
    );
}
 
export default Register;