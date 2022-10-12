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
                   <form className="u">
                   <input type="text" placeholder="الاسم بالكامل" required min={3}/>
                   <input type="email" placeholder="البريد الالكتروني" required/>

                   <div className="input">
                      <input type="text" value={"012112930"} disabled style={{backgroundColor:"#F8D7DA"}} />
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