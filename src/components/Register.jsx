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
                       <h1 className="head">مرحبا يا صديقي</h1>
                       <p className="p">أدخل بياناتك للتسجيل</p>
                       <h5>او</h5>
                       <button onClick={e=>history("/login")}>تسجيل الدخول</button>
                   </div>
                   <div className="form">
                       <h1 className="head ">تسجيل حساب جديد</h1>
                       <form  >
                           <div class="form-input">
                                <label for="name" class="form-label">اسم المستخدم</label>
                                <input 
                                type={"text"}  id="name" 
                                name="username" 
                                value={user.username}
                                onChange={handelInput}
                                />
                            </div>
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
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="" for="exampleCheck1">أوافق على الشروط والأحكام </label>
                            </div>
                            <button type="submit" class="btn">يسجل</button>
                        </form>
                   </div>
               </div>
           </div>
        </>
    );
}
 
export default Register;