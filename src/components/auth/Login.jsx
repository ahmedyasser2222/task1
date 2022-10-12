import { useState } from "react"
import { NavLink ,useNavigate } from "react-router-dom";
import "./register.css"
import {GiCancel} from 'react-icons/gi'

const Register = () => {
  const history = useNavigate();   
     const [user, setUser]=useState({
        username:"",
        email:"",
        password:""
     })
     const handelInput=(e)=>{
         let name =e.target.name 
         let value =e.target.value
         setUser({...user , [name]:value})
     }
    return (  
        <>
            <div className="con-register">
               <div className="register">
               <div className="error" style={{display:"flex" , justifyContent:"space-between",alignItems:"center"}}>
                      <div> عفوا <br/> رقم الجوال غير صحيح</div>
                      <div  onClick={e=>e.currentTarget.parentElement.style.visibility="hidden"}  >
                           <GiCancel style={{color:"black", fontSize:"large",cursor:"pointer"}}/>
                       </div>
                  </div>
                   <div className="top-txt">
                        <h2>تسجيل الدخول</h2>
                        <p>لتسجيل الدخول أضف رقم جوالك ادناه،<br/> وسيتم ارسال رسالة نصية للتحقق من الرقم المضاف ..</p>
                   </div>
                   <div className="input">
                      <input type="text" placeholder="5xxxxxx" />
                      <select name="" id="">
                        <option value="966">+966</option>
                        <option value="966">+971</option>
                        <option value="966">+965</option>
                        <option value="966">+968</option>
                        <option value="966">+973</option>
                        <option value="966">+974</option>
                        <option value="966">+20</option>
                      </select>
                   </div>
                   <div className="sub" >
                      <button>دخول</button>
                      <button class="buttonload" style={{display:'none'}}>
                        <i class=""></i>Loading
                      </button>
                   </div>
               </div>
           </div>
        </>
    );
}
 
export default Register;