import React from 'react';
import './signup.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
  from 'mdb-react-ui-kit';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup"
import {useDispatch} from "react-redux"
import { register } from '../redux/userSlice/userSlice';
import {toast} from "react-toastify"
const init = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  cpassword: "",
  phone: "",
}

function App() {
  const formSchema = Yup.object({
    fname: Yup.string().max(20, "Max 20 chars").min(3, "Min 3 chars required").required("First name is a required feild"),
    lname: Yup.string().max(20, "Max 20 chars").min(3, "Min 3 chars required").required("Last name is a required feild"),
    email:Yup.string().email("Not a valid mail").required("Email is a required feild"),
    password:Yup.string().min(6,"Password should be 6 charecters atleast").max(6,"Password should be 6 charecters atleast").required("Password is a required feild"),
    cpassword:Yup.string().oneOf([Yup.ref('password'), null], "Password and confirm password should be same"),
    phone:Yup.string().min(10,"Phone should be 10 numbers atleast").max(10,"Phone should be 10 numbers atleast").required("Phone is a required feild"),
  })
  const dispatch = useDispatch();
  const history = useHistory();
  const { values, errors, handleChange, handleSubmit, touched, handleBlur} = useFormik({
    initialValues: init,
    validationSchema:formSchema,
    onSubmit:(values)=>{
      const formData = values;
      console.log(values)
      dispatch(register({formData, toast, history}))
    }
  })
  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
            The best offer <br />
            <span style={{ color: 'hsl(218, 81%, 75%)' }}>for your business</span>
          </h1>

          <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>
              <form onSubmit={handleSubmit}>
              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' name='fname' value={values.fname} onBlur={handleBlur} onChange={handleChange}  />
                  <p className='err'>  {errors.fname&&touched.fname?errors.fname:null}</p>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text' name='lname' value={values.lname} onBlur={handleBlur} onChange={handleChange} />
                  <p className='err'>  {errors.lname&&touched.lname?errors.lname:null}</p>
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' name='email' value={values.email} onBlur={handleBlur} onChange={handleChange}  />
              <p className='err'>  {errors.email&&touched.email?errors.email:null}</p>

              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' name='password'  value={values.password} onBlur={handleBlur} onChange={handleChange} />
              <p className='err'>  {errors.password&&touched.password?errors.password:null}</p>

              <MDBInput wrapperClass='mb-4' label='Confirm password' id='form4' type='password' name='cpassword' value={values.cpassword} onBlur={handleBlur} onChange={handleChange}  />
              <p className='err'>  {errors.cpassword&&touched.cpassword?errors.cpassword:null}</p>

              <MDBInput wrapperClass='mb-4' label='Phone' id='form4' type='tel' name='phone' value={values.phone} onBlur={handleBlur} onChange={handleChange} />
              <p className='err'>  {errors.phone&&touched.phone?errors.phone:null}</p>


              <MDBBtn className='w-100 mb-4 btnn' size='md'>sign up</MDBBtn>
              </form>
              <p style={{ textAlign: "center" }}>Already Registered?</p>
              <Link to="/login">
                <MDBBtn className='w-100 mb-4 btnn' size='md'>Login</MDBBtn>
              </Link>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default App;