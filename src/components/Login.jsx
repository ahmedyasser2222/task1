import { useState } from "react"
import { NavLink ,useNavigate } from "react-router-dom";
import "../style/register.css"

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
                   <div className="txt">
                       <h1 className="head">مرحبًا بعودتك</h1>
                       <p className="p">أدخل بيانات الاعتماد الخاصة بك لتسجيل الدخول</p>
                       <h5>او</h5>
                       <button onClick={e=>history("/register")}>تسجيل حساب جديد</button>
                   </div>
                   <div className="form">
                       <h1 className="head ">تسجيل</h1>
                       <form  >
                    
                            <div class="form-input">
                                <label for="email" class="form-label">عنوان البريد الالكترونى</label>
                                <input type={"email"} class="form-control" id="email" 
                                aria-describedby="emailHelp"
                                name="email" 
                                value={user.email}
                                onChange={handelInput}
                                />
                            </div>
                            <div class="form-input">
                                <label for="exampleInputPassword1" class="form-label">كلمة المرور</label>
                                <input type={"password"} class="form-control" id="exampleInputPassword1"
                                 name="password" 
                                 value={user.password}
                                 onChange={handelInput}
                                />
                            </div>
                            <div class="form-check">
                                <p className="forget-pass">نسيت كلمه المرور ؟</p>
                            </div>
                            <button type="submit" class="btn">دخول</button>
                        </form>
                   </div>
               </div>
           </div>
        </>
    );
}
 
export default Register;