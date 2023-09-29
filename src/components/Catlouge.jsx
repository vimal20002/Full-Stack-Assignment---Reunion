import React, { useState } from 'react'
import Card from './Card'
import './catlouge.css'
import { MDBBtn, MDBRow } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const Catlouge = ({data}) => {
    

   
  
  


  return (
<div className='mp'>
    {  sessionStorage.getItem("token") && <Link to='/addproperty'   ><MDBBtn color='info' className='my-3' id='bt' rounded>Add Property</MDBBtn></Link>  }
    <div className='mn'>
    <div className='main'>

        <h2>Top Properties</h2>
        <div className=' ctg'>

      {
      data && Array.from(data).map((e)=>{
         return <Card name={e?.name} id={e?._id} key={e?._id} price={e?.price} town={e?.town} type={e?.type} date={e?.date} imageLink={e?.imageUrls[0]}/>
        })
      }
     
      

        </div>
    </div>
    </div>
    </div>
  )
}

export default Catlouge
