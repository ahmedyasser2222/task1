import {  useNavigate } from 'react-router-dom';
import '../style/card.css';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function card({data}) {
   
    return (
        <div className='card'>
              <div className="div-img">
                    {data.product_name? <img src={data.image_url} alt={data.product_name} /> : <Skeleton height={197} />}
              </div>
              <div className="detals">
                    <p className='title'>{data.product_name? data.product_name.length > 23 ? data.product_name.substring(0,23)+"..." : data.product_name : <Skeleton /> }</p>
                    <p className="price">{data.price ? data.price+" ر.س" : <Skeleton /> }</p>
                    <div className="old-price">
                         <p className='old-price-p'>{data.old_price ? data.old_price +"ر.س" : <Skeleton />} </p>
                         <p className="discount"> {data.old_price ? "وفر "+(100 -(data.price / data.old_price)*100).toString().substring(0,3)+"%" : <Skeleton /> }</p>
                    </div>
                    <div className="btn">
                        <button >اضف للسلة</button>
                    </div>
              </div>
        </div>
    );
}

export default card;