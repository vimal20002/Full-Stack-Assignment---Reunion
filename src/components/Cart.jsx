import React, { useState } from 'react'
import CartCard from './CartCard'
import './cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getfromcart } from '../redux/userSlice/userSlice';
import { useHistory } from 'react-router-dom';
import {toast} from "react-toastify"

const Cart = () => {
  const [data, setData] = useState([]);
  const {cart, isLogin} = useSelector((state)=>(state.user));
useEffect(()=>{
  setData(cart);
},[cart])
  const dispatch = useDispatch()
  const history=useHistory();

  useEffect(()=>{
    if(isLogin  || sessionStorage.getItem("user")){
      const formData = {email:JSON.parse(sessionStorage.getItem("user")).email};
    dispatch(getfromcart({formData,toast}))
  }
  else{
      history.push('/login');
    
    }
  },[])
  return (
    <div className="mn">    
    <div className='cart-main'>
      {
        data && data.map((e)=>{
          const item = e.item;
         return item.length&& <CartCard name={item[0]?.name} district={item[0]?.district} id={item[0]?._id} key={item[0]?._id}/>
        })
      }
    </div>
    </div>

  )
}

export default Cart