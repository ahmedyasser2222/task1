import {  useNavigate } from 'react-router-dom';
import './card.css';
import Skeleton from "react-loading-skeleton";
import {increment} from "../../features/cart/cart"
import { useDispatch  } from 'react-redux';
import axios from 'axios'
import {API} from  '../../API'
function Card({product}) {
  const dispatch= useDispatch()
  const history=useNavigate()

    const sendToCart=async(product)=>{
      dispatch(increment(product.price))
      try {
       const res = await axios.post(`${API}/api/OnlineStore/AddItemStockToCart?stockId=${product.id}&qty=1`)
       console.log(res.data)     
      } catch (error) {
       console.log(error.response)     
      }
    }
    return (
        <div className='card' dir='rtl'>
              <div className="div-img">
                    <img src={product.image_url} alt={product.product_name}  /> 
              </div>
              <div className="detals">
                    <p className='title' onClick={e=>history(`/product/5`)}>{product.product_name.length > 23 ? product.product_name.substring(0,23)+"..." : product.product_name }</p>
                    <p className="price">{product.price+" ر.س" }</p>
                    <div className="old-price">
                         <p className='old-price-p'>{ product.old_price +"ر.س"} </p>
                         <p className="discount"> { "وفر "+(100 -(product.price / product.old_price)*100).toString().substring(0,3)+"%" }</p>
                    </div>
                    <div className="btn">
                        <button onClick={e=>sendToCart(product)}>اضف للسلة</button>
                    </div>
              </div>
        </div>
    );
}

export default Card;