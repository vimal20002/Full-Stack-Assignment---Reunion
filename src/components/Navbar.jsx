import React, { useState } from 'react';
import "./navbar.css"
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,

  MDBCollapse,
} from 'mdb-react-ui-kit';
import logo from '../images/logo.png'
import top from '../images/top.jpg'
import avtar from '../images/avtar.jpg'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



export default function Navbar() {

  const [showBasic, setShowBasic] = useState(false);
  const {isLogin}=useSelector((state)=>(state.user))
 
    const handleLogout=()=>{
      if(sessionStorage.getItem("user")){
      sessionStorage.removeItem("user");
      }
      
      if(sessionStorage.getItem("token")){
        sessionStorage.removeItem("token");
      }
      window.location.reload();
    }

  return (
    <>
    <MDBNavbar expand='lg'  className='nv' fixed='top'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
        <Link to="/">
          <img src={logo} className='logo' alt="" />
          </Link>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' className='ham' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2  mb-lg-0 options'>
          <Link to="/">

            <MDBNavbarItem className='op'>
                Home
            </MDBNavbarItem>
            </Link>
            <Link to="/cart">

            <MDBNavbarItem className='op'>
              Cart
            </MDBNavbarItem>
            </Link>
            <Link to="/contact">

            <MDBNavbarItem className='op'>
              Contact us
            </MDBNavbarItem>
            </Link>
            <Link to="/about">

            <MDBNavbarItem className='op'>
              About Us
            </MDBNavbarItem>
            </Link>
           
          {  (isLogin || sessionStorage.getItem("user")||sessionStorage.getItem("token")) && <MDBNavbarItem > <img src={JSON.parse(sessionStorage.getItem("user"))?.imageUrl || avtar} alt="avtar" className='avtar'/></MDBNavbarItem>  }
            
        {(isLogin || sessionStorage.getItem("user")||sessionStorage.getItem("token")) ?  <MDBNavbarItem className='op' onClick={handleLogout}>Logout</MDBNavbarItem> : <Link  to='/login'><MDBNavbarItem className='op'>Login</MDBNavbarItem></Link>
        }           
           
          
         
           

            
          </MDBNavbarNav>

          
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    <img src={top} className='top' alt="" />
    </>
  );
}