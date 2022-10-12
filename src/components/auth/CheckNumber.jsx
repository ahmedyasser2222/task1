import { useEffect, useRef, useState } from 'react';
import './check.css';

function CheckNumber(props) {
    const num=useRef()
    const [numS ,setNumS]=useState("")
    useEffect(()=>{
       // num.current.children[0].focus()
    })
        const interNum=(e , i)=>{
          num.current.children[i+1].focus()
          setNumS(numS+e.target.value)
        }

    return (
        <div className='check-con' >
              <div className="m-con">
                   <div className="check">
                         <div>
                         <p className='p1'>تأكيد رقم الجوال</p>
                         <p className='p2'>تم ارسال رسالة نصيةبرمزالتحقق للرثم  <span>+201089****85</span></p>
                         <div className="numbers" ref={num} dir="ltr" >
                              <input type={"number"} onChange={e=>interNum(e,0)} min={1} max={1}/>
                              <input type={"number"} onChange={e=>interNum(e,1)} min={1} max={1}/>
                              <input type={"number"} onChange={e=>interNum(e,2)} min={1} max={1}/>
                              <input type={"number"} onChange={e=>interNum(e,2)} min={1} max={1}/>
                         </div>
                         <div className="btn-inter">
                               <button>دخول</button>
                         </div>
                         </div>
                   </div>
              </div>
        </div>
    );
}

export default CheckNumber;