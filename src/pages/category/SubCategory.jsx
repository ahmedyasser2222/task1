import '../AllProducts/allProducts.css';
import Card  from '../../components/card/Card';
import {Products} from "../../data/products"
import CardSkeleton from '../../Skeleton/CardSkeleton';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import Slider from 'react-slick';
import { useEffect } from 'react';

function SubCategory(props) {
   const history=useNavigate()
   const [query] =useSearchParams()
   const [rangePrice , setRangePrice]=useState({
      from_price:0 ,
      to_price : 0
   })
      const [subCate , setSubCate]=useState(false)
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
      function SampleNextArrow(props) {
            const { className, style, onClick } = props;
            return (
              <div
                className={className}
                style={{ ...style, display: "block",  backgroundColor:"#977ABA" , color:"white" ,borderRadius:"6pc" }}
                onClick={onClick}
              />
            );
      }
      function SamplePrevArrow(props) {
            const { className, style, onClick } = props;
            return (
              <div
                className={className}
                style={{ display: "block", backgroundColor:"#977ABA" , color:"#222" ,borderRadius:"6pc"  }}
                onClick={onClick}
              />
            );
      }
      var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 4,
            initialSlide: 4,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
      };  
    return (
        <div className='con-all'>
             <div className="top">
                    <div className="m-con">
                          <div className="links-top">
                                <span onClick={e=>history('/')}>???????????? ????????????????</span>
                                <p>/  ?????????????? ?????????????? </p>
                          </div>
                    </div>
             </div>
             <div className="category-name">
                    <div className="m-con">
                          <div className="cate-name">
                                <span>?????????????? ??????????????</span>
                          </div>
                    </div>
             </div>

             <div className="m-con">
             <div className="body " onClick={e=>selectPrice()}></div>
                    <div className={`sub-category `}>
                        <div className='tit'><p>??????????????????</p></div>
                        <div className="slider">
                        <Slider {...settings}  rtl="true" dots="false">
                        <div className='sub-card'>
                              <div className="card-img">
                              </div>
                              <div className='card-title'>??????????????</div>
                        </div>
                        <div className='sub-card' onClick={e=>history('/categories/5')}>
                              <div className="card-img">
                                      
                              </div>
                              <div className='card-title'>??????????????</div>
                        </div>
                        <div className='sub-card' onClick={e=>history('/categories/5')}>
                              <div className="card-img">
                                      
                              </div>
                              <div className='card-title'>??????????????</div>
                        </div>
                        <div className='sub-card' onClick={e=>history('/categories/5')}>
                              <div className="card-img">
                                      
                              </div>
                              <div className='card-title'>??????????????</div>
                        </div>
                        <div className='sub-card' onClick={e=>history('/categories/5')}>
                              <div className="card-img">
                                      
                              </div>
                              <div className='card-title'>??????????????</div>
                        </div>
                        <div className='sub-card' onClick={e=>history('/categories/5')}>
                              <div className="card-img">
                                      
                              </div>
                              <div className='card-title'>??????????????</div>
                        </div>
                        <div className='sub-card' onClick={e=>history('/categories/5')}>
                              <div className="card-img">
                                      
                              </div>
                              <div className='card-title'>??????????????</div>
                        </div>
                        </Slider>
                        </div>
                    </div>
                    <div className="filter cate">
                        <div className='filter-1'>
                            <div className="set-price">
                                    <p>?????????? ??????????????</p>
                                    <p className='p2'onClick={e=>selectPrice()}>
                                        ?????????? ??????????????
                                    </p>
                                    <div className='selet-price'>
                                          <div className='top-selects'>
                                                 <div><p>??????????</p> </div>
                                                  <p className='delet' onClick={e=>selectPrice()}>??</p>
                                          </div>
                                          <div className="inputs">
                                                <div className="input">
                                                       <p>????</p>
                                                       <input type="number" name="from_price" value={rangePrice.from_price} onChange={handelChanegSelectPrice} />
                                                </div>
                                                <div className="input">
                                                       <p>?????? </p>
                                                       <input type="number" name="to_price" value={rangePrice.to_price} onChange={handelChanegSelectPrice} />
                                                </div>
                                          </div>
                                          <div className="chek">
                                               <input type={"checkbox"} name="" id="" />
                                               <p>?????? ?????????????????? ??????</p>
                                          </div>
                                          <div className="btns">
                                               <button onClick={e=>deletePrice()}>??????</button>
                                               <button onClick={e=>saveRangePrice()}>??????</button>
                                          </div>
                                    </div>
                            </div>
                            <div className="filter-prod">
                                    <p> ?????????? ??????</p>
                                    <select name="sort_by"  onChange={handelChaneg}>
                                          <option value="created_at">????????????</option>
                                          <option value="popularity_order">???????????? ?????????? </option>
                                          <option value="price">?????????? ??????</option>
                                          <option value="price">???????????? ??????</option>
                                    </select>
                            </div>
                        </div>
                        <div className="count">
                                <p> ???? ?????????? 2456 ????????</p>
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
                          <button >????????????</button>
                          <button className='active'>1</button>
                          <button>2</button>
                          <button>...</button>
                          <button>98</button>
                          <button>????????????</button>
                    </div>
             </div>
        </div>
    );
}

export default SubCategory;