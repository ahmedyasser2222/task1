import './address.css';
import {AiFillCaretDown , AiFillCaretUp ,AiOutlineSearch} from "react-icons/ai"

function Address(props) {
    return (
        <div className='con-address'>
             <div className="m-con">
                   <div className="address0">
                   <div className="head-address">
                         <p>إضافة عنوان جديد</p>
                   </div>
                   <hr />
                   <div className="address">
                         <div className="inputs " >
                                <div className="input" >
                                   <label htmlFor="country">الدولة</label>
                                   <div className="form" id='country'onClick={e=>{
                                    e.currentTarget.classList.toggle("shwo-icon")
                                    e.currentTarget.parentElement.classList.toggle("shwo-icon")
                                   }}>
                                        <p>السعودية</p>
                                        <p > 
                                            <AiFillCaretUp className='up'/>
                                            <AiFillCaretDown  className='down'/> 
                                       </p>
                                   </div>
                                   <div className="menu">
                                          <div className="searchs">
                                                <div className="search"> <AiOutlineSearch /> </div>
                                                <input type="search"/>
                                          </div>
                                          <ul>
                                              <li>السعودية</li>
                                              <li>الكويت</li>
                                              <li>عمان</li>
                                              <li>البحرين</li>
                                          </ul>
                                   </div>
                                </div>
                                <div className="input">
                                   <label htmlFor="city">المدينة</label>
                                   <div className="form" id='city'onClick={e=>{
                                    e.currentTarget.classList.toggle("shwo-icon")
                                    e.currentTarget.parentElement.classList.toggle("shwo-icon")
                                   }}>
                                      <p>السعودية</p>
                                      <p > 
                                            <AiFillCaretUp className='up'/>
                                            <AiFillCaretDown  className='down'/> 
                                       </p>
                                   </div>
                                   <div className="menu">
                                          <div className="searchs">
                                                <div className="search"> <AiOutlineSearch /> </div>
                                                <input type="search"/>
                                          </div>
                                          <ul>
                                              <li>السعودية</li>
                                              <li>الكويت</li>
                                              <li>عمان</li>
                                              <li>البحرين</li>
                                          </ul>
                                   </div>
                                </div>
                                <div className="input" >
                                   <label htmlFor="streat">الشارع</label>
                                   <div className="form-txt" id='streat'>
                                       <input type="text" name="" id="" />  
                                   </div>
                                </div>
                                <div className="input" >
                                   <label htmlFor="countryside">الحي</label>
                                   <div className="form-txt" id='countryside'>
                                      <input type="text" name="" id="" />
                                   </div>
                                </div>
                         </div>
                         <div className="btn">
                            <button className="cancel">الغاء</button>
                            <button className="save">حفظ</button>
                         </div>
                   </div>
                   </div>
             </div>
        </div>
    );
}

export default Address;