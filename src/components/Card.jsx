import { MDBBtn, MDBCard, MDBCardBody, MDBCardFooter, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol } from 'mdb-react-ui-kit'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { addtocart, deleteproperty } from '../redux/userSlice/userSlice';
import {toast} from "react-toastify"
const Card = ({name,id,price,town,date, type,imageLink}) => {



  const uri = sessionStorage.getItem("token")? `addproperty:${id}` : `property:${id}`;
   const {isLogin}=useSelector((state)=>(state.user))
   const history=useHistory();
   const dispatch = useDispatch();
   const handleDelete=(name)=>{
    const formData ={token:JSON.parse(sessionStorage.getItem("token")),name:name}
    dispatch(deleteproperty({formData, toast}))
   }
  const handleCart=(id)=>{
    if(!isLogin && (!sessionStorage.getItem("user")|| !sessionStorage.getItem("token"))){
      history.push('/login');
    }
    else{
      const obj = JSON.parse(sessionStorage.getItem("property")).filter((e)=>{
        console.log(e._id, id);
        return e._id === id;
      })
      console.log(obj)
      const formData = {item:obj, email:JSON.parse(sessionStorage.getItem("user")).email};
      dispatch(addtocart({formData, toast}))
    }
  }


  return (
    <div>
            <MDBCol>
            <MDBCard className='crd'>
          <MDBCardImage
            src={imageLink}
            alt='...'
            position='top'
            className='card-img'
          />
          <MDBCardBody>
            <MDBCardTitle>{name}</MDBCardTitle>
          </MDBCardBody>
          <MDBCardBody>
            <MDBCardTitle>₹ {price}</MDBCardTitle>
            <MDBCardText>{town}</MDBCardText>
            <MDBCardText>Type {type}</MDBCardText>
            <MDBCardText>Move In Available: {date}</MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <div className="btns">
              
           <Link to={ uri}  > <MDBBtn color='info' id='bt' rounded>{ sessionStorage.getItem("token")?"Edit" : "See More"}</MDBBtn>
           </Link>
           {
            sessionStorage.getItem("token") ? <MDBBtn color='danger' id='bt' rounded onClick={()=>{handleDelete(name)}}>Delete</MDBBtn>:
            <MDBBtn color='success' id='bt' rounded onClick={()=>{handleCart(id)}}>Add to Cart</MDBBtn>
           }
            </div>
          </MDBCardFooter>
        </MDBCard>
            </MDBCol>

    </div>
  )
}

export default Card
