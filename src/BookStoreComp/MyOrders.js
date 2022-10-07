import React from 'react'
import MyOrderBook from './MyOrderBook'
import { useSelector } from 'react-redux'
export default function MyOrders() {
  const data = useSelector((state) => {
    return { numOfItems: state.cart.numOfItems, price: state.cart.price ,selectedBook:state.cart.id,orders:state.cart.orders};
  });
  console.log(data.orders)
  return (
    <div>
      {
        data.orders.map((item,index)=>{
          return <MyOrderBook index={item} key={index}/>
        })
      }
    </div>
  )
}
