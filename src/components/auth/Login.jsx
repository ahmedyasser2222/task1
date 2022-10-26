import { useState } from "react"
import { NavLink ,useNavigate } from "react-router-dom";
import "./register.css"
import {GiCancel} from 'react-icons/gi'
import axios from "axios"
import {API} from '../../API'
import {Spinner} from "flowbite-react"
import { useRef } from "react";
const Register = () => {
  const history = useNavigate(); 
     const refError=useRef()
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
     const [num , setNum]=useState('')
     const [codeNum , setCodeNum]=useState('996')

     const submit=async(e)=>{
      if(num === ""){
        refError.current.style.display="flex"
        refError.current.children[0].innerHTML="من فضلك <br/> ادخل رقم الجوال "
      }else{
        e.target.parentElement.children[1].style.display="block"
        e.target.style.display="none"
       try {
        const res =await axios.post(`${API}/api/OnlineStore/LoginPatientAsUser`,{mobile:codeNum+num})
        console.log(res.data)
        e.target.parentElement.children[1].style.display="node"
        e.target.style.display="block"
       } catch (error) {
        if(error.response.status === 400 ){
          console.log(error.response.data)
          //history('/check' , {state :{mobile:num , code:codeNum}})
          e.target.parentElement.children[1].style.display="none"
          e.target.style.display="block"
        }
      }
     // console.log(error.response)
     }
     }
    return (  
        <>
            <div className="con-register" onClick={e=>e.currentTarget.parentElement.children[1].style.display="block"}>
               <div className="register">
                  <div ref={refError}  className="error">
                      <div> عفوا <br/> رقم الجوال غير صحيح</div>
                      <div  onClick={e=>e.currentTarget.parentElement.style.display="none"}  >
                           <GiCancel style={{color:"black", fontSize:"large",cursor:"pointer"}}/>
                       </div>
                  </div>
                   <div className="top-txt">
                        <h2>تسجيل الدخول</h2>
                        <p>لتسجيل الدخول أضف رقم جوالك ادناه،<br/> وسيتم ارسال رسالة نصية للتحقق من الرقم المضاف ..</p>
                   </div>
                   <div className="input">
                      <input type={"number"} value={num} placeholder="5xxxxxx" onChange={e=>setNum(e.currentTarget.value)}/>
                      <select value={codeNum}  onChange={e=> setCodeNum(e.currentTarget.value)}>
                        <option value="966" >+966</option>
                        <option value="971" >+971</option>
                        <option value="965" >+965</option>
                        <option value="968" >+968</option>
                        <option value="973" >+973</option>
                        <option value="974" >+974</option>
                        <option value="20" >+20</option>
                      </select>
                   </div>
                   <div className="sub" >
                      <button onClick={e=>submit(e)}>دخول</button>
                      <button class="buttonload" disabled>
                       <Spinner
                        aria-label="Extra small spinner example"
                        size="md"
                      />
                      </button>
                   </div>
               </div>
           </div>
        </>
    );
}
 
export default Register;