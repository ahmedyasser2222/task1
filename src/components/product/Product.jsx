import { useEffect, useState } from 'react';
import './product.css';
import {BsWhatsapp, BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {TbFileDescription} from "react-icons/tb"
function Product(props) {
      const [count ,setCount]=useState(1)
      const [desc , setDesc]=useState("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed recusandae aspernatur explicabo, possimus ullam nobis optio quibusdam eius aperiam veniam nisi doloribus, unde ut repudiandae officia sapiente? Ipsa, excepturi. Repellendus, totam perspiciatis aperiam beatae officia dignissimos eum suscipit accusamus praesentium neque tempora, veritatis ut in dicta consequatur rem quae qui facilis explicabo commodi. Ullam, quasi? Ad cupiditate saepe ipsa soluta id quaerat consequuntur, voluptatum asperiores pariatur mollitia porro quos modi necessitatibus ullam debitis libero eveniet tempora consequatur deleniti iure, ex omnis facilis ipsum. Nostrum sit officiis molestiae quaerat id inventore fugit, provident quidem aspernatur nobis nemo veniam reiciendis autem nam.")
      useEffect(()=>{
            window.screenTop=0
      },[])
    return (
        <div className='con-product'>
             <div className="m-con"> 
                    <div className="product">
                          <div className="flex-product">
                                <div className="img-prod">
                                     <img src="https://media.zid.store/thumbs/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/18de9670-aad3-4665-ab09-9cec159bdf5e-thumbnail-770x770-70.jpg"/>
                                </div>
                                <div className="detals-prod">
                                         <div className="title-prod">
                                               <h2>كلينك -كريم مرطب للبشرة
                                                 الجافة الى الجافة المختلطة 1,2- 125 مل </h2>
                                         </div>
                                         <div className="desc-prod">
                                               <p>كلينك دراماتيكلي ديفيرينت لوشن بلس 
                                                  مرطب للوجه 125 مل :كلينك كريم مرطب للوجه مذهل يرطب
                                                 طوال اليوم، سهل
                                                  التطبيق وسريع الامتصاص ويبقي بشرتك رطبة لبشرة مشرقة وناعمة
                                                  وأكثر شباباً.كيفية الاستخدام:وزعيه على كامل الوجه ومنطقة 
                                                 الرقبة مرتين يومياً، ينصح باستخد <a href='#desc'>المزيد من المعلومات </a> 
                                                 </p>
                                         </div>
                                         <div className="price-prod">
                                                <p className='price'>198.00 ر.س</p>
                                                <p className="old-price"> <span> 310.01 ر.س </span>  وفر 37%  </p>
                                         </div>
                                         <div className="tabby">
                                               <div className="txt">
                                                  <p class="">أو قسمها على 4 دفعات شهرية بقيمة <strong>49.50 SAR</strong> <span>لمعرفه المزيد</span></p>
                                               </div>
                                               <div className="img-tabby">
                                                     <img src="https://media.zid.store/static/tabby2.svg" />
                                               </div>
                                         </div>
                                         <div className='id-prod'>
                                            <p>رمز المنتج</p>
                                            <span>020714598907</span>
                                         </div>
                                         <div className='id-prod'>
                                            <p> الكمية</p>
                                            <div className="count">
                                                <span className='b'  onClick={e=>setCount(count+1)}>+</span>
                                                <span >{count}</span>
                                                <span className='b' onClick={e=>{
                                                      if(count <= 1){
                                                            return setCount(1)
                                                      }
                                                      setCount(count-1)
                                                }}>-</span>
                                            </div>
                                         </div>
                                         <div className="add-cart">
                                               <button>اضف الي السلة</button>
                                         </div>
                                         <div className='id-prod'>
                                            <p> شارك المنتج</p>
                                             <div className="social">
                                                  <BsFacebook />
                                                  <AiFillTwitterCircle />
                                                  <BsWhatsapp />
                                             </div>
                                         </div>
                                </div>
                          </div>
                          <div className="end-prod">
                                 <div className="desc-prod">
                                        <div className="icon">
                                             <TbFileDescription />
                                        </div>
                                        <div className="desc-txt">
                                               <h2 id='desc'>وصف المنتج</h2>
                                               <p className='txt'>
                                                <ul>
                                                {desc.split(',').map(e=>{
                                                return(
                                                      <li>{e}</li>
                                                )
                                               })}
                                                </ul>
                                               </p>
                                        </div>
                                 </div>
                          </div>
                    </div>
             </div>
        </div>
    );
}

export default Product;