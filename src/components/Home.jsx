import React, { useEffect, useState } from 'react'
import Searchbox from './Searchbox'
import'./home.css'
import Catlouge from './Catlouge'
import { useDispatch, useSelector } from 'react-redux';
import { getproperty } from '../redux/userSlice/userSlice';


const Home = () => {
  const dispatch=useDispatch();
  const[data,setData]=useState({});
  const[dt,setDt]=useState({});

  
  const obj=useSelector((state)=>(state.user.property));


  useEffect(()=>{
     dispatch(getproperty());
  },[])


 useEffect(()=>{
  setData(obj);
  setDt(obj);
},[obj])
useEffect(()=>{
 console.log(data);
 },[data])


  return (
    <div className='home'>

    <Searchbox dt= {dt} setData = {setData} data={data}/>
    <Catlouge data={data}  />
    </div>
  )
}

export default Home