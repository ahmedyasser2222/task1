import { useEffect, useRef, useState } from 'react';
import './check.css';

function CheckNumber(props) {
    const num=useRef()
    const [num1 , setNum1]=useState(" ")
    const [num2 , setNum2]=useState(" ")
    const [num3 , setNum3]=useState(" ")
    const [num4 , setNum4]=useState(" ")

    const [numS ,setNumS]=useState()
    /* useEffect(()=>{
       // num.current.children[0].focus()
    }) */
        const interNum=(e , i)=>{
            console.log(e.target.value.toString()[0])
            if(i === 0){
                setNum1(e.target.value.toString()[0])
                num.current.children[i+1].focus()
            }if(i === 1){
                setNum2(e.target.value.toString()[0])
                num.current.children[i+1].focus()
            }if(i === 2){
                setNum3(e.target.value.toString()[0])
                num.current.children[i+1].focus()
            }if(i === 3){
                setNum4(e.target.value.toString()[0])
            }
        }
        const submit=()=>{
            alert(num1+num2+num3+num4)
           ///= console.log("num1+num2+num3+num4")
        }

    return (
        <div className='check-con' >
              <div className="m-con">
                   <div className="check">
                         <div>
                         <p className='p1'>تأكيد رقم الجوال</p>
                         <p className='p2'>تم ارسال رسالة نصيةبرمزالتحقق للرثم  <span>+201089****85</span></p>
                         <div className="numbers" ref={num} dir="ltr" >
                              <input type={"number"} value={num1} onChange={e=>interNum(e,0)} min={1} max={1}/>
                              <input type={"number"} value={num2} onChange={e=>interNum(e,1)} min={1} max={1}/>
                              <input type={"number"} value={num3} onChange={e=>interNum(e,2)} min={1} max={1}/>
                              <input type={"number"} value={num4} onChange={e=>interNum(e,3)} min={1} max={1}/>
                         </div>
                         <div className="btn-inter" >
                               <button onClick={e=>submit()}>دخول</button>
                         </div>
                         </div>
                   </div>
              </div>
        </div>
    );
}

export default CheckNumber;