import React from 'react'
import EmptyCart from '../components/EmptyCart';

export default function Cart(props) {
  const {products} = props; 

  if(!products){
    return <EmptyCart />
  }
  return (
    <div>Cart</div>
  )
}
