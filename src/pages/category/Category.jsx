import React from '../AllProducts/allProducts.css';
import Card  from '../../components/card/Card';
import {Products} from "../../data/products"


import CardSkeleton from '../../Skeleton/CardSkeleton';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';

function Category(props) {
   const history=useNavigate()
   const [query] =useSearchParams()
   const [rangePrice , setRangePrice]=useState({
      from_price:0 ,
      to_price : 0
   })

     const selectPrice=()=>{
        document.querySelector(".selet-price").classList.toggle("show")
        document.querySelector(".body").classList.toggle("show")
     }

      const [filter , setFilter]=useState({
            sort_by:query.get("sort_by"),
            order:query.get("order"),
            from_price:query.get("from_price"),
            to_price:query.get("to_price")
      })
      const handelChaneg=(e)=>{
            setFilter({...filter ,[e.target.name]:e.target.value})
      }
      const handelChanegSelectPrice=(e)=>{
            setRangePrice({...rangePrice ,[e.target.name]:e.target.value})
      }
      const deletePrice=()=>{
          document.querySelectorAll(".selet-price input")[0].value=""
          document.querySelectorAll(".selet-price input")[1].value=""
   
      }
      const saveRangePrice=()=>{
            setFilter({...filter , ...rangePrice})
            console.log(filter)

            selectPrice()
      }      
    return (
        <div className='con-all'>
             <div className="top">
                    <div className="m-con">
                          <div className="links-top">
                                <span onClick={e=>history('/')}>الصفحه الرئيسية</span>
                                <p>/  العناية بالبشرة </p>
                          </div>
                    </div>
             </div>
             <div className="category-name">
                    <div className="m-con">
                          <div className="cate-name">
                                <span>العناية بالبشرة</span>
                          </div>
                    </div>
             </div>
             <div className="m-con">
             <div className="body " onClick={e=>selectPrice()}></div>
                    <div className="filter cate">
                        <div className='filter-1'>
                            <div className="set-price">
                                    <p>تصفية النتائج</p>
                                    <p className='p2'onClick={e=>selectPrice()}>
                                        تصفية النتائج
                                    </p>
                                    <div className='selet-price'>
                                          <div className='top-selects'>
                                                 <div><p>السعر</p> </div>
                                                  <p className='delet' onClick={e=>selectPrice()}>×</p>
                                          </div>
                                          <div className="inputs">
                                                <div className="input">
                                                       <p>من</p>
                                                       <input type="number" name="from_price" value={rangePrice.from_price} onChange={handelChanegSelectPrice} />
                                                </div>
                                                <div className="input">
                                                       <p>الي </p>
                                                       <input type="number" name="to_price" value={rangePrice.to_price} onChange={handelChanegSelectPrice} />
                                                </div>
                                          </div>
                                          <div className="chek">
                                               <input type={"checkbox"} name="" id="" />
                                               <p>عرض التخفيضات فقط</p>
                                          </div>
                                          <div className="btns">
                                               <button onClick={e=>deletePrice()}>مسح</button>
                                               <button onClick={e=>saveRangePrice()}>حفظ</button>
                                          </div>
                                    </div>
                            </div>
                            <div className="filter-prod">
                                    <p> ترتيب حسب</p>
                                    <select name="sort_by"  onChange={handelChaneg}>
                                          <option value="created_at">الاحدث</option>
                                          <option value="popularity_order">الاكثر شعبية </option>
                                          <option value="price">الاقل سعر</option>
                                          <option value="price">الاعلي سعر</option>
                                    </select>
                            </div>
                        </div>
                        <div className="count">
                                <p> تم ايجاد 2456 منتج</p>
                        </div>
                    </div>
                    <div className="products">
                        {1 ? 
                        <><div className="product">
                               <Card  product={Products[0]}/>
                            </div>
                            <div className="product">
                               <Card  product={Products[0]}/>
                            </div>
                            <div className="product">
                               <Card  product={Products[0]}/>
                            </div>
                            <div className="product">
                               <Card  product={Products[0]}/>
                            </div>
                            <div className="product">
                               <Card  product={Products[0]}/>
                            </div>
                            <div className="product">
                               <Card  product={Products[0]}/>
                            </div>
                        </> :
                        <>
                        <div className="product">
                              <CardSkeleton />
                         </div> 
                         <div className="product">
                              <CardSkeleton />
                         </div> 
                         <div className="product">
                              <CardSkeleton />
                         </div> 
                         <div className="product">
                              <CardSkeleton />
                         </div> 
                        </>
                        }
                            
                                   
                            
                    </div>
                    <div className="pagnation">
                          <button >السابق</button>
                          <button>1</button>
                          <button>2</button>
                          <button>...</button>
                          <button>98</button>
                          <button>التالي</button>
                    </div>
             </div>
        </div>
    );
}

export default Category;