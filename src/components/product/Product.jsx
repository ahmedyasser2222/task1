import { useEffect, useState } from 'react';
import './product.css';
import {BsWhatsapp, BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {TbFileDescription} from "react-icons/tb"
import Skeleton from 'react-loading-skeleton'
import { useParams } from 'react-router-dom';
import {API} from '../../API'
import axios from 'axios'
function Product(props) {
      const [count ,setCount]=useState(1)
      const {id} =useParams()
      const [product , setProduct]=useState()
      const [desc , setDesc]=useState("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed recusandae aspernatur explicabo, possimus ullam nobis optio quibusdam eius aperiam veniam nisi doloribus, unde ut repudiandae officia sapiente? Ipsa, excepturi. Repellendus, totam perspiciatis aperiam beatae officia dignissimos eum suscipit accusamus praesentium neque tempora, veritatis ut in dicta consequatur rem quae qui facilis explicabo commodi. Ullam, quasi? Ad cupiditate saepe ipsa soluta id quaerat consequuntur, voluptatum asperiores pariatur mollitia porro quos modi necessitatibus ullam debitis libero eveniet tempora consequatur deleniti iure, ex omnis facilis ipsum. Nostrum sit officiis molestiae quaerat id inventore fugit, provident quidem aspernatur nobis nemo veniam reiciendis autem nam.")
      useEffect(()=>{
            async function getProduct(){
             try {
              const res=await axios.get(`${API}/api/OnlineStore/GetItemStockInfo/${id}`) 
              console.log(res.data)
               setProduct({
                  id: 1,
                  product_name: "Washington Homeopathic Products Washington Homeopathic ",
                  description: "Displ transverse fx shaft of r fibula, 7thF",
                  price: 369,
                  old_price: 389,
                  product_code: "3686115964",
                  image_url: "https://media.zid.store/cdn-cgi/image/w=235,q=85,f=auto/https://media.zid.store/thumbs/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/6f08e930-b920-4365-93cf-6fddc16f323d-thumbnail-370x370-70.jpg",
                })   
            } catch (error) {
               console.log(error.response.data)
               setProduct({
                  id: 1,
                  product_name: "Washington Homeopathic Products Washington Homeopathic ",
                  description: "Displ transverse fx shaft of r fibula, 7thF",
                  price: 369,
                  old_price: 389,
                  product_code: "3686115964",
                  image_url: "https://media.zid.store/cdn-cgi/image/w=235,q=85,f=auto/https://media.zid.store/thumbs/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/6f08e930-b920-4365-93cf-6fddc16f323d-thumbnail-370x370-70.jpg",
                })
            }
      }
      getProduct()
      },[])
    return (
        <div className='con-product'>
             <div className="m-con"> 
             {  product ?
                  <div className="product">
                          <div className="flex-product">
                                <div className="img-prod">
                                     <img src={product.image_url}/>
                                </div>
                                <div className="detals-prod">
                                         <div className="title-prod">
                                               <h2>{product.product_name}</h2>
                                         </div>
                                         <div className="desc-prod">
                                               <p>{product.description}</p>
                                         </div>
                                         <div className="price-prod">
                                                <p className='price'>{product.price}</p>
                                                <p className="old-price"> <span> {product.old_price}</span>  وفر 37%  </p>
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

              :
                   <div className="product">
                          <div className="flex-product">
                                <div className="img-prod">
                                     <Skeleton  height={"100%"}/>
                                 </div>
                                <div className="detals-prod">
                                         <div className="title-prod">
                                               <Skeleton />
                                         </div>
                                         <div className="desc-prod" >
                                               <p style={{width:"100%"}}> <Skeleton height={50} width={'100%'}/> </p>
                                         </div>
                                         <div className="price-prod">
                                                <p className='price'> <Skeleton  width={100}/> </p>
                                                {/* <p className="old-price"> <Skeleton width={95}/> </p> */}
                                         </div>
                                         <div className="tabby" style={{border:"none"}}>
                                               <p style={{width:'100%'}}><Skeleton width={'100%'} height={'50px'} /></p>
                                         </div>
                                         <div className='id-prod'>
                                            <p>رمز المنتج</p>
                                            <span><Skeleton width={100}/></span>
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
                                         <div className="add-cart" >
                                               <button style={{backgroundColor:"transparent"}}> <Skeleton height={50}/> </button>
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
                                                <li> <Skeleton width={200}/> </li>
                                                <li> <Skeleton width={200}/> </li>
                                                <li> <Skeleton width={200}/> </li>
                                                <li> <Skeleton width={200}/> </li>
                                                <li> <Skeleton width={200}/> </li>
                                                <li> <Skeleton width={200}/> </li>
                                                </ul>
                                               </p>
                                        </div>
                                 </div>
                          </div>
                   </div>

             }
                    {/* <div className="product">
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
                    </div> */}
             </div>
        </div>
    );
}

export default Product;